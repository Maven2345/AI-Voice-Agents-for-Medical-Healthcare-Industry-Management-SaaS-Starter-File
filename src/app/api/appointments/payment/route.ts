import { NextResponse } from 'next/server';

export async function GET() {
  return NextResponse.json(
    { 
      status: "success", 
      message: "Appointment route endpoint active" 
    }, 
    { status: 200 }
  );
}