/* =============================================
   NAVIGATION — scroll effect + burger menu
   ============================================= */
const nav    = document.getElementById('nav');
const burger = document.getElementById('burger');
const links  = document.querySelector('.nav__links');

window.addEventListener('scroll', () => {
  nav.classList.toggle('scrolled', window.scrollY > 10);
  const hint = document.getElementById('scrollHint');
  if (hint) hint.style.opacity = window.scrollY > 60 ? '0' : '0.5';
});

burger.addEventListener('click', () => links.classList.toggle('open'));
links.querySelectorAll('a').forEach(a =>
  a.addEventListener('click', () => links.classList.remove('open'))
);

/* =============================================
   FADE-IN ON SCROLL
   ============================================= */
const observer = new IntersectionObserver(
  entries => entries.forEach(e => {
    if (e.isIntersecting) { e.target.classList.add('visible'); observer.unobserve(e.target); }
  }),
  { threshold: 0.1 }
);

function observeFade(el) { el.classList.add('fade-up'); observer.observe(el); }

document.querySelectorAll('.section__title, .section__sub, .about__text, .about__skills, .contact__inner')
  .forEach(observeFade);

/* =============================================
   PROJECTS DATA
   ============================================= */
const projects = [
  // ── PRO ─────────────────────────────────────
  {
    icon: '📊',
    tag: 'Pro · Generali',
    title: 'Dashboard Power BI',
    description: 'Pilotage de la performance technique actuarielle : suivi des portefeuilles, analyse des sinistres, évolution des primes. Tableau de bord interactif pour les équipes business du service Techex.',
    tools: ['Power BI', 'Actuariat', 'KPIs'],
    github: null,
    demo: null,
  },
  {
    icon: '🤖',
    tag: 'Pro · Generali',
    title: 'Robot UiPath (RPA)',
    description: 'Automatisation de la collecte de données de sinistres et d\'événements CAT (catastrophes naturelles) via une interface web. Le robot structure les données pour alimenter directement les outils de reporting.',
    tools: ['UiPath', 'RPA', 'Automatisation'],
    github: null,
    demo: null,
  },
  // ── ÉCOLE ───────────────────────────────────
  {
    icon: '🌎',
    tag: 'École · Eugenia School',
    title: 'Dashboard Brésil E-commerce',
    description: 'Visualisation du marché e-commerce brésilien avec Tableau Public. Ventes par catégorie, tendances temporelles et KPIs clés. Données nettoyées et structurées avant import.',
    tools: ['Tableau', 'Data Viz', 'E-commerce'],
    github: null,
    demo: null,
  },
  {
    icon: '🎬',
    tag: 'École · Eugenia School',
    title: 'Mood Match',
    description: 'Chatbot de recommandation de films & séries basé sur l\'humeur. Scraping de JustWatch : +6 500 titres (Netflix, Disney+, Prime Video, Canal+…). 15h de scraping et gestion fine des différences HTML.',
    tools: ['Python', 'Web Scraping', 'NLP'],
    github: null,
    demo: null,
  },
  {
    icon: '🎵',
    tag: 'École · Eugenia School',
    title: 'Chatbot Paroles (RAG)',
    description: 'L\'utilisateur saisit des paroles dont il se souvient et le système identifie le titre et l\'artiste. Architecture RAG avec recherche sémantique dans une base de données indexée.',
    tools: ['Python', 'RAG', 'Embeddings'],
    github: null,
    demo: null,
  },
  {
    icon: '📍',
    tag: 'École · Eugenia School',
    title: 'Together',
    description: 'Application mobile-first de sorties entre amis. Chat temps réel, système de vote, carte géolocalisée, suggestions de lieux par IA, feed social avec stories. Stack Next.js + Supabase, déployée sur Vercel.',
    tools: ['Next.js', 'Supabase', 'IA', 'Vercel'],
    github: null,
    demo: null,
  },
];

/* =============================================
   RENDER PROJECTS
   ============================================= */
function renderProjects() {
  const grid = document.getElementById('projectsGrid');
  grid.innerHTML = projects.map(p => `
    <article class="project-card">
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
        ${p.demo   ? `<a href="${p.demo}"   target="_blank" rel="noopener">Démo →</a>` : ''}
      </div>` : ''}
    </article>
  `).join('');

  grid.querySelectorAll('.project-card').forEach(observeFade);
}

renderProjects();
