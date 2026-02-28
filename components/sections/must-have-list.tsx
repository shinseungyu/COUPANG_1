import { ExternalLink, Star, Truck } from "lucide-react";

const recommendedProducts = [
  {
    id: "prod_1",
    name: "Jenofa 풀세트 3D 방수 방진 tpe카매트 간편한 사계절 세트적용 자동차매트",
    brand: "Jenofa",
    rating: 4.8,
    reviews: 2154,
    price: "79,000",
    iframeHtml: '<iframe src="https://coupa.ng/clK0YQ" width="120" height="240" frameborder="0" scrolling="no" referrerpolicy="unsafe-url" browsingtopics></iframe>',
    coupangLink: "https://link.coupang.com/a/dUSPa2",
    badge: "1위 BEST",
    summary: "흙먼지 완벽 방어, 물청소 1분 컷. 차박 필수템",
  },
  {
    id: "prod_2",
    name: "세상의모든제품 테슬라 모델Y주니퍼 모델3하이랜드 차량용 Qi2 맥세이프 아이스 쿨링 LED 고속 무선충전기 + TEMAI 마운트 거치대",
    brand: "세상의모든제품",
    rating: 4.9,
    reviews: 892,
    price: "34,500",
    iframeHtml: '<iframe src="https://coupa.ng/clK072" width="120" height="240" frameborder="0" scrolling="no" referrerpolicy="unsafe-url" browsingtopics></iframe>',
    coupangLink: "https://link.coupang.com/a/dUS6o9",
    badge: "오너 강력추천",
    summary: "모니터 뒤에 쏙 숨는 깔끔한 순정핏 디자인",
  },
  {
    id: "prod_3",
    name: "LareinaT 테슬라 콘솔 수납함 테슬라 모델y 주니퍼 악세사리 테슬라 모델3 하이랜드 악세사리 테슬라 차량용품",
    brand: "LareinaT",
    rating: 4.6,
    reviews: 1543,
    price: "28,900",
    iframeHtml: '<iframe src="https://coupa.ng/clK1ai" width="120" height="240" frameborder="0" scrolling="no" referrerpolicy="unsafe-url" browsingtopics></iframe>',
    coupangLink: "https://link.coupang.com/a/dUTaNv",
    badge: "여름 필수품",
    summary: "콘솔 수납을 깔끔하게 정리해주는 맞춤형 트레이",
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
              {/* Image Iframe Container */}
              <div className="relative w-full md:w-48 bg-slate-50 dark:bg-slate-900 border-r border-slate-200 dark:border-slate-800 shrink-0 hidden md:flex items-center justify-center p-4">
                <div className="absolute top-4 left-4 bg-blue-600 text-white text-xs font-bold px-3 py-1.5 rounded-full shadow-md z-10 whitespace-nowrap">
                  {product.badge}
                </div>
                <div 
                  className="flex items-center justify-center pointer-events-none scale-110 origin-center" 
                  dangerouslySetInnerHTML={{ __html: product.iframeHtml }} 
                />
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
