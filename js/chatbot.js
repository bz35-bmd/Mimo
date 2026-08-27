/* ======================================================
   AI ASSISTANT — FAQ CHATBOT
   ====================================================== */
const FAQ_DATA = {
  mercerie: {
    ar: {
      title: 'ميمو ديكور',
      desc: 'متجر ديكور المناسبات في يسر بومرداس: نُقران، ميروارات، حوامل وعرض.',
      products: 'نقدم نُقران، ميروارات، حوامل للحلويات والهدايا، وديكور مناسبات كامل.',
      prices: 'الأسعار تبدأ من <span class="ltr-num">300</span> دج. اطلبي عبر واتساب لمعرفة التفاصيل.',
      hours: 'نعمل يوميًا من <span class="ltr-num">9:00</span> صباحًا إلى <span class="ltr-num">6:00</span> مساءً.',
      location: 'يسر، ولاية بومرداس.',
      contact: 'واتساب: <span class="ltr-num">0558253614</span>'
    },
    fr: {
      title: 'M Déco',
      desc: 'Boutique de décoration d\'événements à Isser, Boumerdès : nappes, plateaux miroirs, présentoirs.',
      products: 'Nous proposons des nappes, des plateaux miroirs, des présentoirs à gâteaux et cadeaux, et de la décoration de fête.',
      prices: 'Les prix commencent à 300 DA. Commandez via WhatsApp pour les détails.',
      hours: 'Ouvert tous les jours de 9h à 18h.',
      location: 'Isser, Wilaya de Boumerdès.',
      contact: 'WhatsApp: <span class="ltr-num">0558253614</span>'
    },
    en: {
      title: 'M Deco',
      desc: 'Event decor shop in Isser, Boumerdès: tablecloths, mirror trays, stands.',
      products: 'We offer tablecloths, mirror trays, stands for sweets and gifts, and full event decor.',
      prices: 'Prices start from 300 DA. Order via WhatsApp for details.',
      hours: 'Open daily from 9am to 6pm.',
      location: 'Isser, Boumerdès Province.',
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

(function(){
  const fab=document.getElementById('chatbotFab');
  if(!fab) return;

  let chatbotOpen=false;
  const $chat={
    fab:fab,
    win:document.getElementById('chatbotWindow'),
    body:document.getElementById('chatbotBody'),
    input:document.getElementById('chatbotInput'),
    send:document.getElementById('chatbotSend'),
    close:document.getElementById('chatbotClose'),
    typing:document.getElementById('chatbotTyping'),
    pills:document.getElementById('chatbotQuickReplies')
  };

  $chat.fab.addEventListener('click',toggleChatbot);
  $chat.send.addEventListener('click',sendUserMsg);
  $chat.close.addEventListener('click',()=>{chatbotOpen=false;$chat.fab.classList.remove('open');$chat.win.classList.remove('open');});
  $chat.input.addEventListener('keydown',e=>{if(e.key==='Enter')sendUserMsg();});

  function toggleChatbot(){
    chatbotOpen=!chatbotOpen;
    $chat.fab.classList.toggle('open',chatbotOpen);
    $chat.win.classList.toggle('open',chatbotOpen);
    if(chatbotOpen&&$chat.body.querySelectorAll('.chatbot-msg').length===0){
      const greeting={
        ar:'مرحبًا! أنا مساعد ميمو 🤖 كيف يمكنني مساعدتك اليوم؟',
        fr:'Bonjour ! Je suis l\'assistant M 🤖 Comment puis-je vous aider ?',
        en:'Hello! I\'m the M assistant 🤖 How can I help you today?'
      };
      typeThenReply(greeting[currentLang],[
        {label:'🎀 '+T.chat_btn_mercerie[currentLang],action:()=>showBiz('mercerie')},
        {label:'💒 '+T.chat_btn_rental[currentLang],action:()=>showBiz('rental')},
        {label:'🎂 '+T.chat_btn_patisserie[currentLang],action:()=>showBiz('patisserie')},
        {label:'💰 '+T.chat_btn_prices[currentLang],action:()=>showTopic('prices')},
        {label:'🕐 '+T.chat_btn_hours[currentLang],action:()=>showTopic('hours')},
        {label:'📞 '+T.chat_btn_contact[currentLang],action:()=>showTopic('contact')}
      ]);
    }
    if(chatbotOpen) setTimeout(()=>$chat.input.focus(),350);
  }

  function appendMsg(html,isUser){
    const el=document.createElement('div');
    el.className='chatbot-msg '+(isUser?'user':'bot');
    el.innerHTML=html;
    $chat.body.insertBefore(el,$chat.typing);
    $chat.body.scrollTop=$chat.body.scrollHeight;
  }
  function showTyping(){$chat.typing.classList.add('show');$chat.body.scrollTop=$chat.body.scrollHeight;}
  function hideTyping(){$chat.typing.classList.remove('show');}
  function typeThenReply(html,quickReplies){
    showTyping();
    $chat.pills.innerHTML='';
    setTimeout(()=>{
      hideTyping();
      appendMsg(html);
      if(quickReplies&&quickReplies.length) showPills(quickReplies);
    },600+Math.random()*400);
  }
  function showPills(items){
    $chat.pills.innerHTML='';
    items.forEach(item=>{
      const btn=document.createElement('button');
      btn.className='chatbot-pill';
      btn.textContent=item.label;
      btn.onclick=()=>{appendMsg(item.label,true);item.action();};
      $chat.pills.appendChild(btn);
    });
  }
  function showBiz(biz){
    const d=FAQ_DATA[biz][currentLang];
    typeThenReply(
      '<strong>'+d.title+'</strong><br>'+d.desc+'<br><br>'+
      '🛍️ '+d.products+'<br>💰 '+d.prices+'<br>🕐 '+d.hours+'<br>📍 '+d.location+'<br>📞 '+d.contact,
      [
        {label:'💰 '+T.chat_btn_prices[currentLang],action:()=>showTopic('prices')},
        {label:'📞 '+T.chat_btn_contact[currentLang],action:()=>showTopic('contact')},
        {label:currentLang==='ar'?'← رجوع':currentLang==='fr'?'← Retour':'← Back',action:goHome}
      ]
    );
  }
  function showTopic(topic){
    const msgs={
      prices:{
        ar:'💰 <strong>الأسعار:</strong><br><br>🎀 ميمو ديكور: يبدأ من <span class="ltr-num">300</span> دج<br>💒 ميمو أفراح: حسب الكمية والنوع<br>🎂 ميمو كيك: يبدأ من <span class="ltr-num">2,000</span> دج<br><br>💬 للحصول على عرض سعر مجاني، تواصل معنا عبر واتساب!',
        fr:'💰 <strong>Prix:</strong><br><br>🎀 M Déco: à partir de 300 DA<br>💒 M Afrah: selon la quantité<br>🎂 M Cake: à partir de 2000 DA<br><br>💬 Pour un devis gratuit, contactez-nous via WhatsApp !',
        en:'💰 <strong>Prices:</strong><br><br>🎀 M Deco: from 300 DA<br>💒 M Afrah: depending on quantity<br>🎂 M Cake: from 2000 DA<br><br>💬 For a free quote, reach us via WhatsApp!'
      },
      hours:{
        ar:'🕐 <strong>ساعات العمل:</strong><br><br>🎀 ميمو ديكور: <span class="ltr-num">9:00</span> صباحًا — <span class="ltr-num">6:00</span> مساءً<br>💒 ميمو أفراح: متاحون يوميًا للحجز<br>🎂 ميمو كيك: <span class="ltr-num">10:00</span> صباحًا — <span class="ltr-num">8:00</span> مساءً',
        fr:'🕐 <strong>Horaires:</strong><br><br>🎀 M Déco: 9h — 18h<br>💒 M Afrah: disponible tous les jours<br>🎂 M Cake: 10h — 20h',
        en:'🕐 <strong>Hours:</strong><br><br>🎀 M Deco: 9am — 6pm<br>💒 M Afrah: available daily<br>🎂 M Cake: 10am — 8pm'
      },
      contact:{
        ar:'📞 <strong>تواصل معنا:</strong><br><br>📱 واتساب: <a href="https://wa.me/213558253614" target="_blank"><span class="ltr-num">0558253614</span></a><br>📍 بومرداس، الجزائر<br><br>💬 جميع المشاريع الثلاثة في خدمةك!',
        fr:'📞 <strong>Contactez-nous:</strong><br><br>📱 WhatsApp: <a href="https://wa.me/213558253614" target="_blank"><span class="ltr-num">0558253614</span></a><br>📍 Boumerdès, Algérie<br><br>💬 Toutes nos entreprises sont à votre service !',
        en:'📞 <strong>Contact Us:</strong><br><br>📱 WhatsApp: <a href="https://wa.me/213558253614" target="_blank"><span class="ltr-num">0558253614</span></a><br>📍 Boumerdès, Algeria<br><br>💬 All three businesses at your service!'
      },
      location:{
        ar:'📍 <strong>الموقع:</strong><br><br>🏢 نقع في يسر، ولاية بومرداس، الجزائر.<br>🚗 خدمة التوصيل والتركيب متاحة في بومرداس والجزائر العاصمة.',
        fr:'📍 <strong>Localisation:</strong><br><br>🏢 Nous sommes à Isser, Wilaya de Boumerdès, Algérie.<br>🚗 Livraison et montage disponibles à Boumerdès et Alger.',
        en:'📍 <strong>Location:</strong><br><br>🏢 We are in Isser, Boumerdès Province, Algeria.<br>🚗 Delivery & setup available in Boumerdès and Algiers.'
      }
    };
    typeThenReply(msgs[topic][currentLang],[
      {label:'🎀 '+T.chat_btn_mercerie[currentLang],action:()=>showBiz('mercerie')},
      {label:'💒 '+T.chat_btn_rental[currentLang],action:()=>showBiz('rental')},
      {label:'🎂 '+T.chat_btn_patisserie[currentLang],action:()=>showBiz('patisserie')},
      {label:currentLang==='ar'?'← رجوع':currentLang==='fr'?'← Retour':'← Back',action:goHome}
    ]);
  }
  function goHome(){
    const greeting={
      ar:'كيف يمكنني مساعدتك؟',
      fr:'Comment puis-je vous aider ?',
      en:'How can I help you?'
    };
    typeThenReply(greeting[currentLang],[
      {label:'🎀 '+T.chat_btn_mercerie[currentLang],action:()=>showBiz('mercerie')},
      {label:'💒 '+T.chat_btn_rental[currentLang],action:()=>showBiz('rental')},
      {label:'🎂 '+T.chat_btn_patisserie[currentLang],action:()=>showBiz('patisserie')},
      {label:'💰 '+T.chat_btn_prices[currentLang],action:()=>showTopic('prices')},
      {label:'🕐 '+T.chat_btn_hours[currentLang],action:()=>showTopic('hours')},
      {label:'📞 '+T.chat_btn_contact[currentLang],action:()=>showTopic('contact')}
    ]);
  }
  function sendUserMsg(){
    const text=$chat.input.value.trim();
    if(!text) return;
    appendMsg(text,true);
    $chat.input.value='';
    $chat.pills.innerHTML='';
    const lower=text.toLowerCase();
    const arMercerie=['ديكور','نقران','نُقران','ميروار','ميروارات','حوامل','زينة','تزيين','كريستال','خدمة'];
    const arRental=['أفراح','أعراس','زفاف','حفلات','طاولات','كراسي','إضاءة','خيام','كنب','مسارح','بيت صور'];
    const arCake=['كيك','كعكة','كب كيك','شوكولاتة','ميلاد','فراولة','تارت','ميني كيك'];
    const frMercerie=['deco','nappe','plateau','miroir','présentoir','décor','décoration'];
    const frRental=['afrah','location','mariage','table','chaise','tente','estrade','éclairage','paravent'];
    const frCake=['cake','gâteau','cupcake','chocolat','anniversaire','fraise','tarte','pâtisserie'];
    const enMercerie=['deco','tablecloth','mirror','tray','stand','decor','decoration'];
    const enRental=['rental','afrah','wedding','table','chair','decor','tent','stage','lighting','backdrop'];
    const enCake=['cake','cupcake','chocolate','birthday','strawberry','tart','pastry','patisserie'];
    const greetings=['مرحبا','السلام عليكم','سلام','هاي','هلو','bonjour','salut','hello','hi','hey','bonsoir'];
    const thanks=['شكرا','ممنون','merci','thanks','thank you','gré'];

    if(greetings.some(k=>lower.includes(k))){
      const msgs={
        ar:'مرحبًا بكم في ميمو! 👋 كيف يمكنني مساعدتك؟ اختر أحد الخيارات أدناه:',
        fr:'Bienvenue chez M ! 👋 Comment puis-je vous aider ? Choisissez une option :',
        en:'Welcome to M! 👋 How can I help you? Choose an option:'
      };
      typeThenReply(msgs[currentLang],[
        {label:'🎀 '+T.chat_btn_mercerie[currentLang],action:()=>showBiz('mercerie')},
        {label:'💒 '+T.chat_btn_rental[currentLang],action:()=>showBiz('rental')},
        {label:'🎂 '+T.chat_btn_patisserie[currentLang],action:()=>showBiz('patisserie')}
      ]);
    }else if(thanks.some(k=>lower.includes(k))){
      const msgs={
        ar:'على الرحب والسعة! 😊 هل تحتاج مساعدة إضافية؟',
        fr:'Avec plaisir ! 😊 Avez-vous besoin d\'autre chose ?',
        en:'You\'re welcome! 😊 Need anything else?'
      };
      typeThenReply(msgs[currentLang],[
        {label:'💰 '+T.chat_btn_prices[currentLang],action:()=>showTopic('prices')},
        {label:'📞 '+T.chat_btn_contact[currentLang],action:()=>showTopic('contact')}
      ]);
    }else if(arMercerie.some(k=>lower.includes(k))||frMercerie.some(k=>lower.includes(k))||enMercerie.some(k=>lower.includes(k))){
      showBiz('mercerie');
    }else if(arRental.some(k=>lower.includes(k))||frRental.some(k=>lower.includes(k))||enRental.some(k=>lower.includes(k))){
      showBiz('rental');
    }else if(arCake.some(k=>lower.includes(k))||frCake.some(k=>lower.includes(k))||enCake.some(k=>lower.includes(k))){
      showBiz('patisserie');
    }else if(lower.match(/سعر|prix|price|كم|combien|cost|أرخص|gros|moins/)){
      showTopic('prices');
    }else if(lower.match(/ساع|heure|hour|وقت|temps|open|ouvert|mfto7|مفتوح|fermé|fermeture|clôture/)){
      showTopic('hours');
    }else if(lower.match(/هاتف|tel|phone|تواصل|contact|wa|واتساب|whatsapp|numéro|رقم/)){
      showTopic('contact');
    }else if(lower.match(/مكان| lieu|location|address|adresse|وين|فين|أين|بومرداس|boumerd|alger|dairah/)){
      showTopic('location');
    }else{
      askAI(text);
    }
  }

  /* ---------- Assistant IA (Google Gemini via Edge Function) ---------- */
  let aiSeq=0;
  function showFallback(text){
    const lower=text.toLowerCase();
    const arMercerie=['ديكور','نقران','نُقران','ميروار','ميروارات','حوامل','زينة','تزيين','كريستال','خدمة'];
    const arRental=['أفراح','أعراس','زفاف','حفلات','طاولات','كراسي','إضاءة','خيام','كنب','مسارح','بيت صور'];
    const arCake=['كيك','كعكة','كب كيك','شوكولاتة','ميلاد','فراولة','تارت','ميني كيك'];
    const frMercerie=['deco','nappe','plateau','miroir','présentoir','décor','décoration'];
    const frRental=['afrah','location','mariage','table','chaise','tente','estrade','éclairage','paravent'];
    const frCake=['cake','gâteau','cupcake','chocolat','anniversaire','fraise','tarte','pâtisserie'];
    const enMercerie=['deco','tablecloth','mirror','tray','stand','decor','decoration'];
    const enRental=['rental','afrah','wedding','table','chair','decor','tent','stage','lighting','backdrop'];
    const enCake=['cake','cupcake','chocolate','birthday','strawberry','tart','pastry','patisserie'];
    const greetings=['مرحبا','السلام عليكم','سلام','هاي','هلو','bonjour','salut','hello','hi','hey','bonsoir'];
    const thanks=['شكرا','ممنون','merci','thanks','thank you','gré'];
    if(greetings.some(k=>lower.includes(k))){
      const msgs={ar:'مرحبًا بكم في ميمو! 👋',fr:'Bienvenue chez M ! 👋',en:'Welcome to M! 👋'};
      typeThenReply(msgs[currentLang],[{label:'🎀 '+T.chat_btn_mercerie[currentLang],action:()=>showBiz('mercerie')},{label:'💒 '+T.chat_btn_rental[currentLang],action:()=>showBiz('rental')},{label:'🎂 '+T.chat_btn_patisserie[currentLang],action:()=>showBiz('patisserie')}]);
    }else if(thanks.some(k=>lower.includes(k))){
      const msgs={ar:'على الرحب والسعة! 😊',fr:'Avec plaisir ! 😊',en:'You\'re welcome! 😊'};
      typeThenReply(msgs[currentLang],[{label:'💰 '+T.chat_btn_prices[currentLang],action:()=>showTopic('prices')},{label:'📞 '+T.chat_btn_contact[currentLang],action:()=>showTopic('contact')}]);
    }else if(arMercerie.some(k=>lower.includes(k))||frMercerie.some(k=>lower.includes(k))||enMercerie.some(k=>lower.includes(k))){ showBiz('mercerie');
    }else if(arRental.some(k=>lower.includes(k))||frRental.some(k=>lower.includes(k))||enRental.some(k=>lower.includes(k))){ showBiz('rental');
    }else if(arCake.some(k=>lower.includes(k))||frCake.some(k=>lower.includes(k))||enCake.some(k=>lower.includes(k))){ showBiz('patisserie');
    }else if(lower.match(/سعر|prix|price|كم|combien|cost|أرخص|gros|moins/)){ showTopic('prices');
    }else if(lower.match(/ساع|heure|hour|وقت|temps|open|ouvert|mfto7|مفتوح|fermé|fermeture|clôture/)){ showTopic('hours');
    }else if(lower.match(/هاتف|tel|phone|تواصل|contact|wa|واتساب|whatsapp|numéro|رقم/)){ showTopic('contact');
    }else if(lower.match(/مكان| lieu|location|address|adresse|وين|فين|أين|بومرداس|boumerd|alger|dairah/)){ showTopic('location');
    }else{ showNoResult(); }
  }
  function showNoResult(){
    const noResult={ar:'عذرًا، جرّب سؤالًا آخر عن ميمو:',fr:'Désolé, essayez une autre question sur M :',en:'Sorry, try another question about M:'};
    typeThenReply(noResult[currentLang],[
      {label:'🎀 '+T.chat_btn_mercerie[currentLang],action:()=>showBiz('mercerie')},
      {label:'💒 '+T.chat_btn_rental[currentLang],action:()=>showBiz('rental')},
      {label:'🎂 '+T.chat_btn_patisserie[currentLang],action:()=>showBiz('patisserie')},
      {label:'📞 '+T.chat_btn_contact[currentLang],action:()=>showTopic('contact')}
    ]);
  }
  function escapeHtml(s){
    return String(s).replace(/&/g,'&amp;').replace(/</g,'&lt;').replace(/>/g,'&gt;').replace(/"/g,'&quot;');
  }
  function askAI(text){
    const seq=++aiSeq;
    var base=(typeof SUPABASE_URL!=='undefined'?SUPABASE_URL:'').replace(/\/+$/,'');
    var key=(typeof SUPABASE_ANON_KEY!=='undefined'?SUPABASE_ANON_KEY:'');
    if(!base||!key){ showFallback(text); return; }
    showTyping();
    $chat.pills.innerHTML='';
    var url=base+'/functions/v1/mimo-assistant';
    fetch(url,{
      method:'POST',
      headers:{'Content-Type':'application/json','Authorization':'Bearer '+key},
      body:JSON.stringify({message:text,lang:currentLang})
    }).then(function(r){ if(!r.ok) throw new Error(r.status); return r.json(); })
      .then(function(data){
        if(seq!==aiSeq) return;
        var answer=(data&&data.answer)?data.answer:'';
        if(!answer){ showFallback(text); return; }
        hideTyping();
        appendMsg(escapeHtml(answer).replace(/\n/g,'<br>'));
        showPills([
          {label:'📞 '+T.chat_btn_contact[currentLang],action:()=>showTopic('contact')},
          {label:currentLang==='ar'?'← رجوع':currentLang==='fr'?'← Retour':'← Back',action:goHome}
        ]);
      }).catch(function(){ if(seq===aiSeq) showFallback(text); });
  }
})();
