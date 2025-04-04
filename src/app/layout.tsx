import type { Metadata } from 'next'

import './globals.css'

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
      <body >
        <main className="min-h-screen">
          {children}
        </main>
      </body>
    </html>
  )
}
