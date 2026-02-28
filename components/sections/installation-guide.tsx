import { CheckCircle2, AlertTriangle, PlayCircle } from "lucide-react";

const installSteps = [
  {
    step: 1,
    title: "기존 매트 탈거 및 청소",
    desc: "차량 출고 시 깔려 있는 순정 부직포 직물 매트를 제거한 뒤, 진공 청소기로 먼지를 가볍게 제거해 줍니다.",
  },
  {
    step: 2,
    title: "트렁크 하단부터 자리 잡기",
    desc: "TPE 매트를 굴곡에 맞게 밀어 넣습니다. 3D 스캐닝 제품이므로 모서리부터 맞추면 쏙 들어갑니다.",
  },
  {
    step: 3,
    title: "1~2일 펼쳐놓기 (핵심 꿀팁)",
    desc: "배송 중 말려 있던 매트는 장착 후 하루 이틀 지나면 실내 온도에 의해 완벽하게 펴지며 밀착됩니다.",
  },
];

export function InstallationGuide() {
  return (
    <section id="easy-setup-steps" className="py-20 md:py-28 px-6 bg-slate-50 dark:bg-slate-900 border-t border-slate-200 dark:border-slate-800">
      <div className="mx-auto max-w-5xl">
        <div className="flex flex-col md:flex-row items-center justify-center gap-8 mb-16">
          <div className="text-center md:text-left">
            <p className="text-blue-600 dark:text-blue-400 text-sm font-semibold tracking-widest uppercase mb-3">
              Installation
            </p>
            <h2 className="text-3xl md:text-4xl font-sans font-bold text-slate-900 dark:text-white text-balance">
              똥손도 5분 완성, 셀프 장착 가이드
            </h2>
          </div>
          <div className="hidden md:block shrink-0">
            <div dangerouslySetInnerHTML={{ __html: '<iframe src="https://coupa.ng/clK1et" width="120" height="240" frameborder="0" scrolling="no" referrerpolicy="unsafe-url" browsingtopics></iframe>' }} />
          </div>
        </div>

        <div className="flex flex-col gap-10 lg:gap-16">
          <div className="rounded-3xl border border-slate-200 dark:border-slate-800 bg-white dark:bg-slate-950 p-8 lg:p-10 shadow-sm w-full">
            <h3 className="text-xl font-bold text-slate-900 dark:text-white mb-8 font-sans flex items-center gap-3">
              <CheckCircle2 className="text-blue-600" />
              트렁크 매트 장착 3단계
            </h3>
            <div className="flex flex-col gap-6">
              {installSteps.map((item, idx) => (
                <div key={idx} className="flex gap-4">
                  <div className="flex flex-col items-center">
                    <span className="flex h-8 w-8 shrink-0 items-center justify-center rounded-full bg-blue-100 dark:bg-blue-900/50 text-blue-600 dark:text-blue-400 font-bold text-sm">
                      {item.step}
                    </span>
                    {idx < installSteps.length - 1 && (
                      <div className="w-px h-full bg-slate-200 dark:bg-slate-800 my-2" />
                    )}
                  </div>
                  <div className="pt-1 pb-6">
                    <h4 className="font-bold text-slate-900 dark:text-white mb-2">{item.title}</h4>
                    <p className="text-sm text-slate-600 dark:text-slate-400 leading-relaxed">
                      {item.desc}
                    </p>
                  </div>
                </div>
              ))}
            </div>
            
            <div className="mt-2 flex items-start gap-3 rounded-2xl bg-amber-50 dark:bg-amber-900/10 p-5 border border-amber-200 dark:border-amber-900/30">
              <AlertTriangle className="h-5 w-5 text-amber-600 dark:text-amber-500 mt-0.5 shrink-0" />
              <p className="text-sm text-amber-800 dark:text-amber-400/90 leading-relaxed font-medium">
                주의항목: 제품 박스를 칼로 개봉할 때 너무 깊게 넣으면 매트가 손상될 수 있으니 주의하세요.
              </p>
            </div>
          </div>

          {/* Guide Info */}
          <div className="rounded-3xl border border-slate-200 dark:border-slate-800 bg-white dark:bg-slate-950 p-8 shadow-sm">
            <h3 className="text-lg font-bold text-slate-900 dark:text-white mb-4 font-sans">
              오프라인 샵에 갈 필요가 없는 이유
            </h3>
            <div className="flex flex-col gap-4 text-slate-600 dark:text-slate-400 text-sm leading-relaxed font-light">
              <p>
                소개해 드리는 모든 제품은 볼트를 풀거나 배선을 만지는 등 차량 구조를 변경하는 작업이 전혀 없습니다.
              </p>
              <p>
                양면 테이프, 벨크로(찍찍이), 혹은 단순히 얹어놓기만 하면 끝나는 직관적인 제품들로만 구성하여 누구나 쉽게 테슬라 라이프를 시작할 수 있습니다.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
