import { Campaign, CampaignMediaItem } from '../types/campaign';

export interface InstagramReelItem {
  id: string;
  reelCode: string;
  title: string;
  category: string;
  embedUrl: string;
  externalUrl: string;
  aspectRatio: '9:16' | '4:5' | '1:1';
  coverImage: string;
}

export const INSTAGRAM_REELS_LIST: InstagramReelItem[] = [
  {
    id: 'reel-1',
    reelCode: 'DUGu1FSgQd3',
    title: 'Short-Form Creator Wellness & Daily Routine',
    category: 'Creative Production',
    embedUrl: 'https://www.instagram.com/reel/DUGu1FSgQd3/embed',
    externalUrl: 'https://www.instagram.com/reel/DUGu1FSgQd3/',
    aspectRatio: '9:16',
    coverImage: 'https://images.unsplash.com/photo-1517841905240-472988babdf9?auto=format&fit=crop&w=800&q=80'
  },
  {
    id: 'reel-2',
    reelCode: 'DX4zaGbmVva',
    title: 'Lifestyle Brand Drop & Visual Campaign',
    category: 'Creative Production',
    embedUrl: 'https://www.instagram.com/p/DX4zaGbmVva/embed',
    externalUrl: 'https://www.instagram.com/p/DX4zaGbmVva/',
    aspectRatio: '9:16',
    coverImage: 'https://images.unsplash.com/photo-1524504388940-b1c1722653e1?auto=format&fit=crop&w=800&q=80'
  },
  {
    id: 'reel-3',
    reelCode: 'DYVDMEGJieI',
    title: 'Interactive Q&A & Doctor-Patient Dialogue',
    category: 'Creative Production',
    embedUrl: 'https://www.instagram.com/p/DYVDMEGJieI/embed',
    externalUrl: 'https://www.instagram.com/p/DYVDMEGJieI/',
    aspectRatio: '9:16',
    coverImage: 'https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?auto=format&fit=crop&w=800&q=80'
  },
  {
    id: 'reel-4',
    reelCode: 'DVeOXQuj2pd',
    title: 'High-Retention Short-Form Creator Video',
    category: 'Social Media Management',
    embedUrl: 'https://www.instagram.com/reel/DVeOXQuj2pd/embed',
    externalUrl: 'https://www.instagram.com/reel/DVeOXQuj2pd/',
    aspectRatio: '9:16',
    coverImage: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?auto=format&fit=crop&w=800&q=80'
  },
  {
    id: 'reel-5',
    reelCode: 'DU1Nqkskqkv',
    title: 'Organic Creator Unboxing & Product Rituals',
    category: 'Social Media Management',
    embedUrl: 'https://www.instagram.com/reel/DU1Nqkskqkv/embed',
    externalUrl: 'https://www.instagram.com/reel/DU1Nqkskqkv/',
    aspectRatio: '9:16',
    coverImage: 'https://images.unsplash.com/photo-1522075469751-3a6694fb2f61?auto=format&fit=crop&w=800&q=80'
  },
  {
    id: 'reel-6',
    reelCode: 'DUthoHbEnjN',
    title: 'TikTok UGC & Skincare Transformation Series',
    category: 'Brand Development & Positioning',
    embedUrl: 'https://www.instagram.com/reel/DUthoHbEnjN/embed',
    externalUrl: 'https://www.instagram.com/reel/DUthoHbEnjN/',
    aspectRatio: '9:16',
    coverImage: 'https://images.unsplash.com/photo-1554151228-14d9def656e4?auto=format&fit=crop&w=800&q=80'
  },
  {
    id: 'reel-7',
    reelCode: 'DXztiY9hv9b',
    title: 'Clean Beauty Ingredient Transparency Showcase',
    category: 'Brand Development & Positioning',
    embedUrl: 'https://www.instagram.com/reel/DXztiY9hv9b/embed',
    externalUrl: 'https://www.instagram.com/reel/DXztiY9hv9b/',
    aspectRatio: '9:16',
    coverImage: 'https://images.unsplash.com/photo-1512496015851-a90fb38ba796?auto=format&fit=crop&w=800&q=80'
  },
  {
    id: 'reel-8',
    reelCode: 'Dbv5PohD_xq',
    title: 'Viral Product Unboxing & Lifestyle Reels',
    category: 'Creative Production',
    embedUrl: 'https://www.instagram.com/reel/Dbv5PohD_xq/embed',
    externalUrl: 'https://www.instagram.com/reel/Dbv5PohD_xq/',
    aspectRatio: '9:16',
    coverImage: 'https://images.unsplash.com/photo-1494790108377-be9c29b29330?auto=format&fit=crop&w=800&q=80'
  },
  {
    id: 'reel-9',
    reelCode: 'DYIBFIvxoZ5',
    title: 'Authentic Creator Seeding & Daily Vlogs',
    category: 'Creative Production',
    embedUrl: 'https://www.instagram.com/reel/DYIBFIvxoZ5/embed',
    externalUrl: 'https://www.instagram.com/reel/DYIBFIvxoZ5/',
    aspectRatio: '9:16',
    coverImage: 'https://images.unsplash.com/photo-1539571696357-5a69c17a67c6?auto=format&fit=crop&w=800&q=80'
  },
  {
    id: 'reel-10',
    reelCode: 'DYfk-fkvdPr',
    title: 'Pharma-Compliant Educational Reel',
    category: 'Creative Production',
    embedUrl: 'https://www.instagram.com/reel/DYfk-fkvdPr/embed',
    externalUrl: 'https://www.instagram.com/reel/DYfk-fkvdPr/',
    aspectRatio: '9:16',
    coverImage: 'https://images.unsplash.com/photo-1534528741775-53994a69daeb?auto=format&fit=crop&w=800&q=80'
  },
  {
    id: 'reel-11',
    reelCode: 'DcT9xV5l7pJ',
    title: 'Event Marketing & On-Site Activation Reel',
    category: 'Event Marketing',
    embedUrl: 'https://www.instagram.com/reel/DcT9xV5l7pJ/embed',
    externalUrl: 'https://www.instagram.com/reel/DcT9xV5l7pJ/',
    aspectRatio: '9:16',
    coverImage: 'https://images.unsplash.com/photo-1511578314322-379afb476865?auto=format&fit=crop&w=800&q=80'
  },
  {
    id: 'reel-12',
    reelCode: 'DHlx5PFPtud',
    title: 'Brand Positioning & Aesthetics Highlight',
    category: 'Brand Development & Positioning',
    embedUrl: 'https://www.instagram.com/p/DHlx5PFPtud/embed',
    externalUrl: 'https://www.instagram.com/p/DHlx5PFPtud/',
    aspectRatio: '9:16',
    coverImage: 'https://images.unsplash.com/photo-1488426862026-3ee34a7d66df?auto=format&fit=crop&w=800&q=80'
  },
  {
    id: 'reel-13',
    reelCode: 'DHWtKr1TMV9',
    title: 'Social Media Management & Strategy Drop',
    category: 'Social Media Management',
    embedUrl: 'https://www.instagram.com/p/DHWtKr1TMV9/embed',
    externalUrl: 'https://www.instagram.com/p/DHWtKr1TMV9/',
    aspectRatio: '9:16',
    coverImage: 'https://images.unsplash.com/photo-1517245386807-bb43f82c33c4?auto=format&fit=crop&w=800&q=80'
  },
  {
    id: 'reel-14',
    reelCode: 'DHCYNcfS6BJ',
    title: 'Community Engagement & Trend Storytelling',
    category: 'Social Media Management',
    embedUrl: 'https://www.instagram.com/p/DHCYNcfS6BJ/embed',
    externalUrl: 'https://www.instagram.com/p/DHCYNcfS6BJ/',
    aspectRatio: '9:16',
    coverImage: 'https://images.unsplash.com/photo-1529156069898-49953e39b3ac?auto=format&fit=crop&w=800&q=80'
  },
  {
    id: 'reel-15',
    reelCode: 'DGl546eOni9',
    title: 'Creative Campaign Reel & Visual Production',
    category: 'Creative Production',
    embedUrl: 'https://www.instagram.com/p/DGl546eOni9/embed',
    externalUrl: 'https://www.instagram.com/p/DGl546eOni9/',
    aspectRatio: '9:16',
    coverImage: 'https://images.unsplash.com/photo-1515378791036-0648a3ef77b2?auto=format&fit=crop&w=800&q=80'
  },
  {
    id: 'reel-16',
    reelCode: 'C3QIH4YMZBd',
    title: 'Serena Pitt × Lo Lo Estrin Fe Main Campaign Reel',
    category: 'Creative Production',
    embedUrl: 'https://www.instagram.com/p/C3QIH4YMZBd/embed',
    externalUrl: 'https://www.instagram.com/p/C3QIH4YMZBd/',
    aspectRatio: '9:16',
    coverImage: 'https://images.unsplash.com/photo-1573497019940-1c28c88b4f3e?auto=format&fit=crop&w=800&q=80'
  }
];

export const INITIAL_CAMPAIGNS: Campaign[] = [
  {
    id: 'lo-lo-estrin-fe',
    brand: 'Lo Lo Estrin Fe',
    title: 'Modern Women’s Health Awareness Campaign',
    category: 'Creative Production',
    isFeatured: true,
    collaboratorNames: ['Serena Pitt'],
    shortDescription: 'A modern birth control education campaign in partnership with Bachelor in Paradise star Serena Pitt, creating candid, relatable conversations around reproductive wellness.',
    fullDescription: 'Lo Lo Estrin Fe partnered with Breakpoint Social to conceptualize and execute a high-engagement, compliant creator campaign featuring lifestyle tastemaker Serena Pitt. The campaign was built to demystify oral contraceptive choices through genuine, relatable daily routines and approachable reproductive health dialogues tailored for Gen Z and Millennial audiences on TikTok and Instagram.',
    objective: 'To normalize candid conversations about birth control options, dispel common prescription myths, and guide prospective patients toward informed discussions with their healthcare providers.',
    creativeApproach: 'Leveraging Serena Pitt’s authentic lifestyle presence to integrate discussions about daily wellness routines, honest OB/GYN experiences, and low-dose prescription information naturally into short-form video content.',
    servicesProvided: [
      'Short-Form Video Production',
      'Pharma-Compliant Creative Production',
      'Creative Concepting & Talent Alignment',
      'Creator Briefing & FTC/FDA Guideline Governance',
      'Paid Social Amplification & Whitelisting'
    ],
    publicationStatus: 'client_review',
    displayOrder: 1,
    clientNotes: 'Featured campaign featuring 4 active Instagram Reels from client provided list.',
    dateCreated: '2025-06',
    thumbnail: {
      type: 'instagram',
      aspectRatio: '9:16',
      isPlaceholder: false,
      placeholderLabel: 'Lo Lo Estrin Fe × Serena Pitt · Live Instagram Reel'
    },
    metrics: undefined,
    mediaGallery: [
      {
        id: 'lo-lo-ex-1',
        type: 'instagram',
        title: 'Creative Example 1: Serena Pitt × Lo Lo Estrin Fe Main Reel',
        aspectRatio: '9:16',
        exampleNumber: 1,
        collaborator: 'Serena Pitt',
        poster: 'https://images.unsplash.com/photo-1573497019940-1c28c88b4f3e?auto=format&fit=crop&w=800&q=80',
        embedUrl: 'https://www.instagram.com/p/C3QIH4YMZBd/embed',
        externalUrl: 'https://www.instagram.com/p/C3QIH4YMZBd/',
        src: 'https://www.instagram.com/p/C3QIH4YMZBd/',
        isPlaceholder: false,
        caption: 'Serena Pitt walking through her daily wellness routine and sharing an honest perspective on finding the birth control that fits her body.'
      },
      {
        id: 'lo-lo-ex-2',
        type: 'instagram',
        title: 'Creative Example 2: Short-Form Creator Wellness & Daily Routine',
        aspectRatio: '9:16',
        exampleNumber: 2,
        collaborator: 'Serena Pitt',
        poster: 'https://images.unsplash.com/photo-1517841905240-472988babdf9?auto=format&fit=crop&w=800&q=80',
        embedUrl: 'https://www.instagram.com/reel/DUGu1FSgQd3/embed',
        externalUrl: 'https://www.instagram.com/reel/DUGu1FSgQd3/',
        src: 'https://www.instagram.com/reel/DUGu1FSgQd3/',
        isPlaceholder: false,
        caption: 'Candid wellness routine integration highlighting daily consistency and patient confidence.'
      },
      {
        id: 'lo-lo-ex-3',
        type: 'instagram',
        title: 'Creative Example 3: Lifestyle Brand Drop & Visual Campaign',
        aspectRatio: '9:16',
        exampleNumber: 3,
        collaborator: 'Serena Pitt',
        poster: 'https://images.unsplash.com/photo-1524504388940-b1c1722653e1?auto=format&fit=crop&w=800&q=80',
        embedUrl: 'https://www.instagram.com/p/DX4zaGbmVva/embed',
        externalUrl: 'https://www.instagram.com/p/DX4zaGbmVva/',
        src: 'https://www.instagram.com/p/DX4zaGbmVva/',
        isPlaceholder: false,
        caption: 'Editorial social photography and video series emphasizing balance and health autonomy.'
      },
      {
        id: 'lo-lo-ex-4',
        type: 'instagram',
        title: 'Creative Example 4: Interactive Q&A & Doctor Dialogue',
        aspectRatio: '9:16',
        exampleNumber: 4,
        collaborator: 'Serena Pitt',
        poster: 'https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?auto=format&fit=crop&w=800&q=80',
        embedUrl: 'https://www.instagram.com/p/DYVDMEGJieI/embed',
        externalUrl: 'https://www.instagram.com/p/DYVDMEGJieI/',
        src: 'https://www.instagram.com/p/DYVDMEGJieI/',
        isPlaceholder: false,
        caption: 'Digestible educational breakdown answering key questions about prescription options.'
      }
    ]
  },
  {
    id: 'creative-reels-collection-1',
    brand: 'Breakpoint Creative Reels',
    title: 'Short-Form Video Production & Creator Activations',
    category: 'Creative Production',
    shortDescription: 'High-performing short-form Instagram Reels created by Breakpoint Social to drive organic reach and brand engagement.',
    fullDescription: 'A curated showcase of short-form video creative, UGC reels, and influencer partnership content engineered specifically for Instagram Reels & TikTok algorithms.',
    objective: 'Drive maximal organic view duration, shares, and audience retention through authentic short-form video storytelling.',
    creativeApproach: 'Mobile-first 9:16 vertical storytelling combining high-energy hooks, aesthetic visuals, and relatable commentary.',
    servicesProvided: [
      'Short-Form Video Production',
      'Creator Casting & Briefing',
      'Vertical Reel Editing',
      'Paid & Organic Social Amplification'
    ],
    publicationStatus: 'published',
    displayOrder: 2,
    dateCreated: '2025-07',
    thumbnail: {
      type: 'instagram',
      aspectRatio: '9:16',
      isPlaceholder: false,
      placeholderLabel: 'Creative Production Reels'
    },
    metrics: undefined,
    mediaGallery: [
      {
        id: 'reel-gal-1',
        type: 'instagram',
        title: 'High-Retention Short-Form Creator Video',
        aspectRatio: '9:16',
        poster: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?auto=format&fit=crop&w=800&q=80',
        embedUrl: 'https://www.instagram.com/reel/DVeOXQuj2pd/embed',
        externalUrl: 'https://www.instagram.com/reel/DVeOXQuj2pd/',
        src: 'https://www.instagram.com/reel/DVeOXQuj2pd/',
        isPlaceholder: false,
        caption: 'High retention vertical reel for organic social reach.'
      },
      {
        id: 'reel-gal-2',
        type: 'instagram',
        title: 'Organic Creator Unboxing & Product Rituals',
        aspectRatio: '9:16',
        poster: 'https://images.unsplash.com/photo-1522075469751-3a6694fb2f61?auto=format&fit=crop&w=800&q=80',
        embedUrl: 'https://www.instagram.com/reel/DU1Nqkskqkv/embed',
        externalUrl: 'https://www.instagram.com/reel/DU1Nqkskqkv/',
        src: 'https://www.instagram.com/reel/DU1Nqkskqkv/',
        isPlaceholder: false,
        caption: 'Unstaged product unboxing and daily routine integration.'
      },
      {
        id: 'reel-gal-3',
        type: 'instagram',
        title: 'TikTok UGC & Skincare Transformation Series',
        aspectRatio: '9:16',
        poster: 'https://images.unsplash.com/photo-1554151228-14d9def656e4?auto=format&fit=crop&w=800&q=80',
        embedUrl: 'https://www.instagram.com/reel/DUthoHbEnjN/embed',
        externalUrl: 'https://www.instagram.com/reel/DUthoHbEnjN/',
        src: 'https://www.instagram.com/reel/DUthoHbEnjN/',
        isPlaceholder: false,
        caption: 'Authentic creator skincare transformation reel.'
      },
      {
        id: 'reel-gal-4',
        type: 'instagram',
        title: 'Clean Beauty Ingredient Transparency Showcase',
        aspectRatio: '9:16',
        poster: 'https://images.unsplash.com/photo-1512496015851-a90fb38ba796?auto=format&fit=crop&w=800&q=80',
        embedUrl: 'https://www.instagram.com/reel/DXztiY9hv9b/embed',
        externalUrl: 'https://www.instagram.com/reel/DXztiY9hv9b/',
        src: 'https://www.instagram.com/reel/DXztiY9hv9b/',
        isPlaceholder: false,
        caption: 'Ingredient breakdown visual series for Gen Z audiences.'
      }
    ]
  },
  {
    id: 'creative-reels-collection-2',
    brand: 'Social Media Management',
    title: 'Brand Growth & Viral Content Strategy',
    category: 'Social Media Management',
    shortDescription: 'Data-backed content strategies and trend-jacking reels engineered to build active brand communities on Instagram.',
    fullDescription: 'Comprehensive social media management deliverables showing how Breakpoint Social transforms brand aesthetic into consistent, viral social presence.',
    objective: 'Elevate brand recall, establish consistent posting rhythm, and grow active follower community.',
    creativeApproach: 'Pairing aesthetic grid styling with high-converting short-form video hooks.',
    servicesProvided: [
      'Social Media Management',
      'Content Calendar Execution',
      'Community Management',
      'Analytics & Growth Reporting'
    ],
    publicationStatus: 'published',
    displayOrder: 3,
    dateCreated: '2025-07',
    thumbnail: {
      type: 'instagram',
      aspectRatio: '9:16',
      isPlaceholder: false,
      placeholderLabel: 'Social Management Showcase'
    },
    metrics: undefined,
    mediaGallery: [
      {
        id: 'reel-gal-5',
        type: 'instagram',
        title: 'Viral Product Unboxing & Lifestyle Reels',
        aspectRatio: '9:16',
        poster: 'https://images.unsplash.com/photo-1494790108377-be9c29b29330?auto=format&fit=crop&w=800&q=80',
        embedUrl: 'https://www.instagram.com/reel/Dbv5PohD_xq/embed',
        externalUrl: 'https://www.instagram.com/reel/Dbv5PohD_xq/',
        src: 'https://www.instagram.com/reel/Dbv5PohD_xq/',
        isPlaceholder: false,
        caption: 'Viral unboxing experience designed for high click-through.'
      },
      {
        id: 'reel-gal-6',
        type: 'instagram',
        title: 'Authentic Creator Seeding & Daily Vlogs',
        aspectRatio: '9:16',
        poster: 'https://images.unsplash.com/photo-1539571696357-5a69c17a67c6?auto=format&fit=crop&w=800&q=80',
        embedUrl: 'https://www.instagram.com/reel/DYIBFIvxoZ5/embed',
        externalUrl: 'https://www.instagram.com/reel/DYIBFIvxoZ5/',
        src: 'https://www.instagram.com/reel/DYIBFIvxoZ5/',
        isPlaceholder: false,
        caption: 'Creator vlog seeding series driving organic brand advocacy.'
      },
      {
        id: 'reel-gal-7',
        type: 'instagram',
        title: 'Pharma-Compliant Educational Reel',
        aspectRatio: '9:16',
        poster: 'https://images.unsplash.com/photo-1534528741775-53994a69daeb?auto=format&fit=crop&w=800&q=80',
        embedUrl: 'https://www.instagram.com/reel/DYfk-fkvdPr/embed',
        externalUrl: 'https://www.instagram.com/reel/DYfk-fkvdPr/',
        src: 'https://www.instagram.com/reel/DYfk-fkvdPr/',
        isPlaceholder: false,
        caption: 'Compliant educational breakdown video for health brands.'
      },
      {
        id: 'reel-gal-8',
        type: 'instagram',
        title: 'Event Marketing & On-Site Activation Reel',
        aspectRatio: '9:16',
        poster: 'https://images.unsplash.com/photo-1511578314322-379afb476865?auto=format&fit=crop&w=800&q=80',
        embedUrl: 'https://www.instagram.com/reel/DcT9xV5l7pJ/embed',
        externalUrl: 'https://www.instagram.com/reel/DcT9xV5l7pJ/',
        src: 'https://www.instagram.com/reel/DcT9xV5l7pJ/',
        isPlaceholder: false,
        caption: 'On-site live event recap and creator lounge activation.'
      }
    ]
  },
  {
    id: 'brand-positioning-reels',
    brand: 'Brand Development',
    title: 'Visual Identity & Content Positioning Showcase',
    category: 'Brand Development & Positioning',
    shortDescription: 'Elevating consumer brand perception through high-aesthetic storytelling and premium digital content creation.',
    fullDescription: 'Selected visual positioning projects demonstrating Breakpoint Social’s capabilities in brand strategy, creative direction, and campaign messaging.',
    objective: 'Re-position established and emerging DTC brands for modern Gen Z and Millennial audiences.',
    creativeApproach: 'Sleek visual hierarchy, cohesive color palettes, and elevated editorial tone across social touchpoints.',
    servicesProvided: [
      'Brand Strategy & Positioning',
      'Creative Direction',
      'Visual Asset Creation',
      'Social Style Guides'
    ],
    publicationStatus: 'published',
    displayOrder: 4,
    dateCreated: '2025-06',
    thumbnail: {
      type: 'instagram',
      aspectRatio: '9:16',
      isPlaceholder: false,
      placeholderLabel: 'Brand Positioning Showcase'
    },
    metrics: undefined,
    mediaGallery: [
      {
        id: 'reel-gal-9',
        type: 'instagram',
        title: 'Brand Positioning & Aesthetics Highlight',
        aspectRatio: '9:16',
        poster: 'https://images.unsplash.com/photo-1488426862026-3ee34a7d66df?auto=format&fit=crop&w=800&q=80',
        embedUrl: 'https://www.instagram.com/p/DHlx5PFPtud/embed',
        externalUrl: 'https://www.instagram.com/p/DHlx5PFPtud/',
        src: 'https://www.instagram.com/p/DHlx5PFPtud/',
        isPlaceholder: false,
        caption: 'Editorial brand visual direction showcasing product elegance.'
      },
      {
        id: 'reel-gal-10',
        type: 'instagram',
        title: 'Social Media Management & Strategy Drop',
        aspectRatio: '9:16',
        poster: 'https://images.unsplash.com/photo-1517245386807-bb43f82c33c4?auto=format&fit=crop&w=800&q=80',
        embedUrl: 'https://www.instagram.com/p/DHWtKr1TMV9/embed',
        externalUrl: 'https://www.instagram.com/p/DHWtKr1TMV9/',
        src: 'https://www.instagram.com/p/DHWtKr1TMV9/',
        isPlaceholder: false,
        caption: 'Strategic social content drop built for engagement.'
      },
      {
        id: 'reel-gal-11',
        type: 'instagram',
        title: 'Community Engagement & Trend Storytelling',
        aspectRatio: '9:16',
        poster: 'https://images.unsplash.com/photo-1529156069898-49953e39b3ac?auto=format&fit=crop&w=800&q=80',
        embedUrl: 'https://www.instagram.com/p/DHCYNcfS6BJ/embed',
        externalUrl: 'https://www.instagram.com/p/DHCYNcfS6BJ/',
        src: 'https://www.instagram.com/p/DHCYNcfS6BJ/',
        isPlaceholder: false,
        caption: 'Interactive social campaign fostering community conversation.'
      },
      {
        id: 'reel-gal-12',
        type: 'instagram',
        title: 'Creative Campaign Reel & Visual Production',
        aspectRatio: '9:16',
        poster: 'https://images.unsplash.com/photo-1515378791036-0648a3ef77b2?auto=format&fit=crop&w=800&q=80',
        embedUrl: 'https://www.instagram.com/p/DGl546eOni9/embed',
        externalUrl: 'https://www.instagram.com/p/DGl546eOni9/',
        src: 'https://www.instagram.com/p/DGl546eOni9/',
        isPlaceholder: false,
        caption: 'Full scale creative production campaign for social launch.'
      }
    ]
  }
];

export const CAMPAIGN_CATEGORIES = [
  'All Work',
  'Creative Production',
  'Social Media Management',
  'Brand Development & Positioning',
  'Event Marketing'
] as const;
