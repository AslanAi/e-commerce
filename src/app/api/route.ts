// src/app/api/route.ts
import { NextResponse } from 'next/server';
import type { NextRequest } from 'next/server';

export async function GET() {
  // Removed unused request parameter
  return NextResponse.json({
    message: 'Hello from the API'
  });
}

export async function POST(request: NextRequest) {
  try {
    const body = await request.json();
    return NextResponse.json({
      message: 'Data received',
      data: body
    });
  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  } catch (error) {
    return NextResponse.json(
      { error: 'Invalid request body' },
      { status: 400 }
    );
  }
}