import { Quote } from '@/services/quoteService';

// Copy text to clipboard
export async function copyToClipboard(text: string): Promise<boolean> {
  try {
    if (navigator.clipboard && window.isSecureContext) {
      await navigator.clipboard.writeText(text);
      return true;
    } else {
      // Fallback for older browsers
      const textArea = document.createElement('textarea');
      textArea.value = text;
      textArea.style.position = 'fixed';
      textArea.style.left = '-999999px';
      textArea.style.top = '-999999px';
      document.body.appendChild(textArea);
      textArea.focus();
      textArea.select();
      
      const success = document.execCommand('copy');
      document.body.removeChild(textArea);
      return success;
    }
  } catch (error) {
    console.error('Failed to copy text:', error);
    return false;
  }
}

// Format quote for sharing
export function formatQuoteForSharing(quote: Quote): string {
  return `"${quote.quote}" — ${quote.author}`;
}

// Share quote using Web Share API or fallback to copy
export async function shareQuote(quote: Quote): Promise<boolean> {
  const text = formatQuoteForSharing(quote);
  
  if (navigator.share) {
    try {
      await navigator.share({
        title: 'Inspiring Quote',
        text: text,
        url: window.location.href,
      });
      return true;
    } catch (error) {
      // User cancelled sharing or sharing failed
      console.log('Sharing cancelled or failed:', error);
      return false;
    }
  } else {
    // Fallback to copying to clipboard
    return await copyToClipboard(text);
  }
}

// Debounce function for search input
export function debounce<T extends (...args: unknown[]) => unknown>(
  func: T,
  delay: number
): (...args: Parameters<T>) => void {
  let timeoutId: NodeJS.Timeout;
  
  return (...args: Parameters<T>) => {
    clearTimeout(timeoutId);
    timeoutId = setTimeout(() => func(...args), delay);
  };
}

// Generate random gradient classes
export function getRandomGradient(): string {
  const gradients = [
    'from-purple-400 via-pink-500 to-red-500',
    'from-blue-400 via-purple-500 to-pink-500',
    'from-green-400 via-blue-500 to-purple-600',
    'from-yellow-400 via-orange-500 to-red-500',
    'from-indigo-400 via-purple-500 to-pink-500',
    'from-cyan-400 via-blue-500 to-purple-600',
    'from-emerald-400 via-teal-500 to-blue-600',
    'from-orange-400 via-red-500 to-pink-500',
  ];
  
  return gradients[Math.floor(Math.random() * gradients.length)];
}

// Animation delay for staggered animations
export function getStaggeredDelay(index: number, baseDelay: number = 100): number {
  return index * baseDelay;
}

// Validate if a string is not empty after trimming
export function isValidString(str: string): boolean {
  return str.trim().length > 0;
}
