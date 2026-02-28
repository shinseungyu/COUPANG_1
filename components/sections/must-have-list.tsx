import { ExternalLink, Star, Truck } from "lucide-react";

const recommendedProducts = [
  {
    id: "prod_1",
    name: "[테슬라 모델Y 전용] 3D TPE 방수 트렁크 매트 풀세트",
    brand: "메이튼",
    rating: 4.8,
    reviews: 2154,
    price: "79,000",
    image: "/images/trunk-mat.jpg",
    coupangLink: "https://link.coupang.com/a/example",
    badge: "1위 BEST",
    summary: "흙먼지 완벽 방어, 물청소 1분 컷. 차박 필수템",
  },
  {
    id: "prod_2",
    name: "모델3/Y 공용 맥세이프 차량용 고속 무선 충전 거치대",
    brand: "주파집",
    rating: 4.9,
    reviews: 892,
    price: "34,500",
    image: "/images/magsafe.jpg",
    coupangLink: "https://link.coupang.com/a/example",
    badge: "오너 강력추천",
    summary: "모니터 뒤에 쏙 숨는 깔끔한 순정핏 디자인",
  },
  {
    id: "prod_3",
    name: "테슬라 모델Y 전면 앞유리 햇빛가리개 (알루미늄 프레임)",
    brand: "루젠",
    rating: 4.6,
    reviews: 1543,
    price: "28,900",
    image: "/images/sunshade.jpg",
    coupangLink: "https://link.coupang.com/a/example",
    badge: "여름 필수품",
    summary: "유리 천장과 앞유리 열기 완벽 차단으로 에어컨 효율 증가",
  }
];

export function MustHaveList() {
  return (
    <section id="coupang-product-list" className="py-20 md:py-28 px-6 bg-slate-100 dark:bg-slate-900 border-t border-slate-200 dark:border-slate-800">
      <div className="mx-auto max-w-5xl">
        <div className="text-center mb-16">
          <p className="text-blue-600 dark:text-blue-400 text-sm font-semibold tracking-widest uppercase mb-3">
            Top Rated Products
          </p>
          <h2 className="text-3xl md:text-4xl font-sans font-bold text-slate-900 dark:text-white text-balance mb-6">
            실구매자 평점 4.5 이상 검증된 리스트
          </h2>
          <p className="text-slate-600 dark:text-slate-400 max-w-2xl mx-auto">
            디자인, 마감 품질, 실용성까지 모두 통과한 로켓배송 베스트 제품입니다.
            할인율은 수시로 변동되니 클릭해서 최저가를 확인하세요.
          </p>
        </div>

        <div className="flex flex-col gap-8">
          {recommendedProducts.map((product) => (
            <article 
              key={product.id}
              className="flex flex-col md:flex-row bg-white dark:bg-slate-950 rounded-3xl border border-slate-200 dark:border-slate-800 overflow-hidden shadow-sm hover:shadow-lg transition-shadow"
            >
              {/* Image Placeholder Container (Hidden until user provides image) */}
              <div className="relative w-full md:w-32 bg-slate-100 dark:bg-slate-900 shrink-0 hidden md:block">
                <div className="absolute top-4 left-4 bg-blue-600 text-white text-xs font-bold px-3 py-1.5 rounded-full shadow-md z-10 whitespace-nowrap">
                  {product.badge}
                </div>
              </div>

              {/* Product Info */}
              <div className="p-6 md:p-8 flex flex-col justify-between flex-grow">
                <div>
                  <div className="flex items-center gap-2 mb-2 text-sm text-slate-500 dark:text-slate-400">
                    <span className="font-semibold text-slate-700 dark:text-slate-300">{product.brand}</span>
                    <span>•</span>
                    <div className="flex items-center text-amber-500">
                      <Star className="w-4 h-4 fill-current" />
                      <span className="ml-1 font-bold text-slate-700 dark:text-slate-300">{product.rating}</span>
                      <span className="text-slate-400 ml-1 font-normal">({product.reviews})</span>
                    </div>
                  </div>
                  
                  <h3 className="text-xl md:text-2xl font-bold text-slate-900 dark:text-white mb-3 leading-tight line-clamp-2">
                    {product.name}
                  </h3>
                  
                  <p className="text-slate-600 dark:text-slate-400 text-sm md:text-base mb-6 font-medium">
                    {product.summary}
                  </p>
                </div>

                <div className="flex flex-col sm:flex-row items-center justify-between gap-4 pt-6 border-t border-slate-100 dark:border-slate-800">
                  <div className="flex flex-col items-center sm:items-start w-full sm:w-auto">
                    <span className="text-xs text-slate-500 dark:text-slate-400 mb-1 flex items-center gap-1">
                      <Truck className="w-3 h-3 text-blue-500" /> 로켓배송 기준가
                    </span>
                    <div className="flex items-baseline gap-1">
                      <span className="text-2xl font-extrabold text-slate-900 dark:text-white">{product.price}</span>
                      <span className="text-slate-600 dark:text-slate-400 text-sm">원~</span>
                    </div>
                  </div>
                  
                  <a
                    href={product.coupangLink}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="w-full sm:w-auto inline-flex items-center justify-center gap-2 bg-blue-600 hover:bg-blue-700 active:bg-blue-800 text-white font-bold py-4 px-8 rounded-2xl transition-all hover:scale-[1.02] shadow-md hover:shadow-blue-600/25"
                  >
                    쿠팡 최저가 확인하기
                    <ExternalLink className="w-5 h-5" />
                  </a>
                </div>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
