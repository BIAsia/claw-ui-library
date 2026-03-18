import fs from "node:fs";
import path from "node:path";

export type CaseStatus = "queued" | "in-progress" | "done";
export type CaseGroupId = "archive" | "batch-2026-03-18-b";

export type CaseMeta = {
  slug: string;
  title: string;
  image: string;
  status: CaseStatus;
  group?: CaseGroupId;
};

export type CaseGroup = {
  id: CaseGroupId;
  label: string;
  description: string;
  cases: CaseMeta[];
};

const casesDir = path.join(process.cwd(), "src/content/cases");

function getCaseNumber(slug: string) {
  const match = slug.match(/^case-(\d+)/);
  return match ? Number(match[1]) : 0;
}

function inferGroup(caseNumber: number): CaseGroupId {
  return caseNumber >= 25 ? "batch-2026-03-18-b" : "archive";
}

export function getAllCases(): CaseMeta[] {
  if (!fs.existsSync(casesDir)) return [];

  return fs
    .readdirSync(casesDir)
    .filter((file) => file.endsWith(".json"))
    .map((file) => {
      const fullPath = path.join(casesDir, file);
      const item = JSON.parse(fs.readFileSync(fullPath, "utf8")) as CaseMeta;
      const caseNumber = getCaseNumber(item.slug);
      return {
        ...item,
        group: item.group ?? inferGroup(caseNumber),
      };
    })
    .sort((a, b) => a.slug.localeCompare(b.slug));
}

export function getCaseBySlug(slug: string): CaseMeta | undefined {
  return getAllCases().find((item) => item.slug === slug);
}

export function getCaseGroups(): CaseGroup[] {
  const groups: Record<CaseGroupId, Omit<CaseGroup, "cases"> & { cases: CaseMeta[] }> = {
    "batch-2026-03-18-b": {
      id: "batch-2026-03-18-b",
      label: "New batch / 2026-03-18",
      description: "The freshly forwarded Pinterest set, isolated from the previous production wave for faster review.",
      cases: [],
    },
    archive: {
      id: "archive",
      label: "Previous batch / archive",
      description: "Earlier Pinterest reconstruction cases already in the library.",
      cases: [],
    },
  };

  for (const item of getAllCases()) {
    groups[item.group ?? "archive"].cases.push(item);
  }

  return [groups["batch-2026-03-18-b"], groups.archive].filter((group) => group.cases.length > 0);
}
