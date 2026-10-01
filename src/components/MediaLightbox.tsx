import React, { useEffect, useState, useRef } from 'react';
import { X, Play, Pause, Volume2, VolumeX, Maximize2, AlertCircle, Upload, CheckCircle2, ExternalLink } from 'lucide-react';
import { CampaignMediaItem } from '../types/campaign';

interface MediaLightboxProps {
  media: CampaignMediaItem | null;
  onClose: () => void;
  onUpdateMedia?: (updatedMedia: CampaignMediaItem) => void;
}

export const MediaLightbox: React.FC<MediaLightboxProps> = ({ media, onClose, onUpdateMedia }) => {
  const videoRef = useRef<HTMLVideoElement>(null);
  const fileInputRef = useRef<HTMLInputElement>(null);

  const [isPlaying, setIsPlaying] = useState(true);
  const [isMuted, setIsMuted] = useState(false);
  const [progress, setProgress] = useState(0);
  const [duration, setDuration] = useState(0);
  const [currentTime, setCurrentTime] = useState(0);
  const [activeSrc, setActiveSrc] = useState<string | undefined>(media?.src || media?.embedUrl);
  const [showUploadAlert, setShowUploadAlert] = useState(false);

  useEffect(() => {
    setActiveSrc(media?.src || media?.embedUrl);
    setIsPlaying(true);
    setProgress(0);
    setCurrentTime(0);
  }, [media]);

  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'Escape') onClose();
      if (e.key === ' ' && media?.type === 'video') {
        e.preventDefault();
        togglePlay();
      }
    };
    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [onClose, media, isPlaying]);

  if (!media) return null;

  const togglePlay = () => {
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

  const toggleMute = () => {
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
    videoRef.current.play().then(() => setIsPlaying(true)).catch(() => {
      if (videoRef.current) {
        videoRef.current.muted = true;
        setIsMuted(true);
        videoRef.current.play().catch(() => {});
      }
    });
  };

  const handleSeek = (e: React.ChangeEvent<HTMLInputElement>) => {
    const val = Number(e.target.value);
    setProgress(val);
    if (videoRef.current && duration) {
      videoRef.current.currentTime = (val / 100) * duration;
    }
  };

  const handleFullscreen = () => {
    if (videoRef.current) {
      if (videoRef.current.requestFullscreen) {
        videoRef.current.requestFullscreen();
      }
    }
  };

  const handleFileChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0];
    if (file) {
      const url = URL.createObjectURL(file);
      setActiveSrc(url);
      setShowUploadAlert(true);
      setTimeout(() => setShowUploadAlert(false), 3000);
      if (onUpdateMedia) {
        onUpdateMedia({ ...media, src: url, type: 'video', isPlaceholder: false });
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

  const isDriveEmbed = media.type === 'drive' || Boolean(activeSrc && activeSrc.includes('drive.google.com'));
  const isInstagramEmbed = media.type === 'instagram' || Boolean(activeSrc && activeSrc.includes('instagram.com'));
  const isHtmlVideo = media.type === 'video' || Boolean(activeSrc && (activeSrc.endsWith('.mp4') || activeSrc.endsWith('.webm') || activeSrc.startsWith('blob:')));

  return (
    <div 
      className="fixed inset-0 z-[100] flex items-center justify-center bg-black/90 backdrop-blur-md p-2 sm:p-6 animate-in fade-in duration-200"
      onClick={onClose}
      role="dialog"
      aria-modal="true"
      aria-label={media.title}
    >
      <input
        type="file"
        ref={fileInputRef}
        onChange={handleFileChange}
        accept="video/mp4,video/webm,video/quicktime,image/*"
        className="hidden"
      />

      <div 
        className="relative max-w-5xl w-full max-h-[95vh] flex flex-col lg:flex-row bg-[#141615] rounded-2xl md:rounded-3xl overflow-hidden border border-white/10 shadow-2xl text-white"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Close Button */}
        <button
          onClick={onClose}
          className="absolute top-4 right-4 z-30 p-2.5 rounded-full bg-black/70 hover:bg-black text-white/80 hover:text-white transition-colors focus-visible:outline-2 focus-visible:outline-[#f1d5a0] border border-white/10"
          aria-label="Close Lightbox"
        >
          <X className="w-5 h-5" />
        </button>

        {/* Media Frame Viewport */}
        <div className="flex-1 flex items-center justify-center p-3 sm:p-8 bg-black/60 min-h-[420px] sm:min-h-[560px]">
          {isDriveEmbed || isInstagramEmbed ? (
            /* Clean Cropped 9:16 Video Player Container */
            <div className="relative w-full max-w-[340px] aspect-[9/16] bg-black rounded-3xl border-4 border-neutral-700/60 shadow-2xl overflow-hidden flex items-center justify-center">
              
              {/* Phone speaker notch */}
              <div className="absolute top-2.5 left-1/2 -translate-x-1/2 w-16 h-3 bg-neutral-800 rounded-full z-30 pointer-events-none" />

              {/* Clean Cropped IFrame removing social comments & headers */}
              <iframe
                src={media.embedUrl || activeSrc}
                className="w-[122%] h-[122%] border-0 bg-black scale-105 pointer-events-auto -mt-4"
                allow="autoplay; encrypted-media; picture-in-picture"
                allowFullScreen
                title={media.title}
              />
            </div>
          ) : isHtmlVideo && activeSrc ? (
            /* 9:16 Portrait Container with HTML5 Video */
            <div className="relative w-full max-w-[320px] aspect-[9/16] bg-[#0a0a0a] rounded-3xl border-4 border-neutral-700/60 shadow-2xl overflow-hidden flex flex-col justify-between">
              
              <div className="absolute top-2.5 left-1/2 -translate-x-1/2 w-16 h-3 bg-neutral-800 rounded-full z-20 pointer-events-none" />

              <video
                ref={videoRef}
                src={activeSrc}
                poster={media.poster}
                playsInline
                loop
                muted={isMuted}
                onTimeUpdate={handleTimeUpdate}
                onLoadedMetadata={handleLoadedMetadata}
                onPlay={() => setIsPlaying(true)}
                onPause={() => setIsPlaying(false)}
                className="absolute inset-0 w-full h-full object-cover"
              />

              <div className="absolute inset-0 bg-gradient-to-b from-black/50 via-transparent to-black/80 pointer-events-none" />

              <div 
                onClick={togglePlay}
                className={`absolute inset-0 flex items-center justify-center cursor-pointer transition-opacity duration-200 z-10 ${
                  isPlaying ? 'opacity-0 hover:opacity-100' : 'opacity-100 bg-black/30'
                }`}
              >
                <button
                  type="button"
                  className="w-16 h-16 rounded-full bg-[#84572f]/90 hover:bg-[#84572f] text-white flex items-center justify-center shadow-xl transition-transform hover:scale-110"
                  aria-label={isPlaying ? 'Pause video' : 'Play video'}
                >
                  {isPlaying ? <Pause className="w-8 h-8" /> : <Play className="w-8 h-8 fill-white ml-1" />}
                </button>
              </div>

              <div className="relative z-20 p-3 mt-auto">
                <div className="bg-black/85 backdrop-blur-md rounded-xl p-3 flex flex-col gap-2 border border-white/10">
                  <div className="flex items-center gap-2">
                    <input
                      type="range"
                      min="0"
                      max="100"
                      value={progress || 0}
                      onChange={handleSeek}
                      className="w-full h-1 bg-white/20 rounded-lg appearance-none cursor-pointer accent-[#f1d5a0]"
                      aria-label="Seek position"
                    />
                  </div>

                  <div className="flex items-center justify-between text-xs pt-1">
                    <div className="flex items-center gap-2">
                      <button
                        onClick={togglePlay}
                        className="p-1 text-[#f1d5a0] hover:text-white"
                        aria-label={isPlaying ? 'Pause' : 'Play'}
                      >
                        {isPlaying ? <Pause className="w-4 h-4" /> : <Play className="w-4 h-4 fill-current" />}
                      </button>

                      <button
                        onClick={toggleMute}
                        className="p-1 text-white/80 hover:text-white"
                        aria-label={isMuted ? 'Unmute' : 'Mute'}
                      >
                        {isMuted ? <VolumeX className="w-4 h-4 text-amber-300" /> : <Volume2 className="w-4 h-4" />}
                      </button>

                      <button
                        onClick={handleFullscreen}
                        className="p-1 text-white/80 hover:text-white"
                        title="Enter Fullscreen"
                        aria-label="Enter Fullscreen"
                      >
                        <Maximize2 className="w-3.5 h-3.5" />
                      </button>
                    </div>

                    <div className="text-[10px] text-white/70 font-mono">
                      <span>{formatTime(currentTime)}</span>
                      <span> / </span>
                      <span>{formatTime(duration)}</span>
                    </div>
                  </div>
                </div>
              </div>

            </div>
          ) : media.type === 'image' && media.src ? (
            <div className="relative max-w-lg w-full rounded-2xl overflow-hidden shadow-2xl border border-white/10 bg-neutral-900">
              <img
                src={media.src}
                alt={media.title}
                className="w-full h-auto max-h-[75vh] object-contain mx-auto"
              />
            </div>
          ) : (
            <div className="relative w-full max-w-md aspect-[16/10] bg-[#1a1c1b] rounded-2xl border border-white/10 flex flex-col items-center justify-center p-6 text-center">
              <div className="w-14 h-14 rounded-full bg-[#92ada4]/20 border border-[#92ada4]/40 flex items-center justify-center text-[#92ada4] mb-3">
                <AlertCircle className="w-6 h-6" />
              </div>
              <h4 className="text-base font-bold text-white mb-2">{media.title}</h4>
              <p className="text-xs text-white/70 max-w-sm mb-4">
                {media.placeholderReason || 'Awaiting file delivery.'}
              </p>
              <button
                onClick={() => fileInputRef.current?.click()}
                className="px-4 py-2 text-xs font-semibold text-white bg-[#84572f] hover:bg-[#6c4625] rounded-full flex items-center gap-1.5"
              >
                <Upload className="w-3.5 h-3.5" />
                <span>Upload Video or Image File</span>
              </button>
            </div>
          )}
        </div>

        {/* Sidebar Information */}
        <div className="w-full lg:w-80 p-6 flex flex-col justify-between bg-[#181a19] border-t lg:border-t-0 lg:border-l border-white/10">
          <div className="space-y-4">
            <div>
              <div className="flex items-center gap-2 text-xs text-[#f1d5a0] uppercase tracking-wider font-semibold mb-2">
                <span>{media.aspectRatio} Aspect Ratio</span>
                <span>·</span>
                <span>CLEAN VIDEO REEL</span>
              </div>

              <h3 className="text-lg font-bold text-white leading-snug font-display">
                {media.title}
              </h3>

              {media.collaborator && (
                <p className="mt-1 text-xs text-white/70">
                  Talent: <strong className="text-white">{media.collaborator}</strong>
                </p>
              )}
            </div>

            {media.caption && (
              <div className="pt-3 border-t border-white/10">
                <p className="text-xs uppercase tracking-wider font-bold text-white/50 mb-1">
                  Creative Direction
                </p>
                <p className="text-xs text-white/80 leading-relaxed">
                  {media.caption}
                </p>
              </div>
            )}

            {/* Ingestion & File Controls */}
            <div className="pt-3 border-t border-white/10 space-y-2">
              <p className="text-xs uppercase tracking-wider font-bold text-white/50 mb-1">
                Asset Actions
              </p>

              {media.externalUrl && (
                <a
                  href={media.externalUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-full py-2 px-3 text-xs font-semibold text-[#f1d5a0] bg-[#84572f]/40 hover:bg-[#84572f]/70 border border-[#f1d5a0]/30 rounded-lg flex items-center justify-center gap-2 transition-colors mb-2"
                >
                  <ExternalLink className="w-3.5 h-3.5" />
                  <span>Open Original Post on {media.type === 'instagram' ? 'Instagram' : 'Google Drive'}</span>
                </a>
              )}

              {showUploadAlert && (
                <div className="p-2 rounded bg-emerald-950/80 border border-emerald-500/50 text-[11px] text-emerald-300 flex items-center gap-1.5">
                  <CheckCircle2 className="w-3.5 h-3.5 shrink-0" />
                  <span>Custom file attached and active!</span>
                </div>
              )}

              <button
                onClick={() => fileInputRef.current?.click()}
                className="w-full py-2 px-3 text-xs font-semibold text-white bg-white/10 hover:bg-white/20 border border-white/15 rounded-lg flex items-center justify-center gap-2 transition-colors"
              >
                <Upload className="w-3.5 h-3.5 text-[#f1d5a0]" />
                <span>Replace / Upload Custom MP4 File</span>
              </button>
            </div>
          </div>

          <div className="mt-6 pt-4 border-t border-white/10">
            <button
              onClick={onClose}
              className="w-full py-2.5 px-4 text-xs font-semibold uppercase tracking-wider text-white bg-[#84572f] hover:bg-[#6c4625] rounded-lg transition-colors"
            >
              Close Lightbox
            </button>
          </div>
        </div>

      </div>
    </div>
  );
};
