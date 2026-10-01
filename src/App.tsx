import React, { useState } from 'react';
import { Header } from './components/Header';
import { Hero } from './components/Hero';
import { FeaturedCampaign } from './components/FeaturedCampaign';
import { CampaignShowcase } from './components/CampaignShowcase';
import { FinalCTA } from './components/FinalCTA';
import { Footer } from './components/Footer';
import { MediaLightbox } from './components/MediaLightbox';
import { CampaignDetailModal } from './components/CampaignDetailModal';
import { AssetStatusNotice } from './components/AssetStatusNotice';
import { ContactModal } from './components/ContactModal';
import { INITIAL_CAMPAIGNS } from './data/campaigns';
import { Campaign, CampaignMediaItem } from './types/campaign';

export default function App() {
  const [campaigns, setCampaigns] = useState<Campaign[]>(INITIAL_CAMPAIGNS);
  
  // Modals state
  const [selectedCampaign, setSelectedCampaign] = useState<Campaign | null>(null);
  const [lightboxMedia, setLightboxMedia] = useState<CampaignMediaItem | null>(null);
  const [isIntakeNoticeOpen, setIsIntakeNoticeOpen] = useState(false);
  const [isContactOpen, setIsContactOpen] = useState(false);

  // Featured campaign is Lo Lo Estrin Fe
  const featuredCampaign = campaigns.find(c => c.id === 'lo-lo-estrin-fe') || campaigns[0];

  const handleScrollToCampaigns = () => {
    const el = document.getElementById('case-studies');
    if (el) {
      el.scrollIntoView({ behavior: 'smooth' });
    }
  };

  const handleSelectFeatured = () => {
    const el = document.getElementById('featured-campaign');
    if (el) {
      el.scrollIntoView({ behavior: 'smooth' });
    }
  };

  const handleAddCampaign = (newCampaign: Campaign) => {
    setCampaigns(prev => [newCampaign, ...prev]);
  };

  const handleUpdateMediaItem = (updatedMedia: CampaignMediaItem) => {
    setCampaigns(prev => prev.map(c => {
      const idx = c.mediaGallery.findIndex(m => m.id === updatedMedia.id);
      if (idx !== -1) {
        const newGallery = [...c.mediaGallery];
        newGallery[idx] = updatedMedia;
        return { ...c, mediaGallery: newGallery };
      }
      return c;
    }));
    if (lightboxMedia?.id === updatedMedia.id) {
      setLightboxMedia(updatedMedia);
    }
  };

  return (
    <div className="min-h-screen bg-[#fcf5e9] text-[#1c1c1c] flex flex-col font-body selection:bg-[#92ada4] selection:text-white">
      {/* Top Banner: Verification Protocol Notice */}
      <div className="bg-[#84572f] text-white text-[11px] py-1.5 px-4 text-center tracking-wider uppercase font-semibold flex items-center justify-center gap-2">
        <span className="w-1.5 h-1.5 rounded-full bg-[#f1d5a0] animate-pulse" />
        <span>Breakpoint Social Case Studies Showcase · San Diego Social Media Agency</span>
        <button
          onClick={() => setIsIntakeNoticeOpen(true)}
          className="underline hover:text-[#f1d5a0] ml-2 normal-case font-normal text-[11px]"
        >
          View Asset Status &amp; Intake Log
        </button>
      </div>

      {/* Main Header */}
      <Header onOpenContact={() => setIsContactOpen(true)} />

      <main className="flex-1">
        {/* Section 01: Hero */}
        <Hero 
          onScrollToCampaigns={handleScrollToCampaigns}
          onSelectFeatured={handleSelectFeatured}
        />

        {/* Section 03: Featured Campaign (Lo Lo Estrin Fe with Serena Pitt) */}
        <FeaturedCampaign
          campaign={featuredCampaign}
          onOpenLightbox={(media) => setLightboxMedia(media)}
          onViewFullCaseStudy={(camp) => setSelectedCampaign(camp)}
          onUpdateMediaItem={handleUpdateMediaItem}
        />

        {/* Section 02 & 04: Campaign Showcase & Additional Case Studies */}
        <CampaignShowcase
          campaigns={campaigns}
          onSelectCampaign={(camp) => setSelectedCampaign(camp)}
          onOpenIntakeGuide={() => setIsIntakeNoticeOpen(true)}
        />

        {/* Section 06: Final CTA */}
        <FinalCTA onOpenContact={() => setIsContactOpen(true)} />
      </main>

      {/* Footer */}
      <Footer />

      {/* Media Lightbox */}
      <MediaLightbox
        media={lightboxMedia}
        onClose={() => setLightboxMedia(null)}
        onUpdateMedia={handleUpdateMediaItem}
      />

      {/* Deep Campaign Detail Modal */}
      <CampaignDetailModal
        campaign={selectedCampaign}
        allCampaigns={campaigns}
        onClose={() => setSelectedCampaign(null)}
        onOpenLightbox={(media) => setLightboxMedia(media)}
        onSelectCampaign={(camp) => setSelectedCampaign(camp)}
      />

      {/* Asset Intake Status & Scalability Staging Tool */}
      <AssetStatusNotice
        isOpen={isIntakeNoticeOpen}
        onClose={() => setIsIntakeNoticeOpen(false)}
        onAddCampaign={handleAddCampaign}
      />

      {/* Contact Inquiry Modal */}
      <ContactModal
        isOpen={isContactOpen}
        onClose={() => setIsContactOpen(false)}
        prefilledCampaign={selectedCampaign?.brand}
      />
    </div>
  );
}
