export interface Article {
  id: string;
  title: string;
  category: 'Blog' | 'News' | 'Media';
  date: string;
  excerpt: string;
  logoColor: string;
  url?: string;
}

export const ARTICLES: Article[] = [
  {
    id: '4',
    title: 'McGill researcher teams up with U.S. art museum to enhance understanding of chronic pain',
    category: 'Media',
    date: 'October 30, 2025',
    excerpt:
      'Hannah Derue partners with the National Gallery of Art to develop PAin+, combining AI with digitized artwork to help individuals express and manage chronic pain.',
    logoColor: '#F0BEBA',
    url: 'https://reporter.mcgill.ca/mcgill-researcher-teams-up-with-u-s-art-museum-to-enhance-understanding-of-chronic-pain/',
  },
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
