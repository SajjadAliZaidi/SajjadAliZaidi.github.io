import React, { useState, useEffect, useCallback } from "react";
import { X, ChevronLeft, ChevronRight } from "lucide-react";
import { Button } from "@/components/ui/button";

interface ScreenshotGalleryProps {
  images: Record<string, unknown>;
  altPrefix: string;
}

export function ScreenshotGallery({ images, altPrefix }: ScreenshotGalleryProps) {
  const [selectedIndex, setSelectedIndex] = useState<number | null>(null);

  const imageUrls = Object.keys(images).map((path) => path.replace("/public", ""));

  const handleNext = useCallback(() => {
    if (selectedIndex !== null) {
      setSelectedIndex((selectedIndex + 1) % imageUrls.length);
    }
  }, [selectedIndex, imageUrls.length]);

  const handlePrev = useCallback(() => {
    if (selectedIndex !== null) {
      setSelectedIndex((selectedIndex - 1 + imageUrls.length) % imageUrls.length);
    }
  }, [selectedIndex, imageUrls.length]);

  const handleClose = () => {
    setSelectedIndex(null);
  };

  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (selectedIndex === null) return;
      if (e.key === "Escape") handleClose();
      if (e.key === "ArrowRight") handleNext();
      if (e.key === "ArrowLeft") handlePrev();
    };

    window.addEventListener("keydown", handleKeyDown);
    return () => window.removeEventListener("keydown", handleKeyDown);
  }, [selectedIndex, handleNext, handlePrev]);

  useEffect(() => {
    if (selectedIndex !== null) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "unset";
    }
    return () => {
      document.body.style.overflow = "unset";
    };
  }, [selectedIndex]);

  return (
    <>
      <div className="mt-8 columns-2 sm:columns-3 gap-4 space-y-4">
        {imageUrls.map((url, idx) => {
          const n = url.split("_").pop()?.split(".")[0] || url;
          return (
            <button
              key={url}
              onClick={() => setSelectedIndex(idx)}
              className="group block w-full cursor-zoom-in break-inside-avoid overflow-hidden rounded-lg border border-border transition-all duration-300 hover:border-primary hover:shadow-[0_0_15px_rgba(59,130,246,0.3)]"
            >
              <img
                src={url}
                alt={`${altPrefix} screenshot ${n}`}
                className="w-full object-cover transition-transform duration-300 group-hover:scale-[1.02]"
                loading="lazy"
              />
            </button>
          );
        })}
      </div>

      {selectedIndex !== null && (
        <div className="fixed inset-0 z-50 flex items-center justify-center bg-background/90 backdrop-blur-sm p-4">
          <div
            className="absolute inset-0"
            onClick={handleClose}
          />

          <Button
            variant="ghost"
            size="icon"
            className="absolute top-4 right-4 z-50 bg-background/50 hover:bg-background/80 rounded-full"
            onClick={handleClose}
          >
            <X className="h-5 w-5" />
          </Button>

          <Button
            variant="ghost"
            size="icon"
            className="absolute left-4 z-50 bg-background/50 hover:bg-background/80 rounded-full h-12 w-12"
            onClick={handlePrev}
          >
            <ChevronLeft className="h-8 w-8" />
          </Button>

          <img
            src={imageUrls[selectedIndex]}
            alt={`${altPrefix} screenshot`}
            className="relative z-40 max-h-[90vh] max-w-[90vw] object-contain rounded-md shadow-2xl"
          />

          <Button
            variant="ghost"
            size="icon"
            className="absolute right-4 z-50 bg-background/50 hover:bg-background/80 rounded-full h-12 w-12"
            onClick={handleNext}
          >
            <ChevronRight className="h-8 w-8" />
          </Button>
        </div>
      )}
    </>
  );
}
