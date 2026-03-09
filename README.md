# NextDeploy - Modern Next.js Application

A production-ready Next.js application with TypeScript, Tailwind CSS, and automatic deployment to Vercel.

## 🚀 Features

- **Next.js 14** with App Router
- **TypeScript** for type safety
- **Tailwind CSS** for styling
- **Responsive Design** mobile-first approach
- **API Routes** with serverless functions
- **Automatic Deployment** to Vercel
- **Modern UI Components** with animations
- **Performance Optimized** with best practices
- **Dark Mode** with toggle and system preference detection

## 📁 Project Structure

```
nextdeploy-9177/
├── app/                    # Next.js App Router
│   ├── api/               # API routes
│   ├── about/             # About page
│   ├── contact/           # Contact page
│   ├── api-demo/          # API demo page
│   ├── layout.tsx         # Root layout
│   └── page.tsx           # Homepage
├── components/            # React components
├── public/               # Static assets
└── package.json          # Dependencies
```

## 🛠️ Getting Started

### Prerequisites
- Node.js 18+ and npm/yarn/pnpm

### Installation

1. Clone the repository:
```bash
git clone <repository-url>
cd nextdeploy-9177
```

2. Install dependencies:
```bash
npm install
```

3. Run the development server:
```bash
npm run dev
```

4. Open [http://localhost:3000](http://localhost:3000) in your browser.

## 📦 Available Scripts

- `npm run dev` - Start development server
- `npm run build` - Build for production
- `npm start` - Start production server
- `npm run lint` - Run ESLint
- `npm run type-check` - TypeScript type checking
- `npm run format` - Format code with Prettier

## 🌐 API Endpoints

The application includes several API endpoints:

- `GET /api/health` - Health check endpoint
- `GET /api/users` - Get all users
- `GET /api/users/[id]` - Get user by ID
- `GET /api/posts` - Get all posts
- `POST /api/echo` - Echo request data

## 🚀 Deployment

### Automatic Deployment to Vercel

This project is configured for automatic deployment to Vercel:

1. Push to GitHub
2. Connect repository to Vercel
3. Automatic deployments on every push

### Manual Deployment

1. Build the application:
```bash
npm run build
```

2. Deploy to your preferred hosting platform.

## 🎨 Styling

- **Tailwind CSS** for utility-first styling
- **Custom CSS** in `app/globals.css`
- **Responsive breakpoints** for all screen sizes
- **Full Dark Mode Support** with toggle button in navbar
- **System preference detection** with manual override
- **Persistent theme preference** saved in localStorage

## 🔧 Configuration

- `next.config.ts` - Next.js configuration
- `tailwind.config.ts` - Tailwind CSS configuration
- `tsconfig.json` - TypeScript configuration
- `.eslintrc.json` - ESLint configuration
- `.prettierrc` - Prettier configuration

## 📱 Pages

- **Home** (`/`) - Landing page with features and stats
- **About** (`/about`) - Information about the project
- **Contact** (`/contact`) - Contact form and information
- **API Demo** (`/api-demo`) - Interactive API testing interface

## 🏗️ Architecture

- **App Router** - Next.js 14 App Router for routing
- **Server Components** - React Server Components by default
- **Client Components** - Marked with "use client" directive
- **API Routes** - Serverless functions for backend logic
- **TypeScript** - Full type safety throughout

## 📄 License

MIT License - see LICENSE file for details.

## 🤝 Contributing

Contributions are welcome! Please feel free to submit a Pull Request.

## 📞 Support

For support, please open an issue in the GitHub repository.

---

Built with ❤️ using Next.js, TypeScript, and Tailwind CSS.