"use client"

import Image from "next/image"
import { useScrollAnimation } from "@/hooks/use-scroll-animation"

const WHATSAPP_LINK = "https://wa.me/212600000000"

const cheesecakes = [
  {
    name: "Classique",
    description: "Notre recette originale. Onctueuse, douce et avec une touche de vanille naturelle.",
    price: "180 MAD",
    image: "/images/clasica.jpg",
  },
  {
    name: "Pistache",
    description: "Base de biscuit avec creme de pistache sicilienne et pistaches caramelisees.",
    price: "220 MAD",
    image: "/images/pistacho.jpg",
  },
  {
    name: "Lotus Biscoff",
    description: "Biscuit speculoos, creme de Lotus et caramel. Irresistible.",
    price: "200 MAD",
    image: "/images/lotus.jpg",
  },
  {
    name: "Fruits Rouges",
    description: "Fraises, framboises et myrtilles fraiches avec coulis de fruits des bois.",
    price: "200 MAD",
    image: "/images/frutos-rojos.jpg",
  },
  {
    name: "Nutella",
    description: "Chocolat et noisettes fondus dans une tarte onctueuse avec ganache.",
    price: "210 MAD",
    image: "/images/nutella.jpg",
  },
  {
    name: "Oreo",
    description: "Base croustillante d'Oreo avec une creme douce cookies and cream.",
    price: "200 MAD",
    image: "/images/oreo.jpg",
  },
]

function CheesecakeCard({
  cake,
  index,
}: {
  cake: (typeof cheesecakes)[number]
  index: number
}) {
  const { ref, isVisible } = useScrollAnimation(0.1)

  return (
    <div
      ref={ref}
      className={`group overflow-hidden rounded-2xl bg-card shadow-sm transition-all duration-500 hover:shadow-xl ${
        isVisible ? "animate-fade-in-up" : "opacity-0"
      }`}
      style={{ animationDelay: `${index * 0.1}s`, animationFillMode: "both" }}
    >
      <div className="relative aspect-square overflow-hidden">
        <Image
          src={cake.image}
          alt={cake.name}
          fill
          className="object-cover transition-transform duration-700 group-hover:scale-110"
        />
        <div className="absolute inset-0 bg-foreground/0 transition-colors duration-300 group-hover:bg-foreground/10" />
      </div>
      <div className="flex flex-col gap-3 p-6">
        <div className="flex items-start justify-between">
          <h3 className="font-serif text-xl tracking-wide text-foreground">
            {cake.name}
          </h3>
          <span className="rounded-full bg-secondary px-3 py-1 text-sm font-semibold text-secondary-foreground">
            {cake.price}
          </span>
        </div>
        <p className="text-sm leading-relaxed text-muted-foreground">
          {cake.description}
        </p>
        <a
          href={`${WHATSAPP_LINK}?text=${encodeURIComponent(`Bonjour ! Je voudrais commander le cheesecake ${cake.name}`)}`}
          target="_blank"
          rel="noopener noreferrer"
          className="mt-2 inline-flex w-full items-center justify-center gap-2 rounded-xl bg-primary py-3 text-sm font-medium text-primary-foreground transition-all hover:bg-primary/90 hover:shadow-md"
        >
          <svg className="h-4 w-4" viewBox="0 0 24 24" fill="currentColor">
            <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z" />
          </svg>
          Commander par WhatsApp
        </a>
      </div>
    </div>
  )
}

export function Collection() {
  const { ref: headerRef, isVisible: headerVisible } = useScrollAnimation(0.2)

  return (
    <section id="collection" className="bg-secondary/50 py-24 md:py-32">
      <div className="mx-auto max-w-7xl px-6">
        {/* Header */}
        <div
          ref={headerRef}
          className={`mb-16 text-center ${headerVisible ? "animate-fade-in-up" : "opacity-0"}`}
        >
          <p className="mb-4 text-sm tracking-[0.2em] uppercase text-muted-foreground">
            Notre collection
          </p>
          <h2 className="font-serif text-3xl tracking-wide text-foreground md:text-4xl lg:text-5xl">
            Tartes artisanales
          </h2>
          <p className="mx-auto mt-4 max-w-lg text-base leading-relaxed text-muted-foreground">
            Chaque saveur raconte une histoire. Preparees avec les meilleurs
            ingredients pour des moments speciaux.
          </p>
        </div>

        {/* Grid */}
        <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-3">
          {cheesecakes.map((cake, i) => (
            <CheesecakeCard key={cake.name} cake={cake} index={i} />
          ))}
        </div>
      </div>
    </section>
  )
}
