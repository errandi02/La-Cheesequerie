"use client"

import { useState, useEffect } from "react"
import { Menu, X } from "lucide-react"

const WHATSAPP_LINK = "https://wa.me/212600000000"

const navLinks = [
  { label: "Accueil", href: "#hero" },
  { label: "Notre histoire", href: "#about" },
  { label: "Nos tartes", href: "#collection" },
  { label: "Avis", href: "#testimonials" },
]

export function Navbar() {
  const [scrolled, setScrolled] = useState(false)
  const [open, setOpen] = useState(false)

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 50)
    window.addEventListener("scroll", onScroll)
    return () => window.removeEventListener("scroll", onScroll)
  }, [])

  return (
    <nav
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${
        scrolled
          ? "bg-background/90 backdrop-blur-md shadow-sm"
          : "bg-transparent"
      }`}
    >
      <div className="mx-auto flex max-w-7xl items-center justify-between px-6 py-4">
        <a href="#hero" className="font-serif text-xl tracking-wide text-foreground">
          La Cheesequerie
        </a>

        {/* Desktop links */}
        <div className="hidden items-center gap-8 md:flex">
          {navLinks.map((link) => (
            <a
              key={link.href}
              href={link.href}
              className="text-sm tracking-wide text-foreground/70 transition-colors hover:text-foreground"
            >
              {link.label}
            </a>
          ))}
          <a
            href={WHATSAPP_LINK}
            target="_blank"
            rel="noopener noreferrer"
            className="rounded-full bg-primary px-5 py-2 text-sm font-medium text-primary-foreground transition-all hover:bg-primary/90 hover:shadow-md"
          >
            Commander
          </a>
        </div>

        {/* Mobile toggle */}
        <button
          onClick={() => setOpen(!open)}
          className="text-foreground md:hidden"
          aria-label={open ? "Fermer le menu" : "Ouvrir le menu"}
        >
          {open ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
        </button>
      </div>

      {/* Mobile menu */}
      {open && (
        <div className="animate-fade-in border-t border-border bg-background/95 backdrop-blur-md md:hidden">
          <div className="flex flex-col gap-4 px-6 py-6">
            {navLinks.map((link) => (
              <a
                key={link.href}
                href={link.href}
                onClick={() => setOpen(false)}
                className="text-base tracking-wide text-foreground/80 transition-colors hover:text-foreground"
              >
                {link.label}
              </a>
            ))}
            <a
              href={WHATSAPP_LINK}
              target="_blank"
              rel="noopener noreferrer"
              className="mt-2 inline-block rounded-full bg-primary px-5 py-3 text-center text-sm font-medium text-primary-foreground"
            >
              Commander par WhatsApp
            </a>
          </div>
        </div>
      )}
    </nav>
  )
}
