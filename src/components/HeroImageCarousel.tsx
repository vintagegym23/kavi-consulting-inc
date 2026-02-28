import React, { useEffect, useState } from 'react';
import { AnimatePresence, motion, useReducedMotion } from 'framer-motion';

interface HeroSlide {
  src: string;
  alt: string;
}

interface HeroImageCarouselProps {
  slides: HeroSlide[];
  autoPlayInterval?: number;
}

const HeroImageCarousel: React.FC<HeroImageCarouselProps> = ({
  slides,
  autoPlayInterval = 6000
}) => {
  const [activeIndex, setActiveIndex] = useState(0);
  const [direction, setDirection] = useState(1);
  const [isPaused, setIsPaused] = useState(false);
  const prefersReducedMotion = useReducedMotion();

  useEffect(() => {
    if (slides.length <= 1 || isPaused) return;

    const timer = window.setInterval(() => {
      // Autoplay always advances right-to-left.
      setDirection(1);
      setActiveIndex((prev) => (prev + 1) % slides.length);
    }, autoPlayInterval);

    return () => window.clearInterval(timer);
  }, [slides.length, isPaused, autoPlayInterval]);

  if (!slides.length) return null;

  const goToPrevious = () => {
    setDirection(-1);
    setActiveIndex((prev) => (prev - 1 + slides.length) % slides.length);
  };

  const goToNext = () => {
    setDirection(1);
    setActiveIndex((prev) => (prev + 1) % slides.length);
  };

  return (
    <div
      className="absolute inset-0 overflow-hidden"
      onMouseEnter={() => setIsPaused(true)}
      onMouseLeave={() => setIsPaused(false)}
    >
      <AnimatePresence mode="sync" initial={false}>
        <motion.img
          key={`${slides[activeIndex].src}-${activeIndex}`}
          custom={direction}
          src={slides[activeIndex].src}
          alt={slides[activeIndex].alt}
          className="absolute inset-0 h-full w-full object-cover will-change-transform"
          initial={(currentDirection) => ({
            x: prefersReducedMotion ? 0 : currentDirection > 0 ? '100%' : '-100%',
            scale: 1.05
          })}
          animate={{ x: 0, scale: prefersReducedMotion ? 1 : 1.02 }}
          exit={(currentDirection) => ({
            x: prefersReducedMotion ? 0 : currentDirection > 0 ? '-100%' : '100%',
            scale: 1.08
          })}
          transition={{ duration: prefersReducedMotion ? 0.12 : 0.45, ease: [0.22, 1, 0.36, 1] }}
          loading="eager"
        />
      </AnimatePresence>

      <div className="absolute inset-0 bg-gradient-to-r from-slate-950/85 via-slate-950/65 to-slate-950/55" />
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_20%_40%,rgba(30,64,175,0.30),transparent_50%)]" />

      <div className="absolute left-1/2 bottom-8 z-20 hidden -translate-x-1/2 items-center gap-2 md:flex">
        {slides.map((slide, index) => (
          <button
            key={slide.src}
            type="button"
            onClick={() => {
              if (index === activeIndex) return;
              setDirection(index > activeIndex ? 1 : -1);
              setActiveIndex(index);
            }}
            className={`h-2.5 rounded-full transition-all duration-300 ${
              index === activeIndex ? 'w-10 bg-white' : 'w-2.5 bg-white/55 hover:bg-white/80'
            }`}
            aria-label={`Go to slide ${index + 1}`}
            aria-current={index === activeIndex}
          />
        ))}
      </div>

      <div className="absolute inset-y-0 left-4 right-4 z-20 hidden items-center justify-between md:flex">
        <button
          type="button"
          onClick={goToPrevious}
          className="rounded-full border border-white/35 bg-black/25 p-2 text-white backdrop-blur-sm transition hover:bg-black/45 focus:outline-none focus:ring-2 focus:ring-white/60"
          aria-label="Previous slide"
        >
          <span className="material-symbols-outlined">chevron_left</span>
        </button>
        <button
          type="button"
          onClick={goToNext}
          className="rounded-full border border-white/35 bg-black/25 p-2 text-white backdrop-blur-sm transition hover:bg-black/45 focus:outline-none focus:ring-2 focus:ring-white/60"
          aria-label="Next slide"
        >
          <span className="material-symbols-outlined">chevron_right</span>
        </button>
      </div>
    </div>
  );
};

export default HeroImageCarousel;
