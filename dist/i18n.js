/* Arabic source copy and its English translation share the same live interface.
 * Text nodes are translated in place so filters, dates, form input, focus,
 * favorites and open dialogs survive a language change without a reload. */
(() => {
  const translations = {
    'كل طرق عمّان… بمكان واحد':'Every road in Amman. One place.',
    'نسخة تجريبية · عروض وشركات توضيحية':'Demo · Illustrative cars and companies',
    'استكشف السيارات':'Explore cars','شركات التأجير':'Rental companies','كيف تعمل؟':'How it works',
    'المفضلة':'Favorites','أضف شركتك':'List your company','فتح القائمة':'Open menu','إغلاق القائمة':'Close menu','إغلاق':'Close',
    'القائمة الرئيسية':'Main navigation','التنقل السريع':'Quick navigation','قائمة الهاتف':'Mobile navigation',
    'RentCarMuscat الرئيسية':'RentCarMuscat home','لِكل مشوار، سيارة':'A car for every journey',
    'عمّان أقرب.':'Explore Amman.','ورحلتك':'Drive','على كيفك.':'your way.',
    'سيارات وشركات تأجير في عمّان، بمكان واحد.':'Cars and rental companies in Amman, all in one place. ',
    'قارن الخيارات، اختار سيارتك، وخلي الباقي علينا.':'Compare your options and find a car that fits your plans.',
    'خيارات لكل ميزانية':'For every budget','استلام من المطار':'Airport pickup','مقارنة سهلة':'Easy comparison',
    'اكتشف سيارتك القادمة':'Find your next car','اكتشف الأردن بطريقتك':'Explore Jordan your way','عمّان، الأردن':'Amman, Jordan',
    'مدينة تستاهل تستكشفها':'A city worth exploring','مشوارك يبدأ من هون.':'Your journey starts here.',
    'إطلالة على جبل القلعة ومدينة عمّان':'A view of Amman and the Citadel',
    'ابحث عن سيارة':'Find a car','مكان الاستلام':'Pickup location','عمّان، جميع المناطق':'Amman, all areas',
    'مطار الملكة علياء':'Queen Alia Airport','الشميساني':'Shmeisani','الصويفية':'Sweifieh','عبدون':'Abdoun','خلدا':'Khalda',
    'المطار':'Airport','عمّان':'Amman','تاريخ الاستلام':'Pickup date','تاريخ التسليم':'Return date','نوع السيارة':'Car type',
    'جميع السيارات':'All car types','كل السيارات':'All cars','اقتصادية':'Economy','سيدان':'Sedan','دفع رباعي':'SUV','فاخرة':'Luxury','كهربائية':'Electric','عائلية':'Family',
    'اختيارات أكثر. مقارنة أوضح. مشوار أسهل.':'More choice. Clear comparisons. Easier journeys.',
    'الأسعار بالدينار الأردني':'Prices in Jordanian dinars','اختار اللي بناسب مشوارك':'Find your kind of drive','فئات السيارات':'Car categories',
    'لمشاوير كل يوم':'For everyday trips','راحة وأناقة':'Comfort and style','جاهزة للمغامرة':'Ready to explore','كل مشوار مميّز':'Make it memorable','خيار للمستقبل':'A fresh way to drive','مكان لكل العيلة':'Room for everyone',
    'على ذوقك، وعلى ميزانيتك':'Your style. Your budget.','سيارات لمشوارك القادم':'Cars for your next journey',
    'اكتشف مجموعة من خيارات التأجير في عمّان':'Explore a range of rental options in Amman',
    'شوف كل السيارات':'View all cars','تصفية':'Filters','الترتيب:':'Sort by:','ترتيب السيارات':'Sort cars',
    'المقترحة لك':'Recommended','الأقل سعراً':'Price: low to high','الأعلى سعراً':'Price: high to low',
    'الشركة':'Company','كل الشركات':'All companies','الميزانية اليومية حتى':'Daily budget up to','ابحث عن سيارة':'Find a car',
    'مثلاً: تويوتا، BMW…':'Try Toyota, BMW…','مسح التصفية ↺':'Reset filters ↺','استكشف سيارات أكثر':'Explore more cars',
    'خيارات أكثر، من أهل الخبرة':'More options, local expertise','شركات كثيرة. وجهة واحدة':'Many companies. One destination',
    'تعرّف على شركات التأجير واستعرض سيارات كل شركة بسهولة.':'Meet rental companies and explore their cars in one place.',
    'أسماء الشركات، الأسعار وأعداد السيارات في هذه النسخة أمثلة توضيحية وليست عروضاً فعلية.':'Company names, prices and fleet sizes are illustrative demo data, not real offers.',
    'الطريق أبسط مما بتتخيل':'An easier way to get going','ثلاث خطوات.':'Three steps.','وأنت عالطريق':'Then you’re on your way',
    'خلينا نبلّش':'Let’s get started','دَوّر على اللي بناسبك':'Find your fit',
    'حدّد مكان الاستلام والتواريخ، واستكشف السيارات المناسبة لمشوارك.':'Choose your pickup location and dates, then explore cars for your trip.',
    'قارن على راحتك':'Compare at your pace','شوف السعر، مواصفات السيارة وشروط التأجير جنب بعض.':'Compare prices, car features and rental terms side by side.',
    'جهّز طلبك':'Prepare your request','اختار سيارتك وراجع تفاصيل رحلتك. الحجز الفعلي يتطلب تفعيل الربط بالشركات.':'Choose a car and review your trip. Real bookings require a live company integration.',
    'لشركات تأجير السيارات':'For rental companies','سياراتك تستاهل تنشاف.':'Put your fleet in the spotlight.',
    'اعرض أسطولك في المكان اللي الناس بتدور فيه على مشوارها القادم.':'Showcase your fleet where people look for their next journey.',
    'انضم كشركة تأجير':'Join as a rental company','قبل ما تمسك الطريق':'Before you hit the road','أسئلة على بالك؟':'Questions before you go?',
    'كيف بقدر أحجز سيارة؟':'How do I book a car?',
    'ابحث عن سيارة، وافتح التفاصيل واختر «جهّز طلب الإيجار». هذه نسخة تجريبية تحفظ طلبك على جهازك فقط؛ إرسال الطلب وتأكيد الحجز يحتاجان ربطاً فعلياً بشركة التأجير.':'Find a car, open its details and choose “Prepare rental request”. This demo saves a draft on your device only. Sending requests and confirming bookings require a live rental company integration.',
    'هل بقدر أستلم السيارة من المطار؟':'Can I pick up at the airport?',
    'اختار مطار الملكة علياء من مكان الاستلام لتشوف الأمثلة التي تدعم هذا الموقع. عند تفعيل الشركات، يتم تأكيد التوفر ورسوم التوصيل معها مباشرة.':'Choose Queen Alia Airport as your pickup location to see matching examples. Availability and delivery fees must be confirmed with the company when live rentals are enabled.',
    'شو بيشمل السعر المعروض؟':'What does the displayed price include?',
    'الأسعار المعروضة يومية وتوضيحية. شاشة التفاصيل تحسب تكلفة المدة المختارة وتعرض التأمين والوديعة والمسافة اليومية لكل مثال. السعر النهائي يتأكد من شركة التأجير.':'Displayed prices are illustrative daily rates. Car details show the cost for your dates, example insurance, deposit and mileage terms. Final pricing must be confirmed with the rental company.',
    'أنا شركة تأجير، كيف بنضم؟':'How can my rental company join?',
    'اضغط «أضف شركتك» وعبّي بيانات الشركة. في هذه النسخة تنحفظ استمارة الانضمام محلياً، وتقدر تنزّل نسخة منها لتجهيز الربط الفعلي لاحقاً.':'Choose “List your company” and enter your details. This demo saves your application locally, and you can download a copy for a future live integration.',
    'كل الخيارات لمشوارك… بمكان واحد.':'Every option for your journey. One place.','السيارات':'Cars','الشركات':'Companies','الخصوصية':'Privacy',
    'RentCarMuscat · نموذج تجريبي':'RentCarMuscat · Demo','صُمّم لعمّان، ولكل مشاويرها':'Made for Amman and all its journeys',
    'الرئيسية':'Home','للمقارنة':'Compare','مسح':'Clear','قارن السيارات ←':'Compare cars →',
    'مشوارك،':'Your journey,','استكشف RentCarMuscat':'Explore RentCarMuscat','كل الخيارات بمكان واحد':'Every option in one place',
    'سيارة تناسب كل مشوار':'A car for every plan','تعرّف على شركات عمّان':'Meet Amman’s rental companies','سياراتك المفضلة':'Your favorite cars','خياراتك محفوظة إلك':'Your shortlist, saved for you',
    'كيف بتعمل؟':'How it works','من البحث لتجهيز طلبك':'From finding a car to your draft','شو نوع مشوارك؟':'What’s your kind of drive?',
    'عندك شركة تأجير؟':'Run a rental company?','خلّي سياراتك ضمن خيارات المشوار القادم.':'Make your fleet part of someone’s next journey.',
    'نسخة تجريبية · RentCarMuscat':'Demo · RentCarMuscat',
    'اختيار مميّز':'Featured pick','صورة توضيحية للفئة':'Illustrative category photo','أو ما يماثلها':'or similar',
    'أوتوماتيك':'Automatic','بنزين':'Petrol','هايبرد':'Hybrid','ديزل':'Diesel','كهرباء':'Electric',
    'د.أ':'JOD','أيام':'days','/ يوم':'/ day','سعر توضيحي · غير قابل للحجز الفعلي':'Demo rate · Not a live booking',
    'التفاصيل':'View details','أضف للمقارنة':'Add to comparison','إضافة إلى المفضلة':'Save to favorites','إزالة من المفضلة':'Remove from favorites',
    'ما في سيارات بالمفضلة لسه':'Your shortlist is waiting','ما لقينا سيارات بهالخيارات':'No cars match these filters',
    'اضغط على القلب بجانب أي سيارة لحفظها هون.':'Tap the heart on a car to save it here.','جرّب توسّع الميزانية أو تغيّر مكان الاستلام.':'Try a higher budget or another pickup location.',
    'استعرض كل السيارات':'Browse all cars','اختار تاريخ تسليم بعد تاريخ الاستلام':'Choose a return date after pickup',
    'دليل شركات التأجير':'Rental company directory','شركات عمّان':'Amman rental companies','دليل الشركات':'Company directory','السيارات في النموذج':'Demo fleet',
    'ملف شركة تجريبي — لا توجد شراكة أو بيانات تواصل فعلية.':'Demo company profile. There is no real partnership or contact information.',
    'سيارات في النموذج':'demo cars','تفاصيل المشوار':'Your rental at a glance','تأمين أساسي توضيحي، التفاصيل تؤكدها الشركة':'Example basic insurance; confirm details with the company',
    'هذا عرض تجريبي. صور السيارات توضيحية للفئة، والأسعار والشروط ليست عرضاً ملزماً من شركة فعلية.':'This is a demo listing. Photos illustrate car categories. Prices and terms are not binding offers from a real company.',
    'تكلفة المدة قبل الوديعة وأي إضافات. المبلغ توضيحي.':'Illustrative rental cost before the deposit and any extras.',
    'جهّز طلب الإيجار ←':'Prepare rental request →','راجع تواريخ الرحلة':'Check your travel dates','تفاصيل السيارة':'Car details',
    'جهّز طلب إيجارك':'Prepare your rental request','أضف بياناتك لحفظ مسودة على جهازك. لن يُرسل أي طلب أو يُحجز أي مبلغ.':'Enter your details to save a draft on this device. No request will be sent and no payment will be taken.',
    'التكلفة التوضيحية:':'Illustrative total:','الاسم الكامل':'Full name','رقم الهاتف':'Phone number','البريد الإلكتروني (اختياري)':'Email address (optional)',
    'هذه مسودة تجريبية فقط. احذفها في أي وقت من سياسة الخصوصية. الحجز يتأكد عند تفعيل التواصل مع الشركات.':'This is a demo draft only. You can delete it in Privacy. Booking confirmation requires a live company integration.',
    'احفظ مسودة الطلب':'Save request draft','طلب تجريبي':'Demo request','مسودة مشوارك جاهزة':'Your trip draft is ready','مسودة مشوارك جاهزة للتنزيل':'Your draft is ready to download',
    'نزّل نسخة من المسودة ↓':'Download draft ↓','مسودة محلية':'Local draft',
    'خلّي شركتك جزء من المشوار.':'Be part of the next journey.',
    'جهّز ملف شركتك للانضمام إلى RentCarMuscat. هذه الاستمارة التجريبية تحفظ البيانات على جهازك فقط.':'Prepare your company profile for RentCarMuscat. This demo form saves information on your device only.',
    'اسم الشركة':'Company name','اسم المسؤول':'Contact name','البريد الإلكتروني':'Email address','موقع الشركة':'Company location','عدد السيارات':'Fleet size','منطقة أخرى في عمّان':'Another area in Amman',
    'لا تتم إضافة شركتك إلى الدليل أو إرسال بياناتك في هذه النسخة. حفظ الملف يجهّزه للربط الفعلي لاحقاً.':'This demo does not publish your company or send its details. Saving prepares a local draft for a future live integration.',
    'احفظ ملف الشركة ←':'Save company profile →','لشركات التأجير':'For rental companies',
    'حُفظ الملف محلياً على جهازك.':'The profile was saved on this device.','تقدر تنزّل ملف الشركة.':'You can download your company profile.',
    'لم يتم إرسال بيانات الشركة أو نشرها.':'No company information was sent or published.','نزّل ملف الشركة ↓':'Download company profile ↓','ملف محلي':'Local profile',
    'قارن، واختار على راحتك.':'Compare clearly. Choose confidently.','مقارنة عروض توضيحية · الأسعار اليومية بالدينار الأردني':'Illustrative offers · Daily rates in JOD',
    'السيارة':'Car','السعر / يوم':'Daily rate','للمدة المختارة':'For your dates','الاستلام':'Pickup','الركاب':'Passengers','الوقود':'Fuel','الوديعة':'Deposit','المسافة اليومية':'Daily mileage','اختر السيارة ←':'Choose this car →','مقارنة السيارات':'Compare cars',
    'انضافت السيارة للمفضلة':'Saved to your favorites','تمت إزالة السيارة من المفضلة':'Removed from your favorites',
    'تقدر تقارن حتى 3 سيارات. احذف سيارة لإضافة غيرها.':'Compare up to 3 cars. Remove one to add another.',
    'خصوصيتك على الطريق':'Your privacy, on the road',
    'هذا نموذج تجريبي لمنصة RentCarMuscat. المفضلة ومسودات طلب الإيجار والانضمام تُحفظ في متصفحك على هذا الجهاز فقط. لا نرسل هذه البيانات إلى الشركات ولا نعالج حجوزات أو مدفوعات. تحميل خط الواجهة من Google Fonts يرسل طلباً إلى خدمة الخطوط. صور الموقع محفوظة ضمن الموقع.':'RentCarMuscat is a demo. Favorites and rental or company drafts are stored only in this browser on this device. We do not send them to companies or process bookings or payments. Google Fonts receives a request to load the interface fonts. Images are hosted with the website.',
    'البيانات المحفوظة على الجهاز':'Data saved on this device','تقدر تمسح المفضلة والمسودات من هنا. المسح لا يحذف الملفات التي نزلتها بنفسك.':'You can clear favorites and drafts here. This does not remove files you have downloaded.',
    'امسح البيانات المحلية':'Clear local data','تم مسح البيانات المحلية':'Local data cleared','تعذر الوصول إلى التخزين المحلي':'Local storage could not be accessed',
    'التخزين غير متاح في هذا المتصفح. تقدر تنزّل نسخة من طلبك.':'Storage is unavailable in this browser. You can download a copy of your draft.'
  };
  const patterns = [
    [/^عرض (\d+) من (\d+) سيارة تجريبية$/,(_,a,b)=>`Showing ${a} of ${b} demo cars`],
    [/^(\d+) ركاب$/,(_,n)=>`${n} seats`],
    [/^صورة توضيحية لفئة (.+)$/,(_,s)=>`Illustrative ${translate(s)} photo`],
    [/^(\d+) شركة توضيحية في أحياء عمّان والمطار\. اختر شركة لاستعراض أسطولها\.$/,(_,n)=>`${n} illustrative companies across Amman and the airport. Choose one to explore its fleet.`],
    [/^من (\S+) إلى (\S+) · الأسعار والتوفر توضيحيان$/,(_,a,b)=>`${a} to ${b} · Illustrative rates and availability`],
    [/^(\d+) نتيجة(.*?) · (\d+) أيام$/,(_,n,place,days)=>`${n} results${translate(place)} · ${days} days`],
    [/^المسافة اليومية: (\d+) كم$/,(_,n)=>`Daily mileage: ${n} km`],
    [/^وديعة مستردة توضيحية: (\d+) د\.أ$/,(_,n)=>`Example refundable deposit: ${n} JOD`],
    [/^مكان الاستلام: (.+)$/,(_,s)=>`Pickup location: ${translate(s)}`],
    [/^ناقل حركة أوتوماتيك · (\d+) ركاب · (.+)$/,(_,n,s)=>`Automatic transmission · ${n} seats · ${translate(s)}`],
    [/^([\d—]+) أيام × (\d+) د\.أ$/,(_,n,p)=>`${n} days × ${p} JOD`],
    [/^(\d+) كم$/,(_,n)=>`${n} km`],
    [/^ملف (.+) جاهز$/,(_,name)=>`${name} profile is ready`],
    [/^يا (.+)، (حفظنا التفاصيل على هذا الجهاز\.|تقدر تحفظ نسخة من التفاصيل على جهازك\.) لم يُرسل طلب للشركة ولم يتم تأكيد حجز\.$/,(_,name,saved)=>`${name}, ${saved.startsWith('حفظنا')?'your draft was saved on this device.':'you can download your draft.'} No request was sent and no booking was confirmed.`]
  ];
  // Proper names and complete phrases take precedence over component fragments.
  Object.assign(translations, {
    'هيونداي إلنترا':'Hyundai Elantra','كيا بيكانتو':'Kia Picanto','مرسيدس C-Class':'Mercedes-Benz C-Class','تويوتا RAV4':'Toyota RAV4','BMW الفئة الخامسة':'BMW 5 Series','تسلا موديل 3':'Tesla Model 3','تويوتا كورولا':'Toyota Corolla','كيا سبورتاج':'Kia Sportage','هيونداي أكسنت':'Hyundai Accent','كيا كارنفال':'Kia Carnival','هيونداي أيونيك':'Hyundai Ioniq','تويوتا برادو':'Toyota Prado',
    'رِحال لتأجير السيارات':'Rihal Rent a Car','مسار لتأجير السيارات':'Masar Rent a Car','درب لتأجير السيارات':'Darb Rent a Car','وجهة لتأجير السيارات':'Wijha Rent a Car','مدى لتأجير السيارات':'Mada Rent a Car','مِشوار لتأجير السيارات':'Mishwar Rent a Car','أفق لتأجير السيارات':'Ofoq Rent a Car','لين لتأجير السيارات':'Leen Rent a Car','رحلة لتأجير السيارات':'Rihla Rent a Car','خطوة لتأجير السيارات':'Khotwa Rent a Car','بوابة عمّان':'Amman Gate','سند لتأجير السيارات':'Sanad Rent a Car','دوار لتأجير السيارات':'Dawwar Rent a Car','جبل لتأجير السيارات':'Jabal Rent a Car','ساحة لتأجير السيارات':'Saha Rent a Car','تلال لتأجير السيارات':'Tilal Rent a Car','انطلاق لتأجير السيارات':'Go Rent a Car','دليل لتأجير السيارات':'Daleel Rent a Car'
  });
  const fragments = Object.keys(translations).sort((a,b)=>b.length-a.length);
  const fragmentPattern = new RegExp(fragments.map(s=>s.replace(/[.*+?^${}()|[\]\\]/g,'\\$&')).join('|'),'g');
  function translate(text){
    if(translations[text])return translations[text];
    for(const [pattern,format] of patterns)if(pattern.test(text))return text.replace(pattern,format);
    // Mixed labels contain company names, numbers, dates, or punctuation.
    // Replace longest phrases once; translated output is never translated again.
    return text.replace(fragmentPattern,m=>translations[m]);
  }
  const originals=new WeakMap();
  let language='ar';
  try{language=localStorage.getItem('rentcarmuscat-language')==='en'?'en':'ar';}catch{}
  function updateText(node){
    if(!node.parentElement||node.parentElement.closest('script,style,textarea,[data-no-translate]'))return;
    const current=node.nodeValue,prior=originals.get(node);
    const original=prior&&current===prior.rendered?prior.original:current;
    if(!/[\u0600-\u06ff]/.test(original))return;
    const trimmed=original.trim();
    const rendered=language==='en'?original.replace(trimmed,translate(trimmed)):original;
    originals.set(node,{original,rendered});
    if(current!==rendered)node.nodeValue=rendered;
  }
  const attributeOriginals=new WeakMap();
  function updateAttributes(el){
    if(!el.getAttribute)return;
    const records=attributeOriginals.get(el)||{};
    for(const name of ['aria-label','alt','placeholder','title']){
      if(!el.hasAttribute(name))continue;
      const value=el.getAttribute(name),prior=records[name];
      const original=prior&&value===prior.rendered?prior.original:value;
      const rendered=language==='en'?translate(original):original;
      records[name]={original,rendered};
      if(value!==rendered)el.setAttribute(name,rendered);
    }
    attributeOriginals.set(el,records);
  }
  function visit(root){
    if(root.nodeType===Node.TEXT_NODE){updateText(root);return;}
    if(root.nodeType!==Node.ELEMENT_NODE)return;
    updateAttributes(root);
    const walker=document.createTreeWalker(root,NodeFilter.SHOW_TEXT);
    while(walker.nextNode())updateText(walker.currentNode);
    root.querySelectorAll('[aria-label],[alt],[placeholder],[title]').forEach(updateAttributes);
  }
  function apply(){
    document.documentElement.lang=language;
    document.documentElement.dir=language==='ar'?'rtl':'ltr';
    document.title=language==='ar'?'RentCarMuscat — رحلتك تبدأ من هون':'RentCarMuscat — Find your next drive';
    const meta=document.querySelector('meta[name="description"]');
    if(meta)meta.content=language==='ar'?'RentCarMuscat: قارن السيارات وشركات التأجير في عمّان. واجهة بالعربية والإنجليزية.':'RentCarMuscat: compare rental cars and companies in Amman. Explore in Arabic or English.';
    visit(document.body);
    document.querySelectorAll('[data-language]').forEach(button=>button.setAttribute('aria-pressed',String(button.dataset.language===language)));
    document.querySelectorAll('[data-language-toggle]').forEach(button=>{button.setAttribute('aria-label',language==='ar'?'Switch to English':'التبديل إلى العربية');button.querySelector('[data-language-label]').textContent=language==='ar'?'EN':'عربي';});
  }
  function setLanguage(next){
    if(!['ar','en'].includes(next))return;
    language=next;
    try{localStorage.setItem('rentcarmuscat-language',language);}catch{}
    apply();
  }
  document.addEventListener('click',e=>{
    const option=e.target.closest('[data-language]');
    if(option){setLanguage(option.dataset.language);return;}
    if(e.target.closest('[data-language-toggle]'))setLanguage(language==='ar'?'en':'ar');
  });
  apply();
  new MutationObserver(records=>{
    for(const record of records){
      if(record.type==='characterData')updateText(record.target);
      else if(record.type==='attributes')updateAttributes(record.target);
      else record.addedNodes.forEach(visit);
    }
  }).observe(document.body,{subtree:true,childList:true,characterData:true,attributes:true,attributeFilter:['aria-label','alt','placeholder','title']});
})();
