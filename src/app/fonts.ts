import { Playfair_Display_SC, Amatic_SC, Martel } from 'next/font/google'



export const playfairDisplaySC = Playfair_Display_SC({ 
  subsets: ['latin'],
  weight: ['400', '700', '900'],
  variable: '--font-playfair-display-sc'
}) 

export const amaticSC = Amatic_SC({ 
  subsets: ['latin'],
  weight: ['400', '700'],
  variable: '--font-amatic-sc'
}) 

export const martel = Martel({ 
  subsets: ['latin'],
  weight: ['200', '300', '400', '600', '700', '800', '900'],
  variable: '--font-martel'
}) 
