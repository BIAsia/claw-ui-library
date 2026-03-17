import { Case001Beginning } from "@/components/cases/case-001-beginning";
import { Case002Palestine } from "@/components/cases/case-002-palestine";
import { Case003JulieDoucet } from "@/components/cases/case-003-julie-doucet";
import { Case004BoookinShop } from "@/components/cases/case-004-boookin-shop";
import { Case005SelfEsteemEditorial } from "@/components/cases/case-005-self-esteem-editorial";
import { Case006DeSchoolGrid } from "@/components/cases/case-006-de-school-grid";
import { Case009DesignProjectTimeline } from "@/components/cases/case-009-design-project-timeline";
import { Case010DevAgencyHero } from "@/components/cases/case-010-dev-agency-hero";
import { Case012WorthSavingFiles } from "@/components/cases/case-012-worth-saving-files";
import { Case013SwagworksHeroCard } from "@/components/cases/case-013-swagworks-hero-card";

const caseRegistry: Record<string, () => React.ReactNode> = {
  "case-001-beginning": () => <Case001Beginning />,
  "case-002-palestine": () => <Case002Palestine />,
  "case-003-julie-doucet": () => <Case003JulieDoucet />,
  "case-004-boookin-shop": () => <Case004BoookinShop />,
  "case-005-self-esteem-editorial": () => <Case005SelfEsteemEditorial />,
  "case-006-de-school-grid": () => <Case006DeSchoolGrid />,
  "case-009-design-project-timeline": () => <Case009DesignProjectTimeline />,
  "case-010-dev-agency-hero": () => <Case010DevAgencyHero />,
  "case-012-worth-saving-files": () => <Case012WorthSavingFiles />,
  "case-013-swagworks-hero-card": () => <Case013SwagworksHeroCard />,
};

export function renderCase(slug: string) {
  const render = caseRegistry[slug];
  return render ? render() : null;
}
