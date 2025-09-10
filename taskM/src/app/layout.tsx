import type { Metadata } from 'next'
import './globals.css';
import { Providers } from "./providers";
import { ZustandProvider } from '@/providers/ZustandProviders';

export const metadata: Metadata = {
  title: 'TaskFlow',
  description: 'Modern task management with Next.js',
}

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <Providers>
        <ZustandProvider>
      <body>{children}</body>
      </ZustandProvider>
      </Providers>
    </html>
  )
}
