"use client"

import { useState, useEffect, useCallback } from "react"
import { ChevronLeft, ChevronRight } from "lucide-react"
import { useScrollAnimation } from "@/hooks/use-scroll-animation"

const testimonials = [
  {
    quote:
      "Le meilleur cheesecake que j'ai goute de ma vie. La texture est incroyable et le gout est parfait. Je ne peux plus m'en passer.",
    author: "Sara M.",
    location: "Tanger",
  },
  {
    quote:
      "J'ai commande celui a la pistache pour un anniversaire et ce fut un vrai succes. Presentation impeccable et un gout qui fait craquer. On reviendra.",
    author: "Ahmed K.",
    location: "Tanger",
  },
  {
    quote:
      "Le Lotus Biscoff est addictif. Le service par WhatsApp est super rapide et agreable. Mon endroit prefere pour les cheesecakes a Tanger.",
    author: "Leila B.",
    location: "Tanger",
  },
  {
    quote:
      "Chaque tarte est une experience. On ressent l'amour et la qualite a chaque bouchee. Nous sommes devenus des clients fideles.",
    author: "Omar T.",
    location: "Tanger",
  },
]

export function Testimonials() {
  const [current, setCurrent] = useState(0)
  const { ref, isVisible } = useScrollAnimation(0.2)

  const next = useCallback(() => {
    setCurrent((prev) => (prev + 1) % testimonials.length)
  }, [])

  const prev = useCallback(() => {
    setCurrent((prev) => (prev - 1 + testimonials.length) % testimonials.length)
  }, [])

  useEffect(() => {
    const timer = setInterval(next, 5000)
    return () => clearInterval(timer)
  }, [next])

  return (
    <section id="testimonials" className="bg-secondary/50 py-24 md:py-32">
      <div className="mx-auto max-w-4xl px-6">
        <div
          ref={ref}
          className={`text-center ${isVisible ? "animate-fade-in-up" : "opacity-0"}`}
        >
          <p className="mb-4 text-sm tracking-[0.2em] uppercase text-muted-foreground">
            Temoignages
          </p>
          <h2 className="mb-16 font-serif text-3xl tracking-wide text-foreground md:text-4xl lg:text-5xl">
            Ce que disent nos clients
          </h2>
        </div>

        <div className="relative">
          {/* Quote */}
          <div className="min-h-[200px]">
            <div
              key={current}
              className="animate-fade-in flex flex-col items-center gap-8 text-center"
            >
              <svg
                className="h-10 w-10 text-accent"
                fill="currentColor"
                viewBox="0 0 24 24"
              >
                <path d="M14.017 21v-7.391c0-5.704 3.731-9.57 8.983-10.609l.995 2.151c-2.432.917-3.995 3.638-3.995 5.849h4v10H14.017zM0 21v-7.391c0-5.704 3.731-9.57 8.983-10.609L9.978 5.151c-2.432.917-3.995 3.638-3.995 5.849h4v10H0z" />
              </svg>
              <p className="font-serif text-xl leading-relaxed text-foreground md:text-2xl lg:text-3xl">
                {`"${testimonials[current].quote}"`}
              </p>
              <div>
                <p className="text-sm font-semibold tracking-wide text-foreground">
                  {testimonials[current].author}
                </p>
                <p className="text-sm text-muted-foreground">
                  {testimonials[current].location}
                </p>
              </div>
            </div>
          </div>

          {/* Controls */}
          <div className="mt-10 flex items-center justify-center gap-4">
            <button
              onClick={prev}
              className="flex h-10 w-10 items-center justify-center rounded-full border border-border text-foreground/60 transition-all hover:border-foreground hover:text-foreground"
              aria-label="Temoignage precedent"
            >
              <ChevronLeft className="h-5 w-5" />
            </button>
            <div className="flex gap-2">
              {testimonials.map((_, i) => (
                <button
                  key={i}
                  onClick={() => setCurrent(i)}
                  className={`h-2 rounded-full transition-all duration-300 ${
                    i === current ? "w-8 bg-primary" : "w-2 bg-border"
                  }`}
                  aria-label={`Aller au temoignage ${i + 1}`}
                />
              ))}
            </div>
            <button
              onClick={next}
              className="flex h-10 w-10 items-center justify-center rounded-full border border-border text-foreground/60 transition-all hover:border-foreground hover:text-foreground"
              aria-label="Temoignage suivant"
            >
              <ChevronRight className="h-5 w-5" />
            </button>
          </div>
        </div>
      </div>
    </section>
  )
}
