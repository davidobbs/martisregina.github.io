import React from 'react';
import { cn } from '@/lib/utils';

interface AutoContrastTextProps {
  children: React.ReactNode;
  className?: string;
  backgroundColor?: 'red' | 'mr-bordo' | 'primary' | 'dark' | 'light';
  as?: React.ElementType;
}

/**
 * Componente que automaticamente ajusta a cor do texto com base na cor de fundo
 * para garantir contraste adequado e legibilidade
 */
export const AutoContrastText: React.FC<AutoContrastTextProps> = ({
  children,
  className,
  backgroundColor = 'light',
  as: Component = 'div',
}) => {
  const getTextColorClass = (bgColor: string) => {
    switch (bgColor) {
      case 'red':
      case 'mr-bordo':
      case 'primary':
      case 'dark':
        return 'text-white';
      case 'light':
      default:
        return 'text-gray-900';
    }
  };

  const textColorClass = getTextColorClass(backgroundColor);

  return (
    <Component
      className={cn(
        textColorClass,
        '[&_*]:text-current', // Força todos os elementos filhos a usarem a cor atual
        className
      )}
    >
      {children}
    </Component>
  );
};

// Hook para detectar automaticamente a cor de fundo e retornar a cor de texto apropriada
export const useAutoContrastText = (backgroundColor?: string) => {
  const isRedBackground = backgroundColor?.includes('red') || 
                          backgroundColor?.includes('mr-bordo') || 
                          backgroundColor?.includes('primary');
  
  return isRedBackground ? 'text-white' : 'text-gray-900';
};

// Classe utilitária para aplicar diretamente no JSX
export const autoContrastClass = (backgroundColor?: string) => {
  const isRedBackground = backgroundColor?.includes('red') || 
                          backgroundColor?.includes('mr-bordo') || 
                          backgroundColor?.includes('primary');
  
  return isRedBackground 
    ? 'text-white [&_*]:text-white' 
    : 'text-gray-900 [&_*]:text-gray-900';
};

export default AutoContrastText; 