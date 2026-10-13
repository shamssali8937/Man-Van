"use client";

import Image from "next/image";
import { useCallback, useEffect, useState } from "react";

export interface VanImage {
  src: string;
  alt: string;
  caption: string;
  badge: string;
}

interface VanGalleryProps {
  images: VanImage[];
}

export function VanGallery({ images }: VanGalleryProps) {
  const [selectedIndex, setSelectedIndex] = useState<number | null>(null);

  const handleClose = useCallback(() => {
    setSelectedIndex(null);
  }, []);

  const handlePrev = useCallback(() => {
    setSelectedIndex((prev) =>
      prev === null ? null : (prev - 1 + images.length) % images.length,
    );
  }, [images.length]);

  const handleNext = useCallback(() => {
    setSelectedIndex((prev) =>
      prev === null ? null : (prev + 1) % images.length,
    );
  }, [images.length]);

  // Keyboard navigation for accessible lightbox
  useEffect(() => {
    if (selectedIndex === null) return;

    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === "Escape") {
        handleClose();
      } else if (e.key === "ArrowLeft") {
        handlePrev();
      } else if (e.key === "ArrowRight") {
        handleNext();
      }
    };

    window.addEventListener("keydown", handleKeyDown);
    // Lock body scroll when modal is active
    document.body.style.overflow = "hidden";

    return () => {
      window.removeEventListener("keydown", handleKeyDown);
      document.body.style.overflow = "";
    };
  }, [selectedIndex, handleClose, handlePrev, handleNext]);

  return (
    <div>
      {/* Responsive Image Grid */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        {images.map((img, index) => (
          <button
            key={img.src}
            type="button"
            onClick={() => setSelectedIndex(index)}
            className="group relative flex flex-col text-left overflow-hidden rounded-2xl bg-white border border-slate-200 shadow-xs hover:shadow-md hover:border-red-300 transition-all focus:outline-hidden focus:ring-2 focus:ring-red-500 cursor-zoom-in"
            aria-label={`View enlarged photo: ${img.caption}`}
          >
            <div className="relative aspect-4/3 w-full overflow-hidden bg-slate-100">
              <Image
                src={img.src}
                alt={img.alt}
                fill
                sizes="(max-width: 768px) 100vw, 33vw"
                className="object-cover transition-transform duration-300 group-hover:scale-105"
                priority={index === 0}
              />
              <span className="absolute top-3 left-3 rounded-full bg-slate-900/80 backdrop-blur-xs px-3 py-1 text-xs font-semibold text-white">
                {img.badge}
              </span>
              <span className="absolute bottom-3 right-3 rounded-full bg-red-600/90 text-white p-1.5 opacity-0 group-hover:opacity-100 transition-opacity">
                <svg
                  className="w-4 h-4"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                  aria-hidden="true"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0zM10 7v6m3-3H7"
                  />
                </svg>
              </span>
            </div>
            <div className="p-4 bg-white">
              <p className="text-sm font-semibold text-slate-900">
                {img.caption}
              </p>
              <p className="text-xs text-slate-500 mt-1">
                Tap to inspect high-resolution view
              </p>
            </div>
          </button>
        ))}
      </div>

      {/* Accessible Lightbox Modal */}
      {selectedIndex !== null && (
        <div
          role="dialog"
          aria-modal="true"
          aria-label="Enlarged van photo preview"
          className="fixed inset-0 z-50 flex items-center justify-center p-4 sm:p-6"
        >
          {/* Backdrop button */}
          <button
            type="button"
            onClick={handleClose}
            aria-label="Close photo preview backdrop"
            className="fixed inset-0 bg-slate-950/90 backdrop-blur-sm cursor-zoom-out"
          />

          {/* Close button */}
          <button
            type="button"
            onClick={handleClose}
            className="absolute top-4 right-4 z-50 rounded-full bg-white/10 p-2 text-white hover:bg-white/20 transition-colors focus:outline-hidden focus:ring-2 focus:ring-white"
            aria-label="Close photo preview"
          >
            <svg
              className="w-6 h-6"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
              aria-hidden="true"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M6 18L18 6M6 6l12 12"
              />
            </svg>
          </button>

          {/* Previous button */}
          <button
            type="button"
            onClick={handlePrev}
            className="absolute left-4 z-50 rounded-full bg-white/10 p-3 text-white hover:bg-white/20 transition-colors focus:outline-hidden focus:ring-2 focus:ring-white"
            aria-label="Previous photo"
          >
            <svg
              className="w-6 h-6"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
              aria-hidden="true"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M15 19l-7-7 7-7"
              />
            </svg>
          </button>

          {/* Next button */}
          <button
            type="button"
            onClick={handleNext}
            className="absolute right-4 z-50 rounded-full bg-white/10 p-3 text-white hover:bg-white/20 transition-colors focus:outline-hidden focus:ring-2 focus:ring-white"
            aria-label="Next photo"
          >
            <svg
              className="w-6 h-6"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
              aria-hidden="true"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M9 5l7 7-7 7"
              />
            </svg>
          </button>

          {/* Image & Caption Container */}
          <div className="relative z-10 max-w-5xl max-h-[85vh] w-full flex flex-col items-center pointer-events-none">
            <div className="relative w-full h-[65vh] max-h-[700px] overflow-hidden rounded-xl pointer-events-auto">
              <Image
                src={images[selectedIndex].src}
                alt={images[selectedIndex].alt}
                fill
                className="object-contain"
                priority
              />
            </div>
            <div className="mt-4 text-center text-white pointer-events-auto">
              <p className="text-base sm:text-lg font-bold">
                {images[selectedIndex].caption}
              </p>
              <p className="text-xs sm:text-sm text-slate-300 mt-1">
                {selectedIndex + 1} of {images.length} •{" "}
                {images[selectedIndex].alt}
              </p>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}
