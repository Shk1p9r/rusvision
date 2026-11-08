// Данные из Supabase Dashboard → Settings → API
const SUPABASE_URL = 'https://whqicbrivhiaegtzelci.supabase.co';
const SUPABASE_ANON_KEY = 'sb_publishable_Ffyb_P8kESdDW8I488cYTA_UPF1PSI8';

// ВАЖНО: Используем window.supabase для создания клиента
window.rv_supabase = null; 

try {
  if (SUPABASE_URL && SUPABASE_ANON_KEY) {
    // Создаем клиент только если библиотека загружена
    if (typeof supabase !== 'undefined') {
      window.rv_supabase = supabase.createClient(SUPABASE_URL, SUPABASE_ANON_KEY);
      console.log('✅ Supabase подключён успешно');
    } else {
      console.error('❌ Библиотека supabase-js не найдена! Проверь <script> в index.html.');
    }
  } else {
    console.warn('⚠️ Ключи Supabase пусты — сайт работает на демо-данных');
  }
} catch (e) {
  console.error('❌ Ошибка инициализации Supabase:', e);
}

// Функция проверки админа (использует rv_supabase)
async function isAdmin() {
  const client = window.rv_supabase;
  if (!client) return false;
  
  try {
    const { data: { session } } = await client.auth.getSession();
    if (!session) return false;
    
    const { data, error } = await client.rpc('is_admin');
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
