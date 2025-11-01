export interface Article {
  id: string;
  title: string;
  category: 'Blog' | 'News' | 'Media';
  date: string;
  excerpt: string;
  logoColor: string;
}

export const ARTICLES: Article[] = [
  {
    id: '1',
    title: '$50,000 Ignite Neuro Commercialization Grant Awarded',
    category: 'News',
    date: 'Fall 2025',
    excerpt:
      'PAin+ has been recognized for excellence in translational neuroscience and digital therapeutics innovation.',
    logoColor: '#2E3780',
  },
  {
    id: '2',
    title: 'Collaboration with National Gallery of Art Announced',
    category: 'News',
    date: 'Spring 2025',
    excerpt:
      'Merging neuroscience and art to revolutionize how patients express and understand pain.',
    logoColor: '#FF7500',
  },
  {
    id: '3',
    title: 'McGill Innovation Prize Winner (CLIC)',
    category: 'News',
    date: 'Winter 2023',
    excerpt:
      'PAin+ receives early-stage funding to develop the world\'s first emotionally adaptive pain-tracking platform.',
    logoColor: '#F0BEBA',
  },
];
