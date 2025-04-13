import './globals.css'
import type { Metadata } from 'next'
import { Geist, Geist_Mono } from "next/font/google";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: 'Cleric - 아이 건강 데이터 기반 AI 육아 비서',
  description: '아이 건강 데이터를 기반으로 맞춤형 육아 솔루션을 제공하는 AI 비서 서비스',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="ko">
      <body className={`${geistSans.variable} ${geistMono.variable} antialiased min-h-screen w-full overflow-x-hidden`}>
        <main className="min-h-screen w-full">{children}</main>
      </body>
    </html>
  )
}
