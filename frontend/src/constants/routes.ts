export const ROUTES = {
  HOME: '/',
  HOW_IT_WORKS: '/how-it-works',
  ABOUT: '/about',
  NEWS_MEDIA: '/news-media',
  CONTACT: '/contact',
  WAITLIST: '/waitlist',
} as const;

export const NAV_LINKS = [
  { path: ROUTES.HOME, label: 'Home' },
  { path: ROUTES.ABOUT, label: 'About' },
  { path: ROUTES.HOW_IT_WORKS, label: 'How It Works' },
  { path: ROUTES.NEWS_MEDIA, label: 'News & Media' },
  { path: ROUTES.WAITLIST, label: 'Waitlist' },
] as const;
