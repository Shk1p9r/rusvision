// ⚠️ ЗАМЕНИ НА СВОИ ДАННЫЕ ИЗ SUPABASE DASHBOARD → Settings → API
const SUPABASE_URL = 'https://whqicbrivhiaegtzelci.supabase.co';
const SUPABASE_ANON_KEY = 'sb_publishable_FfYb_P8kESdDW8I488cYtA_UPFlPSi8';

let supabase = null;
try {
  if (SUPABASE_URL && SUPABASE_ANON_KEY && !SUPABASE_URL.includes('XXXX') && !SUPABASE_ANON_KEY.includes('ВСТАВЬ')) {
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
