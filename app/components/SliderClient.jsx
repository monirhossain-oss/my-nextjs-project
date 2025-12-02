"use client";

import React, { useState, useEffect, useRef, useCallback } from "react";
import Image from "next/image";

export default function SliderClient({
    images,
    autoplay = true,
    autoplayInterval = 4000,
    showArrows = true,
    showDots = true,
    heightClass = "h-64"
}) {
    const [index, setIndex] = useState(0);
    const length = images.length;
    const timerRef = useRef(null); 

    const startAutoplay = useCallback(() => {
        stopAutoplay();
        timerRef.current = setInterval(() => {
            setIndex(prev => (prev + 1) % length);
        }, autoplayInterval);
    }, [autoplayInterval, length]);    

    const stopAutoplay = useCallback(() => {
        if (timerRef.current) {
            clearInterval(timerRef.current);
            timerRef.current = null;
        }
    }, []);

    useEffect(() => {
        if (!autoplay) return;
        startAutoplay();
        return () => stopAutoplay();
    }, [index, autoplay, startAutoplay, stopAutoplay]);

    const prevSlide = () => setIndex(prev => (prev - 1 + length) % length);
    const nextSlide = () => setIndex(prev => (prev + 1) % length); 
    const goToSlide = (i) => setIndex(i % length); 
    return (
        <div
            className={`relative overflow-hidden select-none ${heightClass} rounded-lg bg-gray-100`}
            onMouseEnter={stopAutoplay}
            onMouseLeave={() => autoplay && startAutoplay()}
        >
            <div
                className="flex transition-transform duration-500 ease-out h-full"
                style={{ transform: `translateX(-${index * 100}%)` }}
            >
                {images.map((src, i) => (
                    <div key={i} className="w-full flex-shrink-0 relative h-full">
                        <Image
                            src={src}
                            alt={`slide-${i}`}
                            fill
                            className="object-cover"
                            priority={i === 0} 
                        />
                    </div>
                ))}
            </div>

            {/* Arrows */}
            {showArrows && (
                <>
                    <button
                        onClick={prevSlide}
                        className="absolute left-2 top-1/2 -translate-y-1/2 z-20 p-2 rounded-full shadow"
                        aria-label="Previous slide"
                    >
                        &#10094; {/* ← arrow */}
                    </button>
                    <button
                        onClick={nextSlide}
                        className="absolute right-2 top-1/2 -translate-y-1/2 z-20 p-2 rounded-full shadow"
                        aria-label="Next slide"
                    >
                        &#10095; {/* → arrow */}
                    </button>
                </>
            )}

            {/* Dots */}
            {showDots && (
                <div className="absolute bottom-3 left-1/2 -translate-x-1/2 flex gap-2 z-20">
                    {images.map((_, i) => (
                        <button
                            key={i}
                            onClick={() => goToSlide(i)}
                            className={`w-2 h-2 md:w-3 md:h-3 rounded-full ${i === index ? "bg-white" : "bg-white/60"} shadow`}
                            aria-label={`Go to slide ${i + 1}`}
                        />
                    ))}
                </div>
            )}
        </div>
    );
}
