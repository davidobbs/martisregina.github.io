// src/utils/nlp.ts
// Utilitários de NLP para normalização de texto e pré-processamento

/**
 * Normaliza um texto para facilitar correspondência:
 * - Remove acentos e diacríticos
 * - Converte para minúsculas
 * - Remove caracteres não alfanuméricos (exceto espaços)
 * - Remove espaços extras
 */
export function normalizeText(text: string): string {
  return text
    .normalize('NFD')                    // separa caracteres e diacríticos
    .replace(/[\u0300-\u036f]/g, '')   // remove diacríticos
    .toLowerCase()                       // converte para minúsculas
    .replace(/[^a-z0-9\s]/g, '')        // remove pontuação
    .replace(/\s+/g, ' ')               // normaliza espaços
    .trim();                             // remove espaços nas extremidades
} 