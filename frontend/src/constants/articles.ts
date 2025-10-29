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
    title: 'How Art Therapy Transforms Mental Health: A Data-Driven Approach',
    category: 'Blog',
    date: 'September 10, 2024',
    excerpt:
      'Exploring the intersection of creative expression and mental wellness through our AI-powered platform.',
    logoColor: '#2E3780',
  },
  {
    id: '2',
    title: 'Art Therapy Plus Announces New AI Features for Personalized Treatment',
    category: 'News',
    date: 'August 22, 2024',
    excerpt:
      'Our latest update brings advanced machine learning capabilities to help therapists create more effective treatment plans.',
    logoColor: '#FF7500',
  },
  {
    id: '3',
    title: '5 Benefits of Digital Art Therapy for Modern Mental Healthcare',
    category: 'Blog',
    date: 'July 15, 2024',
    excerpt:
      'Discover how technology is making art therapy more accessible, measurable, and effective than ever before.',
    logoColor: '#F0BEBA',
  },
  {
    id: '4',
    title: 'Featured in TechCrunch: The Future of Therapy is Creative',
    category: 'Media',
    date: 'June 30, 2024',
    excerpt:
      'TechCrunch highlights Art Therapy Plus as a leader in mental health innovation.',
    logoColor: '#2E3780',
  },
  {
    id: '5',
    title: 'Art Therapy Plus Partners with Major Health Systems',
    category: 'News',
    date: 'June 18, 2024',
    excerpt:
      'Strategic partnerships bring our platform to healthcare providers nationwide.',
    logoColor: '#FF7500',
  },
  {
    id: '6',
    title: 'Understanding Pain Through Creative Expression: A Therapist\'s Guide',
    category: 'Blog',
    date: 'May 25, 2024',
    excerpt:
      'How art therapy helps patients process and transform emotional and physical pain.',
    logoColor: '#F0BEBA',
  },
  {
    id: '7',
    title: 'Research Study: Art Therapy Shows 78% Improvement in Patient Outcomes',
    category: 'News',
    date: 'May 10, 2024',
    excerpt:
      'New clinical research validates the effectiveness of our AI-assisted art therapy approach.',
    logoColor: '#2E3780',
  },
  {
    id: '8',
    title: 'Forbes Feature: How AI is Revolutionizing Mental Health Treatment',
    category: 'Media',
    date: 'April 28, 2024',
    excerpt:
      'Forbes explores how Art Therapy Plus combines artificial intelligence with creative therapeutic practices.',
    logoColor: '#FF7500',
  },
];
