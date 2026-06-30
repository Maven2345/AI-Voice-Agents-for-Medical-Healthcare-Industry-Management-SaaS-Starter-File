import { NextResponse } from 'next/server';

export async function GET() {
  return NextResponse.json(
    { 
      status: "success", 
      message: "Widget test endpoint active" 
    }, 
    { status: 200 }
  );
}