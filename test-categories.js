// Quick test to verify category counts
const fs = require('fs');

// Read the quote service file
const content = fs.readFileSync('src/services/quoteService.ts', 'utf-8');

// Extract all quotes with category information
const quoteMatches = content.match(/{\s*quote:\s*"[^"]*",\s*author:\s*"[^"]*",\s*category:\s*"[^"]*"\s*}/g);

if (quoteMatches) {
  const categoryCounts = {};
  
  quoteMatches.forEach(match => {
    const categoryMatch = match.match(/category:\s*"([^"]*)"/);
    if (categoryMatch) {
      const category = categoryMatch[1];
      categoryCounts[category] = (categoryCounts[category] || 0) + 1;
    }
  });
  
  console.log('Category counts:');
  Object.entries(categoryCounts).sort().forEach(([category, count]) => {
    console.log(`${category}: ${count} quotes`);
  });
  
  console.log(`\nTotal quotes: ${quoteMatches.length}`);
} else {
  console.log('No quotes found');
}
