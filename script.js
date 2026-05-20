/* ═══════════════════════════════════════════════
   Khadija Électronique — script.js
   Loader · Sparkles · Navbar · Reveal · AR/FR i18n
═══════════════════════════════════════════════ */

/* ── i18n dictionary ── */
const i18n = {
  ar: {
    "nav.products": "المنتجات",
    "nav.why":      "لماذا نحن",
    "nav.order":    "كيفية الطلب",
    "nav.contact":  "تواصلي",
    "nav.cta":      "اطلبي الآن",

    "hero.line1":  "إلكترونيات",
    "hero.line2":  "تعكس ذوقك",
    "hero.sub":    "إكسسوارات وإلكترونيات مختارة بعناية — أنيقة، عصرية، لك وحدك.",
    "hero.cta1":   "اكتشفي المجموعة",
    "hero.cta2":   "اطلبي عبر واتساب",
    "hero.scroll": "اسحبي للأسفل",

    "m1":"✦ إلكترونيات فاخرة","m2":"✦ إكسسوارات عصرية",
    "m3":"✦ طلب سريع عبر واتساب","m4":"✦ ستايل مميز","m5":"✦ جودة مضمونة",

    "prod.title": "منتجاتنا المختارة",
    "prod.desc":  "كل منتج يمر بعيون ذوق قبل أن يصلك — لأنك تستحقين الأفضل فقط.",
    "prod.cta.q": "لم تجدي ما يناسبك؟",
    "prod.cta.btn":"تواصلي معنا عبر واتساب",

    "badge.new":"جديد","badge.hot":"الأكثر طلبًا","badge.excl":"حصري",
    "card.order":"اطلبي الآن","card.contact":"تواصلي معنا",
    "card.price":"السعر عند الطلب","card.btn":"اطلبي ✦",

    "cat.earbuds":"سماعات لاسلكية","cat.gaming":"سماعات قيمينق",
    "cat.watch":"ساعة ذكية","cat.rgb":"سماعات RGB",
    "cat.premium":"سماعات Premium","cat.special":"طلبيات خاصة",

    "p1.name":"AirPods — سماعات فاخرة",
    "p1.desc":"صوت نقي، تصميم أنيق — تجربة سمعية لا تُقارن.",
    "p2.name":"Gaming Headset Pro",
    "p2.desc":"صوت محيطي ومريح للاستخدام المطوّل — للجادين في التجربة.",
    "p3.name":"Smart Watch أنيقة",
    "p3.desc":"تتبعي صحتك وستايلك في آنٍ واحد — الأناقة التكنولوجية الحقيقية.",
    "p4.name":"RGB Gaming Headset",
    "p4.desc":"إضاءة RGB مذهلة وصوت احترافي — ستايل وأداء بنفس الوقت.",
    "p5.name":"Premium Over-Ear Headphones",
    "p5.desc":"عزل كامل للضوضاء وصوت استوديو — للمستمعة الجادة.",
    "p6.name":"طلبية مخصصة لك",
    "p6.desc":"لم تجدي ما تريدين؟ راسلينا وسنوفره لك — خدمة شخصية 100%.",
    "p6.price":"حسب الطلب","p6.btn":"راسليني ✦",

    "why.title":"لماذا تختارين Khadija Électronique؟",
    "why.desc": "لأن التسوق يجب أن يكون تجربة ممتعة، سهلة، وبستايل.",
    "w1.t":"اختيار بعناية","w1.d":"كل منتج يُختار بشغف وذوق — لا مكان للعادي.",
    "w2.t":"تواصل سريع","w2.d":"ردّنا سريع ومباشر — لا انتظار، فقط خدمة فورية.",
    "w3.t":"طلب بسيط عبر واتساب","w3.d":"رسالة واحدة وطلبك في الطريق.",
    "w4.t":"طلبيات خاصة","w4.d":"أخبرينا بما تريدين وسنوفره — خدمة مخصصة 100%.",
    "w5.t":"ستايل أنيق ومميز","w5.d":"الإلكترونيات إمتداد لشخصيتك وذوقك.",
    "w6.t":"ابدئي الآن","w6.d":"تسوق راقٍ في رسالة واحدة. جربي الفرق.",

    "ord.title":"كيفية الطلب",
    "ord.desc": "خمس خطوات بسيطة تفصلك عن منتجك المفضل.",
    "ord.cta":  "ابدئي طلبك الآن ✦",
    "s1.t":"اختاري المنتج","s1.d":"تصفحي مجموعتنا واختاري ما يلفت نظرك.",
    "s2.t":"اضغطي على زر الطلب","s2.d":"سيفتح المحادثة مباشرة مع تفاصيل المنتج.",
    "s3.t":"تواصلي عبر WhatsApp أو Instagram","s3.d":"راسلينا مباشرة — جاهزون للرد بسرعة.",
    "s4.t":"أكدي التفاصيل","s4.d":"نتفق على اللون والمقاس وكل التفاصيل.",
    "s5.t":"يتم تجهيز الطلب","s5.d":"نجهّز طلبك بعناية ويصلك في أسرع وقت.",
    "pay.b":"الدفع والتفاصيل يتم الاتفاق عليها عبر الرسائل.",
    "pay.s":"لا تعقيدات، لا مفاجآت — شفافية تامة معك.",

    "ig.title":"تابعينا على Instagram",
    "ig.desc": "لمشاهدة المنتجات الجديدة، العروض الحصرية، وآخر الستايلات.",
    "ig.btn":  "زيارة Instagram",

    "ct.title":"جاهزة تختاري منتجك؟",
    "ct.desc": "راسلينا الآن — ردّنا سريع وخدمتنا شخصية 100%.",
    "ct.wa":   "الأسرع والأسهل — ردّنا فوري خلال ساعات العمل.",
    "ct.ig":   "تابعينا للمنتجات الجديدة وراسلينا مباشرة.",
    "ct.hrs.t":"ساعات التواصل",
    "ct.hrs.d":"نحن متاحون لردّ على استفساراتك:",
    "hrs.d1":  "الاثنين — السبت","hrs.d2":"الأحد",
    "ct.cta.q":"جاهزة تختاري منتجك؟","ct.cta.em":"راسلينا الآن.",

    "ft.bio":   "إلكترونيات وإكسسوارات عصرية مختارة بعناية — لأن ذوقك يستحق الأفضل.",
    "ft.sec":   "الأقسام","ft.cont":"تواصلي",
    "ft.rights":"© 2025 Khadija Électronique — جميع الحقوق محفوظة ✦",
    "ft.made":  "صُنع بـ ✦ وكثير من الذوق",
  },

  fr: {
    "nav.products": "Produits",
    "nav.why":      "Pourquoi nous",
    "nav.order":    "Comment commander",
    "nav.contact":  "Contact",
    "nav.cta":      "Commander",

    "hero.line1":  "Électronique",
    "hero.line2":  "à votre image",
    "hero.sub":    "Accessoires et électronique soigneusement sélectionnés — élégants, tendance, rien que pour vous.",
    "hero.cta1":   "Découvrir la collection",
    "hero.cta2":   "Commander via WhatsApp",
    "hero.scroll": "Défiler vers le bas",

    "m1":"✦ Électronique de luxe","m2":"✦ Accessoires tendance",
    "m3":"✦ Commande rapide via WhatsApp","m4":"✦ Style unique","m5":"✦ Qualité garantie",

    "prod.title": "Notre collection",
    "prod.desc":  "Chaque produit est sélectionné avec goût — parce que vous méritez le meilleur.",
    "prod.cta.q": "Vous n'avez pas trouvé ce qu'il vous faut ?",
    "prod.cta.btn":"Contactez-nous via WhatsApp",

    "badge.new":"Nouveau","badge.hot":"Best-seller","badge.excl":"Exclusif",
    "card.order":"Commander","card.contact":"Nous contacter",
    "card.price":"Prix sur demande","card.btn":"Commander ✦",

    "cat.earbuds":"Écouteurs sans fil","cat.gaming":"Casque gaming",
    "cat.watch":"Montre connectée","cat.rgb":"Casque RGB",
    "cat.premium":"Casque Premium","cat.special":"Commandes spéciales",

    "p1.name":"AirPods — Écouteurs de luxe",
    "p1.desc":"Son pur, design élégant — une expérience audio incomparable.",
    "p2.name":"Gaming Headset Pro",
    "p2.desc":"Son surround et confort prolongé — pour les passionnés de gaming.",
    "p3.name":"Montre connectée élégante",
    "p3.desc":"Suivez votre santé et votre style à la fois — l'élégance technologique.",
    "p4.name":"RGB Gaming Headset",
    "p4.desc":"Éclairage RGB époustouflant et son professionnel — style et performance.",
    "p5.name":"Casque Over-Ear Premium",
    "p5.desc":"Isolation totale et son studio — pour l'audiophile exigeante.",
    "p6.name":"Commande personnalisée",
    "p6.desc":"Vous n'avez pas trouvé ? Contactez-nous, nous le trouverons pour vous.",
    "p6.price":"Sur devis","p6.btn":"Nous contacter ✦",

    "why.title":"Pourquoi choisir Khadija Électronique ?",
    "why.desc": "Parce que le shopping doit être une expérience agréable, simple et stylée.",
    "w1.t":"Sélection soignée","w1.d":"Chaque produit est choisi avec passion — rien d'ordinaire.",
    "w2.t":"Réponse rapide","w2.d":"Nous répondons vite et directement — pas d'attente.",
    "w3.t":"Commande simple via WhatsApp","w3.d":"Un message et votre commande est lancée.",
    "w4.t":"Commandes spéciales","w4.d":"Dites-nous ce que vous voulez, nous le trouverons.",
    "w5.t":"Style élégant et unique","w5.d":"L'électronique est le prolongement de votre personnalité.",
    "w6.t":"Commencez maintenant","w6.d":"Shopping raffiné en un seul message. Essayez la différence.",

    "ord.title":"Comment commander",
    "ord.desc": "Cinq étapes simples vous séparent de votre produit préféré.",
    "ord.cta":  "Commencer votre commande ✦",
    "s1.t":"Choisissez votre produit","s1.d":"Parcourez notre collection et choisissez ce qui vous attire.",
    "s2.t":"Cliquez sur le bouton Commander","s2.d":"Il ouvrira la conversation avec les détails du produit.",
    "s3.t":"Contactez-nous via WhatsApp ou Instagram","s3.d":"Nous sommes prêts à répondre rapidement.",
    "s4.t":"Confirmez les détails","s4.d":"Nous convenons de la couleur, taille et tous les détails.",
    "s5.t":"Votre commande est préparée","s5.d":"Nous préparons votre commande avec soin pour une livraison rapide.",
    "pay.b":"Le paiement et les détails sont convenus par messages.",
    "pay.s":"Pas de complications, pas de surprises — transparence totale.",

    "ig.title":"Suivez-nous sur Instagram",
    "ig.desc": "Pour voir les nouveaux produits, offres exclusives et dernières tendances.",
    "ig.btn":  "Visiter Instagram",

    "ct.title":"Prête à choisir votre produit ?",
    "ct.desc": "Écrivez-nous maintenant — réponse rapide, service personnalisé.",
    "ct.wa":   "Le plus rapide et simple — réponse immédiate pendant les heures d'ouverture.",
    "ct.ig":   "Suivez-nous pour les nouveautés et écrivez-nous directement.",
    "ct.hrs.t":"Heures de contact",
    "ct.hrs.d":"Nous sommes disponibles pour vos questions :",
    "hrs.d1":  "Lundi — Samedi","hrs.d2":"Dimanche",
    "ct.cta.q":"Prête à choisir votre produit ?","ct.cta.em":"Écrivez-nous maintenant.",

    "ft.bio":   "Électronique et accessoires tendance soigneusement sélectionnés — parce que votre goût mérite le meilleur.",
    "ft.sec":   "Sections","ft.cont":"Contact",
    "ft.rights":"© 2025 Khadija Électronique — Tous droits réservés ✦",
    "ft.made":  "Fait avec ✦ et beaucoup de goût",
  }
};

/* ── Apply translations ── */
let currentLang = 'ar';

function applyLang(lang) {
  const dict = i18n[lang];
  document.querySelectorAll('[data-i18n]').forEach(el => {
    const key = el.getAttribute('data-i18n');
    if (dict[key] !== undefined) el.textContent = dict[key];
  });

  // html dir + lang attribute
  const isAr = lang === 'ar';
  document.documentElement.setAttribute('lang', lang);
  document.documentElement.setAttribute('dir', isAr ? 'rtl' : 'ltr');
  document.documentElement.setAttribute('data-lang', lang);

  // Sync desktop buttons
  document.querySelectorAll('.lang-btn').forEach(btn => {
    btn.classList.toggle('active', btn.dataset.lang === lang);
  });
  // Sync mobile buttons
  document.querySelectorAll('.mob-lang-btn').forEach(btn => {
    btn.classList.toggle('active', btn.dataset.lang === lang);
  });

  currentLang = lang;
  try { localStorage.setItem('ke-lang', lang); } catch(e){}
}

// Desktop lang buttons
document.querySelectorAll('.lang-btn').forEach(btn => {
  btn.addEventListener('click', () => applyLang(btn.dataset.lang));
});
// Mobile lang buttons
document.querySelectorAll('.mob-lang-btn').forEach(btn => {
  btn.addEventListener('click', () => applyLang(btn.dataset.lang));
});

// Restore saved lang
try {
  const saved = localStorage.getItem('ke-lang');
  if (saved && i18n[saved]) applyLang(saved);
} catch(e){}

/* ── Loader ── */
document.body.style.overflow = 'hidden';
window.addEventListener('load', () => {
  setTimeout(() => {
    const loader = document.getElementById('loader');
    if (loader) loader.classList.add('hidden');
    document.body.style.overflow = '';
    initReveal();
    setTimeout(() => {
      const h = document.querySelector('#hero .reveal');
      if (h) h.classList.add('visible');
    }, 100);
  }, 1900);
});

/* ── Sparkles ── */
(function createSparkles() {
  const field = document.getElementById('sparkleField');
  if (!field) return;
  for (let i = 0; i < 40; i++) {
    const s = document.createElement('div');
    s.className = 'sparkle';
    s.style.cssText = `left:${Math.random()*100}%;top:${Math.random()*100}%;
      --dur:${2+Math.random()*4}s;--del:${-Math.random()*5}s;
      width:${Math.random()>.7?4:2}px;height:${Math.random()>.7?4:2}px;`;
    field.appendChild(s);
  }
})();

/* ── Scroll Reveal ── */
function initReveal() {
  const io = new IntersectionObserver((entries) => {
    entries.forEach(e => {
      if (!e.isIntersecting) return;
      const delay = parseInt(e.target.getAttribute('data-delay') || 0);
      setTimeout(() => e.target.classList.add('visible'), delay);
      io.unobserve(e.target);
    });
  }, { threshold: 0.12, rootMargin: '0px 0px -40px 0px' });
  document.querySelectorAll('.reveal').forEach(el => io.observe(el));
}

/* ── Navbar scroll ── */
const navbar = document.getElementById('navbar');
window.addEventListener('scroll', () => {
  navbar.classList.toggle('scrolled', window.scrollY > 60);
}, { passive: true });

/* ── Burger ── */
const burger = document.getElementById('burger');
const navMobile = document.getElementById('navMobile');
burger.addEventListener('click', () => {
  burger.classList.toggle('open');
  navMobile.classList.toggle('open');
});
document.querySelectorAll('.mob-link,.mob-cta').forEach(link => {
  link.addEventListener('click', () => {
    burger.classList.remove('open');
    navMobile.classList.remove('open');
  });
});

/* ── Smooth scroll ── */
document.querySelectorAll('a[href^="#"]').forEach(a => {
  a.addEventListener('click', e => {
    const target = document.querySelector(a.getAttribute('href'));
    if (!target) return;
    e.preventDefault();
    window.scrollTo({ top: target.getBoundingClientRect().top + window.scrollY - 80, behavior: 'smooth' });
  });
});

/* ── Cursor sparkle (desktop only) ── */
if (window.matchMedia('(pointer:fine)').matches) {
  const cvs = document.createElement('canvas');
  Object.assign(cvs.style, {
    position:'fixed',top:'0',left:'0',width:'100%',height:'100%',
    pointerEvents:'none',zIndex:'9998'
  });
  document.body.appendChild(cvs);
  const ctx = cvs.getContext('2d');
  cvs.width = innerWidth; cvs.height = innerHeight;
  window.addEventListener('resize', () => { cvs.width=innerWidth; cvs.height=innerHeight; });

  const pts = [];
  window.addEventListener('mousemove', e => {
    if (Math.random() > .55)
      pts.push({ x:e.clientX, y:e.clientY,
        vx:(Math.random()-.5)*2, vy:(Math.random()-.5)*2-1,
        a:1, r:Math.random()*3+1,
        c: Math.random()>.5?'#c9a84c':'#e8c97a' });
  });

  (function loop() {
    ctx.clearRect(0,0,cvs.width,cvs.height);
    for (let i=pts.length-1;i>=0;i--) {
      const p=pts[i]; p.x+=p.vx; p.y+=p.vy; p.a-=.03;
      if (p.a<=0){pts.splice(i,1);continue;}
      ctx.save(); ctx.globalAlpha=p.a; ctx.fillStyle=p.c;
      ctx.beginPath(); ctx.arc(p.x,p.y,p.r,0,Math.PI*2); ctx.fill();
      ctx.restore();
    }
    requestAnimationFrame(loop);
  })();
}

console.log('%c✦ Khadija Électronique','color:#c9a84c;font-size:20px;font-weight:bold;');
console.log('%cصُنع بذوق وشغف ✨','color:#8a7a6a;font-size:13px;');
