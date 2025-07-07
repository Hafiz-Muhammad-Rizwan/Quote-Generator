'use client';

import { useState, useEffect, useCallback, useMemo } from 'react';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Input } from '@/components/ui/input';
import { Badge } from '@/components/ui/badge';
import { 
  Quote, 
  fetchQuotesByCategory, 
  searchQuotes, 
  getNextQuoteByCategory,
  getFirstQuoteByCategory,
  resetCategoryIndex
} from '@/services/quoteService';
import { 
  copyToClipboard, 
  shareQuote, 
  formatQuoteForSharing, 
  debounce,
  getRandomGradient 
} from '@/utils/helpers';
import { toast } from 'sonner';
import { 
  RefreshCw, 
  Copy, 
  Share2, 
  Search, 
  Quote as QuoteIcon,
  Sparkles,
  Heart,
  Target,
  Lightbulb,
  Star,
  Globe,
  CloudRain,
  HeartHandshake
} from 'lucide-react';

const categories = [
  { id: 'all', name: 'All', icon: Globe },
  { id: 'motivational', name: 'Motivational', icon: Sparkles },
  { id: 'success', name: 'Success', icon: Target },
  { id: 'life', name: 'Life', icon: Heart },
  { id: 'wisdom', name: 'Wisdom', icon: Lightbulb },
  { id: 'happiness', name: 'Happiness', icon: Star },
  { id: 'sad', name: 'Sad', icon: CloudRain },
  { id: 'love', name: 'Love', icon: HeartHandshake },
];

export default function QuoteGenerator() {
  const [currentQuote, setCurrentQuote] = useState<Quote | null>(null);
  const [filteredQuotes, setFilteredQuotes] = useState<Quote[]>([]);
  const [isLoading, setIsLoading] = useState(false);
  const [searchQuery, setSearchQuery] = useState('');
  const [selectedCategory, setSelectedCategory] = useState('all');
  const [gradientClass, setGradientClass] = useState('');

  // Load a random quote
  const loadRandomQuote = useCallback(async () => {
    setIsLoading(true);
    try {
      const quote = getNextQuoteByCategory(selectedCategory);
      if (quote) {
        setCurrentQuote(quote);
        setGradientClass(getRandomGradient());
      } else {
        toast.error('No quotes available for this category.');
      }
    } catch (err) {
      console.error('Load quote error:', err);
      toast.error('Failed to load quote. Please try again.');
    } finally {
      setIsLoading(false);
    }
  }, [selectedCategory]);

  // Handle copy quote
  const handleCopyQuote = useCallback(async () => {
    if (!currentQuote) return;
    
    const success = await copyToClipboard(formatQuoteForSharing(currentQuote));
    if (success) {
      toast.success('Quote copied to clipboard!');
    } else {
      toast.error('Failed to copy quote.');
    }
  }, [currentQuote]);

  // Handle share quote
  const handleShareQuote = useCallback(async () => {
    if (!currentQuote) return;
    
    const success = await shareQuote(currentQuote);
    if (success) {
      toast.success('Quote shared successfully!');
    } else {
      toast.info('Quote copied to clipboard for sharing!');
    }
  }, [currentQuote]);

  // Initialize component and keyboard shortcuts
  useEffect(() => {
    setGradientClass(getRandomGradient());
    loadQuotesByCategory('all'); // Load all quotes initially

    // Add keyboard shortcuts
    const handleKeyPress = (e: KeyboardEvent) => {
      if (e.code === 'Space' && !isLoading) {
        e.preventDefault();
        loadRandomQuote();
      }
    };

    window.addEventListener('keydown', handleKeyPress);
    return () => window.removeEventListener('keydown', handleKeyPress);
  }, [loadRandomQuote, isLoading]);

  // Load quotes by category
  const loadQuotesByCategory = async (category: string) => {
    setIsLoading(true);
    try {
      // Reset the index for this category to start from beginning
      resetCategoryIndex(category);
      
      // Get the quotes for this category
      const quotes = await fetchQuotesByCategory(category === 'all' ? undefined : category);
      
      // Validate quotes array
      const validQuotes = Array.isArray(quotes) ? quotes.filter(q => q && q.quote && q.author) : [];
      setFilteredQuotes(validQuotes);
      
      // Immediately set the first quote from this category
      const quote = getFirstQuoteByCategory(category);
      if (quote) {
        setCurrentQuote(quote);
        setGradientClass(getRandomGradient());
      } else {
        setCurrentQuote(null);
        toast.info('No quotes available for this category.');
      }
      
      // Show success message with correct count
      const categoryName = categories.find(cat => cat.id === category)?.name || 'All';
      toast.success(`Showing ${validQuotes.length} ${categoryName.toLowerCase()} quote${validQuotes.length === 1 ? '' : 's'}`);
    } catch (err) {
      console.error('Load quotes by category error:', err);
      toast.error('Failed to load quotes. Please try again.');
    } finally {
      setIsLoading(false);
    }
  };

  // Search quotes with debouncing
  const performSearch = useCallback(async (query: string) => {
    if (query.trim().length === 0) {
      // If search is cleared, reload current category
      loadQuotesByCategory(selectedCategory);
      return;
    }

    setIsLoading(true);
    try {
      const quotes = await searchQuotes(query);
      const validQuotes = Array.isArray(quotes) ? quotes.filter(q => q && q.quote && q.author) : [];
      setFilteredQuotes(validQuotes);
      
      if (validQuotes.length > 0) {
        // Show first quote from search results
        setCurrentQuote(validQuotes[0]);
        setGradientClass(getRandomGradient());
        toast.success(`Found ${validQuotes.length} quote${validQuotes.length === 1 ? '' : 's'} matching "${query}"`);
      } else {
        toast.info('No quotes found for your search. Showing current category.');
        loadQuotesByCategory(selectedCategory);
      }
    } catch (err) {
      console.error('Search error:', err);
      toast.error('Search failed. Please try again.');
    } finally {
      setIsLoading(false);
    }
  }, [selectedCategory]);

  const debouncedSearch = useMemo(
    () => debounce(performSearch, 500),
    [performSearch]
  );

  // Handle search input change
  const handleSearchChange = (value: string) => {
    setSearchQuery(value);
    debouncedSearch(value);
  };

  // Handle category change
  const handleCategoryChange = (category: string) => {
    setSelectedCategory(category);
    setSearchQuery(''); // Clear search when changing category
    loadQuotesByCategory(category); // Load quotes immediately
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900 p-4 flex items-center justify-center">
      {/* Background decorative elements */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-purple-500/20 rounded-full blur-3xl animate-pulse"></div>
        <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-blue-500/20 rounded-full blur-3xl animate-pulse delay-1000"></div>
        <div className="absolute top-3/4 left-1/2 w-64 h-64 bg-pink-500/20 rounded-full blur-3xl animate-pulse delay-2000"></div>
      </div>

      <div className="relative w-full max-w-4xl mx-auto">
        <Card className="backdrop-blur-xl bg-white/10 border-white/20 shadow-2xl">
          <CardHeader className="text-center space-y-6 pb-8">
            <div className="flex items-center justify-center gap-3 mb-4">
              <QuoteIcon className="w-8 h-8 text-white" />
              <CardTitle className={`text-4xl font-bold bg-gradient-to-r ${gradientClass} bg-clip-text text-transparent`}>
                Quote Generator
              </CardTitle>
            </div>
            
            <p className="text-white/80 text-lg max-w-2xl mx-auto">
              Discover inspiring quotes that resonate with your thoughts and feelings. 
              Search by expression or explore different categories.
            </p>

            {/* Search Input */}
            <div className="relative max-w-md mx-auto">
              <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-white/60 w-5 h-5" />
              <Input
                placeholder="Search quotes by expression..."
                value={searchQuery}
                onChange={(e) => handleSearchChange(e.target.value)}
                className="pl-10 bg-white/10 border-white/20 text-white placeholder:text-white/60 focus:border-white/40"
              />
            </div>

            {/* Category Badges */}
            <div className="flex flex-wrap justify-center gap-2 mt-6">
              {categories.map((category) => {
                const IconComponent = category.icon;
                return (
                  <Badge
                    key={category.id}
                    variant={selectedCategory === category.id ? "default" : "outline"}
                    className={`cursor-pointer transition-all duration-300 hover:scale-105 ${
                      selectedCategory === category.id
                        ? `bg-gradient-to-r ${gradientClass} text-white border-transparent`
                        : 'bg-white/10 text-white border-white/30 hover:bg-white/20'
                    }`}
                    onClick={() => handleCategoryChange(category.id)}
                  >
                    <IconComponent className="w-4 h-4 mr-2" />
                    {category.name}
                  </Badge>
                );
              })}
            </div>
          </CardHeader>

          <CardContent className="space-y-8">
            {/* Quote Display */}
            <div className="relative">
              <div className="text-center min-h-[300px] flex flex-col justify-center space-y-6 relative">
                {isLoading ? (
                  <div className="flex flex-col items-center justify-center space-y-4">
                    <RefreshCw className="w-8 h-8 text-white animate-spin" />
                    <p className="text-white/70 text-lg animate-pulse">
                      Loading inspiring quotes...
                    </p>
                  </div>
                ) : currentQuote ? (
                  <div className="space-y-6 animate-fade-in">
                    {/* Quote marks decoration */}
                    <div className="relative">
                      <div className="absolute -top-8 -left-8 text-6xl text-white/20 font-serif">“</div>
                      <div className="absolute -bottom-8 -right-8 text-6xl text-white/20 font-serif">”</div>
                      
                      <blockquote className="text-2xl md:text-3xl font-medium text-white leading-relaxed max-w-3xl mx-auto px-12">
                        {currentQuote.quote}
                      </blockquote>
                    </div>
                    
                    <div className="flex flex-col items-center space-y-2">
                      <cite className="text-xl text-white/80 font-medium">
                        — {currentQuote.author}
                      </cite>
                      {currentQuote.category && (
                        <Badge 
                          variant="outline" 
                          className="bg-white/10 text-white/70 border-white/30"
                        >
                          {currentQuote.category}
                        </Badge>
                      )}
                    </div>
                  </div>
                ) : (
                  <div className="text-center text-white/60">
                    <p className="text-xl">Click “New Quote” to get started!</p>
                  </div>
                )}
              </div>
            </div>

            {/* Action Buttons */}
            <div className="flex flex-wrap justify-center gap-4">
              <Button
                onClick={loadRandomQuote}
                disabled={isLoading}
                size="lg"
                className={`bg-gradient-to-r ${gradientClass} hover:opacity-90 text-white border-0 shadow-lg hover:shadow-xl transition-all duration-300 hover:scale-105`}
              >
                <RefreshCw className={`w-5 h-5 mr-2 ${isLoading ? 'animate-spin' : ''}`} />
                {selectedCategory !== 'all' ? `Next ${selectedCategory.charAt(0).toUpperCase() + selectedCategory.slice(1)} Quote` : 'Next Quote'}
              </Button>

              <Button
                onClick={handleCopyQuote}
                disabled={!currentQuote || isLoading}
                variant="outline"
                size="lg"
                className="bg-white/10 text-white border-white/30 hover:bg-white/20 shadow-lg hover:shadow-xl transition-all duration-300 hover:scale-105"
              >
                <Copy className="w-5 h-5 mr-2" />
                Copy Quote
              </Button>

              <Button
                onClick={handleShareQuote}
                disabled={!currentQuote || isLoading}
                variant="outline"
                size="lg"
                className="bg-white/10 text-white border-white/30 hover:bg-white/20 shadow-lg hover:shadow-xl transition-all duration-300 hover:scale-105"
              >
                <Share2 className="w-5 h-5 mr-2" />
                Share
              </Button>
            </div>

            {/* Category Info */}
            {selectedCategory !== 'all' && filteredQuotes.length > 0 && (
              <div className="text-center text-white/70 text-sm">
                <p>Showing quotes from <span className="font-semibold text-white/90">{selectedCategory}</span> category ({filteredQuotes.length} available)</p>
              </div>
            )}

            {/* Keyboard shortcuts hint */}
            <div className="text-center text-white/50 text-sm">
              <p>💡 Press <kbd className="px-2 py-1 bg-white/10 rounded text-xs">Space</kbd> for next quote</p>
            </div>
          </CardContent>
        </Card>
      </div>

      <style jsx global>{`
        @keyframes fade-in {
          from {
            opacity: 0;
            transform: translateY(20px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }
        
        .animate-fade-in {
          animation: fade-in 0.6s ease-out;
        }
        
        kbd {
          font-family: inherit;
        }
      `}</style>
    </div>
  );
}