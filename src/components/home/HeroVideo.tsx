'use client';

import { useEffect, useRef } from 'react';

/** Vitesse de lecture du fond vidéo : 1 = vitesse d'origine. */
const PLAYBACK_RATE = 0.5;

export default function HeroVideo() {
  const videoRef = useRef<HTMLVideoElement>(null);

  useEffect(() => {
    const video = videoRef.current;
    if (!video) return;

    video.playbackRate = PLAYBACK_RATE;

    // Certains navigateurs réinitialisent la vitesse au (re)démarrage.
    const restoreRate = () => {
      video.playbackRate = PLAYBACK_RATE;
    };

    video.addEventListener('loadedmetadata', restoreRate);
    video.addEventListener('play', restoreRate);

    return () => {
      video.removeEventListener('loadedmetadata', restoreRate);
      video.removeEventListener('play', restoreRate);
    };
  }, []);

  return (
    <video
      ref={videoRef}
      className="absolute inset-0 h-full w-full object-cover"
      poster="/images/lsa_5.png"
      autoPlay
      loop
      muted
      playsInline
      aria-hidden="true"
    >
      <source src="/salon.mp4" type="video/mp4" />
    </video>
  );
}
