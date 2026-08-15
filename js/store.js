/* ======================================================
   STORE — rendu boutique, quick view, sticky CTA
   ====================================================== */
function escAttr(s){ return String(s==null?'':s).replace(/&/g,'&amp;').replace(/"/g,'&quot;'); }
function renderStore(bizId){
  const b=BIZ[bizId]; if(!b) return;
  const products=allData[bizId].products;
  const storeContent=document.getElementById('storeContent');
  if(!storeContent) return;
  storeContent.innerHTML=''
    +'<div class="store-header">'
    +'<a class="back-btn" href="index.html">'+T.back_home[currentLang]+'</a>'
    +'<h1>'+b.emoji+' '+b.name[currentLang]+'</h1>'
    +'<p>'+b.hero_sub[currentLang]+'</p>'
    +'</div>'
    +'<div class="store-pills">'+b.trust.map(t=>'<div class="pill"><span class="pill-dot"></span>'+t[currentLang]+'</div>').join('')+'</div>'

    +'<div class="store-section">'
    +'<div class="store-section-header"><h2>'+(currentLang==='ar'?'تصفّحي حسب الفئة':currentLang==='fr'?'Parcourez par catégorie':'Browse by category')+'</h2></div>'
    +'<div class="cats-grid">'+b.categories.map(c=>''
      +'<div class="cat-card reveal">'
      +'<div class="cat-icon">'+c.icon+'</div>'
      +'<h3>'+c.title[currentLang]+'</h3><span>'+c.sub[currentLang]+'</span>'
      +'</div>').join('')+'</div></div>'

    +'<div class="store-section">'
    +'<div class="store-section-header"><h2>'+(currentLang==='ar'?'المنتجات':currentLang==='fr'?'Produits':'Products')+'</h2></div>'
    +'<div class="products-grid">'+(products.length?products.map((p,idx)=>{
      const badges=[];
      if(idx===0) badges.push('<span class="card-badge hot">🔥 '+((currentLang==='ar'?'الأكثر مبيعًا':currentLang==='fr'?'Best-seller':'Best-seller'))+'</span>');
      if(idx===1) badges.push('<span class="card-badge new">✨ '+((currentLang==='ar'?'جديد':currentLang==='fr'?'Nouveau':'New'))+'</span>');
      if(idx===products.length-1&&products.length>3) badges.push('<span class="card-badge limited">⚡ '+((currentLang==='ar'?'stock limité':currentLang==='fr'?'Stock limité':'Limited stock'))+'</span>');
      const rating=Math.floor(Math.random()*2)+4;
      const reviewCount=Math.floor(Math.random()*30)+5;
      const waText=encodeURIComponent('مرحبًا، أريد الاستفسار عن '+p.title+(p.price?' — السعر: '+p.price:''));
      return '<div class="product-card reveal">'
        +'<div class="product-img">'+(p.image_url?'<img src="'+p.image_url+'" alt="'+p.title+'">':'<span class="placeholder-icon">'+b.emoji+'</span>')
        +'<button type="button" class="fav-btn" data-biz="'+bizId+'" data-item="'+escAttr(p.id)+'" data-title="'+escAttr(p.title)+'" data-price="'+escAttr(p.price||'')+'" data-image="'+escAttr(p.image_url||'')+'" aria-label="Favori" onclick="event.stopPropagation();toggleFav(\''+bizId+'\',this)">'
        +'<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linejoin="round"><path d="M20.84 4.61a5.5 5.5 0 0 0-7.78 0L12 5.67l-1.06-1.06a5.5 5.5 0 0 0-7.78 7.78l1.06 1.06L12 21.23l7.78-7.78 1.06-1.06a5.5 5.5 0 0 0 0-7.78z"/></svg>'
        +'</button>'
        +'<div class="card-quick-view" onclick="openQuickView(\''+(p.title||'').replace(/'/g,"\\'")+'\',\''+(p.price||'').replace(/'/g,"\\'")+'\',\''+(p.description||'').replace(/'/g,"\\'")+'\',\''+(p.image_url||'').replace(/'/g,"\\'")+'\',\''+b.whatsapp+'\',\''+waText.replace(/'/g,"\\'")+'\')"><span>👁 '+(currentLang==='ar'?'عرض سريع':currentLang==='fr'?'Aperçu rapide':'Quick view')+'</span></div>'
        +'</div>'
        +'<div class="product-body">'
        +'<div class="card-badges">'+badges.join('')+'</div>'
        +'<div class="card-rating"><span class="stars">'+'★'.repeat(rating)+'☆'.repeat(5-rating)+'</span><span class="count">('+reviewCount+')</span></div>'
        +'<h3>'+p.title+'</h3>'
        +(p.price?'<span class="price">'+p.price+'</span>':'')
        +'<a href="https://wa.me/'+b.whatsapp+'?text='+waText+'" target="_blank" class="product-btn" data-id="'+escAttr(p.id)+'" data-title="'+escAttr(p.title)+'" data-price="'+escAttr(p.price||'')+'" data-image="'+escAttr(p.image_url||'')+'" onclick="return orderFromCard(\''+bizId+'\',this)">'+T.prod_btn[currentLang]+'</a>'
        +'</div></div>';
    }).join(''):'<p style="text-align:center;grid-column:1/-1;color:var(--text-muted);padding:40px 0;">'+(currentLang==='ar'?'لا توجد منتجات بعد':currentLang==='fr'?'Aucun produit':'No products yet')+'</p>')+'</div></div>'

    +'<div class="store-section comments-section">'
    +'<div class="store-section-header"><h2>'+T.comments_title[currentLang]+'</h2></div>'
    +'<div id="commentsFormWrap"></div>'
    +'<div class="comments-list" id="commentsList"><p class="comments-empty">'+T.comments_empty[currentLang]+'</p></div>'
    +'</div>'

    +'<div class="store-section">'
    +'<div class="test-section">'
    +'<div class="store-section-header"><h2>'+T.test_title[currentLang]+'</h2></div>'
    +'<div class="test-grid">'+b.testimonials.map(t=>''
      +'<div class="test-card reveal">'
      +'<div class="test-stars">★★★★★</div>'
      +'<p>'+t.text[currentLang]+'</p>'
      +'<div class="test-who"><div class="test-avatar">'+t.avatar+'</div>'+t.who[currentLang]+'</div>'
      +'</div>').join('')+'</div></div></div>'

    +'<div class="store-section">'
    +'<div class="about-row">'
    +'<div class="about-visual"><div class="about-shape">'+b.emoji+'</div></div>'
    +'<div class="about-text"><h2>'+T.about_eyebrow[currentLang]+'</h2><p>'+b.about[currentLang]+'</p></div>'
    +'</div></div>'

    +'<div class="store-section">'
    +'<div class="store-section-header"><h2>'+T.faq_title[currentLang]+'</h2></div>'
    +'<div class="faq-list">'+b.faq.map(f=>''
      +'<details class="faq-item reveal"><summary>'+f.q[currentLang]+'</summary><div class="faq-body">'+f.a[currentLang]+'</div></details>').join('')+'</div>'
    +'</div>'

    +'<div class="store-section contact-section">'
    +'<div class="contact-grid">'
    +'<div class="contact-info">'
    +'<h2>'+T.contact_title[currentLang]+'</h2>'
    +'<div class="contact-row">📞 '+b.phone+'</div>'
    +'<div class="contact-row">📍 '+b.location[currentLang]+'</div>'
    +'<a href="https://wa.me/'+b.whatsapp+'" target="_blank" class="wa-btn-contact">💬 WhatsApp →</a>'
    +'</div>'
    +'<form class="contact-form-side" onsubmit="event.preventDefault();window.open(\'https://wa.me/'+b.whatsapp+'?text=\'+encodeURIComponent(\'مرحبًا، اسمي \'+this.name.value+\'. \'+this.message.value),\'_blank\');">'
    +'<input type="text" name="name" placeholder="'+T.form_name[currentLang]+'" required>'
    +'<input type="tel" name="phone" placeholder="'+T.form_phone[currentLang]+'" required>'
    +'<textarea name="message" placeholder="'+T.form_message[currentLang]+'" required></textarea>'
    +'<button type="submit" class="submit-btn">'+T.form_submit[currentLang]+'</button>'
    +'</form>'
    +'</div></div>';

  const floatWa=document.getElementById('floatWa');
  if(floatWa) floatWa.href='https://wa.me/'+b.whatsapp;
  refreshFavHearts();
  renderCommentForm(bizId);
  loadComments(bizId);
  setTimeout(()=>initReveal(),100);
}

/* ---- Quick view ---- */
function openQuickView(title,price,desc,imageUrl,whatsapp,waText){
  const qvTitle=document.getElementById('qvTitle');
  if(!qvTitle) return;
  qvTitle.textContent=title;
  document.getElementById('qvPrice').textContent=price||((currentLang==='ar'?'السعر عند الاستفسار':currentLang==='fr'?'Prix sur demande':'Price on request'));
  document.getElementById('qvDesc').textContent=desc||(currentLang==='ar'?'منتج مميز بجودة عالية.':currentLang==='fr'?'Produit de haute qualité.':'High-quality product.');
  const imgContainer=document.getElementById('qvImg');
  if(imageUrl){imgContainer.innerHTML='<img src="'+imageUrl+'" alt="'+title+'">';}
  else{imgContainer.innerHTML='<div class="qv-placeholder">✂️</div>';}
  const badges=['hot','new','limited'];
  const labels=['🔥 '+((currentLang==='ar'?'الأكثر مبيعًا':currentLang==='fr'?'Best-seller':'Best-seller')),'✨ '+((currentLang==='ar'?'جديد':currentLang==='fr'?'Nouveau':'New')),'⚡ '+((currentLang==='ar'?'Stock limité':currentLang==='fr'?'Stock limité':'Limited stock'))];
  const badgeIdx=Math.floor(Math.random()*3);
  const badgeEl=document.getElementById('qvBadge');
  badgeEl.className='qv-badge badge-'+badges[badgeIdx];
  badgeEl.textContent=labels[badgeIdx];
  badgeEl.style.display='inline-flex';
  const stock=Math.floor(Math.random()*10)+1;
  const stockEl=document.getElementById('qvStock');
  if(stock<=3){
    stockEl.innerHTML='<div class="stock-dot low-stock"></div> <span>'+(currentLang==='ar'?'متبقي '+stock+' فقط':currentLang==='fr'?'Plus que '+stock+' en stock':'Only '+stock+' left')+'</span>';
  } else {
    stockEl.innerHTML='<div class="stock-dot in-stock"></div> <span>'+(currentLang==='ar'?'متوفر':currentLang==='fr'?'En stock':'In stock')+'</span>';
  }
  document.getElementById('qvWaBtn').href='https://wa.me/'+whatsapp+'?text='+waText;
  document.getElementById('qvOverlay').classList.add('open');
  document.body.style.overflow='hidden';
}
function closeQuickView(){
  const ov=document.getElementById('qvOverlay');
  if(ov) ov.classList.remove('open');
  document.body.style.overflow='';
}

/* ---- Sticky CTA (boutique) ---- */
function initStickyCta(){
  const sticky=document.getElementById('stickyCta');
  const floatWa=document.getElementById('floatWa');
  if(!sticky) return;
  const b=BIZ.mercerie;
  document.getElementById('ctaTitle').textContent=b.emoji+' '+b.name[currentLang];
  document.getElementById('ctaSub').textContent=(currentLang==='ar'?'اطلب الآن عبر واتساب':currentLang==='fr'?'Commandez via WhatsApp':'Order via WhatsApp');
  document.getElementById('ctaWa').href='https://wa.me/'+b.whatsapp;
  sticky.classList.add('visible');
  if(floatWa) floatWa.style.display='none';
}

window.onLangChange=function(){ renderStore(currentBusiness||'mercerie'); initStickyCta(); };

(async function initStore(){
  if(sb) await loadData('mercerie');
  renderStore('mercerie');
  initStickyCta();
})();
