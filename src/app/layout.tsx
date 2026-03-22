import type { Metadata } from 'next'

import './globals.css'

export const metadata: Metadata = {
  title: "Hundfrisör i Ljungby – Trimning & Pälsvård | Success Klipp & Trim",
  description: "Letar du efter en hundfrisör i Ljungby? Success Klipp & Trim erbjuder trimning, klippning och pälsvård med omtanke. Boka tid för din hund idag!",
  keywords: "hundfrisör Ljungby, hundklippning Ljungby, hundtrim Ljungby, pälsvård hund Ljungby, Success Klipp & Trim, boka hundklippning"
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
