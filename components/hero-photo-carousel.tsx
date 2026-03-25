'use client';

import Image from 'next/image';
import { useEffect, useMemo, useState } from 'react';

type HeroPhotoCarouselProps = {
  items: ReadonlyArray<{ src: string; title: string; description?: string }>;
  intervalMs?: number;
};

export function HeroPhotoCarousel({ items, intervalMs = 5000 }: HeroPhotoCarouselProps) {
  const slides = useMemo(() => (items.length > 0 ? items : [{ src: '/images/products/hats/placeholder-hat.svg', title: 'Вязаная косынка оптом' }]), [items]);
  const [activeIndex, setActiveIndex] = useState(0);
  const [isPaused, setIsPaused] = useState(false);
  const [expandedIndex, setExpandedIndex] = useState<number | null>(null);

  useEffect(() => {
    if (isPaused || slides.length < 2) {
      return;
    }

    const timer = window.setInterval(() => {
      setActiveIndex((current) => (current + 1) % slides.length);
    }, intervalMs);

    return () => window.clearInterval(timer);
  }, [intervalMs, isPaused, slides.length]);

  function goToSlide(index: number) {
    const normalized = ((index % slides.length) + slides.length) % slides.length;
    setActiveIndex(normalized);
  }

  return (
    <>
      <div
        className="relative overflow-hidden rounded-[34px] border border-black/[0.06] bg-[#ddd6cf] shadow-[0_24px_70px_rgba(19,25,22,0.14)]"
        onMouseEnter={() => setIsPaused(true)}
        onMouseLeave={() => setIsPaused(false)}
      >
        <div className="absolute left-5 right-5 top-5 z-20 flex items-center justify-between gap-3 rounded-[24px] border border-white/15 bg-black/30 px-4 py-3 text-xs font-semibold uppercase tracking-[0.18em] text-white backdrop-blur-sm">
          <span>Галерея вязаной косынки</span>
          <span>{activeIndex + 1}/{slides.length}</span>
        </div>

        <button
          type="button"
          className="group relative block h-[640px] w-full"
          onClick={() => setExpandedIndex(activeIndex)}
          aria-label="Открыть изображение в полном размере"
        >
          {slides.map((slide, index) => (
            <div
              key={`${slide.src}-${slide.title}`}
              className={`absolute inset-0 transition-opacity duration-500 ${index === activeIndex ? 'opacity-100' : 'pointer-events-none opacity-0'}`}
            >
              <Image src={slide.src} alt={slide.title} fill priority={index === 0} className="object-fill transition duration-700 group-hover:scale-105" />
              <div className="absolute inset-0 bg-gradient-to-t from-[#131518]/90 via-[#131518]/25 to-transparent" />
            </div>
          ))}

          <div className="absolute inset-x-0 bottom-0 z-20 p-6 sm:p-8">
            <div className="max-w-xl rounded-[28px] border border-white/12 bg-white/10 p-5 text-white backdrop-blur-md">
              <p className="text-xs font-semibold uppercase tracking-[0.18em] text-white/65">Нажмите, чтобы увеличить</p>
              <h3 className="mt-3 text-2xl font-semibold tracking-[-0.04em]">{slides[activeIndex]?.title}</h3>
              {slides[activeIndex]?.description ? <p className="mt-3 text-sm leading-7 text-white/75">{slides[activeIndex].description}</p> : null}
            </div>
          </div>
        </button>

        <button
          type="button"
          onClick={() => goToSlide(activeIndex - 1)}
          className="absolute left-4 top-1/2 z-20 h-11 w-11 -translate-y-1/2 rounded-full border border-white/20 bg-black/35 text-xl text-white backdrop-blur transition hover:bg-black/55"
          aria-label="Предыдущее изображение"
        >
          ‹
        </button>
        <button
          type="button"
          onClick={() => goToSlide(activeIndex + 1)}
          className="absolute right-4 top-1/2 z-20 h-11 w-11 -translate-y-1/2 rounded-full border border-white/20 bg-black/35 text-xl text-white backdrop-blur transition hover:bg-black/55"
          aria-label="Следующее изображение"
        >
          ›
        </button>

        <div className="absolute bottom-4 left-1/2 z-20 flex -translate-x-1/2 gap-2">
          {slides.map((slide, index) => (
            <button
              key={`dot-${slide.src}`}
              type="button"
              aria-label={`Перейти к изображению ${index + 1}`}
              onClick={() => goToSlide(index)}
              className={`h-2.5 w-2.5 rounded-full transition ${index === activeIndex ? 'bg-white' : 'bg-white/40 hover:bg-white/60'}`}
            />
          ))}
        </div>
      </div>

      {expandedIndex !== null ? (
        <div className="fixed inset-0 z-[120] flex items-center justify-center bg-black/85 p-4" role="dialog" aria-modal="true">
          <button type="button" className="absolute right-4 top-4 rounded-full border border-white/20 bg-black/40 px-4 py-2 text-sm font-semibold text-white" onClick={() => setExpandedIndex(null)}>
            Закрыть
          </button>

          <button type="button" className="absolute left-4 top-1/2 h-11 w-11 -translate-y-1/2 rounded-full border border-white/20 bg-black/40 text-xl text-white" onClick={() => setExpandedIndex((current) => (current === null ? 0 : (current - 1 + slides.length) % slides.length))}>
            ‹
          </button>
          <button type="button" className="absolute right-4 top-1/2 h-11 w-11 -translate-y-1/2 rounded-full border border-white/20 bg-black/40 text-xl text-white" onClick={() => setExpandedIndex((current) => (current === null ? 0 : (current + 1) % slides.length))}>
            ›
          </button>

          <div className="relative h-[82vh] w-full max-w-5xl overflow-hidden rounded-[24px] border border-white/20 bg-[#111]">
            <Image src={slides[expandedIndex].src} alt={slides[expandedIndex].title} fill className="object-contain" />
          </div>
        </div>
      ) : null}
    </>
  );
}
