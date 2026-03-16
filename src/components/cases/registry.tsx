import { Case001Beginning } from "@/components/cases/case-001-beginning";
import { Case003JulieDoucet } from "@/components/cases/case-003-julie-doucet";
import { Case005SelfEsteemEditorial } from "@/components/cases/case-005-self-esteem-editorial";

const caseRegistry: Record<string, () => React.ReactNode> = {
  "case-001-beginning": () => <Case001Beginning />,
  "case-003-julie-doucet": () => <Case003JulieDoucet />,
  "case-005-self-esteem-editorial": () => <Case005SelfEsteemEditorial />,
};

export function renderCase(slug: string) {
  const render = caseRegistry[slug];
  return render ? render() : null;
}
