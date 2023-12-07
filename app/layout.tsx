import type { Metadata } from 'next';
import './globals.css'
import { Inter } from 'next/font/google'
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import Head from 'next/head';

export const metadata: Metadata = {
  title: 'Travel',
  description: 'Travel UI/UX App for Camping',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body>
        <Navbar />
        <main className="relative
        overflow-hidden"></main>
          {children}
          <Footer />
      </body>
    </html>
  )
}
