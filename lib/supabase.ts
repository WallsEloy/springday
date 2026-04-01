import { createClient } from '@supabase/supabase-js';

const supabaseUrl = process.env.NEXT_PUBLIC_SUPABASE_URL || 'https://dummy.supabase.co';
const supabaseKey = process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY || 'dummy_anon_key';
const supabaseServiceKey = process.env.SUPABASE_SERVICE_ROLE_KEY || 'dummy_service_key';

export const supabase = createClient(supabaseUrl, supabaseKey);

// Cliente con permisos de administrador (service_role) para operaciones del backend (APIs)
export const supabaseAdmin = createClient(supabaseUrl, supabaseServiceKey);

/**
 * Obtiene la URL pública de un archivo en el bucket 'Fotos'
 * @param path Ruta del archivo dentro del bucket (ej. 'djs/foto.jpg')
 * @returns La URL pública completa
 */
export function getPublicUrl(path: string) {
    // Si la ruta ya es una URL completa, la devolvemos tal cual
    if (path.startsWith('http')) return path;
    
    // Devolvemos la URL pública del bucket 'Fotos'
    const { data } = supabase.storage.from('Fotos').getPublicUrl(path);
    return data.publicUrl;
}
