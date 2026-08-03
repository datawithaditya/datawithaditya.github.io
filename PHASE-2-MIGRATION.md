# Phase 2 — Migrate 12 legacy projects to content collection

> **Status:** Completed on 2026-08-03. All 12 projects migrated. Build clean.
> Phase 3 (RasmNama) and Phase 4 (GitHub Actions deploy) are next.

Handoff document. Read this end-to-end before writing any code. It's a self-contained brief: another Claude Code session (or any engineer) should be able to complete Phase 2 without asking questions.

---

## 1. Where you are

Repo: `datawithaditya.github.io` — the source of `https://datawithaditya.github.io/`. GitHub Pages, `main` branch, public.

The site was previously a single 298 KB `index.html`. Phase 1 restructured it into an Astro project:

```
├── astro.config.mjs            ← site URL, trailingSlash config
├── package.json                ← Astro 7.x + @astrojs/check + TypeScript
├── src/
│   ├── content.config.ts       ← collection schema (READ THIS)
│   ├── content/projects/       ← ONE .md per project. Frontmatter + body.
│   │   ├── commercial-approval.md    ← reference implementation
│   │   └── getbulkvid.md             ← reference implementation
│   ├── data/
│   │   ├── companies.ts        ← id ↔ colour ↔ dateRange mapping
│   │   ├── site.ts, skills.ts, impact.ts, education.ts
│   ├── layouts/{Base,Project}.astro
│   ├── components/{Nav,Hero,Skills,Timeline,TimelineBlock,ProjectCard,ImpactBar,About,Education,Footer}.astro
│   ├── pages/index.astro
│   └── pages/projects/[slug].astro
├── public/profile.jpg
├── _index.html.legacy          ← the original monolith (source of truth for content)
├── _index.stripped.html        ← same file with the 215 KB base64 blob removed (readable)
└── .gitignore                  ← _index* files are gitignored — reference only
```

**Phase 1 has already migrated 2 of the 14 legacy projects.** They live at:
- `src/content/projects/commercial-approval.md`
- `src/content/projects/getbulkvid.md` (this is new content, not a legacy migration)

**Your job (Phase 2)**: migrate the remaining **12 legacy projects** into the same content collection format, verbatim (no rewriting), and confirm the site still builds cleanly.

---

## 2. The 12 projects to migrate

Content lives in `_index.stripped.html` at these exact line ranges. Each block starts with `<div id="view-{id}" class="view a-{colour}">` and ends with `</div>` at the start of the next `<div id="view-...">` line (or end of file for the last one).

| # | Legacy id | Target filename | Company | Colour | Legacy view lines | Timeline card line | Period (from card) | Badge | Suggested sortKey |
|---|-----------|-----------------|---------|--------|-------------------|--------------------|--------------------|-------|-------------------|
| 1 | `ptn` | `ptn-portal.md` | `dh` | red | 516–532 | 366 | Nov 2025 | Internal Tool | 202511 |
| 2 | `variance` | `variance-analytics.md` | `dh` | red | 533–550 | 367 | Dec 2025 | Analytics | 202512 |
| 3 | `incentive` | `sales-cost-incentive.md` | `dh` | red | 551–568 | 368 | Jan 2026 | Sales Ops | 202601 |
| 4 | `portal` | `internal-analytics-portal.md` | `synchem` | blue | 569–587 | 387 | 2023–2025 | Flagship | 202506 |
| 5 | `empportal` | `employee-web-portal.md` | `synchem` | blue | 588–606 | 388 | 2024 | Full-Stack | 202412 |
| 6 | `salesdash` | `sales-dashboard.md` | `synchem` | blue | 607–624 | 389 | 2024 | Power BI | 202410 |
| 7 | `ems` | `employee-management-system.md` | `synchem` | blue | 625–642 | 390 | 2023 | HR Systems | 202312 |
| 8 | `video` | `doctors-day-video-campaign.md` | `synchem` | blue | 643–660 | 391 | Jul 2024 | Automation | 202407 |
| 9 | `budget` | `budget-meeting-automation.md` | `synchem` | blue | 661–677 | 392 | 2024 | Office Tools | 202408 |
| 10 | `book` | `book-digitisation.md` | `synchem` | blue | 678–696 | 393 | 2023 | Document Eng. | 202310 |
| 11 | `llm` | `llm-finetuning.md` | `personal` | teal | 697–714 | 412 | 2024 | AI / Research | 202409 |
| 12 | `lifeapp` | `life-management-app.md` | `personal` | teal | 715–733 | 413 | 2024 | Product Design | 202411 |

**Colour** is set by `company`, don't include it in frontmatter. Kept in the table only for cross-reference against the legacy `a-{colour}` class.

**sortKey** convention: `YYYYMM` where higher = more recent. Cards within a company block render top-to-bottom in descending sortKey order. If two projects have the same month, the tie-breaker is arbitrary — just pick different months to avoid.

---

## 3. Reference implementation

Read `src/content/projects/commercial-approval.md` first. It is the canonical shape:

```markdown
---
title: "Commercial Rate Approval Automation"
badge: "Flagship"
company: dh
period: "Oct 2025"
sortKey: 202510
tech: [Python, Selenium, "SQL Server", "Rule Engine"]
description: "Rule-based decision engine auto-approving ~70% of SKU order line items daily — built after being embedded in the manual process alongside GM Commercial."
articleBadgeLabel: "Flagship · Decision Automation"
articleCompanyLabel: "D&H Sécheron Pvt. Ltd."
articleYear: "Oct 2025"
lede: "A rule-based engine that auto-approves ~70% of SKU order line items — replacing a bottleneck manual process I sat next to a GM to understand deeply first."
---

## The Problem
...
```

The schema is enforced by `src/content.config.ts`. Frontmatter fields:

| Field | Required | Notes |
|-------|----------|-------|
| `title` | yes | Card title + article `<h1>` |
| `badge` | yes | Small pill on the card (e.g. "Flagship") |
| `company` | yes | Enum: `dh` \| `synchem` \| `personal` |
| `period` | yes | Card footer date (e.g. "Nov 2025", "2023–2025") |
| `sortKey` | yes | Integer YYYYMM, higher = newer |
| `tech` | yes | Array of strings; each becomes a `.tag` on the card |
| `description` | yes | One-line summary on the card (`.pc-desc`) |
| `articleBadgeLabel` | optional | Article page badge; defaults to `badge` if unset |
| `articleCompanyLabel` | optional | Article page company label; defaults to `companies[i].name` |
| `articleYear` | optional | Article page year; defaults to `period` |
| `lede` | yes | Italic pull quote below the article title |
| `externalUrl` | optional | If set, renders "Visit live site →" link on article page |
| `externalLabel` | optional | Custom label for that link |
| `screenshot` | optional | Not yet used in template (safe to skip for now) |
| `screenshotAlt` | optional | Same |
| `draft` | optional | Defaults `false`. If true, hidden from build (dev shows it) |

**Markdown body**: standard `##` headings, paragraphs, bullet lists. The Astro template renders `<h2>`, `<p>`, `<ul>` with the existing article CSS. No custom directives needed.

---

## 4. How to extract each legacy project

Open `_index.stripped.html` at the line range in the table above.

Each legacy article block looks like this (real example, project #1 `ptn`, lines 516–532):

```html
<div id="view-ptn" class="view a-red">
  <nav>...</nav>                                    ← IGNORE (nav is now the shared component)
  <div class="art-top">
    <div class="art-meta">
      <span class="art-badge ab-red">Internal Tool · Cross-Functional</span>  ← articleBadgeLabel
      <span class="art-co">D&amp;H Sécheron Pvt. Ltd.</span>                  ← articleCompanyLabel
      <span class="art-yr">Nov 2025</span>                                    ← articleYear
    </div>
    <h1 class="art-title">PTN Commitment Tracking Portal</h1>                 ← title (also from card)
    <p class="art-lede">A Promise-to-Notify dashboard...</p>                  ← lede
  </div>
  <div class="art-body">
    <h2>The Problem</h2>
    <p>...</p>
    ...
    <div class="tech-box">
      <div class="tb-title">Technology Used</div>
      <div class="chips"><span class="chip">Python</span>...</div>            ← Render as regular <h2>Tech</h2> + <ul> OR keep flat
    </div>
    ...
    <div class="result-box">
      <div class="rb-title">Results</div>
      <ul>...</ul>                                                            ← Render as <h2>Results</h2> + <ul>
    </div>
  </div>
</div>
```

Also open `_index.stripped.html` at the timeline card line (col 3 of the table). The card has the `pc-desc`, `pc-stack`, and `pc-badge`:

```html
<div class="pc-hd">
  <div class="pc-title">PTN Commitment Tracking Portal</div>
  <div class="pc-badge">Internal Tool</div>                                   ← badge
</div>
<p class="pc-desc">Promise-to-Notify dashboard with email modal — ...</p>     ← description
<div class="pc-stack">
  <span class="tag">Python</span><span class="tag">Flask</span>...            ← tech array
</div>
```

### HTML → Markdown conversion rules

**Verbatim content, no rewrites.** The prose stays exactly as the user wrote it.

| Legacy HTML | Markdown output |
|-------------|-----------------|
| `<h2>Foo</h2>` | `## Foo` |
| `<p>Text.</p>` | `Text.` (blank line before + after) |
| `<p><strong>Label.</strong> Rest.</p>` | `**Label.** Rest.` |
| `<ul><li>a</li><li>b</li></ul>` | `- a\n- b` |
| `<div class="tech-box">...<span class="chip">X</span>...</div>` | Convert to a normal `## Technology Used` section with an `- X` list, OR fold the tech into the frontmatter `tech` array and skip the tech-box section entirely. Pick whichever the reference `commercial-approval.md` does — it uses a `## How I Built It` section with the tech inline in prose. |
| `<div class="result-box"><div class="rb-title">Results</div><ul>...</ul></div>` | `## Results\n\n- item\n- item` |
| `<div class="callout"><p>...</p></div>` | `> Blockquote text` (Markdown quotes render inside `.art-body` — inspect first, may need a callout convention added later) |
| `&mdash;` | `—` |
| `&ndash;` | `–` |
| `&amp;` | `&` |
| `&eacute;` | `é` |
| `&rarr;` | `→` |
| `&nbsp;` | space |

**Escape conflicts**: if a project's `title` contains `:` (colon), quote it in frontmatter: `title: "Foo: Bar"`. Same for values containing `#`, `-` at start, `[`, or wrapping quotes.

**Never invent content.** If a section says one paragraph, keep it one paragraph. If a bullet list has 4 items, keep 4 items.

---

## 5. Suggested workflow

1. Read `src/content.config.ts` and `src/content/projects/commercial-approval.md` end-to-end.
2. Read `_index.stripped.html` in ~50-line chunks covering both the timeline card line AND the article view line range for one project.
3. Create the target `.md` file with the frontmatter mapped from the card (title, badge, description, tech, period) and the article view (articleBadgeLabel, articleCompanyLabel, articleYear, lede).
4. Convert the article body HTML to Markdown per the rules above.
5. Repeat for the next project.
6. Every 3–4 projects, run `npx astro check` — catches schema violations early.
7. After all 12, run `npm run build`. It should output `dist/projects/*/index.html` for each new project. If any project's frontmatter is invalid, the build fails with a specific message.
8. Start `npm run dev` and spot-check 2–3 project pages in a browser.

---

## 6. Verification checklist

Before marking Phase 2 done, all of these must be true:

- [ ] All 12 new `.md` files exist in `src/content/projects/`.
- [ ] `npx astro check` reports **0 errors** (deprecation warnings on `z` are expected — non-blocking).
- [ ] `npm run build` succeeds; output shows 15 total pages (`/`, plus 14 `/projects/*`).
- [ ] `npm run dev` renders each of the 14 project pages at `http://localhost:4321/projects/<slug>` without console errors.
- [ ] Homepage timeline shows all 14 cards, grouped by company (D&H red / Synchem blue / Personal teal), sorted top-to-bottom by descending sortKey within each block.
- [ ] The article prose reads verbatim to the legacy content — no rewrites, no dropped sentences.
- [ ] The `_index.html.legacy` and `_index.stripped.html` reference files were NOT modified.

---

## 7. Commit convention

One commit per phase, not one per project:

```
Phase 2: migrate 12 legacy projects to Astro content collection

Verbatim migration of D&H (ptn, variance, incentive), Synchem
(portal, empportal, salesdash, ems, video, budget, book), and
Personal (llm, lifeapp) projects. No prose changes — same content
as the legacy single-file site, now split one file per project
with typed frontmatter driven by src/content.config.ts.

Build now generates 14 project pages under /projects/<slug>.
Homepage timeline unchanged in appearance.
```

Then `git push origin main`.

---

## 8. If the schema needs to change

If mid-migration you find a field you'd like to add (e.g. an `award` or `tags` field), update `src/content.config.ts` FIRST, then use it. Don't invent frontmatter keys that aren't in the schema — `astro check` will reject them.

If a project genuinely needs formatting the Markdown pipeline can't express (custom callouts, code samples with specific colouring, images), the acceptable options are:
1. Add the feature to `src/styles/article.css` and let Markdown emit the class via a wrapping `div` (Markdown allows inline HTML).
2. Convert the file to `.mdx` (requires adding `@astrojs/mdx`), and use Astro components inline.

**Don't** convert to `.mdx` unless you actually need components. Plain `.md` is the default.

---

## 9. What NOT to do

- Don't touch `_index.html.legacy` or `_index.stripped.html` — reference only.
- Don't touch `src/content/projects/commercial-approval.md` or `getbulkvid.md`.
- Don't change existing components or CSS unless a project genuinely can't render.
- Don't rewrite copy. Verbatim migration only.
- Don't add commit messages that say "AI-generated" or reference this brief.
- Don't push to GitHub without running `npm run build` locally first.

---

## 10. When done

Update `PHASE-2-MIGRATION.md` (this file) — add a completion note at the top:

```
> **Status:** Completed on YYYY-MM-DD. All 12 projects migrated. Build clean.
> Phase 3 (RasmNama) and Phase 4 (GitHub Actions deploy) are next.
```

Then close out any open todos, commit, push.
