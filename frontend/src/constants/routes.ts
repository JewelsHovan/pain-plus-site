export const ROUTES = {
  HOME: '/',
  HOW_IT_WORKS: '/how-it-works',
  ABOUT: '/about',
  NEWS_MEDIA: '/news-media',
  CONTACT: '/contact',
} as const;

export const NAV_LINKS = [
  { path: ROUTES.HOME, label: 'Home' },
  { path: ROUTES.HOW_IT_WORKS, label: 'How It Works' },
  { path: ROUTES.ABOUT, label: 'About' },
  { path: ROUTES.NEWS_MEDIA, label: 'News & Media' },
] as const;
