"use client";

import { useEffect, useRef } from "react";
import { cn } from "@/lib/utils";

interface FullscreenHeroVideoProps {
  videoSrc: string;
  posterSrc?: string;
  className?: string;
  overlay?: boolean;
}

export default function FullscreenHeroVideo({
  videoSrc,
  posterSrc,
  className,
  overlay = true,
}: FullscreenHeroVideoProps) {
  const videoRef = useRef<HTMLVideoElement>(null);

  useEffect(() => {
    const video = videoRef.current;
    if (video) {
      video.play().catch(() => {
        // Autoplay failed, user interaction required
      });
    }
  }, []);

  return (
    <div className={cn("relative w-full h-screen overflow-hidden", className)}>
      <video
        ref={videoRef}
        className="absolute inset-0 w-full h-full object-cover"
        autoPlay
        muted
        loop
        playsInline
        poster={posterSrc}
      >
        <source src={videoSrc} type="video/mp4" />
        Your browser does not support the video tag.
      </video>
      {overlay && (
        <div className="absolute inset-0 bg-gradient-to-b from-black/20 via-transparent to-black/40" />
      )}
    </div>
  );
}
