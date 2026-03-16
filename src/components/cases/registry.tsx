const caseRegistry: Record<string, () => React.ReactNode> = {};

export function renderCase(slug: string) {
  const render = caseRegistry[slug];
  return render ? render() : null;
}
