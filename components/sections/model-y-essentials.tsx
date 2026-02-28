import { ShieldCheck, Crosshair, Wrench, ThumbsUp, HelpCircle } from "lucide-react";

const essentialPoints = [
  {
    icon: Crosshair,
    title: "완벽한 단차 없는 일체감",
    description:
      "테슬라 모델 Y 전용으로 제작된 3D 스캐닝 핏트 제품들로, 순정 부품과 구분이 가지 않을 정도로 완벽한 일체감을 자랑합니다.",
  },
  {
    icon: ShieldCheck,
    title: "내구성 & 보호 성능 인증",
    description:
      "일상 생활 스크래치, 오염 방지에 특화된 고강도 소재. 세차장이나 거친 캠핑 환경에서도 시트와 내장재를 안전하게 보호해 줍니다.",
  },
  {
    icon: Wrench,
    title: "누구나 쉬운 셀프 장착 가이드",
    description:
      "샵에 맡길 필요 없이 똥손도 5분 컷 장착 가능! 클립형, 벨크로형 구조로 차량 손상 없는 간편하고 확실한 설치 제품만 골랐습니다.",
  },
  {
    icon: ThumbsUp,
    title: "10,000+ 오너의 리얼 후기 압축",
    description:
      "쿠팡에서 실제 모델 Y 오너들이 직접 돈 주고 사서 장착한 뒤 극찬한 내돈내산 평점 4.5 이상 검증된 꿀템들만 엄선했어요.",
  },
  {
    icon: HelpCircle,
    title: "이거 꼭 사야 돼? 구매 전 체크리스트",
    description:
      "트렁크 매트가 왜 필요한지, 방향제는 어떤 타입이 좋은지 오너의 시선에서 친절하게 해답과 권장 용도를 제공합니다.",
  },
];

export function ModelYEssentials() {
  return (
    <section id="gear-highlights-wrapper" className="py-24 md:py-32 px-6 bg-slate-50 dark:bg-slate-900">
      <div className="mx-auto max-w-6xl">
        <div className="text-center mb-20">
          <p className="text-blue-600 dark:text-blue-400 text-sm font-semibold tracking-widest uppercase mb-4">
            Must-Have Items
          </p>
          <h2 className="text-3xl md:text-5xl font-sans font-extrabold text-slate-900 dark:text-white text-balance leading-tight">
            출고 직후 <span className="text-blue-600">이 5가지</span>는<br />
            무조건 준비해야 합니다
          </h2>
        </div>

        <div className="grid gap-6 md:gap-8 lg:grid-cols-2">
          {essentialPoints.map((point, idx) => (
            <article
              key={idx}
              className={`group flex flex-col sm:flex-row gap-5 md:gap-6 rounded-3xl bg-white dark:bg-slate-800 p-8 border border-slate-200 dark:border-slate-700 transition-all hover:shadow-xl hover:border-blue-400/50 ${idx === essentialPoints.length - 1 ? "lg:col-span-2 lg:mx-auto lg:max-w-2xl" : ""}`}
            >
              <div className="flex h-14 w-14 shrink-0 items-center justify-center rounded-2xl bg-blue-50 dark:bg-slate-700 text-blue-600 dark:text-blue-400 transition-colors group-hover:bg-blue-600 group-hover:text-white">
                <point.icon className="h-7 w-7" />
              </div>
              <div>
                <h3 className="text-xl md:text-2xl font-bold text-slate-900 dark:text-white mb-3">
                  <span className="text-blue-600 dark:text-blue-400 mr-2 font-serif opacity-80">
                    {String(idx + 1).padStart(2, "0")}
                  </span>
                  {point.title}
                </h3>
                <p className="text-slate-600 dark:text-slate-300 leading-relaxed text-sm md:text-base">
                  {point.description}
                </p>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
