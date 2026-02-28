import { Car, ShieldCheck, Zap } from "lucide-react";

export function TeslaHeroBanner() {
  return (
    <div id="tesla-hero-wrapper" className="relative overflow-hidden w-full">
      {/* Hero Background */}
      <div className="relative h-[65vh] min-h-[500px] lg:h-[75vh] bg-slate-900">
        <div className="absolute inset-0 bg-gradient-to-t from-gray-950 via-gray-900 to-slate-800" />

        {/* Hero Content */}
        <div className="absolute inset-0 flex flex-col items-center justify-end pb-20 px-6 text-center z-10">
          <p className="text-gray-300 text-sm tracking-widest uppercase mb-4 font-semibold">
            Tesla Model Y Essential Gears
          </p>
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-sans font-bold text-white leading-tight text-balance max-w-4xl mb-6">
            테슬라 모델 Y 오너라면,
            <br />
            이 용품은 선택이 아닌 <span className="text-blue-400">필수</span>입니다
          </h1>
          <p className="text-gray-200 text-base md:text-lg max-w-2xl leading-relaxed mb-10">
            차박 캠핑부터 일상 주행까지, 모델 Y의 공간 활용과 승차감을 200% 끌어올려줄
            <br className="hidden md:block" />
            최정예 필수 액세서리만 엄선하여 쿠팡 최저가로 정리했습니다.
          </p>

          {/* Feature Badges */}
          <div className="flex flex-wrap items-center justify-center gap-4">
            <span className="inline-flex items-center gap-2 rounded-full bg-blue-600/90 px-4 py-2 text-sm font-medium text-white shadow-lg backdrop-blur-sm">
              <Car className="h-4 w-4" />
              핏팅률 100% 매트
            </span>
            <span className="inline-flex items-center gap-2 rounded-full bg-blue-600/90 px-4 py-2 text-sm font-medium text-white shadow-lg backdrop-blur-sm">
              <ShieldCheck className="h-4 w-4" />
              내구성 검증 완료
            </span>
            <span className="inline-flex items-center gap-2 rounded-full bg-blue-600/90 px-4 py-2 text-sm font-medium text-white shadow-lg backdrop-blur-sm">
              <Zap className="h-4 w-4" />
              로켓배송 지원
            </span>
          </div>

          <p className="mt-8 text-gray-400 text-xs md:text-sm font-light">
            {'*지금 가장 인기있는 모델 Y 전용 용품의 쿠팡 할인가를 확인하세요.'}
          </p>
        </div>
      </div>
    </div>
  );
}
