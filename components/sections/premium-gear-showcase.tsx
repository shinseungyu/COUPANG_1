import { Link2, ShieldCheck, Box, Settings, Sparkles } from "lucide-react";

// Mock Data for the Affiliate Products (We'll enhance this later with Schema)
const gearCategories = [
  {
    icon: Box,
    label: "3D TPE 트렁크 매트",
    desc: "차박/캠핑 필수! 일체감 높은 방수 매트",
    image: "/images/trunk-mat.jpg",
  },
  {
    icon: Sparkles,
    label: "전면 유리 선쉐이드",
    desc: "여름철 실내 온도 급상승 및 자외선 완벽 차단",
    image: "/images/sunshade.jpg",
  },
  {
    icon: Settings,
    label: "기어봉 커버 & 보호필름",
    desc: "스크래치 예방, 매트한 촉감으로 그립감 상승",
    image: null,
  },
  {
    icon: Link2,
    label: "차량용 맥세이프 거치대",
    desc: "디스플레이 옆면에 딱 맞는 깔끔한 무선 충전",
    image: "/images/magsafe.jpg",
  },
  {
    icon: ShieldCheck,
    label: "도어 킥 가드",
    desc: "승하차 시 신발 자국과 스크래치 완벽 방지",
    image: null,
  },
];

const buyerGuideNotes = [
  "순정(Tesla) 몰에서 품절이거나 비싼 액세서리의 완벽한 대체품",
  "중국산 저가형 중에서도 마감 처리가 검증된 로켓배송 제품만 선별",
  "설치가 복잡하지 않고 여성 오너도 혼자서 5분 안에 뚝딱 가능",
];

export function PremiumGearShowcase() {
  return (
    <section id="gear-quality-review-container" className="py-24 md:py-32 px-6 bg-white dark:bg-slate-950">
      <div className="mx-auto max-w-6xl">
        <div className="text-center mb-20">
          <p className="text-blue-600 dark:text-blue-400 text-sm font-semibold tracking-widest uppercase mb-4">
            Curated For Model Y
          </p>
          <h2 className="text-3xl md:text-5xl font-sans font-extrabold text-slate-900 dark:text-white text-balance">
            오너 핏팅 리뷰 & 선택 가이드
          </h2>
        </div>

        {/* Detailed Review Blocks */}
        <div className="grid md:grid-cols-2 gap-10 mb-20">
          <article className="rounded-3xl border border-slate-200 dark:border-slate-800 bg-slate-50 dark:bg-slate-900 p-10 shadow-sm">
            <h3 className="text-2xl font-bold text-slate-900 dark:text-white mb-5 font-sans">
              순정 대비 가성비 비교
            </h3>
            <p className="text-slate-600 dark:text-slate-300 leading-relaxed text-lg font-light">
              테슬라 공홈에서 판매하는 액세서리도 훌륭하지만, 높은 가격과 잦은 품절이 단점입니다.
              여기서 소개하는 서드파티 제휴 상품들은 1/3 가격으로도 매우 우수한 퀄리티와 일체감을 
              제공해 주는 쿠팡 베스트셀러들입니다.
            </p>
          </article>
          <article className="rounded-3xl border border-slate-200 dark:border-slate-800 bg-slate-50 dark:bg-slate-900 p-10 shadow-sm">
            <h3 className="text-2xl font-bold text-slate-900 dark:text-white mb-5 font-sans">
              로켓배송 & 간편 교환
            </h3>
            <p className="text-slate-600 dark:text-slate-300 leading-relaxed text-lg font-light">
              알리 익스프레스 직구로 길게는 한 달씩 기다릴 필요가 없습니다. 
              검증된 국내 유통 제품들을 내일 바로 받아 장착하고, 만약 초기 불량이나 변심이
              나오더라도 쿠팡의 빠르고 묻지마 반품/교환 시스템을 이용할 수 있어 안전합니다.
            </p>
          </article>
        </div>

        {/* Buyer Guide */}
        <div className="mb-20 rounded-3xl border border-blue-200 dark:border-blue-900/50 bg-blue-50/50 dark:bg-blue-900/20 p-10 md:p-14">
          <h3 className="text-2xl font-bold text-slate-900 dark:text-white mb-8 font-sans text-center">
            이 목록을 구성한 절대 기준 3가지
          </h3>
          <ul className="flex flex-col gap-6 max-w-2xl mx-auto">
            {buyerGuideNotes.map((note, idx) => (
              <li
                key={idx}
                className="flex items-start gap-4 text-slate-800 dark:text-slate-200"
              >
                <span className="mt-1 flex h-8 w-8 shrink-0 items-center justify-center rounded-full bg-blue-600 text-white text-sm font-bold shadow-md">
                  {idx + 1}
                </span>
                <span className="leading-relaxed text-lg">{note}</span>
              </li>
            ))}
          </ul>
        </div>

        {/* Top 5 Highlight Categories */}
        <h3 className="text-2xl font-bold text-slate-900 dark:text-white mb-10 font-sans text-center">
          단연코 1위, 필수 구매 아이템 Top 5
        </h3>
        <div className="grid grid-cols-2 md:grid-cols-5 gap-6">
          {gearCategories.map((gear, idx) => (
            <div
              key={idx}
              className="group relative flex flex-col items-center gap-4 rounded-3xl border border-slate-200 dark:border-slate-800 bg-white dark:bg-slate-900 p-6 text-center transition-all hover:-translate-y-2 hover:shadow-xl hover:border-blue-400/30 overflow-hidden"
            >
              {/* Image spot hidden until provided */}
              <div className="relative z-10 flex h-14 w-14 items-center justify-center rounded-2xl bg-slate-100 dark:bg-slate-800 text-slate-600 dark:text-slate-300 group-hover:bg-blue-600 group-hover:text-white transition-colors duration-300">
                <gear.icon className="h-6 w-6" />
              </div>
              <p className="relative z-10 text-base font-bold text-slate-900 dark:text-white group-hover:text-white">
                {gear.label}
              </p>
              <p className="relative z-10 text-xs text-slate-500 dark:text-slate-400 leading-relaxed group-hover:text-blue-100">
                {gear.desc}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
