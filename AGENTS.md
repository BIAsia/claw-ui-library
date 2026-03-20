# AGENTS.md — claw-ui-library

This repo follows a stricter Pinterest reconstruction workflow.

## Mandatory preload rule
If the task matches any of these themes:
- Pinterest
- UI reconstruction
- claw-ui-library
- reference image task

always load and follow:
- `/root/.openclaw/workspace/memory/workflows/pinterest-ui-pipeline.md`

before planning or execution.

## Scope
Use these rules for:
- reference-image-driven UI reconstruction cases
- `/ui/case-xxx` pages
- case additions, rewrites, and redo requests

## Hard gates
A case is **not done** unless all of these pass:
1. `npm run lint`
2. `npm run build`
3. screenshot-based visual acceptance against the reference
4. basic usability checks (contrast, no hover/selected layout jump, readable structure)
5. final acceptance outcome is explicitly **Pass**

## Delivery standard
- `/ui/case-xxx` must open directly into the final UI/site experience.
- Do **not** ship poster-board shells, comparison shells, or framed showcase wrappers.
- Reconstruction must be based primarily on the provided reference image.
- Avoid style drift across cases.
- Delivery should follow two phases:
  - **Phase 1: static fidelity first**
  - **Phase 2: motion / interaction pass**
- Do not over-prioritize motion before the visual reconstruction is accurate.
- When adding interaction, keep it additive and restrained; do not redesign the work into a different product.

## Mandatory acceptance flow
After implementing a case:
1. run `npm run lint`
2. run `npm run build`
3. run the page locally and capture a screenshot
4. compare screenshot vs reference for:
   - composition
   - proportion
   - whitespace
   - type mood
   - layering / overlap
   - material / light feel (when relevant)
5. make an acceptance decision in exactly one of these forms:
   - **Pass**
   - **Needs changes**
6. if **Needs changes**:
   - list change points `1..5`
   - if the case would need more than 5 change points, treat it as **Redo**
7. send screenshots to the Owner during acceptance reporting; screenshot review is not internal-only

## Failure rules
If any of these are true, the case must be treated as failed acceptance:
- build fails
- lint fails
- screenshot shows major deviation from reference
- the implementation changes the core visual idea
- usability is fragile or broken
- more than 5 concrete fixes are needed

## Continuous execution rule
If the Owner says things like:
- "直接做"
- "不用等我回复"
- "你自己推"

then Mona should treat that as standing permission to continue execution loops:
1. implementation batch
2. screenshot acceptance
3. pass / needs changes / redo decision
4. dispatch next batch or rework
5. report progress/results

Do not stop at reporting when the work can continue without a blocker.

## Reporting rules
Do not report a case as "done" with text only.
Report with:
- pass / needs changes / redo outcome
- if needs changes: numbered points 1..5
- screenshot sent to Owner
- commit / branch / PR when available

## Workflow memory
For the full cross-session pipeline, also follow:
- `/root/.openclaw/workspace/memory/workflows/pinterest-ui-pipeline.md`
