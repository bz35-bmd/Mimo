/* ======================================================
   BUSINESS DATA
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

/* ======================================================
   TRANSLATIONS
   ====================================================== */
const T = {
  tab_home:{ar:'الرئيسية',fr:'Accueil',en:'Home'},
  tab_mercerie:{ar:'ميمو مرسيري',fr:'M Mercerie',en:'M Mercerie'},
  tab_rental:{ar:'ميمو أفراح',fr:'M Afrah',en:'M Afrah'},
  tab_patisserie:{ar:'ميمو كيك',fr:'M Cake',en:'M Cake'},
  home_title:{ar:'مرحبًا بكِ في<br><span>عالم ميمو</span> ✨',fr:'Bienvenue dans<br><span>l\'univers M</span> ✨',en:'Welcome to<br><span>the M world</span> ✨'},
  home_sub:{ar:'كل ما تحتاجينه من خيوط وكيك وأفراح — اطلبي الآن وسيُوصَل إليكِ',fr:'Tout ce dont vous avez besoin — commandez maintenant, livré chez vous',en:'Everything you need — order now, delivered to your door'},
  home_eyebrow:{ar:'منصّة كل المشاريع',fr:'La plateforme de tous vos projets',en:'Home of all your projects'},
  home_cta1:{ar:'ابدئي التصفح ←',fr:'Commencer →',en:'Get started →'},
  logo_text:{ar:'ميمو منصتي',fr:'Mimo',en:'Mimo'},
  biz_title:{ar:'مشاريعي',fr:'Mes entreprises',en:'My businesses'},
  biz_sub:{ar:'اخترِي مشروعًا لعرض المنتجات والتفاصيل',fr:'Choisissez une entreprise pour voir les produits',en:'Choose a business to view products'},
  back_home:{ar:'← الرئيسية',fr:'← Accueil',en:'← Home'},
  prod_btn:{ar:'اطلبي عبر واتساب',fr:'Commander sur WhatsApp',en:'Order on WhatsApp'},
  about_eyebrow:{ar:'من نحن',fr:'Qui sommes-nous',en:'About us'},
  faq_title:{ar:'أسئلة شائعة',fr:'Questions fréquentes',en:'FAQ'},
  test_title:{ar:'آراء عميلاتنا',fr:'Avis clientes',en:'Customer reviews'},
  contact_title:{ar:'تواصلي معنا',fr:'Contactez-nous',en:'Contact us'},
  form_name:{ar:'الاسم',fr:'Nom',en:'Name'},
  form_phone:{ar:'رقم الهاتف',fr:'Téléphone',en:'Phone'},
  form_message:{ar:'رسالتك',fr:'Votre message',en:'Your message'},
  form_submit:{ar:'إرسال',fr:'Envoyer',en:'Send'},
  footer_brand:{ar:'ميمو منصتي',fr:'M Plateforme',en:'M Platform'},
  footer_note:{ar:'© 2026 ميمو منصتي — جميع الحقوق محفوظة',fr:'© 2026 M — Tous droits réservés',en:'© 2026 M — All rights reserved'},
  order_now:{ar:'اطلبي الآن',fr:'Commander',en:'Order now'},
  exit_title:{ar:'انتظري! لديكِ عرض خاص',fr:'Attendez! Offre spéciale',en:'Wait! Special offer'},
  exit_desc:{ar:'احصلِ على خصم 10% على طلبكِ الأول!',fr:'Obtenez 10% de réduction sur votre 1ère commande!',en:'Get 10% off your first order!'},
  exit_offer:{ar:'كود WELCOME10 — صالح لمدة 24 ساعة',fr:'Code WELCOME10 — Valable 24h',en:'Code WELCOME10 — Valid 24 hours'},
  exit_btn:{ar:'استخدمي العرض الآن',fr:'Utiliser l\'offre',en:'Claim offer'},
  exit_later:{ar:'لاحقًا',fr:'Plus tard',en:'Later'},
  trust_delivery:{ar:'توصيل سريع',fr:'Livraison rapide',en:'Fast delivery'},
  trust_delivery_sub:{ar:'إلى بومرداس والجزائر العاصمة',fr:'Boumerdès et Alger',en:'Boumerdès & Algiers'},
  trust_payment:{ar:'الدفع عند الاستلام',fr:'Paiement à la livraison',en:'Cash on delivery'},
  trust_payment_sub:{ar:'ادفعي فقط عند استلام الطلب',fr:'Payez à réception',en:'Pay on receipt'},
  trust_quality:{ar:'جودة مضمونة',fr:'Qualité garantie',en:'Guaranteed quality'},
  trust_quality_sub:{ar:'منتجات مختارة بعناية',fr:'Produits soigneusement sélectionnés',en:'Carefully selected products'},
  trust_support:{ar:'دعم فوري',fr:'Support instantané',en:'Instant support'},
  trust_support_sub:{ar:'رد خلال دقائق',fr:'Réponse en minutes',en:'Reply within minutes'},
  sp_just_bought:{ar:'اشترت للتو',fr:'vient d\'acheter',en:'just purchased'},
  search_placeholder:{ar:'بحث...',fr:'Rechercher...',en:'Search...'},
  chat_title:{ar:'مساعد ميمو',fr:'Assistant M',en:'M Assistant'},
  chat_sub:{ar:'متصل الآن',fr:'En ligne',en:'Online'},
  chat_placeholder:{ar:'اكتبي سؤالك...',fr:'Écrivez votre question...',en:'Type your question...'},
  chat_welcome:{ar:'مرحبًا! 👋 أنا مساعد ميمو. كيف أساعدك اليوم؟',fr:'Bonjour! 👋 Je suis l\'assistant M. Comment puis-je vous aider?',en:'Hello! 👋 I\'m the M assistant. How can I help?'},
  chat_no_results:{ar:'لم أجد إجابة. تواصلي معنا عبر واتساب!',fr:'Pas de réponse. Contactez-nous sur WhatsApp!',en:'No answer found. Contact us on WhatsApp!'},
  chat_btn_mercerie:{ar:'🛍️ ميمو مرسيري',fr:'🛍️ M Mercerie',en:'🛍️ M Mercerie'},
  chat_btn_rental:{ar:'💒 ميمو أفراح',fr:'💒 M Afrah',en:'💒 M Afrah'},
  chat_btn_patisserie:{ar:'🎂 ميمو كيك',fr:'🎂 M Cake',en:'🎂 M Cake'},
  chat_btn_prices:{ar:'💰 الأسعار',fr:'💰 Prix',en:'💰 Prices'},
  chat_btn_hours:{ar:'🕐 ساعات العمل',fr:'🕐 Horaires',en:'🕐 Hours'},
  chat_btn_contact:{ar:'📞 التواصل',fr:'📞 Contact',en:'📞 Contact'},
  settings_title:{ar:'التخصيص',fr:'Personnalisation',en:'Customization'},
  settings_bg:{ar:'الخلفية',fr:'Fond',en:'Background'},
  settings_logo:{ar:'الشعار',fr:'Logo',en:'Logo'},
  settings_bg_threads:{ar:'الخيط الذهبي',fr:'Fil d\'or',en:'Golden thread'},
  settings_bg_confetti:{ar:'القصاصات',fr:'Confettis',en:'Confetti'},
  settings_bg_bokeh:{ar:'البوكيه',fr:'Bokeh',en:'Bokeh'},
  settings_logo_ribbons:{ar:'الأشرطة',fr:'Rubans',en:'Ribbons'},
  settings_logo_orbit:{ar:'المدار',fr:'Orbite',en:'Orbit'},
  settings_logo_crescent:{ar:'الهلال',fr:'Croissant',en:'Crescent'},
  settings_theme:{ar:'المظهر',fr:'Thème',en:'Theme'},
  theme_dark:{ar:'داكن',fr:'Sombre',en:'Dark'},
  theme_light:{ar:'فاتح',fr:'Clair',en:'Light'},
  theme_midnight:{ar:'منتصف الليل',fr:'Minuit',en:'Midnight'},
  theme_emerald:{ar:'زمردي',fr:'Émeraude',en:'Emerald'},
  theme_rose:{ar:'وردي',fr:'Rose',en:'Rose'},
  settings_anim:{ar:'الحركات',fr:'Animations',en:'Animations'},
  settings_anim_a:{ar:'بسيطة',fr:'Minimal',en:'Minimal'},
  settings_anim_b:{ar:'الخيط الذهبي',fr:'Fil d\'or',en:'Golden thread'},
  settings_anim_c:{ar:'المدار',fr:'Orbite',en:'Orbit'},
  auth_login:{ar:'تسجيل الدخول',fr:'Connexion',en:'Login'},
  auth_register:{ar:'إنشاء حساب',fr:'S\'inscrire',en:'Register'},
  auth_logout:{ar:'تسجيل الخروج',fr:'Déconnexion',en:'Logout'},
  auth_tab_login:{ar:'تسجيل الدخول',fr:'Connexion',en:'Login'},
  auth_tab_register:{ar:'إنشاء حساب',fr:'Inscription',en:'Sign up'},
  auth_name:{ar:'الاسم الكامل',fr:'Nom complet',en:'Full name'},
  auth_email:{ar:'البريد الإلكتروني',fr:'E-mail',en:'Email'},
  auth_password:{ar:'كلمة المرور',fr:'Mot de passe',en:'Password'},
  auth_confirm:{ar:'تأكيد كلمة المرور',fr:'Confirmer le mot de passe',en:'Confirm password'},
  auth_forgot:{ar:'نسيت كلمة المرور؟',fr:'Mot de passe oublié ?',en:'Forgot password?'},
  auth_forgot_desc:{ar:'أدخلي بريدك الإلكتروني وسنرسل لك رابط إعادة التعيين',fr:'Entrez votre e-mail, nous vous enverrons un lien de réinitialisation',en:'Enter your email and we\'ll send you a reset link'},
  auth_back_to_login:{ar:'العودة لتسجيل الدخول',fr:'Retour à la connexion',en:'Back to login'},
  auth_reset_title:{ar:'كلمة مرور جديدة',fr:'Nouveau mot de passe',en:'New password'},
  auth_reset_desc:{ar:'أدخلي كلمة مرورك الجديدة',fr:'Choisissez votre nouveau mot de passe',en:'Choose your new password'},
  auth_google:{ar:'المتابعة عبر جوجل',fr:'Continuer avec Google',en:'Continue with Google'},
  auth_or:{ar:'أو',fr:'ou',en:'or'},
  auth_no_account:{ar:'ليس لديك حساب؟',fr:'Pas encore de compte ?',en:'No account yet?'},
  auth_have_account:{ar:'لديك حساب؟',fr:'Déjà un compte ?',en:'Already have an account?'},
  auth_captcha_err:{ar:'يرجى إكمال التحقق',fr:'Veuillez compléter le captcha',en:'Please complete the captcha'},
  auth_captcha_label:{ar:'التحقق من الأمان',fr:'Vérification de sécurité',en:'Security check'},
  role_admin:{ar:'مشرف',fr:'Admin',en:'Admin'},
  role_moderator:{ar:'منسقة',fr:'Modérateur',en:'Moderator'},
  role_member:{ar:'عضو',fr:'Membre',en:'Member'},
  nav_admin:{ar:'لوحة الإدارة',fr:'Panneau admin',en:'Admin'},
  auth_err_required:{ar:'يرجى ملء جميع الحقول',fr:'Veuillez remplir tous les champs',en:'Please fill in all fields'},
  auth_err_password:{ar:'كلمتا المرور غير متطابقتين',fr:'Les mots de passe ne correspondent pas',en:'Passwords do not match'},
  auth_err_password_len:{ar:'كلمة المرور يجب أن تكون 6 أحرف على الأقل',fr:'Le mot de passe doit faire au moins 6 caractères',en:'Password must be at least 6 characters'},
  auth_ok_register:{ar:'تم إنشاء الحساب! تحققي من بريدك الإلكتروني للتأكيد',fr:'Compte créé ! Vérifiez votre e-mail pour confirmer',en:'Account created! Check your email to confirm'},
  auth_ok_login:{ar:'تم تسجيل الدخول بنجاح',fr:'Connexion réussie',en:'Login successful'},
  auth_ok_forgot:{ar:'تم إرسال رابط إعادة التعيين إلى بريدك الإلكتروني',fr:'Lien de réinitialisation envoyé à votre e-mail',en:'Reset link sent to your email'},
  auth_ok_reset:{ar:'تم تغيير كلمة المرور بنجاح',fr:'Mot de passe modifié avec succès',en:'Password changed successfully'},
  comments_title:{ar:'آراء وتقييمات العميلات',fr:'Avis et commentaires',en:'Comments & reviews'},
  comments_placeholder:{ar:'اكتبي تعليقك...',fr:'Écrivez votre commentaire...',en:'Write your comment...'},
  comments_submit:{ar:'نشر التعليق',fr:'Publier',en:'Post'},
  comments_login_hint:{ar:'سجّلي الدخول لتتمكني من التعليق',fr:'Connectez-vous pour commenter',en:'Login to comment'},
  comments_empty:{ar:'لا توجد تعليقات بعد. كوني الأولى!',fr:'Aucun commentaire pour l\'instant. Soyez la première !',en:'No comments yet. Be the first!'},
  comments_ok:{ar:'تم نشر تعليقك بنجاح',fr:'Commentaire publié',en:'Comment posted'},
  toast_error:{ar:'خطأ',fr:'Erreur',en:'Error'},
  toast_success:{ar:'تم بنجاح',fr:'Succès',en:'Success'},
  my_account:{ar:'حسابي',fr:'Mon compte',en:'My account'}
};

/* ======================================================
   STATE
   ====================================================== */
let currentPage='home', currentBusiness=null;
let allData={mercerie:{products:[],articles:[]},rental:{products:[],articles:[]},patisserie:{products:[],articles:[]}};
let currentLang='ar';

/* ======================================================
   APP / ROUTER
   ====================================================== */
const App = {
  navigate(page, biz) {
    currentPage=page; currentBusiness=biz||null;
    document.getElementById('page-home').classList.toggle('hidden',page!=='home');
    document.getElementById('page-store').classList.toggle('hidden',page!=='store');
    document.getElementById('siteFooter').classList.toggle('hidden',page!=='home');
    document.querySelectorAll('.topbar-nav button').forEach(b=>b.classList.toggle('active',b.dataset.page===page||(page==='store'&&b.dataset.page===biz)));
    document.querySelectorAll('.mobile-nav a').forEach(a=>a.classList.toggle('active',a.dataset.page===page||(page==='store'&&a.dataset.page===biz)));
    if(page==='store'&&biz) this.renderStore(biz);
    window.scrollTo({top:0,behavior:'smooth'});
    setTimeout(()=>initReveal(),150);
  },

  renderHome() {
    // Stats
    const totalProducts = Object.values(allData).reduce((s,d)=>s+d.products.length,0);
    const totalArticles = Object.values(allData).reduce((s,d)=>s+d.articles.length,0);
    document.getElementById('statsBar').innerHTML = [
      {label:{ar:'إجمالي المنتجات',fr:'Total produits',en:'Total products'},value:totalProducts,change:'+'},
      {label:{ar:'المقالات',fr:'Articles',en:'Articles'},value:totalArticles,change:'+'},
      {label:{ar:'الأعمال النشطة',fr:'Entreprises actives',en:'Active businesses'},value:3,change:''},
      {label:{ar:'اللغات',fr:'Langues',en:'Languages'},value:3,change:'AR/FR/EN'}
    ].map(s=>`<div class="stat-card reveal"><div class="stat-label">${s.label[currentLang]}</div><div class="stat-value">${s.value}</div>${s.change?`<div class="stat-change">${s.change}</div>`:''}</div>`).join('');

    // Business cards
    document.getElementById('bizGrid').innerHTML = Object.values(BIZ).map(b=>{
      const prodCount = allData[b.id].products.length;
      return `<div class="biz-card reveal" data-biz="${b.id}" onclick="App.navigate('store','${b.id}')">
        <div class="biz-card-header"><div class="biz-bg"></div><div class="biz-icon">${b.emoji}</div></div>
        <div class="biz-card-body">
          <h3>${b.name[currentLang]}</h3>
          <p>${b.tagline[currentLang]}</p>
          <div class="biz-card-meta">
            <span class="biz-tag"><span class="pill-dot" style="background:var(--biz-${b.id})"></span> ${b.location[currentLang]}</span>
            <span class="biz-tag">${prodCount} ${currentLang==='ar'?'منتج':currentLang==='fr'?'produits':'products'}</span>
          </div>
          <div class="biz-card-arrow">→</div>
        </div>
      </div>`;
    }).join('');

    // Trust badges
    document.getElementById('trustBadges').innerHTML = [
      {icon:'🚚',cls:'tb-green',t:'trust_delivery',sub:'trust_delivery_sub'},
      {icon:'💰',cls:'tb-blue',t:'trust_payment',sub:'trust_payment_sub'},
      {icon:'✅',cls:'tb-orange',t:'trust_quality',sub:'trust_quality_sub'},
      {icon:'💬',cls:'tb-pink',t:'trust_support',sub:'trust_support_sub'}
    ].map(tb=>`<div class="trust-badge reveal"><div class="tb-icon ${tb.cls}">${tb.icon}</div><div class="tb-text"><h4>${T[tb.t][currentLang]}</h4><p>${T[tb.sub][currentLang]}</p></div></div>`).join('');
  },

  renderStore(bizId) {
    const b=BIZ[bizId]; if(!b) return;
    const products=allData[bizId].products;
    document.getElementById('storeContent').innerHTML = `
      <div class="store-header">
        <button class="back-btn" onclick="App.navigate('home')">${T.back_home[currentLang]}</button>
        <h1>${b.emoji} ${b.name[currentLang]}</h1>
        <p>${b.hero_sub[currentLang]}</p>
      </div>
      <div class="store-pills">${b.trust.map(t=>`<div class="pill"><span class="pill-dot"></span>${t[currentLang]}</div>`).join('')}</div>

      <div class="store-section">
        <div class="store-section-header"><h2>${currentLang==='ar'?'تصفّحي حسب الفئة':currentLang==='fr'?'Parcourez par catégorie':'Browse by category'}</h2></div>
        <div class="cats-grid">${b.categories.map(c=>`
          <div class="cat-card reveal">
            <div class="cat-icon">${c.icon}</div>
            <h3>${c.title[currentLang]}</h3><span>${c.sub[currentLang]}</span>
          </div>`).join('')}</div>
      </div>

      <div class="store-section">
        <div class="store-section-header"><h2>${currentLang==='ar'?'المنتجات':currentLang==='fr'?'Produits':'Products'}</h2></div>
        <div class="products-grid">${products.length?products.map((p,idx)=>{
          const badges=[];
          if(idx===0) badges.push('<span class="card-badge hot">🔥 '+((currentLang==='ar'?'الأكثر مبيعًا':currentLang==='fr'?'Best-seller':'Best-seller'))+'</span>');
          if(idx===1) badges.push('<span class="card-badge new">✨ '+((currentLang==='ar'?'جديد':currentLang==='fr'?'Nouveau':'New'))+'</span>');
          if(idx===products.length-1&&products.length>3) badges.push('<span class="card-badge limited">⚡ '+((currentLang==='ar'?'stock limité':currentLang==='fr'?'Stock limité':'Limited stock'))+'</span>');
          const rating=Math.floor(Math.random()*2)+4;
          const reviewCount=Math.floor(Math.random()*30)+5;
          const waText=encodeURIComponent('مرحبًا، أريد الاستفسار عن '+p.title+(p.price?' — السعر: '+p.price:''));
          return `<div class="product-card reveal">
            <div class="product-img">${p.image_url?`<img src="${p.image_url}" alt="${p.title}">`:`<span class="placeholder-icon">${b.emoji}</span>`}
              <div class="card-quick-view" onclick="openQuickView('${(p.title||'').replace(/'/g,"\\'")}','${(p.price||'').replace(/'/g,"\\'")}','${(p.description||'').replace(/'/g,"\\'")}','${(p.image_url||'').replace(/'/g,"\\'")}','${b.whatsapp}','${waText.replace(/'/g,"\\'")}')"><span>👁 ${(currentLang==='ar'?'عرض سريع':currentLang==='fr'?'Aperçu rapide':'Quick view')}</span></div>
            </div>
            <div class="product-body">
              <div class="card-badges">${badges.join('')}</div>
              <div class="card-rating"><span class="stars">${'★'.repeat(rating)}${'☆'.repeat(5-rating)}</span><span class="count">(${reviewCount})</span></div>
              <h3>${p.title}</h3>
              ${p.price?`<span class="price">${p.price}</span>`:''}
              <a href="https://wa.me/${b.whatsapp}?text=${waText}" target="_blank" class="product-btn">${T.prod_btn[currentLang]}</a>
            </div>
          </div>`;
        }).join(''):`<p style="text-align:center;grid-column:1/-1;color:var(--text-muted);padding:40px 0;">${currentLang==='ar'?'لا توجد منتجات بعد':currentLang==='fr'?'Aucun produit':'No products yet'}</p>`}</div>
      </div>

      <div class="store-section comments-section">
        <div class="store-section-header"><h2>${T.comments_title[currentLang]}</h2></div>
        <div id="commentsFormWrap"></div>
        <div class="comments-list" id="commentsList"><p class="comments-empty">${T.comments_empty[currentLang]}</p></div>
      </div>

      <div class="store-section">
        <div class="test-section">
          <div class="store-section-header"><h2>${T.test_title[currentLang]}</h2></div>
          <div class="test-grid">${b.testimonials.map(t=>`
            <div class="test-card reveal">
              <div class="test-stars">★★★★★</div>
              <p>${t.text[currentLang]}</p>
              <div class="test-who"><div class="test-avatar">${t.avatar}</div>${t.who[currentLang]}</div>
            </div>`).join('')}</div>
        </div>
      </div>

      <div class="store-section">
        <div class="about-row">
          <div class="about-visual"><div class="about-shape">${b.emoji}</div></div>
          <div class="about-text"><h2>${T.about_eyebrow[currentLang]}</h2><p>${b.about[currentLang]}</p></div>
        </div>
      </div>

      <div class="store-section">
        <div class="store-section-header"><h2>${T.faq_title[currentLang]}</h2></div>
        <div class="faq-list">${b.faq.map(f=>`
          <details class="faq-item reveal"><summary>${f.q[currentLang]}</summary><div class="faq-body">${f.a[currentLang]}</div></details>`).join('')}</div>
      </div>

      <div class="store-section contact-section">
        <div class="contact-grid">
          <div class="contact-info">
            <h2>${T.contact_title[currentLang]}</h2>
            <div class="contact-row">📞 ${b.phone}</div>
            <div class="contact-row">📍 ${b.location[currentLang]}</div>
            <a href="https://wa.me/${b.whatsapp}" target="_blank" class="wa-btn-contact">💬 WhatsApp →</a>
          </div>
          <form class="contact-form-side" onsubmit="event.preventDefault();window.open('https://wa.me/${b.whatsapp}?text='+encodeURIComponent('مرحبًا، اسمي '+this.name.value+'. '+this.message.value),'_blank');">
            <input type="text" name="name" placeholder="${T.form_name[currentLang]}" required>
            <input type="tel" name="phone" placeholder="${T.form_phone[currentLang]}" required>
            <textarea name="message" placeholder="${T.form_message[currentLang]}" required></textarea>
            <button type="submit" class="submit-btn">${T.form_submit[currentLang]}</button>
          </form>
        </div>
      </div>
    `;
    document.getElementById('floatWa').href=`https://wa.me/${b.whatsapp}`;
    renderCommentForm(bizId);
    loadComments(bizId);
    setTimeout(()=>initReveal(),100);
  }
};

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
  } catch(e) { console.error(`Load ${bizId}:`,e); }
}
async function loadAllData() { if(!sb) return; await Promise.all(['mercerie','rental','patisserie'].map(loadData)); }

/* ======================================================
   THEME & LANGUAGE
   ====================================================== */
const html=document.documentElement;
const THEMES=['dark','light','midnight','emerald','rose'];
const LIGHT_THEMES=['light','rose'];
function setTheme(m){
  if(THEMES.indexOf(m)<0) m='dark';
  html.setAttribute('data-theme',m);
  const isLight=LIGHT_THEMES.indexOf(m)>=0;
  document.getElementById('themeIcon').innerHTML=isLight?'<path d="M12 3v2M12 19v2M4.2 4.2l1.4 1.4M18.4 18.4l1.4 1.4M3 12h2M19 12h2M4.2 19.8l1.4-1.4M18.4 5.6l1.4-1.4"/><circle cx="12" cy="12" r="4"/>':'<path d="M21 12.79A9 9 0 1111.21 3 7 7 0 0021 12.79z"/>';
  document.querySelectorAll('#themeOptions .settings-opt').forEach(b=>b.classList.toggle('active',b.dataset.theme===m));
  try{localStorage.setItem('mm_theme',m);}catch(e){}
}
let savedTheme='light'; try{ savedTheme=localStorage.getItem('mm_theme')||'light'; }catch(e){}
setTheme(savedTheme);
document.getElementById('themeToggle').addEventListener('click',()=>{
  const i=THEMES.indexOf(html.getAttribute('data-theme'));
  setTheme(THEMES[(i+1)%THEMES.length]);
});
document.querySelectorAll('#themeOptions .settings-opt').forEach(b=>b.addEventListener('click',()=>setTheme(b.dataset.theme)));

/* ======================================================
   BACKGROUNDS & LOGO (personalisation)
   ====================================================== */
const LOGOS={
  ribbons:{
    inner:'<defs><linearGradient id="logoR1" x1="0%" y1="100%" x2="100%" y2="0%"><stop offset="0%" stop-color="#6C5CE7"/><stop offset="100%" stop-color="#A29BFE"/></linearGradient><linearGradient id="logoR2" x1="0%" y1="0%" x2="100%" y2="100%"><stop offset="0%" stop-color="#F9CA24"/><stop offset="100%" stop-color="#E8B000"/></linearGradient><linearGradient id="logoR3" x1="100%" y1="100%" x2="0%" y2="0%"><stop offset="0%" stop-color="#A29BFE"/><stop offset="100%" stop-color="#6C5CE7"/></linearGradient></defs><g fill="none" stroke-linecap="round"><path d="M25 84 C 25 58, 29 40, 34 20" stroke="url(#logoR1)" stroke-width="8"/><path d="M66 20 C 71 40, 75 58, 75 84" stroke="url(#logoR3)" stroke-width="8"/><path d="M34 20 C 42 32, 47 46, 50 52 C 53 46, 58 32, 66 20" stroke="url(#logoR2)" stroke-width="8"/></g>'
  },
  orbit:{
    inner:'<defs><linearGradient id="loG1" x1="0%" y1="0%" x2="100%" y2="100%"><stop offset="0%" stop-color="#F9CA24"/><stop offset="100%" stop-color="#E8B000"/></linearGradient><linearGradient id="loG2" x1="0%" y1="0%" x2="100%" y2="100%"><stop offset="0%" stop-color="#6C5CE7"/><stop offset="100%" stop-color="#A29BFE"/></linearGradient></defs><circle cx="50" cy="50" r="25" fill="none" stroke="url(#loG1)" stroke-width="8"/><ellipse cx="50" cy="50" rx="41" ry="15" fill="none" stroke="url(#loG2)" stroke-width="3.5" transform="rotate(-22 50 50)" opacity=".85"/><circle cx="84" cy="34" r="5" fill="#F9CA24"/><circle cx="24" cy="72" r="4" fill="#A29BFE"/><circle cx="50" cy="50" r="6" fill="#6C5CE7"/>'
  },
  crescent:{
    inner:'<defs><linearGradient id="lcG1" x1="0%" y1="0%" x2="100%" y2="100%"><stop offset="0%" stop-color="#F9CA24"/><stop offset="100%" stop-color="#E8B000"/></linearGradient><linearGradient id="lcG2" x1="0%" y1="0%" x2="100%" y2="100%"><stop offset="0%" stop-color="#A29BFE"/><stop offset="100%" stop-color="#6C5CE7"/></linearGradient></defs><path d="M60 14 A 32 32 0 1 0 60 86 A 26 26 0 1 1 60 14 Z" fill="url(#lcG1)"/><path d="M69 22 L71.8 29.2 L79 32 L71.8 34.8 L69 42 L66.2 34.8 L59 32 L66.2 29.2 Z" fill="url(#lcG2)"/>'
  }
};

const BGS={threads:1,confetti:1,bokeh:1};

function initConfetti(){
  const box=document.getElementById('bgConfetti'); if(!box) return;
  const colors=['gold','pink','violet','white']; let h='';
  for(let i=0;i<22;i++){
    const c=colors[i%4];
    const sz=(i%3===0)?6:(i%5===0)?3:4;
    const circle=(i%7===0)?' circle':'';
    h+='<span class="sp '+c+circle+'" style="left:'+(3+i*4.3)%97+'%;width:'+sz+'px;height:'+(sz+2)+'px;animation-duration:'+(13+(i*791)%12)+'s;animation-delay:'+(i*1.3)%18+'s"></span>';
  }
  box.innerHTML=h;
}
function initBokeh(){
  const box=document.getElementById('bgBokeh'); if(!box) return;
  const colors=['violet','gold','pink','blue'];
  const sizes=[130,220,170,260,150,240,190,210,160,250]; let h='';
  for(let i=0;i<10;i++){
    const s=sizes[i];
    h+='<span class="bk '+colors[i%4]+'" style="width:'+s+'px;height:'+s+'px;left:'+((i*37+8)%85)+'%;top:'+((i*29+5)%80)+'%;animation-duration:'+(10+(i*17)%8)+'s;animation-delay:'+(-i*1.7)+'s"></span>';
  }
  box.innerHTML=h;
}

function faviconHref(inner){
  const full='<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 100 100"><rect width="100" height="100" rx="22" fill="#141419"/><g transform="translate(10,10) scale(0.8)">'+inner+'</g></svg>';
  return 'data:image/svg+xml;charset=utf-8,'+encodeURIComponent(full);
}

let currentBg='threads', currentLogo='ribbons', currentAnim='a';

function applyBg(bg){
  if(!BGS[bg]) bg='threads';
  currentBg=bg;
  html.setAttribute('data-bg',bg);
  document.querySelectorAll('#bgOptions .settings-opt').forEach(b=>b.classList.toggle('active',b.dataset.bg===bg));
  try{localStorage.setItem('mm_bg',bg);}catch(e){}
}
function applyLogo(logo){
  if(!LOGOS[logo]) logo='ribbons';
  currentLogo=logo;
  const svg='<svg viewBox="0 0 100 100" xmlns="http://www.w3.org/2000/svg">'+LOGOS[logo].inner+'</svg>';
  document.querySelectorAll('.app-logo').forEach(el=>{ el.innerHTML=svg; });
  document.querySelectorAll('[data-logo-preview]').forEach(el=>{
    const v=LOGOS[el.getAttribute('data-logo-preview')];
    if(v) el.innerHTML='<svg viewBox="0 0 100 100" xmlns="http://www.w3.org/2000/svg">'+v.inner+'</svg>';
  });
  document.querySelectorAll('#logoOptions .settings-opt').forEach(b=>b.classList.toggle('active',b.dataset.logo===logo));
  const fav=document.getElementById('faviconLink');
  if(fav) fav.href=faviconHref(LOGOS[logo].inner);
  try{localStorage.setItem('mm_logo',logo);}catch(e){}
}

function applyAnim(v){
  if(['a','b','c'].indexOf(v)<0) v='a';
  currentAnim=v;
  const root=document.documentElement;
  root.removeAttribute('data-anim');
  void root.offsetWidth;
  root.setAttribute('data-anim',v);
  document.querySelectorAll('#animOptions .settings-opt').forEach(b=>b.classList.toggle('active',b.dataset.anim===v));
  try{localStorage.setItem('mm_anim',v);}catch(e){}
}

/* Settings panel open/close */
const settingsPanel=document.getElementById('settingsPanel'),
      settingsBackdrop=document.getElementById('settingsBackdrop');
function openSettings(){settingsPanel.classList.add('open');settingsBackdrop.classList.add('open');settingsPanel.setAttribute('aria-hidden','false');}
function closeSettings(){settingsPanel.classList.remove('open');settingsBackdrop.classList.remove('open');settingsPanel.setAttribute('aria-hidden','true');}
document.getElementById('settingsBtn').addEventListener('click',e=>{e.stopPropagation();settingsPanel.classList.contains('open')?closeSettings():openSettings();});
document.getElementById('settingsClose').addEventListener('click',closeSettings);
settingsBackdrop.addEventListener('click',closeSettings);
document.addEventListener('keydown',e=>{if(e.key==='Escape')closeSettings();});
document.querySelectorAll('#bgOptions .settings-opt').forEach(b=>b.addEventListener('click',()=>applyBg(b.dataset.bg)));
document.querySelectorAll('#logoOptions .settings-opt').forEach(b=>b.addEventListener('click',()=>applyLogo(b.dataset.logo)));
document.querySelectorAll('#animOptions .settings-opt').forEach(b=>b.addEventListener('click',()=>applyAnim(b.dataset.anim)));

/* Init */
initConfetti(); initBokeh();
let savedBg='threads', savedLogo='ribbons', savedAnim='a';
try{ savedBg=localStorage.getItem('mm_bg')||'threads'; savedLogo=localStorage.getItem('mm_logo')||'ribbons'; savedAnim=localStorage.getItem('mm_anim')||'a'; }catch(e){}
applyBg(savedBg); applyLogo(savedLogo); applyAnim(savedAnim);

function applyLanguage(lang){
  currentLang=lang;
  document.querySelectorAll('[data-i18n]').forEach(el=>{
    const k=el.getAttribute('data-i18n'),e=T[k]; if(!e) return;
    el.innerHTML=e[lang];
  });
  document.querySelectorAll('[data-i18n-placeholder]').forEach(el=>{
    const k=el.getAttribute('data-i18n-placeholder'),e=T[k]; if(!e) return;
    el.placeholder=e[lang];
  });
  html.setAttribute('lang',lang); html.setAttribute('dir',lang==='ar'?'rtl':'ltr');
  if(authUser) setAuthUI(authUser);
  if(currentPage==='home') App.renderHome();
  if(currentPage==='store'&&currentBusiness) App.renderStore(currentBusiness);
}
document.getElementById('langSwitch').addEventListener('change',e=>applyLanguage(e.target.value));

/* ======================================================
   NAVIGATION
   ====================================================== */
document.querySelectorAll('.topbar-nav button, .mobile-nav a[data-page]').forEach(btn=>{
  btn.addEventListener('click',e=>{
    e.preventDefault(); const p=btn.dataset.page;
    if(p==='home') App.navigate('home');
    else App.navigate('store',p);
    closeMenu();
  });
});
const burgerBtn=document.getElementById('burgerBtn'),mobileNav=document.getElementById('mobileNav'),navOverlay=document.getElementById('navOverlay'),closeNavBtn=document.getElementById('closeNav');
function openMenu(){mobileNav.classList.add('open');navOverlay.classList.add('open');}
function closeMenu(){mobileNav.classList.remove('open');navOverlay.classList.remove('open');}
burgerBtn.addEventListener('click',openMenu);
closeNavBtn.addEventListener('click',closeMenu);
navOverlay.addEventListener('click',closeMenu);

/* ======================================================
   REVEAL
   ====================================================== */
function initReveal(){
  document.querySelectorAll('.reveal:not(.visible)').forEach(el=>{
    const io=new IntersectionObserver(es=>{es.forEach(e=>{if(e.isIntersecting){e.target.classList.add('visible');io.unobserve(e.target);}});},{threshold:.12});
    io.observe(el);
  });
}

/* ======================================================
   AI ASSISTANT — FAQ CHATBOT (full rewrite)
   ====================================================== */
const FAQ_DATA = {
  mercerie: {
    ar: {
      title: 'ميمو مرسيري',
      desc: 'متجر خيوط وأزرار ومستلزمات الخياطة في بوعردون بومرداس.',
      products: 'نقدم خيوط كوتون، إبر خياطة، أزرار لؤلؤ، شرائط مطاطية، دبابيس، مقصات، وأكثر.',
      prices: 'الأسعار تبدأ من <span class="ltr-num">50</span> دج. اطلبي عبر واتساب لمعرفة التفاصيل.',
      hours: 'نعمل يوميًا من <span class="ltr-num">9:00</span> صباحًا إلى <span class="ltr-num">6:00</span> مساءً.',
      location: 'بوعردون، ولاية بومرداس.',
      contact: 'واتساب: <span class="ltr-num">0558253614</span>'
    },
    fr: {
      title: 'M Mercerie',
      desc: 'Magasin de fils, boutons et fournitures de couture à Bouârdoun, Boumerdès.',
      products: 'Nous proposons du fil coton, des aiguilles, des boutons perle, des rubans élastiques, des épingles, des ciseaux et plus.',
      prices: 'Les prix commencent à 50 DA. Commandez via WhatsApp pour les détails.',
      hours: 'Ouvert tous les jours de 9h à 18h.',
      location: 'Bouârdoun, Wilaya de Boumerdès.',
      contact: 'WhatsApp: <span class="ltr-num">0558253614</span>'
    },
    en: {
      title: 'M Mercerie',
      desc: 'Sewing supplies shop in Bouârdoun, Boumerdès.',
      products: 'We offer cotton thread, sewing needles, pearl buttons, elastic bands, pins, scissors and more.',
      prices: 'Prices start from 50 DA. Order via WhatsApp for details.',
      hours: 'Open daily from 9am to 6pm.',
      location: 'Bouârdoun, Boumerdès Province.',
      contact: 'WhatsApp: <span class="ltr-num">0558253614</span>'
    }
  },
  rental: {
    ar: {
      title: 'ميمو أفراح',
      desc: 'تأجير طاولات وكراسي وديكور وإضاءة وخيام للأعراس والمناسبات.',
      products: 'نؤجر طاولات استقبال، كراسي أنيقة، ديكور زفاف، إضاءة حفلات، خيام، كنوز صور، ومسارح.',
      prices: 'الأسعار حسب الكمية والنوع. تواصلي معنا للحصول على عرض سعر مجاني.',
      hours: 'متاحون للحجز يوميًا. التوصيل والتركيب مجانيان في بومرداس والجزائر العاصمة.',
      location: 'بومرداس والجزائر العاصمة.',
      contact: 'واتساب: <span class="ltr-num">0558253614</span>'
    },
    fr: {
      title: 'M Afrah',
      desc: 'Location de tables, chaises, décoration, éclairage et tentes pour mariages.',
      products: 'Nous louons des tables de réception, des chaises élégantes, des décorations, de l\'éclairage, des tentes, des paravents photo et des estrades.',
      prices: 'Les prix dépendent de la quantité et du type. Contactez-nous pour un devis gratuit.',
      hours: 'Disponible tous les jours. Livraison et montage gratuits à Boumerdès et Alger.',
      location: 'Boumerdès et Alger.',
      contact: 'WhatsApp: <span class="ltr-num">0558253614</span>'
    },
    en: {
      title: 'M Afrah',
      desc: 'Rental of tables, chairs, decor, lighting and tents for weddings.',
      products: 'We rent reception tables, elegant chairs, decorations, lighting, tents, photo backdrops and stages.',
      prices: 'Prices depend on quantity and type. Contact us for a free quote.',
      hours: 'Available daily. Free delivery & setup in Boumerdès and Algiers.',
      location: 'Boumerdès and Algiers.',
      contact: 'WhatsApp: <span class="ltr-num">0558253614</span>'
    }
  },
  patisserie: {
    ar: {
      title: 'ميمو كيك',
      desc: 'تصميم كعكات مخصصة لأعراس وأعياد ميلاد ومناسبات.',
      products: 'نقدم كعكات زفاف، كب كيك، تارت فواكه، كعكات شوكولاتة، كعكات ميني، والمزيد.',
      prices: 'الأسعار تبدأ من <span class="ltr-num">2,000</span> دج حسب الحجم والتصميم.',
      hours: 'نعمل يوميًا من <span class="ltr-num">10:00</span> صباحًا إلى <span class="ltr-num">8:00</span> مساءً.',
      location: 'بومرداس.',
      contact: 'واتساب: <span class="ltr-num">0558253614</span>'
    },
    fr: {
      title: 'M Cake',
      desc: 'Gâteaux sur mesure pour mariages, anniversaires et événements.',
      products: 'Nous proposons des gâteaux de mariage, cupcakes, tartes, gâteaux au chocolat, mini gâteaux et plus.',
      prices: 'Les prix commencent à 2000 DA selon la taille et le design.',
      hours: 'Ouvert tous les jours de 10h à 20h.',
      location: 'Boumerdès.',
      contact: 'WhatsApp: <span class="ltr-num">0558253614</span>'
    },
    en: {
      title: 'M Cake',
      desc: 'Custom cakes for weddings, birthdays and events.',
      products: 'We offer wedding cakes, cupcakes, fruit tarts, chocolate cakes, mini cakes and more.',
      prices: 'Prices start from 2000 DA depending on size and design.',
      hours: 'Open daily from 10am to 8pm.',
      location: 'Boumerdès.',
      contact: 'WhatsApp: <span class="ltr-num">0558253614</span>'
    }
  }
};

let chatbotOpen = false;
const $chat = {
  fab: document.getElementById('chatbotFab'),
  win: document.getElementById('chatbotWindow'),
  body: document.getElementById('chatbotBody'),
  input: document.getElementById('chatbotInput'),
  send: document.getElementById('chatbotSend'),
  close: document.getElementById('chatbotClose'),
  typing: document.getElementById('chatbotTyping'),
  pills: document.getElementById('chatbotQuickReplies')
};

$chat.fab.addEventListener('click', toggleChatbot);
$chat.send.addEventListener('click', sendUserMsg);
$chat.close.addEventListener('click', () => { chatbotOpen = false; $chat.fab.classList.remove('open'); $chat.win.classList.remove('open'); });
$chat.input.addEventListener('keydown', e => { if (e.key === 'Enter') sendUserMsg(); });

function toggleChatbot() {
  chatbotOpen = !chatbotOpen;
  $chat.fab.classList.toggle('open', chatbotOpen);
  $chat.win.classList.toggle('open', chatbotOpen);
  if (chatbotOpen && $chat.body.querySelectorAll('.chatbot-msg').length === 0) {
    const greeting = {
      ar: 'مرحبًا! أنا مساعد ميمو 🤖 كيف يمكنني مساعدتك اليوم؟',
      fr: 'Bonjour ! Je suis l\'assistant M 🤖 Comment puis-je vous aider ?',
      en: 'Hello! I\'m the M assistant 🤖 How can I help you today?'
    };
    typeThenReply(greeting[currentLang], [
      { label: '✂️ ' + T.chat_btn_mercerie[currentLang], action: () => showBiz('mercerie') },
      { label: '💒 ' + T.chat_btn_rental[currentLang], action: () => showBiz('rental') },
      { label: '🎂 ' + T.chat_btn_patisserie[currentLang], action: () => showBiz('patisserie') },
      { label: '💰 ' + T.chat_btn_prices[currentLang], action: () => showTopic('prices') },
      { label: '🕐 ' + T.chat_btn_hours[currentLang], action: () => showTopic('hours') },
      { label: '📞 ' + T.chat_btn_contact[currentLang], action: () => showTopic('contact') }
    ]);
  }
  if (chatbotOpen) setTimeout(() => $chat.input.focus(), 350);
}

function appendMsg(html, isUser) {
  const el = document.createElement('div');
  el.className = 'chatbot-msg ' + (isUser ? 'user' : 'bot');
  el.innerHTML = html;
  $chat.body.insertBefore(el, $chat.typing);
  $chat.body.scrollTop = $chat.body.scrollHeight;
}

function showTyping() { $chat.typing.classList.add('show'); $chat.body.scrollTop = $chat.body.scrollHeight; }
function hideTyping() { $chat.typing.classList.remove('show'); }

function typeThenReply(html, quickReplies) {
  showTyping();
  $chat.pills.innerHTML = '';
  setTimeout(() => {
    hideTyping();
    appendMsg(html);
    if (quickReplies && quickReplies.length) showPills(quickReplies);
  }, 600 + Math.random() * 400);
}

function showPills(items) {
  $chat.pills.innerHTML = '';
  items.forEach(item => {
    const btn = document.createElement('button');
    btn.className = 'chatbot-pill';
    btn.textContent = item.label;
    btn.onclick = () => { appendMsg(item.label, true); item.action(); };
    $chat.pills.appendChild(btn);
  });
}

function showBiz(biz) {
  const d = FAQ_DATA[biz][currentLang];
  typeThenReply(
    `<strong>${d.title}</strong><br>${d.desc}<br><br>` +
    `🛍️ ${d.products}<br>💰 ${d.prices}<br>🕐 ${d.hours}<br>📍 ${d.location}<br>📞 ${d.contact}`
  , [
    { label: '💰 ' + T.chat_btn_prices[currentLang], action: () => showTopic('prices') },
    { label: '📞 ' + T.chat_btn_contact[currentLang], action: () => showTopic('contact') },
    { label: currentLang === 'ar' ? '← رجوع' : currentLang === 'fr' ? '← Retour' : '← Back', action: goHome }
  ]);
}

function showTopic(topic) {
  const msgs = {
    prices: {
      ar: '💰 <strong>الأسعار:</strong><br><br>✂️ ميمو مرسيري: يبدأ من <span class="ltr-num">50</span> دج<br>💒 ميمو أفراح: حسب الكمية والنوع<br>🎂 ميمو كيك: يبدأ من <span class="ltr-num">2,000</span> دج<br><br>💬 للحصول على عرض سعر مجاني، تواصل معنا عبر واتساب!',
      fr: '💰 <strong>Prix:</strong><br><br>✂️ M Mercerie: à partir de 50 DA<br>💒 M Afrah: selon la quantité<br>🎂 M Cake: à partir de 2000 DA<br><br>💬 Pour un devis gratuit, contactez-nous via WhatsApp !',
      en: '💰 <strong>Prices:</strong><br><br>✂️ M Mercerie: from 50 DA<br>💒 M Afrah: depending on quantity<br>🎂 M Cake: from 2000 DA<br><br>💬 For a free quote, reach us via WhatsApp!'
    },
    hours: {
      ar: '🕐 <strong>ساعات العمل:</strong><br><br>✂️ ميمو مرسيري: <span class="ltr-num">9:00</span> صباحًا — <span class="ltr-num">6:00</span> مساءً<br>💒 ميمو أفراح: متاحون يوميًا للحجز<br>🎂 ميمو كيك: <span class="ltr-num">10:00</span> صباحًا — <span class="ltr-num">8:00</span> مساءً',
      fr: '🕐 <strong>Horaires:</strong><br><br>✂️ M Mercerie: 9h — 18h<br>💒 M Afrah: disponible tous les jours<br>🎂 M Cake: 10h — 20h',
      en: '🕐 <strong>Hours:</strong><br><br>✂️ M Mercerie: 9am — 6pm<br>💒 M Afrah: available daily<br>🎂 M Cake: 10am — 8pm'
    },
    contact: {
      ar: '📞 <strong>تواصل معنا:</strong><br><br>📱 واتساب: <a href="https://wa.me/213558253614" target="_blank"><span class="ltr-num">0558253614</span></a><br>📍 بومرداس، الجزائر<br><br>💬 جميع المشاريع الثلاثة في خدمةك!',
      fr: '📞 <strong>Contactez-nous:</strong><br><br>📱 WhatsApp: <a href="https://wa.me/213558253614" target="_blank"><span class="ltr-num">0558253614</span></a><br>📍 Boumerdès, Algérie<br><br>💬 Toutes nos entreprises sont à votre service !',
      en: '📞 <strong>Contact Us:</strong><br><br>📱 WhatsApp: <a href="https://wa.me/213558253614" target="_blank"><span class="ltr-num">0558253614</span></a><br>📍 Boumerdès, Algeria<br><br>💬 All three businesses at your service!'
    },
    location: {
      ar: '📍 <strong>الموقع:</strong><br><br>🏢 نقع في بوعردون، ولاية بومرداس، الجزائر.<br>🚗 خدمة التوصيل والتركيب متاحة في بومرداس والجزائر العاصمة.',
      fr: '📍 <strong>Localisation:</strong><br><br>🏢 Nous sommes à Bouârdoun, Wilaya de Boumerdès, Algérie.<br>🚗 Livraison et montage disponibles à Boumerdès et Alger.',
      en: '📍 <strong>Location:</strong><br><br>🏢 We are in Bouârdoun, Boumerdès Province, Algeria.<br>🚗 Delivery & setup available in Boumerdès and Algiers.'
    }
  };
  typeThenReply(msgs[topic][currentLang], [
    { label: '✂️ ' + T.chat_btn_mercerie[currentLang], action: () => showBiz('mercerie') },
    { label: '💒 ' + T.chat_btn_rental[currentLang], action: () => showBiz('rental') },
    { label: '🎂 ' + T.chat_btn_patisserie[currentLang], action: () => showBiz('patisserie') },
    { label: currentLang === 'ar' ? '← رجوع' : currentLang === 'fr' ? '← Retour' : '← Back', action: goHome }
  ]);
}

function goHome() {
  const greeting = {
    ar: 'كيف يمكنني مساعدتك؟',
    fr: 'Comment puis-je vous aider ?',
    en: 'How can I help you?'
  };
  typeThenReply(greeting[currentLang], [
    { label: '✂️ ' + T.chat_btn_mercerie[currentLang], action: () => showBiz('mercerie') },
    { label: '💒 ' + T.chat_btn_rental[currentLang], action: () => showBiz('rental') },
    { label: '🎂 ' + T.chat_btn_patisserie[currentLang], action: () => showBiz('patisserie') },
    { label: '💰 ' + T.chat_btn_prices[currentLang], action: () => showTopic('prices') },
    { label: '🕐 ' + T.chat_btn_hours[currentLang], action: () => showTopic('hours') },
    { label: '📞 ' + T.chat_btn_contact[currentLang], action: () => showTopic('contact') }
  ]);
}

function sendUserMsg() {
  const text = $chat.input.value.trim();
  if (!text) return;
  appendMsg(text, true);
  $chat.input.value = '';
  $chat.pills.innerHTML = '';

  const lower = text.toLowerCase();

  // Arabic keywords
  const arMercerie = ['مرسيري','خيوط','خيط','أزرار','إبر','خياطة','دبابيس','مقص','شريط','كوتون','سحاب','زر'];
  const arRental   = ['أفراح','أعراس','زفاف','حفلات','طاولات','كراسي','ديكور','إضاءة','خيام','كنب','مسارح','بيت صور'];
  const arCake     = ['كيك','كعكة','كب كيك','شوكولاتة','ميلاد','فراولة','تارت','ميني كيك'];

  // French keywords
  const frMercerie = ['mercerie','fil','bouton','aiguille','couture','épingle','ciseau','fermeture','ruban','perle'];
  const frRental   = ['afrah','location','mariage','table','chaise','décor','tente','estrade','éclairage','paravent'];
  const frCake     = ['cake','gâteau','cupcake','chocolat','anniversaire','fraise','tarte','pâtisserie'];

  // English keywords
  const enMercerie = ['mercerie','thread','button','needle','sewing','pin','scissor','zipper','ribbon','elastic'];
  const enRental   = ['rental','afrah','wedding','table','chair','decor','tent','stage','lighting','backdrop'];
  const enCake     = ['cake','cupcake','chocolate','birthday','strawberry','tart','pastry','patisserie'];

  // Greetings
  const greetings = ['مرحبا','السلام عليكم','سلام','هاي','هلو','bonjour','salut','hello','hi','hey','bonsoir'];
  const thanks = ['شكرا','ممنون','merci','thanks','thank you','gré'];

  if (greetings.some(k => lower.includes(k))) {
    const msgs = {
      ar: 'مرحبًا بكم في ميمو! 👋 كيف يمكنني مساعدتك؟ اختر أحد الخيارات أدناه:',
      fr: 'Bienvenue chez M ! 👋 Comment puis-je vous aider ? Choisissez une option :',
      en: 'Welcome to M! 👋 How can I help you? Choose an option:'
    };
    typeThenReply(msgs[currentLang], [
      { label: '✂️ ' + T.chat_btn_mercerie[currentLang], action: () => showBiz('mercerie') },
      { label: '💒 ' + T.chat_btn_rental[currentLang], action: () => showBiz('rental') },
      { label: '🎂 ' + T.chat_btn_patisserie[currentLang], action: () => showBiz('patisserie') }
    ]);
  } else if (thanks.some(k => lower.includes(k))) {
    const msgs = {
      ar: 'على الرحب والسعة! 😊 هل تحتاج مساعدة إضافية؟',
      fr: 'Avec plaisir ! 😊 Avez-vous besoin d\'autre chose ?',
      en: 'You\'re welcome! 😊 Need anything else?'
    };
    typeThenReply(msgs[currentLang], [
      { label: '💰 ' + T.chat_btn_prices[currentLang], action: () => showTopic('prices') },
      { label: '📞 ' + T.chat_btn_contact[currentLang], action: () => showTopic('contact') }
    ]);
  } else if (arMercerie.some(k => lower.includes(k)) || frMercerie.some(k => lower.includes(k)) || enMercerie.some(k => lower.includes(k))) {
    showBiz('mercerie');
  } else if (arRental.some(k => lower.includes(k)) || frRental.some(k => lower.includes(k)) || enRental.some(k => lower.includes(k))) {
    showBiz('rental');
  } else if (arCake.some(k => lower.includes(k)) || frCake.some(k => lower.includes(k)) || enCake.some(k => lower.includes(k))) {
    showBiz('patisserie');
  } else if (lower.match(/سعر|prix|price|كم|combien|cost|أرخص|gros|moins/)) {
    showTopic('prices');
  } else if (lower.match(/ساع|heure|hour|وقت|temps|open|ouvert|mfto7|مفتوح|fermé|fermeture|clôture/)) {
    showTopic('hours');
  } else if (lower.match(/هاتف|tel|phone|تواصل|contact|wa|واتساب|whatsapp|numéro|رقم/)) {
    showTopic('contact');
  } else if (lower.match(/مكان| lieu|location|address|adresse|وين|فين|أين|بومرداس|boumerd|alger|dairah/)) {
    showTopic('location');
  } else {
    const noResult = {
      ar: 'عذرًا، لم أفهم سؤالك. يمكنك السؤال عن ميمو مرسيري، ميمو أفراح، أو ميمو كيك:',
      fr: 'Désolé, je n\'ai pas compris. Posez une question sur M Mercerie, M Afrah ou M Cake :',
      en: 'Sorry, I didn\'t understand. You can ask about M Mercerie, M Afrah, or M Cake:'
    };
    typeThenReply(noResult[currentLang], [
      { label: '✂️ ' + T.chat_btn_mercerie[currentLang], action: () => showBiz('mercerie') },
      { label: '💒 ' + T.chat_btn_rental[currentLang], action: () => showBiz('rental') },
      { label: '🎂 ' + T.chat_btn_patisserie[currentLang], action: () => showBiz('patisserie') },
      { label: '📞 ' + T.chat_btn_contact[currentLang], action: () => showTopic('contact') }
    ]);
  }
}

/* ======================================================
   SEARCH — INTELLIGENT PRODUCT SEARCH
   ====================================================== */
function initSearch() {
  const input = document.getElementById('searchInput');
  const results = document.getElementById('searchResults');
  if (!input || !results) return;

  input.addEventListener('input', () => {
    const q = input.value.trim().toLowerCase();
    if (q.length < 2) { results.classList.remove('open'); return; }

    let matches = [];
    Object.values(BIZ).forEach(b => {
      const prods = allData[b.id].products || [];
      const arts = allData[b.id].articles || [];
      prods.forEach(p => {
        const title = (p.title||'').toLowerCase();
        const price = (p.price||'').toLowerCase();
        if (title.includes(q) || price.includes(q)) {
          matches.push({type:'product', biz:b, item:p});
        }
      });
      arts.forEach(a => {
        const title = (a.title||'').toLowerCase();
        if (title.includes(q)) {
          matches.push({type:'article', biz:b, item:a});
        }
      });
    });

    if (matches.length === 0) {
      results.innerHTML = `<div class="search-empty">${currentLang==='ar'?'لا توجد نتائج':currentLang==='fr'?'Aucun résultat':'No results'}</div>`;
    } else {
      results.innerHTML = matches.slice(0,8).map(m => `
        <div class="search-result-item" onclick="App.navigate('store','${m.biz.id}');document.getElementById('searchInput').value='';document.getElementById('searchResults').classList.remove('open');">
          <span class="sr-emoji">${m.biz.emoji}</span>
          <div class="sr-info">
            <div class="sr-title">${m.item.title}</div>
            <div class="sr-biz">${m.biz.name[currentLang]}</div>
          </div>
          ${m.item.price ? `<span class="sr-price">${m.item.price}</span>` : ''}
        </div>
      `).join('');
    }
    results.classList.add('open');
  });

  input.addEventListener('blur', () => {
    setTimeout(() => results.classList.remove('open'), 200);
  });
  input.addEventListener('focus', () => {
    if (input.value.trim().length >= 2) input.dispatchEvent(new Event('input'));
  });
}

/* ======================================================
   CONVERSION — SOCIAL PROOF
   ====================================================== */
const SP_NAMES_AR=['سارة','فاطمة','ليلى','نور','آية','مريم','خديجة','هدى','سلمى','ياسمين'];
const SP_NAMES_FR=['Sarah','Fatima','Leila','Nour','Aya','Meriem','Khadija','Houda','Salma','Yasmine'];
const SP_CITIES=['بومرداس','الجزائر','تيزي وزو','بجاية','البويرة'];
const SP_PRODUCTS={
  mercerie:['خيط كوتون أزرق','إبر خياطة','أزرار لؤلؤ','شريط مطاطي','خيط كركم'],
  rental:['جهاز كوافير','طاولة طعام فخمة','كرسي عريس','ستارة ورد','إضاءة حفلات'],
  patisserie:['كيكة شوكولاتة','ماكرون فراولة','تارت فواكه','كيكة زفاف','كوكيز بالشوكولاتة']
};

let spTimer=null;
function showSocialProof(){
  if(currentPage!=='home'&&currentPage!=='store') return;
  const isAr=currentLang==='ar';
  const bizKeys=Object.keys(SP_PRODUCTS);
  const bizKey=bizKeys[Math.floor(Math.random()*bizKeys.length)];
  const b=BIZ[bizKey];
  const prodList=SP_PRODUCTS[bizKey];
  const prod=prodList[Math.floor(Math.random()*prodList.length)];
  const name=isAr?SP_NAMES_AR[Math.floor(Math.random()*SP_NAMES_AR.length)]:SP_NAMES_FR[Math.floor(Math.random()*SP_NAMES_FR.length)];
  const city=SP_CITIES[Math.floor(Math.random()*SP_CITIES.length)];
  const ago=Math.floor(Math.random()*15)+1;
  const timeText=isAr?`منذ ${ago} دقائق`:currentLang==='fr'?`il y a ${ago} min`:`${ago} min ago`;

  document.getElementById('spAvatar').textContent=b.emoji;
  document.getElementById('spName').textContent=name+(isAr?' من '+city:' ('+city+')');
  document.getElementById('spAction').textContent=(isAr?'اشترت للتو':currentLang==='fr'?'a acheté':'bought')+' — '+prod;
  document.getElementById('spTime').textContent=timeText;

  const el=document.getElementById('socialProof');
  el.classList.add('show');
  clearTimeout(spTimer);
  spTimer=setTimeout(()=>el.classList.remove('show'),5000);
}

function hideSocialProof(){document.getElementById('socialProof').classList.remove('show');clearTimeout(spTimer);}

/* ======================================================
   CONVERSION — QUICK VIEW
   ====================================================== */
function openQuickView(title,price,desc,imageUrl,whatsapp,waText){
  document.getElementById('qvTitle').textContent=title;
  document.getElementById('qvPrice').textContent=price||((currentLang==='ar'?'السعر عند الاستفسار':currentLang==='fr'?'Prix sur demande':'Price on request'));
  document.getElementById('qvDesc').textContent=desc||(currentLang==='ar'?'منتج مميز بجودة عالية.':currentLang==='fr'?'Produit de haute qualité.':'High-quality product.');

  const imgContainer=document.getElementById('qvImg');
  if(imageUrl){imgContainer.innerHTML=`<img src="${imageUrl}" alt="${title}">`;}
  else{imgContainer.innerHTML=`<div class="qv-placeholder">${BIZ.mercerie.emoji}</div>`;}

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
    stockEl.innerHTML=`<div class="stock-dot low-stock"></div> <span>${currentLang==='ar'?'متبقي '+stock+' فقط':currentLang==='fr'?'Plus que '+stock+' en stock':'Only '+stock+' left'}</span>`;
  } else {
    stockEl.innerHTML=`<div class="stock-dot in-stock"></div> <span>${currentLang==='ar'?'متوفر':currentLang==='fr'?'En stock':'In stock'}</span>`;
  }

  document.getElementById('qvWaBtn').href='https://wa.me/'+whatsapp+'?text='+waText;
  document.getElementById('qvOverlay').classList.add('open');
  document.body.style.overflow='hidden';
}

function closeQuickView(){
  document.getElementById('qvOverlay').classList.remove('open');
  document.body.style.overflow='';
}

/* ======================================================
   CONVERSION — STICKY CTA
   ====================================================== */
function updateStickyCta(){
  const sticky=document.getElementById('stickyCta');
  const floatWa=document.getElementById('floatWa');
  if(currentPage==='store'&&currentBusiness){
    const b=BIZ[currentBusiness];
    document.getElementById('ctaTitle').textContent=b.emoji+' '+b.name[currentLang];
    document.getElementById('ctaSub').textContent=(currentLang==='ar'?'اطلب الآن عبر واتساب':currentLang==='fr'?'Commandez via WhatsApp':'Order via WhatsApp');
    document.getElementById('ctaWa').href='https://wa.me/'+b.whatsapp;
    sticky.classList.add('visible');
    floatWa.style.display='none';
  } else if(currentPage==='home'){
    sticky.classList.remove('visible');
    floatWa.style.display='';
  } else {
    sticky.classList.remove('visible');
    floatWa.style.display='none';
  }
}

/* ======================================================
   CONVERSION — EXIT INTENT
   ====================================================== */
let exitShown=false;
function closeExitPopup(){document.getElementById('exitPopup').classList.remove('show');exitShown=true;}
document.addEventListener('mouseout',e=>{
  if(exitShown||currentPage!=='home') return;
  if(e.clientY<5){setTimeout(()=>{if(!exitShown)document.getElementById('exitPopup').classList.add('show');},800);}
});
document.addEventListener('touchstart',e=>{
  if(exitShown||currentPage!=='home') return;
  if(e.touches[0].clientY<5){setTimeout(()=>{if(!exitShown)document.getElementById('exitPopup').classList.add('show');},800);}
});

/* ======================================================
   CONVERSION — INIT
   ====================================================== */
setTimeout(()=>showSocialProof(),8000);
setInterval(()=>showSocialProof(),25000);

/* ======================================================
   AUTH — LOGIN / REGISTER / GOOGLE / RESET / TURNSTILE
   ====================================================== */
const AUTH_CF = {login:'cfTurnstileLogin', register:'cfTurnstileRegister', forgot:'cfTurnstileForgot'};
const SITE_URL = location.protocol+'//'+location.host+(location.pathname||'/');
const TURNSTILE_SITE_KEY = "0x4AAAAAAEGDgLfygIgeZ-OB"; /* ← Collez ici votre Cloudflare Turnstile Site Key */
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
function activeAuthView(){ const v=document.querySelector('.auth-view:not(.hidden)'); return v?String(v.id).replace('authView',''):'login'; }
async function requireTurnstile(view){
  if(!TURNSTILE_SITE_KEY) return '';
  const token=cfToken(view);
  if(!token){ showToast(T.auth_captcha_err[currentLang],'error'); return null; }
  return token;
}
function openAuthModal(view){
  const modal=document.getElementById('authModal');
  modal.classList.add('open'); document.body.style.overflow='hidden';
  showAuthView(view||'login');
}
function closeAuthModal(){
  document.getElementById('authModal').classList.remove('open');
  document.body.style.overflow='';
  document.getElementById('userMenu').classList.remove('open');
}
function showAuthView(view){
  document.querySelectorAll('.auth-view').forEach(v=>v.classList.add('hidden'));
  const target=document.getElementById('authView'+view);
  if(target) target.classList.remove('hidden');
  document.querySelectorAll('.auth-tab').forEach(t=>t.classList.toggle('active',t.dataset.view===view));
  if(AUTH_CF[view]&&window.turnstile&&TURNSTILE_SITE_KEY) setTimeout(()=>renderTurnstile(view),50);
}
function setAuthUI(user){
  authUser=user;
  const btn=document.getElementById('authBtn');
  const dd=document.getElementById('userMenu');
  const mb=document.getElementById('authMobile');
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
  if(mb){
    mb.textContent=user?T.auth_logout[currentLang]:T.auth_login[currentLang];
    if(user) mb.removeAttribute('data-i18n'); else mb.setAttribute('data-i18n','auth_login');
  }
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
  if(currentPage==='store'&&currentBusiness) renderCommentForm(currentBusiness);
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
function checkRecovery(){
  const h=location.hash||'';
  if(h.indexOf('type=recovery')>=0){
    setTimeout(()=>{ openAuthModal('reset'); },250);
    try{ history.replaceState(null,'',location.pathname+location.search); }catch(e){}
  }
}
function initAuth(){
  if(!sb) return;
  sb.auth.onAuthStateChange((event,session)=>{
    if(event==='SIGNED_OUT'){ setAuthUI(null); return; }
    if(session&&session.user){
      if(event==='SIGNED_IN') trackEvent('login',{});
      loadProfile(session.user);
    }
  });
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
    showAuthView('login'); f.reset();
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
    closeAuthModal();
  }catch(err){ showToast(T.toast_error[currentLang]+': '+err.message,'error'); }
}
async function doForgot(e){
  e.preventDefault();
  const email=e.target.f_email.value.trim();
  if(!email){ showToast(T.auth_err_required[currentLang],'error'); return; }
  const token=await requireTurnstile('forgot'); if(token===null) return;
  try{
    const {error}=await sb.auth.resetPasswordForEmail(email,{redirectTo:SITE_URL,...(token?{captchaToken:token}:{})});
    if(error) throw error;
    showToast(T.auth_ok_forgot[currentLang],'success');
    showAuthView('login');
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
    closeAuthModal();
  }catch(err){ showToast(T.toast_error[currentLang]+': '+err.message,'error'); }
}
async function googleLogin(){
  if(!sb) return;
  const token=await requireTurnstile(activeAuthView()); if(token===null) return;
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
document.getElementById('authBtn').addEventListener('click',e=>{
  e.stopPropagation();
  if(authUser) document.getElementById('userMenu').classList.toggle('open');
  else openAuthModal('login');
});
document.addEventListener('click',()=>{ document.getElementById('userMenu').classList.remove('open'); });
const authMobile=document.getElementById('authMobile');
if(authMobile) authMobile.addEventListener('click',e=>{
  e.preventDefault(); closeMenu();
  if(authUser) logout(); else openAuthModal('login');
});

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
    if(authUser&&authUser.id) payload.user_id=authUser.id;
    await sb.from('analytics_events').insert(payload);
  }catch(e){ console.warn('trackEvent:',e); }
}
function initAnalytics(){ if(sb) trackEvent('page_view',{}); }

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
    wrap.innerHTML='<div class="comments-login-hint">'+T.comments_login_hint[currentLang]+' <a href="#" onclick="event.preventDefault();openAuthModal(\'login\')">'+T.auth_login[currentLang]+'</a></div>';
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

/* ======================================================
   INIT
   ====================================================== */
(async function(){
  if(sb){await loadAllData();}
  App.renderHome(); initReveal(); updateStickyCta(); initSearch();
  initAuth(); initAnalytics();
})();

/* Back to Top scroll listener */
const backTopEl=document.getElementById('backTop');
window.addEventListener('scroll',()=>{backTopEl.classList.toggle('visible',window.scrollY>400);},{passive:true});

/* Override navigate to update sticky CTA */
const _origNav=App.navigate.bind(App);
App.navigate=function(page,biz){_origNav(page,biz);updateStickyCta();trackEvent('page_view');};

