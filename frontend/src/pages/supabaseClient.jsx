import { createClient } from '@supabase/supabase-js';

const supabaseUrl = import.meta.env.VITE_SUPABASE_URL;
const supabaseAnonKey = import.meta.env.VITE_SUPABASE_ANON_KEY;

let supabase;
if (supabaseUrl && supabaseAnonKey) {
  supabase = createClient(supabaseUrl, supabaseAnonKey);
} else {
  console.warn('Supabase no configurado. Defina VITE_SUPABASE_URL y VITE_SUPABASE_ANON_KEY en frontend/.env');
  supabase = {
    from() {
      throw new Error('Supabase no configurado: faltan VITE_SUPABASE_URL y/o VITE_SUPABASE_ANON_KEY');
    }
  };
}

export { supabase };