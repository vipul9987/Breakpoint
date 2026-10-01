import React, { useState } from 'react';
import { ExternalLink, Play, Instagram, Sparkles, Film } from 'lucide-react';
import { INSTAGRAM_REELS_LIST, InstagramReelItem } from '../data/campaigns';
import { CampaignMediaItem } from '../types/campaign';

interface InstagramReelsGridProps {
  onOpenLightbox: (media: CampaignMediaItem) => void;
}

export const InstagramReelsGrid: React.FC<InstagramReelsGridProps> = ({ onOpenLightbox }) => {
  const [filter, setFilter] = useState<string>('All Reels');

  const categories = ['All Reels', 'Creative Production', 'Social Media Management', 'Brand Development & Positioning', 'Event Marketing'];

  const filteredReels = filter === 'All Reels'
    ? INSTAGRAM_REELS_LIST
    : INSTAGRAM_REELS_LIST.filter(r => r.category === filter);

  const handleOpenMedia = (reel: InstagramReelItem) => {
    const mediaItem: CampaignMediaItem = {
      id: reel.id,
      type: 'instagram',
      title: reel.title,
      aspectRatio: reel.aspectRatio,
      embedUrl: reel.embedUrl,
      externalUrl: reel.externalUrl,
      poster: reel.coverImage,
      src: reel.externalUrl,
      caption: `Official Breakpoint Social campaign deliverable (${reel.category}).`
    };
    onOpenLightbox(mediaItem);
  };

  return (
    <section id="instagram-reels-showcase" className="py-20 md:py-28 bg-[#141615] text-white border-b border-white/10">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 pb-10 border-b border-white/10">
          <div className="max-w-3xl">
            <div className="flex items-center gap-2 mb-3">
              <span className="w-2.5 h-2.5 rounded-full bg-[#f1d5a0] animate-pulse" />
              <span className="text-xs uppercase tracking-[0.2em] font-bold text-[#f1d5a0]">
                CLIENT REELS &amp; CONTENT PORTFOLIO
              </span>
              <span className="text-xs text-white/40">·</span>
              <span className="text-xs text-white/80 font-mono bg-white/10 px-2.5 py-0.5 rounded-full border border-white/15">
                16 Verified Instagram Reels
              </span>
            </div>

            <h2 className="text-3xl sm:text-5xl font-extrabold text-white tracking-tight font-display">
              Social Reels Showcase
            </h2>

            <p className="mt-4 text-base sm:text-lg text-white/80 leading-relaxed">
              Explore 16 client Instagram Reels produced and engineered by Breakpoint Social. Click any card to launch the fullscreen player.
            </p>
          </div>

          <div className="flex items-center gap-3">
            <a
              href="https://www.instagram.com"
              target="_blank"
              rel="noopener noreferrer"
              className="px-5 py-2.5 text-xs font-semibold text-black bg-[#f1d5a0] hover:bg-white rounded-full transition-colors flex items-center gap-2"
            >
              <Instagram className="w-4 h-4" />
              <span>Agency Instagram</span>
            </a>
          </div>
        </div>

        {/* Filter Pills */}
        <div className="my-8 flex items-center gap-2 overflow-x-auto pb-2 scrollbar-none">
          {categories.map((cat) => {
            const isActive = filter === cat;
            return (
              <button
                key={cat}
                onClick={() => setFilter(cat)}
                className={`px-4 py-2 text-xs font-semibold rounded-full transition-all whitespace-nowrap ${
                  isActive
                    ? 'bg-[#84572f] text-white shadow-sm border border-[#f1d5a0]/40'
                    : 'bg-white/5 text-white/70 hover:bg-white/15 hover:text-white border border-white/10'
                }`}
              >
                {cat} {cat === 'All Reels' ? `(${INSTAGRAM_REELS_LIST.length})` : ''}
              </button>
            );
          })}
        </div>

        {/* 16 Premium Aesthetic Reels Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
          {filteredReels.map((reel, idx) => (
            <div
              key={reel.id}
              onClick={() => handleOpenMedia(reel)}
              className="group relative bg-[#1c1e1d] rounded-2xl border border-white/10 hover:border-[#f1d5a0]/60 overflow-hidden shadow-xl hover:shadow-2xl transition-all duration-500 cursor-pointer flex flex-col"
            >
              {/* 9:16 High-Aesthetic Cover Image Viewport */}
              <div className="relative w-full aspect-[9/16] bg-neutral-900 overflow-hidden">
                <img
                  src={reel.coverImage}
                  alt={reel.title}
                  className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                  loading="lazy"
                />

                {/* Dark Vignette & Gradient Overlay */}
                <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/30 to-black/40 group-hover:via-black/20 transition-colors" />

                {/* Top Header Badge Row */}
                <div className="absolute top-3.5 left-3.5 right-3.5 flex items-center justify-between z-10">
                  <span className="px-2.5 py-1 rounded-md text-[10px] font-bold uppercase tracking-wider bg-black/70 text-[#f1d5a0] backdrop-blur-md border border-white/15">
                    REEL 0{idx + 1}
                  </span>

                  <div className="flex items-center gap-1.5">
                    <a
                      href={reel.externalUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      onClick={(e) => e.stopPropagation()}
                      title="Open on Instagram"
                      className="p-1.5 rounded-full bg-black/60 hover:bg-[#84572f] text-white transition-colors border border-white/15 backdrop-blur-md"
                    >
                      <ExternalLink className="w-3.5 h-3.5" />
                    </a>
                  </div>
                </div>

                {/* Center Glowing Play Icon */}
                <div className="absolute inset-0 flex items-center justify-center z-10 pointer-events-none">
                  <div className="w-16 h-16 rounded-full bg-[#84572f]/90 group-hover:bg-[#84572f] text-white flex items-center justify-center shadow-2xl border border-white/20 transition-transform duration-300 group-hover:scale-110">
                    <Play className="w-7 h-7 fill-white ml-0.5" />
                  </div>
                </div>

                {/* Bottom Overlay Text */}
                <div className="absolute bottom-3.5 left-3.5 right-3.5 z-10">
                  <div className="flex items-center gap-1.5 text-[10px] text-[#f1d5a0] font-mono mb-1">
                    <Instagram className="w-3 h-3" />
                    <span>@breakpointsocial</span>
                    <span>·</span>
                    <span>9:16 Reel</span>
                  </div>

                  <h3 className="text-sm font-bold text-white leading-snug line-clamp-2 drop-shadow-md">
                    {reel.title}
                  </h3>
                </div>
              </div>

              {/* Card Footer */}
              <div className="p-3.5 bg-[#181a19] border-t border-white/10 flex items-center justify-between text-xs text-white/80">
                <span className="text-[11px] text-[#f1d5a0] font-semibold group-hover:underline flex items-center gap-1">
                  <span>Watch Reel</span>
                  <span>&rarr;</span>
                </span>
                <span className="text-[10px] text-white/50 font-mono">{reel.category}</span>
              </div>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
};
