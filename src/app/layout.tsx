import './globals.css'
import { Inter, Fraunces, IBM_Plex_Mono } from 'next/font/google'
import Navbar from '@/components/Navbar' // Import Navbar yang baru dibuat
   
const inter = Inter({ subsets: ['latin'], variable: '--font-inter' })
const fraunces = Fraunces({ subsets: ['latin'], variable: '--font-fraunces', style: ['normal', 'italic'] })
const ibmPlexMono = IBM_Plex_Mono({ subsets: ['latin'], weight: ['400', '500', '600'], variable: '--font-mono' })

export const metadata = {
  title: 'Kevin Reynald — AI & Software Engineer',
  description: 'Portfolio of Kevin Reynald',
}

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en" className={`${inter.variable} ${fraunces.variable} ${ibmPlexMono.variable} scroll-smooth`}>
      <body className="antialiased">
        <Navbar />
        {children}
      </body>
    </html>
  )
}