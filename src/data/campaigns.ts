import { Campaign, CampaignMediaItem, DeliverableAnalytics } from '../types/campaign';

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
  analytics?: DeliverableAnalytics;
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
    coverImage: '/thumbnails/DUGu1FSgQd3.jpg',
    analytics: {
      views: '57K+',
      viewsContext: 'views on single deliverable',
      nonFollowerReach: '92%',
      interactions: '3.4K',
      followersGained: '+184',
      highlight: '57K+ Single Deliverable Views',
      summary: 'Captured 57K+ organic views with 92% non-follower reach, driving record in-store lunchtime traffic across San Diego.'
    }
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
    coverImage: '/thumbnails/DVeOXQuj2pd.jpg',
    analytics: {
      views: '139K+',
      viewsContext: 'in 30 days',
      nonFollowerReach: '89%',
      interactions: '12K+',
      followersGained: '+340',
      highlight: '139K+ Views · 89% Discovery',
      summary: 'Generated 139K+ views and 12K+ interactions with 89% non-follower discovery across Southern California.'
    }
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
    coverImage: '/thumbnails/DU1Nqkskqkv.jpg',
    analytics: {
      views: '48K+',
      viewsContext: 'in 30 days',
      nonFollowerReach: '84%',
      interactions: '3.1K',
      followersGained: '+92',
      highlight: 'Lunchtime Conversion Spike',
      summary: 'Direct lunchtime promotional reel driving instant foot traffic and 48K+ targeted impressions in Agoura Hills.'
    }
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
    coverImage: '/thumbnails/DUthoHbEnjN.jpg',
    analytics: {
      views: '52K+',
      viewsContext: 'in 30 days',
      nonFollowerReach: '86%',
      interactions: '4.2K',
      followersGained: '+115',
      highlight: 'Local Craft & Brand Loyalty',
      summary: 'Behind-the-scenes kitchen craft reel driving 52K+ impressions and enduring local brand trust.'
    }
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
    coverImage: '/thumbnails/DXztiY9hv9b.jpg',
    analytics: {
      views: '84K+',
      viewsContext: 'in 30 days',
      nonFollowerReach: '88%',
      interactions: '6.4K',
      followersGained: '+631',
      highlight: '+631 New Followers in 30 Days',
      summary: 'Drove +631 new local followers and 84K+ views ahead of weekend live music and patio dining.'
    }
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
    coverImage: '/thumbnails/Dbv5PohD_xq.jpg',
    analytics: {
      views: '112K+',
      viewsContext: 'viral organic spike',
      nonFollowerReach: '93%',
      interactions: '7.8K',
      followersGained: '+240',
      highlight: '112K+ Views · 93% Non-Followers',
      summary: 'Disruptive humor hook driving 112K+ views and a 3.2x increase in bio-link residential sanitation inquiries.'
    }
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
    coverImage: '/thumbnails/DYIBFIvxoZ5.jpg',
    analytics: {
      views: '98K+',
      viewsContext: 'single video deliverable',
      nonFollowerReach: '94%',
      interactions: '8.7K',
      followersGained: '+195',
      highlight: 'Viral Sports-Dining Crossover',
      summary: 'Viral golf pro tee-off stunt resulting in 98K+ views and top organic share-to-view ratio in Simi Valley.'
    }
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
    description: 'Slow-smoked barbecue showcase focusing on mouthwatering brisket bark, tender fall-off-the-bone ribs, and authentic pitmaster technique.',
    aspectRatio: '9:16',
    coverImage: '/thumbnails/DYfk-fkvdPr.jpg',
    analytics: {
      views: '76K+',
      viewsContext: 'in 30 days',
      nonFollowerReach: '91%',
      interactions: '5.9K',
      followersGained: '+160',
      highlight: '91% Non-Follower Discovery',
      summary: '91% non-follower discovery with high completion rate on slow-smoked barbecue brisket and ribs.'
    }
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
    coverImage: '/thumbnails/DcT9xV5l7pJ.jpg',
    analytics: {
      views: '64K+',
      viewsContext: 'in 30 days',
      nonFollowerReach: '87%',
      interactions: '4.3K',
      followersGained: '+128',
      highlight: 'High-Converting Service Demo',
      summary: 'Commercial power wash transformation demonstrating 200° sterilization with 87% non-follower reach.'
    }
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
    coverImage: '/thumbnails/DHlx5PFPtud.jpg',
    analytics: {
      views: '146K+',
      viewsContext: 'in 30 days',
      nonFollowerReach: '92%',
      interactions: '18.5K',
      followersGained: '+520',
      highlight: '18.5K+ Community Interactions',
      summary: 'Emotional personal resilience story driving 18.5K+ interactions and 92% non-follower discovery.'
    }
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
    coverImage: '/thumbnails/DHWtKr1TMV9.jpg',
    analytics: {
      views: '124K+',
      viewsContext: 'in 30 days',
      nonFollowerReach: '85%',
      interactions: '11.8K',
      followersGained: '+380',
      highlight: 'High Audience Watch Time',
      summary: 'Couples marathon training narrative resulting in 124K+ views and strong organic audience retention.'
    }
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
    coverImage: '/thumbnails/DHCYNcfS6BJ.jpg',
    analytics: {
      views: '162K+',
      viewsContext: 'in 30 days',
      nonFollowerReach: '90%',
      interactions: '16.1K',
      followersGained: '+470',
      highlight: '162K+ Global Community Reach',
      summary: '162K+ organic views empowering runners and adaptive athletes across global running communities.'
    }
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
    coverImage: '/thumbnails/DGl546eOni9.jpg',
    analytics: {
      views: '185K+',
      viewsContext: 'in 30 days',
      nonFollowerReach: '88%',
      interactions: '14.2K',
      followersGained: '+510',
      highlight: '185K+ Campaign Hero Launch',
      summary: 'Lead launch deliverable generating 185K+ views with high retention on the Glycerin 22 shoe reveal.'
    }
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
    coverImage: '/thumbnails/C3QIH4YMZBd.jpg',
    analytics: {
      views: '210K+',
      viewsContext: 'campaign activation',
      nonFollowerReach: '84%',
      interactions: '15.4K',
      followersGained: '+620',
      highlight: 'Pharma-Compliant 210K+ Reach',
      summary: '210K+ reach while maintaining strict FDA/FTC compliance and candid reproductive wellness engagement.'
    }
  },
  {
    id: 'reel-15',
    reelCode: 'tavern101_margarita',
    title: 'Tavern 101 Grill · Craft Watermelon Margarita Mixology',
    category: 'Creative Production',
    videoUrl: '/videos/tavern101_margarita.mp4',
    posterUrl: '/thumbnails/tavern101_margarita.jpg',
    talent: 'Tavern 101 American Grill',
    format: '9:16 Vertical HD',
    description: 'Step-by-step craft mixology deliverable highlighting the signature fresh watermelon margarita, salted rim, and premium cocktail presentation.',
    aspectRatio: '9:16',
    coverImage: '/thumbnails/tavern101_margarita.jpg',
    analytics: {
      views: '64K+',
      viewsContext: 'in 30 days',
      nonFollowerReach: '91%',
      interactions: '5.8K',
      followersGained: '+175',
      highlight: 'Cocktail Recipe ASMR & High Discovery',
      summary: 'Dynamic mixology reel driving 64K+ views and a 91% non-follower discovery rate for weekend bar promotions.'
    }
  },
  {
    id: 'reel-16',
    reelCode: 'tavern101_bartender_gossip',
    title: 'Tavern 101 Grill · Bar Culture & Late-Night Vibes',
    category: 'Social Media Management',
    videoUrl: '/videos/tavern101_bartender_gossip.mp4',
    posterUrl: '/thumbnails/tavern101_bartender_gossip.jpg',
    talent: 'Tavern 101 American Grill',
    format: '9:16 Vertical HD',
    description: 'Relatable bar comedy and community-driven short-form reel capturing the lively late-night energy and friendly neighborhood bartenders.',
    aspectRatio: '9:16',
    coverImage: '/thumbnails/tavern101_bartender_gossip.jpg',
    analytics: {
      views: '82K+',
      viewsContext: 'in 30 days',
      nonFollowerReach: '88%',
      interactions: '7.4K',
      followersGained: '+260',
      highlight: 'Viral Hospitality Humor',
      summary: 'High-relatability hospitality comedy generated 82K+ views with massive comment-section engagement and shares.'
    }
  },
  {
    id: 'reel-17',
    reelCode: 'tavern101_owner_bts',
    title: 'Tavern 101 Grill · Behind The Scenes: Founder & Kitchen Shoot',
    category: 'Brand Development & Positioning',
    videoUrl: '/videos/tavern101_owner_bts.mp4',
    posterUrl: '/thumbnails/tavern101_owner_bts.jpg',
    talent: 'Tavern 101 American Grill',
    format: '9:16 Vertical HD',
    description: 'Behind-the-scenes founder reel showing Breakpoint Social on-location production outside the iconic Tavern 101 landmark tower.',
    aspectRatio: '9:16',
    coverImage: '/thumbnails/tavern101_owner_bts.jpg',
    analytics: {
      views: '41K+',
      viewsContext: 'in 30 days',
      nonFollowerReach: '83%',
      interactions: '3.2K',
      followersGained: '+115',
      highlight: 'Local Brand Authenticity',
      summary: 'Authentic behind-the-scenes content humanizing the brand and establishing local Agoura Hills community resonance.'
    }
  },
  {
    id: 'reel-18',
    reelCode: 'simihills_hole18_par5',
    title: 'Simi Hills Golf Course · Hole 18 Par 5 Fairway Flyover',
    category: 'Event Marketing',
    videoUrl: '/videos/simihills_hole18_par5.mp4',
    posterUrl: '/thumbnails/simihills_hole18_par5.jpg',
    talent: 'Simi Hills Golf Course',
    format: '9:16 Vertical HD',
    description: 'Cinematic fairway course walkthrough highlighting Hole 18 Par 5, rolling greens, and premier Southern California golf conditions.',
    aspectRatio: '9:16',
    coverImage: '/thumbnails/simihills_hole18_par5.jpg',
    analytics: {
      views: '53K+',
      viewsContext: 'in 30 days',
      nonFollowerReach: '87%',
      interactions: '4.1K',
      followersGained: '+140',
      highlight: 'Tee Time Booking Surge',
      summary: 'Visual course highlight driving 53K+ views and direct weekend tee time booking inquiries among local golfers.'
    }
  },
  {
    id: 'reel-19',
    reelCode: 'breakpoint_culinary_prep',
    title: 'Artisanal Kitchen · Chef Scratch Dough & Culinary Craft',
    category: 'Creative Production',
    videoUrl: '/videos/breakpoint_culinary_prep.mp4',
    posterUrl: '/thumbnails/breakpoint_culinary_prep.jpg',
    talent: 'Breakpoint Social Culinary Partner',
    format: '9:16 Vertical HD',
    description: 'Sensory slow-motion culinary reel capturing scratch-made artisan baking, flour dusting, and kitchen dedication.',
    aspectRatio: '9:16',
    coverImage: '/thumbnails/breakpoint_culinary_prep.jpg',
    analytics: {
      views: '76K+',
      viewsContext: 'in 30 days',
      nonFollowerReach: '90%',
      interactions: '6.7K',
      followersGained: '+210',
      highlight: 'Sensory ASMR Pacing',
      summary: 'High aesthetic culinary video driving 76K+ views with 90% non-follower discovery and exceptional watch completion rates.'
    }
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
        caption: 'Cinematic creator campaign showcasing the all-new Brooks Glycerin 22 with DNA Tuned cushioning, driving endurance runner motivation and retail conversion.',
        analytics: {
          views: '185K+',
          viewsContext: 'in 30 days',
          nonFollowerReach: '88%',
          interactions: '14.2K',
          followersGained: '+510',
          highlight: '185K+ Campaign Hero Launch',
          summary: 'Lead launch deliverable generating 185K+ views with high retention on the Glycerin 22 shoe reveal.'
        }
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
        caption: 'Empowering creator documentary portrait featuring ISA World Champion Liv Stone overcoming arm disability perceptions through running and athletic determination.',
        analytics: {
          views: '162K+',
          viewsContext: 'in 30 days',
          nonFollowerReach: '90%',
          interactions: '16.1K',
          followersGained: '+470',
          highlight: '162K+ Global Community Reach',
          summary: '162K+ organic views empowering runners and adaptive athletes across global running communities.'
        }
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
        caption: 'Inspiring personal resilience story tracking Chase\'s journey from a hospital bed diagnosis to triumphantly running across the 5K finish line.',
        analytics: {
          views: '146K+',
          viewsContext: 'in 30 days',
          nonFollowerReach: '92%',
          interactions: '18.5K',
          followersGained: '+520',
          highlight: '18.5K+ Community Interactions',
          summary: 'Emotional personal resilience story driving 18.5K+ interactions and 92% non-follower discovery.'
        }
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
        caption: 'Heartfelt creator couple storytelling following Joe and Sally as running brought them together through joint training for their first marathon.',
        analytics: {
          views: '124K+',
          viewsContext: 'in 30 days',
          nonFollowerReach: '85%',
          interactions: '11.8K',
          followersGained: '+380',
          highlight: 'High Audience Watch Time',
          summary: 'Couples marathon training narrative resulting in 124K+ views and strong organic audience retention.'
        }
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
        isPlaceholder: false,
        analytics: {
          views: '76K+',
          viewsContext: 'in 30 days',
          nonFollowerReach: '91%',
          interactions: '5.9K',
          followersGained: '+160',
          highlight: '91% Non-Follower Discovery',
          summary: '91% non-follower discovery with high completion rate on slow-smoked barbecue brisket and ribs.'
        }
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
        isPlaceholder: false,
        analytics: {
          views: '84K+',
          viewsContext: 'in 30 days',
          nonFollowerReach: '88%',
          interactions: '6.4K',
          followersGained: '+631',
          highlight: '+631 New Followers in 30 Days',
          summary: 'Drove +631 new local followers and 84K+ views ahead of weekend live music and patio dining.'
        }
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
        isPlaceholder: false,
        analytics: {
          views: '98K+',
          viewsContext: 'single video deliverable',
          nonFollowerReach: '94%',
          interactions: '8.7K',
          followersGained: '+195',
          highlight: 'Viral Sports-Dining Crossover',
          summary: 'Viral golf pro tee-off stunt resulting in 98K+ views and top organic share-to-view ratio in Simi Valley.'
        }
      },
      {
        id: 'grill-ex-4',
        type: 'video',
        title: 'Simi Hills Golf Course · Hole 18 Par 5 Fairway Flyover',
        aspectRatio: '9:16',
        videoUrl: '/videos/simihills_hole18_par5.mp4',
        posterUrl: '/thumbnails/simihills_hole18_par5.jpg',
        poster: '/thumbnails/simihills_hole18_par5.jpg',
        src: '/videos/simihills_hole18_par5.mp4',
        talent: 'Simi Hills Golf Course',
        format: '9:16 Vertical HD',
        description: 'Cinematic fairway course walkthrough highlighting Hole 18 Par 5, rolling greens, and premier Southern California golf conditions.',
        caption: 'Cinematic fairway course walkthrough highlighting Hole 18 Par 5, rolling greens, and premier Southern California golf conditions.',
        isPlaceholder: false,
        analytics: {
          views: '53K+',
          viewsContext: 'in 30 days',
          nonFollowerReach: '87%',
          interactions: '4.1K',
          followersGained: '+140',
          highlight: 'Tee Time Booking Surge',
          summary: 'Visual course highlight driving 53K+ views and direct weekend tee time booking inquiries among local golfers.'
        }
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
        isPlaceholder: false,
        analytics: {
          views: '139K+',
          viewsContext: 'in 30 days',
          nonFollowerReach: '89%',
          interactions: '12K+',
          followersGained: '+340',
          highlight: '139K+ Views · 89% Discovery',
          summary: 'Generated 139K+ views and 12K+ interactions with 89% non-follower discovery across Southern California.'
        }
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
        isPlaceholder: false,
        analytics: {
          views: '48K+',
          viewsContext: 'in 30 days',
          nonFollowerReach: '84%',
          interactions: '3.1K',
          followersGained: '+92',
          highlight: 'Lunchtime Conversion Spike',
          summary: 'Direct lunchtime promotional reel driving instant foot traffic and 48K+ targeted impressions in Agoura Hills.'
        }
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
        isPlaceholder: false,
        analytics: {
          views: '52K+',
          viewsContext: 'in 30 days',
          nonFollowerReach: '86%',
          interactions: '4.2K',
          followersGained: '+115',
          highlight: 'Local Craft & Brand Loyalty',
          summary: 'Behind-the-scenes kitchen craft reel driving 52K+ impressions and enduring local brand trust.'
        }
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
        isPlaceholder: false,
        analytics: {
          views: '57K+',
          viewsContext: 'views on single deliverable',
          nonFollowerReach: '92%',
          interactions: '3.4K',
          followersGained: '+184',
          highlight: '57K+ Single Deliverable Views',
          summary: 'Captured 57K+ organic views with 92% non-follower reach, driving record in-store lunchtime traffic across San Diego.'
        }
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
        isPlaceholder: false,
        analytics: {
          views: '112K+',
          viewsContext: 'viral organic spike',
          nonFollowerReach: '93%',
          interactions: '7.8K',
          followersGained: '+240',
          highlight: '112K+ Views · 93% Non-Followers',
          summary: 'Disruptive humor hook driving 112K+ views and a 3.2x increase in bio-link residential sanitation inquiries.'
        }
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
        isPlaceholder: false,
        analytics: {
          views: '64K+',
          viewsContext: 'in 30 days',
          nonFollowerReach: '87%',
          interactions: '4.3K',
          followersGained: '+128',
          highlight: 'High-Converting Service Demo',
          summary: 'Commercial power wash transformation demonstrating 200° sterilization with 87% non-follower reach.'
        }
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
        caption: 'FDA/FTC compliant pharma partnership with Bachelor in Paradise star Serena Pitt demystifying oral contraceptive conversations for modern women.',
        analytics: {
          views: '210K+',
          viewsContext: 'campaign activation',
          nonFollowerReach: '84%',
          interactions: '15.4K',
          followersGained: '+620',
          highlight: 'Pharma-Compliant 210K+ Reach',
          summary: '210K+ reach while maintaining strict FDA/FTC compliance and candid reproductive wellness engagement.'
        }
      }
    ]
  },
  {
    id: 'tavern-101-grill',
    brand: 'Tavern 101 American Grill',
    title: 'Cocktail Mixology, Bar Culture & Local Restaurant Buzz',
    category: 'Creative Production',
    shortDescription: 'Dynamic restaurant social presence combining signature craft cocktail mixology, relatable hospitality humor, and behind-the-scenes founder stories.',
    fullDescription: 'Tavern 101 American Grill in Agoura Hills teamed up with Breakpoint Social to transform their local dining awareness into sustained foot traffic and vibrant weekend bar crowds. Through mouthwatering drink builds, engaging bartender interactions, and founder authenticity, we elevated their community standing across Southern California.',
    objective: 'Boost happy hour and weekend bar foot traffic while creating viral hospitality engagement among local diners.',
    creativeApproach: 'Pairing fast-paced craft mixology ASMR with hilarious, relatable bar interactions that drive organic comments and friend tags.',
    servicesProvided: [
      'Short-Form Video Production',
      'Cocktail Mixology Content',
      'Local Social Media Strategy',
      'Behind-The-Scenes Production'
    ],
    publicationStatus: 'published',
    displayOrder: 4,
    dateCreated: '2025-08',
    thumbnail: {
      type: 'video',
      aspectRatio: '9:16',
      src: '/videos/tavern101_margarita.mp4',
      isPlaceholder: false,
      placeholderLabel: 'Tavern 101 · Watermelon Margarita'
    },
    metrics: undefined,
    mediaGallery: [
      {
        id: 'tavern-ex-1',
        type: 'video',
        title: 'Tavern 101 Grill · Craft Watermelon Margarita Mixology',
        aspectRatio: '9:16',
        videoUrl: '/videos/tavern101_margarita.mp4',
        posterUrl: '/thumbnails/tavern101_margarita.jpg',
        poster: '/thumbnails/tavern101_margarita.jpg',
        src: '/videos/tavern101_margarita.mp4',
        talent: 'Tavern 101 American Grill',
        format: '9:16 Vertical HD',
        description: 'Step-by-step craft mixology deliverable highlighting the signature fresh watermelon margarita, salted rim, and premium cocktail presentation.',
        caption: 'Step-by-step craft mixology deliverable highlighting the signature fresh watermelon margarita, salted rim, and premium cocktail presentation.',
        isPlaceholder: false,
        analytics: {
          views: '64K+',
          viewsContext: 'in 30 days',
          nonFollowerReach: '91%',
          interactions: '5.8K',
          followersGained: '+175',
          highlight: 'Cocktail Recipe ASMR & High Discovery',
          summary: 'Dynamic mixology reel driving 64K+ views and a 91% non-follower discovery rate for weekend bar promotions.'
        }
      },
      {
        id: 'tavern-ex-2',
        type: 'video',
        title: 'Tavern 101 Grill · Bar Culture & Late-Night Vibes',
        aspectRatio: '9:16',
        videoUrl: '/videos/tavern101_bartender_gossip.mp4',
        posterUrl: '/thumbnails/tavern101_bartender_gossip.jpg',
        poster: '/thumbnails/tavern101_bartender_gossip.jpg',
        src: '/videos/tavern101_bartender_gossip.mp4',
        talent: 'Tavern 101 American Grill',
        format: '9:16 Vertical HD',
        description: 'Relatable bar comedy and community-driven short-form reel capturing the lively late-night energy and friendly neighborhood bartenders.',
        caption: 'Relatable bar comedy and community-driven short-form reel capturing the lively late-night energy and friendly neighborhood bartenders.',
        isPlaceholder: false,
        analytics: {
          views: '82K+',
          viewsContext: 'in 30 days',
          nonFollowerReach: '88%',
          interactions: '7.4K',
          followersGained: '+260',
          highlight: 'Viral Hospitality Humor',
          summary: 'High-relatability hospitality comedy generated 82K+ views with massive comment-section engagement and shares.'
        }
      },
      {
        id: 'tavern-ex-3',
        type: 'video',
        title: 'Tavern 101 Grill · Behind The Scenes: Founder & Kitchen Shoot',
        aspectRatio: '9:16',
        videoUrl: '/videos/tavern101_owner_bts.mp4',
        posterUrl: '/thumbnails/tavern101_owner_bts.jpg',
        poster: '/thumbnails/tavern101_owner_bts.jpg',
        src: '/videos/tavern101_owner_bts.mp4',
        talent: 'Tavern 101 American Grill',
        format: '9:16 Vertical HD',
        description: 'Behind-the-scenes founder reel showing Breakpoint Social on-location production outside the iconic Tavern 101 landmark tower.',
        caption: 'Behind-the-scenes founder reel showing Breakpoint Social on-location production outside the iconic Tavern 101 landmark tower.',
        isPlaceholder: false,
        analytics: {
          views: '41K+',
          viewsContext: 'in 30 days',
          nonFollowerReach: '83%',
          interactions: '3.2K',
          followersGained: '+115',
          highlight: 'Local Brand Authenticity',
          summary: 'Authentic behind-the-scenes content humanizing the brand and establishing local Agoura Hills community resonance.'
        }
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
