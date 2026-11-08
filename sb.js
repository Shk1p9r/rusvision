const SUPABASE_URL = 'https://whqicbrivhiaegtzelci.supabase.co';
const SUPABASE_ANON_KEY = 'sb_publishable_Ffyb_P8kESdDW8I488cYTA_UPF1PSI8';

let supabase = null;
try {
  if (SUPABASE_URL && SUPABASE_ANON_KEY) {
    supabase = window.supabase.createClient(SUPABASE_URL, SUPABASE_ANON_KEY);
    console.log('✅ Supabase подключён');
  } else {
    console.warn('⚠️ Supabase не настроен — сайт работает на демо-данных');
  }
} catch (e) {
  console.error('❌ Ошибка подключения Supabase:', e);
}

async function isAdmin() {
  if (!supabase) return false;
  try {
    const { data: { session } } = await supabase.auth.getSession();
    if (!session) return false;
    const { data, error } = await supabase.rpc('is_admin');
    if (error) { console.error('isAdmin error:', error); return false; }
    return !!data;
  } catch (e) {
    console.error('isAdmin exception:', e);
    return false;
  }
}
