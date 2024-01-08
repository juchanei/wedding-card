import type { Metadata } from 'next'
import { Gowun_Batang, Inter } from 'next/font/google'
import './globals.css'

const gowunBatang = Gowun_Batang({ weight: ['400', '700'], subsets: ['latin'] })

export const metadata: Metadata = {
  title: '수인 - 주찬의 결혼식에 초대합니다',
  description: '24년 2월 24일 2시 더베일리하우스 삼성점',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang='en'>
      <body className={gowunBatang.className}>{children}</body>
    </html>
  )
}
