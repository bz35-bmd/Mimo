/* ======================================================
   HOME — stats, cartes business, badges de confiance,
   exit intent
   ====================================================== */
function renderHome(){
  const statsBar=document.getElementById('statsBar');
  if(statsBar){
    const totalProducts=Object.values(allData).reduce((s,d)=>s+d.products.length,0);
    const totalArticles=Object.values(allData).reduce((s,d)=>s+d.articles.length,0);
    statsBar.innerHTML=[
      {label:{ar:'إجمالي المنتجات',fr:'Total produits',en:'Total products'},value:totalProducts,change:'+'},
      {label:{ar:'المقالات',fr:'Articles',en:'Articles'},value:totalArticles,change:'+'},
      {label:{ar:'الأعمال النشطة',fr:'Entreprises actives',en:'Active businesses'},value:3,change:''},
      {label:{ar:'اللغات',fr:'Langues',en:'Languages'},value:3,change:'AR/FR/EN'}
    ].map(s=>'<div class="stat-card reveal"><div class="stat-label">'+s.label[currentLang]+'</div><div class="stat-value">'+s.value+'</div>'+(s.change?'<div class="stat-change">'+s.change+'</div>':'')+'</div>').join('');
  }

  const bizGrid=document.getElementById('bizGrid');
  if(bizGrid){
    bizGrid.innerHTML=Object.values(BIZ).map(b=>{
      const prodCount=allData[b.id].products.length;
      const locked=b.id!=='mercerie';
      return '<a class="biz-card reveal'+(locked?' cs':'')+'" data-biz="'+b.id+'" href="'+bizPage(b.id)+'">'
        +'<div class="biz-card-header"><div class="biz-bg"></div><div class="biz-icon">'+b.emoji+'</div></div>'
        +(locked?'<div class="biz-lock"><span class="bl-emoji">⏳</span><span class="bl-badge">'+T.biz_locked[currentLang]+'</span></div>':'')
        +'<div class="biz-card-body">'
        +'<h3>'+b.name[currentLang]+'</h3>'
        +'<p>'+b.tagline[currentLang]+'</p>'
        +'<div class="biz-card-meta">'
        +'<span class="biz-tag"><span class="pill-dot" style="background:var(--biz-'+b.id+')"></span> '+b.location[currentLang]+'</span>'
        +'<span class="biz-tag">'+prodCount+' '+(currentLang==='ar'?'منتج':currentLang==='fr'?'produits':'products')+'</span>'
        +'</div>'
        +'<div class="biz-card-arrow">→</div>'
        +'</div></a>';
    }).join('');
  }

  const trustBadges=document.getElementById('trustBadges');
  if(trustBadges){
    trustBadges.innerHTML=[
      {icon:'🚚',cls:'tb-green',t:'trust_delivery',sub:'trust_delivery_sub'},
      {icon:'💰',cls:'tb-blue',t:'trust_payment',sub:'trust_payment_sub'},
      {icon:'✅',cls:'tb-orange',t:'trust_quality',sub:'trust_quality_sub'},
      {icon:'💬',cls:'tb-pink',t:'trust_support',sub:'trust_support_sub'}
    ].map(tb=>'<div class="trust-badge reveal"><div class="tb-icon '+tb.cls+'">'+tb.icon+'</div><div class="tb-text"><h4>'+T[tb.t][currentLang]+'</h4><p>'+T[tb.sub][currentLang]+'</p></div></div>').join('');
  }
  setTimeout(()=>initReveal(),50);
}

/* Exit intent */
(function(){
  let exitShown=false;
  function closeExitPopup(){const el=document.getElementById('exitPopup'); if(el) el.classList.remove('show'); exitShown=true;}
  window.closeExitPopup=closeExitPopup;
  document.addEventListener('mouseout',e=>{
    if(exitShown) return;
    if(e.clientY<5){setTimeout(()=>{const el=document.getElementById('exitPopup'); if(el&&!exitShown) el.classList.add('show');},800);}
  });
  document.addEventListener('touchstart',e=>{
    if(exitShown) return;
    if(e.touches[0].clientY<5){setTimeout(()=>{const el=document.getElementById('exitPopup'); if(el&&!exitShown) el.classList.add('show');},800);}
  });
})();

window.onLangChange=function(){ renderHome(); };

(async function initHome(){
  if(sb) await loadAllData();
  renderHome();
})();
