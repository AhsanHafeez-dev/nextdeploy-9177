import { NextResponse } from 'next/server';

const users = [
  { id: 1, name: 'John Doe', email: 'john@example.com', role: 'admin' },
  { id: 2, name: 'Jane Smith', email: 'jane@example.com', role: 'user' },
  { id: 3, name: 'Bob Johnson', email: 'bob@example.com', role: 'user' },
  { id: 4, name: 'Alice Brown', email: 'alice@example.com', role: 'moderator' },
  { id: 5, name: 'Charlie Wilson', email: 'charlie@example.com', role: 'user' },
];

export async function GET() {
  return NextResponse.json({
    success: true,
    data: users,
    count: users.length,
    timestamp: new Date().toISOString(),
  });
}