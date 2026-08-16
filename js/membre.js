/* ======================================================
   ESPACE MEMBRE — favoris, commandes, profil (P0)
   ====================================================== */
(function(){
'use strict';

let mUser=null, mProfile=null, mOrders=[], mActive='orders';

function t(k){ const e=T[k]; return e?(e[currentLang]||e.ar):k; }
function esc(s){ return String(s==null?'':s).replace(/&/g,'&amp;').replace(/</g,'&lt;').replace(/>/g,'&gt;').replace(/"/g,'&quot;'); }
function fmtDate(iso){
  try{ const d=new Date(iso); if(isNaN(d)) return ''; return d.toLocaleDateString(currentLang==='ar'?'ar-DZ':currentLang==='fr'?'fr-FR':'en-US',{day:'numeric',month:'short',year:'numeric'}); }
  catch(e){ return iso; }
}
function statusLabel(s){ return (T['st_'+s]&&T['st_'+s][currentLang])?T['st_'+s][currentLang]:s; }
function bizName(id){ const b=BIZ[id]; return b&&b.name?(b.name[currentLang]||b.name.ar):id; }
function bizWa(id){ return (BIZ[id]&&BIZ[id].whatsapp)?BIZ[id].whatsapp:'213541920113'; }

function root(){ return document.getElementById('memberRoot'); }

function renderLogin(){
  root().innerHTML='<div class="mem-login">'
    +'<div class="mem-login-icon">👤</div>'
    +'<h2>'+t('mem_login_hint')+'</h2>'
    +'<a class="product-btn" href="login.html">'+t('mem_login_btn')+' →</a>'
    +'</div>';
}

async function refresh(){
  if(!sb){ renderLogin(); return; }
  const {data:sd}=await sb.auth.getSession();
  mUser=(sd.session&&sd.session.user)||null;
  if(!mUser){ renderLogin(); return; }
  const [p,o]=await Promise.all([
    (async()=>{ try{ const {data}=await sb.from('profiles').select('full_name,phone,wilaya,commune,role,email').eq('id',mUser.id).maybeSingle(); return data||{}; }catch(e){ return {}; } })(),
    (async()=>{ try{ const {data}=await sb.from('orders').select('*').eq('user_id',mUser.id).order('created_at',{ascending:false}); return data||[]; }catch(e){ return []; } })()
  ]);
  mProfile=p||{}; mOrders=o||[];
  await loadMyFavs(mUser);
  render();
}

function render(){
  const tabs=[['orders',t('mem_tab_orders'),mOrders.length],['favs',t('mem_tab_favs'),mmFavs.length],['profile',t('mem_tab_profile'),null]]
    .map(x=>'<button type="button" class="mem-tab'+(mActive===x[0]?' active':'')+'" data-tab="'+x[0]+'">'+x[1]+(x[2]!=null?'<span class="mem-tab-count">'+x[2]+'</span>':'')+'</button>')
    .join('');
  root().innerHTML=''
    +'<div class="mem-header">'
    +'<h1>'+t('mem_title')+'</h1>'
    +'<p>'+t('mem_sub')+'</p>'
    +'</div>'
    +'<div class="mem-tabs">'+tabs+'</div>'
    +'<div class="mem-panel">'+renderPanel()+'</div>';
  root().querySelectorAll('.mem-tab').forEach(b=>b.addEventListener('click',()=>{ mActive=b.dataset.tab; render(); }));
  if(mActive==='profile') attachProfileForm();
}

function renderPanel(){
  if(mActive==='favs') return renderFavs();
  if(mActive==='profile') return renderProfile();
  return renderOrders();
}

/* ---------- FAVORIS ---------- */
function renderFavs(){
  if(!mmFavs.length){
    return '<div class="mem-empty"><p>'+t('fav_empty')+'</p><a class="product-btn" href="mercerie.html">'+t('fav_shop')+' →</a></div>';
  }
  return '<div class="mem-fav-grid">'+mmFavs.map(f=>{
    const img=f.image_url?'<img src="'+esc(f.image_url)+'" alt="'+esc(f.title)+'">':'<span class="placeholder-icon">'+(BIZ[f.business_id]?BIZ[f.business_id].emoji:'🛍️')+'</span>';
    return '<div class="mem-fav-card">'
      +'<div class="mem-fav-img">'+img
      +'<button type="button" class="fav-btn active" data-biz="'+esc(f.business_id)+'" data-item="'+esc(f.item_id)+'" data-title="'+esc(f.title)+'" data-price="'+esc(f.price)+'" data-image="'+esc(f.image_url)+'" aria-label="Favori" onclick="event.stopPropagation();toggleFav(\''+esc(f.business_id)+'\',this);setTimeout(function(){membreReload();},600);">'
      +'<svg viewBox="0 0 24 24" fill="currentColor" stroke="currentColor" stroke-width="2" stroke-linejoin="round"><path d="M20.84 4.61a5.5 5.5 0 0 0-7.78 0L12 5.67l-1.06-1.06a5.5 5.5 0 0 0-7.78 7.78l1.06 1.06L12 21.23l7.78-7.78 1.06-1.06a5.5 5.5 0 0 0 0-7.78z"/></svg>'
      +'</button></div>'
      +'<div class="mem-fav-body">'
      +'<span class="mem-fav-biz">'+esc(bizName(f.business_id))+'</span>'
      +'<h3>'+esc(f.title)+'</h3>'
      +(f.price?'<span class="price">'+esc(f.price)+'</span>':'')
      +'<a href="https://wa.me/'+bizWa(f.business_id)+'" target="_blank" class="product-btn" data-biz="'+esc(f.business_id)+'" data-id="'+esc(f.item_id)+'" data-title="'+esc(f.title)+'" data-price="'+esc(f.price)+'" data-image="'+esc(f.image_url)+'" onclick="return orderFromCard(\''+esc(f.business_id)+'\',this)">'+t('prod_btn')+'</a>'
      +'</div></div>';
  }).join('')+'</div>';
}

/* ---------- COMMANDES ---------- */
function renderOrders(){
  if(!mOrders.length){
    return '<div class="mem-empty"><p>'+t('orders_empty')+'</p><a class="product-btn" href="mercerie.html">'+t('fav_shop')+' →</a></div>';
  }
  return '<div class="mem-orders">'+mOrders.map(o=>{
    const items=(o.items&&o.items.length)?o.items:[];
    const itemsHtml=items.map(it=>'<div class="mem-o-item"><span>'+(it.title||'')+'</span>'+(it.price?'<b>'+esc(it.price)+'</b>':'')+'</div>').join('');
    return '<div class="mem-order">'
      +'<div class="mem-o-top">'
      +'<span class="mem-o-num">'+t('order_num')+' #'+esc(String(o.id).slice(0,8))+'</span>'
      +'<span class="mem-o-status st-'+esc(o.status||'nouvelle')+'">'+statusLabel(o.status||'nouvelle')+'</span>'
      +'</div>'
      +'<div class="mem-o-meta">'+esc(bizName(o.business_id))+' · '+fmtDate(o.created_at)+'</div>'
      +(itemsHtml?'<div class="mem-o-items">'+itemsHtml+'</div>':'')
      +(o.total?'<div class="mem-o-total">'+t('order_total')+': <b>'+esc(o.total)+'</b></div>':'')
      +'<button type="button" class="product-btn mem-o-reorder" onclick="membreReorder(\''+o.id+'\',\''+esc(o.business_id)+'\')">↻ '+t('order_reorder')+'</button>'
      +'</div>';
  }).join('')+'</div>';
}
window.membreReorder=function(orderId,bizId){
  const o=mOrders.find(x=>x.id===orderId);
  if(!o||!o.items||!o.items[0]) return;
  placeOrder(bizId,o.items[0]);
};

/* ---------- PROFIL ---------- */
function wilayaOptions(current){
  const opts=['<option value=""'+(current?'':' selected')+'>—</option>'];
  for(let i=1;i<=58;i++){
    const v=String(i).padStart(2,'0');
    opts.push('<option value="'+v+'"'+(String(current)===v?' selected':'')+'>'+v+'</option>');
  }
  return opts.join('');
}
function renderProfile(){
  return '<div class="mem-profile">'
    +'<p class="mem-prof-hint">'+t('prof_hint')+'</p>'
    +'<form id="profileForm" onsubmit="return false">'
    +'<label for="pfName">'+t('prof_name')+'</label><input type="text" id="pfName" value="'+esc(mProfile.full_name||'')+'">'
    +'<label for="pfPhone">'+t('prof_phone')+'</label><input type="tel" id="pfPhone" value="'+esc(mProfile.phone||'')+'" dir="ltr">'
    +'<label for="pfWilaya">'+t('prof_wilaya')+'</label><select id="pfWilaya">'+wilayaOptions(mProfile.wilaya||'')+'</select>'
    +'<label for="pfCommune">'+t('prof_commune')+'</label><input type="text" id="pfCommune" value="'+esc(mProfile.commune||'')+'">'
    +'<button type="submit" class="product-btn">'+t('prof_save')+'</button>'
    +'</form></div>';
}
function attachProfileForm(){
  const f=document.getElementById('profileForm');
  if(!f) return;
  f.addEventListener('submit',async e=>{
    e.preventDefault();
    const name=document.getElementById('pfName').value.trim();
    const phone=document.getElementById('pfPhone').value.trim();
    const wilaya=document.getElementById('pfWilaya').value;
    const commune=document.getElementById('pfCommune').value.trim();
    try{
      const {error}=await sb.from('profiles').update({full_name:name,phone:phone,wilaya:wilaya,commune:commune}).eq('id',mUser.id);
      if(error) throw error;
      mProfile.full_name=name; mProfile.phone=phone; mProfile.wilaya=wilaya; mProfile.commune=commune;
      if(typeof loadProfile==='function') loadProfile(mUser);
      showToast(t('prof_saved'),'success');
    }catch(err){ console.warn('saveProfile:',err); showToast(t('toast_error')+': '+err.message,'error'); }
  });
}

window.membreReload=function(){ refresh(); };
window.onLangChange=function(){ refresh(); };

refresh();
})();
