"use client";

import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";

const qnaCategories = [
  {
    category: "트렁크 매트 & 실내 오염 관련",
    items: [
      {
        q: "TPE 트렁크 매트는 냄새가 나지 않나요?",
        a: "소개해 드린 TPE 소재는 고무 냄새가 전혀 없는 친환경 수지 마감재입니다. 개봉 직후 아주 미세한 새 제품 향이 날 수 있으나, 반나절 환기 시 완전히 사라집니다.",
      },
      {
        q: "순정 매트 위에 덮어서 깔아도 되나요?",
        a: "완벽한 핏을 원하신다면 순정 부직포 매트를 걷어내고 까는 것을 추천합니다. 하지만 순정 위에 바로 얹어 사용하시는 오너분들도 많으며 사용상 큰 무리는 없습니다.",
      },
    ],
  },
  {
    category: "거치대 & 알리 직구 비교",
    items: [
      {
        q: "맥세이프 거치대 설치하면 디스플레이가 가려지지 않나요?",
        a: "모델 Y 전용으로 디자인된 제품들은 디스플레이 베젤 뒷면에 장착되어 화면을 단 1mm도 가리지 않고 휴대폰만 깔끔하게 노출됩니다.",
      },
      {
        q: "알리 익스프레스 직구랑 차이가 뭔가요?",
        a: "외형은 비슷해 보일 수 있으나 쿠팡 로켓배송 제품은 초기 불량(제품 뒤틀림, 벨크로 접착 불량 등) 시 100% 즉시 교환/환불이 가능하며, 국내 KC인증(전자기기)을 거친 안전한 제품들입니다.",
      },
    ],
  },
  {
    category: "여름/겨울 필수템 관련",
    items: [
      {
        q: "선쉐이드(직사광선 차단막)는 주행 중에도 쳐놔도 되나요?",
        a: "야간 주행이나 터널 진입 시 시야 확보를 위해 탈거 또는 반으로 접어두는 것을 권장합니다. 기본적으로 주차 중 내부 온도 유지 및 차박 시 햇빛 차단 목적이 큽니다.",
      },
      {
        q: "도어 킥가드를 붙이면 나중에 끈적이가 남지 않나요?",
        a: "벨크로 방식 킥가드는 끈적이가 전혀 남지 않으며, 스티커 부착 방식도 고급 차량용 3M 테이프를 사용하여 열을 가하며 떼어내면 잔여물 없이 깔끔하게 제거됩니다.",
      },
    ],
  },
];

export function QnaCommunity() {
  return (
    <section id="tesla-owner-qna-wrapper" className="py-20 md:py-28 px-6 bg-white dark:bg-slate-950">
      <div className="mx-auto max-w-3xl">
        <div className="flex flex-col md:flex-row items-center justify-center gap-8 mb-16">
          <div className="text-center md:text-left">
            <p className="text-blue-600 dark:text-blue-400 text-sm font-semibold tracking-widest uppercase mb-3">
              Owner Community Q&A
            </p>
            <h2 className="text-3xl md:text-4xl font-sans font-bold text-slate-900 dark:text-white text-balance">
              초보 오너들이 가장 많이 묻는 질문
            </h2>
          </div>
          <div className="hidden md:block shrink-0">
            <div dangerouslySetInnerHTML={{ __html: '<iframe src="https://coupa.ng/clK1ex" width="120" height="240" frameborder="0" scrolling="no" referrerpolicy="unsafe-url" browsingtopics></iframe>' }} />
          </div>
        </div>

        <div className="flex flex-col gap-12">
          {qnaCategories.map((cat, catIdx) => (
            <div key={catIdx}>
              <h3 className="text-base font-bold text-slate-900 dark:text-white mb-6 flex items-center gap-3">
                <span className="h-px bg-slate-200 dark:bg-slate-800 flex-grow" />
                <span className="bg-slate-100 dark:bg-slate-900 px-4 py-1.5 rounded-full text-sm text-blue-600 dark:text-blue-400">
                  {cat.category}
                </span>
                <span className="h-px bg-slate-200 dark:bg-slate-800 flex-grow" />
              </h3>
              <Accordion type="single" collapsible className="w-full">
                {cat.items.map((item, idx) => (
                  <AccordionItem
                    key={idx}
                    value={`${catIdx}-${idx}`}
                    className="border-slate-200 dark:border-slate-800"
                  >
                    <AccordionTrigger className="text-left text-slate-900 dark:text-slate-100 font-bold hover:text-blue-600 dark:hover:text-blue-400 py-6 text-base md:text-lg">
                      <span className="mr-4 text-blue-600 dark:text-blue-500 font-serif">Q.</span>
                      {item.q}
                    </AccordionTrigger>
                    <AccordionContent className="text-slate-600 dark:text-slate-400 leading-relaxed pb-6 text-base bg-slate-50 dark:bg-slate-900/50 p-6 rounded-b-2xl">
                      <span className="font-bold text-slate-800 dark:text-slate-200 mr-2">A.</span>
                      {item.a}
                    </AccordionContent>
                  </AccordionItem>
                ))}
              </Accordion>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
