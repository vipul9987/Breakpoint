import React, { useState, useRef, useEffect } from 'react';
import { Play, Pause, Maximize2, AlertCircle, Volume2, VolumeX, Eye, Upload, CheckCircle2 } from 'lucide-react';
import { Campaign, CampaignMediaItem } from '../types/campaign';

interface FeaturedCampaignProps {
  campaign: Campaign;
  onOpenLightbox: (media: CampaignMediaItem) => void;
  onViewFullCaseStudy: (campaign: Campaign) => void;
  onUpdateMediaItem?: (updatedMedia: CampaignMediaItem) => void;
}

// Sub-component for individual creative example card with real video playback
const CreativeExampleCard: React.FC<{
  item: CampaignMediaItem;
  onOpenLightbox: (item: CampaignMediaItem) => void;
  onUpdateMediaItem?: (updatedMedia: CampaignMediaItem) => void;
}> = ({ item, onOpenLightbox, onUpdateMediaItem }) => {
  const videoRef = useRef<HTMLVideoElement>(null);
  const fileInputRef = useRef<HTMLInputElement>(null);
  
  const [isPlaying, setIsPlaying] = useState(false);
  const [isMuted, setIsMuted] = useState(true);
  const [progress, setProgress] = useState(0);
  const [duration, setDuration] = useState(0);
  const [currentTime, setCurrentTime] = useState(0);
  const [customSrc, setCustomSrc] = useState<string | undefined>(item.src);
  const [showUploadSuccess, setShowUploadSuccess] = useState(false);

  // Sync customSrc if item.src changes
  useEffect(() => {
    setCustomSrc(item.src);
  }, [item.src]);

  const togglePlay = (e: React.MouseEvent) => {
    e.stopPropagation();
    if (!videoRef.current) return;
    if (isPlaying) {
      videoRef.current.pause();
      setIsPlaying(false);
    } else {
      videoRef.current.play().then(() => {
        setIsPlaying(true);
      }).catch(err => {
        console.warn('Playback error:', err);
      });
    }
  };

  const toggleMute = (e: React.MouseEvent) => {
    e.stopPropagation();
    if (!videoRef.current) return;
    const nextMuted = !videoRef.current.muted;
    videoRef.current.muted = nextMuted;
    setIsMuted(nextMuted);
  };

  const handleTimeUpdate = () => {
    if (!videoRef.current) return;
    const curr = videoRef.current.currentTime;
    const dur = videoRef.current.duration || 1;
    setCurrentTime(curr);
    setProgress((curr / dur) * 100);
  };

  const handleLoadedMetadata = () => {
    if (!videoRef.current) return;
    setDuration(videoRef.current.duration || 0);
  };

  const handleSeek = (e: React.ChangeEvent<HTMLInputElement>) => {
    const val = Number(e.target.value);
    setProgress(val);
    if (videoRef.current && duration) {
      videoRef.current.currentTime = (val / 100) * duration;
    }
  };

  const handleFileChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0];
    if (file) {
      const url = URL.createObjectURL(file);
      setCustomSrc(url);
      setShowUploadSuccess(true);
      setTimeout(() => setShowUploadSuccess(false), 3000);
      if (onUpdateMediaItem) {
        onUpdateMediaItem({ ...item, src: url, isPlaceholder: false });
      }
      setTimeout(() => {
        if (videoRef.current) {
          videoRef.current.play().then(() => setIsPlaying(true)).catch(() => {});
        }
      }, 200);
    }
  };

  const formatTime = (secs: number) => {
    const m = Math.floor(secs / 60);
    const s = Math.floor(secs % 60);
    return `${m}:${s < 10 ? '0' : ''}${s}`;
  };

  const isVideo = item.type === 'video' || Boolean(customSrc && (customSrc.endsWith('.mp4') || customSrc.endsWith('.webm') || customSrc.startsWith('blob:')));

  return (
    <div
      onClick={() => onOpenLightbox({ ...item, src: customSrc })}
      className="group relative flex flex-col bg-[#fcf5e9] rounded-2xl overflow-hidden border border-[#84572f]/15 hover:border-[#84572f]/50 shadow-sm hover:shadow-lg transition-all duration-300 cursor-pointer"
    >
      {/* Hidden file input for uploading custom video */}
      <input
        type="file"
        ref={fileInputRef}
        onChange={handleFileChange}
        accept="video/mp4,video/webm,video/quicktime,image/*"
        className="hidden"
      />

      {/* 9:16 Portrait Container for Mobile Short-Form Content */}
      <div className="relative w-full aspect-[9/16] bg-[#141615] overflow-hidden flex flex-col justify-between">
        
        {isVideo && customSrc ? (
          <>
            {/* Real Playable HTML5 Video Element */}
            <video
              ref={videoRef}
              src={customSrc}
              poster={item.poster}
              playsInline
              loop
              muted={isMuted}
              onTimeUpdate={handleTimeUpdate}
              onLoadedMetadata={handleLoadedMetadata}
              onPlay={() => setIsPlaying(true)}
              onPause={() => setIsPlaying(false)}
              className="absolute inset-0 w-full h-full object-cover"
            />

            {/* Dark gradient overlay for UI controls readability */}
            <div className="absolute inset-0 bg-gradient-to-b from-black/60 via-transparent to-black/80 pointer-events-none" />

            {/* Large Center Play / Pause Indicator (shows when paused or hover) */}
            <div 
              onClick={togglePlay}
              className={`absolute inset-0 flex items-center justify-center transition-opacity duration-200 z-10 ${
                isPlaying ? 'opacity-0 group-hover:opacity-100' : 'opacity-100 bg-black/30'
              }`}
            >
              <button
                type="button"
                className="w-14 h-14 rounded-full bg-[#84572f]/90 hover:bg-[#84572f] text-white flex items-center justify-center shadow-lg transition-transform group-hover:scale-110 focus-visible:outline-2 focus-visible:outline-[#f1d5a0]"
                aria-label={isPlaying ? 'Pause video' : 'Play video'}
              >
                {isPlaying ? <Pause className="w-6 h-6" /> : <Play className="w-6 h-6 fill-white ml-0.5" />}
              </button>
            </div>
          </>
        ) : item.type === 'image' && item.src ? (
          /* Real Image Display */
          <div className="absolute inset-0 bg-neutral-900">
            <img
              src={item.src}
              alt={item.title}
              className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
            />
            <div className="absolute inset-0 bg-gradient-to-b from-black/50 via-transparent to-black/80 pointer-events-none" />
          </div>
        ) : (
          /* Staging / Placeholder Slot */
          <div className="absolute inset-0 bg-gradient-to-b from-[#1c1c1c] via-[#141615] to-[#0a0a0a] flex flex-col items-center justify-center p-6 text-center">
            <div className="w-12 h-12 rounded-full bg-[#84572f]/20 border border-[#f1d5a0]/40 flex items-center justify-center text-[#f1d5a0] mb-3">
              <span className="font-extrabold text-sm font-display">0{item.exampleNumber}</span>
            </div>
            <p className="text-xs font-bold text-white uppercase tracking-wider mb-1">
              Example 0{item.exampleNumber}
            </p>
            <p className="text-xs text-white/70 line-clamp-3 mb-4">
              {item.title}
            </p>
            <span className="px-2.5 py-1 rounded bg-black/60 border border-white/10 text-[10px] text-[#f1d5a0]">
              Pending Client Video Link
            </span>
          </div>
        )}

        {/* Top Badges & Actions */}
        <div className="relative z-20 p-3.5 flex items-center justify-between">
          <span className="px-2 py-0.5 rounded text-[10px] font-bold uppercase tracking-wider bg-black/70 text-[#f1d5a0] backdrop-blur-xs border border-white/10">
            0{item.exampleNumber} · {item.type.toUpperCase()}
          </span>

          <div className="flex items-center gap-1.5">
            {/* Quick Upload / Replace Video Button */}
            <button
              onClick={(e) => {
                e.stopPropagation();
                fileInputRef.current?.click();
              }}
              title="Upload / Replace with your own video file"
              className="p-1.5 rounded-full bg-black/60 hover:bg-[#84572f] text-white/90 hover:text-white transition-colors border border-white/10"
              aria-label="Upload custom video file"
            >
              <Upload className="w-3.5 h-3.5" />
            </button>

            <button
              onClick={(e) => {
                e.stopPropagation();
                onOpenLightbox({ ...item, src: customSrc });
              }}
              className="p-1.5 rounded-full bg-black/60 hover:bg-[#84572f] text-white/90 hover:text-white transition-colors border border-white/10"
              title="Expand to Fullscreen Lightbox"
              aria-label="Expand to Fullscreen Lightbox"
            >
              <Maximize2 className="w-3.5 h-3.5" />
            </button>
          </div>
        </div>

        {/* Upload success notification */}
        {showUploadSuccess && (
          <div className="absolute top-12 left-3 right-3 z-30 bg-emerald-900/90 text-white text-[11px] py-1.5 px-3 rounded-lg flex items-center gap-2 border border-emerald-500/50 backdrop-blur-sm animate-in fade-in">
            <CheckCircle2 className="w-4 h-4 text-emerald-400 shrink-0" />
            <span>Custom video loaded! Playing now.</span>
          </div>
        )}

        {/* Bottom Interactive Playback Controls Bar */}
        <div className="relative z-20 p-3.5 mt-auto">
          {isVideo && (
            <div 
              onClick={(e) => e.stopPropagation()} 
              className="bg-black/80 backdrop-blur-md rounded-xl p-2.5 text-white flex flex-col gap-1.5 border border-white/10"
            >
              {/* Scrubber Progress Bar */}
              <div className="flex items-center gap-2">
                <input
                  type="range"
                  min="0"
                  max="100"
                  value={progress || 0}
                  onChange={handleSeek}
                  className="w-full h-1 bg-white/20 rounded-lg appearance-none cursor-pointer accent-[#f1d5a0]"
                  aria-label="Seek video position"
                />
              </div>

              {/* Controls Row */}
              <div className="flex items-center justify-between text-xs pt-1">
                <div className="flex items-center gap-2">
                  <button
                    onClick={togglePlay}
                    className="p-1 text-[#f1d5a0] hover:text-white transition-colors"
                    aria-label={isPlaying ? 'Pause video' : 'Play video'}
                  >
                    {isPlaying ? <Pause className="w-4 h-4" /> : <Play className="w-4 h-4 fill-current" />}
                  </button>

                  <button
                    onClick={toggleMute}
                    className="p-1 text-white/80 hover:text-white transition-colors"
                    aria-label={isMuted ? 'Unmute video audio' : 'Mute video audio'}
                  >
                    {isMuted ? <VolumeX className="w-4 h-4 text-amber-300" /> : <Volume2 className="w-4 h-4" />}
                  </button>
                </div>

                <div className="text-[10px] text-white/70 font-mono">
                  <span>{formatTime(currentTime)}</span>
                  <span> / </span>
                  <span>{formatTime(duration)}</span>
                </div>
              </div>
            </div>
          )}
        </div>

      </div>

      {/* Card Info & Details */}
      <div className="p-4 flex-1 flex flex-col justify-between">
        <div>
          <div className="flex items-center gap-1.5 text-[11px] font-semibold text-[#84572f] mb-1">
            <span>Creative Example 0{item.exampleNumber}</span>
            <span>·</span>
            <span>{item.collaborator}</span>
          </div>

          <h4 className="text-sm font-bold text-[#141615] line-clamp-1">
            {item.title.replace(/^Creative Example \d+: /, '')}
          </h4>

          <p className="mt-1.5 text-xs text-[#1c1c1c]/70 line-clamp-2 leading-relaxed">
            {item.caption}
          </p>
        </div>

        <div className="mt-4 pt-3 border-t border-[#84572f]/10 flex items-center justify-between text-[11px]">
          <span className="text-[#84572f] font-semibold group-hover:underline flex items-center gap-1">
            <span>Open in Lightbox</span>
            <span>&rarr;</span>
          </span>
          <span className="text-neutral-500 font-mono text-[10px]">9:16 VERTICAL</span>
        </div>
      </div>
    </div>
  );
};

export const FeaturedCampaign: React.FC<FeaturedCampaignProps> = ({
  campaign,
  onOpenLightbox,
  onViewFullCaseStudy,
  onUpdateMediaItem
}) => {
  return (
    <section id="featured-campaign" className="py-20 md:py-28 bg-[#f6f8f5] border-b border-[#84572f]/10">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Header Block */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 pb-12 border-b border-[#84572f]/15">
          <div className="max-w-3xl">
            {/* Eyebrow */}
            <div className="flex items-center gap-2 mb-3">
              <span className="w-2.5 h-2.5 rounded-full bg-[#84572f] animate-pulse" />
              <span className="text-xs uppercase tracking-[0.2em] font-bold text-[#84572f]">
                FEATURED CAMPAIGN
              </span>
              <span className="text-xs text-[#1c1c1c]/50 font-normal">·</span>
              <span className="text-xs text-[#84572f] font-semibold bg-[#f1d5a0]/40 px-2 py-0.5 rounded">
                Interactive Video Player Active
              </span>
            </div>

            {/* Heading */}
            <h2 className="text-3xl sm:text-5xl font-extrabold text-[#141615] tracking-tight font-display">
              {campaign.brand}
            </h2>

            {/* Subheading */}
            <p className="mt-2 text-xl sm:text-2xl text-[#84572f] font-medium font-body flex items-center gap-2">
              <span>A Campaign Featuring</span>
              <span className="font-semibold underline decoration-[#f1d5a0] decoration-2 underline-offset-4">
                {campaign.collaboratorNames?.[0] || 'Serena Pitt'}
              </span>
            </p>

            {/* Description */}
            <p className="mt-4 text-sm sm:text-base text-[#1c1c1c]/80 leading-relaxed max-w-2xl">
              {campaign.shortDescription}
            </p>
          </div>

          <div className="flex flex-col sm:flex-row items-start sm:items-center gap-3">
            <button
              onClick={() => onViewFullCaseStudy(campaign)}
              className="px-6 py-3 text-xs uppercase tracking-wider font-semibold text-white bg-[#84572f] hover:bg-[#6c4625] rounded-full transition-all duration-200 shadow-sm flex items-center gap-2 whitespace-nowrap"
            >
              <span>View Case Study Overview</span>
              <Eye className="w-4 h-4" />
            </button>
          </div>
        </div>

        {/* Working Video Notice */}
        <div className="my-8 p-4 rounded-xl bg-[#fcf5e9] border border-[#84572f]/20 flex items-start gap-3">
          <AlertCircle className="w-5 h-5 text-[#84572f] shrink-0 mt-0.5" />
          <div className="text-xs text-[#1c1c1c]/80 space-y-1">
            <p className="font-semibold text-[#141615]">
              Real 9:16 Video Player Controls &amp; Direct File Ingestion Active
            </p>
            <p>
              Click Play or any card to play the creative video reels. You can also click the upload icon (↑) on any card to test your own campaign MP4 or MOV file directly in the browser!
            </p>
          </div>
        </div>

        {/* Four-Item Responsive Media Gallery with Playable Videos */}
        <div className="mt-10">
          <div className="flex items-center justify-between mb-6">
            <h3 className="text-lg font-bold text-[#141615] font-display flex items-center gap-2">
              <span>Creative Examples</span>
              <span className="text-xs font-normal text-[#1c1c1c]/60">(4 Designated Deliverable Slots)</span>
            </h3>
            <span className="text-xs text-[#84572f] font-medium hidden sm:inline-block">
              Click any example to play or expand into fullscreen lightbox
            </span>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {campaign.mediaGallery.map((item) => (
              <CreativeExampleCard
                key={item.id}
                item={item}
                onOpenLightbox={onOpenLightbox}
                onUpdateMediaItem={onUpdateMediaItem}
              />
            ))}
          </div>
        </div>

        {/* Campaign Approach Summary Grid */}
        <div className="mt-14 grid grid-cols-1 md:grid-cols-3 gap-6 pt-10 border-t border-[#84572f]/15">
          <div className="bg-[#fcf5e9] p-6 rounded-xl border border-[#84572f]/10">
            <h4 className="text-xs uppercase tracking-wider font-bold text-[#84572f] mb-2">
              01. Campaign Objective
            </h4>
            <p className="text-xs sm:text-sm text-[#1c1c1c]/80 leading-relaxed">
              {campaign.objective}
            </p>
          </div>

          <div className="bg-[#fcf5e9] p-6 rounded-xl border border-[#84572f]/10">
            <h4 className="text-xs uppercase tracking-wider font-bold text-[#84572f] mb-2">
              02. Creative Approach
            </h4>
            <p className="text-xs sm:text-sm text-[#1c1c1c]/80 leading-relaxed">
              {campaign.creativeApproach}
            </p>
          </div>

          <div className="bg-[#fcf5e9] p-6 rounded-xl border border-[#84572f]/10">
            <h4 className="text-xs uppercase tracking-wider font-bold text-[#84572f] mb-2">
              03. Deliverables &amp; Services
            </h4>
            <ul className="space-y-1.5">
              {campaign.servicesProvided.map((service, idx) => (
                <li key={idx} className="text-xs text-[#1c1c1c]/80 flex items-start gap-2">
                  <span className="w-1.5 h-1.5 rounded-full bg-[#92ada4] mt-1.5 shrink-0" />
                  <span>{service}</span>
                </li>
              ))}
            </ul>
          </div>
        </div>

      </div>
    </section>
  );
};
