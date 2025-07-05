# 🌟 Quote Generator

A beautiful, modern quote generator built with Next.js, TypeScript, and ShadCN UI. Discover inspiring quotes through search or category exploration with a stunning animated interface.

![Quote Generator Preview](https://img.shields.io/badge/Next.js-15-black?style=for-the-badge&logo=next.js)
![TypeScript](https://img.shields.io/badge/TypeScript-5-blue?style=for-the-badge&logo=typescript)
![Tailwind CSS](https://img.shields.io/badge/Tailwind-CSS-06B6D4?style=for-the-badge&logo=tailwindcss)

## ✨ Features

### 🎨 **Beautiful UI**
- **Glassmorphism design** with backdrop blur effects
- **Dynamic gradients** that change with each quote
- **Smooth animations** and transitions
- **Floating geometric shapes** for visual appeal
- **Responsive design** for all screen sizes

### 🔍 **Smart Search**
- **Expression-based search** - Find quotes by typing your feelings or thoughts
- **Real-time search** with debounced input
- **Category filtering** (Motivational, Success, Life, Wisdom, Happiness)
- **Fallback system** when no matches are found

### 🚀 **Modern Features**
- **API Integration** with external quotes service
- **Copy to clipboard** functionality
- **Web Share API** support with fallback
- **Keyboard shortcuts** (Space for new quote, Ctrl+C to copy)
- **Toast notifications** for user feedback
- **Auto-refresh** every 30 seconds

### 🎯 **Categories**
- 🌟 **All** - Random quotes from all categories
- ✨ **Motivational** - Inspiring and uplifting quotes
- 🎯 **Success** - Achievement and goal-oriented quotes
- ❤️ **Life** - Wisdom about life and living
- 💡 **Wisdom** - Philosophical and thoughtful quotes
- ⭐ **Happiness** - Joyful and positive quotes

## 🛠️ Tech Stack

- **Framework**: Next.js 15 with App Router
- **Language**: TypeScript
- **Styling**: Tailwind CSS
- **UI Components**: ShadCN UI
- **Icons**: Lucide React
- **Notifications**: Sonner
- **API**: External quotes API integration

## 🚀 Getting Started

### Prerequisites
- Node.js 18+ 
- npm, yarn, pnpm, or bun

### Installation

1. **Clone the repository**
   ```bash
   git clone <repository-url>
   cd quote-generator
   ```

2. **Install dependencies**
   ```bash
   npm install
   # or
   yarn install
   # or
   pnpm install
   ```

3. **Run the development server**
   ```bash
   npm run dev
   # or
   yarn dev
   # or
   pnpm dev
   ```

4. **Open your browser**
   Navigate to [http://localhost:3000](http://localhost:3000) to see the application.

## 📱 Usage

### Basic Operations
- **Generate New Quote**: Click "New Quote" button or press `Space`/`Enter`
- **Copy Quote**: Click "Copy Quote" button or press `Ctrl+C`
- **Share Quote**: Click "Share" button (uses Web Share API when available)

### Search & Filter
- **Search by Expression**: Type your feelings or keywords in the search box
- **Filter by Category**: Click on category badges to filter quotes
- **Clear Search**: Delete search text to return to random quotes

### Keyboard Shortcuts
- `Space` or `Enter` - Generate new quote
- `Ctrl+C` - Copy current quote to clipboard

## 🎨 Customization

### Gradients
The app uses dynamic gradients that change with each quote. You can customize them in `src/utils/helpers.ts`:

```typescript
export function getRandomGradient(): string {
  const gradients = [
    'from-purple-400 via-pink-500 to-red-500',
    'from-blue-400 via-purple-500 to-pink-500',
    // Add your custom gradients here
  ];
  
  return gradients[Math.floor(Math.random() * gradients.length)];
}
```

### API Configuration
Update the API configuration in `src/services/quoteService.ts`:

```typescript
const API_KEY = 'your-api-key-here';
const BASE_URL = 'https://api.api-ninjas.com/v1/quotes';
```

## 📂 Project Structure

```
src/
├── app/                    # Next.js App Router
│   ├── layout.tsx         # Root layout with providers
│   ├── page.tsx           # Main page
│   └── globals.css        # Global styles
├── components/            # React components
│   ├── ui/                # ShadCN UI components
│   └── QuoteGenerator.tsx # Main quote generator component
├── services/              # API services
│   └── quoteService.ts    # Quote API integration
└── utils/                 # Utility functions
    └── helpers.ts         # Helper functions
```

## 🔧 Available Scripts

- `npm run dev` - Start development server
- `npm run build` - Build for production
- `npm run start` - Start production server
- `npm run lint` - Run ESLint
- `npm run type-check` - Run TypeScript compiler

## 🌐 API Integration

The app integrates with [API Ninjas Quotes API](https://api.api-ninjas.com/) to fetch quotes dynamically. Features include:

- **Category-based fetching**
- **Search functionality**
- **Fallback quotes** when API is unavailable
- **Error handling** with user-friendly messages

## 🤝 Contributing

1. Fork the repository
2. Create your feature branch (`git checkout -b feature/amazing-feature`)
3. Commit your changes (`git commit -m 'Add some amazing feature'`)
4. Push to the branch (`git push origin feature/amazing-feature`)
5. Open a Pull Request

## 📄 License

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.

## 🙏 Acknowledgments

- [ShadCN UI](https://ui.shadcn.com/) for the beautiful component library
- [API Ninjas](https://api.api-ninjas.com/) for the quotes API
- [Lucide React](https://lucide.dev/) for the icon set
- [Tailwind CSS](https://tailwindcss.com/) for the utility-first CSS framework

---

<div align="center">
  <p>Made with ❤️ and ☕</p>
  <p>Happy quote hunting! 🌟</p>
</div>

This project uses [`next/font`](https://nextjs.org/docs/app/building-your-application/optimizing/fonts) to automatically optimize and load [Geist](https://vercel.com/font), a new font family for Vercel.

## Learn More

To learn more about Next.js, take a look at the following resources:

- [Next.js Documentation](https://nextjs.org/docs) - learn about Next.js features and API.
- [Learn Next.js](https://nextjs.org/learn) - an interactive Next.js tutorial.

You can check out [the Next.js GitHub repository](https://github.com/vercel/next.js) - your feedback and contributions are welcome!

## Deploy on Vercel

The easiest way to deploy your Next.js app is to use the [Vercel Platform](https://vercel.com/new?utm_medium=default-template&filter=next.js&utm_source=create-next-app&utm_campaign=create-next-app-readme) from the creators of Next.js.

Check out our [Next.js deployment documentation](https://nextjs.org/docs/app/building-your-application/deploying) for more details.
