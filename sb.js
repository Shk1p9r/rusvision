// Данные из Supabase Dashboard → Settings → API
const SUPABASE_URL = 'https://whqicbrivhiaegtzelci.supabase.co'; 
const SUPABASE_ANON_KEY = 'sb_publishable_m3r0FApgU8kcZrMuQDwh0Q_mX-Juf0C'; // ⚠️ ВСТАВЬ СВОЙ НОВЫЙ КЛЮЧ

let client = null; // Переименовали переменную, чтобы избежать конфликта
window.rv_supabase = null;

try {
  if (SUPABASE_URL && SUPABASE_ANON_KEY) {
    // Используем глобальный объект window.supabase для создания клиента
    client = window.supabase.createClient(SUPABASE_URL, SUPABASE_ANON_KEY);
    console.log('✅ Supabase подключён успешно');
    
    // Сохраняем для использования в index.html/admin.html
    window.rv_supabase = client;
  } else {
    console.warn('⚠️ Ключи пустые — сайт работает на демо-данных');
  }
} catch (e) {
  console.error('❌ Ошибка инициализации Supabase:', e);
}

// Функция проверки админа
async function isAdmin() {
  const c = window.rv_supabase;
  if (!c) return false;
  
  try {
    const { data: { session } } = await c.auth.getSession();
    if (!session) return false;
    
    const { data, error } = await c.rpc('is_admin');
    if (error) { 
      console.error('Ошибка RPC is_admin:', error.message); 
      return false; 
    }
    return !!data;
  } catch (e) {
    console.error('Исключение в isAdmin():', e);
    return false;
  }
}
