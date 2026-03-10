import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: '개인정보 처리방침 | Tesla Model Y Gear Rankings',
  description: 'bisangprod.com의 개인정보 처리방침입니다.',
  alternates: { canonical: '/privacy-policy' },
  robots: { index: false, follow: false },
}

export default function PrivacyPolicy() {
  return (
    <main style={{ maxWidth: '800px', margin: '0 auto', padding: '40px 20px', fontFamily: 'sans-serif', color: '#333', lineHeight: '1.8' }}>
      <h1 style={{ fontSize: '2rem', fontWeight: 'bold', marginBottom: '8px' }}>개인정보 처리방침</h1>
      <p style={{ color: '#888', marginBottom: '32px' }}>최종 업데이트: 2026년 3월 11일</p>

      <p style={{ marginBottom: '24px' }}>
        bisangprod.com(이하 &quot;서비스&quot;)는 사용자의 개인정보를 소중하게 생각하며,
        「개인정보 보호법」 제30조에 따라 아래와 같이 개인정보 처리방침을 수립·공개합니다.
      </p>

      <section style={{ marginBottom: '32px' }}>
        <h2 style={{ fontSize: '1.3rem', fontWeight: 'bold', marginBottom: '12px', borderBottom: '2px solid #eee', paddingBottom: '8px' }}>1. 수집하는 개인정보 항목</h2>
        <p>서비스 이용 과정에서 다음과 같은 정보가 수집될 수 있습니다.</p>
        <ul style={{ paddingLeft: '20px', marginTop: '8px' }}>
          <li><strong>자동 수집 정보</strong> — 접속 로그, 쿠키, IP 주소, 브라우저 유형, 방문 페이지, 체류 시간 (서비스 분석 및 최적화 목적)</li>
          <li><strong>광고 관련 정보</strong> — Google AdSense를 통해 광고 쿠키 및 기기 식별자가 수집될 수 있습니다.</li>
        </ul>
        <p style={{ marginTop: '12px' }}>본 사이트는 회원가입, 로그인 등 절차가 없으므로 이름, 이메일, 주민등록번호 등 직접적인 개인정보를 수집하지 않습니다.</p>
      </section>

      <section style={{ marginBottom: '32px' }}>
        <h2 style={{ fontSize: '1.3rem', fontWeight: 'bold', marginBottom: '12px', borderBottom: '2px solid #eee', paddingBottom: '8px' }}>2. 개인정보의 수집 및 이용 목적</h2>
        <p>수집된 정보는 다음의 목적으로만 이용됩니다.</p>
        <ul style={{ paddingLeft: '20px', marginTop: '8px' }}>
          <li>서비스 운영 및 품질 개선</li>
          <li>방문자 통계 분석 (Google Analytics)</li>
          <li>맞춤형 또는 일반 광고 제공 (Google AdSense)</li>
        </ul>
      </section>

      <section style={{ marginBottom: '32px' }}>
        <h2 style={{ fontSize: '1.3rem', fontWeight: 'bold', marginBottom: '12px', borderBottom: '2px solid #eee', paddingBottom: '8px' }}>3. 개인정보의 보유 및 이용 기간</h2>
        <p>
          본 사이트는 직접적으로 개인정보를 저장하거나 보관하지 않습니다.
          자동 수집 로그는 목적 달성 후 즉시 파기하거나 익명 처리합니다.
          Google Analytics 및 Google AdSense를 통해 수집된 데이터는 각 서비스의 방침에 따라 관리됩니다.
        </p>
      </section>

      <section style={{ marginBottom: '32px' }}>
        <h2 style={{ fontSize: '1.3rem', fontWeight: 'bold', marginBottom: '12px', borderBottom: '2px solid #eee', paddingBottom: '8px' }}>4. 개인정보의 제3자 제공</h2>
        <p>서비스는 아래 경우에 한하여 사용자의 정보를 제3자에게 제공합니다.</p>
        <ul style={{ paddingLeft: '20px', marginTop: '8px' }}>
          <li><strong>Google LLC (Google AdSense/Analytics)</strong> — 광고 서비스 및 방문 분석 목적. Google의 광고 개인정보 처리 방식은 <a href="https://policies.google.com/privacy" target="_blank" rel="noopener noreferrer" style={{ color: '#2563eb' }}>Google 개인정보처리방침</a>에서 확인하실 수 있습니다.</li>
          <li>법령의 규정에 의거하거나 수사 목적으로 법령에 정해진 절차와 방법에 따라 수사기관의 요구가 있는 경우</li>
        </ul>
        <p style={{ marginTop: '12px' }}>위 경우 외에는 정보주체의 동의 없이 개인정보를 제3자에게 제공하지 않습니다.</p>
      </section>

      <section style={{ marginBottom: '32px' }}>
        <h2 style={{ fontSize: '1.3rem', fontWeight: 'bold', marginBottom: '12px', borderBottom: '2px solid #eee', paddingBottom: '8px' }}>5. 개인정보 처리의 위탁</h2>
        <table style={{ width: '100%', borderCollapse: 'collapse', marginTop: '8px', fontSize: '0.9rem' }}>
          <thead>
            <tr style={{ background: '#f5f5f5' }}>
              <th style={{ border: '1px solid #ddd', padding: '8px 12px', textAlign: 'left' }}>수탁 업체</th>
              <th style={{ border: '1px solid #ddd', padding: '8px 12px', textAlign: 'left' }}>위탁 업무</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td style={{ border: '1px solid #ddd', padding: '8px 12px' }}>Google LLC</td>
              <td style={{ border: '1px solid #ddd', padding: '8px 12px' }}>광고 서비스 (Google AdSense), 방문 분석 (Google Analytics)</td>
            </tr>
            <tr>
              <td style={{ border: '1px solid #ddd', padding: '8px 12px' }}>Vercel Inc.</td>
              <td style={{ border: '1px solid #ddd', padding: '8px 12px' }}>서버 호스팅 및 트래픽 분석</td>
            </tr>
          </tbody>
        </table>
      </section>

      <section style={{ marginBottom: '32px' }}>
        <h2 style={{ fontSize: '1.3rem', fontWeight: 'bold', marginBottom: '12px', borderBottom: '2px solid #eee', paddingBottom: '8px' }}>6. Google AdSense 및 제3자 광고</h2>
        <p>
          본 사이트는 <strong>Google AdSense</strong>를 통해 광고를 게재합니다.
          Google은 쿠키를 사용하여 이용자의 이전 방문 기록을 기반으로 관련 광고를 표시합니다.
        </p>
        <ul style={{ paddingLeft: '20px', marginTop: '8px' }}>
          <li>이용자는 <a href="https://www.google.com/settings/ads" target="_blank" rel="noopener noreferrer" style={{ color: '#2563eb' }}>Google 광고 설정</a>에서 개인화 광고를 비활성화할 수 있습니다.</li>
          <li>또는 <a href="https://www.aboutads.info" target="_blank" rel="noopener noreferrer" style={{ color: '#2563eb' }}>aboutads.info</a>에서 제3자 광고 쿠키를 거부할 수 있습니다.</li>
        </ul>
      </section>

      <section style={{ marginBottom: '32px' }}>
        <h2 style={{ fontSize: '1.3rem', fontWeight: 'bold', marginBottom: '12px', borderBottom: '2px solid #eee', paddingBottom: '8px' }}>7. 쿠키(Cookie) 사용</h2>
        <p>
          본 사이트는 서비스 향상 및 광고 제공을 위해 쿠키를 사용합니다.
          이용자는 브라우저 설정을 통해 쿠키를 거부할 수 있으나, 이 경우 일부 서비스 이용에 제한이 있을 수 있습니다.
          자세한 내용은 <a href="/cookie-policy" style={{ color: '#2563eb' }}>쿠키 정책</a>을 참고하세요.
        </p>
      </section>

      <section style={{ marginBottom: '32px' }}>
        <h2 style={{ fontSize: '1.3rem', fontWeight: 'bold', marginBottom: '12px', borderBottom: '2px solid #eee', paddingBottom: '8px' }}>8. 정보주체의 권리·의무 및 행사 방법</h2>
        <p>사용자(정보주체)는 언제든지 아래의 권리를 행사할 수 있습니다.</p>
        <ul style={{ paddingLeft: '20px', marginTop: '8px' }}>
          <li>개인정보 처리 현황 열람 요구</li>
          <li>오류 정정 또는 삭제 요구</li>
          <li>처리 정지 요구</li>
        </ul>
        <p style={{ marginTop: '12px' }}>권리 행사는 아래 이메일로 요청하실 수 있으며, 서비스는 이에 대해 지체 없이 조치하겠습니다.</p>
      </section>

      <section style={{ marginBottom: '32px' }}>
        <h2 style={{ fontSize: '1.3rem', fontWeight: 'bold', marginBottom: '12px', borderBottom: '2px solid #eee', paddingBottom: '8px' }}>9. 아동의 개인정보 보호</h2>
        <p>본 서비스는 만 14세 미만 아동을 대상으로 하지 않습니다. 만 14세 미만 아동의 개인정보는 의도적으로 수집하지 않습니다.</p>
      </section>

      <section style={{ marginBottom: '32px' }}>
        <h2 style={{ fontSize: '1.3rem', fontWeight: 'bold', marginBottom: '12px', borderBottom: '2px solid #eee', paddingBottom: '8px' }}>10. 개인정보 보호 책임자</h2>
        <p>개인정보 처리에 관한 업무를 총괄하고, 관련 고충을 처리하기 위하여 아래와 같이 개인정보 보호 책임자를 지정하고 있습니다.</p>
        <ul style={{ paddingLeft: '20px', marginTop: '8px' }}>
          <li><strong>사이트명:</strong> bisangprod.com</li>
          <li><strong>문의 이메일:</strong> <a href="mailto:tlsfkaus0711@gmail.com" style={{ color: '#2563eb' }}>tlsfkaus0711@gmail.com</a></li>
        </ul>
        <p style={{ marginTop: '12px' }}>개인정보 침해 관련 신고 및 상담은 아래 기관에 문의하실 수 있습니다.</p>
        <ul style={{ paddingLeft: '20px', marginTop: '8px' }}>
          <li>개인정보 침해신고센터 (privacy.kisa.or.kr / ☎ 118)</li>
          <li>개인정보 분쟁조정위원회 (www.kopico.go.kr / ☎ 1833-6972)</li>
        </ul>
      </section>

      <section style={{ marginBottom: '32px' }}>
        <h2 style={{ fontSize: '1.3rem', fontWeight: 'bold', marginBottom: '12px', borderBottom: '2px solid #eee', paddingBottom: '8px' }}>11. 처리방침 변경</h2>
        <p>본 방침은 2026년 3월 11일부터 적용됩니다. 내용 변경 시 변경 7일 전부터 서비스 내 공지를 통해 안내드립니다.</p>
      </section>

      <div style={{ marginTop: '48px', borderTop: '1px solid #eee', paddingTop: '20px', textAlign: 'center' }}>
        <a href="/" style={{ color: '#2563eb', marginRight: '16px' }}>홈으로</a>
        <a href="/terms-of-service" style={{ color: '#2563eb', marginRight: '16px' }}>이용약관</a>
        <a href="/cookie-policy" style={{ color: '#2563eb' }}>쿠키 정책</a>
      </div>
    </main>
  )
}
