import fs from "node:fs";
import path from "node:path";

export type CaseMeta = {
  slug: string;
  title: string;
  image: string;
  status: "queued" | "in-progress" | "done";
};

const casesDir = path.join(process.cwd(), "src/content/cases");

export function getAllCases(): CaseMeta[] {
  if (!fs.existsSync(casesDir)) return [];

  return fs
    .readdirSync(casesDir)
    .filter((file) => file.endsWith(".json"))
    .map((file) => {
      const fullPath = path.join(casesDir, file);
      return JSON.parse(fs.readFileSync(fullPath, "utf8")) as CaseMeta;
    })
    .sort((a, b) => a.slug.localeCompare(b.slug));
}

export function getCaseBySlug(slug: string): CaseMeta | undefined {
  return getAllCases().find((item) => item.slug === slug);
}
