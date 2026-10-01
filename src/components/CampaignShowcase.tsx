import React, { useState, useMemo } from 'react';
import { ArrowUpRight, Filter, ShieldCheck, Film, Image as ImageIcon, Sparkles, FolderArchive, Layers } from 'lucide-react';
import { Campaign, PublicationStatus } from '../types/campaign';
import { CAMPAIGN_CATEGORIES } from '../data/campaigns';

interface CampaignShowcaseProps {
  campaigns: Campaign[];
  onSelectCampaign: (campaign: Campaign) => void;
  onOpenIntakeGuide: () => void;
}

export const CampaignShowcase: React.FC<CampaignShowcaseProps> = ({
  campaigns,
  onSelectCampaign,
  onOpenIntakeGuide
}) => {
  const [selectedCategory, setSelectedCategory] = useState<string>('All Work');
  const [statusFilter, setStatusFilter] = useState<'all' | 'published' | 'draft_review'>('all');

  const filteredCampaigns = useMemo(() => {
    return campaigns.filter(item => {
      // Category match
      const categoryMatch = selectedCategory === 'All Work' || item.category === selectedCategory;
      
      // Status match
      let statusMatch = true;
      if (statusFilter === 'published') {
        statusMatch = item.publicationStatus === 'published';
      } else if (statusFilter === 'draft_review') {
        statusMatch = item.publicationStatus === 'draft' || item.publicationStatus === 'client_review';
      }

      return categoryMatch && statusMatch;
    });
  }, [campaigns, selectedCategory, statusFilter]);

  return (
    <section id="case-studies" className="py-20 md:py-28">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-12">
          <div className="max-w-2xl">
            <div className="flex items-center gap-2 mb-3">
              <span className="text-xs uppercase tracking-[0.2em] font-bold text-[#84572f]">
                CAMPAIGN SHOWCASE
              </span>
              <span className="text-xs text-[#1c1c1c]/50 font-normal">·</span>
              <span className="text-xs text-[#1c1c1c]/70 font-medium">Selected Client Deliverables</span>
            </div>

            <h2 className="text-3xl sm:text-5xl font-extrabold text-[#141615] tracking-tight font-display">
              Work That Speaks for Itself
            </h2>

            <p className="mt-4 text-base sm:text-lg text-[#1c1c1c]/80 leading-relaxed">
              A collection of campaigns, creative collaborations, and brand stories developed by Breakpoint Social.
            </p>
          </div>

          {/* Quick intake status button */}
          <button
            onClick={onOpenIntakeGuide}
            className="inline-flex items-center gap-2 px-4 py-2 text-xs font-semibold text-[#84572f] bg-[#f1d5a0]/30 hover:bg-[#f1d5a0]/50 border border-[#84572f]/20 rounded-full transition-colors self-start md:self-auto"
          >
            <FolderArchive className="w-3.5 h-3.5" />
            <span>Asset Intake &amp; Workflow Center</span>
          </button>
        </div>

        {/* Filter Controls Bar */}
        <div className="mb-10 pb-6 border-b border-[#84572f]/10 flex flex-col lg:flex-row lg:items-center justify-between gap-4">
          
          {/* Category Tabs (Functional buttons per design guidelines) */}
          <div className="flex items-center gap-1.5 overflow-x-auto pb-2 lg:pb-0 scrollbar-none">
            {CAMPAIGN_CATEGORIES.map(category => {
              const isActive = selectedCategory === category;
              return (
                <button
                  key={category}
                  onClick={() => setSelectedCategory(category)}
                  className={`px-4 py-2 text-xs font-semibold rounded-full transition-all whitespace-nowrap ${
                    isActive
                      ? 'bg-[#84572f] text-white shadow-xs'
                      : 'bg-[#92ada4]/15 text-[#1c1c1c]/80 hover:bg-[#92ada4]/25 hover:text-[#1c1c1c]'
                  }`}
                >
                  {category}
                </button>
              );
            })}
          </div>

          {/* Secondary filter: All vs Client Drafts */}
          <div className="flex items-center gap-2 text-xs">
            <span className="text-[#1c1c1c]/60 font-medium shrink-0">Status:</span>
            <div className="flex items-center bg-[#92ada4]/15 rounded-lg p-1">
              <button
                onClick={() => setStatusFilter('all')}
                className={`px-3 py-1 rounded text-xs font-medium transition-colors ${
                  statusFilter === 'all'
                    ? 'bg-white text-[#141615] shadow-xs'
                    : 'text-[#1c1c1c]/70 hover:text-[#1c1c1c]'
                }`}
              >
                All ({campaigns.length})
              </button>
              <button
                onClick={() => setStatusFilter('draft_review')}
                className={`px-3 py-1 rounded text-xs font-medium transition-colors ${
                  statusFilter === 'draft_review'
                    ? 'bg-white text-[#141615] shadow-xs'
                    : 'text-[#1c1c1c]/70 hover:text-[#1c1c1c]'
                }`}
              >
                Staging &amp; Intake
              </button>
            </div>
          </div>
        </div>

        {/* Campaign Editorial Grid (Dynamic Asymmetric Cards) */}
        {filteredCampaigns.length === 0 ? (
          <div className="text-center py-16 bg-[#f6f8f5] rounded-2xl border border-[#84572f]/10">
            <p className="text-sm font-semibold text-[#141615]">No campaigns found matching this filter.</p>
            <button
              onClick={() => {
                setSelectedCategory('All Work');
                setStatusFilter('all');
              }}
              className="mt-3 text-xs text-[#84572f] font-semibold underline hover:no-underline"
            >
              Reset Filters
            </button>
          </div>
        ) : (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {filteredCampaigns.map((item, index) => {
              // Asymmetric sizing for visual interest: first card or featured card can be wide
              const isLarge = index === 0;

              return (
                <article
                  key={item.id}
                  onClick={() => onSelectCampaign(item)}
                  className={`group relative flex flex-col bg-[#fcf5e9] rounded-2xl overflow-hidden border border-[#84572f]/15 hover:border-[#84572f]/40 transition-all duration-300 shadow-sm hover:shadow-md cursor-pointer ${
                    isLarge ? 'md:col-span-2 lg:col-span-2' : ''
                  }`}
                >
                  {/* Media Container with proper framing */}
                  <div className={`relative w-full overflow-hidden bg-[#141615] ${
                    isLarge ? 'aspect-[16/9] sm:aspect-[21/9]' : 'aspect-[16/10]'
                  }`}>
                    
                    {/* Simulated Clean Frame for Campaign Preview */}
                    <div className="absolute inset-0 bg-gradient-to-br from-[#1c1e1d] to-[#121312] flex flex-col items-center justify-center p-6 text-center">
                      <div className="w-12 h-12 rounded-full bg-[#92ada4]/15 border border-[#92ada4]/30 flex items-center justify-center text-[#92ada4] mb-3 group-hover:scale-105 transition-transform">
                        {item.category === 'Creative Production' ? (
                          <Film className="w-5 h-5 text-[#92ada4]" />
                        ) : item.category === 'Social Media Management' ? (
                          <Sparkles className="w-5 h-5 text-[#f1d5a0]" />
                        ) : (
                          <Layers className="w-5 h-5 text-[#84572f]" />
                        )}
                      </div>

                      <p className="text-xs uppercase font-mono tracking-wider text-[#f1d5a0]/90">
                        {item.driveAssetRef ? `${item.driveAssetRef} · INTAKE` : item.brand}
                      </p>

                      <h3 className="mt-1 text-sm sm:text-base font-bold text-white max-w-md line-clamp-2 px-4">
                        {item.title}
                      </h3>

                      {item.collaboratorNames && item.collaboratorNames.length > 0 && (
                        <p className="mt-1.5 text-xs text-white/60">
                          Ft. {item.collaboratorNames.join(', ')}
                        </p>
                      )}

                      <div className="mt-3 inline-flex items-center gap-1.5 px-2.5 py-1 rounded bg-black/40 border border-white/10 text-[10px] text-white/70">
                        {item.publicationStatus === 'published' ? (
                          <span className="text-emerald-400 font-medium">Verified Active</span>
                        ) : (
                          <span className="text-[#f1d5a0]">Draft Working Slot</span>
                        )}
                      </div>
                    </div>

                    {/* Top badging */}
                    <div className="absolute top-4 left-4 right-4 flex items-center justify-between pointer-events-none">
                      <span className="px-2.5 py-1 rounded text-[10px] font-bold uppercase tracking-wider bg-black/70 text-white backdrop-blur-xs">
                        {item.category}
                      </span>

                      {item.isFeatured && (
                        <span className="px-2.5 py-1 rounded text-[10px] font-bold uppercase tracking-wider bg-[#84572f] text-white shadow-xs">
                          Featured
                        </span>
                      )}
                    </div>
                  </div>

                  {/* Body Content */}
                  <div className="p-6 flex-1 flex flex-col justify-between">
                    <div>
                      {/* Brand Name & Metadata without pill boxes (per design constitution) */}
                      <div className="flex items-center gap-2 text-xs text-[#84572f] font-semibold mb-2">
                        <span>{item.brand}</span>
                        <span aria-hidden="true" className="text-[#1c1c1c]/30">·</span>
                        <span className="text-[#1c1c1c]/60 font-normal">{item.category}</span>
                        {item.driveAssetRef && (
                          <>
                            <span aria-hidden="true" className="text-[#1c1c1c]/30">·</span>
                            <span className="text-amber-800 font-medium">{item.driveAssetRef}</span>
                          </>
                        )}
                      </div>

                      {/* Title */}
                      <h3 className="text-lg sm:text-xl font-bold text-[#141615] group-hover:text-[#84572f] transition-colors leading-snug">
                        {item.title}
                      </h3>

                      {/* Overview */}
                      <p className="mt-2 text-xs sm:text-sm text-[#1c1c1c]/75 leading-relaxed line-clamp-2">
                        {item.shortDescription}
                      </p>

                      {/* Services Delivered */}
                      <div className="mt-4 pt-3 border-t border-[#84572f]/10">
                        <p className="text-[11px] uppercase tracking-wider font-semibold text-[#1c1c1c]/50 mb-1.5">
                          Services
                        </p>
                        <div className="flex flex-wrap gap-x-2 gap-y-1 text-xs text-[#1c1c1c]/70">
                          {item.servicesProvided.slice(0, 3).map((srv, idx) => (
                            <span key={idx}>
                              {srv}{idx < Math.min(item.servicesProvided.length, 3) - 1 ? ' ·' : ''}
                            </span>
                          ))}
                        </div>
                      </div>
                    </div>

                    {/* Footer CTA */}
                    <div className="mt-6 pt-4 border-t border-[#84572f]/10 flex items-center justify-between">
                      <span className="text-xs font-bold text-[#84572f] group-hover:underline flex items-center gap-1">
                        <span>View Case Study Details</span>
                        <ArrowUpRight className="w-3.5 h-3.5 transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
                      </span>

                      <span className="text-[11px] text-[#1c1c1c]/50 font-mono">
                        {item.mediaGallery.length} {item.mediaGallery.length === 1 ? 'Deliverable' : 'Deliverables'}
                      </span>
                    </div>

                  </div>
                </article>
              );
            })}
          </div>
        )}

      </div>
    </section>
  );
};
