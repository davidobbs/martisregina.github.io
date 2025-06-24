import { ConversationContext } from './nlu';

interface StoredConversation {
  context: ConversationContext;
  messages: Array<{
    id: string;
    text: string;
    isBot: boolean;
    timestamp: Date;
    intent?: string;
    confidence?: number;
  }>;
}

/**
 * Gerencia o armazenamento local das conversas
 */
export class ConversationStorage {
  private static readonly STORAGE_KEY = 'mra_chat_conversations';
  private static readonly MAX_CONVERSATIONS = 10;
  private static readonly MAX_MESSAGES_PER_CONVERSATION = 50;

  /**
   * Salva uma conversa no localStorage
   */
  static saveConversation(userId: string, conversation: StoredConversation): void {
    try {
      const conversations = this.getAllConversations();
      
      // Limitar número de mensagens
      conversation.messages = conversation.messages.slice(-this.MAX_MESSAGES_PER_CONVERSATION);
      
      conversations[userId] = conversation;
      
      // Manter apenas as últimas conversas
      const conversationEntries = Object.entries(conversations);
      if (conversationEntries.length > this.MAX_CONVERSATIONS) {
        const sortedByDate = conversationEntries.sort((a, b) => 
          new Date(b[1].context.lastInteraction).getTime() - new Date(a[1].context.lastInteraction).getTime()
        );
        
        const limitedConversations = Object.fromEntries(
          sortedByDate.slice(0, this.MAX_CONVERSATIONS)
        );
        
        localStorage.setItem(this.STORAGE_KEY, JSON.stringify(limitedConversations));
      } else {
        localStorage.setItem(this.STORAGE_KEY, JSON.stringify(conversations));
      }
    } catch (error) {
      console.warn('Erro ao salvar conversa:', error);
    }
  }

  /**
   * Carrega uma conversa específica
   */
  static loadConversation(userId: string): StoredConversation | null {
    try {
      const conversations = this.getAllConversations();
      const conversation = conversations[userId];
      
      if (conversation) {
        // Converter strings de data de volta para objetos Date
        conversation.context.lastInteraction = new Date(conversation.context.lastInteraction);
        conversation.messages = conversation.messages.map(msg => ({
          ...msg,
          timestamp: new Date(msg.timestamp)
        }));
        
        return conversation;
      }
      
      return null;
    } catch (error) {
      console.warn('Erro ao carregar conversa:', error);
      return null;
    }
  }

  /**
   * Obtém todas as conversas armazenadas
   */
  private static getAllConversations(): Record<string, StoredConversation> {
    try {
      const stored = localStorage.getItem(this.STORAGE_KEY);
      return stored ? JSON.parse(stored) : {};
    } catch (error) {
      console.warn('Erro ao acessar localStorage:', error);
      return {};
    }
  }

  /**
   * Remove conversas antigas (mais de 30 dias)
   */
  static cleanOldConversations(): void {
    try {
      const conversations = this.getAllConversations();
      const thirtyDaysAgo = new Date();
      thirtyDaysAgo.setDate(thirtyDaysAgo.getDate() - 30);

      const filteredConversations = Object.fromEntries(
        Object.entries(conversations).filter(([_, conversation]) => 
          new Date(conversation.context.lastInteraction) > thirtyDaysAgo
        )
      );

      localStorage.setItem(this.STORAGE_KEY, JSON.stringify(filteredConversations));
    } catch (error) {
      console.warn('Erro ao limpar conversas antigas:', error);
    }
  }

  /**
   * Gera um ID único para o usuário baseado em fingerprinting simples
   */
  static generateUserId(): string {
    // Tentar recuperar ID existente
    const existingId = localStorage.getItem('mra_chat_user_id');
    if (existingId) return existingId;

    // Gerar novo ID baseado em características do browser
    const fingerprint = [
      navigator.userAgent,
      navigator.language,
      screen.width,
      screen.height,
      new Date().getTimezoneOffset()
    ].join('|');

    const userId = 'user_' + btoa(fingerprint).replace(/[^a-zA-Z0-9]/g, '').substring(0, 16);
    
    try {
      localStorage.setItem('mra_chat_user_id', userId);
    } catch (error) {
      console.warn('Erro ao salvar ID do usuário:', error);
    }

    return userId;
  }

  /**
   * Obtém estatísticas da conversa para personalização
   */
  static getConversationStats(userId: string): {
    totalMessages: number;
    mostCommonIntents: string[];
    lastVisit: Date | null;
    returningUser: boolean;
  } {
    const conversation = this.loadConversation(userId);
    
    if (!conversation) {
      return {
        totalMessages: 0,
        mostCommonIntents: [],
        lastVisit: null,
        returningUser: false
      };
    }

    const intentCounts: Record<string, number> = {};
    conversation.context.previousIntents.forEach(intent => {
      intentCounts[intent] = (intentCounts[intent] || 0) + 1;
    });

    const mostCommonIntents = Object.entries(intentCounts)
      .sort((a, b) => b[1] - a[1])
      .slice(0, 3)
      .map(([intent]) => intent);

    return {
      totalMessages: conversation.messages.length,
      mostCommonIntents,
      lastVisit: conversation.context.lastInteraction,
      returningUser: conversation.messages.length > 5
    };
  }
} 