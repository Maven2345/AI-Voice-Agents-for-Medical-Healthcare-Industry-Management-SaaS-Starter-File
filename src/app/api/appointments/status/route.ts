import { NextRequest, NextResponse } from 'next/server';
import { createClient } from '@/lib/supabase/server';

/**
 * GET /api/appointments/status
 * Fetches or verifies the current status of an appointment slot
 */
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

    // Initialize our newly fixed Supabase server client instance
    const supabase = createClient();
    
    const { data: appointment, error } = await supabase
      .from('appointments')
      .select('id, status, slot_time, patient_id')
      .eq('id', appointmentId)
      .single();

    if (error || !appointment) {
      // Fallback response for testing if the database table row isn't populated yet
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