import type { Metadata } from 'next'
import './globals.css'

import { montserrat_normal } from '@/app/ui/fonts'
import Navbar from '@/app/ui/navbar'

export const metadata: Metadata = {
  title: 'Nick Aschenbach',
  description: "Personal website with resume, contact info and little code experiments I've worked on",
}

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang='en'>
      <body className={montserrat_normal.className}>
        <Navbar />
        <div>{children}</div>
      </body>
    </html>
  )
}
