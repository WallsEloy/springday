import { createClient } from '@supabase/supabase-js';

const supabaseUrl = process.env.NEXT_PUBLIC_SUPABASE_URL || 'https://dummy.supabase.co';
const supabaseKey = process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY || 'dummy_anon_key';
const supabaseServiceKey = process.env.SUPABASE_SERVICE_ROLE_KEY || 'dummy_service_key';

export const supabase = createClient(supabaseUrl, supabaseKey);

// Cliente con permisos de administrador (service_role) para operaciones del backend (APIs)
export const supabaseAdmin = createClient(supabaseUrl, supabaseServiceKey);
