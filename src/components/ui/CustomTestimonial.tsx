'use client';

import { cn } from '@/lib/utils';
import React, { useEffect, useState, useRef, useCallback } from 'react';
import Image from 'next/image';

interface TestimonialItem {
  name: string;
  image: string;

  text: string;
}

interface CustomTestimonialsProps {
  items?: TestimonialItem[];
  direction?: 'left' | 'right';
  speed?: 'fast' | 'normal' | 'slow';
  pauseOnHover?: boolean;
  className?: string;
}

export const CustomTestimonials: React.FC<CustomTestimonialsProps> = ({
  items = [],
  direction = 'left',
  speed = 'fast',
  pauseOnHover = true,
  className,
}) => {
  const containerRef = useRef<HTMLDivElement | null>(null);
  const scrollerRef = useRef<HTMLUListElement | null>(null);

  const [start, setStart] = useState<boolean>(false);

  const getDirection = useCallback(() => {
    if (containerRef.current) {
      if (direction === 'left') {
        containerRef.current.style.setProperty(
          '--animation-direction',
          'forwards'
        );
      } else {
        containerRef.current.style.setProperty(
          '--animation-direction',
          'reverse'
        );
      }
    }
  }, [direction]);

  const getSpeed = useCallback(() => {
    if (containerRef.current) {
      if (speed === 'fast') {
        containerRef.current.style.setProperty('--animation-duration', '20s');
      } else if (speed === 'normal') {
        containerRef.current.style.setProperty('--animation-duration', '40s');
      } else {
        containerRef.current.style.setProperty('--animation-duration', '80s');
      }
    }
  }, [speed]);

  const addAnimation = useCallback(() => {
    if (containerRef.current && scrollerRef.current) {
      const scrollerContent = Array.from(scrollerRef.current.children);

      scrollerContent.forEach((item) => {
        const duplicatedItem = item.cloneNode(true);
        if (scrollerRef.current) {
          scrollerRef.current.appendChild(duplicatedItem);
        }
      });

      getDirection();
      getSpeed();
      setStart(true);
    }
  }, [getDirection, getSpeed]);

  useEffect(() => {
    addAnimation();
  }, [addAnimation]);

  return (
    <div
      ref={containerRef}
      className={cn(
        'scroller relative z-20 mx-auto max-w-screen-xl overflow-hidden [mask-image:linear-gradient(to_right,transparent,white_8%,white_92%,transparent)]',
        className
      )}
    >
      <ul
        ref={scrollerRef}
        className={cn(
          'flex w-max min-w-full shrink-0 flex-nowrap gap-5 py-4',
          start && 'animate-scroll ',
          pauseOnHover && 'hover:[animation-play-state:paused]'
        )}
      >
        {items.map((item) => (
          <li
            key={item.name}
            className="relative flex w-[320px] max-w-full flex-shrink-0 flex-col justify-between rounded-3xl border border-line bg-cream px-8 pb-7 pt-6 md:w-[420px]"
          >
            <blockquote>
              <span
                aria-hidden="true"
                className="font-serif text-5xl leading-none text-clay/30"
              >
                &ldquo;
              </span>
              <p className="mt-2 text-sm leading-relaxed text-inkSoft">
                {item.text}
              </p>
            </blockquote>

            <figcaption className="mt-7 flex items-center gap-3 border-t border-line pt-5">
              <Image
                src={item.image}
                alt=""
                className="h-10 w-10 shrink-0 rounded-full object-cover"
                width={80}
                height={80}
              />
              <span className="text-sm font-medium text-ink">{item.name}</span>
            </figcaption>
          </li>
        ))}
      </ul>
    </div>
  );
};
