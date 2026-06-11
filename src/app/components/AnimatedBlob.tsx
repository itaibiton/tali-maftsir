"use client";

import Image from "next/image";

type AnimatedBlobProps = {
  videoSrc?: string;
  imageSrc: string;
  alt: string;
  className?: string;
  blobVariant?: 1 | 2;
};

/**
 * Organic blob-framed media: plays a looping ambient video when available,
 * falls back to the still illustration otherwise.
 */
export function AnimatedBlob({
  videoSrc,
  imageSrc,
  alt,
  className = "",
  blobVariant = 1,
}: AnimatedBlobProps) {
  const frameClass = blobVariant === 1 ? "blob-frame" : "blob-frame-2";

  return (
    <div className={`relative ${frameClass} ${className}`}>
      {videoSrc ? (
        <video
          autoPlay
          loop
          muted
          playsInline
          poster={imageSrc}
          aria-label={alt}
          className="w-full h-full object-cover"
        >
          <source src={videoSrc} type="video/mp4" />
        </video>
      ) : (
        <Image
          src={imageSrc}
          alt={alt}
          width={900}
          height={900}
          quality={95}
          className="w-full h-full object-cover"
        />
      )}
    </div>
  );
}
