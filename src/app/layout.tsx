import type { Metadata } from 'next'
import { Inter } from 'next/font/google'
import './globals.css'
import { METADATA } from '@/constant/metadata'

const inter = Inter({ subsets: ['latin'] })

export const metadata: Metadata = {
  title: METADATA.home?.title,
  description: METADATA.home?.description,
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body className={inter.className}>{children}</body>
    </html>
  )
}
