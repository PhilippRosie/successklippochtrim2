import type { Metadata } from 'next'
import { Inter } from 'next/font/google'
import './globals.css'

const inter = Inter({ subsets: ['latin'] })

export const metadata: Metadata = {
  title: 'Success Klipp och Trim | Frisörsalong',
  description: 'Välkommen till Success Klipp och Trim - Din lokala frisörsalong med professionell service och personlig touch.',
  keywords: 'frisör, frisörsalong, hårklippning, hårfärgning, Success Klipp och Trim',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="sv">
      <body className={inter.className}>
        <main className="min-h-screen">
          {children}
        </main>
      </body>
    </html>
  )
}
