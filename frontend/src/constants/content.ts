export const SITE_INFO = {
  name: 'PAin+',
  tagline:
    'Redefining how the world treats and communicates about chronic pain',
  subtitle:
    'Evidence-based, emotionally intelligent tools for chronic pain management',
  email: 'hannah.derue@mcgill.ca',
  phone: '',
  location: 'Montreal, QC',
  linkedin: 'https://www.linkedin.com/company/painplus',
} as const;

export const HOME_CONTENT = {
  hero: {
    title: 'Transforming Mental Wellness Through Art',
    subtitle: 'AI-Powered Art Therapy Platform',
    cta: 'Get Started',
  },
  problem: {
    title:
      'Traditional therapy lacks accessibility and personalized creative expression',
    description:
      'Many individuals seeking mental health support face barriers to accessing quality therapeutic services.',
  },
  features: [
    {
      title: 'Identify Clients',
      description:
        'AI-powered assessment tools help identify individuals who can benefit from art therapy',
      icon: 'Users',
    },
    {
      title: 'Guide Sessions',
      description:
        "Personalized art therapy plans tailored to each client's unique needs and goals",
      icon: 'Target',
    },
    {
      title: 'Empower Therapists',
      description:
        'Advanced tools and resources to support creative therapeutic expression',
      icon: 'Sparkles',
    },
    {
      title: 'Measure Impact',
      description:
        'Track therapeutic progress with data-driven insights and measurable outcomes',
      icon: 'BarChart',
    },
  ],
} as const;

export const HOW_IT_WORKS_CONTENT = {
  hero: {
    title: 'How It Works',
    subtitle: 'Transform your pain management journey in four steps',
  },
  steps: [
    {
      number: 1,
      title: 'Express Your Pain',
      description:
        "Describe how your pain feels using your own words. Whether it's sharp, throbbing, burning, or something entirely unique - our platform captures your experience.",
      icon: 'Pencil',
      image: '/enter_pain_desc.png',
    },
    {
      number: 2,
      title: 'Visualize Your Experience',
      description:
        "Our AI transforms your description into visual art using the National Gallery of Art's collection. See your pain represented through powerful imagery that communicates what words cannot.",
      icon: 'Sparkles',
      image: '/image_visualization.png',
    },
    {
      number: 3,
      title: 'Journal Your Daily Experience',
      description:
        'Record your daily thoughts, feelings, and pain experiences. Our smart journaling system captures the nuances of your journey in your own words.',
      icon: 'BookOpen',
      image: '/pain_journal.png',
    },
    {
      number: 4,
      title: 'Track Progress & Get AI Insights',
      description:
        'Visualize your pain patterns over time with comprehensive analytics. Our AI analyzes your journal entries and pain data to provide personalized tips and insights.',
      icon: 'LineChart',
      images: ['/weekly_overview_chart.png', '/ai_insights.png'],
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
    subtitle:
      'From pain research to real-world relief – powered by the voices of those with lived experience',
  },
  story: {
    title: 'Our Story',
    content:
      'Based on her own experience living with chronic migraines and pelvic pain, founder Hannah Derue (PhD Candidate in Neuroscience at McGill University) founded PAin+. PAin+ is a software program that translates decades of pain science into accessible digital tools that help people better understand, express, and manage their pain. Our company prioritizes the voices of members of the chronic pain community, positioning them as leaders in our future direction. PAin+ sits at the intersection of art, neuroscience, and machine learning, transforming how chronic pain information is communicated, interpreted, and treated — from the research bench to the bedside.',
  },
  mission: {
    title: 'Mission Statement',
    content:
      'At PAin+, we aim to redefine how the world treats and communicates about chronic pain. Our mission is to empower individuals and clinicians through evidence-based, emotionally intelligent tools that make the invisible experience of pain both visible and actionable.',
    belief:
      'We believe that effective pain management begins with effective communication — and that enhanced communication promotes:',
    benefits: [
      'Clinically proven beneficial mindfulness practices',
      'More informed clinician decision making',
    ],
  },
  teamIntro: {
    title: 'Our Team',
    subtitle:
      'The scientific evidence is overwhelming – Chronic pain management at its finest is interdisciplinary.',
    description:
      'Our team is built around this concept – with core team members sharing expertise in fundamental neuroscience, clinical pain management, mental health, user experience design, and machine learning.',
  },
  team: [
    {
      name: 'Hannah Derue',
      role: 'Founder & CEO',
      education: 'PhD Candidate in Neuroscience, McGill University',
      bio: 'Founder of PAin+ with lived experience of chronic migraines and pelvic pain. Translating pain science into accessible digital tools.',
      funFact: '',
      image: '/Hannah.jpg',
    },
    {
      name: 'Julien Hovan',
      role: 'Lead Software Developer',
      education: '',
      bio: 'Experience in Software and AI Engineering, loves NLP research and LLM Engineering.',
      funFact: '',
      image: '/Julien_headshot.png',
    },
    {
      name: 'Patrick Chen',
      role: 'Team Member',
      education: '',
      bio: 'Add description here',
      funFact: '',
      image: '',
    },
    {
      name: 'Georges Chartrand',
      role: 'Team Member',
      education: '',
      bio: 'Add description here',
      funFact: '',
      image: '',
    },
  ],
  collaboration: {
    title: 'Collaborations',
    subtitle: 'In partnership with',
    partner: {
      name: 'The National Gallery of Art',
      tagline: 'Creative expression as a vehicle for shared understanding',
      description:
        'Through a unique collaboration with the National Gallery of Art, we integrate visual storytelling and emotional interpretation into our pain management platform. Together, we explore how creative expression can become a form of therapy, insight, and connection.',
      videoPlaceholder: true,
      disclaimer:
        'The National Gallery of Art offers open access resources for research and development but does not endorse or promote products that may arise from the use of open access artworks from their gallery.',
    },
  },
} as const;

export const CONTACT_CONTENT = {
  hero: {
    title: 'Contact',
    subtitle: "We're building the future of pain care — join us.",
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
      'Clinician',
      'Researcher',
      'Patient/Individual',
      'Healthcare Administrator',
      'Media/Press',
      'Partner Organization',
      'Other',
    ],
    submit: 'Send Message',
    success: "Thank you! We'll be in touch soon.",
  },
  info: {
    title: 'Contact Information',
    email: SITE_INFO.email,
    phone: SITE_INFO.phone,
    location: SITE_INFO.location,
    linkedin: SITE_INFO.linkedin,
  },
  partnerships: {
    title: 'Media & Partnerships',
    description:
      'For collaborations, partnerships, or press inquiries, please reach out to:',
    email: SITE_INFO.email,
  },
} as const;

export const WAITLIST_CONTENT = {
  hero: {
    title: 'Join the Waitlist',
    subtitle:
      'Be among the first to experience the future of chronic pain management',
  },
  beta: {
    title: 'Exclusive Beta Access',
    description:
      'The first 100 people to register for our beta test will receive free lifetime access and join a community of individuals seeking to understand their chronic pain through a new lens and gain personalized insights for their wellbeing.',
  },
  form: {
    title: 'Secure Your Spot',
    description: 'Join the waitlist to get early access when we launch.',
    fields: {
      name: 'Full Name',
      email: 'Email Address',
      phone: 'Phone Number (optional)',
    },
    submit: 'Join the Waitlist',
    submitting: 'Joining...',
    success: "You're on the list!",
    successMessage:
      "Thank you for joining! We'll notify you as soon as we're ready to launch.",
    alreadyRegistered: 'This email is already on the waitlist.',
  },
  benefits: {
    title: 'What You Get',
    items: [
      {
        icon: 'Sparkles',
        title: 'Lifetime Free Access',
        description:
          'First 100 members get permanent access to all premium features',
      },
      {
        icon: 'Users',
        title: 'Founding Community',
        description:
          'Join an exclusive community of early adopters and pain management pioneers',
      },
      {
        icon: 'Lightbulb',
        title: 'Early Insights',
        description:
          'Be the first to access personalized insights for your wellbeing journey',
      },
    ],
  },
} as const;
