import { Case001Beginning } from "@/components/cases/case-001-beginning";
import { Case002Palestine } from "@/components/cases/case-002-palestine";
import { Case003JulieDoucet } from "@/components/cases/case-003-julie-doucet";
import { Case004BoookinShop } from "@/components/cases/case-004-boookin-shop";
import { Case006DeSchoolGrid } from "@/components/cases/case-006-de-school-grid";

const caseRegistry: Record<string, () => React.ReactNode> = {
  "case-001-beginning": () => <Case001Beginning />,
  "case-002-palestine": () => <Case002Palestine />,
  "case-003-julie-doucet": () => <Case003JulieDoucet />,
  "case-004-boookin-shop": () => <Case004BoookinShop />,
  "case-006-de-school-grid": () => <Case006DeSchoolGrid />,
};

export function renderCase(slug: string) {
  const render = caseRegistry[slug];
  return render ? render() : null;
}
