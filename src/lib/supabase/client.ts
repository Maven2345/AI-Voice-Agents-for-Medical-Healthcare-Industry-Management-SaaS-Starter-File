import { createClient } from '@supabase/supabase-js';

const supabaseUrl = process.env.NEXT_PUBLIC_SUPABASE_URL || '';
const supabaseAnonKey = process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY || '';

// Initializes the standard Supabase client safe for client-side/browser use
export const supabase = createClient(supabaseUrl, supabaseAnonKey);