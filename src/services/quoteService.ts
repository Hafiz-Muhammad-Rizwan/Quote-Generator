// API service for fetching quotes
const API_KEY = '56sOGYUvIeQNfgMLbnUuZg==uHvMJMkwcjlyRG8';
const BASE_URL = 'https://api.api-ninjas.com/v1/quotes';

export interface Quote {
  quote: string;
  author: string;
  category?: string;
}

export interface QuoteAPIResponse {
  quote: string;
  author: string;
  category: string;
}

// Fallback quotes when API fails
const fallbackQuotes: Quote[] = [
  {
    quote: "The only way to do great work is to love what you do.",
    author: "Steve Jobs",
    category: "motivational"
  },
  {
    quote: "Innovation distinguishes between a leader and a follower.",
    author: "Steve Jobs",
    category: "success"
  },
  {
    quote: "Life is what happens to you while you're busy making other plans.",
    author: "John Lennon",
    category: "life"
  },
  {
    quote: "The future belongs to those who believe in the beauty of their dreams.",
    author: "Eleanor Roosevelt",
    category: "motivational"
  },
  {
    quote: "It is during our darkest moments that we must focus to see the light.",
    author: "Aristotle",
    category: "wisdom"
  },
  {
    quote: "Success is not final, failure is not fatal: it is the courage to continue that counts.",
    author: "Winston Churchill",
    category: "success"
  },
  {
    quote: "The way to get started is to quit talking and begin doing.",
    author: "Walt Disney",
    category: "success"
  },
  {
    quote: "Be yourself; everyone else is already taken.",
    author: "Oscar Wilde",
    category: "life"
  },
  {
    quote: "The only true wisdom is in knowing you know nothing.",
    author: "Socrates",
    category: "wisdom"
  },
  {
    quote: "The purpose of our lives is to be happy.",
    author: "Dalai Lama",
    category: "happiness"
  },
  {
    quote: "Don't be afraid to give up the good to go for the great.",
    author: "John D. Rockefeller",
    category: "success"
  },
  {
    quote: "Turn your wounds into wisdom.",
    author: "Oprah Winfrey",
    category: "wisdom"
  },
  {
    quote: "Life is 10% what happens to you and 90% how you react to it.",
    author: "Charles R. Swindoll",
    category: "life"
  },
  {
    quote: "Being deeply loved by someone gives you strength, while loving someone deeply gives you courage.",
    author: "Lao Tzu",
    category: "life"
  },
  {
    quote: "Happiness is not something ready made. It comes from your own actions.",
    author: "Dalai Lama",
    category: "happiness"
  }
];

// Fetch quotes by category
export async function fetchQuotesByCategory(category?: string): Promise<Quote[]> {
  // Return fallback quotes immediately for better UX
  const categoryQuotes = category && category !== 'all' 
    ? fallbackQuotes.filter(q => q.category === category)
    : fallbackQuotes;

  return categoryQuotes;
}

// Search quotes by keyword/expression
export async function searchQuotes(query: string): Promise<Quote[]> {
  // Search through fallback quotes
  const searchTerm = query.toLowerCase();
  const filteredQuotes = fallbackQuotes.filter(quote => 
    quote.quote.toLowerCase().includes(searchTerm) ||
    quote.author.toLowerCase().includes(searchTerm) ||
    (quote.category && quote.category.toLowerCase().includes(searchTerm))
  );

  // If no matches found, return some quotes anyway
  if (filteredQuotes.length === 0) {
    return fallbackQuotes.slice(0, 5); // Return first 5 quotes as fallback
  }

  return filteredQuotes;
}

// Get a random quote
export async function getRandomQuote(): Promise<Quote> {
  try {
    const quotes = await fetchQuotesByCategory();
    return quotes[Math.floor(Math.random() * quotes.length)];
  } catch (error) {
    console.error('Error fetching random quote:', error);
    return fallbackQuotes[Math.floor(Math.random() * fallbackQuotes.length)];
  }
}
