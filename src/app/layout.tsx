import type { Metadata } from 'next'
import ThemeRegistry from '@/theme/registry'
import './globals.css'

export const metadata: Metadata = {
  title: 'ComponentGarden - Shakiran\'s Design Sandbox',
  description: 'A living interface system where components grow, evolve, and share state.',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body>
        <ThemeRegistry>
          {children}
        </ThemeRegistry>
      </body>
    </html>
  )
}
