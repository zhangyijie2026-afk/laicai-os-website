"use client";

import { useEffect, useRef } from "react";

const source = "https://d8j0ntlcm91z4.cloudfront.net/user_38xzZboKViGWJOttwIXH07lWA1P/hf_20260406_094145_4a271a6c-3869-4f1c-8aa7-aeb0cb227994.mp4";

export function CinematicVideo() {
  const videoRef = useRef<HTMLVideoElement>(null);

  useEffect(() => {
    const video = videoRef.current;
    if (!video) return;

    const resume = () => {
      video.muted = true;
      void video.play().catch(() => undefined);
    };
    const onVisibility = () => {
      if (!document.hidden) resume();
    };

    resume();
    document.addEventListener("visibilitychange", onVisibility);
    window.addEventListener("focus", resume);
    return () => {
      document.removeEventListener("visibilitychange", onVisibility);
      window.removeEventListener("focus", resume);
    };
  }, []);

  return (
    <video
      ref={videoRef}
      aria-hidden="true"
      className="hero-video"
      src={source}
      autoPlay
      muted
      loop
      playsInline
      preload="auto"
      onCanPlay={(event) => void event.currentTarget.play().catch(() => undefined)}
      onClick={(event) => void event.currentTarget.play().catch(() => undefined)}
    />
  );
}
