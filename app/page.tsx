import { TeslaHeroBanner } from "@/components/sections/tesla-hero-banner";
import { ModelYEssentials } from "@/components/sections/model-y-essentials";
import { PremiumGearShowcase } from "@/components/sections/premium-gear-showcase";
import { InstallationGuide } from "@/components/sections/installation-guide";
import { MustHaveList } from "@/components/sections/must-have-list";
import { QnaCommunity } from "@/components/sections/qna-community";
import { BuyingGuide } from "@/components/sections/buying-guide";
import { TeslaFooter } from "@/components/sections/tesla-footer";

export default function Page() {
  return (
    <main>
      <TeslaHeroBanner />
      <ModelYEssentials />

      {/* 유용한 관련 사이트 */}
      <section className="py-12 px-4 bg-gray-50 border-y border-gray-200">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-xl font-bold text-gray-900 mb-6">유용한 관련 사이트</h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            <a href="https://importtaxcalc.com" target="_blank" rel="noopener noreferrer" className="flex gap-4 items-start p-5 rounded-xl border border-gray-200 bg-white hover:border-blue-400 hover:bg-blue-50 transition-colors no-underline">
              <span className="text-3xl">🛃</span>
              <div>
                <p className="font-bold text-gray-900 text-sm mb-1">해외직구 관세 계산기</p>
                <p className="text-xs text-gray-500 leading-relaxed">미국·일본·중국 등 7개국 실시간 환율 기반 관부가세 자동 계산</p>
              </div>
            </a>
            <a href="https://www.nailstartup.com/" target="_blank" rel="noopener noreferrer" className="flex gap-4 items-start p-5 rounded-xl border border-gray-200 bg-white hover:border-blue-400 hover:bg-blue-50 transition-colors no-underline">
              <span className="text-3xl">💅</span>
              <div>
                <p className="font-bold text-gray-900 text-sm mb-1">네일 창업 정보</p>
                <p className="text-xs text-gray-500 leading-relaxed">네일샵 창업부터 운영까지 실전 정보 제공</p>
              </div>
            </a>
          </div>
        </div>
      </section>

      <PremiumGearShowcase />
      <InstallationGuide />
      <MustHaveList />
      <QnaCommunity />
      <BuyingGuide />
      <TeslaFooter />
    </main>
  );
}
