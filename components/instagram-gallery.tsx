"use client"

import Image from "next/image"
import { useScrollAnimation } from "@/hooks/use-scroll-animation"

const images = [
  { src: "/images/insta-1.jpg", alt: "Part de tarte avec cafe" },
  { src: "/images/insta-2.jpg", alt: "Interieur de La Cheesequerie" },
  { src: "/images/insta-3.jpg", alt: "Tarte artisanale" },
  { src: "/images/insta-4.jpg", alt: "Vitrine de tartes" },
  { src: "/images/insta-5.jpg", alt: "Table avec tarte decoree" },
  { src: "/images/insta-6.jpg", alt: "Processus de preparation" },
]

export function InstagramGallery() {
  const { ref, isVisible } = useScrollAnimation(0.1)

  return (
    <section className="py-24 md:py-32">
      <div className="mx-auto max-w-7xl px-6">
        <div
          ref={ref}
          className={`mb-16 text-center ${isVisible ? "animate-fade-in-up" : "opacity-0"}`}
        >
          <p className="mb-4 text-sm tracking-[0.2em] uppercase text-muted-foreground">
            Suivez-nous
          </p>
          <h2 className="font-serif text-3xl tracking-wide text-foreground md:text-4xl lg:text-5xl">
            @lacheesequerie
          </h2>
          <p className="mx-auto mt-4 max-w-md text-base leading-relaxed text-muted-foreground">
            Decouvrez notre univers sur Instagram
          </p>
        </div>

        <div className="grid grid-cols-2 gap-3 md:grid-cols-3 md:gap-4">
          {images.map((img, i) => (
            <a
              key={i}
              href="https://instagram.com"
              target="_blank"
              rel="noopener noreferrer"
              className="group relative aspect-square overflow-hidden rounded-xl"
            >
              <Image
                src={img.src}
                alt={img.alt}
                fill
                className="object-cover transition-transform duration-700 group-hover:scale-110"
              />
              <div className="absolute inset-0 flex items-center justify-center bg-foreground/0 transition-colors duration-300 group-hover:bg-foreground/30">
                <svg
                  className="h-8 w-8 text-primary-foreground opacity-0 transition-all duration-300 group-hover:opacity-100"
                  fill="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zM12 0C8.741 0 8.333.014 7.053.072 2.695.272.273 2.69.073 7.052.014 8.333 0 8.741 0 12c0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98C8.333 23.986 8.741 24 12 24c3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98C15.668.014 15.259 0 12 0zm0 5.838a6.162 6.162 0 100 12.324 6.162 6.162 0 000-12.324zM12 16a4 4 0 110-8 4 4 0 010 8zm6.406-11.845a1.44 1.44 0 100 2.881 1.44 1.44 0 000-2.881z" />
                </svg>
              </div>
            </a>
          ))}
        </div>
      </div>
    </section>
  )
}
