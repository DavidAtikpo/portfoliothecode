export const site = {
  name: 'The Code²',
  brandShort: 'Thecode2',
  title: 'The Code² — Développeur web',
  description:
    'Portfolio de Thecode2 : développement web moderne, interfaces responsive et applications Next.js.',
  email: 'contact@thecode2.dev',
  github: 'https://github.com/Thecode2',
  linkedin: 'https://linkedin.com/in/thecode2',
  locale: 'fr-FR',
} as const;

export const nav = [
  { href: '#accueil', label: 'Accueil' },
  { href: '#apropos', label: 'À propos' },
  { href: '#competences', label: 'Compétences' },
  { href: '#projets', label: 'Projets' },
  { href: '#contact', label: 'Contact' },
] as const;

export const heroSlides = [
  {
    title: 'Développeur web',
    subtitle: 'Je crée des sites modernes, accessibles et adaptés à tous les écrans.',
    cta: { label: 'Voir mes projets', href: '#projets' },
  },
  {
    title: 'Next.js · React · TypeScript',
    subtitle: 'Des interfaces soignées, un code clair et facile à maintenir.',
    cta: { label: 'Mes compétences', href: '#competences' },
  },
  {
    title: 'Travaillons ensemble',
    subtitle: 'Disponible pour des projets, stages ou collaborations.',
    cta: { label: 'Me contacter', href: '#contact' },
  },
] as const;

export const about = {
  paragraphs: [
    'Je suis Thecode2, développeur web passionné par la création d’expériences numériques claires, performantes et accessibles.',
    'J’aime transformer des idées en interfaces soignées — du prototype au déploiement — en m’appuyant sur des bases solides en HTML, CSS, JavaScript et l’écosystème React / Next.js.',
  ],
  highlights: [
    { label: 'Spécialité', value: 'Frontend & applications full-stack' },
    { label: 'Approche', value: 'Code propre, maintenable et documenté' },
    { label: 'Disponibilité', value: 'Projets, stages et collaborations' },
  ],
} as const;

export const skills = [
  {
    category: 'Frontend',
    items: ['Next.js', 'React', 'TypeScript', 'Tailwind CSS', 'HTML & CSS', 'Responsive design'],
  },
  {
    category: 'Backend & données',
    items: ['Node.js', 'API REST', 'Prisma', 'PostgreSQL', 'Authentification'],
  },
  {
    category: 'Outils & pratiques',
    items: ['Git & GitHub', 'Figma', 'SEO technique', 'Accessibilité', 'Déploiement Vercel'],
  },
] as const;

export type Project = {
  title: string;
  description: string;
  tags: string[];
  href?: string;
  featured?: boolean;
};

export const projects: Project[] = [
  {
    title: 'Plateforme formation IRATA',
    description:
      'Application Next.js : inscriptions, parcours stagiaires, espace admin et paiements pour un centre de formation cordiste.',
    tags: ['Next.js', 'TypeScript', 'Prisma', 'Tailwind'],
    featured: true,
  },
  {
    title: 'Sites vitrine & landing pages',
    description:
      'Pages rapides, SEO-friendly et design soigné pour présenter une activité ou un produit.',
    tags: ['Next.js', 'SEO', 'UI'],
    featured: true,
  },
  {
    title: 'Outils métier sur mesure',
    description:
      'Tableaux de bord, formulaires et automatisations adaptés aux processus des clients.',
    tags: ['React', 'API', 'PostgreSQL'],
  },
];

export const contact = {
  intro:
    'Un projet, un stage ou une collaboration ? Décrivez votre besoin — je vous réponds rapidement.',
  availability: 'Disponible pour missions freelance et projets long terme.',
} as const;
