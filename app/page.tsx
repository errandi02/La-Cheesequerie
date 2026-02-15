import { Navbar } from "@/components/navbar"
import { Hero } from "@/components/hero"
import { About } from "@/components/about"
import { Collection } from "@/components/collection"
import { HowToOrder } from "@/components/how-to-order"
import { Testimonials } from "@/components/testimonials"
import { InstagramGallery } from "@/components/instagram-gallery"
import { Footer } from "@/components/footer"
import { WhatsAppButton } from "@/components/whatsapp-button"

export default function Page() {
  return (
    <main>
      <Navbar />
      <Hero />
      <About />
      <Collection />
      <HowToOrder />
      <Testimonials />
      <InstagramGallery />
      <Footer />
      <WhatsAppButton />
    </main>
  )
}
