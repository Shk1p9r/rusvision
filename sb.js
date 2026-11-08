// ⚠️ ВСТАВЬ СВОИ ДАННЫЕ ИЗ SUPABASE DASHBOARD:
const SUPABASE_URL = 'https://whqicbrivhiaegtzelci.supabase.co'; // ← Твой Project URL
const SUPABASE_ANON_KEY = 'sb_publishable_FfYb_P8kESdDW8I488cYtA_UPFlPSi8'; // ← Скопированный Publishable key

let supabase = null;
if (SUPABASE_URL.includes('XXXX')) console.warn('Supabase не настроен — сайт работает на демо-данных');
else supabase = window.supabase.createClient(SUPABASE_URL, SUPABASE_ANON_KEY);

async function isAdmin() {
  if (!supabase) return false;
  const { data: { session } } = await supabase.auth.getSession();
  if (!session) return false;
  const { data } = await supabase.rpc('is_admin');
  return !!data;
}
