export const SITE_INFO = {
  name: 'Pain+',
  tagline: 'Transforming Mental Wellness Through Art',
  subtitle: 'AI-Powered Art Therapy Platform',
  email: 'contact@painplus.com',
  phone: '(555) 123-4567',
  location: 'San Francisco, CA',
} as const;

export const HOME_CONTENT = {
  hero: {
    title: 'Transforming Mental Wellness Through Art',
    subtitle: 'AI-Powered Art Therapy Platform',
    cta: 'Get Started',
  },
  problem: {
    title: 'Traditional therapy lacks accessibility and personalized creative expression',
    description:
      'Many individuals seeking mental health support face barriers to accessing quality therapeutic services.',
  },
  features: [
    {
      title: 'Identify Clients',
      description: 'AI-powered assessment tools help identify individuals who can benefit from art therapy',
      icon: 'Users',
    },
    {
      title: 'Guide Sessions',
      description: 'Personalized art therapy plans tailored to each client\'s unique needs and goals',
      icon: 'Target',
    },
    {
      title: 'Empower Therapists',
      description: 'Advanced tools and resources to support creative therapeutic expression',
      icon: 'Sparkles',
    },
    {
      title: 'Measure Impact',
      description: 'Track therapeutic progress with data-driven insights and measurable outcomes',
      icon: 'BarChart',
    },
  ],
} as const;

export const HOW_IT_WORKS_CONTENT = {
  hero: {
    title: 'How It Works',
    subtitle: 'Our AI-powered platform in three simple steps',
  },
  steps: [
    {
      number: 1,
      title: 'Client Assessment',
      description:
        'Our AI analyzes client needs, preferences, and therapeutic goals to create a personalized art therapy profile. We identify the most effective creative approaches for each individual.',
      icon: 'ClipboardCheck',
    },
    {
      number: 2,
      title: 'Personalized Sessions',
      description:
        'Receive customized art therapy session plans with guided activities, creative prompts, and therapeutic exercises tailored to your clients. Our platform adapts to their progress in real-time.',
      icon: 'Palette',
    },
    {
      number: 3,
      title: 'Progress Tracking',
      description:
        'Monitor therapeutic outcomes with comprehensive analytics. Track emotional wellness indicators, creative expression patterns, and therapeutic milestones over time.',
      icon: 'TrendingUp',
    },
  ],
  cta: {
    title: 'Ready to transform your practice?',
    button: 'Request a Demo',
  },
} as const;

export const ABOUT_CONTENT = {
  hero: {
    title: 'About Us',
    subtitle: 'Pioneering the future of mental wellness through creative expression',
  },
  mission: {
    title: 'Our Mission',
    content:
      'At Pain+, we believe in democratizing access to quality art therapy through innovative AI-powered tools. Our mission is to empower therapists and individuals to harness the transformative power of creative expression for mental wellness.',
  },
  vision: {
    title: 'Our Vision',
    content:
      'We envision a world where everyone has access to personalized, effective art therapy that adapts to their unique needs and promotes lasting mental health outcomes.',
  },
  values: {
    title: 'Our Values',
    items: [
      'Innovation in therapeutic technology',
      'Accessibility for all',
      'Evidence-based approaches',
      'Human-centered design',
    ],
  },
  team: [
    {
      name: 'Dr. Sarah Chen',
      role: 'Founder & CEO',
      bio: 'Licensed art therapist with 15+ years of experience in clinical practice and mental health technology.',
    },
    {
      name: 'Dr. Michael Rodriguez',
      role: 'Chief Clinical Officer',
      bio: 'Board-certified psychiatrist specializing in integrative approaches to mental wellness.',
    },
    {
      name: 'Emily Thompson',
      role: 'Head of Technology',
      bio: 'AI/ML engineer passionate about applying technology to solve healthcare challenges.',
    },
  ],
} as const;

export const CONTACT_CONTENT = {
  hero: {
    title: 'Request a Demo',
    subtitle: 'Get in touch to learn how Pain+ can transform your practice',
  },
  form: {
    title: 'Send us a message',
    fields: {
      name: 'Full Name',
      email: 'Email Address',
      organization: 'Organization',
      role: 'Role',
      message: 'Message',
    },
    roles: [
      'Therapist',
      'Healthcare Administrator',
      'Researcher',
      'Student',
      'Other',
    ],
    submit: 'Send Message',
    success: 'Thank you! We\'ll be in touch soon.',
  },
  info: {
    title: 'Contact Information',
    email: SITE_INFO.email,
    phone: SITE_INFO.phone,
    location: SITE_INFO.location,
  },
} as const;
