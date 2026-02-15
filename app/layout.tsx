import type { Metadata, Viewport } from 'next'
import { DM_Sans, Playfair_Display } from 'next/font/google'

import './globals.css'

const dmSans = DM_Sans({
  subsets: ['latin'],
  variable: '--font-dm-sans',
})

const playfair = Playfair_Display({
  subsets: ['latin'],
  variable: '--font-playfair',
})

export const metadata: Metadata = {
  title: 'La Cheesequerie | Cheesecakes artisanaux a Tanger',
  description:
    'Cheesecakes artisanaux prepares avec des ingredients premium et beaucoup d\'amour. Commandez le votre par WhatsApp et savourez a Tanger.',
}

export const viewport: Viewport = {
  themeColor: '#e8ddd2',
  width: 'device-width',
  initialScale: 1,
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="fr" className={`${dmSans.variable} ${playfair.variable}`}>
      <body className="font-sans antialiased">{children}</body>
    </html>
  )
}
