import type { Metadata } from 'next'
import { Inter } from 'next/font/google'
import './globals.css'
import Navigation from '@/components/Navigation'

const inter = Inter({ subsets: ['latin'] })

export const metadata: Metadata = {
  title: '게임 디자이너 포트폴리오',
  description: '4년차 게임 디자이너의 포트폴리오 사이트',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="ko">
      <body className={inter.className}>
        <div className="background-overlay"></div>
        <Navigation />
        <main className="main-content">
          {children}
        </main>
        <footer className="footer">
          <p>&copy; 2025 Game Designer Portfolio. All rights reserved.</p>
        </footer>
      </body>
    </html>
  )
}

