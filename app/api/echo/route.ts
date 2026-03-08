import { NextResponse } from 'next/server';

export async function POST(request: Request) {
  try {
    const body = await request.json();
    
    return NextResponse.json({
      success: true,
      message: 'Request received successfully',
      data: body,
      echoedAt: new Date().toISOString(),
      serverInfo: {
        nodeVersion: process.version,
        environment: process.env.NODE_ENV || 'development',
        timestamp: new Date().toISOString(),
      },
    });
  } catch (error) {
    return NextResponse.json(
      { 
        success: false, 
        error: 'Invalid JSON payload',
        message: 'Please send a valid JSON object'
      },
      { status: 400 }
    );
  }
}

export async function GET() {
  return NextResponse.json({
    success: true,
    message: 'Echo API is running',
    description: 'Send a POST request with JSON data to get it echoed back',
    methods: ['POST'],
    example: {
      method: 'POST',
      body: { message: 'Hello World', timestamp: '2024-01-01T00:00:00Z' }
    },
    timestamp: new Date().toISOString(),
  });
}