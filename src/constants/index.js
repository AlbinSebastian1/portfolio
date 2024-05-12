import {
  frontend,
  backend,
  ux,
  prototyping,
  javascript,
  typescript,
  html,
  css,
  reactjs,
  redux,
  tailwind,
  nodejs,
  git,
  figma,
  docker,
  postgresql,
  rubyrails,
  graphql,
  komikult,
  leaderboard,
  math,
  movie,
  nyeusi,
  space,
  coverhunt,
  dcc,
  kelhel,
  microverse,
  clapboard,
  videocamara,
  videoedit,
  director,
  premierepro,
  aftereffects,
  photoshop,
  DavinciResolve,
  canva,
} from '../assets';

export const navLinks = [
  {
    id: 'about',
    title: 'About',
  },
  {
    id: 'projects',
    title: 'Projects',
  },
  {
    id: 'contact',
    title: 'Contact',
  },
];

const services = [
  {
    title: 'Direction',
    icon: clapboard,
  },
  {
    title: 'Cinemotography',
    icon: videocamara ,
  },
  {
    title: 'video editor',
    icon: videoedit,
  },
  // {
  //   title: 'Photo editor',
  //   icon: prototyping,
  // },
];

const technologies = [
  {
    name: 'Premiere Pro',
    icon: premierepro,
  },
  {
    name: 'After Effects',
    icon: aftereffects,
  },
  {
    name: 'Photo Shop',
    icon: photoshop,
  },
  {
    name: 'Davinci Resolve',
    icon: DavinciResolve,
  },
  {
    name: 'Canva',
    icon: canva,
  },

];

const experiences = [
  {
    title: 'Senior Video editor',
    company_name: 'Login 360',
    icon: coverhunt,
    iconBg: '#333333',
    date: 'Jan 2023 - Apr 2023',
  },
  {
    title: 'Senior Video editor',
    company_name: 'Studio Shades & Capturing Weddings',
    icon: microverse,
    iconBg: '#333333',
    date: 'Apr 2023 - Current',
  }
];

const projects = [
  {
    id: 'project-1',
    name: 'Donalt',
    description: 'Short Flim ',
    
    image: komikult,
    demo: 'https://youtu.be/NYRakFiMs0c?si=mYDfYxvmokg3lPoG',
  },
  {
    id: 'project-2',
    name: 'Kaili | Music Video',
    description:
      '2D Animation',
    image: leaderboard,
    demo: 'https://youtu.be/8wJschH7YzA?si=rmXUVoQYAk1xgM67',
  },
  {
    id: 'project-3',
    name: 'Micro Monetization ',
    description: 'Video Editing ',
    image: math,
    demo: 'https://youtu.be/UC1BIedIzw8?si=aXMpivZ8A8DKR-su',
  },
  {
    id: 'project-4',
    name: 'Doctors Anthem Music',
    description: `Assistant Direction `,
    image: movie,
    demo: 'https://youtu.be/jpsl3WasTp8?si=lxflxTNq8PU7kv8E',
  },
];

export { services, technologies, experiences, projects };
