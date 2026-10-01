import React, { useState } from 'react';
import { X, Plus, CheckCircle, Clock, FileQuestion, Sparkles, FolderUp } from 'lucide-react';
import { Campaign, CampaignCategory, PublicationStatus } from '../types/campaign';

interface AssetStatusNoticeProps {
  isOpen: boolean;
  onClose: () => void;
  onAddCampaign: (newCampaign: Campaign) => void;
}

export const AssetStatusNotice: React.FC<AssetStatusNoticeProps> = ({
  isOpen,
  onClose,
  onAddCampaign
}) => {
  const [activeTab, setActiveTab] = useState<'status' | 'add'>('status');

  // Form state for adding new campaign
  const [brand, setBrand] = useState('');
  const [title, setTitle] = useState('');
  const [category, setCategory] = useState<CampaignCategory>('Influencer Marketing');
  const [shortDescription, setShortDescription] = useState('');
  const [collaborators, setCollaborators] = useState('');
  const [services, setServices] = useState('Social Media Management, Creative Production');

  if (!isOpen) return null;

  const handleFormSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!brand || !title) return;

    const newCampaign: Campaign = {
      id: `campaign-${Date.now()}`,
      brand,
      title,
      category,
      shortDescription,
      fullDescription: `${shortDescription} Built and executed by Breakpoint Social in accordance with client goals.`,
      objective: 'Campaign objective defined during strategy kick-off.',
      creativeApproach: 'Tailored creator partnerships and social-first creative production.',
      collaboratorNames: collaborators ? collaborators.split(',').map(s => s.trim()) : undefined,
      servicesProvided: services.split(',').map(s => s.trim()),
      publicationStatus: 'client_review',
      displayOrder: 99,
      clientNotes: 'Added via Content Staging Tool. Draft status enabled.',
      thumbnail: {
        type: 'placeholder',
        aspectRatio: '16:9',
        isPlaceholder: true,
        placeholderLabel: `${brand} · Creative Staging Slot`
      },
      mediaGallery: [
        {
          id: `media-${Date.now()}-1`,
          type: 'placeholder',
          title: 'Primary Campaign Asset Slot',
          aspectRatio: '9:16',
          isPlaceholder: true,
          placeholderReason: 'Awaiting high-resolution asset ingestion from client.'
        }
      ]
    };

    onAddCampaign(newCampaign);
    alert(`Campaign "${brand}" successfully added to the portfolio showcase in draft status!`);
    onClose();
  };

  return (
    <div 
      className="fixed inset-0 z-50 flex items-center justify-center bg-black/75 backdrop-blur-sm p-4 sm:p-6 animate-in fade-in duration-200"
      onClick={onClose}
      role="dialog"
      aria-modal="true"
    >
      <div 
        className="relative w-full max-w-3xl bg-[#fcf5e9] rounded-2xl shadow-2xl border border-[#84572f]/20 overflow-hidden flex flex-col max-h-[90vh]"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Header */}
        <div className="flex items-center justify-between px-6 py-4 bg-[#f6f8f5] border-b border-[#84572f]/15">
          <div className="flex items-center gap-2">
            <span className="font-bold text-sm sm:text-base text-[#141615] font-display">
              Asset Intake &amp; Content Management Center
            </span>
          </div>

          <button
            onClick={onClose}
            className="p-1.5 rounded-full hover:bg-[#84572f]/10 text-[#141615]"
            aria-label="Close modal"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        {/* Tab Switcher */}
        <div className="flex border-b border-[#84572f]/10 bg-[#fcf5e9] px-6 pt-3 gap-4">
          <button
            onClick={() => setActiveTab('status')}
            className={`pb-3 text-xs font-semibold uppercase tracking-wider transition-colors relative ${
              activeTab === 'status'
                ? 'text-[#84572f]'
                : 'text-[#1c1c1c]/60 hover:text-[#1c1c1c]'
            }`}
          >
            <span>Client Asset Intake Status</span>
            {activeTab === 'status' && (
              <span className="absolute bottom-0 left-0 w-full h-0.5 bg-[#84572f]" />
            )}
          </button>

          <button
            onClick={() => setActiveTab('add')}
            className={`pb-3 text-xs font-semibold uppercase tracking-wider transition-colors relative flex items-center gap-1.5 ${
              activeTab === 'add'
                ? 'text-[#84572f]'
                : 'text-[#1c1c1c]/60 hover:text-[#1c1c1c]'
            }`}
          >
            <Plus className="w-3.5 h-3.5" />
            <span>Test Adding New Campaign (Taylor&apos;s Pipeline)</span>
            {activeTab === 'add' && (
              <span className="absolute bottom-0 left-0 w-full h-0.5 bg-[#84572f]" />
            )}
          </button>
        </div>

        {/* Body Content */}
        <div className="p-6 overflow-y-auto space-y-6">
          {activeTab === 'status' ? (
            <div className="space-y-4">
              <p className="text-xs text-[#1c1c1c]/75 leading-relaxed">
                In strict compliance with Breakpoint Social brand safety standards, zero mock statistics or random stock photos are used. 
                Below is the verified audit record of all client assets referenced in the brief:
              </p>

              <div className="space-y-3">
                {/* Asset 01 */}
                <div className="p-4 rounded-xl bg-white/70 border border-[#84572f]/15 flex items-start justify-between gap-4">
                  <div className="space-y-1">
                    <div className="flex items-center gap-2">
                      <span className="font-bold text-xs text-[#84572f]">Asset 01</span>
                      <span className="text-[11px] px-2 py-0.5 bg-amber-100 text-amber-900 rounded font-medium">
                        Awaiting File/Link Access
                      </span>
                    </div>
                    <p className="text-xs text-[#1c1c1c]/80">
                      Dedicated intake slot active in the portfolio grid. Ready for immediate media ingestion once drive access is verified.
                    </p>
                  </div>
                  <Clock className="w-4 h-4 text-amber-600 shrink-0 mt-1" />
                </div>

                {/* Asset 02 */}
                <div className="p-4 rounded-xl bg-white/70 border border-[#84572f]/15 flex items-start justify-between gap-4">
                  <div className="space-y-1">
                    <div className="flex items-center gap-2">
                      <span className="font-bold text-xs text-[#84572f]">Asset 02</span>
                      <span className="text-[11px] px-2 py-0.5 bg-amber-100 text-amber-900 rounded font-medium">
                        Awaiting File/Link Access
                      </span>
                    </div>
                    <p className="text-xs text-[#1c1c1c]/80">
                      Dedicated intake slot active in the portfolio grid. Configured for high-resolution creative deliverables.
                    </p>
                  </div>
                  <Clock className="w-4 h-4 text-amber-600 shrink-0 mt-1" />
                </div>

                {/* Asset 03 */}
                <div className="p-4 rounded-xl bg-white/70 border border-[#84572f]/15 flex items-start justify-between gap-4">
                  <div className="space-y-1">
                    <div className="flex items-center gap-2">
                      <span className="font-bold text-xs text-[#84572f]">Asset 03</span>
                      <span className="text-[11px] px-2 py-0.5 bg-amber-100 text-amber-900 rounded font-medium">
                        Awaiting File/Link Access
                      </span>
                    </div>
                    <p className="text-xs text-[#1c1c1c]/80">
                      Dedicated intake slot active in the portfolio grid. Prepared for campaign reporting and social media deliverables.
                    </p>
                  </div>
                  <Clock className="w-4 h-4 text-amber-600 shrink-0 mt-1" />
                </div>

                {/* Lo Lo Estrin Fe (4 creative examples) */}
                <div className="p-4 rounded-xl bg-[#92ada4]/15 border border-[#84572f]/15 flex items-start justify-between gap-4">
                  <div className="space-y-1">
                    <div className="flex items-center gap-2">
                      <span className="font-bold text-xs text-[#84572f]">Lo Lo Estrin Fe (4 Creative Examples)</span>
                      <span className="text-[11px] px-2 py-0.5 bg-[#92ada4]/30 text-[#141615] rounded font-medium">
                        Structured 9:16 Gallery Ready
                      </span>
                    </div>
                    <p className="text-xs text-[#1c1c1c]/80">
                      Examples 1, 2, 3, and 4 are structured with mobile 9:16 aspect ratios, video controls, and lightbox expansion. Verified copy will replace draft copy upon final client approval.
                    </p>
                  </div>
                  <CheckCircle className="w-4 h-4 text-[#526840] shrink-0 mt-1" />
                </div>
              </div>
            </div>
          ) : (
            /* Add Campaign Form (Scalability Demo) */
            <form onSubmit={handleFormSubmit} className="space-y-4">
              <div className="p-3 bg-[#f6f8f5] rounded-xl border border-[#84572f]/10 text-xs text-[#1c1c1c]/80">
                <span className="font-bold text-[#84572f]">Scalability Demo:</span> Add a new campaign to test how Taylor’s upcoming case studies seamlessly integrate into the layout without touching code.
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div>
                  <label className="block text-xs font-semibold text-[#141615] mb-1">
                    Brand Name *
                  </label>
                  <input
                    type="text"
                    required
                    value={brand}
                    onChange={e => setBrand(e.target.value)}
                    placeholder="e.g. Alo Yoga, Olipop, Sephora"
                    className="w-full px-3 py-2 text-xs bg-white rounded-lg border border-[#84572f]/20 focus:outline-none focus:border-[#84572f]"
                  />
                </div>

                <div>
                  <label className="block text-xs font-semibold text-[#141615] mb-1">
                    Campaign Title *
                  </label>
                  <input
                    type="text"
                    required
                    value={title}
                    onChange={e => setTitle(e.target.value)}
                    placeholder="e.g. Summer Creator Seeding &amp; Brand Drop"
                    className="w-full px-3 py-2 text-xs bg-white rounded-lg border border-[#84572f]/20 focus:outline-none focus:border-[#84572f]"
                  />
                </div>
              </div>

              <div>
                <label className="block text-xs font-semibold text-[#141615] mb-1">
                  Category
                </label>
                <select
                  value={category}
                  onChange={e => setCategory(e.target.value as CampaignCategory)}
                  className="w-full px-3 py-2 text-xs bg-white rounded-lg border border-[#84572f]/20 focus:outline-none focus:border-[#84572f]"
                >
                  <option value="Influencer Marketing">Influencer Marketing</option>
                  <option value="Creative Production">Creative Production</option>
                  <option value="Social Media Management">Social Media Management</option>
                  <option value="Brand Development &amp; Positioning">Brand Development &amp; Positioning</option>
                  <option value="Event Marketing">Event Marketing</option>
                </select>
              </div>

              <div>
                <label className="block text-xs font-semibold text-[#141615] mb-1">
                  Short Overview
                </label>
                <textarea
                  rows={3}
                  value={shortDescription}
                  onChange={e => setShortDescription(e.target.value)}
                  placeholder="Concise overview of what was built and delivered..."
                  className="w-full px-3 py-2 text-xs bg-white rounded-lg border border-[#84572f]/20 focus:outline-none focus:border-[#84572f]"
                />
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div>
                  <label className="block text-xs font-semibold text-[#141615] mb-1">
                    Collaborators / Talent (comma separated)
                  </label>
                  <input
                    type="text"
                    value={collaborators}
                    onChange={e => setCollaborators(e.target.value)}
                    placeholder="e.g. Serena Pitt, Lifestyle Creators"
                    className="w-full px-3 py-2 text-xs bg-white rounded-lg border border-[#84572f]/20 focus:outline-none focus:border-[#84572f]"
                  />
                </div>

                <div>
                  <label className="block text-xs font-semibold text-[#141615] mb-1">
                    Services Provided (comma separated)
                  </label>
                  <input
                    type="text"
                    value={services}
                    onChange={e => setServices(e.target.value)}
                    className="w-full px-3 py-2 text-xs bg-white rounded-lg border border-[#84572f]/20 focus:outline-none focus:border-[#84572f]"
                  />
                </div>
              </div>

              <div className="pt-3 flex justify-end gap-3">
                <button
                  type="button"
                  onClick={onClose}
                  className="px-4 py-2 text-xs font-medium text-[#1c1c1c] hover:bg-neutral-200 rounded-full"
                >
                  Cancel
                </button>
                <button
                  type="submit"
                  className="px-5 py-2 text-xs font-semibold text-white bg-[#84572f] hover:bg-[#6c4625] rounded-full shadow-sm"
                >
                  Add Campaign to Grid
                </button>
              </div>
            </form>
          )}
        </div>
      </div>
    </div>
  );
};
