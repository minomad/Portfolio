import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: '강경민의 포트폴리오',
  description: '포트폴리오사이트',
  keywords:['포트폴리오']
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="ko">
      <body>{children}</body>
    </html>
  )
}
