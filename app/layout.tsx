import type { ReactNode } from "react"
import type { Metadata } from 'next'
import { Noto_Sans_KR } from 'next/font/google'

import './globals.css'

const notoSansKR = Noto_Sans_KR({ subsets: ['latin'], weight: ['300', '400', '500', '600', '700'] })

export const metadata: Metadata = {
  metadataBase: new URL('http://bisangprod.com'), // Replace with actual domain
  title: '테슬라 모델 Y 필수 차량용품 및 차박 액세서리 추천 BEST',
  description: '테슬라 모델 Y 오너를 위한 필수 액세서리, 차박 매트, 보호 필름 추천 총정리. 쿠팡 로켓배송 최저가로 바로 확인하세요.',
  keywords: '테슬라 모델 Y 용품, 모델 Y 차박, 테슬라 필수 액세서리, 테슬라 방향제, 모델 Y 매트, 쿠팡 테슬라 용품',
  openGraph: {
    title: '테슬라 모델 Y 필수 차량용품 큐레이션',
    description: '테슬라 모델 Y 오너를 위한 필수 액세서리, 차박 매트, 보호 필름 추천 총정리. 쿠팡 로켓배송 최저가로 바로 확인하세요.',
    url: '/',
    siteName: 'Model Y Gear Rankings',
    locale: 'ko_KR',
    type: 'website',
  },
  robots: {
    index: true,
    follow: true,
  },
}

// Generate JSON-LD Schema
const jsonLd = {
  '@context': 'https://schema.org',
  '@type': 'ItemList',
  'itemListElement': [
    {
      '@type': 'ListItem',
      'position': 1,
      'item': {
        '@type': 'Product',
        'name': '[테슬라 모델Y 전용] 3D TPE 방수 트렁크 매트 풀세트',
        'image': 'http://bisangprod.com/images/trunk-mat.jpg',
        'description': '흙먼지 완벽 방어, 물청소 1분 컷. 차박 필수템',
        'brand': {
          '@type': 'Brand',
          'name': '메이튼'
        },
        'aggregateRating': {
          '@type': 'AggregateRating',
          'ratingValue': '4.8',
          'reviewCount': '2154'
        },
        'offers': {
          '@type': 'Offer',
          'priceCurrency': 'KRW',
          'price': '79000',
          'availability': 'https://schema.org/InStock'
        }
      }
    },
    {
      '@type': 'ListItem',
      'position': 2,
      'item': {
        '@type': 'Product',
        'name': '모델3/Y 공용 맥세이프 차량용 고속 무선 충전 거치대',
        'image': 'http://bisangprod.com/images/magsafe.jpg',
        'description': '모니터 뒤에 쏙 숨는 깔끔한 순정핏 디자인',
        'brand': {
          '@type': 'Brand',
          'name': '주파집'
        },
        'aggregateRating': {
          '@type': 'AggregateRating',
          'ratingValue': '4.9',
          'reviewCount': '892'
        },
        'offers': {
          '@type': 'Offer',
          'priceCurrency': 'KRW',
          'price': '34500',
          'availability': 'https://schema.org/InStock'
        }
      }
    }
  ]
}

export default function RootLayout({
  children,
}: Readonly<{
  children: ReactNode
}>) {
  return (
    <html lang="ko">
      <head>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
        />
      </head>
      <body className={`${notoSansKR.className} antialiased selection:bg-blue-200 selection:text-blue-900`}>{children}</body>
    </html>
  )
}
