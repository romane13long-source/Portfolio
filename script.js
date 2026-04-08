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
  {
    icon: '📊',
    tag: 'Pro · Generali',
    category: 'pro',
    title: 'Dashboard Power BI',
    description: 'Pilotage de la performance technique actuarielle : suivi des portefeuilles, analyse des sinistres, évolution des primes. Tableau de bord interactif pour les équipes business du service Techex.',
    tools: ['Power BI', 'Actuariat', 'KPIs', 'DAX'],
    github: null, demo: null,
  },
  {
    icon: '🤖',
    tag: 'Pro · Generali',
    category: 'pro',
    title: 'Robot UiPath (RPA)',
    description: 'Automatisation de la collecte de données sinistres et événements CAT (catastrophes naturelles) via une interface web. Le robot structure les données pour alimenter directement les outils de reporting.',
    tools: ['UiPath', 'RPA', 'Automatisation', 'Web'],
    github: null, demo: null,
  },
  {
    icon: '🌎',
    tag: 'École · Eugenia School',
    category: 'school',
    title: 'Dashboard Brésil E-commerce',
    description: 'Visualisation du marché e-commerce brésilien avec Tableau Public. Ventes par catégorie, tendances temporelles et KPIs clés. Données nettoyées et structurées avant import.',
    tools: ['Tableau', 'Data Viz', 'E-commerce'],
    github: null, demo: null,
  },
  {
    icon: '🎬',
    tag: 'École · Eugenia School',
    category: 'school',
    title: 'Mood Match',
    description: 'Chatbot de recommandation de films & séries selon l\'humeur. Scraping JustWatch : +6 500 titres (Netflix, Disney+, Prime Video, Canal+). 15h de scraping, gestion fine des différences HTML.',
    tools: ['Python', 'Web Scraping', 'NLP', 'BeautifulSoup'],
    github: null, demo: null,
  },
  {
    icon: '🎵',
    tag: 'École · Eugenia School',
    category: 'school',
    title: 'Chatbot Paroles (RAG)',
    description: 'L\'utilisateur saisit des paroles dont il se souvient, le système identifie le titre et l\'artiste via une architecture RAG avec recherche sémantique dans une base indexée.',
    tools: ['Python', 'RAG', 'Embeddings', 'Semantic Search'],
    github: null, demo: null,
  },
  {
    icon: '📍',
    tag: 'École · Eugenia School',
    category: 'school',
    title: 'Together',
    description: 'App mobile-first de sorties entre amis. Chat temps réel, système de vote, carte géolocalisée, suggestions IA, feed social avec stories. Stack Next.js + Supabase, déployée sur Vercel.',
    tools: ['Next.js', 'Supabase', 'IA', 'Vercel', 'Maps'],
    github: null, demo: null,
  },
];

function renderProjects(filter = 'all') {
  const grid = document.getElementById('projectsGrid');
  const filtered = filter === 'all' ? projects : projects.filter(p => p.category === filter);

  grid.innerHTML = filtered.map(p => `
    <article class="glass-card project-card" data-category="${p.category}">
      <div class="project-card__icon">${p.icon}</div>
      <span class="project-card__tag">${p.tag}</span>
      <h3>${p.title}</h3>
      <p>${p.description}</p>
      <div class="project-card__chips">
        ${p.tools.map(t => `<span class="project-chip">${t}</span>`).join('')}
      </div>
      ${(p.github || p.demo) ? `
      <div class="project-card__links">
        ${p.github ? `<a href="${p.github}" target="_blank" rel="noopener">GitHub →</a>` : ''}
        ${p.demo   ? `<a href="${p.demo}"   target="_blank" rel="noopener">Démo →</a>`   : ''}
      </div>` : ''}
    </article>
  `).join('');

  document.querySelectorAll('.project-card').forEach(observeReveal);
  initTilt();
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
