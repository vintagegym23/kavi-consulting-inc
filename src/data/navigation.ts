export interface NavLink {
  name: string;
  path: string;
  label?: string; // For accessibility
}

export const navLinks: NavLink[] = [
  {
    name: 'Home',
    path: '/',
    label: 'Go to Home page'
  },
  {
    name: 'About Us',
    path: '/about',
    label: 'Learn about KAVI Consulting'
  },
  {
    name: 'Services',
    path: '/services',
    label: 'View our services'
  },
  {
    name: 'Projects',
    path: '/projects',
    label: 'View our project portfolio'
  },
  {
    name: 'Contact Us',
    path: '/contact',
    label: 'Get in touch with us'
  }
];
