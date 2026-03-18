import { Case001Beginning } from "@/components/cases/case-001-beginning";
import { Case002Palestine } from "@/components/cases/case-002-palestine";
import { Case003JulieDoucet } from "@/components/cases/case-003-julie-doucet";
import { Case004BoookinShop } from "@/components/cases/case-004-boookin-shop";
import { Case005SelfEsteemEditorial } from "@/components/cases/case-005-self-esteem-editorial";
import { Case006DeSchoolGrid } from "@/components/cases/case-006-de-school-grid";
import { Case009DesignProjectTimeline } from "@/components/cases/case-009-design-project-timeline";
import { Case010DevAgencyHero } from "@/components/cases/case-010-dev-agency-hero";
import { Case011WonSojuSections } from "@/components/cases/case-011-won-soju-sections";
import { Case012WorthSavingFiles } from "@/components/cases/case-012-worth-saving-files";
import { Case013SwagworksHeroCard } from "@/components/cases/case-013-swagworks-hero-card";
import { Case014MarketingTagCluster } from "@/components/cases/case-014-marketing-tag-cluster";
import { Case015ImpactCampaignCard } from "@/components/cases/case-015-impact-campaign-card";
import { Case016CashlessAdoptionDots } from "@/components/cases/case-016-cashless-adoption-dots";
import { Case017CircuitIdentityCards } from "@/components/cases/case-017-circuit-identity-cards";
import { Case018MuxSignalGrid } from "@/components/cases/case-018-mux-signal-grid";
import { Case019BBBankMobileDashboard } from "@/components/cases/case-019-bbbank-mobile-dashboard";
import { Case020RadinalPixelFont } from "@/components/cases/case-020-radinal-pixel-font";
import { Case021CygnitoMonoPoster } from "@/components/cases/case-021-cygnito-mono-poster";
import { Case022MercatError404 } from "@/components/cases/case-022-mercat-error-404";
import { Case023CookieCutterPoster } from "@/components/cases/case-023-cookie-cutter-poster";
import { Case024RadiiioStationTable } from "@/components/cases/case-024-radiiio-station-table";
import { Case025DadFestivalTabs } from "@/components/cases/case-025-dad-festival-tabs";
import { Case026IdeasChangeCards } from "@/components/cases/case-026-ideas-change-cards";
import { Case027GdanskLiteratureSystem } from "@/components/cases/case-027-gdansk-literature-system";
import { Case028UkrainianPowerHero } from "@/components/cases/case-028-ukrainian-power-hero";
import { Case029ZinaGalleryPoster } from "@/components/cases/case-029-zina-gallery-poster";

const caseRegistry: Record<string, () => React.ReactNode> = {
  "case-001-beginning": () => <Case001Beginning />,
  "case-002-palestine": () => <Case002Palestine />,
  "case-003-julie-doucet": () => <Case003JulieDoucet />,
  "case-004-boookin-shop": () => <Case004BoookinShop />,
  "case-005-self-esteem-editorial": () => <Case005SelfEsteemEditorial />,
  "case-006-de-school-grid": () => <Case006DeSchoolGrid />,
  "case-009-design-project-timeline": () => <Case009DesignProjectTimeline />,
  "case-010-dev-agency-hero": () => <Case010DevAgencyHero />,
  "case-011-won-soju-sections": () => <Case011WonSojuSections />,
  "case-012-worth-saving-files": () => <Case012WorthSavingFiles />,
  "case-013-swagworks-hero-card": () => <Case013SwagworksHeroCard />,
  "case-014-marketing-tag-cluster": () => <Case014MarketingTagCluster />,
  "case-015-impact-campaign-card": () => <Case015ImpactCampaignCard />,
  "case-016-cashless-adoption-dots": () => <Case016CashlessAdoptionDots />,
  "case-017-circuit-identity-cards": () => <Case017CircuitIdentityCards />,
  "case-018-mux-signal-grid": () => <Case018MuxSignalGrid />,
  "case-019-bbbank-mobile-dashboard": () => <Case019BBBankMobileDashboard />,
  "case-020-radinal-pixel-font": () => <Case020RadinalPixelFont />,
  "case-021-cygnito-mono-poster": () => <Case021CygnitoMonoPoster />,
  "case-022-mercat-error-404": () => <Case022MercatError404 />,
  "case-023-cookie-cutter-poster": () => <Case023CookieCutterPoster />,
  "case-024-radiiio-station-table": () => <Case024RadiiioStationTable />,
  "case-025-dad-festival-tabs": () => <Case025DadFestivalTabs />,
  "case-026-ideas-change-cards": () => <Case026IdeasChangeCards />,
  "case-027-gdansk-literature-system": () => <Case027GdanskLiteratureSystem />,
  "case-028-ukrainian-power-hero": () => <Case028UkrainianPowerHero />,
  "case-029-zina-gallery-poster": () => <Case029ZinaGalleryPoster />,
};

export function renderCase(slug: string) {
  const render = caseRegistry[slug];
  return render ? render() : null;
}
