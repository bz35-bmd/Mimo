/* ======================================================
   TRANSLATIONS
   ====================================================== */
const T = {
  admin_title:{ar:'لوحة الإدارة',fr:'Panneau admin',en:'Admin panel'},
  admin_sub:{ar:'أضيفي وعدّلي واحذفي المنتجات لكل مشروع',fr:'Gérez les produits de chaque entreprise',en:'Manage products for each business'},
  admin_login:{ar:'دخول الإدارة',fr:'Connexion admin',en:'Admin Login'},
  admin_logout:{ar:'تسجيل الخروج',fr:'Déconnexion',en:'Logout'},
  admin_add_product:{ar:'إضافة منتج',fr:'Ajouter produit',en:'Add product'},
  admin_products:{ar:'المنتجات',fr:'Produits',en:'Products'},
  admin_articles:{ar:'المقالات',fr:'Articles',en:'Articles'},
  admin_add_article:{ar:'إضافة مقال',fr:'Ajouter article',en:'Add article'},
  back_to_platform:{ar:'العودة للمنصة',fr:'Retour à la plateforme',en:'Back to platform'},
  stats_title:{ar:'الإحصائيات',fr:'Statistiques',en:'Statistics'},
  stats_users:{ar:'عملاء مسجّلون',fr:'Clients inscrits',en:'Registered clients'},
  stats_online:{ar:'متصلون الآن',fr:'Connectés maintenant',en:'Online now'},
  stats_visits_today:{ar:'زيارات اليوم',fr:'Visites aujourd\'hui',en:'Visits today'},
  stats_visitors_today:{ar:'زوار اليوم',fr:'Visiteurs aujourd\'hui',en:'Visitors today'},
  stats_visits_month:{ar:'زيارات الشهر',fr:'Visites ce mois',en:'Visits this month'},
  stats_logins_month:{ar:'دخول الشهر',fr:'Connexions ce mois',en:'Logins this month'},
  stats_comments_month:{ar:'تعليقات الشهر',fr:'Commentaires ce mois',en:'Comments this month'},
  stats_chart_visits:{ar:'الزيارات — آخر 30 يومًا',fr:'Visites — 30 derniers jours',en:'Visits — last 30 days'},
  stats_chart_logins:{ar:'عمليات الدخول — آخر 30 يومًا',fr:'Connexions — 30 derniers jours',en:'Logins — last 30 days'},
  stats_chart_comments:{ar:'التعليقات — آخر 30 يومًا',fr:'Commentaires — 30 derniers jours',en:'Comments — last 30 days'},
  stats_last6m:{ar:'الزيارات — آخر 6 أشهر',fr:'Visites — 6 derniers mois',en:'Visits — last 6 months'},
  stats_empty_hint:{ar:'(تظهر الأرقام بعد جمع البيانات من الموقع)',fr:'(Les chiffres apparaissent après collecte des données du site)',en:'(Figures appear once site data is collected)'},
  admin_users:{ar:'المستخدمون',fr:'Utilisateurs',en:'Users'},
  admin_denied_title:{ar:'غير مصرح لك',fr:'Accès refusé',en:'Access denied'},
  admin_denied_desc:{ar:'لوحة الإدارة متاحة فقط للمسؤولين',fr:'Ce panneau est réservé aux administrateurs',en:'This panel is restricted to admins'},
  admin_denied_login:{ar:'حسابك مسجل، لكن ليس لديك صلاحية الوصول إلى هذه الصفحة',fr:'Votre compte est connecté mais ne possède pas les droits pour cette page',en:'You are signed in but your account lacks access to this page'},
  admin_login_error_role:{ar:'خطأ: حسابك ليس له صلاحية الإدارة',fr:'Erreur : votre compte n\'a pas le rôle admin',en:'Error: your account does not have admin access'},
  role_admin:{ar:'مشرف',fr:'Admin',en:'Admin'},
  role_moderator:{ar:'منسقة',fr:'Modérateur',en:'Moderator'},
  role_member:{ar:'عضو',fr:'Membre',en:'Member'},
  admin_change_role:{ar:'تغيير الدور',fr:'Changer le rôle',en:'Change role'},
  modal_add_product:{ar:'إضافة منتج',fr:'Ajouter un produit',en:'Add product'},
  modal_add_article:{ar:'إضافة مقال',fr:'Ajouter un article',en:'Add article'},
  modal_edit_product:{ar:'تعديل منتج',fr:'Modifier le produit',en:'Edit product'},
  modal_edit_article:{ar:'تعديل مقال',fr:'Modifier l\'article',en:'Edit article'},
  modal_label_title:{ar:'الاسم',fr:'Nom',en:'Name'},
  modal_label_price:{ar:'السعر',fr:'Prix',en:'Price'},
  modal_label_tag:{ar:'الوسم',fr:'Tag',en:'Tag'},
  modal_label_desc:{ar:'الوصف المختصر',fr:'Description courte',en:'Short description'},
  modal_label_image:{ar:'الصورة (اختياري)',fr:'Image (optionnelle)',en:'Image (optional)'},
  modal_cancel:{ar:'إلغاء',fr:'Annuler',en:'Cancel'},
  modal_save:{ar:'حفظ',fr:'Enregistrer',en:'Save'},
  admin_email:{ar:'البريد الإلكتروني',fr:'E-mail',en:'Email'},
  admin_password:{ar:'كلمة المرور',fr:'Mot de passe',en:'Password'},
  admin_login_btn:{ar:'دخول',fr:'Se connecter',en:'Log in'},
  admin_confirm_delete:{ar:'هل أنتِ متأكدة من الحذف؟',fr:'Confirmer la suppression ?',en:'Confirm deletion?'},
  admin_price_ph:{ar:'مثال: 1,200 دج',fr:'Ex : 1 200 DA',en:'E.g. 1,200 DA'},
  admin_tag_ph:{ar:'مثال: للمبتدئات',fr:'Ex : pour débutantes',en:'E.g. for beginners'}
};

/* ======================================================
   BUSINESS DATA
   ====================================================== */
const BIZ = {
  mercerie: {
    id:'mercerie', emoji:'✂️',
    name:{ar:'ميمو مرسيري',fr:'M Mercerie',en:'M Mercerie'},
    table_products:'mercerie_products', table_articles:'mercerie_articles',
    storage_bucket:'mimo-images'
  },
  rental: {
    id:'rental', emoji:'💒',
    name:{ar:'ميمو أفراح',fr:'M Afrah',en:'M Afrah'},
    table_products:'rental_items', table_articles:'rental_articles',
    storage_bucket:'rental-images'
  },
  patisserie: {
    id:'patisserie', emoji:'🎂',
    name:{ar:'ميمو كيك',fr:'M Cake',en:'M Cake'},
    table_products:'patisserie_products', table_articles:'patisserie_articles',
    storage_bucket:'cake-images'
  }
};

/* ======================================================
   STATE
   ====================================================== */
let adminBiz='mercerie', isAdmin=false;
let allData={mercerie:{products:[],articles:[]},rental:{products:[],articles:[]},patisserie:{products:[],articles:[]}};
let currentLang='ar', currentType='product', currentId=null, currentImageFile=null, currentImageUrl=null;

/* ======================================================
   LANGUAGE
   ====================================================== */
function applyLanguage(lang){
  currentLang=lang;
  document.getElementById('adminTitle').textContent=T.admin_title[lang];
  document.getElementById('adminSub').textContent=T.admin_sub[lang];
  document.getElementById('loginModalTitle').textContent=T.admin_login[lang];
  document.getElementById('adminLoginBtn').textContent=T.admin_login[lang];
  document.querySelector('.admin-topbar-right a').textContent=T.back_to_platform[lang];
  document.getElementById('statsTitle').textContent=T.stats_title[lang];
  document.getElementById('chartVisitsTitle').textContent=T.stats_chart_visits[lang];
  document.getElementById('chartLoginsTitle').textContent=T.stats_chart_logins[lang];
  document.getElementById('chartCommentsTitle').textContent=T.stats_chart_comments[lang];
  document.getElementById('chartMonthTitle').textContent=T.stats_last6m[lang];
  document.getElementById('statsHint').textContent=T.stats_empty_hint[lang];
  document.getElementById('usersTitle').textContent=T.admin_users[lang];
  document.getElementById('topbarTitle').textContent=T.admin_title[lang];
  document.getElementById('labelTitle').textContent=T.modal_label_title[lang];
  document.getElementById('labelPrice').textContent=T.modal_label_price[lang];
  document.getElementById('labelTag').textContent=T.modal_label_tag[lang];
  document.getElementById('labelDesc').textContent=T.modal_label_desc[lang];
  document.getElementById('modalImageLabel').textContent=T.modal_label_image[lang];
  document.getElementById('modalCancel').textContent=T.modal_cancel[lang];
  document.getElementById('modalSave').textContent=T.modal_save[lang];
  document.getElementById('loginEmailLabel').textContent=T.admin_email[lang];
  document.getElementById('loginPasswordLabel').textContent=T.admin_password[lang];
  document.getElementById('loginSave').textContent=T.admin_login_btn[lang];
  document.getElementById('fieldPrice').placeholder=T.admin_price_ph[lang];
  document.getElementById('fieldTag').placeholder=T.admin_tag_ph[lang];
  if(isAdmin) renderUsers();
  if(deniedShown) showDenied();
  if(isAdmin&&lastStats) renderStats(lastStats);
  html.setAttribute('lang',lang);
  html.setAttribute('dir',lang==='ar'?'rtl':'ltr');
  renderAdminTabs();
  renderAdminGrid();
}
const html=document.documentElement;
document.getElementById('langSwitch').addEventListener('change',e=>applyLanguage(e.target.value));

/* ======================================================
   THEME
   ====================================================== */
function setTheme(m){html.setAttribute('data-theme',m);document.getElementById('themeIcon').innerHTML=m==='dark'?'<path d="M12 3v2M12 19v2M4.2 4.2l1.4 1.4M18.4 18.4l1.4 1.4M3 12h2M19 12h2M4.2 19.8l1.4-1.4M18.4 5.6l1.4-1.4"/><circle cx="12" cy="12" r="4"/>':'<path d="M21 12.79A9 9 0 1111.21 3 7 7 0 0021 12.79z"/>';}
setTheme('dark');
document.getElementById('themeToggle').addEventListener('click',()=>setTheme(html.getAttribute('data-theme')==='dark'?'light':'dark'));

/* ======================================================
   DATA LOADING
   ====================================================== */
async function loadData(bizId) {
  if(!sb) return;
  const b=BIZ[bizId];
  try {
    const [p,a] = await Promise.all([
      sb.from(b.table_products).select('*').order('created_at',{ascending:true}),
      sb.from(b.table_articles).select('*').order('created_at',{ascending:true})
    ]);
    if(p.error) console.error(`Products ${bizId}:`,p.error.message);
    if(a.error) console.error(`Articles ${bizId}:`,a.error.message);
    allData[bizId].products=p.data||[];
    allData[bizId].articles=a.data||[];
  } catch(e) {
    console.error(`Load ${bizId}:`,e);
    alert('خطأ في الاتصال بقاعدة البيانات. تأكدي من تشغيل ملف SQL أولًا.');
  }
}
async function loadAllData() { if(!sb) return; await Promise.all(['mercerie','rental','patisserie'].map(loadData)); }

/* ======================================================
   ADMIN RENDER
   ====================================================== */
function renderAdminTabs() {
  document.getElementById('adminBizTabs').innerHTML = Object.values(BIZ).map(b=>
    `<button class="admin-biz-tab ${adminBiz===b.id?'active':''}" onclick="adminBiz='${b.id}';renderAdminTabs();renderAdminGrid();">${b.emoji} ${b.name[currentLang]}</button>`
  ).join('');
}

function renderAdminGrid() {
  const b=BIZ[adminBiz], prods=allData[adminBiz].products, arts=allData[adminBiz].articles;
  document.getElementById('adminGrid').innerHTML = `
    <div class="admin-panel">
      <h3>${T.admin_products[currentLang]} <span class="count">${prods.length}</span></h3>
      <button class="admin-add-btn" onclick="openAddModal('product')">${T.admin_add_product[currentLang]}</button>
      ${prods.map(p=>`<div class="admin-item"><div class="admin-item-info"><h4>${p.title}</h4><span>${p.price||''}</span></div><div class="admin-item-actions"><button class="edit-btn" onclick="openEditModal('product','${p.id}')">✎</button><button class="delete-btn" onclick="deleteItem('product','${p.id}')">🗑</button></div></div>`).join('')||`<p style="color:var(--text-muted);font-size:.85rem;padding:16px 0;">${currentLang==='ar'?'لا توجد منتجات':currentLang==='fr'?'Aucun produit':'No products'}</p>`}
    </div>
    <div class="admin-panel">
      <h3>${T.admin_articles[currentLang]} <span class="count">${arts.length}</span></h3>
      <button class="admin-add-btn" onclick="openAddModal('article')">${T.admin_add_article[currentLang]}</button>
      ${arts.map(a=>`<div class="admin-item"><div class="admin-item-info"><h4>${a.title}</h4><span>${a.tag||''}</span></div><div class="admin-item-actions"><button class="edit-btn" onclick="openEditModal('article','${a.id}')">✎</button><button class="delete-btn" onclick="deleteItem('article','${a.id}')">🗑</button></div></div>`).join('')||`<p style="color:var(--text-muted);font-size:.85rem;padding:16px 0;">${currentLang==='ar'?'لا توجد مقالات':currentLang==='fr'?'Aucun article':'No articles'}</p>`}
    </div>`;
}

/* ======================================================
   AUTH + GARDE ADMIN (rôle = 'admin')
   ====================================================== */
let currentUserId=null, deniedShown=false;
function openLoginModal(){document.getElementById('loginOverlay').classList.add('open');}
function closeLoginModal(){document.getElementById('loginOverlay').classList.remove('open');}
document.getElementById('loginCancel').addEventListener('click',closeLoginModal);
document.getElementById('loginOverlay').addEventListener('click',e=>{if(e.target.id==='loginOverlay')closeLoginModal();});
document.getElementById('loginForm').addEventListener('submit',async e=>{
  e.preventDefault(); if(!sb){alert('يرجى ربط قاعدة البيانات أولًا');return;}
  const {error}=await sb.auth.signInWithPassword({email:document.getElementById('loginEmail').value,password:document.getElementById('loginPassword').value});
  if(error){alert('خطأ: '+error.message);return;}
  closeLoginModal();
});
async function logout(){if(sb)await sb.auth.signOut();}

async function verifyAdminAccess(u){
  try{
    const {data}=await sb.from('profiles').select('role').eq('id',u.id).maybeSingle();
    return data&&data.role==='admin';
  }catch(e){ return false; }
}
function showDenied(){
  deniedShown=true;
  document.getElementById('adminLoginPrompt').innerHTML=`
    <div class="denied-box">
      <div class="denied-icon">🔒</div>
      <h2>${T.admin_denied_title[currentLang]}</h2>
      <p>${T.admin_denied_desc[currentLang]}</p>
      <p class="denied-sub">${T.admin_denied_login[currentLang]}</p>
    </div>`;
  document.getElementById('adminContent').classList.add('hidden');
}
function restoreSession(){
  if(!sb) return;
  sb.auth.onAuthStateChange(async (event,session)=>{
    if(event==='SIGNED_OUT'){
      isAdmin=false; deniedShown=false; currentUserId=null;
      hideAdminContent(); return;
    }
    if(session&&session.user&&(event==='INITIAL_SESSION'||event==='SIGNED_IN')){
      currentUserId=session.user.id;
      const ok=await verifyAdminAccess(session.user);
      if(ok){ deniedShown=false; isAdmin=true; showAdminContent(); }
      else if(!deniedShown){ isAdmin=false; showDenied(); }
    }
  });
}

function showAdminContent(){
  const lp=document.getElementById('adminLoginPrompt'), ct=document.getElementById('adminContent');
  lp.innerHTML=`<button class="product-btn" onclick="logout()">${T.admin_logout[currentLang]}</button>`;
  ct.classList.remove('hidden');
  renderAdminTabs(); renderAdminGrid(); loadStats(); loadUsers();
}
function hideAdminContent(){
  const lp=document.getElementById('adminLoginPrompt'), ct=document.getElementById('adminContent');
  lp.innerHTML=`<button class="product-btn" onclick="openLoginModal()">${T.admin_login[currentLang]}</button>`;
  ct.classList.add('hidden');
}
document.getElementById('adminLoginBtn').addEventListener('click',openLoginModal);

/* ======================================================
   GESTION DES UTILISATEURS (rôles)
   ====================================================== */
let usersCache=[];
async function loadUsers(){
  if(!sb) return;
  try{
    const {data,error}=await sb.from('profiles').select('id,full_name,email,role,created_at').order('created_at',{ascending:false});
    if(error){ console.error('loadUsers:',error.message); return; }
    usersCache=data||[];
    renderUsers();
  }catch(e){ console.error('loadUsers:',e); }
}
function roleLabel(r,lang){ return (T['role_'+r]&&T['role_'+r][lang])?T['role_'+r][lang]:r; }
function renderUsers(){
  const list=document.getElementById('usersList');
  if(!list) return;
  list.innerHTML=usersCache.map(u=>{
    const self=currentUserId&&u.id===currentUserId;
    return `<div class="user-row">
      <div class="user-info">
        <div class="user-avatar">${((u.full_name||u.email||'م').trim()[0]||'؟').toUpperCase()}</div>
        <div style="min-width:0">
          <div class="user-name">${u.full_name||'—'}</div>
          <div class="user-mail">${u.email||'—'}</div>
        </div>
      </div>
      <select class="role-select" data-uid="${u.id}" ${self?'disabled':''} aria-label="${T.admin_change_role[currentLang]}">
        <option value="admin" ${u.role==='admin'?'selected':''}>${roleLabel('admin',currentLang)}</option>
        <option value="moderator" ${u.role==='moderator'?'selected':''}>${roleLabel('moderator',currentLang)}</option>
        <option value="member" ${u.role==='member'?'selected':''}>${roleLabel('member',currentLang)}</option>
      </select>
    </div>`;
  }).join('')||`<p style="color:var(--text-muted);font-size:.85rem;padding:12px 0;">—</p>`;
  list.querySelectorAll('.role-select').forEach(sel=>{
    sel.addEventListener('change',()=>changeUserRole(sel));
  });
}
async function changeUserRole(sel){
  const uid=sel.dataset.uid, role=sel.value;
  try{
    const {error}=await sb.rpc('admin_update_role',{p_user_id:uid,p_role:role});
    if(error) throw error;
    const u=usersCache.find(x=>x.id===uid); if(u) u.role=role;
    renderUsers();
  }catch(err){
    alert('خطأ: '+err.message);
    loadUsers();
  }
}

/* ======================================================
   STATISTIQUES — visiteurs, connexions, commentaires
   ====================================================== */
let lastStats=null;
function dateKey(d){ return d.getFullYear()+'-'+String(d.getMonth()+1).padStart(2,'0')+'-'+String(d.getDate()).padStart(2,'0'); }
function monthKey(d){ return d.getFullYear()+'-'+String(d.getMonth()+1).padStart(2,'0'); }
function monthLabel(d,lang){
  try{ return d.toLocaleDateString(lang==='ar'?'ar-DZ':lang==='fr'?'fr-FR':'en-US',{month:'short'}); }catch(e){ return ''; }
}
async function countQuery(q){
  try{ const {count,error}=await q; return error?0:(count||0); }catch(e){ return 0; }
}
async function loadStats(){
  if(!sb) return;
  const now=new Date();
  const isoToday=new Date(now.getFullYear(),now.getMonth(),now.getDate()).toISOString();
  const isoMonth=new Date(now.getFullYear(),now.getMonth(),1).toISOString();
  const iso180=new Date(now.getTime()-180*86400000).toISOString();
  try{
    const [users,online,visitsToday,visitsMonth,loginsMonth,commentsMonth]=await Promise.all([
      countQuery(sb.from('profiles').select('*',{count:'exact',head:true})),
      countQuery(sb.from('profiles').select('*',{count:'exact',head:true}).gte('last_seen',new Date(now.getTime()-5*60000).toISOString())),
      countQuery(sb.from('analytics_events').select('*',{count:'exact',head:true}).eq('event_type','page_view').gte('created_at',isoToday)),
      countQuery(sb.from('analytics_events').select('*',{count:'exact',head:true}).eq('event_type','page_view').gte('created_at',isoMonth)),
      countQuery(sb.from('analytics_events').select('*',{count:'exact',head:true}).eq('event_type','login').gte('created_at',isoMonth)),
      countQuery(sb.from('comments').select('*',{count:'exact',head:true}).gte('created_at',isoMonth))
    ]);
    let ev=[],cm=[];
    try{
      const r1=await sb.from('analytics_events').select('event_type,created_at,session_id').gte('created_at',iso180);
      ev=r1.data||[];
      const r2=await sb.from('comments').select('created_at').gte('created_at',iso180);
      cm=r2.data||[];
    }catch(e){}

    const days=[]; for(let i=29;i>=0;i--){ const d=new Date(now); d.setDate(d.getDate()-i); days.push(dateKey(d)); }
    const daily={visits:{},logins:{}}; days.forEach(k=>{daily.visits[k]=0;daily.logins[k]=0;});
    const dailyComments={}; days.forEach(k=>dailyComments[k]=0);
    const visitorsToday=new Set(), visitorsMonth=new Set();
    ev.forEach(e=>{
      const k=dateKey(new Date(e.created_at));
      if(daily.visits[k]!==undefined) daily.visits[k]++;
      if(e.event_type==='login'&&daily.logins[k]!==undefined) daily.logins[k]++;
      const t=new Date(e.created_at).getTime();
      if(e.session_id){
        if(t>=new Date(isoToday).getTime()) visitorsToday.add(e.session_id);
        if(t>=new Date(isoMonth).getTime()) visitorsMonth.add(e.session_id);
      }
    });
    cm.forEach(c=>{ const k=dateKey(new Date(c.created_at)); if(dailyComments[k]!==undefined) dailyComments[k]++; });

    const months=[]; for(let i=5;i>=0;i--){ const d=new Date(now.getFullYear(),now.getMonth()-i,1); months.push({key:monthKey(d),label:monthLabel(d,currentLang)}); }
    const monthly={}; months.forEach(m=>monthly[m.key]=0);
    ev.forEach(e=>{ const k=monthKey(new Date(e.created_at)); if(monthly[k]!==undefined) monthly[k]++; });

    lastStats={users,online,visitsToday,visitorsToday:visitorsToday.size,visitsMonth,visitorsMonth:visitorsMonth.size,loginsMonth,commentsMonth,daily,dailyComments,months,monthly};
    renderStats(lastStats);
  }catch(err){ console.warn('loadStats:',err); }
}
function renderStats(s){
  const total=s.months.reduce((a,m)=>a+(s.monthly[m.key]||0),0);
  const cards=[
    {l:T.stats_users[currentLang],v:s.users,ic:'👥'},
    {l:T.stats_online[currentLang],v:s.online,ic:'🟢'},
    {l:T.stats_visits_today[currentLang],v:s.visitsToday,ic:'👁️'},
    {l:T.stats_visitors_today[currentLang],v:s.visitorsToday,ic:'🧍'},
    {l:T.stats_visits_month[currentLang],v:s.visitsMonth,ic:'📈'},
    {l:T.stats_logins_month[currentLang],v:s.loginsMonth,ic:'🔑'},
    {l:T.stats_comments_month[currentLang],v:s.commentsMonth,ic:'💬'}
  ];
  document.getElementById('statsCards').innerHTML=cards.map(c=>`<div class="stat-card"><div class="stat-icon">${c.ic}</div><div class="stat-num">${c.v}</div><div class="stat-label">${c.l}</div></div>`).join('');
  chartInto('chartVisits',s.daily.visits,5);
  chartInto('chartLogins',s.daily.logins,5);
  chartInto('chartComments',s.dailyComments,5);
  const mLabels=s.months.map(m=>monthLabel(new Date(m.key+'-01T00:00:00'),currentLang));
  document.getElementById('chartMonth').innerHTML=chartBars(s.months.map(m=>s.monthly[m.key]||0),mLabels,1);
  const hint=document.getElementById('statsHint');
  if(hint) hint.style.display=(total===0&&s.visitsMonth===0)?'block':'none';
}
function chartInto(id,map,step){
  const keys=Object.keys(map);
  const vals=keys.map(k=>map[k]);
  const labels=keys.map(k=>k.split('-')[2]);
  document.getElementById(id).innerHTML=chartBars(vals,labels,step);
}
function chartBars(vals,labels,step){
  const max=Math.max.apply(null,vals.concat([1]));
  return vals.map((v,i)=>'<div class="chart-col"><div class="chart-bar" style="height:'+Math.round(v/max*100)+'%"><span class="chart-val">'+(v||'')+'</span></div><span class="chart-label">'+((i%step===0)?labels[i]:'')+'</span></div>').join('');
}

/* ======================================================
   ITEM MODALS
   ====================================================== */
function openAddModal(type){
  currentType=type;currentId=null;currentImageFile=null;currentImageUrl=null;
  document.getElementById('fieldImage').value='';
  document.getElementById('modalTitle').textContent=T['modal_add_'+type][currentLang];
  document.getElementById('labelPrice').style.display=type==='product'?'':'none';
  document.getElementById('fieldPrice').style.display=type==='product'?'':'none';
  document.getElementById('labelTag').style.display=type==='article'?'':'none';
  document.getElementById('fieldTag').style.display=type==='article'?'':'none';
  ['fieldTitle','fieldPrice','fieldTag','fieldDesc'].forEach(id=>document.getElementById(id).value='');
  document.getElementById('modalOverlay').classList.add('open');
}
function openEditModal(type,id){
  currentType=type;currentId=id;currentImageFile=null;
  const items=type==='product'?allData[adminBiz].products:allData[adminBiz].articles;
  const item=items.find(x=>x.id===id); if(!item) return;
  currentImageUrl=item.image_url||null;
  document.getElementById('modalTitle').textContent=T['modal_edit_'+type][currentLang];
  document.getElementById('labelPrice').style.display=type==='product'?'':'none';
  document.getElementById('fieldPrice').style.display=type==='product'?'':'none';
  document.getElementById('labelTag').style.display=type==='article'?'':'none';
  document.getElementById('fieldTag').style.display=type==='article'?'':'none';
  document.getElementById('fieldTitle').value=item.title||'';
  document.getElementById('fieldPrice').value=item.price||'';
  document.getElementById('fieldTag').value=item.tag||'';
  document.getElementById('fieldDesc').value=item.description||'';
  document.getElementById('fieldImage').value='';
  document.getElementById('modalOverlay').classList.add('open');
}
function closeModal(){document.getElementById('modalOverlay').classList.remove('open');}
document.getElementById('modalCancel').addEventListener('click',closeModal);
document.getElementById('modalOverlay').addEventListener('click',e=>{if(e.target.id==='modalOverlay')closeModal();});
document.getElementById('fieldImage').addEventListener('change',()=>{currentImageFile=document.getElementById('fieldImage').files[0]||null;});

async function uploadImage(){
  if(!currentImageFile||!sb) return currentImageUrl;
  const b=BIZ[adminBiz], path=`${Date.now()}_${currentImageFile.name}`;
  const {error}=await sb.storage.from(b.storage_bucket).upload(path,currentImageFile);
  if(error){alert('خطأ أثناء رفع الصورة: '+error.message);return currentImageUrl;}
  const {data}=sb.storage.from(b.storage_bucket).getPublicUrl(path);
  return data.publicUrl;
}

document.getElementById('itemForm').addEventListener('submit',async e=>{
  e.preventDefault(); if(!sb){alert('يرجى ربط قاعدة البيانات أولًا');return;}
  const b=BIZ[adminBiz], btn=e.target.querySelector('.modal-save');
  btn.textContent='...'; btn.disabled=true;
  try {
    const imageUrl=await uploadImage();
    if(currentType==='product'){
      const p={title:document.getElementById('fieldTitle').value,price:document.getElementById('fieldPrice').value,image_url:imageUrl};
      currentId?await sb.from(b.table_products).update(p).eq('id',currentId):await sb.from(b.table_products).insert(p);
    } else {
      const p={title:document.getElementById('fieldTitle').value,tag:document.getElementById('fieldTag').value,description:document.getElementById('fieldDesc').value,image_url:imageUrl};
      currentId?await sb.from(b.table_articles).update(p).eq('id',currentId):await sb.from(b.table_articles).insert(p);
    }
    await loadData(adminBiz); closeModal(); renderAdminGrid();
  } catch(err){alert('خطأ');console.error(err);}
  finally{btn.textContent=T.modal_save[currentLang];btn.disabled=false;}
});

async function deleteItem(type,id){
  if(!confirm(T.admin_confirm_delete[currentLang])) return;
  const b=BIZ[adminBiz], table=type==='product'?b.table_products:b.table_articles;
  await sb.from(table).delete().eq('id',id);
  await loadData(adminBiz); renderAdminGrid();
}

/* ======================================================
   INIT
   ====================================================== */
(async function init(){
  await loadAllData();
  renderAdminTabs();
  renderAdminGrid();
  restoreSession();
})();

