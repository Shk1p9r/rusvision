const SUPABASE_URL = 'https://whqicbrivhiaegtzelci.supabase.co';
// ⬇️ ВОТ СЮДА ВСТАВЬ НОВЫЙ КЛЮЧ ⬇️
const SUPABASE_ANON_KEY = 'sb_publishable_m3r0FApgU8kcZrMuQDwh0Q_mX-Juf0C'; 

let supabase = null;
try {
  if (SUPABASE_URL && SUPABASE_ANON_KEY) {
    supabase = window.supabase.createClient(SUPABASE_URL, SUPABASE_ANON_KEY);
    console.log('✅ Supabase подключён успешно');
    window.rv_supabase = supabase;
  } else {
    console.warn('⚠️ Ключи пустые');
  }
} catch (e) {
  console.error('❌ Ошибка инициализации:', e);
}

async function isAdmin() {
  const client = window.rv_supabase;
  if (!client) return false;
  try {
    const { data: { session } } = await client.auth.getSession();
    if (!session) return false;
    const { data, error } = await client.rpc('is_admin');
    if (error) { console.error('RPC error:', error.message); return false; }
    return !!data;
  } catch (e) {
    console.error('Exception:', e);
    return false;
  }
}
