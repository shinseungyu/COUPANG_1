import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: '이용약관 | Tesla Model Y Gear Rankings',
  description: 'bisangprod.com 이용약관입니다.',
  alternates: { canonical: '/terms-of-service' },
  robots: { index: false, follow: false },
}

export default function TermsOfService() {
  return (
    <main style={{ maxWidth: '800px', margin: '0 auto', padding: '40px 20px', fontFamily: 'sans-serif', color: '#333', lineHeight: '1.8' }}>
      <h1 style={{ fontSize: '2rem', fontWeight: 'bold', marginBottom: '8px' }}>이용약관</h1>
      <p style={{ color: '#888', marginBottom: '32px' }}>최종 업데이트: 2026년 3월 11일</p>

      <section style={{ marginBottom: '32px' }}>
        <h2 style={{ fontSize: '1.3rem', fontWeight: 'bold', marginBottom: '12px', borderBottom: '2px solid #eee', paddingBottom: '8px' }}>1. 목적</h2>
        <p>본 약관은 bisangprod.com(이하 &quot;서비스&quot;)이 제공하는 모든 서비스의 이용 조건 및 절차에 관한 사항을 규정함을 목적으로 합니다.</p>
      </section>

      <section style={{ marginBottom: '32px' }}>
        <h2 style={{ fontSize: '1.3rem', fontWeight: 'bold', marginBottom: '12px', borderBottom: '2px solid #eee', paddingBottom: '8px' }}>2. 서비스의 성격 및 한계</h2>
        <p>
          본 서비스는 테슬라 모델 Y 관련 용품을 큐레이션하여 소개하는 정보 제공 사이트입니다.
          본 사이트는 상품의 판매 당사자가 아니며, 상품의 주문·교환·환불 등에 관한 의무와 책임은 각 판매자(쿠팡)에게 있습니다.
          제품 가격 및 재고는 실시간으로 변동될 수 있으며, 정확한 정보는 각 판매 페이지에서 확인하시기 바랍니다.
        </p>
      </section>

      <section style={{ marginBottom: '32px' }}>
        <h2 style={{ fontSize: '1.3rem', fontWeight: 'bold', marginBottom: '12px', borderBottom: '2px solid #eee', paddingBottom: '8px' }}>3. 쿠팡 파트너스 제휴 고지</h2>
        <p>
          본 사이트는 <strong>쿠팡 파트너스</strong> 활동의 일환으로 운영되며, 사이트 내 링크를 통한 구매 시 일정액의 수수료를 제공받습니다.
          이는 이용자에게 추가 비용을 부과하지 않으며, 쿠팡의 판매 가격과 동일하게 유지됩니다.
        </p>
      </section>

      <section style={{ marginBottom: '32px' }}>
        <h2 style={{ fontSize: '1.3rem', fontWeight: 'bold', marginBottom: '12px', borderBottom: '2px solid #eee', paddingBottom: '8px' }}>4. 책임의 제한</h2>
        <p>
          본 사이트에서 소개하는 상품의 품질, 성능, 적합성에 대한 최종 판단은 구매자 본인에게 있습니다.
          장착 시 차량 손상에 대한 책임은 구매자 본인에게 있으므로, 설치 매뉴얼을 반드시 숙지하시기 바랍니다.
          서비스 제공자는 상품 구매 또는 사용으로 인해 발생하는 손해에 대해 책임을 지지 않습니다.
        </p>
      </section>

      <section style={{ marginBottom: '32px' }}>
        <h2 style={{ fontSize: '1.3rem', fontWeight: 'bold', marginBottom: '12px', borderBottom: '2px solid #eee', paddingBottom: '8px' }}>5. 지적재산권</h2>
        <p>서비스에서 제공하는 콘텐츠, 디자인, 텍스트에 대한 지적재산권은 본 서비스에 귀속됩니다. 사전 동의 없는 무단 복제 및 전재를 금합니다.</p>
      </section>

      <section style={{ marginBottom: '32px' }}>
        <h2 style={{ fontSize: '1.3rem', fontWeight: 'bold', marginBottom: '12px', borderBottom: '2px solid #eee', paddingBottom: '8px' }}>6. 광고 및 외부 링크</h2>
        <p>
          본 서비스는 Google AdSense를 통한 광고를 포함할 수 있습니다.
          광고 콘텐츠는 Google의 정책에 따라 게재되며, 서비스 제공자가 광고 내용을 직접 통제하지 않습니다.
          외부 링크(쿠팡 등)는 정보 제공 목적으로만 제공되며, 해당 사이트의 콘텐츠에 대한 책임은 서비스 제공자에게 없습니다.
        </p>
      </section>

      <section style={{ marginBottom: '32px' }}>
        <h2 style={{ fontSize: '1.3rem', fontWeight: 'bold', marginBottom: '12px', borderBottom: '2px solid #eee', paddingBottom: '8px' }}>7. 서비스 변경 및 중단</h2>
        <p>서비스는 운영 정책 변경, 기술적 사유 등으로 서비스의 일부 또는 전부를 수정·중단할 수 있습니다. 사전 고지가 가능한 경우 서비스 내 공지를 통해 안내합니다.</p>
      </section>

      <section style={{ marginBottom: '32px' }}>
        <h2 style={{ fontSize: '1.3rem', fontWeight: 'bold', marginBottom: '12px', borderBottom: '2px solid #eee', paddingBottom: '8px' }}>8. 약관의 효력 및 변경</h2>
        <p>본 약관은 bisangprod.com 내 공지와 함께 효력이 발생합니다. 약관이 변경되는 경우 서비스 내 공지사항을 통해 게시하며, 변경 후 서비스를 계속 이용하는 경우 변경된 약관에 동의한 것으로 간주합니다.</p>
      </section>

      <section style={{ marginBottom: '32px' }}>
        <h2 style={{ fontSize: '1.3rem', fontWeight: 'bold', marginBottom: '12px', borderBottom: '2px solid #eee', paddingBottom: '8px' }}>9. 준거법 및 관할법원</h2>
        <p>본 약관 및 서비스 이용과 관련하여 발생하는 분쟁에 대해서는 대한민국 법률이 적용되며, 관련 소송은 서비스 제공자의 주소지를 관할하는 법원을 전속 관할 법원으로 합니다.</p>
      </section>

      <section style={{ marginBottom: '32px' }}>
        <h2 style={{ fontSize: '1.3rem', fontWeight: 'bold', marginBottom: '12px', borderBottom: '2px solid #eee', paddingBottom: '8px' }}>10. 문의</h2>
        <p>이용약관과 관련한 문의사항은 아래로 연락주세요.</p>
        <p style={{ marginTop: '8px' }}>
          이메일: <a href="mailto:tlsfkaus0711@gmail.com" style={{ color: '#2563eb' }}>tlsfkaus0711@gmail.com</a>
        </p>
      </section>

      <div style={{ marginTop: '48px', borderTop: '1px solid #eee', paddingTop: '20px', textAlign: 'center' }}>
        <a href="/" style={{ color: '#2563eb', marginRight: '16px' }}>홈으로</a>
        <a href="/privacy-policy" style={{ color: '#2563eb', marginRight: '16px' }}>개인정보 처리방침</a>
        <a href="/cookie-policy" style={{ color: '#2563eb' }}>쿠키 정책</a>
      </div>
    </main>
  )
}
