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
    title: 'Grab & Go Subs · Handcrafted Sandwiches & Daily Lunch Rush',
    category: 'Creative Production',
    videoUrl: '/videos/DUGu1FSgQd3.mp4',
    posterUrl: '/thumbnails/DUGu1FSgQd3.jpg',
    talent: 'Grab & Go Subs Culinary Team',
    format: '9:16 Vertical HD',
    description: 'Candid lunchtime showcase highlighting artisanal sub sandwich craftsmanship, freshly baked bread, and local food culture in San Diego.',
    aspectRatio: '9:16',
    coverImage: '/thumbnails/DUGu1FSgQd3.jpg'
  },
  {
    id: 'reel-2',
    reelCode: 'DVeOXQuj2pd',
    title: 'Frankie\'s Burritos · Breakfast Burrito Cut ASMR',
    category: 'Social Media Management',
    videoUrl: '/videos/DVeOXQuj2pd.mp4',
    posterUrl: '/thumbnails/DVeOXQuj2pd.jpg',
    talent: 'Frankie\'s Burritos',
    format: '9:16 Vertical HD',
    description: 'Sensory food ASMR video featuring the signature crispy toasted tortilla and melted breakfast fillings sliced with high-fidelity audio.',
    aspectRatio: '9:16',
    coverImage: '/thumbnails/DVeOXQuj2pd.jpg'
  },
  {
    id: 'reel-3',
    reelCode: 'DU1Nqkskqkv',
    title: 'Frankie\'s Burritos · Sizzling Hot Daily Specials',
    category: 'Social Media Management',
    videoUrl: '/videos/DU1Nqkskqkv.mp4',
    posterUrl: '/thumbnails/DU1Nqkskqkv.jpg',
    talent: 'Frankie\'s Burritos',
    format: '9:16 Vertical HD',
    description: 'High-energy kitchen reel showcasing freshly prepared spicy burritos hot off the flat top grill ready for Agoura Hills lunch hour.',
    aspectRatio: '9:16',
    coverImage: '/thumbnails/DU1Nqkskqkv.jpg'
  },
  {
    id: 'reel-4',
    reelCode: 'DUthoHbEnjN',
    title: 'Frankie\'s Burritos · Made Fresh Daily Kitchen Prep',
    category: 'Brand Development & Positioning',
    videoUrl: '/videos/DUthoHbEnjN.mp4',
    posterUrl: '/thumbnails/DUthoHbEnjN.jpg',
    talent: 'Frankie\'s Burritos',
    format: '9:16 Vertical HD',
    description: 'Behind-the-scenes authenticity reel highlighting scratch-made ingredients, handcrafted tortillas, and local culinary pride.',
    aspectRatio: '9:16',
    coverImage: '/thumbnails/DUthoHbEnjN.jpg'
  },
  {
    id: 'reel-5',
    reelCode: 'DXztiY9hv9b',
    title: 'Grill on the Green · Burgers, Smokehouse BBQ & Live Music',
    category: 'Event Marketing',
    videoUrl: '/videos/DXztiY9hv9b.mp4',
    posterUrl: '/thumbnails/DXztiY9hv9b.jpg',
    talent: 'Grill on the Green Simi Valley',
    format: '9:16 Vertical HD',
    description: 'Community lifestyle deliverable welcoming Simi Valley locals to enjoy weekend live music, gourmet burgers, and slow-smoked barbecue on the patio.',
    aspectRatio: '9:16',
    coverImage: '/thumbnails/DXztiY9hv9b.jpg'
  },
  {
    id: 'reel-6',
    reelCode: 'Dbv5PohD_xq',
    title: 'CleanBins360 · The Kids Swim Test (Viral Sanitation Hook)',
    category: 'Creative Production',
    videoUrl: '/videos/Dbv5PohD_xq.mp4',
    posterUrl: '/thumbnails/Dbv5PohD_xq.jpg',
    talent: 'CleanBins360 Team',
    format: '9:16 Vertical HD',
    description: 'Disruptive humor hook proving that 200° pressure wash disinfection leaves trash bins so sparkling clean you could let kids swim in them.',
    aspectRatio: '9:16',
    coverImage: '/thumbnails/Dbv5PohD_xq.jpg'
  },
  {
    id: 'reel-7',
    reelCode: 'DYIBFIvxoZ5',
    title: 'Grill on the Green · Driving a Chicken Wing on the Fairway',
    category: 'Creative Production',
    videoUrl: '/videos/DYIBFIvxoZ5.mp4',
    posterUrl: '/thumbnails/DYIBFIvxoZ5.jpg',
    talent: 'Grill on the Green Golf Pro',
    format: '9:16 Vertical HD',
    description: 'High-engagement viral golf hook pairing a crispy buffalo chicken wing with a driver tee-off shot, merging golf entertainment with restaurant marketing.',
    aspectRatio: '9:16',
    coverImage: '/thumbnails/DYIBFIvxoZ5.jpg'
  },
  {
    id: 'reel-8',
    reelCode: 'DYfk-fkvdPr',
    title: 'Grill on the Green · BBQ Done The Right Way (Smoked Ribs)',
    category: 'Creative Production',
    videoUrl: '/videos/DYfk-fkvdPr.mp4',
    posterUrl: '/thumbnails/DYfk-fkvdPr.jpg',
    talent: 'Grill on the Green Pitmasters',
    format: '9:16 Vertical HD',
    description: 'Slow-smoked barbecue showcase focusing on mouthwatering brisket bark, tender fall-off-the-bone ribs, and authentic smokehouse technique.',
    aspectRatio: '9:16',
    coverImage: '/thumbnails/DYfk-fkvdPr.jpg'
  },
  {
    id: 'reel-9',
    reelCode: 'DcT9xV5l7pJ',
    title: 'CleanBins360 · Deep Clean Service Transformation',
    category: 'Event Marketing',
    videoUrl: '/videos/DcT9xV5l7pJ.mp4',
    posterUrl: '/thumbnails/DcT9xV5l7pJ.jpg',
    talent: 'CleanBins360 Sanitation Crew',
    format: '9:16 Vertical HD',
    description: 'Satisfying commercial-grade before-and-after power wash demonstration highlighting total odor elimination and eco-friendly curbside cleaning.',
    aspectRatio: '9:16',
    coverImage: '/thumbnails/DcT9xV5l7pJ.jpg'
  },
  {
    id: 'reel-10',
    reelCode: 'DHlx5PFPtud',
    title: 'Chase Unfiltered · From Spinal Cord Recovery to 5K Finish Line',
    category: 'Brand Development & Positioning',
    videoUrl: '/videos/DHlx5PFPtud.mp4',
    posterUrl: '/thumbnails/DHlx5PFPtud.jpg',
    talent: 'Chase (@chaseunfiltered)',
    format: '9:16 Vertical HD',
    description: 'Inspiring personal resilience story tracking Chase\'s journey from a hospital bed diagnosis to triumphantly running across the 5K finish line.',
    aspectRatio: '9:16',
    coverImage: '/thumbnails/DHlx5PFPtud.jpg'
  },
  {
    id: 'reel-11',
    reelCode: 'DHWtKr1TMV9',
    title: 'Joe x Fitness · Finding Love on the Run (Marathon Journey)',
    category: 'Social Media Management',
    videoUrl: '/videos/DHWtKr1TMV9.mp4',
    posterUrl: '/thumbnails/DHWtKr1TMV9.jpg',
    talent: 'Joe & Sally (@joexfitness)',
    format: '9:16 Vertical HD',
    description: 'Heartfelt creator couple storytelling following Joe and Sally as running brought them together through joint training for their first marathon.',
    aspectRatio: '9:16',
    coverImage: '/thumbnails/DHWtKr1TMV9.jpg'
  },
  {
    id: 'reel-12',
    reelCode: 'DHCYNcfS6BJ',
    title: 'Liv Stone · Adaptive Surfing Champion Overcoming Obstacles',
    category: 'Brand Development & Positioning',
    videoUrl: '/videos/DHCYNcfS6BJ.mp4',
    posterUrl: '/thumbnails/DHCYNcfS6BJ.jpg',
    talent: 'Liv Stone (World Champion Adaptive Surfer)',
    format: '9:16 Vertical HD',
    description: 'Empowering creator documentary spotlighting ISA World Champion Liv Stone overcoming arm disability perceptions through running and athletic determination.',
    aspectRatio: '9:16',
    coverImage: '/thumbnails/DHCYNcfS6BJ.jpg'
  },
  {
    id: 'reel-13',
    reelCode: 'DGl546eOni9',
    title: 'Brooks Running × Josh Goldy · Glycerin 22 \'Relentlessly Optimistic\'',
    category: 'Creative Production',
    videoUrl: '/videos/DGl546eOni9.mp4',
    posterUrl: '/thumbnails/DGl546eOni9.jpg',
    talent: 'Josh Goldy × Brooks Running',
    format: '9:16 Vertical HD',
    description: 'Cinematic creator campaign showcasing the all-new Brooks Glycerin 22 with DNA Tuned cushioning, driving endurance runner motivation and retail conversion.',
    aspectRatio: '9:16',
    coverImage: '/thumbnails/DGl546eOni9.jpg'
  },
  {
    id: 'reel-14',
    reelCode: 'C3QIH4YMZBd',
    title: 'Lo Loestrin Fe × Serena Pitt · Daily Routine & Reproductive Health',
    category: 'Creative Production',
    videoUrl: '/videos/C3QIH4YMZBd.mp4',
    posterUrl: '/thumbnails/C3QIH4YMZBd.jpg',
    talent: 'Serena Pitt × Lo Loestrin Fe',
    format: '9:16 Vertical HD',
    description: 'FDA/FTC compliant pharma partnership with Bachelor in Paradise star Serena Pitt demystifying oral contraceptive conversations for modern women.',
    aspectRatio: '9:16',
    coverImage: '/thumbnails/C3QIH4YMZBd.jpg'
  }
];

export const INITIAL_CAMPAIGNS: Campaign[] = [
  {
    id: 'brooks-running',
    brand: 'Brooks Running',
    title: 'Performance Footwear Launch & Athlete Storytelling Series',
    category: 'Creative Production',
    isFeatured: true,
    collaboratorNames: ['Josh Goldy', 'Liv Stone', 'Chase', 'Joe & Sally'],
    shortDescription: 'An inspiring multi-creator performance campaign produced for Brooks Running, featuring elite athletes, adaptive champions, and everyday runners testing the Glycerin 22.',
    fullDescription: 'Brooks Running partnered with Breakpoint Social to launch a high-impact creator series spotlighting resilience, optimism, and endurance. From World Champion adaptive athletes to heartwarming couple marathon training, the campaign brought human stories to the center of high-performance footwear marketing.',
    objective: 'Drive brand affinity and product trial for the new Glycerin 22 through authentic, emotionally resonant runner stories across Instagram and TikTok.',
    creativeApproach: 'Raw, documentary-style vertical video storytelling capturing real running milestones, stride mechanics, and personal athletic breakthroughs.',
    servicesProvided: [
      'Short-Form Video Production',
      'Athletic Creator Casting & Alignment',
      'Vertical Reel Editing & Sound Design',
      'Paid Social Amplification & Whitelisting'
    ],
    publicationStatus: 'published',
    displayOrder: 1,
    clientNotes: 'Featured campaign highlighting 4 authentic high-performance running deliverables.',
    dateCreated: '2025-06',
    thumbnail: {
      type: 'video',
      aspectRatio: '9:16',
      src: '/videos/DGl546eOni9.mp4',
      isPlaceholder: false,
      placeholderLabel: 'Brooks Running × Josh Goldy'
    },
    metrics: undefined,
    mediaGallery: [
      {
        id: 'brooks-ex-1',
        type: 'video',
        title: 'Brooks Running × Josh Goldy · Glycerin 22 \'Relentlessly Optimistic\'',
        aspectRatio: '9:16',
        exampleNumber: 1,
        collaborator: 'Josh Goldy × Brooks',
        talent: 'Josh Goldy',
        format: '9:16 Vertical HD',
        videoUrl: '/videos/DGl546eOni9.mp4',
        posterUrl: '/thumbnails/DGl546eOni9.jpg',
        poster: '/thumbnails/DGl546eOni9.jpg',
        src: '/videos/DGl546eOni9.mp4',
        isPlaceholder: false,
        description: 'Cinematic creator campaign showcasing the all-new Brooks Glycerin 22 with DNA Tuned cushioning, driving endurance runner motivation and retail conversion.',
        caption: 'Cinematic creator campaign showcasing the all-new Brooks Glycerin 22 with DNA Tuned cushioning, driving endurance runner motivation and retail conversion.'
      },
      {
        id: 'brooks-ex-2',
        type: 'video',
        title: 'Liv Stone · Adaptive Surfing Champion Overcoming Obstacles',
        aspectRatio: '9:16',
        exampleNumber: 2,
        collaborator: 'Liv Stone (World Champion)',
        talent: 'Liv Stone',
        format: '9:16 Vertical HD',
        videoUrl: '/videos/DHCYNcfS6BJ.mp4',
        posterUrl: '/thumbnails/DHCYNcfS6BJ.jpg',
        poster: '/thumbnails/DHCYNcfS6BJ.jpg',
        src: '/videos/DHCYNcfS6BJ.mp4',
        isPlaceholder: false,
        description: 'Empowering creator documentary portrait featuring ISA World Champion Liv Stone overcoming arm disability perceptions through running and athletic determination.',
        caption: 'Empowering creator documentary portrait featuring ISA World Champion Liv Stone overcoming arm disability perceptions through running and athletic determination.'
      },
      {
        id: 'brooks-ex-3',
        type: 'video',
        title: 'Chase Unfiltered · From Spinal Cord Recovery to 5K Finish Line',
        aspectRatio: '9:16',
        exampleNumber: 3,
        collaborator: 'Chase',
        talent: 'Chase (@chaseunfiltered)',
        format: '9:16 Vertical HD',
        videoUrl: '/videos/DHlx5PFPtud.mp4',
        posterUrl: '/thumbnails/DHlx5PFPtud.jpg',
        poster: '/thumbnails/DHlx5PFPtud.jpg',
        src: '/videos/DHlx5PFPtud.mp4',
        isPlaceholder: false,
        description: 'Inspiring personal resilience story tracking Chase\'s journey from a hospital bed diagnosis to triumphantly running across the 5K finish line.',
        caption: 'Inspiring personal resilience story tracking Chase\'s journey from a hospital bed diagnosis to triumphantly running across the 5K finish line.'
      },
      {
        id: 'brooks-ex-4',
        type: 'video',
        title: 'Joe x Fitness · Finding Love on the Run (Marathon Journey)',
        aspectRatio: '9:16',
        exampleNumber: 4,
        collaborator: 'Joe & Sally',
        talent: 'Joe & Sally (@joexfitness)',
        format: '9:16 Vertical HD',
        videoUrl: '/videos/DHWtKr1TMV9.mp4',
        posterUrl: '/thumbnails/DHWtKr1TMV9.jpg',
        poster: '/thumbnails/DHWtKr1TMV9.jpg',
        src: '/videos/DHWtKr1TMV9.mp4',
        isPlaceholder: false,
        description: 'Heartfelt creator couple storytelling following Joe and Sally as running brought them together through joint training for their first marathon.',
        caption: 'Heartfelt creator couple storytelling following Joe and Sally as running brought them together through joint training for their first marathon.'
      }
    ]
  },
  {
    id: 'grill-on-the-green',
    brand: 'Grill on the Green',
    title: 'Hospitality, Smokehouse BBQ & Viral Fairway Entertainment',
    category: 'Social Media Management',
    shortDescription: 'Hyper-local restaurant social management combining mouthwatering slow-smoked barbecue cuts with viral golf fairway entertainment.',
    fullDescription: 'Grill on the Green in Simi Valley partnered with Breakpoint Social to revitalize their local restaurant and sports bar presence. We transformed their feed by pairing mouthwatering brisket and rib close-ups with unexpected comedic viral golf hooks, generating huge regional reach.',
    objective: 'Expand foot traffic beyond golfers to families, sports fans, and foodies across Simi Valley and Ventura County.',
    creativeApproach: 'Pairing high-appetite smokehouse BBQ close-ups with shareable viral golf stunts that break traditional restaurant marketing molds.',
    servicesProvided: [
      'Social Media Management',
      'Food & Beverage Video Production',
      'Viral Content Strategy',
      'Local Community Engagement'
    ],
    publicationStatus: 'published',
    displayOrder: 2,
    dateCreated: '2025-07',
    thumbnail: {
      type: 'video',
      aspectRatio: '9:16',
      src: '/videos/DYfk-fkvdPr.mp4',
      isPlaceholder: false,
      placeholderLabel: 'Grill on the Green · Smoked BBQ'
    },
    metrics: undefined,
    mediaGallery: [
      {
        id: 'grill-ex-1',
        type: 'video',
        title: 'Grill on the Green · BBQ Done The Right Way (Smoked Ribs)',
        aspectRatio: '9:16',
        videoUrl: '/videos/DYfk-fkvdPr.mp4',
        posterUrl: '/thumbnails/DYfk-fkvdPr.jpg',
        poster: '/thumbnails/DYfk-fkvdPr.jpg',
        src: '/videos/DYfk-fkvdPr.mp4',
        talent: 'Grill on the Green Pitmasters',
        format: '9:16 Vertical HD',
        description: 'Slow-smoked barbecue showcase focusing on mouthwatering brisket bark, tender fall-off-the-bone ribs, and authentic pitmaster technique.',
        caption: 'Slow-smoked barbecue showcase focusing on mouthwatering brisket bark, tender fall-off-the-bone ribs, and authentic pitmaster technique.',
        isPlaceholder: false
      },
      {
        id: 'grill-ex-2',
        type: 'video',
        title: 'Grill on the Green · Burgers, Smokehouse BBQ & Live Music',
        aspectRatio: '9:16',
        videoUrl: '/videos/DXztiY9hv9b.mp4',
        posterUrl: '/thumbnails/DXztiY9hv9b.jpg',
        poster: '/thumbnails/DXztiY9hv9b.jpg',
        src: '/videos/DXztiY9hv9b.mp4',
        talent: 'Grill on the Green Simi Valley',
        format: '9:16 Vertical HD',
        description: 'Community lifestyle deliverable welcoming Simi Valley locals to enjoy weekend live music, gourmet burgers, and slow-smoked barbecue on the patio.',
        caption: 'Community lifestyle deliverable welcoming Simi Valley locals to enjoy weekend live music, gourmet burgers, and slow-smoked barbecue on the patio.',
        isPlaceholder: false
      },
      {
        id: 'grill-ex-3',
        type: 'video',
        title: 'Grill on the Green · Driving a Chicken Wing on the Fairway',
        aspectRatio: '9:16',
        videoUrl: '/videos/DYIBFIvxoZ5.mp4',
        posterUrl: '/thumbnails/DYIBFIvxoZ5.jpg',
        poster: '/thumbnails/DYIBFIvxoZ5.jpg',
        src: '/videos/DYIBFIvxoZ5.mp4',
        talent: 'Grill on the Green Golf Pro',
        format: '9:16 Vertical HD',
        description: 'High-engagement viral golf hook pairing a crispy buffalo chicken wing with a driver tee-off shot, merging golf entertainment with restaurant marketing.',
        caption: 'High-engagement viral golf hook pairing a crispy buffalo chicken wing with a driver tee-off shot, merging golf entertainment with restaurant marketing.',
        isPlaceholder: false
      }
    ]
  },
  {
    id: 'food-and-fast-casual',
    brand: 'Frankie\'s Burritos & Grab & Go',
    title: 'Sensory Food ASMR & Fast-Casual Brand Growth',
    category: 'Brand Development & Positioning',
    shortDescription: 'Engaging short-form culinary reels built around crispy tortilla sounds, melted cheese ASMR, and handcrafted sandwich prep.',
    fullDescription: 'Breakpoint Social engineered high-converting short-form food reels for regional favorites Frankie\'s Burritos and Grab & Go Subs. Leveraging ultra-crisp audio (ASMR) and behind-the-counter kitchen freshness, these reels turned local cravings into record-breaking lunchtime foot traffic.',
    objective: 'Establish irresistible food crave appeal on Instagram Reels & TikTok to dominate local lunchtime discovery.',
    creativeApproach: 'Microphone-close ASMR slicing, sizzling flat top griddle shots, and authentic behind-the-counter team pride.',
    servicesProvided: [
      'Food ASMR Video Production',
      'Local Business Growth Strategy',
      'Short-Form Menu Storytelling',
      'Reel Audio Engineering'
    ],
    publicationStatus: 'published',
    displayOrder: 3,
    dateCreated: '2025-07',
    thumbnail: {
      type: 'video',
      aspectRatio: '9:16',
      src: '/videos/DVeOXQuj2pd.mp4',
      isPlaceholder: false,
      placeholderLabel: 'Frankie\'s Burritos ASMR'
    },
    metrics: undefined,
    mediaGallery: [
      {
        id: 'food-ex-1',
        type: 'video',
        title: 'Frankie\'s Burritos · Breakfast Burrito Cut ASMR',
        aspectRatio: '9:16',
        videoUrl: '/videos/DVeOXQuj2pd.mp4',
        posterUrl: '/thumbnails/DVeOXQuj2pd.jpg',
        poster: '/thumbnails/DVeOXQuj2pd.jpg',
        src: '/videos/DVeOXQuj2pd.mp4',
        talent: 'Frankie\'s Burritos',
        format: '9:16 Vertical HD',
        description: 'Sensory food ASMR video featuring the signature crispy toasted tortilla and melted breakfast fillings sliced with high-fidelity audio.',
        caption: 'Sensory food ASMR video featuring the signature crispy toasted tortilla and melted breakfast fillings sliced with high-fidelity audio.',
        isPlaceholder: false
      },
      {
        id: 'food-ex-2',
        type: 'video',
        title: 'Frankie\'s Burritos · Sizzling Hot Daily Specials',
        aspectRatio: '9:16',
        videoUrl: '/videos/DU1Nqkskqkv.mp4',
        posterUrl: '/thumbnails/DU1Nqkskqkv.jpg',
        poster: '/thumbnails/DU1Nqkskqkv.jpg',
        src: '/videos/DU1Nqkskqkv.mp4',
        talent: 'Frankie\'s Burritos',
        format: '9:16 Vertical HD',
        description: 'High-energy kitchen reel showcasing freshly prepared spicy burritos hot off the flat top grill ready for Agoura Hills lunch hour.',
        caption: 'High-energy kitchen reel showcasing freshly prepared spicy burritos hot off the flat top grill ready for Agoura Hills lunch hour.',
        isPlaceholder: false
      },
      {
        id: 'food-ex-3',
        type: 'video',
        title: 'Frankie\'s Burritos · Made Fresh Daily Kitchen Prep',
        aspectRatio: '9:16',
        videoUrl: '/videos/DUthoHbEnjN.mp4',
        posterUrl: '/thumbnails/DUthoHbEnjN.jpg',
        poster: '/thumbnails/DUthoHbEnjN.jpg',
        src: '/videos/DUthoHbEnjN.mp4',
        talent: 'Frankie\'s Burritos',
        format: '9:16 Vertical HD',
        description: 'Behind-the-scenes authenticity reel highlighting scratch-made ingredients, handcrafted tortillas, and local culinary pride.',
        caption: 'Behind-the-scenes authenticity reel highlighting scratch-made ingredients, handcrafted tortillas, and local culinary pride.',
        isPlaceholder: false
      },
      {
        id: 'food-ex-4',
        type: 'video',
        title: 'Grab & Go Subs · Handcrafted Sandwiches & Daily Lunch Rush',
        aspectRatio: '9:16',
        videoUrl: '/videos/DUGu1FSgQd3.mp4',
        posterUrl: '/thumbnails/DUGu1FSgQd3.jpg',
        poster: '/thumbnails/DUGu1FSgQd3.jpg',
        src: '/videos/DUGu1FSgQd3.mp4',
        talent: 'Grab & Go Subs Culinary Team',
        format: '9:16 Vertical HD',
        description: 'Candid lunchtime showcase highlighting artisanal sub sandwich craftsmanship, freshly baked bread, and local food culture in San Diego.',
        caption: 'Candid lunchtime showcase highlighting artisanal sub sandwich craftsmanship, freshly baked bread, and local food culture in San Diego.',
        isPlaceholder: false
      }
    ]
  },
  {
    id: 'cleanbins-360',
    brand: 'CleanBins360',
    title: 'Disruptive Sanitation Hooks & Curbside Service Demand',
    category: 'Creative Production',
    shortDescription: 'Transforming an essential household utility service into viral social entertainment through high-contrast cleaning transformations.',
    fullDescription: 'CleanBins360 partnered with Breakpoint Social to turn routine trash bin sanitation into high-performing viral content. Using high-energy shock hooks like "our bins are so clean our kids take a swim in them" alongside satisfying 200-degree pressure wash transformations, the campaign rapidly drove subscriber growth.',
    objective: 'Convert local homeowners and businesses into recurring curbside trash bin sanitization subscribers.',
    creativeApproach: 'Humorous, unexpected opening hooks paired with hyper-satisfying visual demonstrations of deep-cleaning power.',
    servicesProvided: [
      'Viral Short-Form Production',
      'Local Service Lead Generation',
      'Hook Optimization & Testing',
      'High-Retention Video Editing'
    ],
    publicationStatus: 'published',
    displayOrder: 4,
    dateCreated: '2025-06',
    thumbnail: {
      type: 'video',
      aspectRatio: '9:16',
      src: '/videos/Dbv5PohD_xq.mp4',
      isPlaceholder: false,
      placeholderLabel: 'CleanBins360 Viral Hook'
    },
    metrics: undefined,
    mediaGallery: [
      {
        id: 'clean-ex-1',
        type: 'video',
        title: 'CleanBins360 · The Kids Swim Test (Viral Sanitation Hook)',
        aspectRatio: '9:16',
        videoUrl: '/videos/Dbv5PohD_xq.mp4',
        posterUrl: '/thumbnails/Dbv5PohD_xq.jpg',
        poster: '/thumbnails/Dbv5PohD_xq.jpg',
        src: '/videos/Dbv5PohD_xq.mp4',
        talent: 'CleanBins360 Team',
        format: '9:16 Vertical HD',
        description: 'Disruptive humor hook proving that 200° pressure wash disinfection leaves trash bins so sparkling clean you could let kids swim in them.',
        caption: 'Disruptive humor hook proving that 200° pressure wash disinfection leaves trash bins so sparkling clean you could let kids swim in them.',
        isPlaceholder: false
      },
      {
        id: 'clean-ex-2',
        type: 'video',
        title: 'CleanBins360 · Deep Clean Service Transformation',
        aspectRatio: '9:16',
        videoUrl: '/videos/DcT9xV5l7pJ.mp4',
        posterUrl: '/thumbnails/DcT9xV5l7pJ.jpg',
        poster: '/thumbnails/DcT9xV5l7pJ.jpg',
        src: '/videos/DcT9xV5l7pJ.mp4',
        talent: 'CleanBins360 Sanitation Crew',
        format: '9:16 Vertical HD',
        description: 'Satisfying commercial-grade before-and-after power wash demonstration highlighting total odor elimination and eco-friendly curbside cleaning.',
        caption: 'Satisfying commercial-grade before-and-after power wash demonstration highlighting total odor elimination and eco-friendly curbside cleaning.',
        isPlaceholder: false
      }
    ]
  },
  {
    id: 'lo-lo-estrin-fe',
    brand: 'Lo Loestrin Fe',
    title: 'Modern Women’s Health Awareness Campaign',
    category: 'Creative Production',
    collaboratorNames: ['Serena Pitt'],
    shortDescription: 'A pharma-compliant education campaign in partnership with Bachelor in Paradise star Serena Pitt, creating candid dialogues around reproductive wellness.',
    fullDescription: 'Lo Loestrin Fe partnered with Breakpoint Social to execute a high-engagement creator campaign featuring lifestyle tastemaker Serena Pitt. The campaign was built to demystify oral contraceptive choices through genuine, approachable conversations while adhering strictly to FDA and FTC prescription governance.',
    objective: 'Normalize candid conversations about birth control options and guide prospective patients toward informed discussions with their healthcare providers.',
    creativeApproach: 'Authentic lifestyle integration discussing daily routines and low-dose prescription information naturally into compliant creator content.',
    servicesProvided: [
      'Pharma-Compliant Creative Production',
      'Creative Concepting & Talent Alignment',
      'Creator Briefing & FDA/FTC Governance',
      'Paid Social Amplification & Whitelisting'
    ],
    publicationStatus: 'published',
    displayOrder: 5,
    dateCreated: '2025-06',
    thumbnail: {
      type: 'video',
      aspectRatio: '9:16',
      src: '/videos/C3QIH4YMZBd.mp4',
      isPlaceholder: false,
      placeholderLabel: 'Lo Loestrin Fe × Serena Pitt'
    },
    metrics: undefined,
    mediaGallery: [
      {
        id: 'lolo-ex-1',
        type: 'video',
        title: 'Lo Loestrin Fe × Serena Pitt · Daily Routine & Reproductive Health',
        aspectRatio: '9:16',
        exampleNumber: 1,
        collaborator: 'Serena Pitt',
        talent: 'Serena Pitt × Lo Loestrin Fe',
        format: '9:16 Vertical HD',
        videoUrl: '/videos/C3QIH4YMZBd.mp4',
        posterUrl: '/thumbnails/C3QIH4YMZBd.jpg',
        poster: '/thumbnails/C3QIH4YMZBd.jpg',
        src: '/videos/C3QIH4YMZBd.mp4',
        isPlaceholder: false,
        description: 'FDA/FTC compliant pharma partnership with Bachelor in Paradise star Serena Pitt demystifying oral contraceptive conversations for modern women.',
        caption: 'FDA/FTC compliant pharma partnership with Bachelor in Paradise star Serena Pitt demystifying oral contraceptive conversations for modern women.'
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
