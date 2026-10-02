import { Campaign, CampaignMediaItem } from '../types/campaign';

export interface InstagramReelItem {
  id: string;
  reelCode: string;
  title: string;
  category: string;
  videoUrl: string;
  posterUrl: string;
  talent?: string;
  format: string;
  description: string;
  aspectRatio: '9:16' | '4:5' | '1:1';
  coverImage: string;
  embedUrl?: string;
  externalUrl?: string;
}

export const INSTAGRAM_REELS_LIST: InstagramReelItem[] = [
  {
    id: 'reel-1',
    reelCode: 'DUGu1FSgQd3',
    title: 'Short-Form Creator Wellness & Daily Routine',
    category: 'Creative Production',
    videoUrl: '/videos/DUGu1FSgQd3.mp4',
    posterUrl: '/thumbnails/DUGu1FSgQd3.jpg',
    talent: 'Serena Pitt',
    format: '9:16 Vertical HD',
    description: 'Candid wellness routine integration highlighting daily consistency, lifestyle aesthetic, and patient confidence.',
    aspectRatio: '9:16',
    coverImage: '/thumbnails/DUGu1FSgQd3.jpg'
  },
  {
    id: 'reel-2',
    reelCode: 'DVeOXQuj2pd',
    title: 'High-Retention Short-Form Creator Video',
    category: 'Social Media Management',
    videoUrl: '/videos/DVeOXQuj2pd.mp4',
    posterUrl: '/thumbnails/DVeOXQuj2pd.jpg',
    talent: 'Serena Pitt',
    format: '9:16 Vertical HD',
    description: 'High-retention vertical creative deliverable engineered for audience watch time and relatable messaging.',
    aspectRatio: '9:16',
    coverImage: '/thumbnails/DVeOXQuj2pd.jpg'
  },
  {
    id: 'reel-3',
    reelCode: 'DU1Nqkskqkv',
    title: 'Organic Creator Unboxing & Product Rituals',
    category: 'Social Media Management',
    videoUrl: '/videos/DU1Nqkskqkv.mp4',
    posterUrl: '/thumbnails/DU1Nqkskqkv.jpg',
    talent: 'Breakpoint Creator Talent',
    format: '9:16 Vertical HD',
    description: 'Authentic creator unboxing sequence showcasing tactile product interactions and natural lifestyle integration.',
    aspectRatio: '9:16',
    coverImage: '/thumbnails/DU1Nqkskqkv.jpg'
  },
  {
    id: 'reel-4',
    reelCode: 'DUthoHbEnjN',
    title: 'TikTok UGC & Skincare Transformation Series',
    category: 'Brand Development & Positioning',
    videoUrl: '/videos/DUthoHbEnjN.mp4',
    posterUrl: '/thumbnails/DUthoHbEnjN.jpg',
    talent: 'Breakpoint Creator Talent',
    format: '9:16 Vertical HD',
    description: 'Day-to-day skincare routine narrative highlighting product application, authentic textures, and real results.',
    aspectRatio: '9:16',
    coverImage: '/thumbnails/DUthoHbEnjN.jpg'
  },
  {
    id: 'reel-5',
    reelCode: 'DXztiY9hv9b',
    title: 'Clean Beauty Ingredient Transparency Showcase',
    category: 'Brand Development & Positioning',
    videoUrl: '/videos/DXztiY9hv9b.mp4',
    posterUrl: '/thumbnails/DXztiY9hv9b.jpg',
    talent: 'Breakpoint Creator Talent',
    format: '9:16 Vertical HD',
    description: 'Informative short-form feature demystifying clean beauty ingredients with engaging visual pacing.',
    aspectRatio: '9:16',
    coverImage: '/thumbnails/DXztiY9hv9b.jpg'
  },
  {
    id: 'reel-6',
    reelCode: 'Dbv5PohD_xq',
    title: 'Viral Product Unboxing & Lifestyle Reels',
    category: 'Creative Production',
    videoUrl: '/videos/Dbv5PohD_xq.mp4',
    posterUrl: '/thumbnails/Dbv5PohD_xq.jpg',
    talent: 'Breakpoint Creator Talent',
    format: '9:16 Vertical HD',
    description: 'Dynamic unboxing and sensory unwrap moments crafted for high completion rate and brand recall.',
    aspectRatio: '9:16',
    coverImage: '/thumbnails/Dbv5PohD_xq.jpg'
  },
  {
    id: 'reel-7',
    reelCode: 'DYIBFIvxoZ5',
    title: 'Authentic Creator Seeding & Daily Vlogs',
    category: 'Creative Production',
    videoUrl: '/videos/DYIBFIvxoZ5.mp4',
    posterUrl: '/thumbnails/DYIBFIvxoZ5.jpg',
    talent: 'Breakpoint Creator Talent',
    format: '9:16 Vertical HD',
    description: 'Relatable lifestyle vlog format blending everyday creator moments with organic product placement.',
    aspectRatio: '9:16',
    coverImage: '/thumbnails/DYIBFIvxoZ5.jpg'
  },
  {
    id: 'reel-8',
    reelCode: 'DYfk-fkvdPr',
    title: 'Pharma-Compliant Educational Reel',
    category: 'Creative Production',
    videoUrl: '/videos/DYfk-fkvdPr.mp4',
    posterUrl: '/thumbnails/DYfk-fkvdPr.jpg',
    talent: 'Serena Pitt',
    format: '9:16 Vertical HD',
    description: 'FDA/FTC compliant educational dialogue breaking down reproductive healthcare topics with clarity and approachability.',
    aspectRatio: '9:16',
    coverImage: '/thumbnails/DYfk-fkvdPr.jpg'
  },
  {
    id: 'reel-9',
    reelCode: 'DcT9xV5l7pJ',
    title: 'Event Marketing & On-Site Activation Reel',
    category: 'Event Marketing',
    videoUrl: '/videos/DcT9xV5l7pJ.mp4',
    posterUrl: '/thumbnails/DcT9xV5l7pJ.jpg',
    talent: 'Breakpoint Event Team',
    format: '9:16 Vertical HD',
    description: 'High-energy on-site event recap highlighting immersive brand activations, creator lounges, and VIP reactions.',
    aspectRatio: '9:16',
    coverImage: '/thumbnails/DcT9xV5l7pJ.jpg'
  },
  {
    id: 'reel-10',
    reelCode: 'DHlx5PFPtud',
    title: 'Brand Positioning & Aesthetics Highlight',
    category: 'Brand Development & Positioning',
    videoUrl: '/videos/DHlx5PFPtud.mp4',
    posterUrl: '/thumbnails/DHlx5PFPtud.jpg',
    talent: 'Breakpoint Creative Direction',
    format: '9:16 Vertical HD',
    description: 'Editorial-grade visual direction showcasing product silhouettes, premium lighting, and luxury brand aesthetic.',
    aspectRatio: '9:16',
    coverImage: '/thumbnails/DHlx5PFPtud.jpg'
  },
  {
    id: 'reel-11',
    reelCode: 'DHWtKr1TMV9',
    title: 'Social Media Management & Strategy Drop',
    category: 'Social Media Management',
    videoUrl: '/videos/DHWtKr1TMV9.mp4',
    posterUrl: '/thumbnails/DHWtKr1TMV9.jpg',
    talent: 'Breakpoint Social Team',
    format: '9:16 Vertical HD',
    description: 'Strategic social content piece designed to spark community commentary and profile saves.',
    aspectRatio: '9:16',
    coverImage: '/thumbnails/DHWtKr1TMV9.jpg'
  },
  {
    id: 'reel-12',
    reelCode: 'DHCYNcfS6BJ',
    title: 'Community Engagement & Trend Storytelling',
    category: 'Social Media Management',
    videoUrl: '/videos/DHCYNcfS6BJ.mp4',
    posterUrl: '/thumbnails/DHCYNcfS6BJ.jpg',
    talent: 'Breakpoint Creator Talent',
    format: '9:16 Vertical HD',
    description: 'Trend-aware vertical storytelling turning consumer questions into engaging narrative touchpoints.',
    aspectRatio: '9:16',
    coverImage: '/thumbnails/DHCYNcfS6BJ.jpg'
  },
  {
    id: 'reel-13',
    reelCode: 'DGl546eOni9',
    title: 'Creative Campaign Reel & Visual Production',
    category: 'Creative Production',
    videoUrl: '/videos/DGl546eOni9.mp4',
    posterUrl: '/thumbnails/DGl546eOni9.jpg',
    talent: 'Breakpoint Production Crew',
    format: '9:16 Vertical HD',
    description: 'Full-scale agency studio production combining cinematic camera movements and high-fidelity sound design.',
    aspectRatio: '9:16',
    coverImage: '/thumbnails/DGl546eOni9.jpg'
  },
  {
    id: 'reel-14',
    reelCode: 'C3QIH4YMZBd',
    title: 'Serena Pitt × Lo Lo Estrin Fe Main Campaign Reel',
    category: 'Creative Production',
    videoUrl: '/videos/C3QIH4YMZBd.mp4',
    posterUrl: '/thumbnails/C3QIH4YMZBd.jpg',
    talent: 'Serena Pitt',
    format: '9:16 Vertical HD',
    description: 'Headline campaign deliverable featuring Serena Pitt candidly discussing contraceptive choices and daily wellness habits.',
    aspectRatio: '9:16',
    coverImage: '/thumbnails/C3QIH4YMZBd.jpg'
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
    clientNotes: 'Featured campaign featuring high-definition native vertical video deliverables.',
    dateCreated: '2025-06',
    thumbnail: {
      type: 'video',
      aspectRatio: '9:16',
      src: '/videos/C3QIH4YMZBd.mp4',
      isPlaceholder: false,
      placeholderLabel: 'Lo Lo Estrin Fe × Serena Pitt · Vertical Video Deliverable'
    },
    metrics: undefined,
    mediaGallery: [
      {
        id: 'lo-lo-ex-1',
        type: 'video',
        title: 'Creative Example 1: Serena Pitt × Lo Lo Estrin Fe Main Reel',
        aspectRatio: '9:16',
        exampleNumber: 1,
        collaborator: 'Serena Pitt',
        talent: 'Serena Pitt',
        format: '9:16 Vertical HD',
        videoUrl: '/videos/C3QIH4YMZBd.mp4',
        posterUrl: '/thumbnails/C3QIH4YMZBd.jpg',
        poster: '/thumbnails/C3QIH4YMZBd.jpg',
        src: '/videos/C3QIH4YMZBd.mp4',
        isPlaceholder: false,
        description: 'Serena Pitt walking through her daily wellness routine and sharing an honest perspective on finding the birth control that fits her body.',
        caption: 'Serena Pitt walking through her daily wellness routine and sharing an honest perspective on finding the birth control that fits her body.'
      },
      {
        id: 'lo-lo-ex-2',
        type: 'video',
        title: 'Creative Example 2: Short-Form Creator Wellness & Daily Routine',
        aspectRatio: '9:16',
        exampleNumber: 2,
        collaborator: 'Serena Pitt',
        talent: 'Serena Pitt',
        format: '9:16 Vertical HD',
        videoUrl: '/videos/DUGu1FSgQd3.mp4',
        posterUrl: '/thumbnails/DUGu1FSgQd3.jpg',
        poster: '/thumbnails/DUGu1FSgQd3.jpg',
        src: '/videos/DUGu1FSgQd3.mp4',
        isPlaceholder: false,
        description: 'Candid wellness routine integration highlighting daily consistency, lifestyle aesthetic, and patient confidence.',
        caption: 'Candid wellness routine integration highlighting daily consistency, lifestyle aesthetic, and patient confidence.'
      },
      {
        id: 'lo-lo-ex-3',
        type: 'video',
        title: 'Creative Example 3: Pharma-Compliant Educational Reel',
        aspectRatio: '9:16',
        exampleNumber: 3,
        collaborator: 'Serena Pitt',
        talent: 'Serena Pitt',
        format: '9:16 Vertical HD',
        videoUrl: '/videos/DYfk-fkvdPr.mp4',
        posterUrl: '/thumbnails/DYfk-fkvdPr.jpg',
        poster: '/thumbnails/DYfk-fkvdPr.jpg',
        src: '/videos/DYfk-fkvdPr.mp4',
        isPlaceholder: false,
        description: 'FDA/FTC compliant educational dialogue breaking down reproductive healthcare topics with clarity and approachability.',
        caption: 'FDA/FTC compliant educational dialogue breaking down reproductive healthcare topics with clarity and approachability.'
      },
      {
        id: 'lo-lo-ex-4',
        type: 'video',
        title: 'Creative Example 4: High-Retention Short-Form Creator Video',
        aspectRatio: '9:16',
        exampleNumber: 4,
        collaborator: 'Serena Pitt',
        talent: 'Serena Pitt',
        format: '9:16 Vertical HD',
        videoUrl: '/videos/DVeOXQuj2pd.mp4',
        posterUrl: '/thumbnails/DVeOXQuj2pd.jpg',
        poster: '/thumbnails/DVeOXQuj2pd.jpg',
        src: '/videos/DVeOXQuj2pd.mp4',
        isPlaceholder: false,
        description: 'High-retention vertical creative deliverable engineered for audience watch time and relatable messaging.',
        caption: 'High-retention vertical creative deliverable engineered for audience watch time and relatable messaging.'
      }
    ]
  },
  {
    id: 'creative-reels-collection-1',
    brand: 'Breakpoint Creative Reels',
    title: 'Short-Form Video Production & Creator Activations',
    category: 'Creative Production',
    shortDescription: 'High-performing short-form video deliverables created by Breakpoint Social to drive organic reach and brand engagement.',
    fullDescription: 'A curated showcase of short-form video creative, UGC deliverables, and creator partnership content engineered specifically for vertical video channels.',
    objective: 'Drive maximal organic view duration, shares, and audience retention through authentic short-form video storytelling.',
    creativeApproach: 'Mobile-first 9:16 vertical storytelling combining high-energy hooks, aesthetic visuals, and relatable commentary.',
    servicesProvided: [
      'Short-Form Video Production',
      'Creator Casting & Briefing',
      'Vertical Video Editing',
      'Paid & Organic Social Amplification'
    ],
    publicationStatus: 'published',
    displayOrder: 2,
    dateCreated: '2025-07',
    thumbnail: {
      type: 'video',
      aspectRatio: '9:16',
      src: '/videos/DU1Nqkskqkv.mp4',
      isPlaceholder: false,
      placeholderLabel: 'Creative Production Deliverables'
    },
    metrics: undefined,
    mediaGallery: [
      {
        id: 'reel-gal-1',
        type: 'video',
        title: 'Organic Creator Unboxing & Product Rituals',
        aspectRatio: '9:16',
        videoUrl: '/videos/DU1Nqkskqkv.mp4',
        posterUrl: '/thumbnails/DU1Nqkskqkv.jpg',
        poster: '/thumbnails/DU1Nqkskqkv.jpg',
        src: '/videos/DU1Nqkskqkv.mp4',
        talent: 'Breakpoint Creator Talent',
        format: '9:16 Vertical HD',
        description: 'Authentic creator unboxing sequence showcasing tactile product interactions and natural lifestyle integration.',
        caption: 'Authentic creator unboxing sequence showcasing tactile product interactions and natural lifestyle integration.',
        isPlaceholder: false
      },
      {
        id: 'reel-gal-2',
        type: 'video',
        title: 'TikTok UGC & Skincare Transformation Series',
        aspectRatio: '9:16',
        videoUrl: '/videos/DUthoHbEnjN.mp4',
        posterUrl: '/thumbnails/DUthoHbEnjN.jpg',
        poster: '/thumbnails/DUthoHbEnjN.jpg',
        src: '/videos/DUthoHbEnjN.mp4',
        talent: 'Breakpoint Creator Talent',
        format: '9:16 Vertical HD',
        description: 'Day-to-day skincare routine narrative highlighting product application, authentic textures, and real results.',
        caption: 'Day-to-day skincare routine narrative highlighting product application, authentic textures, and real results.',
        isPlaceholder: false
      },
      {
        id: 'reel-gal-3',
        type: 'video',
        title: 'Clean Beauty Ingredient Transparency Showcase',
        aspectRatio: '9:16',
        videoUrl: '/videos/DXztiY9hv9b.mp4',
        posterUrl: '/thumbnails/DXztiY9hv9b.jpg',
        poster: '/thumbnails/DXztiY9hv9b.jpg',
        src: '/videos/DXztiY9hv9b.mp4',
        talent: 'Breakpoint Creator Talent',
        format: '9:16 Vertical HD',
        description: 'Informative short-form feature demystifying clean beauty ingredients with engaging visual pacing.',
        caption: 'Informative short-form feature demystifying clean beauty ingredients with engaging visual pacing.',
        isPlaceholder: false
      },
      {
        id: 'reel-gal-4',
        type: 'video',
        title: 'Viral Product Unboxing & Lifestyle Reels',
        aspectRatio: '9:16',
        videoUrl: '/videos/Dbv5PohD_xq.mp4',
        posterUrl: '/thumbnails/Dbv5PohD_xq.jpg',
        poster: '/thumbnails/Dbv5PohD_xq.jpg',
        src: '/videos/Dbv5PohD_xq.mp4',
        talent: 'Breakpoint Creator Talent',
        format: '9:16 Vertical HD',
        description: 'Dynamic unboxing and sensory unwrap moments crafted for high completion rate and brand recall.',
        caption: 'Dynamic unboxing and sensory unwrap moments crafted for high completion rate and brand recall.',
        isPlaceholder: false
      }
    ]
  },
  {
    id: 'creative-reels-collection-2',
    brand: 'Social Media Management',
    title: 'Brand Growth & Viral Content Strategy',
    category: 'Social Media Management',
    shortDescription: 'Data-backed content strategies and trend-responsive deliverables engineered to build active brand communities.',
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
      type: 'video',
      aspectRatio: '9:16',
      src: '/videos/DYIBFIvxoZ5.mp4',
      isPlaceholder: false,
      placeholderLabel: 'Social Management Showcase'
    },
    metrics: undefined,
    mediaGallery: [
      {
        id: 'reel-gal-5',
        type: 'video',
        title: 'Authentic Creator Seeding & Daily Vlogs',
        aspectRatio: '9:16',
        videoUrl: '/videos/DYIBFIvxoZ5.mp4',
        posterUrl: '/thumbnails/DYIBFIvxoZ5.jpg',
        poster: '/thumbnails/DYIBFIvxoZ5.jpg',
        src: '/videos/DYIBFIvxoZ5.mp4',
        talent: 'Breakpoint Creator Talent',
        format: '9:16 Vertical HD',
        description: 'Relatable lifestyle vlog format blending everyday creator moments with organic product placement.',
        caption: 'Relatable lifestyle vlog format blending everyday creator moments with organic product placement.',
        isPlaceholder: false
      },
      {
        id: 'reel-gal-6',
        type: 'video',
        title: 'Event Marketing & On-Site Activation Reel',
        aspectRatio: '9:16',
        videoUrl: '/videos/DcT9xV5l7pJ.mp4',
        posterUrl: '/thumbnails/DcT9xV5l7pJ.jpg',
        poster: '/thumbnails/DcT9xV5l7pJ.jpg',
        src: '/videos/DcT9xV5l7pJ.mp4',
        talent: 'Breakpoint Event Team',
        format: '9:16 Vertical HD',
        description: 'High-energy on-site event recap highlighting immersive brand activations, creator lounges, and VIP reactions.',
        caption: 'High-energy on-site event recap highlighting immersive brand activations, creator lounges, and VIP reactions.',
        isPlaceholder: false
      },
      {
        id: 'reel-gal-7',
        type: 'video',
        title: 'Brand Positioning & Aesthetics Highlight',
        aspectRatio: '9:16',
        videoUrl: '/videos/DHlx5PFPtud.mp4',
        posterUrl: '/thumbnails/DHlx5PFPtud.jpg',
        poster: '/thumbnails/DHlx5PFPtud.jpg',
        src: '/videos/DHlx5PFPtud.mp4',
        talent: 'Breakpoint Creative Direction',
        format: '9:16 Vertical HD',
        description: 'Editorial-grade visual direction showcasing product silhouettes, premium lighting, and luxury brand aesthetic.',
        caption: 'Editorial-grade visual direction showcasing product silhouettes, premium lighting, and luxury brand aesthetic.',
        isPlaceholder: false
      },
      {
        id: 'reel-gal-8',
        type: 'video',
        title: 'Social Media Management & Strategy Drop',
        aspectRatio: '9:16',
        videoUrl: '/videos/DHWtKr1TMV9.mp4',
        posterUrl: '/thumbnails/DHWtKr1TMV9.jpg',
        poster: '/thumbnails/DHWtKr1TMV9.jpg',
        src: '/videos/DHWtKr1TMV9.mp4',
        talent: 'Breakpoint Social Team',
        format: '9:16 Vertical HD',
        description: 'Strategic social content piece designed to spark community commentary and profile saves.',
        caption: 'Strategic social content piece designed to spark community commentary and profile saves.',
        isPlaceholder: false
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
      type: 'video',
      aspectRatio: '9:16',
      src: '/videos/DHCYNcfS6BJ.mp4',
      isPlaceholder: false,
      placeholderLabel: 'Brand Positioning Showcase'
    },
    metrics: undefined,
    mediaGallery: [
      {
        id: 'reel-gal-9',
        type: 'video',
        title: 'Community Engagement & Trend Storytelling',
        aspectRatio: '9:16',
        videoUrl: '/videos/DHCYNcfS6BJ.mp4',
        posterUrl: '/thumbnails/DHCYNcfS6BJ.jpg',
        poster: '/thumbnails/DHCYNcfS6BJ.jpg',
        src: '/videos/DHCYNcfS6BJ.mp4',
        talent: 'Breakpoint Creator Talent',
        format: '9:16 Vertical HD',
        description: 'Trend-aware vertical storytelling turning consumer questions into engaging narrative touchpoints.',
        caption: 'Trend-aware vertical storytelling turning consumer questions into engaging narrative touchpoints.',
        isPlaceholder: false
      },
      {
        id: 'reel-gal-10',
        type: 'video',
        title: 'Creative Campaign Reel & Visual Production',
        aspectRatio: '9:16',
        videoUrl: '/videos/DGl546eOni9.mp4',
        posterUrl: '/thumbnails/DGl546eOni9.jpg',
        poster: '/thumbnails/DGl546eOni9.jpg',
        src: '/videos/DGl546eOni9.mp4',
        talent: 'Breakpoint Production Crew',
        format: '9:16 Vertical HD',
        description: 'Full-scale agency studio production combining cinematic camera movements and high-fidelity sound design.',
        caption: 'Full-scale agency studio production combining cinematic camera movements and high-fidelity sound design.',
        isPlaceholder: false
      },
      {
        id: 'reel-gal-11',
        type: 'video',
        title: 'Short-Form Creator Wellness & Daily Routine',
        aspectRatio: '9:16',
        videoUrl: '/videos/DUGu1FSgQd3.mp4',
        posterUrl: '/thumbnails/DUGu1FSgQd3.jpg',
        poster: '/thumbnails/DUGu1FSgQd3.jpg',
        src: '/videos/DUGu1FSgQd3.mp4',
        talent: 'Serena Pitt',
        format: '9:16 Vertical HD',
        description: 'Candid wellness routine integration highlighting daily consistency, lifestyle aesthetic, and patient confidence.',
        caption: 'Candid wellness routine integration highlighting daily consistency, lifestyle aesthetic, and patient confidence.',
        isPlaceholder: false
      },
      {
        id: 'reel-gal-12',
        type: 'video',
        title: 'Serena Pitt × Lo Lo Estrin Fe Main Campaign Reel',
        aspectRatio: '9:16',
        videoUrl: '/videos/C3QIH4YMZBd.mp4',
        posterUrl: '/thumbnails/C3QIH4YMZBd.jpg',
        poster: '/thumbnails/C3QIH4YMZBd.jpg',
        src: '/videos/C3QIH4YMZBd.mp4',
        talent: 'Serena Pitt',
        format: '9:16 Vertical HD',
        description: 'Headline campaign deliverable featuring Serena Pitt candidly discussing contraceptive choices and daily wellness habits.',
        caption: 'Headline campaign deliverable featuring Serena Pitt candidly discussing contraceptive choices and daily wellness habits.',
        isPlaceholder: false
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
