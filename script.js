/* =============================================
   NAVIGATION — scroll effect + burger menu
   ============================================= */
const nav    = document.getElementById('nav');
const burger = document.getElementById('burger');
const links  = document.querySelector('.nav__links');

window.addEventListener('scroll', () => {
  nav.classList.toggle('scrolled', window.scrollY > 10);

  // Hide scroll hint after first scroll
  const hint = document.getElementById('scrollHint');
  if (hint) hint.style.opacity = window.scrollY > 60 ? '0' : '0.5';
});

burger.addEventListener('click', () => {
  links.classList.toggle('open');
});

// Close mobile menu on link click
links.querySelectorAll('a').forEach(a =>
  a.addEventListener('click', () => links.classList.remove('open'))
);

/* =============================================
   FADE-IN ON SCROLL
   ============================================= */
const observer = new IntersectionObserver(
  entries => entries.forEach(e => {
    if (e.isIntersecting) {
      e.target.classList.add('visible');
      observer.unobserve(e.target);
    }
  }),
  { threshold: 0.12 }
);

document.querySelectorAll('.section__title, .section__sub, .about__text, .about__skills, .project-card, .contact__inner')
  .forEach(el => {
    el.classList.add('fade-up');
    observer.observe(el);
  });

/* =============================================
   PROJECTS DATA — à compléter plus tard
   =============================================
   Pour ajouter un projet, décommente et duplique
   l'objet ci-dessous dans le tableau `projects`,
   puis appelle renderProjects().

const projects = [
  {
    icon: '💻',
    tag: 'École',
    title: 'Nom du projet',
    description: 'Courte description du projet.',
    github: 'https://github.com/...',
    demo: 'https://...',
  },
];

function renderProjects() {
  const grid = document.getElementById('projectsGrid');
  if (!projects.length) return;
  grid.innerHTML = projects.map(p => `
    <article class="project-card fade-up">
      <div class="project-card__icon">${p.icon}</div>
      <span class="project-card__tag">${p.tag}</span>
      <h3>${p.title}</h3>
      <p>${p.description}</p>
      <div class="project-card__links">
        ${p.github ? `<a href="${p.github}" target="_blank" rel="noopener">GitHub →</a>` : ''}
        ${p.demo   ? `<a href="${p.demo}"   target="_blank" rel="noopener">Démo →</a>` : ''}
      </div>
    </article>
  `).join('');

  grid.querySelectorAll('.fade-up').forEach(el => observer.observe(el));
}

renderProjects();
============================================= */
