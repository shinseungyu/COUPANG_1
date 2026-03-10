import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: '쿠키 정책 | Tesla Model Y Gear Rankings',
  description: 'bisangprod.com의 쿠키 정책입니다.',
  alternates: { canonical: '/cookie-policy' },
  robots: { index: false, follow: false },
}

export default function CookiePolicy() {
  return (
    <main style={{ maxWidth: '800px', margin: '0 auto', padding: '40px 20px', fontFamily: 'sans-serif', color: '#333', lineHeight: '1.8' }}>
      <h1 style={{ fontSize: '2rem', fontWeight: 'bold', marginBottom: '8px' }}>쿠키 정책</h1>
      <p style={{ color: '#888', marginBottom: '32px' }}>최종 업데이트: 2026년 3월 11일</p>

      <p style={{ marginBottom: '24px' }}>본 서비스는 원활한 사용자 경험을 제공하기 위해 쿠키(Cookie)를 사용합니다. 쿠키는 웹사이트가 사용자의 브라우저에 저장하는 작은 텍스트 파일입니다.</p>

      <section style={{ marginBottom: '32px' }}>
        <h2 style={{ fontSize: '1.3rem', fontWeight: 'bold', marginBottom: '12px', borderBottom: '2px solid #eee', paddingBottom: '8px' }}>1. 쿠키 사용 목적</h2>
        <ul style={{ paddingLeft: '20px', marginTop: '8px' }}>
          <li>사이트 방문 통계 분석 및 트래픽 분석</li>
          <li>사용자 인터페이스 개선 및 오류 해결</li>
          <li>맞춤형 광고 제공</li>
        </ul>
      </section>

      <section style={{ marginBottom: '32px' }}>
        <h2 style={{ fontSize: '1.3rem', fontWeight: 'bold', marginBottom: '12px', borderBottom: '2px solid #eee', paddingBottom: '8px' }}>2. 쿠키의 종류</h2>
        <ul style={{ paddingLeft: '20px', marginTop: '8px' }}>
          <li><strong>필수 쿠키</strong> — 서비스의 핵심 기능에 반드시 필요한 쿠키입니다.</li>
          <li><strong>분석 쿠키</strong> — Google Analytics 등 방문 통계 수집 도구에서 사용됩니다. 수집된 데이터는 익명 처리됩니다.</li>
          <li><strong>광고 쿠키</strong> — Google AdSense를 통한 맞춤형 광고 제공에 사용됩니다. 이 쿠키를 거부해도 광고는 표시되지만 개인화되지 않은 광고가 표시됩니다.</li>
        </ul>
      </section>

      <section style={{ marginBottom: '32px' }}>
        <h2 style={{ fontSize: '1.3rem', fontWeight: 'bold', marginBottom: '12px', borderBottom: '2px solid #eee', paddingBottom: '8px' }}>3. 쿠키 설정 및 거부 방법</h2>
        <p>사용자는 브라우저 설정을 통해 쿠키 저장을 거부하거나 저장된 쿠키를 언제든지 삭제할 수 있습니다.</p>
        <ul style={{ paddingLeft: '20px', marginTop: '8px' }}>
          <li><strong>Chrome</strong> — 설정 → 개인정보 보호 및 보안 → 쿠키 및 기타 사이트 데이터</li>
          <li><strong>Safari</strong> — 설정 → Safari → 개인정보 보호 → 모든 쿠키 차단</li>
          <li><strong>Firefox</strong> — 설정 → 개인 정보 보호 → 쿠키 및 사이트 데이터</li>
          <li><strong>Edge</strong> — 설정 → 쿠키 및 사이트 권한 → 쿠키 및 사이트 데이터 관리</li>
        </ul>
      </section>

      <section style={{ marginBottom: '32px' }}>
        <h2 style={{ fontSize: '1.3rem', fontWeight: 'bold', marginBottom: '12px', borderBottom: '2px solid #eee', paddingBottom: '8px' }}>4. 제3자 쿠키</h2>
        <p>
          본 서비스는 Google AdSense, Google Analytics 등 제3자 서비스와 연동될 수 있으며, 해당 제3자가 별도의 쿠키를 설정할 수 있습니다.
          이러한 쿠키는 각 제3자의 개인정보 처리방침에 따라 관리됩니다.
          Google 광고 쿠키에 대한 자세한 내용은 <a href="https://policies.google.com/privacy" target="_blank" rel="noopener noreferrer" style={{ color: '#2563eb' }}>Google 개인정보 보호 정책</a>을 참조하십시오.
        </p>
      </section>

      <section style={{ marginBottom: '32px' }}>
        <h2 style={{ fontSize: '1.3rem', fontWeight: 'bold', marginBottom: '12px', borderBottom: '2px solid #eee', paddingBottom: '8px' }}>5. 정책 변경 안내</h2>
        <p>본 쿠키 정책은 서비스 변경 또는 관련 법령 개정에 따라 업데이트될 수 있습니다. 중요한 변경이 있을 경우 서비스 내 공지를 통해 안내해 드립니다.</p>
      </section>

      <section style={{ marginBottom: '32px' }}>
        <h2 style={{ fontSize: '1.3rem', fontWeight: 'bold', marginBottom: '12px', borderBottom: '2px solid #eee', paddingBottom: '8px' }}>6. 문의</h2>
        <p>쿠키 정책과 관련한 문의사항은 아래로 연락주세요.</p>
        <p style={{ marginTop: '8px' }}>
          이메일: <a href="mailto:tlsfkaus0711@gmail.com" style={{ color: '#2563eb' }}>tlsfkaus0711@gmail.com</a>
        </p>
      </section>

      <div style={{ marginTop: '48px', borderTop: '1px solid #eee', paddingTop: '20px', textAlign: 'center' }}>
        <a href="/" style={{ color: '#2563eb', marginRight: '16px' }}>홈으로</a>
        <a href="/privacy-policy" style={{ color: '#2563eb', marginRight: '16px' }}>개인정보 처리방침</a>
        <a href="/terms-of-service" style={{ color: '#2563eb' }}>이용약관</a>
      </div>
    </main>
  )
}
