/* ======================================================
   DATA — Business data, chargement, analytics
   ====================================================== */
const BIZ = {
  mercerie: {
    id:'mercerie', emoji:'✂️',
    name:{ar:'ميمو مرسيري',fr:'M Mercerie',en:'M Mercerie'},
    tagline:{ar:'كل خيط، كل زر، كل فكرة',fr:'Chaque fil, chaque bouton, chaque idée',en:'Every thread, every button, every idea'},
    location:{ar:'بوعردون، بومرداس',fr:'Bouârdoun, Boumerdès',en:'Bouârdoun, Boumerdès'},
    phone:'0558 25 36 14', whatsapp:'213558253614',
    hero_sub:{ar:'كل ما تحتاجينه من خيوط وأزرار وإبر، مُنظَّم وجاهز للطلب خلال دقيقتين',fr:'Tout ce qu\'il vous faut, prêt à commander en 2 minutes',en:'Everything you need, ready to order in 2 minutes'},
    categories:[
      {id:'threads',title:{ar:'خيوط',fr:'Fils',en:'Threads'},sub:{ar:'ألوان متعددة',fr:'Coloris variés',en:'Many colors'},icon:'🧵'},
      {id:'buttons',title:{ar:'أزرار',fr:'Boutons',en:'Buttons'},sub:{ar:'أشكال متنوعة',fr:'Formes variées',en:'Various shapes'},icon:'🔘'},
      {id:'needles',title:{ar:'إبر',fr:'Aiguilles',en:'Needles'},sub:{ar:'لكل نوع قماش',fr:'Pour chaque tissu',en:'For every fabric'},icon:'🪡'},
      {id:'accessories',title:{ar:'إكسسوارات',fr:'Accessoires',en:'Accessories'},sub:{ar:'لمسة أخيرة',fr:'Touche finale',en:'Finishing touch'},icon:'✨'}
    ],
    trust:[
      {ar:'تشكيلة تتجدد أسبوعيًا',fr:'Nouveautés chaque semaine',en:'New arrivals weekly'},
      {ar:'رد سريع خلال دقائق',fr:'Réponse rapide',en:'Fast reply'},
      {ar:'توصيل بومرداس والجزائر',fr:'Livraison Boumerdès et Alger',en:'Delivery in Boumerdès & Algiers'},
      {ar:'جودة مضمونة',fr:'Qualité garantie',en:'Guaranteed quality'}
    ],
    testimonials:[
      {text:{ar:'"جودة الخيوط ممتازة والرد سريعًا عبر واتساب."',fr:'"Excellente qualité de fils et réponse rapide."',en:'"Great thread quality and fast replies."'},who:{ar:'زبونة من بومرداس',fr:'Cliente de Boumerdès',en:'Boumerdès customer'},avatar:'ب'},
      {text:{ar:'"وجدتُ كل المستلزمات في مكان واحد."',fr:'"J\'ai trouvé tout au même endroit."',en:'"Found everything in one place."'},who:{ar:'زبونة دائمة',fr:'Cliente fidèle',en:'Regular customer'},avatar:'ز'},
      {text:{ar:'"أسعار معقولة وتشكيلة رائعة."',fr:'"Prix raisonnables et superbe sélection."',en:'"Fair prices and wonderful selection."'},who:{ar:'هاوية خياطة',fr:'Passionnée de couture',en:'Sewing enthusiast'},avatar:'ه'}
    ],
    about:{ar:'ميمو من فكرة بسيطة: تيسير الوصول إلى مستلزمات خياطة جيدة بأسعار عادلة.',fr:'M est née d\'une idée simple : rendre les fournitures de couture accessibles.',en:'M started with a simple idea: accessible quality sewing supplies.'},
    faq:[
      {q:{ar:'كيف يتم التوصيل؟',fr:'Livraison ?',en:'Delivery?'},a:{ar:'نوصل إلى بومرداس والجزائر خلال 24-48 ساعة، والدفع عند الاستلام.',fr:'Sous 24-48h, paiement à la livraison.',en:'Within 24-48h, cash on delivery.'}},
      {q:{ar:'هل يمكن استبدال منتج؟',fr:'Échange ?',en:'Exchange?'},a:{ar:'نعم، تواصلي معنا عبر واتساب خلال 3 أيام من الاستلام.',fr:'Oui, sur WhatsApp sous 3 jours.',en:'Yes, on WhatsApp within 3 days.'}}
    ],
    storage_bucket:'mimo-images', table_products:'mercerie_products', table_articles:'mercerie_articles'
  },
  rental: {
    id:'rental', emoji:'💒',
    name:{ar:'ميمو أفراح',fr:'M Afrah',en:'M Afrah'},
    tagline:{ar:'كل ما يحتاجه عرسك',fr:'Tout pour votre mariage',en:'Everything your wedding needs'},
    location:{ar:'الجزائر العاصمة',fr:'Alger',en:'Algiers'},
    phone:'0558 25 36 14', whatsapp:'213558253614',
    hero_sub:{ar:'نؤجّر الطاولات والكراسي والديكور والإضاءة والخيام',fr:'Location de tables, chaises, décoration et tentes',en:'Rent tables, chairs, decor, lighting & tents'},
    categories:[
      {id:'tables',title:{ar:'طاولات',fr:'Tables',en:'Tables'},sub:{ar:'ضيافة وأعياد',fr:'Réception',en:'Reception'},icon:'🪑'},
      {id:'chairs',title:{ar:'كراسي',fr:'Chaises',en:'Chairs'},sub:{ar:'أنيقة ومريحة',fr:'Élégantes',en:'Elegant'},icon:'💺'},
      {id:'decor',title:{ar:'ديكور',fr:'Décoration',en:'Decor'},sub:{ar:'زينة وورد',fr:'Fleurs et déco',en:'Flowers & deco'},icon:'🌸'},
      {id:'lighting',title:{ar:'إضاءة',fr:'Éclairage',en:'Lighting'},sub:{ar:'أجواء مميزة',fr:'Ambiance',en:'Ambiance'},icon:'💡'},
      {id:'tents',title:{ar:'خيام',fr:'Tentes',en:'Tents'},sub:{ar:'للحفلات الخارجية',fr:'Plein air',en:'Outdoor'},icon:'⛺'}
    ],
    trust:[
      {ar:'أفضل أسعار التأجير',fr:'Meilleurs prix',en:'Best prices'},
      {ar:'توصيل وتركيب مجاني',fr:'Livraison et montage gratuits',en:'Free delivery & setup'},
      {ar:'تجهيزات بحالة ممتازة',fr:'Matériel impeccable',en:'Perfect condition'},
      {ar:'خدمة متابعة',fr:'Suivi client',en:'Follow-up service'}
    ],
    testimonials:[
      {text:{ar:'"أجّرت لحفل زفافي وكانت النتيجة مذهلة."',fr:'"Location pour mon mariage, résultat magnifique."',en:'"Rented for my wedding — stunning result."'},who:{ar:'عروس سعيدة',fr:'Mariée comblée',en:'Happy bride'},avatar:'س'},
      {text:{ar:'"خدمة ممتازة وتوصيل في الوقت."',fr:'"Service excellent et ponctuel."',en:'"Excellent service and on-time delivery."'},who:{ar:'عميلة من الجزائر',fr:'Cliente d\'Alger',en:'Algiers customer'},avatar:'م'},
      {text:{ar:'"أسعار معقولة وجودة عالية."',fr:'"Prix raisonnables et haute qualité."',en:'"Fair prices and high quality."'},who:{ar:'منظم مناسبات',fr:'Organisateur',en:'Event organizer'},avatar:'ع'}
    ],
    about:{ar:'ميمو أفراح شريكك الموثوق لتأجير لوازم الأعراس والمناسبات.',fr:'M Afrah, votre partenaire de confiance pour la location événementielle.',en:'M Afrah, your trusted partner for event equipment rental.'},
    faq:[
      {q:{ar:'كيف يتم الحجز؟',fr:'Réservation ?',en:'Booking?'},a:{ar:'تواصلي معنا عبر واتساب واختاري التاريخ والمنتجات المطلوبة.',fr:'Contactez-nous et choisissez date et produits.',en:'Contact us and choose your date and products.'}},
      {q:{ar:'هل التوصيل مجاني؟',fr:'Livraison gratuite ?',en:'Free delivery?'},a:{ar:'نعم، التوصيل والتركيب مجانيان داخل الجزائر العاصمة.',fr:'Oui, gratuit à Alger.',en:'Yes, free within Algiers.'}}
    ],
    storage_bucket:'rental-images', table_products:'rental_items', table_articles:'rental_bookings'
  },
  patisserie: {
    id:'patisserie', emoji:'🎂',
    name:{ar:'ميمو كيك',fr:'M Cake',en:'M Cake'},
    tagline:{ar:'كعكة أحلامكِ... تُولد هنا',fr:'Votre gâteau de rêve... prend vie ici',en:'Your dream cake... comes to life here'},
    location:{ar:'الجزائر العاصمة',fr:'Alger',en:'Algiers'},
    phone:'0558 25 36 14', whatsapp:'213558253614',
    hero_sub:{ar:'كعكات مصممة خصيصًا لكِ، بمكونات فاخرة وتفاصيل مذهلة',fr:'Gâteaux sur mesure avec ingrédients raffinés',en:'Custom cakes with premium ingredients'},
    categories:[
      {id:'wedding',title:{ar:'أعراس',fr:'Mariage',en:'Wedding'},sub:{ar:'تصاميم فاخرة',fr:'Créations raffinées',en:'Elegant designs'},icon:'👰'},
      {id:'birthday',title:{ar:'أعياد ميلاد',fr:'Anniversaire',en:'Birthday'},sub:{ar:'أحلى لحظات',fr:'Moments sucrés',en:'Sweet moments'},icon:'🎈'},
      {id:'cupcakes',title:{ar:'كب كيك',fr:'Cupcakes',en:'Cupcakes'},sub:{ar:'قطع صغيرة كبيرة',fr:'Petites bouchées',en:'Small bites'},icon:'🧁'},
      {id:'custom',title:{ar:'حسب الطلب',fr:'Sur mesure',en:'Custom'},sub:{ar:'صمّمي كعكتك',fr:'Créez le vôtre',en:'Design yours'},icon:'🎨'}
    ],
    trust:[
      {ar:'تصاميم حصرية',fr:'Créations exclusives',en:'Exclusive designs'},
      {ar:'رد سريع',fr:'Réponse rapide',en:'Fast reply'},
      {ar:'توصيل الجزائر العاصمة',fr:'Livraison Alger',en:'Delivery in Algiers'},
      {ar:'مكونات فاخرة',fr:'Ingrédients raffinés',en:'Premium ingredients'}
    ],
    testimonials:[
      {text:{ar:'"كعكة تحلمُ بها... التفاصيل كانت مذهلة."',fr:'"Au-delà de mes rêves — détails superbes."',en:'"Beyond my dreams — stunning details."'},who:{ar:'عميلة من الجزائر',fr:'Cliente d\'Alger',en:'Algiers customer'},avatar:'ب'},
      {text:{ar:'"التصميم مطابق تمامًا للفكرة."',fr:'"Le design correspondait exactement."',en:'"The design matched exactly."'},who:{ar:'عروس سعيدة',fr:'Mariée comblée',en:'Happy bride'},avatar:'ز'},
      {text:{ar:'"الكب كيك لذيذ وأنيق."',fr:'"Cupcakes délicieux et élégants."',en:'"Delicious and elegant cupcakes."'},who:{ar:'عميلة دائمة',fr:'Cliente fidèle',en:'Regular customer'},avatar:'ه'}
    ],
    about:{ar:'ميمو كيك وُلدت من شغف بتحويل المناسبات إلى ذكريات.',fr:'M Cake est née d\'une passion de transformer les occasions en souvenirs.',en:'M Cake was born from a passion for turning occasions into memories.'},
    faq:[
      {q:{ar:'قبل كم يوم يجب الحجز؟',fr:'Combien de jours avant ?',en:'How far ahead?'},a:{ar:'يُنصح بالحجز قبل 3-5 أيام، و قبل أسبوعين للأعراس.',fr:'3-5 jours, 2 semaines pour mariages.',en:'3-5 days, 2 weeks for weddings.'}},
      {q:{ar:'هل التصميم قابل للتخصيص؟',fr:'Design personnalisable ?',en:'Customizable?'},a:{ar:'نعم، نقدم استشارة مجانية لتصميم كعكتك كما تريدين.',fr:'Oui, consultation gratuite.',en:'Yes, free consultation.'}}
    ],
    storage_bucket:'cake-images', table_products:'patisserie_products', table_articles:'patisserie_articles'
  }
};

/* URL d'une page boutique à partir de l'id business */
function bizPage(bizId){ return bizId==='mercerie'?'mercerie.html':bizId==='rental'?'afrah.html':'cake.html'; }

/* ======================================================
   STATE / CHARGEMENT
   ====================================================== */
let currentPage='home', currentBusiness=null;
let allData={mercerie:{products:[],articles:[]},rental:{products:[],articles:[]},patisserie:{products:[],articles:[]}};

async function loadData(bizId) {
  if(!sb) return;
  const b=BIZ[bizId];
  try {
    const [p,a] = await Promise.all([
      sb.from(b.table_products).select('*').order('created_at',{ascending:true}),
      sb.from(b.table_articles).select('*').order('created_at',{ascending:true})
    ]);
    if(p.error) console.error('Products '+bizId+':',p.error.message);
    if(a.error) console.error('Articles '+bizId+':',a.error.message);
    allData[bizId].products=p.data||[];
    allData[bizId].articles=a.data||[];
  } catch(e) { console.error('Load '+bizId+':',e); }
}
async function loadAllData() { if(!sb) return; await Promise.all(['mercerie','rental','patisserie'].map(loadData)); }

/* ======================================================
   ANALYTICS — visites, visiteurs, connexions
   ====================================================== */
let mmSid='';
try{ mmSid=localStorage.getItem('mm_sid')||''; if(!mmSid){ mmSid='S'+Date.now().toString(36)+Math.random().toString(36).slice(2,10); localStorage.setItem('mm_sid',mmSid);} }catch(e){}
let lastPv=0;
async function trackEvent(type,meta){
  if(!sb) return;
  try{
    if(type==='page_view'){
      const now=Date.now();
      if(now-lastPv<30000) return;
      lastPv=now;
    }
    const payload={event_type:type,session_id:mmSid,page:currentPage||'home',meta:meta||{}};
    if(typeof authUser!=='undefined'&&authUser&&authUser.id) payload.user_id=authUser.id;
    await sb.from('analytics_events').insert(payload);
  }catch(e){ console.warn('trackEvent:',e); }
}
function initAnalytics(){ if(sb) trackEvent('page_view',{}); }

/* ======================================================
   ESPACE MEMBRE — favoris + commandes WhatsApp (P0)
   ====================================================== */
let mmFavIds=new Set();
let mmFavs=[];

async function loadMyFavs(user){
  const u=user||authUser;
  if(!sb||!u){ mmFavIds=new Set(); mmFavs=[]; refreshFavHearts(); return; }
  try{
    const {data}=await sb.from('favorites').select('*').eq('user_id',u.id);
    mmFavs=data||[];
    mmFavIds=new Set(mmFavs.map(f=>f.business_id+'|'+f.item_id));
  }catch(e){ console.warn('loadMyFavs:',e); }
  refreshFavHearts();
}
function isFav(bizId,itemId){ return mmFavIds.has(bizId+'|'+itemId); }
function refreshFavHearts(){
  document.querySelectorAll('.fav-btn[data-biz][data-item]').forEach(btn=>{
    btn.classList.toggle('active',mmFavIds.has(btn.dataset.biz+'|'+btn.dataset.item));
  });
}
async function toggleFav(bizId,btn){
  if(!sb||!authUser){
    showToast(T.fav_login_hint[currentLang],'info');
    location.href='login.html';
    return null;
  }
  const item={id:btn.dataset.item||'',title:btn.dataset.title||'',price:btn.dataset.price||'',image_url:btn.dataset.image||''};
  const key=bizId+'|'+item.id;
  try{
    if(mmFavIds.has(key)){
      const {error}=await sb.from('favorites').delete().eq('user_id',authUser.id).eq('business_id',bizId).eq('item_id',item.id);
      if(error) throw error;
      mmFavIds.delete(key);
      mmFavs=mmFavs.filter(f=>!(f.business_id===bizId&&f.item_id===item.id));
      showToast(T.fav_removed[currentLang],'info');
      refreshFavHearts();
      return false;
    }
    const {error}=await sb.from('favorites').insert({user_id:authUser.id,business_id:bizId,item_id:item.id,title:item.title,price:item.price,image_url:item.image_url});
    if(error) throw error;
    mmFavIds.add(key);
    mmFavs.unshift({business_id:bizId,item_id:item.id,title:item.title,price:item.price,image_url:item.image_url,created_at:new Date().toISOString()});
    showToast(T.fav_added[currentLang],'success');
    refreshFavHearts();
    return true;
  }catch(err){ console.warn('toggleFav:',err); showToast(T.toast_error[currentLang]+': '+err.message,'error'); return null; }
}

function waProductMessage(bizId,item,profile){
  const lines=[currentLang==='ar'?'مرحبًا، أريد طلب:':currentLang==='fr'?'Bonjour, je souhaite commander :':'Hello, I would like to order:'];
  lines.push('• '+(item.title||'')+(item.price?' — '+item.price:''));
  if(profile&&profile.full_name) lines.push(currentLang==='ar'?'الاسم: '+profile.full_name:currentLang==='fr'?'Nom : '+profile.full_name:'Name: '+profile.full_name);
  if(profile&&profile.phone) lines.push(currentLang==='ar'?'الهاتف: '+profile.phone:currentLang==='fr'?'Téléphone : '+profile.phone:'Phone: '+profile.phone);
  const loc=[];
  if(profile&&profile.wilaya) loc.push(profile.wilaya);
  if(profile&&profile.commune) loc.push(profile.commune);
  if(loc.length) lines.push(currentLang==='ar'?'العنوان: '+loc.join('، '):currentLang==='fr'?'Adresse : '+loc.join(', '):'Address: '+loc.join(', '));
  return lines.join('\n');
}

async function placeOrder(bizId,item){
  const b=BIZ[bizId];
  if(!sb||!authUser){
    window.open('https://wa.me/'+b.whatsapp+'?text='+encodeURIComponent(waProductMessage(bizId,item,null)),'_blank');
    return null;
  }
  let profile=null;
  try{
    const {data}=await sb.from('profiles').select('full_name,phone,wilaya,commune').eq('id',authUser.id).maybeSingle();
    profile=data||null;
  }catch(e){}
  const msg=waProductMessage(bizId,item,profile);
  try{
    const {error}=await sb.from('orders').insert({
      user_id:authUser.id,
      business_id:bizId,
      items:[{title:item.title,price:item.price||'',image_url:item.image_url||''}],
      total:item.price||'',
      whatsapp_message:msg,
      status:'nouvelle'
    });
    if(error) throw error;
    showToast(T.order_created[currentLang],'success');
  }catch(err){ console.warn('placeOrder:',err); showToast(T.toast_error[currentLang]+': '+err.message,'error'); }
  window.open('https://wa.me/'+b.whatsapp+'?text='+encodeURIComponent(msg),'_blank');
  return null;
}

/* Clic sur « Commander » d'une carte produit :
   - connecté(e) → enregistre la commande + ouvre WhatsApp (pré-rempli)
   - invité(e) → lien WhatsApp classique (comportement actuel) */
function orderFromCard(bizId,el){
  const item={id:el.dataset.id||'',title:el.dataset.title||'',price:el.dataset.price||'',image_url:el.dataset.image||''};
  if(sb&&authUser){ placeOrder(bizId,item); return false; }
  return true;
}
