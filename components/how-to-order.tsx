"use client"

import { useScrollAnimation } from "@/hooks/use-scroll-animation"

const steps = [
  {
    number: "01",
    title: "Choisissez votre tarte",
    description: "Explorez notre collection et trouvez votre saveur preferee.",
    icon: (
      <svg className="h-8 w-8" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
        <path strokeLinecap="round" strokeLinejoin="round" d="M21 8.25c0-2.485-2.099-4.5-4.688-4.5-1.935 0-3.597 1.126-4.312 2.733-.715-1.607-2.377-2.733-4.313-2.733C5.1 3.75 3 5.765 3 8.25c0 7.22 9 12 9 12s9-4.78 9-12z" />
      </svg>
    ),
  },
  {
    number: "02",
    title: "Ecrivez-nous par WhatsApp",
    description: "Envoyez-nous un message avec votre commande. Nous vous repondons instantanement.",
    icon: (
      <svg className="h-8 w-8" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
        <path strokeLinecap="round" strokeLinejoin="round" d="M8.625 12a.375.375 0 11-.75 0 .375.375 0 01.75 0zm0 0H8.25m4.125 0a.375.375 0 11-.75 0 .375.375 0 01.75 0zm0 0H12m4.125 0a.375.375 0 11-.75 0 .375.375 0 01.75 0zm0 0h-.375M21 12c0 4.556-4.03 8.25-9 8.25a9.764 9.764 0 01-2.555-.337A5.972 5.972 0 015.41 20.97a5.969 5.969 0 01-.474-.065 4.48 4.48 0 00.978-2.025c.09-.457-.133-.901-.467-1.226C3.93 16.178 3 14.189 3 12c0-4.556 4.03-8.25 9-8.25s9 3.694 9 8.25z" />
      </svg>
    ),
  },
  {
    number: "03",
    title: "Recevez votre commande",
    description: "Passez la chercher ou nous vous la livrons. Fraiche et prete a deguster.",
    icon: (
      <svg className="h-8 w-8" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
        <path strokeLinecap="round" strokeLinejoin="round" d="M15.75 10.5V6a3.75 3.75 0 10-7.5 0v4.5m11.356-1.993l1.263 12c.07.665-.45 1.243-1.119 1.243H4.25a1.125 1.125 0 01-1.12-1.243l1.264-12A1.125 1.125 0 015.513 7.5h12.974c.576 0 1.059.435 1.119 1.007zM8.625 10.5a.375.375 0 11-.75 0 .375.375 0 01.75 0zm7.5 0a.375.375 0 11-.75 0 .375.375 0 01.75 0z" />
      </svg>
    ),
  },
]

function StepCard({
  step,
  index,
}: {
  step: (typeof steps)[number]
  index: number
}) {
  const { ref: stepRef, isVisible: stepVisible } = useScrollAnimation(0.1)

  return (
    <div
      ref={stepRef}
      className={`group flex flex-col items-center gap-6 rounded-2xl bg-card p-10 text-center shadow-sm transition-all duration-500 hover:shadow-lg ${
        stepVisible ? "animate-fade-in-up" : "opacity-0"
      }`}
      style={{ animationDelay: `${index * 0.15}s`, animationFillMode: "both" }}
    >
      <div className="flex h-16 w-16 items-center justify-center rounded-2xl bg-accent/30 text-foreground transition-colors duration-300 group-hover:bg-accent/50">
        {step.icon}
      </div>
      <span className="font-serif text-4xl text-accent">{step.number}</span>
      <h3 className="font-serif text-xl tracking-wide text-foreground">
        {step.title}
      </h3>
      <p className="text-sm leading-relaxed text-muted-foreground">
        {step.description}
      </p>
    </div>
  )
}

export function HowToOrder() {
  const { ref, isVisible } = useScrollAnimation(0.2)

  return (
    <section className="py-24 md:py-32">
      <div className="mx-auto max-w-7xl px-6">
        <div
          ref={ref}
          className={`mb-16 text-center ${isVisible ? "animate-fade-in-up" : "opacity-0"}`}
        >
          <p className="mb-4 text-sm tracking-[0.2em] uppercase text-muted-foreground">
            Tres simple
          </p>
          <h2 className="font-serif text-3xl tracking-wide text-foreground md:text-4xl lg:text-5xl">
            Comment commander
          </h2>
        </div>

        <div className="grid gap-8 md:grid-cols-3">
          {steps.map((step, i) => (
            <StepCard key={step.number} step={step} index={i} />
          ))}
        </div>
      </div>
    </section>
  )
}
