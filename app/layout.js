import '../styles/globals.css'

import { Space_Grotesk } from '@next/font/google'

import { Navigation } from "./components/Navigation"

const font = Space_Grotesk({
  weight: ['400','700'],
  subsets: ['latin'],
  variable: '--font-grotesk' //Para utilizar en css, con este nombre , usar font.variable en vez de font.className
})

export default function RootLayout({ children }) {
  return (
    <html>
      <head>
        <title>Ejemplo Next.js 13</title>
      </head>
      <body className={font.className}>
        <Navigation />
        {children}
      </body>
    </html>
  )
}
