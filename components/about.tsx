"use client"

import Image from "next/image"
import { useScrollAnimation } from "@/hooks/use-scroll-animation"

export function About() {
  const { ref, isVisible } = useScrollAnimation(0.2)

  return (
    <section id="about" className="py-24 md:py-32">
      <div
        ref={ref}
        className={`mx-auto grid max-w-7xl items-center gap-12 px-6 md:grid-cols-2 lg:gap-20 ${
          isVisible ? "animate-fade-in-up" : "opacity-0"
        }`}
      >
        {/* Image */}
        <div className="relative aspect-[4/5] overflow-hidden rounded-2xl">
          <Image
            src="/images/about.jpg"
            alt="Processus artisanal de preparation des cheesecakes"
            fill
            className="object-cover transition-transform duration-700 hover:scale-105"
          />
        </div>

        {/* Text */}
        <div className="flex flex-col gap-6">
          <p className="text-sm tracking-[0.2em] uppercase text-muted-foreground">
            Notre histoire
          </p>
          <h2 className="font-serif text-3xl leading-snug tracking-wide text-foreground md:text-4xl lg:text-5xl">
            Faits a la main, avec des ingredients premium
          </h2>
          <div className="h-px w-16 bg-accent" />
          <p className="text-base leading-relaxed text-muted-foreground md:text-lg">
            Chez La Cheesequerie, chaque tarte est une oeuvre d{"'"}art preparee
            avec des ingredients soigneusement selectionnes. Nos recettes allient
            tradition et touches creatives, offrant des saveurs uniques qui
            conquierent des la premiere bouchee.
          </p>
          <p className="text-base leading-relaxed text-muted-foreground md:text-lg">
            Production artisanale en petits lots, fromage frais de premiere
            qualite, beurre francais et les meilleurs toppings. Chaque tarte est
            preparee avec soin, dedication et beaucoup d{"'"}amour.
          </p>
          <a
            href="#collection"
            className="mt-4 inline-flex w-fit items-center gap-2 rounded-full bg-primary px-6 py-3 text-sm font-medium text-primary-foreground transition-all hover:bg-primary/90 hover:shadow-md"
          >
            Decouvrir nos tartes
            <svg className="h-4 w-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
              <path strokeLinecap="round" strokeLinejoin="round" d="M17 8l4 4m0 0l-4 4m4-4H3" />
            </svg>
          </a>
        </div>
      </div>
    </section>
  )
}
