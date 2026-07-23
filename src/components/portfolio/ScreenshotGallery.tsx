import React from "react";

interface ScreenshotGalleryProps {
  images: Record<string, unknown>;
  altPrefix: string;
}

export function ScreenshotGallery({ images, altPrefix }: ScreenshotGalleryProps) {
  return (
    <div className="mt-8 columns-1 sm:columns-3 gap-4 space-y-4">
      {Object.keys(images).map((path) => {
        const url = path.replace("/public", "");
        const n = url.split("_").pop()?.split(".")[0] || url;
        return (
          <a
            key={url}
            href={url}
            target="_blank"
            rel="noopener noreferrer"
            className="group block break-inside-avoid overflow-hidden rounded-lg border border-border transition-all duration-300 hover:border-primary hover:shadow-[0_0_15px_rgba(59,130,246,0.3)]"
          >
            <img
              src={url}
              alt={`${altPrefix} screenshot ${n}`}
              className="w-full object-cover transition-transform duration-300 group-hover:scale-[1.02]"
              loading="lazy"
            />
          </a>
        );
      })}
    </div>
  );
}
