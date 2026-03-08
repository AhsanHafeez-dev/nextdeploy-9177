import { NextResponse } from 'next/server';

const posts = [
  { 
    id: 1, 
    title: 'Getting Started with Next.js', 
    content: 'Learn how to build modern web applications with Next.js 14.',
    author: 'John Doe',
    publishedAt: '2024-01-15',
    tags: ['nextjs', 'react', 'webdev']
  },
  { 
    id: 2, 
    title: 'TypeScript Best Practices', 
    content: 'Essential TypeScript patterns for scalable applications.',
    author: 'Jane Smith',
    publishedAt: '2024-02-20',
    tags: ['typescript', 'javascript', 'programming']
  },
  { 
    id: 3, 
    title: 'Tailwind CSS Mastery', 
    content: 'Advanced techniques for building beautiful UIs with Tailwind.',
    author: 'Bob Johnson',
    publishedAt: '2024-03-10',
    tags: ['tailwind', 'css', 'ui']
  },
  { 
    id: 4, 
    title: 'Deployment Strategies', 
    content: 'How to deploy Next.js applications to production.',
    author: 'Alice Brown',
    publishedAt: '2024-01-05',
    tags: ['deployment', 'vercel', 'devops']
  },
  { 
    id: 5, 
    title: 'API Design Patterns', 
    content: 'Best practices for designing RESTful APIs.',
    author: 'Charlie Wilson',
    publishedAt: '2024-02-28',
    tags: ['api', 'rest', 'backend']
  },
];

export async function GET() {
  return NextResponse.json({
    success: true,
    data: posts,
    count: posts.length,
    timestamp: new Date().toISOString(),
  });
}