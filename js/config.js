/* ======================================================
   CONFIG — Configuration Supabase (partagee par toutes les pages)
   Modifier uniquement ces deux lignes :
   Supabase Dashboard -> Settings -> API -> Project URL + anon public key
   ====================================================== */
const SUPABASE_URL = "https://znuwdlkrwzzbmgyzghva.supabase.co";
const SUPABASE_ANON_KEY = "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6InpudXdkbGtyd3p6Ym1neXpnaHZhIiwicm9sZSI6ImFub24iLCJpYXQiOjE3ODQ4NDUxNTgsImV4cCI6MjEwMDQyMTE1OH0.IEf14yBXC2txC_rbVbHS2yHqVwasm2TWdU1jQvH9Ubo";

let sb = null;
try {
  if (SUPABASE_URL.startsWith('http') && typeof window.supabase !== 'undefined') {
    sb = window.supabase.createClient(SUPABASE_URL, SUPABASE_ANON_KEY);
  } else {
    console.warn('Supabase.js (CDN) non charge - verifiez la connexion reseau.');
  }
} catch(e) { console.error(e); }
