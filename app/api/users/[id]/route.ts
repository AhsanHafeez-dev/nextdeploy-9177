import { NextResponse } from 'next/server';

const users = [
  { id: 1, name: 'John Doe', email: 'john@example.com', role: 'admin', joinedAt: '2024-01-15' },
  { id: 2, name: 'Jane Smith', email: 'jane@example.com', role: 'user', joinedAt: '2024-02-20' },
  { id: 3, name: 'Bob Johnson', email: 'bob@example.com', role: 'user', joinedAt: '2024-03-10' },
  { id: 4, name: 'Alice Brown', email: 'alice@example.com', role: 'moderator', joinedAt: '2024-01-05' },
  { id: 5, name: 'Charlie Wilson', email: 'charlie@example.com', role: 'user', joinedAt: '2024-02-28' },
];

export async function GET(
  request: Request,
  { params }: { params: Promise<{ id: string }> }
) {
  const { id } = await params;
  const userId = parseInt(id);
  
  const user = users.find(u => u.id === userId);
  
  if (!user) {
    return NextResponse.json(
      { success: false, error: 'User not found' },
      { status: 404 }
    );
  }
  
  return NextResponse.json({
    success: true,
    data: user,
    timestamp: new Date().toISOString(),
  });
}