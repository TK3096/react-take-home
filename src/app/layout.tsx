import type { Metadata } from 'next'
import { Roboto } from 'next/font/google'
import { ModalProvider } from '@/providers/ModalProvider'

import { cn } from '@/lib/utils'

import './globals.css'

const font = Roboto({ weight: ['400', '700', '900'], subsets: ['latin'] })

export const metadata: Metadata = {
  title: 'Create Next App',
  description: 'Generated by create next app',
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang='en'>
      <body className={cn(font.className, 'dark')}>
        <ModalProvider />
        {children}
      </body>
    </html>
  )
}
