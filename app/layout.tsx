import { Analytics } from '@vercel/analytics/next'
import type { Metadata } from 'next'
import { Inter, JetBrains_Mono } from 'next/font/google'
import './globals.css'

const inter = Inter({ variable: '--font-inter', subsets: ['latin'] })
const jetbrainsMono = JetBrains_Mono({
  variable: '--font-jetbrains-mono',
  subsets: ['latin'],
})

export const metadata: Metadata = {
  title: 'Abdulaziz Siddiqui — Full Stack Web Developer',
  description:
    'Portfolio of Abdulaziz Siddiqui, a Full Stack Web Developer specializing in the MERN stack and Next.js. Building fast, responsive, and accessible web experiences.',
  generator: 'v0.app',
  keywords: [
    'Abdulaziz Siddiqui',
    'Full Stack Developer',
    'MERN Stack',
    'Next.js',
    'React',
    'Node.js',
    'Web Developer Portfolio',
  ],
  openGraph: {
    title: 'Abdulaziz Siddiqui — Full Stack Web Developer',
    description:
      'Portfolio of Abdulaziz Siddiqui, a Full Stack Web Developer specializing in the MERN stack and Next.js.',
    type: 'website',
  },
}

export const viewport = {
  themeColor: '#10211f',
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html
      lang="en"
      className={`${inter.variable} ${jetbrainsMono.variable} bg-background`}
    >
      <body className="font-sans antialiased">
        {children}
        {process.env.NODE_ENV === 'production' && <Analytics />}
      </body>
    </html>
  )
}
