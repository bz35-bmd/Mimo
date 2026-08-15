/* ======================================================
   SHELL — chrome partagé : topbar, réglages, nav mobile,
   footer, recherche, langue, thème, social proof
   ====================================================== */
(function(){
  const PAGE = document.body.dataset.page||'home';
  currentPage = PAGE;
  currentBusiness = (PAGE==='mercerie')?'mercerie':null;

  const hasChat  = document.body.dataset.chat==='on';
  const hasSP    = document.body.dataset.sp==='on';
  const hasExit  = document.body.dataset.exit==='on';
  const hasQV    = document.body.dataset.qv==='on';
  const hasCTA   = document.body.dataset.cta==='on';

  const waSvg = '<svg viewBox="0 0 24 24"><path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z"/></svg>';

  const logoMarkup = function(gid){
    return '<svg viewBox="0 0 100 100" xmlns="http://www.w3.org/2000/svg"><defs>'+
      '<linearGradient id="'+gid+'1" x1="0%" y1="100%" x2="100%" y2="0%"><stop offset="0%" stop-color="#6C5CE7"/><stop offset="100%" stop-color="#A29BFE"/></linearGradient>'+
      '<linearGradient id="'+gid+'2" x1="0%" y1="0%" x2="100%" y2="100%"><stop offset="0%" stop-color="#F9CA24"/><stop offset="100%" stop-color="#E8B000"/></linearGradient>'+
      '<linearGradient id="'+gid+'3" x1="100%" y1="100%" x2="0%" y2="0%"><stop offset="0%" stop-color="#A29BFE"/><stop offset="100%" stop-color="#6C5CE7"/></linearGradient></defs>'+
      '<g fill="none" stroke-linecap="round"><path d="M25 84 C 25 58, 29 40, 34 20" stroke="url(#'+gid+'1)" stroke-width="8"/>'+
      '<path d="M66 20 C 71 40, 75 58, 75 84" stroke="url(#'+gid+'3)" stroke-width="8"/>'+
      '<path d="M34 20 C 42 32, 47 46, 50 52 C 53 46, 58 32, 66 20" stroke="url(#'+gid+'2)" stroke-width="8"/></g></svg>';
  };

  let shell = '';

  /* ---- TOPBAR ---- */
  shell += '<header class="topbar">'
    + '<div class="topbar-logo" style="cursor:pointer" onclick="location.reload()">'
    + '<div class="logo-icon app-logo" aria-hidden="true">'+logoMarkup('logoR')+'</div>'
    + '<span id="logoText" data-i18n="logo_text">ميمو منصتي</span>'
    + '<div class="dz-flag" title="الجزائر — Algérie">'
    + '<svg xmlns="http://www.w3.org/2000/svg" width="900" height="600" viewBox="0 0 900 600"><path fill="#fff" d="M0 0h900v600H0z"/><path fill="#063" d="M0 0h450v600H0z"/><path fill="#d21034" d="M579.903811 225a150 150 0 1 0 0 150 120 120 0 1 1 0-150M585.676275 300 450 255.916106 533.852549 371.329239v-142.658277L450 344.083894z"/></svg>'
    + '</div></div>'
    + '<nav class="topbar-nav" id="topbarNav">'
    + '<a href="index.html" data-nav="home" data-i18n="tab_home">الرئيسية</a>'
    + '<a href="mercerie.html" data-nav="mercerie" data-i18n="tab_mercerie">ميمو مرسيري</a>'
    + '<a href="afrah.html" data-nav="rental"><span data-i18n="tab_rental">ميمو أفراح</span><span class="cs-chip" data-i18n="cs_nav">قريبًا</span></a>'
    + '<a href="cake.html" data-nav="patisserie"><span data-i18n="tab_patisserie">ميمو كيك</span><span class="cs-chip" data-i18n="cs_nav">قريبًا</span></a>'
    + '</nav>'
    + '<div class="topbar-actions">'
    + '<div class="search-wrap" id="searchWrap">'
    + '<button class="search-trigger" id="searchTrigger" type="button" aria-label="Search">'
    + '<svg class="st-icon" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><circle cx="11" cy="11" r="8"/><path d="M21 21l-4.35-4.35"/></svg>'
    + '<svg class="st-close" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5"><path d="M18 6L6 18M6 6l12 12"/></svg>'
    + '</button>'
    + '<div class="search-panel" id="searchPanel" aria-hidden="true">'
    + '<div class="search-box">'
    + '<svg class="sp-icon" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><circle cx="11" cy="11" r="8"/><path d="M21 21l-4.35-4.35"/></svg>'
    + '<input type="text" class="search-input" id="searchInput" autocomplete="off" data-i18n-placeholder="search_placeholder" placeholder="بحث...">'
    + '<button class="search-clear" id="searchClear" type="button" aria-label="Close">✕</button>'
    + '</div>'
    + '<div class="search-results" id="searchResults"></div>'
    + '</div></div>'
    + '<div class="lang-switcher" id="langSwitcher">'
    + '<button class="lang-btn" id="langBtn" type="button" aria-haspopup="true" aria-expanded="false">'
    + '<span class="lang-flag" id="langFlag">AR</span>'
    + '<svg class="lang-chev" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5"><path d="M6 9l6 6 6-6"/></svg>'
    + '</button>'
    + '<div class="lang-dropdown" id="langDropdown">'
    + '<button class="lang-option" data-lang="ar" type="button"><span class="lang-flag">AR</span><span>العربية</span></button>'
    + '<button class="lang-option" data-lang="fr" type="button"><span class="lang-flag">FR</span><span>Français</span></button>'
    + '<button class="lang-option" data-lang="en" type="button"><span class="lang-flag">EN</span><span>English</span></button>'
    + '</div></div>'
    + '<button class="theme-switch" id="themeToggle" type="button" role="switch" aria-checked="false" aria-label="Basculer le thème">'
    + '<span class="tsw-track" aria-hidden="true">'
    + '<svg class="tsw-icon tsw-sun" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><circle cx="12" cy="12" r="4.4"/><path d="M12 2.4v2.2M12 19.4v2.2M2.4 12h2.2M19.4 12h2.2M5.1 5.1l1.55 1.55M17.35 17.35l1.55 1.55M18.9 5.1l-1.55 1.55M6.65 17.35l-1.55 1.55"/></svg>'
    + '<span class="tsw-knob"></span>'
    + '<svg class="tsw-icon tsw-moon" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M21 12.79A9 9 0 1 1 11.21 3a7 7 0 0 0 9.79 9.79z"/></svg>'
    + '</span>'
    + '</button>'
    + '<button class="theme-btn" id="settingsBtn" aria-label="Réglages">'
    + '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><circle cx="12" cy="12" r="3"/><path d="M19.4 15a1.65 1.65 0 00.33 1.82l.06.06a2 2 0 11-2.83 2.83l-.06-.06a1.65 1.65 0 00-1.82-.33 1.65 1.65 0 00-1 1.51V21a2 2 0 11-4 0v-.09a1.65 1.65 0 00-1-1.51 1.65 1.65 0 00-1.82.33l-.06.06a2 2 0 11-2.83-2.83l.06-.06a1.65 1.65 0 00.33-1.82 1.65 1.65 0 00-1.51-1H3a2 2 0 110-4h.09a1.65 1.65 0 001.51-1 1.65 1.65 0 00-.33-1.82l-.06-.06a2 2 0 112.83-2.83l.06.06a1.65 1.65 0 001.82.33h.01a1.65 1.65 0 001-1.51V3a2 2 0 114 0v.09a1.65 1.65 0 001 1.51h.01a1.65 1.65 0 001.82-.33l.06-.06a2 2 0 112.83 2.83l-.06.06a1.65 1.65 0 00-.33 1.82v.01a1.65 1.65 0 001.51 1H21a2 2 0 110 4h-.09a1.65 1.65 0 00-1.51 1z"/></svg>'
    + '</button>'
    + '<div class="user-area" id="userArea">'
    + '<button class="auth-btn" id="authBtn" type="button">'
    + '<svg class="auth-icon" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><circle cx="12" cy="8" r="4"/><path d="M4 21c0-4 3.6-6 8-6s8 2 8 6"/></svg>'
    + '<span data-i18n="auth_login">تسجيل الدخول</span>'
    + '</button>'
    + '<div class="user-menu" id="userMenu">'
    + '<div class="um-head"><div class="um-avatar" id="umAvatar">م</div><div class="um-meta"><div class="um-name" id="umName">—</div><div class="um-email" id="umEmail">—</div><span class="um-role" id="umRole"></span></div></div>'
    + '<a class="um-btn" id="umMember" href="membre.html">'
    + '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M20 21v-2a4 4 0 00-4-4H8a4 4 0 00-4 4v2"/><circle cx="12" cy="7" r="4"/></svg>'
    + '<span data-i18n="nav_member">مساحتي</span></a>'
    + '<a class="um-btn um-admin" id="umAdmin" href="admin.html" style="display:none">'
    + '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M12 2l7 3v6c0 5-3.5 8.5-7 10-3.5-1.5-7-5-7-10V5z"/><circle cx="12" cy="10" r="2.5"/></svg>'
    + '<span data-i18n="nav_admin">لوحة الإدارة</span></a>'
    + '<button class="um-btn um-logout" onclick="logout()" type="button">'
    + '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M9 21H5a2 2 0 01-2-2V5a2 2 0 012-2h4"/><polyline points="16 17 21 12 16 7"/><line x1="21" y1="12" x2="9" y2="12"/></svg>'
    + '<span data-i18n="auth_logout">تسجيل الخروج</span></button>'
    + '</div></div>'
    + '</div>'
    + '<button class="burger" id="burgerBtn" aria-label="Menu">☰</button>'
    + '</header>';

  /* ---- SETTINGS PANEL ---- */
  shell += '<div class="settings-panel" id="settingsPanel" aria-hidden="true">'
    + '<div class="settings-head"><h4 data-i18n="settings_title">التخصيص</h4><button class="settings-close" id="settingsClose">✕</button></div>'
    + '<div class="settings-body">'
    + '<div class="settings-group"><h5 data-i18n="settings_theme">المظهر</h5><div class="settings-options" id="themeOptions">'
    + '<button class="settings-opt" data-theme="dark" title="Dark"><span class="so-preview th-swatch" style="background:#0A0A0F"><span class="dot" style="background:#6C5CE7"></span></span><span class="so-label" data-i18n="theme_dark">داكن</span></button>'
    + '<button class="settings-opt" data-theme="light" title="Light"><span class="so-preview th-swatch" style="background:#F5F5F7"><span class="dot" style="background:#6C5CE7"></span></span><span class="so-label" data-i18n="theme_light">فاتح</span></button>'
    + '<button class="settings-opt" data-theme="midnight" title="Midnight"><span class="so-preview th-swatch" style="background:#070B14"><span class="dot" style="background:#38BDF8"></span></span><span class="so-label" data-i18n="theme_midnight">منتصف الليل</span></button>'
    + '<button class="settings-opt" data-theme="emerald" title="Emerald"><span class="so-preview th-swatch" style="background:#05100C"><span class="dot" style="background:#10B981"></span></span><span class="so-label" data-i18n="theme_emerald">زمردي</span></button>'
    + '<button class="settings-opt" data-theme="rose" title="Rose"><span class="so-preview th-swatch" style="background:#FDF2F6"><span class="dot" style="background:#E84393"></span></span><span class="so-label" data-i18n="theme_rose">وردي</span></button>'
    + '</div></div>'
    + '<div class="settings-group"><h5 data-i18n="settings_bg">الخلفية</h5><div class="settings-options" id="bgOptions">'
    + '<button class="settings-opt" data-bg="threads"><span class="so-preview so-threads" aria-hidden="true"><svg viewBox="0 0 44 30"><path d="M2 22 C 12 8, 22 26, 42 10" fill="none" stroke="#F9CA24" stroke-width="2.4" stroke-linecap="round" stroke-dasharray="3 4"/></svg></span><span class="so-label" data-i18n="settings_bg_threads">الخيط الذهبي</span></button>'
    + '<button class="settings-opt" data-bg="confetti"><span class="so-preview so-confetti" aria-hidden="true"><span class="pc p1"></span><span class="pc p2"></span><span class="pc p3"></span><span class="pc p4"></span></span><span class="so-label" data-i18n="settings_bg_confetti">القصاصات</span></button>'
    + '<button class="settings-opt" data-bg="bokeh"><span class="so-preview so-bokeh" aria-hidden="true"><span class="bk-p b1"></span><span class="bk-p b2"></span><span class="bk-p b3"></span></span><span class="so-label" data-i18n="settings_bg_bokeh">البوكيه</span></button>'
    + '</div></div>'
    + '<div class="settings-group"><h5 data-i18n="settings_logo">الشعار</h5><div class="settings-options" id="logoOptions">'
    + '<button class="settings-opt" data-logo="ribbons"><span class="so-preview so-logo" data-logo-preview="ribbons"></span><span class="so-label" data-i18n="settings_logo_ribbons">الأشرطة</span></button>'
    + '<button class="settings-opt" data-logo="orbit"><span class="so-preview so-logo" data-logo-preview="orbit"></span><span class="so-label" data-i18n="settings_logo_orbit">المدار</span></button>'
    + '<button class="settings-opt" data-logo="crescent"><span class="so-preview so-logo" data-logo-preview="crescent"></span><span class="so-label" data-i18n="settings_logo_crescent">الهلال</span></button>'
    + '</div></div>'
    + '<div class="settings-group"><h5 data-i18n="settings_anim">الحركات</h5><div class="settings-options" id="animOptions">'
    + '<button class="settings-opt" data-anim="a" title="A · Minimal"><span class="so-preview so-anim so-anim-a"><i></i><i></i><i></i></span><span class="so-label" data-i18n="settings_anim_a">Minimal</span></button>'
    + '<button class="settings-opt" data-anim="b" title="B · Fil d\'or"><span class="so-preview so-anim so-anim-b"><i></i></span><span class="so-label" data-i18n="settings_anim_b">Fil d\'or</span></button>'
    + '<button class="settings-opt" data-anim="c" title="C · Orbite"><span class="so-preview so-anim so-anim-c"><i></i></span><span class="so-label" data-i18n="settings_anim_c">Orbite</span></button>'
    + '</div></div>'
    + '</div></div>'
    + '<div class="settings-backdrop" id="settingsBackdrop"></div>';

  /* ---- MOBILE NAV ---- */
  shell += '<div class="overlay" id="navOverlay"></div>'
    + '<nav class="mobile-nav" id="mobileNav">'
    + '<button class="close-btn" id="closeNav">✕</button>'
    + '<div class="m-profile" id="authMobile">'
    + '<div class="m-avatar" id="mAvatar">م</div>'
    + '<div class="m-meta"><div class="m-name" id="mName" data-i18n="auth_login">تسجيل الدخول</div>'
    + '<div class="m-mail" id="mMail">—</div></div>'
    + '<a class="m-admin" id="mAdmin" href="admin.html" style="display:none">'
    + '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M12 2l7 3v6c0 5-3.5 8.5-7 10-3.5-1.5-7-5-7-10V5z"/><circle cx="12" cy="10" r="2.5"/></svg></a>'
    + '<button class="m-logout" id="mLogout" type="button" style="display:none" aria-label="Déconnexion">'
    + '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M9 21H5a2 2 0 01-2-2V5a2 2 0 012-2h4"/><polyline points="16 17 21 12 16 7"/><line x1="21" y1="12" x2="9" y2="12"/></svg></button>'
    + '</div>'
    + '<div class="m-search">'
    + '<svg class="m-s-icon" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><circle cx="11" cy="11" r="8"/><path d="M21 21l-4.35-4.35"/></svg>'
    + '<input type="text" class="m-search-input" id="mSearchInput" autocomplete="off" data-i18n-placeholder="search_placeholder" placeholder="بحث...">'
    + '<div class="m-search-results" id="mSearchResults"></div>'
    + '</div>'
    + '<div class="m-divider"></div>'
    + '<a href="index.html" data-nav="home" data-i18n="tab_home">الرئيسية</a>'
    + '<a href="mercerie.html" data-nav="mercerie" data-i18n="tab_mercerie">ميمو مرسيري</a>'
    + '<a href="afrah.html" data-nav="rental"><span data-i18n="tab_rental">ميمو أفراح</span><span class="cs-chip" data-i18n="cs_nav">قريبًا</span></a>'
    + '<a href="cake.html" data-nav="patisserie"><span data-i18n="tab_patisserie">ميمو كيك</span><span class="cs-chip" data-i18n="cs_nav">قريبًا</span></a>'
    + '<div class="m-divider"></div>'
    + '<div class="m-actions">'
    + '<div class="m-lang">'
    + '<button class="m-lang-btn" data-mlang="ar" type="button"><span class="lang-flag">AR</span><span>العربية</span></button>'
    + '<button class="m-lang-btn" data-mlang="fr" type="button"><span class="lang-flag">FR</span><span>Français</span></button>'
    + '<button class="m-lang-btn" data-mlang="en" type="button"><span class="lang-flag">EN</span><span>English</span></button>'
    + '</div>'
    + '<div class="m-tools">'
    + '<button class="theme-switch" id="mThemeToggle" type="button" role="switch" aria-checked="false" aria-label="Basculer le thème">'
    + '<span class="tsw-track" aria-hidden="true">'
    + '<svg class="tsw-icon tsw-sun" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><circle cx="12" cy="12" r="4.4"/><path d="M12 2.4v2.2M12 19.4v2.2M2.4 12h2.2M19.4 12h2.2M5.1 5.1l1.55 1.55M17.35 17.35l1.55 1.55M18.9 5.1l-1.55 1.55M6.65 17.35l-1.55 1.55"/></svg>'
    + '<span class="tsw-knob"></span>'
    + '<svg class="tsw-icon tsw-moon" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M21 12.79A9 9 0 1 1 11.21 3a7 7 0 0 0 9.79 9.79z"/></svg>'
    + '</span>'
    + '</button>'
    + '<button class="theme-btn m-settings" id="mSettingsBtn" aria-label="Réglages">'
    + '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><circle cx="12" cy="12" r="3"/><path d="M19.4 15a1.65 1.65 0 00.33 1.82l.06.06a2 2 0 11-2.83 2.83l-.06-.06a1.65 1.65 0 00-1.82-.33 1.65 1.65 0 00-1 1.51V21a2 2 0 11-4 0v-.09a1.65 1.65 0 00-1-1.51 1.65 1.65 0 00-1.82.33l-.06.06a2 2 0 11-2.83-2.83l.06-.06a1.65 1.65 0 00.33-1.82 1.65 1.65 0 00-1.51-1H3a2 2 0 110-4h.09a1.65 1.65 0 001.51-1 1.65 1.65 0 00-.33-1.82l-.06-.06a2 2 0 112.83-2.83l.06.06a1.65 1.65 0 001.82.33h.01a1.65 1.65 0 001-1.51V3a2 2 0 114 0v.09a1.65 1.65 0 001 1.51h.01a1.65 1.65 0 001.82-.33l.06-.06a2 2 0 112.83 2.83l-.06.06a1.65 1.65 0 00-.33 1.82v.01a1.65 1.65 0 001.51 1H21a2 2 0 110 4h-.09a1.65 1.65 0 00-1.51 1z"/></svg>'
    + '</button>'
    + '</div>'
    + '</div>'
    + '</nav>';

  /* ---- SOCIAL PROOF ---- */
  if(hasSP){
    shell += '<div class="social-proof" id="socialProof">'
      + '<div class="sp-avatar" id="spAvatar">🛒</div>'
      + '<div class="sp-info"><div class="sp-name" id="spName">—</div><div class="sp-action" id="spAction">—</div><div class="sp-time" id="spTime">—</div></div>'
      + '<button class="sp-close" onclick="hideSocialProof()">✕</button></div>';
  }

  /* ---- QUICK VIEW ---- */
  if(hasQV){
    shell += '<div class="qv-overlay" id="qvOverlay" onclick="if(event.target===this)closeQuickView()">'
      + '<div class="qv-box" style="position:relative;">'
      + '<button class="qv-close" onclick="closeQuickView()">✕</button>'
      + '<div class="qv-img" id="qvImg"><div class="qv-placeholder">📦</div></div>'
      + '<div class="qv-details">'
      + '<div class="qv-badge badge-hot" id="qvBadge" style="display:none;"></div>'
      + '<h3 id="qvTitle">—</h3><div class="qv-price" id="qvPrice">—</div><div class="qv-desc" id="qvDesc">—</div>'
      + '<div class="qv-stock" id="qvStock"><div class="stock-dot in-stock"></div> <span>متوفر</span></div>'
      + '<div class="qv-actions"><a class="qv-wa-btn" id="qvWaBtn" href="#" target="_blank">'
      + waSvg + '<span data-i18n="order_now">اطلب الآن</span></a></div>'
      + '</div></div></div>';
  }

  /* ---- EXIT INTENT ---- */
  if(hasExit){
    shell += '<div class="exit-popup" id="exitPopup">'
      + '<div class="exit-box">'
      + '<button class="exit-close-x" onclick="closeExitPopup()">✕</button>'
      + '<div class="exit-emoji">🎁</div>'
      + '<h3 data-i18n="exit_title">انتظري! لديكِ عرض خاص</h3>'
      + '<p data-i18n="exit_desc">احصلِ على خصم 10% على طلبكِ الأول! استخدمي كود <strong>WELCOME10</strong></p>'
      + '<div class="exit-offer"><div class="offer-text" data-i18n="exit_offer">✨ كود WELCOME10 — صالح لمدة 24 ساعة</div></div>'
      + '<div class="exit-actions">'
      + '<a class="exit-wa" href="https://wa.me/213558253614?text=%D9%85%D8%B1%D8%AD%D8%A8%D8%A7%D9%8B!%20%D8%A3%D8%B1%D9%8A%D8%AF%20%D8%A7%D8%B3%D8%AA%D8%AE%D8%AF%D8%A7%D9%85%20%D9%83%D9%88%D8%AF%20WELCOME10%20%D9%84%D9%84%D8%AE%D8%B5%D9%85" target="_blank" data-i18n="exit_btn">استخدم العرض الآن</a>'
      + '<button class="exit-close" onclick="closeExitPopup()" data-i18n="exit_later">لاحقًا</button>'
      + '</div></div></div>';
  }

  /* ---- STICKY CTA ---- */
  if(hasCTA){
    shell += '<div class="sticky-cta" id="stickyCta">'
      + '<div class="cta-info"><div class="cta-title" id="ctaTitle">ميمو مرسيري</div><div class="cta-sub" id="ctaSub">اطلب الآن عبر واتساب</div></div>'
      + '<a class="cta-wa" id="ctaWa" href="https://wa.me/213558253614" target="_blank">' + waSvg + ' WhatsApp</a>'
      + '</div>';
  }

  /* ---- CHATBOT ---- */
  if(hasChat){
    shell += '<div class="chatbot-fab" id="chatbotFab" role="button" aria-label="AI Assistant" tabindex="0">'
      + '<div class="pulse"></div><span class="chatbot-fab-icon">🤖</span><span class="chatbot-fab-close">✕</span></div>'
      + '<div class="chatbot-window" id="chatbotWindow">'
      + '<div class="chatbot-head"><div class="chatbot-head-left"><span class="chatbot-head-avatar">🤖</span>'
      + '<div><h4 data-i18n="chat_title">مساعد ميمو</h4><span data-i18n="chat_sub">متصل الآن</span></div></div>'
      + '<button class="chatbot-head-close" id="chatbotClose">✕</button></div>'
      + '<div class="chatbot-body" id="chatbotBody"><div class="chatbot-typing" id="chatbotTyping"><span></span><span></span><span></span></div></div>'
      + '<div class="chatbot-quickreplies" id="chatbotQuickReplies"></div>'
      + '<div class="chatbot-foot">'
      + '<input type="text" id="chatbotInput" data-i18n-placeholder="chat_placeholder" placeholder="اكتبي سؤالك..." autocomplete="off">'
      + '<button id="chatbotSend" aria-label="Send"><svg viewBox="0 0 24 24"><path d="M2.01 21L23 12 2.01 3 2 10l15 2-15 2z"/></svg></button>'
      + '</div></div>';
  }

  /* ---- BACK TO TOP / WHATSAPP / FOOTER ---- */
  shell += '<div class="back-top" id="backTop" onclick="window.scrollTo({top:0,behavior:\'smooth\'})" aria-label="Back to top">'
    + '<div class="back-top-ring"></div><svg viewBox="0 0 24 24"><line x1="12" y1="19" x2="12" y2="5"/><polyline points="5 12 12 5 19 12"/></svg></div>'
    + '<a href="https://wa.me/213558253614" target="_blank" class="float-wa" id="floatWa" aria-label="WhatsApp">' + waSvg + '</a>'
    + '<footer class="site-footer" id="siteFooter">'
    + '<div class="footer-logo" style="cursor:pointer" onclick="location.reload()">'
    + '<div class="logo-icon app-logo" aria-hidden="true">'+logoMarkup('fR')+'</div>'
    + '<span data-i18n="footer_brand">ميمو منصتي</span></div>'
    + '<p class="footer-copy" data-i18n="footer_note">© 2026 ميمو منصتي — جميع الحقوق محفوظة</p></footer>';

  document.getElementById('siteShell').innerHTML = shell;

  /* Le footer est le seul élément "en flux" du shell : on le déplace
     à la fin du body pour qu'il s'affiche en bas de page (et ne pousse
     pas le contenu sous la topbar fixe). */
  const siteFooter=document.getElementById('siteFooter');
  if(siteFooter) document.body.appendChild(siteFooter);

  /* ======================================================
     THEME
     ====================================================== */
  const THEMES=['dark','light','midnight','emerald','rose'];
  const LIGHT_THEMES=['light','rose'];
  function setTheme(m){
    if(THEMES.indexOf(m)<0) m='dark';
    html.setAttribute('data-theme',m);
    const isLight=LIGHT_THEMES.indexOf(m)>=0;
    const sw=document.getElementById('themeToggle');
    if(sw){
      sw.setAttribute('aria-checked',isLight?'true':'false');
      const L=T.theme_toggle; if(L) sw.setAttribute('aria-label',L[currentLang]);
    }
    const msw=document.getElementById('mThemeToggle');
    if(msw){
      msw.setAttribute('aria-checked',isLight?'true':'false');
      const L=T.theme_toggle; if(L) msw.setAttribute('aria-label',L[currentLang]);
    }
    document.querySelectorAll('#themeOptions .settings-opt').forEach(b=>b.classList.toggle('active',b.dataset.theme===m));
    try{localStorage.setItem('mm_theme',m);}catch(e){}
  }
  let savedTheme='light'; try{ savedTheme=localStorage.getItem('mm_theme')||'light'; }catch(e){}
  setTheme(savedTheme);
  document.getElementById('themeToggle').addEventListener('click',()=>{
    const isLight=LIGHT_THEMES.indexOf(html.getAttribute('data-theme'))>=0;
    setTheme(isLight?'dark':'light');
  });
  document.querySelectorAll('#themeOptions .settings-opt').forEach(b=>b.addEventListener('click',()=>setTheme(b.dataset.theme)));

  /* ======================================================
     LOGOS / BACKGROUNDS / ANIMATIONS
     ====================================================== */
  const LOGOS={
    ribbons:{inner:'<defs><linearGradient id="logoR1" x1="0%" y1="100%" x2="100%" y2="0%"><stop offset="0%" stop-color="#6C5CE7"/><stop offset="100%" stop-color="#A29BFE"/></linearGradient><linearGradient id="logoR2" x1="0%" y1="0%" x2="100%" y2="100%"><stop offset="0%" stop-color="#F9CA24"/><stop offset="100%" stop-color="#E8B000"/></linearGradient><linearGradient id="logoR3" x1="100%" y1="100%" x2="0%" y2="0%"><stop offset="0%" stop-color="#A29BFE"/><stop offset="100%" stop-color="#6C5CE7"/></linearGradient></defs><g fill="none" stroke-linecap="round"><path d="M25 84 C 25 58, 29 40, 34 20" stroke="url(#logoR1)" stroke-width="8"/><path d="M66 20 C 71 40, 75 58, 75 84" stroke="url(#logoR3)" stroke-width="8"/><path d="M34 20 C 42 32, 47 46, 50 52 C 53 46, 58 32, 66 20" stroke="url(#logoR2)" stroke-width="8"/></g>'},
    orbit:{inner:'<defs><linearGradient id="loG1" x1="0%" y1="0%" x2="100%" y2="100%"><stop offset="0%" stop-color="#F9CA24"/><stop offset="100%" stop-color="#E8B000"/></linearGradient><linearGradient id="loG2" x1="0%" y1="0%" x2="100%" y2="100%"><stop offset="0%" stop-color="#6C5CE7"/><stop offset="100%" stop-color="#A29BFE"/></linearGradient></defs><circle cx="50" cy="50" r="25" fill="none" stroke="url(#loG1)" stroke-width="8"/><ellipse cx="50" cy="50" rx="41" ry="15" fill="none" stroke="url(#loG2)" stroke-width="3.5" transform="rotate(-22 50 50)" opacity=".85"/><circle cx="84" cy="34" r="5" fill="#F9CA24"/><circle cx="24" cy="72" r="4" fill="#A29BFE"/><circle cx="50" cy="50" r="6" fill="#6C5CE7"/>'},
    crescent:{inner:'<defs><linearGradient id="lcG1" x1="0%" y1="0%" x2="100%" y2="100%"><stop offset="0%" stop-color="#F9CA24"/><stop offset="100%" stop-color="#E8B000"/></linearGradient><linearGradient id="lcG2" x1="0%" y1="0%" x2="100%" y2="100%"><stop offset="0%" stop-color="#A29BFE"/><stop offset="100%" stop-color="#6C5CE7"/></linearGradient></defs><g transform="scale(0.1953125)"><path d="M283.211 512c78.962 0 151.079-35.925 198.857-94.792 7.068-8.708-.639-21.43-11.562-19.35-124.203 23.654-238.262-71.576-238.262-196.954 0-72.222 38.662-138.635 101.498-174.394 9.686-5.512 7.25-20.197-3.756-22.23A258.312 258.312 0 0 0 283.211 0c-141.309 0-256 114.511-256 256s114.691 256 256 256z" fill="url(#lcG1)"/></g><path d="M65 26 L66.76 32.24 L73 34 L66.76 35.76 L65 42 L63.24 35.76 L57 34 L63.24 32.24 Z" fill="url(#lcG2)"/>'}
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
    document.querySelectorAll('.orbit-center').forEach(el=>{ el.innerHTML=svg; });
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

  /* ---- Settings panel ---- */
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

  initConfetti(); initBokeh();
  let savedBg='threads', savedLogo='ribbons', savedAnim='a';
  try{ savedBg=localStorage.getItem('mm_bg')||'threads'; savedLogo=localStorage.getItem('mm_logo')||'ribbons'; savedAnim=localStorage.getItem('mm_anim')||'a'; }catch(e){}
  applyBg(savedBg); applyLogo(savedLogo); applyAnim(savedAnim);

  /* ---- Language switcher ---- */
  const langSwitcher=document.getElementById('langSwitcher'),
        langBtn=document.getElementById('langBtn'),
        langDropdown=document.getElementById('langDropdown');
  langBtn.addEventListener('click',e=>{e.stopPropagation();const open=langSwitcher.classList.toggle('open');langBtn.setAttribute('aria-expanded',open?'true':'false');});
  document.addEventListener('click',()=>{langSwitcher.classList.remove('open');langBtn.setAttribute('aria-expanded','false');});
  langDropdown.addEventListener('click',e=>{
    const opt=e.target.closest('.lang-option'); if(!opt) return;
    applyLanguage(opt.dataset.lang);
    langSwitcher.classList.remove('open');
    langBtn.setAttribute('aria-expanded','false');
  });

  /* ---- Nav active state ---- */
  document.querySelectorAll('[data-nav]').forEach(a=>a.classList.toggle('active',a.dataset.nav===PAGE));

  /* ---- Mobile nav ---- */
  const burgerBtn=document.getElementById('burgerBtn'),
        mobileNav=document.getElementById('mobileNav'),
        navOverlay=document.getElementById('navOverlay'),
        closeNavBtn=document.getElementById('closeNav');
  function openMenu(){mobileNav.classList.add('open');navOverlay.classList.add('open');}
  function closeMenu(){mobileNav.classList.remove('open');navOverlay.classList.remove('open');}
  burgerBtn.addEventListener('click',openMenu);
  closeNavBtn.addEventListener('click',closeMenu);
  navOverlay.addEventListener('click',closeMenu);
  window.closeMenu=closeMenu;

  /* ---- Drawer : outils (thème, langue, réglages) ---- */
  const mTheme=document.getElementById('mThemeToggle');
  if(mTheme) mTheme.addEventListener('click',()=>{
    const isLight=LIGHT_THEMES.indexOf(html.getAttribute('data-theme'))>=0;
    setTheme(isLight?'dark':'light');
  });
  const mSettingsBtn=document.getElementById('mSettingsBtn');
  if(mSettingsBtn) mSettingsBtn.addEventListener('click',e=>{e.stopPropagation();closeMenu();openSettings();});
  document.querySelectorAll('.m-lang-btn').forEach(b=>b.addEventListener('click',()=>{
    applyLanguage(b.dataset.mlang); closeMenu();
  }));

  /* ---- Search ---- */
  function initSearch(){
    const wrap=document.getElementById('searchWrap');
    const panel=document.getElementById('searchPanel');
    const trigger=document.getElementById('searchTrigger');
    const clear=document.getElementById('searchClear');
    const input=document.getElementById('searchInput');
    const results=document.getElementById('searchResults');
    if(!input||!results) return;
    function open(){
      wrap.classList.add('open'); panel.classList.add('open'); trigger.classList.add('active');
      document.body.classList.add('search-open');
      setTimeout(()=>input.focus(),150);
    }
    function close(){
      wrap.classList.remove('open'); panel.classList.remove('open'); trigger.classList.remove('active');
      document.body.classList.remove('search-open');
      results.classList.remove('open');
      input.blur();
    }
    trigger.addEventListener('click',e=>{e.stopPropagation(); wrap.classList.contains('open')?close():open();});
    clear.addEventListener('click',close);
    document.addEventListener('click',e=>{ if(wrap.classList.contains('open')&&!wrap.contains(e.target)) close(); });
    document.addEventListener('keydown',e=>{ if(e.key==='Escape'&&wrap.classList.contains('open')) close(); });
    input.addEventListener('input',()=>runSearch(input.value));
    input.addEventListener('focus',()=>{ if(input.value.trim().length>=2) runSearch(input.value); });
  }
  window.searchCatalog=function(q){
    const query=q.trim().toLowerCase();
    const matches=[];
    if(query.length<2) return matches;
    Object.values(BIZ).forEach(b=>{
      (allData[b.id].products||[]).forEach(p=>{
        const t=(p.title||'').toLowerCase(); const pr=(p.price||'').toLowerCase();
        if(t.includes(query)||pr.includes(query)) matches.push({type:'product',biz:b,item:p});
      });
      (allData[b.id].articles||[]).forEach(a=>{
        const t=(a.title||'').toLowerCase();
        if(t.includes(query)) matches.push({type:'article',biz:b,item:a});
      });
    });
    return matches;
  };
  window.runSearch=function(q){
    const input=document.getElementById('searchInput'), results=document.getElementById('searchResults');
    if(!input||!results) return;
    const matches=searchCatalog(q);
    if(q.trim().length<2){ results.classList.remove('open'); return; }
    if(!matches.length){ results.innerHTML='<div class="search-empty">'+(currentLang==='ar'?'لا توجد نتائج':currentLang==='fr'?'Aucun résultat':'No results')+'</div>'; }
    else{
      results.innerHTML=matches.slice(0,8).map(m=>'<div class="search-result-item" onclick="goToResult(\''+m.biz.id+'\')">'
        +'<span class="sr-emoji">'+m.biz.emoji+'</span>'
        +'<div class="sr-info"><div class="sr-title">'+m.item.title+'</div><div class="sr-biz">'+m.biz.name[currentLang]+'</div></div>'
        +(m.item.price?'<span class="sr-price">'+m.item.price+'</span>':'')
        +'</div>').join('');
    }
    results.classList.add('open');
  };
  window.goToResult=function(bizId){ location.href=bizPage(bizId); };

  /* ---- Drawer : recherche ---- */
  const mSearchInput=document.getElementById('mSearchInput'),
        mSearchResults=document.getElementById('mSearchResults');
  if(mSearchInput&&mSearchResults){
    mSearchInput.addEventListener('input',()=>{
      const matches=searchCatalog(mSearchInput.value);
      if(!matches.length){ mSearchResults.classList.remove('open'); mSearchResults.innerHTML=''; return; }
      mSearchResults.innerHTML=matches.slice(0,6).map(m=>'<button class="ms-item" type="button" data-biz="'+m.biz.id+'">'
        +'<span class="sr-emoji">'+m.biz.emoji+'</span>'
        +'<span class="ms-title">'+m.item.title+'</span>'
        +(m.item.price?'<span class="ms-price">'+m.item.price+'</span>':'')
        +'</button>').join('');
      mSearchResults.classList.add('open');
    });
    mSearchResults.addEventListener('click',e=>{
      const it=e.target.closest('.ms-item'); if(!it) return;
      location.href=bizPage(it.dataset.biz);
    });
  }

  /* ---- Reveal ---- */
  window.initReveal=function(){
    const els=document.querySelectorAll('.reveal:not(.visible)');
    if(!('IntersectionObserver' in window)){ els.forEach(el=>el.classList.add('visible')); return; }
    els.forEach(el=>{
      const r=el.getBoundingClientRect();
      if(r.top<window.innerHeight&&r.bottom>0){ el.classList.add('visible'); return; }
      const io=new IntersectionObserver(es=>{es.forEach(e=>{if(e.isIntersecting){e.target.classList.add('visible');io.unobserve(e.target);}});},{threshold:.12});
      io.observe(el);
    });
  };

  /* ---- Back to top ---- */
  const backTopEl=document.getElementById('backTop');
  window.addEventListener('scroll',()=>{backTopEl.classList.toggle('visible',window.scrollY>400);},{passive:true});

  /* ---- Social proof ---- */
  const SP_NAMES_AR=['سارة','فاطمة','ليلى','نور','آية','مريم','خديجة','هدى','سلمى','ياسمين'];
  const SP_NAMES_FR=['Sarah','Fatima','Leila','Nour','Aya','Meriem','Khadija','Houda','Salma','Yasmine'];
  const SP_CITIES=['بومرداس','الجزائر','تيزي وزو','بجاية','البويرة'];
  const SP_PRODUCTS={
    mercerie:['خيط كوتون أزرق','إبر خياطة','أزرار لؤلؤ','شريط مطاطي','خيط كركم'],
    rental:['جهاز كوافير','طاولة طعام فخمة','كرسي عريس','ستارة ورد','إضاءة حفلات'],
    patisserie:['كيكة شوكولاتة','ماكرون فراولة','تارت فواكه','كيكة زفاف','كوكيز بالشوكولاتة']
  };
  let spTimer=null;
  window.showSocialProof=function(){
    const el=document.getElementById('socialProof'); if(!el) return;
    const isAr=currentLang==='ar';
    const bizKeys=Object.keys(SP_PRODUCTS);
    const bizKey=bizKeys[Math.floor(Math.random()*bizKeys.length)];
    const b=BIZ[bizKey];
    const prodList=SP_PRODUCTS[bizKey];
    const prod=prodList[Math.floor(Math.random()*prodList.length)];
    const name=isAr?SP_NAMES_AR[Math.floor(Math.random()*SP_NAMES_AR.length)]:SP_NAMES_FR[Math.floor(Math.random()*SP_NAMES_FR.length)];
    const city=SP_CITIES[Math.floor(Math.random()*SP_CITIES.length)];
    const ago=Math.floor(Math.random()*15)+1;
    const timeText=isAr?('منذ '+ago+' دقائق'):currentLang==='fr'?('il y a '+ago+' min'):(ago+' min ago');
    document.getElementById('spAvatar').textContent=b.emoji;
    document.getElementById('spName').textContent=name+(isAr?' من '+city:' ('+city+')');
    document.getElementById('spAction').textContent=(isAr?'اشترت للتو':currentLang==='fr'?'a acheté':'bought')+' — '+prod;
    document.getElementById('spTime').textContent=timeText;
    el.classList.add('show');
    clearTimeout(spTimer);
    spTimer=setTimeout(()=>el.classList.remove('show'),5000);
  };
  window.hideSocialProof=function(){const el=document.getElementById('socialProof'); if(el) el.classList.remove('show'); clearTimeout(spTimer);};
  if(document.getElementById('socialProof')){
    setTimeout(()=>showSocialProof(),8000);
    setInterval(()=>showSocialProof(),25000);
  }

  /* ---- Boot ---- */
  applyLanguage(currentLang);
  initSearch();
  initReveal();
  initAuthUI();
  initAnalytics();
})();
