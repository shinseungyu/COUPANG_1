import { ShieldAlert } from "lucide-react";

export function TeslaFooter() {
  return (
    <footer id="affiliate-footer" className="bg-slate-950 text-slate-300">
      {/* Disclaimer / Affiliate Notice - Meets FTC/FTC guidelines but kept subtle */}
      <div className="bg-slate-900/50 border-t border-slate-800 px-6 py-4">
        <div className="mx-auto max-w-5xl flex items-center justify-center gap-3 text-xs text-slate-500 text-center">
          <p>
            "이 포스팅은 쿠팡 파트너스 활동의 일환으로, 이에 따른 일정액의 수수료를 제공받습니다."
          </p>
        </div>
      </div>

      <div className="px-6 py-16 md:py-20">
        <div className="mx-auto max-w-5xl grid md:grid-cols-2 gap-12">
          
          <div>
            <h4 className="text-white text-xl font-bold font-sans mb-6">
              Tesla Model Y Gears
            </h4>
            <p className="text-slate-400 text-sm leading-relaxed mb-6 max-w-md">
              테슬라 모델 Y 오너의 라이프스타일을 완성하는 파트너스 큐레이션 사이트입니다. 
              수많은 용품 중 내돈내산 평점이 가장 높고, 로켓배송이 가능한 검증된 제품만 엄선합니다.
            </p>
          </div>

          <div>
            <div className="flex items-center gap-2 mb-6">
              <ShieldAlert className="h-5 w-5 text-slate-500" />
              <h4 className="text-sm font-bold text-slate-400 uppercase tracking-wider">
                이용 안내 및 주의사항
              </h4>
            </div>
            <ul className="flex flex-col gap-3">
              <li className="text-sm text-slate-500 leading-relaxed pl-4 relative before:content-['·'] before:absolute before:left-0 before:top-0 before:text-slate-600">
                본 웹사이트는 상품의 판매 당사자가 아니며, 상품의 주문, 맞교환, 환불 등 의무와 책임은 각 판매자(쿠팡)에게 있습니다.
              </li>
              <li className="text-sm text-slate-500 leading-relaxed pl-4 relative before:content-['·'] before:absolute before:left-0 before:top-0 before:text-slate-600">
                판매 가격 및 재고 수량, 로켓배송 혜택은 쿠팡의 정책과 변동 상황에 따라 실시간으로 달라질 수 있습니다.
              </li>
              <li className="text-sm text-slate-500 leading-relaxed pl-4 relative before:content-['·'] before:absolute before:left-0 before:top-0 before:text-slate-600">
                장착 시 차량 손상에 대한 최종 책임은 구매자 본인에게 있으므로, 동봉된 설치 메뉴얼을 반드시 숙지하시기 바랍니다.
              </li>
            </ul>
          </div>

        </div>

        <div className="mx-auto max-w-5xl mt-16 pt-8 border-t border-slate-800 flex flex-col items-center justify-center text-center">
          <p className="text-xs text-slate-600">
            © {new Date().getFullYear()} Model Y Gear Rankings. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
}
