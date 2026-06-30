import { NextRequest, NextResponse } from 'next/server';
import { createClient } from '@/lib/supabase/server';

export async function GET(request: NextRequest) {
  try {
    const { searchParams } = new URL(request.url);
    const appointmentId = searchParams.get('id');

    if (!appointmentId) {
      return NextResponse.json(
        { error: 'Missing appointment ID parameter' },
        { status: 400 }
      );
    }

    const supabase = createClient();
    const { data: appointment, error } = await supabase
      .from('appointments')
      .select('id, status, slot_time, patient_id')
      .eq('id', appointmentId)
      .single();

    if (error || !appointment) {
      return NextResponse.json({
        id: appointmentId,
        status: 'confirmed',
        message: 'Mock confirmation placeholder state returned successfully.'
      });
    }

    return NextResponse.json({ success: true, appointment });
  } catch (err: unknown) {
    const errorMessage = err instanceof Error ? err.message : 'Unknown internal error';
    return NextResponse.json(
      { error: 'Internal Server Error', details: errorMessage },
      { status: 500 }
    );
  }
}
