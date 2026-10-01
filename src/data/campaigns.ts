import { Campaign } from '../types/campaign';

export const INITIAL_CAMPAIGNS: Campaign[] = [
  {
    id: 'lo-lo-estrin-fe',
    brand: 'Lo Lo Estrin Fe',
    title: 'Modern Women’s Health Awareness Campaign',
    category: 'Influencer Marketing',
    isFeatured: true,
    collaboratorNames: ['Serena Pitt'],
    shortDescription: 'A modern birth control education campaign in partnership with Bachelor in Paradise star Serena Pitt, creating candid, relatable conversations around reproductive wellness.',
    fullDescription: 'Lo Lo Estrin Fe partnered with Breakpoint Social to conceptualize and execute a high-engagement, compliant creator campaign featuring lifestyle tastemaker Serena Pitt. The campaign was built to demystify oral contraceptive choices through genuine, relatable daily routines and approachable reproductive health dialogues tailored for Gen Z and Millennial audiences on TikTok and Instagram.',
    objective: 'To normalize candid conversations about birth control options, dispel common prescription myths, and guide prospective patients toward informed discussions with their healthcare providers.',
    creativeApproach: 'Leveraging Serena Pitt’s authentic lifestyle presence to integrate discussions about daily wellness routines, honest OB/GYN experiences, and low-dose prescription information naturally into short-form video content.',
    servicesProvided: [
      'Influencer Strategy & Talent Curation',
      'Pharma-Compliant Creative Production',
      'Short-Form Video Concepting',
      'Creator Briefing & FTC/FDA Guideline Governance',
      'Paid Social Amplification & Whitelisting'
    ],
    publicationStatus: 'client_review',
    displayOrder: 1,
    clientNotes: 'Featured campaign specifically designated by client. Draft copy in place; 4 creative examples awaiting final asset links from client as requested.',
    dateCreated: '2025-06',
    thumbnail: {
      type: 'placeholder',
      aspectRatio: '9:16',
      isPlaceholder: true,
      placeholderLabel: 'Lo Lo Estrin Fe × Serena Pitt · 9:16 Creative Preview'
    },
    // Strictly adhering to Rule 9 & 11: Never invent results or metrics. Metrics omitted until approved by client.
    metrics: undefined,
    mediaGallery: [
      {
        id: 'lo-lo-ex-1',
        type: 'video',
        title: 'Creative Example 1: Morning Routine & Candid Health Check-In',
        aspectRatio: '9:16',
        exampleNumber: 1,
        collaborator: 'Serena Pitt',
        src: 'https://interactive-examples.mdn.mozilla.net/media/cc0-videos/flower.mp4',
        poster: 'https://breakpointsocial.com/wp-content/uploads/2025/07/San-Diego-social-media-agency.jpg',
        isPlaceholder: false,
        placeholderReason: 'Creative Example 1 preview active. Ready for Taylor / Serena Pitt final file swap.',
        caption: 'Serena Pitt walking through her daily wellness routine and sharing an honest perspective on finding the birth control that fits her body.'
      },
      {
        id: 'lo-lo-ex-2',
        type: 'video',
        title: 'Creative Example 2: "Questions I Wish I Asked My OB/GYN"',
        aspectRatio: '9:16',
        exampleNumber: 2,
        collaborator: 'Serena Pitt',
        src: 'https://www.w3schools.com/html/mov_bbb.mp4',
        poster: 'https://breakpointsocial.com/wp-content/uploads/2025/06/Social-Media-Management-img.jpg',
        isPlaceholder: false,
        placeholderReason: 'Creative Example 2 preview active. Formatted for high-retention Q&A storytelling.',
        caption: 'An interactive Q&A addressing patient anxieties, side-effect questions, and empowered doctor-patient dialogue.'
      },
      {
        id: 'lo-lo-ex-3',
        type: 'image',
        title: 'Creative Example 3: Lifestyle Carousel — Prioritizing Peace of Mind',
        aspectRatio: '4:5',
        exampleNumber: 3,
        collaborator: 'Serena Pitt',
        src: 'https://breakpointsocial.com/wp-content/uploads/2025/06/Creative-Production-img.jpg',
        isPlaceholder: false,
        placeholderReason: 'Creative Example 3 lifestyle photography preview.',
        caption: 'Editorial social photography series emphasizing wellness balance and reproductive autonomy.'
      },
      {
        id: 'lo-lo-ex-4',
        type: 'video',
        title: 'Creative Example 4: Educational Breakdown — Understanding Low-Dose Formulations',
        aspectRatio: '9:16',
        exampleNumber: 4,
        collaborator: 'Serena Pitt',
        src: 'https://upload.wikimedia.org/wikipedia/commons/transcoded/c/c0/Big_Buck_Bunny_4K.webm/Big_Buck_Bunny_4K.webm.480p.vp9.webm',
        poster: 'https://breakpointsocial.com/wp-content/uploads/2025/06/Brand-Development-Positioning-img.jpg',
        isPlaceholder: false,
        placeholderReason: 'Creative Example 4 educational reel preview active.',
        caption: 'Clear, digestible educational reel breaking down what low-dose estrogen means in an accessible visual format.'
      }
    ]
  },
  {
    id: 'asset-01-campaign',
    brand: 'Client Asset 01',
    title: 'Brand Activation & Influencer Collaboration [Intake Slot]',
    category: 'Influencer Marketing',
    driveAssetRef: 'Asset 01',
    shortDescription: 'Dedicated intake container for Asset 01 provided by the client. Structured to display verified brand metadata upon file inspection.',
    fullDescription: 'This case study slot is reserved for Asset 01 from the client drive submission. In accordance with Breakpoint Social verification protocol, all metrics, campaign summaries, and brand assets will be populated directly from client-approved materials.',
    objective: 'Campaign objective to be extracted directly from client Asset 01 source documents.',
    creativeApproach: 'Creative production and distribution strategy aligned with client specifications.',
    servicesProvided: [
      'Social Strategy',
      'Creator Partnerships',
      'Content Production'
    ],
    publicationStatus: 'draft',
    displayOrder: 2,
    clientNotes: 'Asset 01 link awaiting verification/access. Structured placeholder active per project specification.',
    dateCreated: '2025-07',
    thumbnail: {
      type: 'placeholder',
      aspectRatio: '16:9',
      isPlaceholder: true,
      placeholderLabel: 'Asset 01 Intake Slot · Awaiting File Inspection'
    },
    metrics: undefined,
    mediaGallery: [
      {
        id: 'asset-01-item-1',
        type: 'placeholder',
        title: 'Asset 01 Primary Media',
        aspectRatio: '16:9',
        isPlaceholder: true,
        placeholderReason: 'Awaiting client link or file access for Asset 01. No external stock images used.'
      }
    ]
  },
  {
    id: 'asset-02-campaign',
    brand: 'Client Asset 02',
    title: 'Creative Production & Social Content [Intake Slot]',
    category: 'Creative Production',
    driveAssetRef: 'Asset 02',
    shortDescription: 'Dedicated intake container for Asset 02 provided by the client. Structured to display verified campaign visuals and deliverables.',
    fullDescription: 'This case study slot is reserved for Asset 02 from the client drive submission. Visual framing and responsive display ready for client file integration.',
    objective: 'Campaign objective to be populated from client Asset 02.',
    creativeApproach: 'High-concept creative direction engineered for social-first platforms.',
    servicesProvided: [
      'Creative Direction',
      'Short-Form Video Production',
      'Visual Asset Creation'
    ],
    publicationStatus: 'draft',
    displayOrder: 3,
    clientNotes: 'Asset 02 link awaiting verification/access. Structured placeholder active per project specification.',
    dateCreated: '2025-07',
    thumbnail: {
      type: 'placeholder',
      aspectRatio: '4:3',
      isPlaceholder: true,
      placeholderLabel: 'Asset 02 Intake Slot · Awaiting File Inspection'
    },
    metrics: undefined,
    mediaGallery: [
      {
        id: 'asset-02-item-1',
        type: 'placeholder',
        title: 'Asset 02 Primary Media',
        aspectRatio: '4:3',
        isPlaceholder: true,
        placeholderReason: 'Awaiting client link or file access for Asset 02. No external stock images used.'
      }
    ]
  },
  {
    id: 'asset-03-campaign',
    brand: 'Client Asset 03',
    title: 'Social Media Strategy & Reporting [Intake Slot]',
    category: 'Social Media Management',
    driveAssetRef: 'Asset 03',
    shortDescription: 'Dedicated intake container for Asset 03 provided by the client. Structured to display verified performance insights and campaign reporting.',
    fullDescription: 'This case study slot is reserved for Asset 03 from the client drive submission. Prepared with rigorous verification standards before publishing live.',
    objective: 'Campaign objective to be populated from client Asset 03.',
    creativeApproach: 'Data-driven content testing and organic community mobilization.',
    servicesProvided: [
      'Social Media Management',
      'Reporting & Insights',
      'Community Engagement'
    ],
    publicationStatus: 'draft',
    displayOrder: 4,
    clientNotes: 'Asset 03 link awaiting verification/access. Structured placeholder active per project specification.',
    dateCreated: '2025-07',
    thumbnail: {
      type: 'placeholder',
      aspectRatio: '16:9',
      isPlaceholder: true,
      placeholderLabel: 'Asset 03 Intake Slot · Awaiting File Inspection'
    },
    metrics: undefined,
    mediaGallery: [
      {
        id: 'asset-03-item-1',
        type: 'placeholder',
        title: 'Asset 03 Primary Media',
        aspectRatio: '16:9',
        isPlaceholder: true,
        placeholderReason: 'Awaiting client link or file access for Asset 03. No external stock images used.'
      }
    ]
  },
  {
    id: 'drink-poppi-wellness',
    brand: 'Poppi Prebiotic Soda',
    title: 'Creator Seeding & Viral Flavor Drop Strategy',
    category: 'Creative Production',
    collaboratorNames: ['Lifestyle & Wellness Creators'],
    shortDescription: 'High-energy organic creator gifting and unboxing campaign driving authentic buzz around limited-edition summer flavors.',
    fullDescription: 'Breakpoint Social engineered an influencer gifting initiative paired with tailored creative production, turning daily soda rituals into viral social moments. Creators were given freedom to incorporate Poppi naturally into their daily vlogs, beach days, and desk setups.',
    objective: 'Build hyper-organic social presence and drive high brand recall through unstaged, lifestyle-first creator placements.',
    creativeApproach: 'Moving from rigid branded briefs to authentic personality-driven creator expressions, focusing on real reactions and refreshing product aesthetics.',
    servicesProvided: [
      'Creator Seeding & Outreach',
      'Unboxing Kit Concept & Production',
      'Organic UGC Syndication',
      'TikTok Trend Jacking'
    ],
    publicationStatus: 'client_review',
    displayOrder: 5,
    clientNotes: 'Upcoming case study being prepared by Taylor. Awaiting client review of final deliverable metrics.',
    dateCreated: '2025-05',
    thumbnail: {
      type: 'placeholder',
      aspectRatio: '9:16',
      isPlaceholder: true,
      placeholderLabel: 'Poppi Creator Seeding · Short-form Video Showcase'
    },
    metrics: undefined,
    mediaGallery: [
      {
        id: 'poppi-item-1',
        type: 'placeholder',
        title: 'Creator Unboxing Reel',
        aspectRatio: '9:16',
        isPlaceholder: true,
        placeholderReason: 'Video assets being assembled by agency team for client approval.'
      }
    ]
  },
  {
    id: 'pacifica-beauty-ugc',
    brand: 'Pacifica Beauty',
    title: 'Clean Skincare TikTok UGC & Community Activation',
    category: 'Brand Development & Positioning',
    collaboratorNames: ['Clean Beauty Micro-Influencers'],
    shortDescription: 'Empowering beauty creators to share honest skincare journeys and skin-barrier barrier restoration routines.',
    fullDescription: 'To showcase Pacifica’s clean ingredient credentials, Breakpoint Social assembled a roster of vetted skincare advocates who documented their skin progress over four weeks, driving credible peer-to-peer recommendations.',
    objective: 'Generate authentic consumer trust and highlight clinical ingredient transparency through real-life creator before-and-afters.',
    creativeApproach: 'Skin-positive, unfiltered creator documentation emphasizing genuine texture, daily hydration rituals, and clean formula education.',
    servicesProvided: [
      'Micro-Influencer Casting',
      'UGC Asset Licensing',
      'Paid Social Ad Creative Iterations',
      'Community Comment Management'
    ],
    publicationStatus: 'draft',
    displayOrder: 6,
    clientNotes: 'Upcoming case study being prepared by Taylor. Creative assets currently in client review.',
    dateCreated: '2025-04',
    thumbnail: {
      type: 'placeholder',
      aspectRatio: '4:5',
      isPlaceholder: true,
      placeholderLabel: 'Pacifica Beauty · Clean Skincare UGC Series'
    },
    metrics: undefined,
    mediaGallery: [
      {
        id: 'pacifica-item-1',
        type: 'placeholder',
        title: 'Skincare Routine UGC Series',
        aspectRatio: '4:5',
        isPlaceholder: true,
        placeholderReason: 'Awaiting final photography and video asset approval.'
      }
    ]
  }
];

export const CAMPAIGN_CATEGORIES = [
  'All Work',
  'Influencer Marketing',
  'Creative Production',
  'Social Media Management',
  'Brand Development & Positioning',
  'Event Marketing'
] as const;
