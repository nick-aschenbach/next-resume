import { Montserrat } from 'next/font/google'
import localFont from 'next/font/local'


export const montserrat_normal = Montserrat({
  weight: '400',
  subsets: ['latin'],
})
export const montserrat_bold = Montserrat({
  weight: '600',
  subsets: ['latin'],
})

export const comic_commando = localFont({ src: '../../public/fonts/comic-commando.woff2' })