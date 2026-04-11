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
      <PremiumGearShowcase />
      <InstallationGuide />
      <MustHaveList />
      <QnaCommunity />
      <BuyingGuide />
      <TeslaFooter />
    </main>
  );
}
