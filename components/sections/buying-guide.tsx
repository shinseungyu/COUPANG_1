export function BuyingGuide() {
  return (
    <section className="py-20 md:py-28 px-6 bg-slate-50 dark:bg-slate-900 border-t border-slate-200 dark:border-slate-800">
      <div className="mx-auto max-w-3xl">

        <div className="text-center mb-14">
          <p className="text-blue-600 dark:text-blue-400 text-sm font-semibold tracking-widest uppercase mb-3">
            Buying Guide
          </p>
          <h2 className="text-3xl md:text-4xl font-sans font-bold text-slate-900 dark:text-white text-balance">
            테슬라 모델Y 악세사리 구매 가이드
          </h2>
          <p className="mt-4 text-slate-600 dark:text-slate-400 text-base leading-relaxed">
            처음 모델Y를 출고한 오너라면 어떤 악세사리부터 사야 할지 막막한 경우가 많습니다.
            오너 커뮤니티 경험을 바탕으로 우선순위와 선택 기준을 정리했습니다.
          </p>
        </div>

        <article className="prose prose-slate dark:prose-invert max-w-none">

          {/* 1. 왜 필요한가 */}
          <div className="mb-12">
            <h3 className="text-xl font-bold text-slate-900 dark:text-white mb-4">
              1. 모델Y 악세사리, 왜 필요한가요?
            </h3>
            <p className="text-slate-600 dark:text-slate-400 leading-relaxed mb-4">
              테슬라 모델Y는 출고 상태에서 실내 마감이 깔끔하지만, 일상적인 사용에서 트렁크 오염, 콘솔 내 잡동사니 정리, 스마트폰 거치 등 불편함이 금방 드러납니다.
              특히 트렁크의 경우 장보기나 짐 적재 시 습기와 흙먼지에 그대로 노출되어 관리가 어렵습니다.
            </p>
            <p className="text-slate-600 dark:text-slate-400 leading-relaxed mb-4">
              이를 해결하는 악세사리들은 대부분 공구 없이 5분 이내 장착이 가능하고, 차량 보증에도 영향을 주지 않습니다.
              초기 투자 비용은 5~15만원 수준이지만, 차량 내부를 장기적으로 깨끗하게 유지하고 주행 편의성을 크게 높여줍니다.
            </p>
          </div>

          {/* 2. 우선순위 */}
          <div className="mb-12">
            <h3 className="text-xl font-bold text-slate-900 dark:text-white mb-4">
              2. 출고 직후 가장 먼저 사야 할 악세사리 순위
            </h3>
            <p className="text-slate-600 dark:text-slate-400 leading-relaxed mb-6">
              모든 악세사리를 한 번에 구매할 필요는 없습니다. 실사용 빈도와 효과 대비 가성비를 기준으로 우선순위를 정리했습니다.
            </p>
            <div className="flex flex-col gap-4">
              {[
                {
                  rank: "1순위",
                  title: "TPE 트렁크 매트",
                  reason: "트렁크는 출고 직후부터 오염에 노출됩니다. 한 번 찌든 오염은 세척이 거의 불가능하므로 출고 당일 장착을 권장합니다. TPE 소재는 방수·방진이 완벽하고 물청소로 1분 안에 세척됩니다.",
                  color: "bg-blue-50 dark:bg-blue-900/20 border-blue-200 dark:border-blue-800",
                },
                {
                  rank: "2순위",
                  title: "맥세이프 스마트폰 거치대",
                  reason: "모델Y의 센터 디스플레이는 네비 화면을 항상 보여주지만 카카오맵·네이버 지도 앱을 선호하는 경우 스마트폰 거치가 필수입니다. 디스플레이를 가리지 않는 전용 마운트를 선택해야 주행 안전성이 유지됩니다.",
                  color: "bg-slate-50 dark:bg-slate-800/50 border-slate-200 dark:border-slate-700",
                },
                {
                  rank: "3순위",
                  title: "콘솔 수납 트레이",
                  reason: "모델Y 센터 콘솔은 수납 공간이 넓지만 구조 특성상 물건이 뒤섞이기 쉽습니다. 전용 트레이는 동전, 이어폰, 카드 등을 구역별로 정리해 운전 중 뒤지는 불편함을 없애줍니다.",
                  color: "bg-slate-50 dark:bg-slate-800/50 border-slate-200 dark:border-slate-700",
                },
              ].map((item) => (
                <div key={item.rank} className={`rounded-2xl border p-6 ${item.color}`}>
                  <div className="flex items-center gap-3 mb-2">
                    <span className="text-xs font-bold text-blue-600 dark:text-blue-400 bg-blue-100 dark:bg-blue-900/50 px-3 py-1 rounded-full">
                      {item.rank}
                    </span>
                    <h4 className="font-bold text-slate-900 dark:text-white text-base">{item.title}</h4>
                  </div>
                  <p className="text-sm text-slate-600 dark:text-slate-400 leading-relaxed">{item.reason}</p>
                </div>
              ))}
            </div>
          </div>

          {/* 3. 소재 비교 */}
          <div className="mb-12">
            <h3 className="text-xl font-bold text-slate-900 dark:text-white mb-4">
              3. 트렁크 매트 소재 비교 — TPE vs 고무 vs 천 소재
            </h3>
            <p className="text-slate-600 dark:text-slate-400 leading-relaxed mb-6">
              트렁크 매트를 고를 때 소재 선택이 가장 중요합니다. 각 소재의 특성을 비교해 드립니다.
            </p>
            <div className="overflow-x-auto">
              <table className="w-full text-sm border-collapse">
                <thead>
                  <tr className="bg-blue-50 dark:bg-blue-900/30">
                    {["구분", "TPE (열가소성 탄성체)", "고무 (러버)", "천 소재"].map((h) => (
                      <th key={h} className="text-left p-3 font-bold text-slate-900 dark:text-white border border-slate-200 dark:border-slate-700 whitespace-nowrap">
                        {h}
                      </th>
                    ))}
                  </tr>
                </thead>
                <tbody>
                  {[
                    ["냄새", "거의 없음 ✅", "강한 고무 냄새 ❌", "없음 ✅"],
                    ["방수", "완벽 방수 ✅", "완벽 방수 ✅", "흡수됨 ❌"],
                    ["세척", "물청소 가능 ✅", "물청소 가능 ✅", "세탁기 필요 ❌"],
                    ["무게", "가벼움 ✅", "무거움 ❌", "매우 가벼움 ✅"],
                    ["내구성", "우수 ✅", "우수 ✅", "오염 쉬움 ❌"],
                    ["가격", "중간", "저렴", "저렴"],
                  ].map((row, i) => (
                    <tr key={i} className={i % 2 === 0 ? "bg-white dark:bg-slate-950" : "bg-slate-50 dark:bg-slate-900"}>
                      {row.map((cell, j) => (
                        <td key={j} className="p-3 border border-slate-200 dark:border-slate-700 text-slate-600 dark:text-slate-400 font-medium">
                          {cell}
                        </td>
                      ))}
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
            <p className="mt-4 text-sm text-slate-500 dark:text-slate-500 leading-relaxed">
              실사용 기준으로 TPE 소재가 냄새·방수·세척 편의성을 모두 충족해 가장 추천됩니다.
              고무 매트는 가격이 저렴하지만 차 내부에서 강한 냄새가 수개월간 지속될 수 있습니다.
            </p>
          </div>

          {/* 4. 알리 vs 쿠팡 */}
          <div className="mb-12">
            <h3 className="text-xl font-bold text-slate-900 dark:text-white mb-4">
              4. 알리익스프레스 직구 vs 쿠팡 로켓배송 — 어떤 게 나을까요?
            </h3>
            <p className="text-slate-600 dark:text-slate-400 leading-relaxed mb-4">
              테슬라 모델Y 악세사리는 알리익스프레스에서도 동일하게 생긴 제품들을 더 저렴하게 구매할 수 있습니다.
              하지만 실제 사용 경험에서 몇 가지 중요한 차이가 있습니다.
            </p>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <div className="rounded-2xl border border-slate-200 dark:border-slate-700 bg-white dark:bg-slate-950 p-6">
                <h4 className="font-bold text-slate-900 dark:text-white mb-3">알리 직구 장점 / 단점</h4>
                <ul className="text-sm text-slate-600 dark:text-slate-400 space-y-2">
                  <li className="flex gap-2"><span className="text-green-500 font-bold">✓</span> 가격이 30~50% 저렴</li>
                  <li className="flex gap-2"><span className="text-red-500 font-bold">✗</span> 배송 2~4주 소요</li>
                  <li className="flex gap-2"><span className="text-red-500 font-bold">✗</span> 불량 시 교환·환불 매우 어려움</li>
                  <li className="flex gap-2"><span className="text-red-500 font-bold">✗</span> KC 안전인증 미확인 제품 다수</li>
                  <li className="flex gap-2"><span className="text-red-500 font-bold">✗</span> 실제 수령 품질이 사진과 다를 수 있음</li>
                </ul>
              </div>
              <div className="rounded-2xl border border-blue-200 dark:border-blue-800 bg-blue-50 dark:bg-blue-900/20 p-6">
                <h4 className="font-bold text-slate-900 dark:text-white mb-3">쿠팡 로켓배송 장점 / 단점</h4>
                <ul className="text-sm text-slate-600 dark:text-slate-400 space-y-2">
                  <li className="flex gap-2"><span className="text-green-500 font-bold">✓</span> 익일~2일 내 수령</li>
                  <li className="flex gap-2"><span className="text-green-500 font-bold">✓</span> 불량 즉시 교환·환불 가능</li>
                  <li className="flex gap-2"><span className="text-green-500 font-bold">✓</span> 전자제품 KC인증 완료</li>
                  <li className="flex gap-2"><span className="text-green-500 font-bold">✓</span> 리뷰·평점 신뢰도 높음</li>
                  <li className="flex gap-2"><span className="text-red-500 font-bold">✗</span> 알리 대비 가격 높음</li>
                </ul>
              </div>
            </div>
            <p className="mt-4 text-sm text-slate-500 dark:text-slate-500 leading-relaxed">
              전자기기(맥세이프 충전거치대 등)는 KC인증 여부가 안전에 직결되므로 쿠팡 인증 제품 구매를 강력 권장합니다.
              트렁크 매트·수납 트레이 등 비전자 제품은 알리를 활용하는 것도 합리적인 선택입니다.
            </p>
          </div>

          {/* 5. 계절별 */}
          <div className="mb-4">
            <h3 className="text-xl font-bold text-slate-900 dark:text-white mb-4">
              5. 계절별 추천 악세사리
            </h3>
            <p className="text-slate-600 dark:text-slate-400 leading-relaxed mb-6">
              모델Y는 유리 루프 면적이 넓어 여름 실내 온도 상승과 겨울 결빙 문제가 다른 차량보다 두드러집니다.
              계절에 맞는 악세사리로 불편함을 미리 예방하세요.
            </p>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              {[
                {
                  season: "☀️ 여름",
                  items: [
                    "선쉐이드 (유리 루프 차광막) — 주차 시 실내 온도 15~20°C 낮춤",
                    "도어 킥가드 — 승하차 시 도어 하단 스크래치 방지",
                    "통풍 시트 커버 — 가죽 시트 여름 복사열 차단",
                  ],
                },
                {
                  season: "❄️ 겨울",
                  items: [
                    "앞유리 성에 방지 커버 — 아침 스크래치 작업 불필요",
                    "도어 씰 틈막이 — 찬 바람 유입 차단, 단열 효과",
                    "트렁크 방수 매트 — 눈·진흙 유입 완벽 차단",
                  ],
                },
              ].map((s) => (
                <div key={s.season} className="rounded-2xl border border-slate-200 dark:border-slate-700 bg-white dark:bg-slate-950 p-6">
                  <h4 className="font-bold text-slate-900 dark:text-white mb-4 text-base">{s.season}</h4>
                  <ul className="flex flex-col gap-3">
                    {s.items.map((item) => (
                      <li key={item} className="flex gap-2 text-sm text-slate-600 dark:text-slate-400 leading-relaxed">
                        <span className="text-blue-500 font-bold shrink-0 mt-0.5">•</span>
                        {item}
                      </li>
                    ))}
                  </ul>
                </div>
              ))}
            </div>
          </div>

        </article>
      </div>
    </section>
  );
}
