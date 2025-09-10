import type { Metadata } from 'next'
import './globals.css';

export const metadata: Metadata = {
  title: 'TaskFlow',
  description: 'Modern task management with Next.js',
}

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  )
}
