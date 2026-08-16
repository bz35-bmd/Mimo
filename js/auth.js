/* ======================================================
   AUTH — toast, turnstile, session, login/register/reset,
   commentaires
   ====================================================== */
const AUTH_CF = {login:'cfTurnstileLogin', register:'cfTurnstileRegister', forgot:'cfTurnstileForgot'};
const SITE_URL = location.protocol+'//'+location.host+(location.pathname||'/');
const TURNSTILE_SITE_KEY = "0x4AAAAAAEPFGwVtbE6EHf9d5QFiQwVrAsg"; /* ← Collez ici votre Cloudflare Turnstile Site Key */
let authUser=null;
let cfWidgets={};

function showToast(msg,type){
  let box=document.getElementById('toastBox');
  if(!box){ box=document.createElement('div'); box.id='toastBox'; document.body.appendChild(box); }
  const t=document.createElement('div'); t.className='toast '+(type||'info'); t.textContent=msg;
  box.appendChild(t);
  setTimeout(()=>{ t.classList.add('out'); setTimeout(()=>t.remove(),420); },4200);
}
function cfTurnstileInit(){}
function renderTurnstile(view){
  if(!window.turnstile||!TURNSTILE_SITE_KEY) return;
  const cont=document.getElementById(AUTH_CF[view]); if(!cont) return;
  try{
    if(cfWidgets[view]){ window.turnstile.reset(cfWidgets[view]); }
    else{
      const dark=html.getAttribute('data-theme')!=='light'&&html.getAttribute('data-theme')!=='rose';
      cfWidgets[view]=window.turnstile.render(cont,{sitekey:TURNSTILE_SITE_KEY,theme:dark?'dark':'light',size:'flexible'});
    }
  }catch(e){ console.warn('Turnstile:',e); }
}
function resetTurnstile(view){ if(cfWidgets[view]&&window.turnstile) window.turnstile.reset(cfWidgets[view]); }
function cfToken(view){ return (window.turnstile&&cfWidgets[view])?window.turnstile.getResponse(cfWidgets[view])||'':''; }
async function requireTurnstile(view){
  if(!TURNSTILE_SITE_KEY) return '';
  const token=cfToken(view);
  if(!token){ showToast(T.auth_captcha_err[currentLang],'error'); return null; }
  return token;
}

function setAuthUI(user){
  authUser=user;
  const btn=document.getElementById('authBtn');
  const dd=document.getElementById('userMenu');
  const initial=(user?((user.full_name||user.email||'م').trim()[0]||'م'):'م').toUpperCase();
  if(btn){
    if(user){
      btn.innerHTML='<span class="auth-avatar">'+initial+'</span><span class="auth-name">'+(user.full_name||user.email||'')+'</span>';
      btn.classList.add('logged');
    }else{
      btn.innerHTML='<svg class="auth-icon" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><circle cx="12" cy="8" r="4"/><path d="M4 21c0-4 3.6-6 8-6s8 2 8 6"/></svg><span data-i18n="auth_login">'+T.auth_login[currentLang]+'</span>';
      btn.classList.remove('logged');
    }
  }
  const mAv=document.getElementById('mAvatar');
  const mNm=document.getElementById('mName');
  const mMail=document.getElementById('mMail');
  const mAdmin=document.getElementById('mAdmin');
  if(mAv) mAv.textContent=user?initial:'م';
  if(mNm){
    mNm.textContent=user?(user.full_name||user.email||''):T.auth_login[currentLang];
    if(user) mNm.removeAttribute('data-i18n'); else mNm.setAttribute('data-i18n','auth_login');
  }
  if(mMail) mMail.textContent=user?(user.email||''):'—';
  if(mAdmin) mAdmin.style.display=(user&&user.role==='admin')?'':'none';
  const mLogoutEl=document.getElementById('mLogout');
  if(mLogoutEl) mLogoutEl.style.display=user?'':'none';
  if(dd&&user){
    dd.querySelector('.um-avatar').textContent=initial;
    dd.querySelector('.um-name').textContent=user.full_name||user.email||'';
    dd.querySelector('.um-email').textContent=user.email||'';
  }
  const roleBadge=dd&&dd.querySelector('.um-role');
  if(roleBadge){
    if(user){
      const r=user.role||'member';
      roleBadge.dataset.role=r;
      roleBadge.textContent=T['role_'+r]?T['role_'+r][currentLang]:r;
      roleBadge.style.display='';
    }else{
      roleBadge.dataset.role='';
      roleBadge.textContent='';
      roleBadge.style.display='none';
    }
  }
  const adminLink=dd&&dd.querySelector('.um-admin');
  if(adminLink) adminLink.style.display=(user&&user.role==='admin')?'':'none';
  if(currentBusiness) renderCommentForm(currentBusiness);
}
async function loadProfile(u){
  let full_name=(u.user_metadata&&u.user_metadata.full_name)||'';
  let role='member';
  try{
    const {data}=await sb.from('profiles').select('full_name,role').eq('id',u.id).maybeSingle();
    if(data){
      if(data.full_name) full_name=data.full_name;
      if(data.role) role=data.role;
    }
    await touchLastSeen(u.id);
  }catch(e){}
  setAuthUI({id:u.id,email:u.email,full_name:full_name||'',role});
}
async function touchLastSeen(uid){
  if(!sb) return;
  try{ await sb.from('profiles').update({last_seen:new Date().toISOString()}).eq('id',uid); }catch(e){}
}
function initAuth(){
  if(!sb) return;
  sb.auth.onAuthStateChange((event,session)=>{
    if(event==='SIGNED_OUT'){ setAuthUI(null); if(typeof loadMyFavs==='function') loadMyFavs(); return; }
    if(session&&session.user){
      if(event==='SIGNED_IN') trackEvent('login',{});
      loadProfile(session.user);
      if(typeof loadMyFavs==='function') loadMyFavs(session.user);
    }
  });
  sb.auth.getSession().then(({data})=>{
    if(data.session&&data.session.user){
      loadProfile(data.session.user);
      if(typeof loadMyFavs==='function') loadMyFavs(data.session.user);
    }
  });
}
function authPageMode(){ return document.body.dataset.authPage||''; }
function checkRecovery(){
  if(authPageMode()!=='reset') return;
  const h=location.hash||'';
  const isRecovery=h.indexOf('type=recovery')>=0;
  const forgotForm=document.getElementById('authFormForgot');
  const resetForm=document.getElementById('authFormReset');
  if(forgotForm) forgotForm.classList.toggle('hidden',isRecovery);
  if(resetForm) resetForm.classList.toggle('hidden',!isRecovery);
  if(isRecovery) try{ history.replaceState(null,'',location.pathname+location.search); }catch(e){}
  if(!isRecovery&&forgotForm) setTimeout(()=>renderTurnstile('forgot'),300);
}
function initAuthUI(){
  const authBtn=document.getElementById('authBtn');
  if(authBtn) authBtn.addEventListener('click',e=>{
    e.stopPropagation();
    if(authUser) document.getElementById('userMenu').classList.toggle('open');
    else location.href='login.html';
  });
  document.addEventListener('click',()=>{ const m=document.getElementById('userMenu'); if(m) m.classList.remove('open'); });
  const authMobile=document.getElementById('authMobile');
  if(authMobile) authMobile.addEventListener('click',e=>{
    if(e.target.closest('a')) return;
    e.preventDefault();
    const nav=document.getElementById('mobileNav'),ov=document.getElementById('navOverlay');
    if(nav) nav.classList.remove('open');
    if(ov) ov.classList.remove('open');
    if(authUser) location.href='membre.html'; else location.href='login.html';
  });
  const mLogoutBtn=document.getElementById('mLogout');
  if(mLogoutBtn) mLogoutBtn.addEventListener('click',e=>{
    e.preventDefault(); e.stopPropagation();
    const nav=document.getElementById('mobileNav'),ov=document.getElementById('navOverlay');
    if(nav) nav.classList.remove('open');
    if(ov) ov.classList.remove('open');
    logout();
  });
  initAuth();
  const mode=authPageMode();
  if(mode==='login'||mode==='register') setTimeout(()=>renderTurnstile(mode),300);
  checkRecovery();
}

async function doRegister(e){
  e.preventDefault();
  const f=e.target;
  const name=f.r_name.value.trim(), email=f.r_email.value.trim(), p1=f.r_password.value, p2=f.r_confirm.value;
  if(!name||!email||!p1){ showToast(T.auth_err_required[currentLang],'error'); return; }
  if(p1.length<6){ showToast(T.auth_err_password_len[currentLang],'error'); return; }
  if(p1!==p2){ showToast(T.auth_err_password[currentLang],'error'); return; }
  const token=await requireTurnstile('register'); if(token===null) return;
  try{
    const {error}=await sb.auth.signUp({email,password:p1,options:{data:{full_name:name},...(token?{captchaToken:token}:{})}});
    if(error) throw error;
    trackEvent('register',{email});
    showToast(T.auth_ok_register[currentLang],'success');
    f.reset();
    setTimeout(()=>resetTurnstile('register'),100);
  }catch(err){ showToast(T.toast_error[currentLang]+': '+err.message,'error'); }
}
async function doLogin(e){
  e.preventDefault();
  const f=e.target;
  const email=f.l_email.value.trim(), pwd=f.l_password.value;
  if(!email||!pwd){ showToast(T.auth_err_required[currentLang],'error'); return; }
  const token=await requireTurnstile('login'); if(token===null) return;
  try{
    const {error}=await sb.auth.signInWithPassword({email,password:pwd,options:token?{captchaToken:token}:{}});
    if(error) throw error;
    trackEvent('login',{email});
    showToast(T.auth_ok_login[currentLang],'success');
    setTimeout(()=>{ location.href='index.html'; },900);
  }catch(err){ showToast(T.toast_error[currentLang]+': '+err.message,'error'); }
}
async function doForgot(e){
  e.preventDefault();
  const email=e.target.f_email.value.trim();
  if(!email){ showToast(T.auth_err_required[currentLang],'error'); return; }
  const token=await requireTurnstile('forgot'); if(token===null) return;
  try{
    const {error}=await sb.auth.resetPasswordForEmail(email,{redirectTo:SITE_URL+'reset-password.html',...(token?{captchaToken:token}:{})});
    if(error) throw error;
    showToast(T.auth_ok_forgot[currentLang],'success');
    setTimeout(()=>{ location.href='login.html'; },1400);
  }catch(err){ showToast(T.toast_error[currentLang]+': '+err.message,'error'); }
}
async function doReset(e){
  e.preventDefault();
  const pwd=e.target.n_password.value, p2=e.target.n_confirm.value;
  if(pwd.length<6){ showToast(T.auth_err_password_len[currentLang],'error'); return; }
  if(pwd!==p2){ showToast(T.auth_err_password[currentLang],'error'); return; }
  try{
    const {error}=await sb.auth.updateUser({password:pwd});
    if(error) throw error;
    trackEvent('reset_password',{});
    showToast(T.auth_ok_reset[currentLang],'success');
    setTimeout(()=>{ location.href='login.html'; },900);
  }catch(err){ showToast(T.toast_error[currentLang]+': '+err.message,'error'); }
}
async function googleLogin(){
  if(!sb) return;
  const mode=authPageMode();
  const view=mode==='login'?'login':(mode==='register'?'register':'forgot');
  const token=await requireTurnstile(view); if(token===null) return;
  try{
    const {error}=await sb.auth.signInWithOAuth({provider:'google',options:{redirectTo:SITE_URL,...(token?{captchaToken:token}:{})}});
    if(error) throw error;
  }catch(err){ showToast(T.toast_error[currentLang]+': '+err.message,'error'); }
}
async function logout(){
  if(sb) await sb.auth.signOut();
  setAuthUI(null);
  showToast(T.auth_logout[currentLang],'info');
}

/* ======================================================
   COMMENTAIRES
   ====================================================== */
function timeAgo(iso,lang){
  const d=new Date(iso); if(isNaN(d)) return '';
  const s=Math.floor((Date.now()-d.getTime())/1000);
  if(s<60) return lang==='ar'?'الآن':lang==='fr'?'à l\'instant':'now';
  const m=Math.floor(s/60); if(m<60) return lang==='ar'?m+' دقيقة':lang==='fr'?m+' min':m+'m';
  const h=Math.floor(m/60); if(h<24) return lang==='ar'?h+' ساعة':lang==='fr'?h+' h':h+'h';
  const dd=Math.floor(h/24); return lang==='ar'?dd+' يوم':lang==='fr'?dd+' j':dd+'d';
}
function renderCommentForm(bizId){
  const wrap=document.getElementById('commentsFormWrap');
  if(!wrap) return;
  if(!authUser){
    wrap.innerHTML='<div class="comments-login-hint">'+T.comments_login_hint[currentLang]+' <a href="login.html">'+T.auth_login[currentLang]+'</a></div>';
    return;
  }
  const nm=authUser.full_name||authUser.email||'م';
  wrap.innerHTML='<form class="comment-form" onsubmit="submitComment(event,this,\''+bizId+'\')">'+
    '<div class="comment-form-top"><span class="comment-avatar">'+nm.trim()[0].toUpperCase()+'</span>'+
    '<textarea name="text" required placeholder="'+T.comments_placeholder[currentLang]+'"></textarea></div>'+
    '<button type="submit" class="submit-btn">'+T.comments_submit[currentLang]+'</button></form>';
}
async function loadComments(bizId){
  const list=document.getElementById('commentsList');
  if(!list) return;
  if(!sb){ list.innerHTML='<p class="comments-empty">'+T.comments_empty[currentLang]+'</p>'; return; }
  try{
    const {data,error}=await sb.from('comments').select('*').eq('business_id',bizId).order('created_at',{ascending:false}).limit(50);
    if(error) throw error;
    if(!data||!data.length){ list.innerHTML='<p class="comments-empty">'+T.comments_empty[currentLang]+'</p>'; }
    else{
      list.innerHTML=data.map(c=>'<div class="comment-card"><span class="comment-avatar">'+((c.author_name||'م').trim()[0]||'م').toUpperCase()+'</span>'+
        '<div class="comment-body"><div class="comment-head"><strong>'+c.author_name+'</strong><span>'+timeAgo(c.created_at,currentLang)+'</span></div>'+
        '<p>'+c.text+'</p></div></div>').join('');
    }
  }catch(e){ console.warn('comments:',e); }
}
async function submitComment(e,form,bizId){
  e.preventDefault();
  const text=form.text.value.trim();
  if(!text||!sb||!authUser) return;
  try{
    const {error}=await sb.from('comments').insert({business_id:bizId,user_id:authUser.id,author_name:authUser.full_name||authUser.email||'عميلة',text});
    if(error) throw error;
    form.reset(); showToast(T.comments_ok[currentLang],'success');
    loadComments(bizId);
  }catch(err){ showToast(T.toast_error[currentLang]+': '+err.message,'error'); }
}
