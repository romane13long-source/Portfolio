/* =============================================
   TRANSLATIONS & LANGUAGE TOGGLE
   ============================================= */
let currentLang = 'fr';

const translations = {
  fr: {
    'nav.about':       'À propos',
    'nav.experience':  'Expérience',
    'nav.education':   'Formation',
    'nav.skills':      'Compétences',
    'nav.projects':    'Projets',
    'nav.contact':     'Contact',

    'hero.badge':    'Disponible · Alternance Generali',
    'hero.greeting': 'Bonjour, je suis',
    'hero.sub':      'MSc IA Applied to Business · Eugenia School<br/>Technicienne d\'actuariat chez Generali · Data &amp; IA',
    'hero.btn1':     'Voir mes projets',
    'hero.btn2':     'Télécharger mon CV',

    'stat1.label': 'Projets',
    'stat2.label': 'Films scrapés',
    'stat3.label': 'd\'études en data',

    'about.label': '01 · À propos',
    'about.title': 'Qui suis-je ?',
    'about.p1':    'Étudiante en <strong>MSc Artificial Intelligence Applied to Business</strong> à Eugenia School, je réalise mon alternance chez <strong>Generali France</strong> au sein du pôle TechEx &amp; Data (Global Corporate &amp; Commercial).',
    'about.p2':    'Je contribue au développement d\'outils de pilotage (dashboards, analyses), à des sujets de qualité des données et à des projets d\'automatisation, au service du suivi de la rentabilité et de la performance des portefeuilles.',
    'about.p3':    'Mon objectif : développer une <strong>double expertise data et business</strong> afin d\'accompagner les organisations dans leurs transformations grâce à la data et à l\'IA.',
    'lang.fr':       'Natif',
    'lang.en':       'B1',
    'lang.en.detail':'Séjour Londres',

    'exp.label': '02 · Expérience',
    'exp.title': 'Parcours professionnel',
    'exp.generali.period': '2025 – Présent',
    'exp.generali.role':   'Technicienne d\'actuariat',
    'exp.generali.dept':   'Global Corporate &amp; Commercial · Techex',
    'exp.generali.b1': 'Analyse de données et études statistiques',
    'exp.generali.b2': 'Pilotage de la performance via Power BI',
    'exp.generali.b3': 'Automatisation RPA avec UiPath',
    'exp.generali.b4': 'Soutien aux équipes business dans leurs décisions',
    'exp.sg.period': 'Fév. – Août 2024',
    'exp.sg.role':   'Conseillère',
    'exp.sg.b1': 'Support back-office : opérations bancaires, stocks de cartes, clôtures',
    'exp.sg.b2': 'Sensibilisation à la cybersécurité',
    'exp.sg.b3': 'Rebond commercial, conseil épargne et placements',
    'exp.etic.role': 'Hôtesse d\'accueil évènementiel',
    'exp.etic.b1': 'Coordination des intervenants et gestion des flux d\'invités',
    'exp.etic.b2': 'Accueil VIP et gestion de projets évènementiels',
    'exp.decathlon.role': 'Conseillère de vente',
    'exp.decathlon.b1': 'Gestion des stocks et merchandising',
    'exp.decathlon.b2': 'Relation client : écoute et conseils personnalisés',

    'edu.label': '03 · Formation',
    'edu.title': 'Parcours académique',
    'edu.eugenia.desc': 'Formation orientée IA appliquée aux enjeux business : data, machine learning, automatisation, CRM et data storytelling.',
    'edu.amu.role': 'Licence Économie-Finance',
    'edu.amu.desc': 'Formation solide en économétrie, statistiques, mathématiques, probabilités, macroéconomie et analyse financière.',
    'edu.amu.project': 'Projet de recherche : Impact du programme Euro-Méditerranée sur les prix immobiliers à Marseille — collecte de données, tests d\'hypothèses, tableaux croisés (Excel)',

    'skills.label': '04 · Compétences',
    'skills.title': 'Stack technique',
    'skills.g1': 'Data &amp; Analyse',
    'skills.g2': 'BI &amp; Visualisation',
    'skills.g3': 'IA &amp; Automatisation',
    'skills.g4': 'Business &amp; Outils',

    'tag.client':      'Relation client',
    'tag.cyber':       'Cybersécurité',
    'tag.event':       'Événementiel',
    'tag.pm':          'Gestion de projet',
    'tag.retail':      'Commerce',
    'tag.risk':        'Gestion des risques',
    'tag.econometrics':'Économétrie',
    'tag.stats':       'Statistiques',
    'tag.modelling':   'Modélisation',
    'tag.forecast':    'Prévisions',

    'proj.label':  '05 · Projets',
    'proj.title':  'Réalisations',
    'proj.all':    'Tous',
    'proj.pro':    'Pro',
    'proj.school': 'École',

    'contact.label': '06 · Contact',
    'contact.title': 'Travaillons ensemble',
    'contact.sub':   'Une opportunité, une question ? Je réponds rapidement.',

    'footer.text': '© 2026 Romane Long · MSc IA Applied to Business · Eugenia School',

    'chat.status':      'Assistant portfolio',
    'chat.welcome':     'Bonjour ! Je suis l\'assistant de Romane. Posez-moi des questions sur son parcours, ses compétences ou ses projets !',
    'chat.s1':          'Ses projets',
    'chat.s2':          'Sa formation',
    'chat.s3':          'Son alternance',
    'chat.placeholder': 'Posez votre question...',
  },
  en: {
    'nav.about':       'About',
    'nav.experience':  'Experience',
    'nav.education':   'Education',
    'nav.skills':      'Skills',
    'nav.projects':    'Projects',
    'nav.contact':     'Contact',

    'hero.badge':    'Available · Work-study at Generali',
    'hero.greeting': 'Hi, I\'m',
    'hero.sub':      'MSc AI Applied to Business · Eugenia School<br/>Actuarial Technician at Generali · Data &amp; AI',
    'hero.btn1':     'View my projects',
    'hero.btn2':     'Download my CV',

    'stat1.label': 'Projects',
    'stat2.label': 'Movies scraped',
    'stat3.label': 'years studying data',

    'about.label': '01 · About',
    'about.title': 'Who am I?',
    'about.p1':    'Student in <strong>MSc Artificial Intelligence Applied to Business</strong> at Eugenia School, currently doing my work-study at <strong>Generali France</strong> within the TechEx &amp; Data division (Global Corporate &amp; Commercial).',
    'about.p2':    'I contribute to the development of performance management tools (dashboards, analyses), data quality initiatives, and automation projects to support portfolio profitability and performance tracking.',
    'about.p3':    'My goal: build a <strong>dual expertise in data and business</strong> to help organisations drive their transformations through data and AI.',
    'lang.fr':        'Native',
    'lang.en':        'B1',
    'lang.en.detail': 'Stay in London',

    'exp.label': '02 · Experience',
    'exp.title': 'Professional background',
    'exp.generali.period': '2025 – Present',
    'exp.generali.role':   'Actuarial Technician',
    'exp.generali.dept':   'Global Corporate &amp; Commercial · Techex',
    'exp.generali.b1': 'Data analysis and statistical studies',
    'exp.generali.b2': 'Performance management via Power BI',
    'exp.generali.b3': 'RPA automation with UiPath',
    'exp.generali.b4': 'Supporting business teams in decision-making',
    'exp.sg.period': 'Feb. – Aug. 2024',
    'exp.sg.role':   'Advisor',
    'exp.sg.b1': 'Back-office support: banking operations, card stock, account closures',
    'exp.sg.b2': 'Cybersecurity awareness',
    'exp.sg.b3': 'Commercial upselling, savings and investment advice',
    'exp.etic.role': 'Event Hostess',
    'exp.etic.b1': 'Speaker coordination and guest flow management',
    'exp.etic.b2': 'VIP welcome and event project management',
    'exp.decathlon.role': 'Sales Advisor',
    'exp.decathlon.b1': 'Stock management and merchandising',
    'exp.decathlon.b2': 'Customer relations: listening and personalised advice',

    'edu.label': '03 · Education',
    'edu.title': 'Academic background',
    'edu.eugenia.desc': 'Business-oriented AI programme: data, machine learning, automation, CRM and data storytelling.',
    'edu.amu.role': 'BSc Economics & Finance',
    'edu.amu.desc': 'Solid foundation in econometrics, statistics, mathematics, probabilities, macroeconomics and financial analysis.',
    'edu.amu.project': 'Research project: Impact of the Euro-Mediterranean programme on property prices and quality of life in Marseille — data collection, hypothesis testing, pivot tables (Excel)',

    'skills.label': '04 · Skills',
    'skills.title': 'Tech stack',
    'skills.g1': 'Data &amp; Analysis',
    'skills.g2': 'BI &amp; Visualisation',
    'skills.g3': 'AI &amp; Automation',
    'skills.g4': 'Business &amp; Tools',

    'tag.client':      'Customer relations',
    'tag.cyber':       'Cybersecurity',
    'tag.event':       'Events',
    'tag.pm':          'Project management',
    'tag.retail':      'Retail',
    'tag.risk':        'Risk management',
    'tag.econometrics':'Econometrics',
    'tag.stats':       'Statistics',
    'tag.modelling':   'Modelling',
    'tag.forecast':    'Forecasting',

    'proj.label':  '05 · Projects',
    'proj.title':  'Work',
    'proj.all':    'All',
    'proj.pro':    'Work',
    'proj.school': 'School',

    'contact.label': '06 · Contact',
    'contact.title': 'Let\'s work together',
    'contact.sub':   'An opportunity or a question? I reply quickly.',

    'footer.text': '© 2026 Romane Long · MSc AI Applied to Business · Eugenia School',

    'chat.status':      'Portfolio assistant',
    'chat.welcome':     'Hello! I\'m Romane\'s assistant. Ask me anything about her background, skills or projects!',
    'chat.s1':          'Her projects',
    'chat.s2':          'Her education',
    'chat.s3':          'Her internship',
    'chat.placeholder': 'Ask a question...',
  }
};

function applyLang(lang) {
  currentLang = lang;
  document.documentElement.lang = lang;

  // text content
  document.querySelectorAll('[data-i18n]').forEach(el => {
    const t = translations[lang][el.dataset.i18n];
    if (t !== undefined) el.textContent = t;
  });

  // innerHTML (for <strong> etc.)
  document.querySelectorAll('[data-i18n-html]').forEach(el => {
    const t = translations[lang][el.dataset.i18nHtml];
    if (t !== undefined) el.innerHTML = t;
  });

  // input placeholders
  document.querySelectorAll('[data-i18n-placeholder]').forEach(el => {
    const t = translations[lang][el.dataset.i18nPlaceholder];
    if (t !== undefined) el.placeholder = t;
  });

  // toggle button: show opposite language
  const btn = document.getElementById('langToggle');
  if (lang === 'fr') {
    btn.querySelector('.lang-toggle__flag').textContent  = '🇬🇧';
    btn.querySelector('.lang-toggle__label').textContent = 'EN';
  } else {
    btn.querySelector('.lang-toggle__flag').textContent  = '🇫🇷';
    btn.querySelector('.lang-toggle__label').textContent = 'FR';
  }

  // re-render projects with translated content
  renderProjects(document.querySelector('.filter-btn--active')?.dataset.filter || 'all');
}

document.getElementById('langToggle').addEventListener('click', () => {
  applyLang(currentLang === 'fr' ? 'en' : 'fr');
});

/* =============================================
   SHADER BACKGROUND — Three.js (vanilla port)
   ============================================= */
(function initShader() {
  const container = document.getElementById('shaderContainer');
  if (!container) return;

  function boot() {
    if (!window.THREE) { setTimeout(boot, 100); return; }

    const THREE = window.THREE;

    const camera   = new THREE.Camera();
    camera.position.z = 1;

    const scene    = new THREE.Scene();
    const geometry = new THREE.PlaneBufferGeometry(2, 2);

    const uniforms = {
      time:       { type: 'f',  value: 1.0 },
      resolution: { type: 'v2', value: new THREE.Vector2() },
    };

    const material = new THREE.ShaderMaterial({
      uniforms,
      vertexShader: `
        void main() {
          gl_Position = vec4(position, 1.0);
        }
      `,
      fragmentShader: `
        #define TWO_PI 6.2831853072
        #define PI 3.14159265359

        precision highp float;
        uniform vec2 resolution;
        uniform float time;

        float random(in float x)  { return fract(sin(x) * 1e4); }
        float random(vec2 st) {
          return fract(sin(dot(st.xy, vec2(12.9898, 78.233))) * 43758.5453123);
        }

        void main(void) {
          vec2 uv = (gl_FragCoord.xy * 2.0 - resolution.xy) / min(resolution.x, resolution.y);

          vec2 fMosaicScal = vec2(4.0, 2.0);
          vec2 vScreenSize = vec2(256.0, 256.0);
          uv.x = floor(uv.x * vScreenSize.x / fMosaicScal.x) / (vScreenSize.x / fMosaicScal.x);
          uv.y = floor(uv.y * vScreenSize.y / fMosaicScal.y) / (vScreenSize.y / fMosaicScal.y);

          float t = time * 0.06 + random(uv.x) * 0.4;
          float lineWidth = 0.0008;

          vec3 color = vec3(0.0);
          for (int j = 0; j < 3; j++) {
            for (int i = 0; i < 5; i++) {
              color[j] += lineWidth * float(i * i) /
                abs(fract(t - 0.01 * float(j) + float(i) * 0.01) * 1.0 - length(uv));
            }
          }

          gl_FragColor = vec4(color[2], color[1], color[0], 1.0);
        }
      `,
    });

    const mesh = new THREE.Mesh(geometry, material);
    scene.add(mesh);

    const renderer = new THREE.WebGLRenderer({ antialias: true });
    renderer.setPixelRatio(Math.min(window.devicePixelRatio, 2));
    container.appendChild(renderer.domElement);

    function resize() {
      const rect = container.getBoundingClientRect();
      const w = rect.width  || window.innerWidth;
      const h = rect.height || window.innerHeight;
      renderer.setSize(w, h);
      uniforms.resolution.value.set(renderer.domElement.width, renderer.domElement.height);
    }

    resize();
    window.addEventListener('resize', resize, { passive: true });

    let id;
    function animate() {
      id = requestAnimationFrame(animate);
      uniforms.time.value += 0.05;
      renderer.render(scene, camera);
    }
    animate();

    // Pause when tab hidden (perf)
    document.addEventListener('visibilitychange', () => {
      if (document.hidden) cancelAnimationFrame(id);
      else animate();
    });
  }

  boot();
})();

/* =============================================
   SCROLL PROGRESS BAR
   ============================================= */
const progressBar = document.getElementById('scrollProgress');
window.addEventListener('scroll', () => {
  const scrolled = window.scrollY;
  const total    = document.documentElement.scrollHeight - window.innerHeight;
  progressBar.style.width = (scrolled / total * 100) + '%';
}, { passive: true });

/* =============================================
   METEOR SHOWER
   ============================================= */
(function spawnMeteors() {
  const container = document.getElementById('meteors');
  if (!container) return;
  const COUNT = 14;
  for (let i = 0; i < COUNT; i++) {
    const m = document.createElement('div');
    m.className = 'meteor';
    const left     = Math.random() * 110;
    const delay    = Math.random() * 8;
    const duration = 3 + Math.random() * 5;
    const height   = 50 + Math.random() * 80;
    m.style.cssText = `left:${left}%;animation-duration:${duration}s;animation-delay:${delay}s;height:${height}px;`;
    container.appendChild(m);
  }
})();

/* =============================================
   HERO TITLE — CHARACTER SPLIT ANIMATION
   ============================================= */
(function splitHeroName() {
  const el = document.querySelector('.hero__name');
  if (!el) return;
  const text = el.textContent;
  el.innerHTML = text.split('').map((c, i) =>
    `<span class="char" style="animation-delay:${0.4 + i * 0.04}s">${c === ' ' ? '&nbsp;' : c}</span>`
  ).join('');
})();

/* =============================================
   CUSTOM CURSOR
   ============================================= */
const cursor   = document.getElementById('cursor');
const follower = document.getElementById('cursorFollower');

let mouseX = 0, mouseY = 0;
let followerX = 0, followerY = 0;

document.addEventListener('mousemove', e => {
  mouseX = e.clientX;
  mouseY = e.clientY;
  cursor.style.left = mouseX + 'px';
  cursor.style.top  = mouseY + 'px';
});

(function animateFollower() {
  followerX += (mouseX - followerX) * 0.12;
  followerY += (mouseY - followerY) * 0.12;
  follower.style.left = followerX + 'px';
  follower.style.top  = followerY + 'px';
  requestAnimationFrame(animateFollower);
})();

/* =============================================
   NAVIGATION
   ============================================= */
const nav    = document.getElementById('nav');
const burger = document.getElementById('burger');
const links  = document.querySelector('.nav__links');

window.addEventListener('scroll', () => {
  nav.classList.toggle('scrolled', window.scrollY > 10);
  const hint = document.querySelector('.hero__scroll');
  if (hint) hint.style.opacity = window.scrollY > 60 ? '0' : '0.35';
});

burger.addEventListener('click', () => links.classList.toggle('open'));
links.querySelectorAll('a').forEach(a =>
  a.addEventListener('click', () => links.classList.remove('open'))
);

/* =============================================
   REVEAL ON SCROLL
   ============================================= */
const revealObserver = new IntersectionObserver(
  entries => entries.forEach(e => {
    if (e.isIntersecting) { e.target.classList.add('visible'); revealObserver.unobserve(e.target); }
  }),
  { threshold: 0.1 }
);

function observeReveal(el) { revealObserver.observe(el); }
document.querySelectorAll('.reveal').forEach(observeReveal);

/* =============================================
   TYPED TEXT
   ============================================= */
const roles = [
  'Data Analyst',
  'Technicienne d\'actuariat',
  'IA Applied to Business',
  'Automatisation & RPA',
];

let roleIndex = 0, charIndex = 0, deleting = false;
const typedEl = document.getElementById('typedText');

function typeLoop() {
  const current = roles[roleIndex];
  if (!deleting) {
    typedEl.textContent = current.slice(0, charIndex + 1);
    charIndex++;
    if (charIndex === current.length) {
      deleting = true;
      setTimeout(typeLoop, 1800);
      return;
    }
  } else {
    typedEl.textContent = current.slice(0, charIndex - 1);
    charIndex--;
    if (charIndex === 0) {
      deleting = false;
      roleIndex = (roleIndex + 1) % roles.length;
    }
  }
  setTimeout(typeLoop, deleting ? 45 : 80);
}
typeLoop();

/* =============================================
   STATS COUNTER
   ============================================= */
function animateCounter(el) {
  const target = parseInt(el.dataset.target, 10);
  const duration = 1600;
  const start = performance.now();

  function update(now) {
    const elapsed = now - start;
    const progress = Math.min(elapsed / duration, 1);
    const ease = 1 - Math.pow(1 - progress, 3);
    el.textContent = Math.floor(ease * target).toLocaleString('fr-FR');
    if (progress < 1) requestAnimationFrame(update);
    else el.textContent = target.toLocaleString('fr-FR');
  }
  requestAnimationFrame(update);
}

const statsObserver = new IntersectionObserver(entries => {
  entries.forEach(e => {
    if (e.isIntersecting) {
      e.target.querySelectorAll('[data-target]').forEach(animateCounter);
      statsObserver.unobserve(e.target);
    }
  });
}, { threshold: 0.5 });

const statsEl = document.querySelector('.hero__stats');
if (statsEl) statsObserver.observe(statsEl);

/* =============================================
   3D TILT ON PROJECT CARDS
   ============================================= */
function initTilt() {
  document.querySelectorAll('.project-card').forEach(card => {
    card.addEventListener('mousemove', e => {
      const rect  = card.getBoundingClientRect();
      const x     = (e.clientX - rect.left) / rect.width  - 0.5;
      const y     = (e.clientY - rect.top)  / rect.height - 0.5;
      card.style.transform = `perspective(800px) rotateY(${x * 10}deg) rotateX(${-y * 10}deg) translateY(-4px)`;
    });
    card.addEventListener('mouseleave', () => {
      card.style.transform = '';
    });
  });
}

/* =============================================
   PROJECTS DATA
   ============================================= */
const projects = [
  // ── PRO ────────────────────────────────────────────────────────
  {
    icon: '📊',
    tag:    { fr: 'Pro · Generali',       en: 'Work · Generali' },
    category: 'pro',
    title:  { fr: 'Dashboard Power BI',   en: 'Power BI Dashboard' },
    description: {
      fr: 'Pilotage de la performance technique actuarielle : suivi des portefeuilles, analyse des sinistres, évolution des primes. Tableau de bord interactif pour les équipes business du service Techex.',
      en: 'Actuarial performance management: portfolio tracking, claims analysis, premium trends. Interactive dashboard for the Techex business teams at Generali.',
    },
    tools: ['Power BI', 'Actuariat', 'KPIs', 'DAX'],
    github: null, demo: null,
  },
  {
    icon: '🤖',
    tag:    { fr: 'Pro · Generali',       en: 'Work · Generali' },
    category: 'pro',
    title:  { fr: 'Robot UiPath (RPA)',   en: 'UiPath Robot (RPA)' },
    description: {
      fr: 'Automatisation de la collecte de données sinistres et événements CAT (catastrophes naturelles). Le robot parcourt une interface web, extrait et structure les données pour les outils de reporting.',
      en: 'Automated collection of claims and CAT (natural catastrophe) event data. The robot navigates a web interface, extracts and structures data to feed reporting tools.',
    },
    tools: ['UiPath', 'RPA', 'Automatisation'],
    github: null, demo: null,
  },
  {
    icon: '⚙️',
    tag:    { fr: 'Pro · Automatisation', en: 'Work · Automation' },
    category: 'pro',
    title:  { fr: 'Scénario Make / N8N',  en: 'Make / N8N Workflow' },
    description: {
      fr: 'Automatisation de flux de données entre applications via Make et N8N. Orchestration de pipelines sans code pour connecter des sources hétérogènes et déclencher des actions métier.',
      en: 'Data flow automation between applications using Make and N8N. No-code pipeline orchestration to connect heterogeneous sources and trigger business actions.',
    },
    tools: ['Make', 'N8N', 'Automation', 'No-code'],
    github: null,
    demo: 'https://eu2.make.com/public/shared-scenario/KWQcvhE26oO/projet',
  },
  // ── ÉCOLE ──────────────────────────────────────────────────────
  {
    icon: '🌎',
    tag:    { fr: 'École · Eugenia School', en: 'School · Eugenia School' },
    category: 'school',
    title:  { fr: 'Dashboard Brésil E-commerce', en: 'Brazil E-commerce Dashboard' },
    description: {
      fr: 'Visualisation du marché e-commerce brésilien avec Tableau Public. Ventes par catégorie, tendances temporelles et KPIs clés. Données nettoyées et structurées avant import.',
      en: 'Visualisation of the Brazilian e-commerce market with Tableau Public. Sales by category, time trends and key KPIs. Data cleaned and structured before import.',
    },
    tools: ['Tableau', 'Data Viz', 'E-commerce'],
    github: null,
    demo: 'https://public.tableau.com/app/profile/romane.long/viz/Projet_eugenia_17738455045920/Dasboard_projet_eugenia?publish=yes',
  },
  {
    icon: '🎬',
    tag:    { fr: 'École · Eugenia School', en: 'School · Eugenia School' },
    category: 'school',
    title:  'Mood Match',
    description: {
      fr: 'Chatbot de recommandation de films & séries selon l\'humeur. Scraping JustWatch : +6 500 titres (Netflix, Disney+, Prime Video, Canal+). 15h de scraping, gestion fine des différences HTML.',
      en: 'Movie & series recommendation chatbot based on mood. Scraped JustWatch: 6,500+ titles (Netflix, Disney+, Prime Video, Canal+). 15h of scraping, fine-grained HTML diff handling.',
    },
    tools: ['Python', 'Web Scraping', 'NLP', 'BeautifulSoup'],
    github: 'https://github.com/romane13long-source/Projet.git',
    demo: null,
  },
  {
    icon: '🎵',
    tag:    { fr: 'École · Eugenia School', en: 'School · Eugenia School' },
    category: 'school',
    title:  { fr: 'Chatbot Paroles (RAG)', en: 'Lyrics Chatbot (RAG)' },
    description: {
      fr: 'L\'utilisateur saisit des paroles dont il se souvient, le système identifie le titre et l\'artiste via architecture RAG et recherche sémantique dans une base indexée.',
      en: 'The user types partial lyrics they remember; the system identifies the title and artist using a RAG architecture with semantic search over an indexed database.',
    },
    tools: ['Python', 'RAG', 'Embeddings', 'Semantic Search'],
    github: 'https://github.com/romane13long-source/Projet.git',
    demo: null,
  },
  {
    icon: '📍',
    tag:    { fr: 'École · Eugenia School', en: 'School · Eugenia School' },
    category: 'school',
    title:  'Together',
    description: {
      fr: 'App mobile-first de sorties entre amis. Chat temps réel, système de vote, carte géolocalisée, suggestions IA, feed social avec stories. Stack Next.js + Supabase, déployée sur Vercel.',
      en: 'Mobile-first social app for planning outings with friends. Real-time chat, voting system, geolocated map, AI suggestions, social feed with stories. Next.js + Supabase, deployed on Vercel.',
    },
    tools: ['Next.js', 'Supabase', 'IA', 'Vercel', 'Maps'],
    github: null, demo: null,
  },
  {
    icon: '🏆',
    tag:    { fr: 'Hackathon', en: 'Hackathon' },
    category: 'school',
    title:  { fr: 'Hackathon Payfit & Mirakl', en: 'Payfit & Mirakl Hackathon' },
    description: {
      fr: 'Participation aux hackathons organisés par Payfit et Mirakl. Développement de solutions IA en équipe sous contrainte de temps : idéation, prototypage et présentation.',
      en: 'Participated in hackathons organised by Payfit and Mirakl. Built AI-powered solutions in teams under time pressure: ideation, prototyping and pitch.',
    },
    tools: ['IA', 'Prototypage', 'Pitch', 'Team'],
    github: null, demo: null,
  },
  {
    icon: '🧠',
    tag:    { fr: 'École · Eugenia School', en: 'School · Eugenia School' },
    category: 'school',
    title:  { fr: 'Agent IA (Dust)', en: 'AI Agent (Dust)' },
    description: {
      fr: 'Conception d\'un agent IA sur la plateforme Dust : orchestration de modèles de langage, définition des outils disponibles et des règles comportementales pour un cas d\'usage métier.',
      en: 'Designed an AI agent on the Dust platform: LLM orchestration, tool definition and behavioural rules for a business use case.',
    },
    tools: ['Dust', 'Agent IA', 'LLMs', 'Prompt Engineering'],
    github: null, demo: null,
  },
  {
    icon: '🗄️',
    tag:    { fr: 'École · Eugenia School', en: 'School · Eugenia School' },
    category: 'school',
    title:  { fr: 'Projet SQL & Airtable', en: 'SQL & Airtable Project' },
    description: {
      fr: 'Modélisation et interrogation de bases de données relationnelles en SQL. Utilisation d\'Airtable pour la gestion de données structurées et la création de vues collaboratives.',
      en: 'Modelling and querying relational databases with SQL. Used Airtable for structured data management and collaborative views.',
    },
    tools: ['SQL', 'Airtable', 'Data Modelling'],
    github: null, demo: null,
  },
  {
    icon: '📜',
    tag:    { fr: 'Certification', en: 'Certification' },
    category: 'school',
    title:  { fr: 'Certification Dataiku', en: 'Dataiku Certification' },
    description: {
      fr: 'Certification obtenue sur la plateforme Dataiku (DSS) : préparation de données, machine learning, déploiement de modèles et pipelines analytiques end-to-end.',
      en: 'Certification obtained on Dataiku (DSS): data preparation, machine learning, model deployment and end-to-end analytical pipelines.',
    },
    tools: ['Dataiku', 'Machine Learning', 'Data Prep', 'MLOps'],
    github: null, demo: null,
  },
];

// Helper : resolve string or {fr,en} object
function tr(val) {
  if (!val) return '';
  if (typeof val === 'string') return val;
  return val[currentLang] || val.fr || '';
}

function renderProjects(filter = 'all') {
  const grid = document.getElementById('projectsGrid');
  const filtered = filter === 'all' ? projects : projects.filter(p => p.category === filter);
  const demoLabel  = currentLang === 'fr' ? 'Démo →'   : 'Demo →';
  const githubLabel = 'GitHub →';

  grid.innerHTML = filtered.map(p => `
    <article class="glass-card project-card" data-category="${p.category}">
      <div class="project-card__icon">${p.icon}</div>
      <span class="project-card__tag">${tr(p.tag)}</span>
      <h3>${tr(p.title)}</h3>
      <p>${tr(p.description)}</p>
      <div class="project-card__chips">
        ${p.tools.map(t => `<span class="project-chip">${t}</span>`).join('')}
      </div>
      ${(p.github || p.demo) ? `
      <div class="project-card__links">
        ${p.github ? `<a href="${p.github}" target="_blank" rel="noopener">${githubLabel}</a>` : ''}
        ${p.demo   ? `<a href="${p.demo}"   target="_blank" rel="noopener">${demoLabel}</a>`   : ''}
      </div>` : ''}
    </article>
  `).join('');

  document.querySelectorAll('.project-card').forEach(observeReveal);
  initTilt();
  initBorderBeam();
  initSpotlight();
}

// Filter buttons
document.querySelectorAll('.filter-btn').forEach(btn => {
  btn.addEventListener('click', () => {
    document.querySelectorAll('.filter-btn').forEach(b => b.classList.remove('filter-btn--active'));
    btn.classList.add('filter-btn--active');
    renderProjects(btn.dataset.filter);
  });
});

renderProjects();

/* =============================================
   SPOTLIGHT ON GLASS CARDS
   ============================================= */
function initSpotlight() {
  document.querySelectorAll('.glass-card').forEach(card => {
    card.classList.add('spotlight-card');
    card.addEventListener('mousemove', e => {
      const rect = card.getBoundingClientRect();
      card.style.setProperty('--mx', (e.clientX - rect.left) + 'px');
      card.style.setProperty('--my', (e.clientY - rect.top)  + 'px');
    });
  });
}
initSpotlight();

/* =============================================
   BORDER BEAM ON PROJECT CARDS
   ============================================= */
function initBorderBeam() {
  document.querySelectorAll('.project-card').forEach(card => {
    card.classList.add('border-beam');
  });
}
initBorderBeam();

/* =============================================
   MAGNETIC BUTTONS
   ============================================= */
document.querySelectorAll('.btn--primary, .btn--ghost').forEach(btn => {
  btn.classList.add('btn--magnetic');
  btn.addEventListener('mousemove', e => {
    const rect   = btn.getBoundingClientRect();
    const x      = (e.clientX - rect.left - rect.width  / 2) * 0.25;
    const y      = (e.clientY - rect.top  - rect.height / 2) * 0.25;
    btn.style.transform = `translate(${x}px, ${y}px) translateY(-2px)`;
  });
  btn.addEventListener('mouseleave', () => {
    btn.style.transform = '';
  });
});

/* =============================================
   ACTIVE NAV LINK ON SCROLL
   ============================================= */
const sections = document.querySelectorAll('section[id]');
const navAs    = document.querySelectorAll('.nav__links a');

const sectionObserver = new IntersectionObserver(entries => {
  entries.forEach(e => {
    if (e.isIntersecting) {
      navAs.forEach(a => a.classList.remove('active'));
      const active = document.querySelector(`.nav__links a[href="#${e.target.id}"]`);
      if (active) active.classList.add('active');
    }
  });
}, { threshold: 0.4 });

sections.forEach(s => sectionObserver.observe(s));
