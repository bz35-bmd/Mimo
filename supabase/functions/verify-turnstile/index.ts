// Vérification côté serveur du jeton Cloudflare Turnstile.
// Déploiement :
//   1) Dans votre projet Supabase → Edge Functions → Deploy
//   2) Ajouter la variable d'environnement : TURNSTILE_SECRET_KEY
//      (Secret Key créée dans le dashboard Cloudflare → Turnstile)
// Client : sb.functions.invoke('verify-turnstile', { body: { token } })

const TURNSTILE_VERIFY_URL = 'https://challenges.cloudflare.com/turnstile/v0/siteverify';

Deno.serve(async (req: Request) => {
  const secret = Deno.env.get('0x4AAAAAAEPFGwVtbE6EHf9d5QFiQwVrAsg') || '';
  const headers = { 'Content-Type': 'application/json' };

  try {
    const { token } = await req.json();
    if (!token || !secret) {
      return new Response(JSON.stringify({ success: false }), { headers });
    }
    const res = await fetch(TURNSTILE_VERIFY_URL, {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ secret, response: token }),
    });
    const data = await res.json();
    return new Response(JSON.stringify({ success: data.success === true }), { headers });
  } catch {
    return new Response(JSON.stringify({ success: false }), { headers });
  }
});
