---
layout: ../layouts/Doc.astro
title: "Freelancing Action Plan — Aditya Pandey"
description: "Personal career document — freelancing strategy, service positioning, and 12-month execution plan."
---

# Freelancing Action Plan
<div class="doc-meta">Aditya Pandey · August 2026 · Personal Strategy Document</div>

<div class="toc">
<div class="toc-title">Contents</div>
<ol>
<li><a href="#part-1">The Honest Assessment</a></li>
<li><a href="#part-2">Your Five Services</a></li>
<li><a href="#part-3">Upwork Profile — Copy-Paste</a></li>
<li><a href="#part-4">Proposal Templates</a></li>
<li><a href="#part-5">LinkedIn Content System</a></li>
<li><a href="#part-6">Cold Email & Direct Outreach</a></li>
<li><a href="#part-7">Client Qualification & Contracts</a></li>
<li><a href="#part-8">Pricing, Rates & Negotiation</a></li>
<li><a href="#part-9">The 12-Month Execution Plan</a></li>
<li><a href="#part-10">Financial Setup</a></li>
<li><a href="#part-11">Working While Employed</a></li>
<li><a href="#part-12">Failure Modes & Recovery</a></li>
<li><a href="#part-13">5-Year Revenue Projection</a></li>
</ol>
</div>

---

## Part 1 — The Honest Assessment {#part-1}

<div class="callout">

**What you have that most freelancers don't:** Every project in your portfolio is a live, production system used by real people. You can say "I built this, it's running, here's what it does" — not "I know how to do this." That distinction closes more clients than any rate or certification.

</div>

### Skills inventory

| Skill | Evidence | Market value |
|---|---|---|
| Python automation (Flask, APScheduler, Playwright) | Orchestration Portal, Rate Approval bot | High |
| MCP server development (FastMCP, OAuth 2.0 PKCE) | Balance Sheet MCP server | Very high — undercrowded |
| Desktop packaging (Tkinter, pywebview, PyInstaller) | BigMint price tracker | Medium — few competitors |
| Data pipelines (pandas, openpyxl, SSRS) | Balance sheet library, BigMint Excel | High |
| Web scraping (requests, BeautifulSoup, pywebview) | BigMint tracker | Medium-high |
| Full SaaS (FastAPI, PostgreSQL, Azure, Razorpay) | RasmNama | High |
| Enterprise auth (MSAL, Graph API, OAuth 2.0 PKCE) | Orchestration Portal, Balance Sheet MCP | High — rare at this level |

### What you still need to acquire

- A public client record (zero reviews = zero trust on platforms)
- One testimonial from a non-employer
- A signed, paid first contract
- A habit of writing proposals daily

The plan below fixes all four. It takes 12 months done seriously.

---

## Part 2 — Your Five Services {#part-2}

<div class="tip">

**Positioning rule:** Never call yourself a "Python developer." That describes 10 million people. Each service below has a specific buyer, a specific pain, and a specific outcome. Lead with the pain and the outcome — not the technology.

</div>

<div class="service">

### Service 1 — Enterprise Workflow Automation

**What it is:** Turning manual, repetitive business processes into scheduled, auditable Python systems — approval workflows, daily data pulls, report generation, alert systems, internal chatbots.

**Who buys it:** Operations managers, plant managers, procurement heads, admin leads at manufacturing, pharma, trading, and distribution companies. Companies with 50–500 employees that have no in-house engineering team.

**What they say:** *"Someone does this manually every day and we need it automated"* / *"We keep missing things because the process relies on one person"* / *"Can you make this run automatically?"*

**Your evidence:** Orchestration Portal (21 scripts, APScheduler, SSE live logs, MSAL SSO, WhatsApp chatbot) · Rate Approval bot (Playwright + Flask, JSON rules DSL, PythonAnywhere) · BigMint tracker (daily price pull, Excel history, .exe delivery)

**What you deliver:** Scheduled Python system, audit log, deployment on their server or PythonAnywhere, documentation and a 5-minute Loom walkthrough

| Scope | Price |
|---|---|
| Simple script + scheduler (1 source, 1 output) | ₹12,000–₹20,000 |
| Multi-step workflow + Excel/email output | ₹25,000–₹50,000 |
| Full internal tool (Flask UI + scheduler + auth) | ₹60,000–₹1,20,000 |
| Monthly maintenance retainer | ₹12,000–₹25,000/month |

</div>

<div class="service">

### Service 2 — MCP Server Development (Business Data → AI)

**What it is:** Connecting your company's internal data — finance files, Excel reports, databases, APIs — to Claude or GPT via the Model Context Protocol, so the AI can query, analyse, and answer questions over real company data. Not a chatbot. Not a RAG system. A proper tool-calling interface.

**Who buys it:** CTOs and VPs of Engineering at mid-market companies. Finance directors and CFOs who are already using Claude or GPT and frustrated that it can't see their actual numbers. Data leads at consulting firms. Companies with structured internal data and an AI subscription they can't fully use.

**What they say:** *"We're using Claude but it can't access our internal data"* / *"We want AI to answer questions about our financials"* / *"How do we connect our database to ChatGPT?"*

**Your evidence:** Balance Sheet MCP server — 7 MCP tools (start_session, discover_files, read_main_file, load_dataset, list_analyses, run_analysis, compare_periods) over a 175-function pandas finance library. Dual stdio/HTTP deployment. OAuth 2.0 PKCE built from scratch. Live in production.

**The pitch:** *"You're already paying for Claude. Right now it can't see your finance data, your ERP exports, your internal reports. I build the bridge — a proper MCP server where Claude calls your real data and returns real answers. You keep asking Claude questions in plain English; it now knows your actual numbers."*

**What you deliver:** FastMCP server with typed tools, dual deployment (stdio for Claude Desktop, HTTP for claude.ai), OAuth 2.0 if needed, full documentation, tool schema, source code

| Scope | Price |
|---|---|
| Basic MCP server (1 data source, 3–5 tools, stdio) | $800–$1,500 |
| Standard (multi-source, 5–10 tools, HTTP deployment) | $2,000–$4,000 |
| Full (multi-module library + tools + OAuth + dual deployment) | $4,000–$8,000 |
| Monthly retainer (new tools, schema updates, support) | $300–$600/month |

</div>

<div class="service">

### Service 3 — Data Pipeline & Reporting Automation

**What it is:** Python + pandas + openpyxl/Power BI pipelines that replace weekly manual report building — pulling from multiple sources, transforming, and writing to Excel or dashboard formats on a schedule.

**Who buys it:** Finance analysts, operations analysts, consultants and small agencies who build the same report every week or month. SMBs without a data team.

**What they say:** *"Every Monday someone spends three hours building this report"* / *"We pull from three systems and manually combine in Excel"* / *"We need this to just run itself."*

**Your evidence:** Balance sheet pandas library (175 functions, 10 modules, period comparison, ratio analysis) · BigMint Excel history pipeline · SSRS report experience at D&H

**What you deliver:** Scheduled Python pipeline, clean structured output (xlsx or CSV), deployment, source code

| Scope | Price |
|---|---|
| Single-source pipeline → Excel | ₹10,000–₹18,000 |
| Multi-source merge + transform + styled output | ₹20,000–₹40,000 |
| Monthly scheduled reports + maintenance | ₹8,000–₹18,000/month |

</div>

<div class="service">

### Service 4 — Web Scraping & Data Acquisition

**What it is:** Commercial scrapers, price monitors, and competitive intelligence pipelines — including sites that require login, session cookies, and authenticated access.

**Who buys it:** Procurement teams, market research teams, e-commerce businesses monitoring competitors, independent consultants needing structured data from public sources.

**What they say:** *"I need prices from [site] every morning in Excel"* / *"I need to track competitor listings"* / *"Can you pull this data on a schedule?"*

**Your evidence:** BigMint price tracker (pywebview login, requests + BS4 scraping, openpyxl output, PyInstaller .exe) — handles authenticated sessions, not just public pages

**Differentiation:** You can handle *authenticated scraping* — sites requiring login, session cookies, CSRF tokens. Most scraping developers only handle public pages. Authenticated scraping commands a 2–3× premium.

| Scope | Price |
|---|---|
| Public page scraper + CSV/Excel output | ₹8,000–₹15,000 |
| Authenticated scraper (login + session) | ₹18,000–₹35,000 |
| Scheduled monitor + alert system | ₹25,000–₹50,000 |

</div>

<div class="service">

### Service 5 — Desktop Tool Development (Python + PyInstaller)

**What it is:** Standalone .exe applications for teams that can't run web servers, don't have Python installed, and need something they can double-click.

**Who buys it:** Operations, procurement, and field teams at non-tech companies. Anyone who needs an internal tool but their IT won't install Python on staff machines.

**What they say:** *"Our team isn't technical — they need something they can just open"* / *"We can't run a web app internally"* / *"Make it a desktop program."*

**Your evidence:** BigMint tracker — PyInstaller .exe, sv-ttk Tkinter UI, DPI-aware on Windows, handles the bundled vs user-writable path split correctly

| Scope | Price |
|---|---|
| Simple Tkinter tool (form + output) | ₹12,000–₹22,000 |
| Full desktop app (UI + scraping/data + Excel) | ₹28,000–₹55,000 |
| .exe packaging of existing Python script | ₹5,000–₹10,000 |

</div>

---

## Part 3 — Upwork Profile, Copy-Paste Ready {#part-3}

### Title — pick one

```text
Option A: Python Automation & MCP Server Developer — Workflows, AI Data Integration
Option B: Enterprise Python Developer — Automation · MCP Servers · Data Pipelines
Option C: Python Developer — Workflow Automation, Scraping, MCP/AI Integration, Desktop Apps
```

Use Option A. It leads with the two highest-value services. Change only if you find the exact phrase isn't searchable.

### Upwork Overview — full text

```text
I build Python systems that eliminate manual work and connect your business data to AI.

─── ENTERPRISE WORKFLOW AUTOMATION ───────────────────────────────────────
I built a 21-script orchestration platform for a manufacturing company —
APScheduler task management, SSE live logs, MSAL SSO, WhatsApp chatbot with
fuzzy product search. Procurement team uses a PyInstaller desktop app I built
that pulls commodity prices every morning and writes to Excel. Finance approval
process automated with a Playwright bot and a Flask rate manager on
PythonAnywhere.

If your team does something manually on a schedule, I can automate it.

─── MCP SERVER DEVELOPMENT (BUSINESS DATA → AI) ──────────────────────────
I built a production MCP server that connects a 175-function pandas finance
library to Claude and GPT:

  7 tools: start_session · discover_files · read_main_file · load_dataset ·
           list_analyses · run_analysis · compare_periods

  Dual deployment: stdio (Claude Desktop) + HTTP + OAuth 2.0 PKCE (claude.ai)

If you're using Claude or GPT and want it to query your actual data — finance
files, databases, internal reports — I build the bridge. Not a chatbot. A
proper tool-calling MCP server.

─── DATA PIPELINES & SCRAPING ────────────────────────────────────────────
• pandas + openpyxl pipelines replacing weekly manual report builds
• Authenticated web scraping (session cookies, pywebview login capture)
• PyInstaller .exe delivery for non-technical teams

─── WHAT YOU GET ──────────────────────────────────────────────────────────
Documented, tested code — not a script, a system. Deployment instructions.
A short Loom walkthrough. Source code you own.

All projects in my portfolio are live production systems, not demos.

─── AVAILABILITY ──────────────────────────────────────────────────────────
20 hrs/week. Response within 4 hours (IST, GMT+5:30).
```

### Specialized profiles

Upwork lets you create up to 5 specialised profiles under one account. Create two:

**Profile 1 (default):** Enterprise Automation — the full overview above  
**Profile 2:** MCP Server / AI Integration — lead with the MCP section, reference the Balance Sheet server directly, target CTOs and AI teams

---

## Part 4 — Proposal Templates {#part-4}

<div class="callout">

**A proposal is not a cover letter.** It's a short scoped estimate proving you read their post. Open with their problem. Reference one specific project of yours that maps to their need. End with a question showing you paid attention. Max 180 words. Never use "I am passionate about Python."

</div>

### How to find the right jobs on Upwork

Search terms that return quality automation/MCP work:

```text
python automation workflow
playwright automation python
fastapi backend api python
mcp server claude openai
pandas data pipeline excel report
pyinstaller desktop app windows
python scraper authenticated login
openpyxl excel automation
```

Filter settings: Posted within 24 hours · Budget $200+ (or ₹15,000+) · Client hire rate >40% · Payment verified

### Template A — Automation / Workflow Jobs

```text
Subject: Python automation developer — I've built exactly this

Hi [Name],

You need [mirror their exact problem — one sentence]. I've done this in production.

Most relevant: I built [specific project — e.g., "a Playwright-based approval
bot for a manufacturing company's rate validation workflow"]. [One concrete
detail that maps to their situation]. Result: [specific outcome].

My approach for your project:
1. [Step 1 specific to their post]
2. [Step 2]
3. Delivery as [script/app/exe] with deployment notes + Loom walkthrough

Timeline: [X] days. Fixed price: $[Y] all-in.

Quick question before I scope this properly: [one specific technical question
that shows you read the post carefully — data format, access method, output
requirement, etc.]

Aditya
datawithaditya.github.io
```

### Template B — MCP Server / AI Tooling Jobs

```text
Subject: MCP developer — I have a production server you can look at

Hi [Name],

You want an MCP server that connects [their data source] to [Claude/GPT].
I've shipped one.

My Balance Sheet MCP server: 175+ pandas finance functions exposed as 7 MCP
tools (start_session, discover_files, read_main_file, load_dataset,
list_analyses, run_analysis, compare_periods). Dual deployment — stdio for
Claude Desktop, HTTP + OAuth 2.0 PKCE for claude.ai. I wrote the auth layer
from scratch.

For your project, the approach is:
1. Map your data structure to tool inputs/outputs
2. Build FastMCP server with typed schemas
3. Deploy to [their preference: stdio / HTTP / both]
4. Auth layer if needed

Two questions before I scope:
– [Specific question about their data — e.g., "Is the data in flat files or a
  database?"]
– [Specific question about auth — e.g., "Do you need multi-user access or
  single-user?"]

Fixed price for a complete, deployed, documented server: $[X–Y].

Aditya
datawithaditya.github.io/projects/balance-sheet-mcp
```

### Template C — Scraping / Data Acquisition Jobs

```text
Subject: Python scraper with auth experience — your exact use case

Hi [Name],

You need [describe their scraping need precisely]. I've handled authenticated
scraping in production — including login flows, session cookie capture via
pywebview, and session reuse.

Built for a manufacturing company: a PyInstaller desktop app that logs into
BigMint (requires authenticated session), scrapes commodity prices across
8 materials, and writes to a styled Excel sheet with change indicators.
Deployed to non-technical procurement staff as a standalone .exe.

For your project:
1. Analyse the target site's auth and page structure
2. Build scraper with [requests/Playwright] + session handling
3. Output to [their format — CSV/Excel/database/API]
4. [If needed: .exe packaging or scheduler]

Question: Does the target site require login, or is the data on public pages?
That affects approach and timeline.

Fixed price: $[X]. Includes source code, deployment notes, and 14 days of
bug fixes after delivery.

Aditya
```

### Template D — Data Pipeline / Reporting Jobs

```text
Subject: pandas + openpyxl developer — I've built this exact workflow

Hi [Name],

You need [describe their pipeline precisely — sources, transform, output].
I've automated this kind of report build in production.

Built a 175-function pandas library for financial statement analysis — period
comparison, ratio calculations, multi-sheet Excel output with formatting.
Also a daily price pipeline that pulls from a web source and appends to a
structured Excel history file automatically.

For your project:
1. Pull from [their sources — API/file/database/scrape]
2. [Transform / merge / calculate]
3. Write to [Excel/CSV/dashboard] in [their format]
4. Schedule with APScheduler or a cron job

One thing to clarify: should this run on a schedule automatically, or
triggered manually each time?

Timeline: [X] days. Fixed price: $[Y].

Aditya
```

---

## Part 5 — LinkedIn Content System {#part-5}

<div class="tip">

**Goal:** Be the person CTOs and operations managers think of when they realise they need automation. You do this by posting real, specific technical content 2–3 times per week. Not "productivity tips." Not inspirational quotes. Actual problems you solved and how.

</div>

### The post format that works

```text
[Single sentence describing the before-state — the manual pain]

[What you built — 3–5 bullet points, specific and technical]

[The result — what changed, specific]

[One thing others can take from this — a pattern, a lesson, a code snippet]

[Optional: link to portfolio / GitHub]
```

### 8 post ideas — ready to write now

1. **BigMint tracker:** "D&H's procurement team was manually logging into BigMint every morning, reading prices across 8 materials, and pasting to Excel. Here's how pywebview + requests solved it in a .exe they double-click."

2. **MCP server:** "I connected 175 pandas finance functions to Claude using FastMCP. Finance team now asks Claude questions in plain English. Claude calls the real data. Here's what the tool schema looks like and why I chose stdio + HTTP dual deployment."

3. **Rate approval bot:** "D&H's special rate approval process required someone to log into a portal, check each line, cross-reference Excel rules, and approve/reject manually. Here's how a Playwright bot + JSON rules DSL replaced that."

4. **PyInstaller packaging:** "Most Python developers can't package a working .exe that runs on a machine with no Python installed. Here's how to handle the _MEIPASS vs user-writable directory split, DPI awareness, and pywebview bundling."

5. **OAuth 2.0 PKCE from scratch:** "Why I built OAuth 2.0 PKCE by hand for an MCP server instead of using a library — what PKCE actually does, the exact flow, and what I'd do differently."

6. **RasmNama architecture:** "I built a SaaS for Indian weddings solo — FastAPI + PostgreSQL + Azure Blob + Razorpay + invite-based RBAC. Here's the data model: Event → Ceremony → Photo, and why I chose credit-based pricing over monthly subscription."

7. **APScheduler in production:** "APScheduler docs are thin on production deployment. Here's what I learned running 21 scheduled scripts inside a Flask app with SSE live logs and a systemd supervisor."

8. **Focal-point photo pipeline:** "When users upload photos, my app generates 3 resized variants and stores focal-point metadata so front-end clients crop intelligently at any aspect ratio without re-querying the server. Here's the Pillow pipeline."

### Connection request (LinkedIn)

Send this when connecting with CTOs, ops heads, or procurement leads at target companies:

```text
Hi [Name] — I build Python automation tools for operations and finance teams,
and recently built an MCP server that connects business data to Claude/GPT.
Your work at [Company] in [area] is adjacent to what I do. Worth connecting.
```

No pitch. No ask. Just context. The pitch comes after 2–3 post interactions.

### DM sequence after they engage with a post

```text
Message 1 (same day they like/comment):
"Thanks for the comment — glad it was useful. Curious, is [their company] using
AI tools internally yet, or still early days?"

[Wait for reply]

Message 2 (only if they respond positively):
"Got it. If you're at the stage of wanting AI to actually see your internal
data — not just a chatbot, but Claude querying real numbers — that's exactly
what I've been building. Happy to show you a 10-minute demo of the MCP server
if useful."
```

---

## Part 6 — Cold Email & Direct Outreach {#part-6}

### Who to target

Best-fit companies have all of these:
- 50–300 employees
- No in-house engineering team
- At least one manual reporting or approval process
- Industries: manufacturing, pharma, FMCG distribution, trading, commodity businesses

Find decision-makers via LinkedIn: search `"Operations Manager" OR "Plant Manager" OR "Procurement Head"` at companies in your target industry. Look for people who post about process problems, Excel frustrations, or team inefficiencies — they're pre-qualified.

### Where to find company lists
- LinkedIn Sales Navigator (7-day free trial is enough for an initial list)
- Zaubacorp / MCA21 for registered Indian companies by industry
- IndiaMART seller listings (manufacturing companies with contact details)
- Clutch.co for IT companies needing automation subcontractors

### Cold email template

```text
Subject: One question about [Company]'s reporting workflow

Hi [Name],

Quick background: I'm a Python developer who automates manual workflows for
operations and finance teams — approvals, daily data pulls, scheduled reports.

I noticed [Company] works in [manufacturing/pharma/distribution]. In similar
companies, the biggest manual time-sink is usually one of:
  • Daily data aggregation from multiple systems
  • Purchase or rate approval routing that relies on email/manual checking
  • Weekly reports that someone builds in Excel from scratch

If any of those are true at [Company], I can usually cut the time by 80%+
with a targeted Python system. No ERP replacement, no months-long project —
just a focused script or app that handles the specific repetitive thing.

Worth a 15-minute call to see if anything fits?

Aditya Pandey
Python Automation & MCP Developer
datawithaditya.github.io
```

### Follow-up sequence

```text
Day 0:   Send the email above

Day 4:   "Hi [Name] — just following up on the note below. Happy to keep
          it to 10 minutes if that's easier."

Day 10:  "Last follow-up. If timing isn't right, no problem — feel free to
          reach out whenever the process questions come up."
```

After day 10: mark as cold and move on. Never send a fourth email.

### MCP-specific cold email (for tech-forward companies)

```text
Subject: Connecting [Company]'s data to Claude — have you looked at MCP?

Hi [Name],

You may already be using Claude or ChatGPT for general work. The next
step most companies want but don't know how to build: making the AI
actually query your internal data — finance files, databases, reports —
and return real answers.

That's what the Model Context Protocol does. I built a production MCP
server that exposes a 175-function finance library to Claude as 7 callable
tools. Finance team asks questions in plain English; Claude calls the data.

If [Company] is at that stage — or wants to be — I'm happy to show you
what this looks like in a 15-minute demo. No commitment.

Aditya Pandey
datawithaditya.github.io/projects/balance-sheet-mcp
```

---

## Part 7 — Client Qualification & Contracts {#part-7}

### 5 questions to ask before accepting any project

Before writing a proposal or agreeing to scope, ask these in the discovery call:

```text
1. "Walk me through what someone does manually today — step by step."
   Why: Reveals actual scope. Clients often understate complexity.

2. "How often does this process run — daily, weekly, on-demand?"
   Why: Determines scheduler vs on-demand architecture. Affects price.

3. "Where does the data live and how is it accessed today?"
   Why: Excel on a shared drive ≠ API ≠ database. Access method drives
   70% of the technical approach.

4. "What does success look like? What would make this a clear win?"
   Why: You need a concrete success criterion before starting, not after.
   Clients who can't answer this will dispute delivery.

5. "Do you have someone who can maintain this after delivery, or does it
   need to be zero-maintenance?"
   Why: Zero-maintenance systems require more robust error handling,
   alerting, and documentation. Price accordingly.
```

### Red flags — walk away if you see these

<div class="warn">

- **"Can you build this for ₹3,000 / $50?"** — If the budget is insulting before the project starts, the relationship won't improve.
- **"I've been burned by previous developers"** (without a coherent explanation of what went wrong) — You will be the next one blamed.
- **"We'll pay more once it works"** — Milestone-based is fine. Contingency-on-success is not.
- **"Can you do a free trial task first?"** — Your portfolio already proves your capability. Anyone asking for free work has already decided not to pay fairly.
- **Vague scope + urgent deadline** — "I need it by Friday" with no clear spec means you'll be rewriting it by Saturday.
- **Won't sign a written scope** — No signature, no start. Non-negotiable.
- **"We own all rights and you can't show this anywhere"** — Fine for the work product. Not fine for testimonials. If they won't give you even a private testimonial, walk away.

</div>

### What to include in every scope of work

Send a written scope document before any work begins. It doesn't need to be formal — a clean PDF or even a structured email works. Include:

```text
PROJECT SCOPE — [Client Name] / [Project Name] / [Date]

WHAT'S INCLUDED:
  • [Specific deliverable 1]
  • [Specific deliverable 2]
  • Source code, deployment notes, Loom walkthrough

WHAT'S NOT INCLUDED:
  • [Anything the client might assume is included but isn't]
  • UI design (unless specifically agreed)
  • Hosting costs (client's responsibility)

PAYMENT:
  50% upfront (₹X / $X) before work begins
  50% on delivery and your sign-off

REVISIONS:
  2 rounds of revisions included within the agreed scope.
  Changes outside scope will be quoted separately.

TIMELINE:
  [X] business days from payment receipt.

SUPPORT:
  14 days of bug fixes after final payment. After that, maintenance
  by separate agreement.

ACCEPTANCE:
  If I don't hear back within 5 business days of delivery, the
  project is considered accepted.
```

### What to say when scope creeps

When a client adds requirements mid-project, send this immediately — not at the end:

```text
"Thanks for the additional requirement — that makes sense. This falls
outside the original scope we agreed on [reference their scope doc].

I can add it, and the additional cost would be ₹[X] / $[X] with an
extra [N] days on the timeline. Should I include it in the current
project at that cost, or keep it for a follow-on engagement?"
```

Never add work and hope they'll pay later. They won't.

### How to get a testimonial

At project close, send this:

```text
"Really glad this worked out well. If you have a few minutes, a short
testimonial would mean a lot — even 2–3 sentences about what the
project involved and whether you'd recommend working with me. You can
reply directly or I'll put it on my portfolio with your approval."
```

---

## Part 8 — Pricing, Rates & Negotiation {#part-8}

### Rate card (private — do not publish)

| Service | Indian clients | International (Upwork) |
|---|---|---|
| Python automation (simple) | ₹12,000–₹20,000 flat | $250–$500 flat |
| Workflow automation (Flask/scheduler) | ₹30,000–₹60,000 flat | $600–$1,200 flat |
| Full internal tool (UI + backend + auth) | ₹70,000–₹1,50,000 flat | $1,500–$3,000 flat |
| MCP server — basic (stdio, 3–5 tools) | $800–$1,500 flat | $800–$1,500 flat |
| MCP server — full (OAuth, dual deploy) | $3,000–$8,000 flat | $3,000–$8,000 flat |
| Web scraper (public pages) | ₹8,000–₹15,000 flat | $200–$400 flat |
| Authenticated scraper | ₹18,000–₹35,000 flat | $400–$800 flat |
| Desktop app (.exe) | ₹25,000–₹55,000 flat | $500–$1,200 flat |
| Data pipeline → Excel/report | ₹12,000–₹40,000 flat | $250–$800 flat |
| Hourly (Upwork) | — | Start $25 → target $75 in 12 months |
| Monthly retainer (automation) | ₹12,000–₹25,000 | $300–$600 |
| Monthly retainer (MCP server) | — | $300–$600 |

**Always try for fixed price over hourly.** An automation that takes you 3 days to build is worth ₹40,000 to the client. At $25/hr for 3 days × 6 hours, you'd earn $450 (~₹38,000) and train the client to think of your time as the commodity, not the outcome.

### The 50% upfront rule

**Never waive this.** For any project over ₹10,000 / $200:

- 50% before first line of code is written
- 50% on delivery before you hand over source code

If a client says "pay full on delivery" — it means they've done this to developers before and not paid. Walk away.

For Upwork: use milestones. Set Milestone 1 (50% of project cost) before starting. The platform holds the funds in escrow — both sides are protected.

### Negotiation script — client pushes back on price

```text
Client: "That's a bit high. Can you do it for ₹15,000?"
You:    "I understand. My price is based on the scope we discussed — the
         [scraper / scheduler / full tool]. If ₹15,000 is the budget,
         I could deliver [a reduced scope — describe specifically what
         drops out]. Would that still solve your problem, or does the
         full version matter?"
```

Never just drop your price. Always trade scope for price. Dropping price with no scope reduction trains the client that your original price was inflated.

### Negotiation script — client wants hourly, not fixed

```text
Client: "Can we do hourly?"
You:    "I prefer fixed-price for automation work — it protects you from
         budget overruns and me from underestimating. I've scoped this at
         [X hours] which is why the fixed price is [₹Y / $Y]. If you'd
         prefer hourly, I'd need to add a 20% buffer for scope uncertainty,
         which puts the rate at [₹Z/hr / $Z/hr]. Up to you which you'd
         rather have."
```

---

## Part 9 — The 12-Month Execution Plan {#part-9}

### Month 1 — Week by Week

<div class="phase"><span class="phase-n">W1</span><span class="phase-l">Setup — Build the machine before you start</span></div>

- [ ] Create Upwork account. Complete every section (title, overview, portfolio, hourly rate at $25, availability to 30+ hrs/week)
- [ ] Upload 3 portfolio pieces with descriptions: Orchestration Portal, Balance Sheet MCP, BigMint tracker
- [ ] Record a 4-minute Loom of Orchestration Portal or RasmNama. Add to Upwork profile.
- [ ] Write Case Study PDF #1: Orchestration Portal (Problem → Build → Result). One page, send as PDF in proposals.
- [ ] Connect LinkedIn profile to portfolio. Post announcement: "I'm taking on freelance Python automation and MCP server work. Here's my portfolio."
- [ ] Set up Wise account for USD receipts.

<div class="phase"><span class="phase-n">W2</span><span class="phase-l">First proposals — 10/day, no exceptions</span></div>

- [ ] Apply to 10 Upwork jobs per day. Use search terms from Part 4.
- [ ] Use Template A or C for every proposal. Customise the specific project reference and the closing question.
- [ ] Track: which opening lines get responses. Iterate each week.
- [ ] Post first LinkedIn content piece (BigMint tracker story).
- [ ] Send 5 cold emails to Indian SMBs using Part 6 template.

<div class="phase"><span class="phase-n">W3</span><span class="phase-l">First conversations — qualify hard</span></div>

- [ ] For every response: schedule a 20-minute discovery call. Ask the 5 qualification questions from Part 7.
- [ ] Send written scope within 24 hours of call. Request 50% upfront.
- [ ] Continue 10 proposals/day.
- [ ] Post LinkedIn piece #2 (MCP server / Balance Sheet story).
- [ ] Write Case Study PDF #2: Rate Approval bot.

<div class="phase"><span class="phase-n">W4</span><span class="phase-l">First delivery — earn the first review</span></div>

- [ ] Deliver Week 3's project. Send Loom walkthrough with code.
- [ ] Send testimonial request (template from Part 7).
- [ ] Request the Upwork review directly: "If you're happy with the work, a review on the contract would really help my profile."
- [ ] Add completed project to portfolio.
- [ ] Post LinkedIn piece #3.

### Months 2–3 — Traction

**Targets:** 3–5 Upwork reviews, $800–$1,500 earned, one direct Indian client conversation

- Raise Upwork rate by $5 after every 3 completed jobs
- Apply to Flexiple (flexiple.com) — set up profile, accept 1–2 projects
- Post on LinkedIn 3×/week without exception
- Start sending 5 cold emails/week to Indian SMBs
- Write 1 technical blog post on your portfolio (BigMint packaging, or OAuth 2.0 PKCE walkthrough) — share on LinkedIn and Hacker News Show HN

### Months 4–6 — Price increases + specialisation signal

**Targets:** 8–12 Upwork reviews, $50/hr Upwork rate, first retainer client at ₹12,000+/month

- Apply to Toptal if you have 5+ reviews. Prep: LeetCode mediums + system design basics + 30-minute walkthrough of the Orchestration Portal architecture
- Publish 2nd blog post
- Reposition Upwork Profile 2 (MCP/AI specialisation) as the primary profile if the AI market is growing
- Start spending 30 minutes/day on LinkedIn engagement (comment meaningfully on CTO and ops manager posts in your target industry)
- Apply to Workhall and YunoJuno for UK/EU market access

### Months 7–9 — Direct client push

**Targets:** 2 retainer clients, ₹80,000–₹1,20,000/month total revenue

- Attend PyCon India (or remote equivalent). Talk to people, not booths.
- Start converting LinkedIn connections to direct conversations (DM sequence from Part 5)
- Reduce Upwork proposal volume — focus on quality over quantity
- If Toptal accepted: set rate at $90/hr, only take projects that fit exactly
- Write a proper case study page on your portfolio for the MCP server (this becomes your primary sales asset for international MCP clients)

### Months 10–12 — Review and scale decision

**Evaluate three paths:**

| Path | Revenue ceiling | Risk | Right if |
|---|---|---|---|
| Solo freelancer | ₹1,50,000–₹2,50,000/month | Low | You value flexibility over growth |
| Productise one service | Uncapped | Medium | You have a repeatable, validated service (MCP servers are a candidate) |
| Agency (subcontract) | ₹3,00,000–₹6,00,000/month | High | You want to scale and can manage people |

Make this decision based on evidence from months 1–9, not on aspiration. The right answer is whichever path has the most traction.

---

## Part 10 — Financial Setup {#part-10}

### Step-by-step setup before your first invoice

**Step 1: Separate current account**
Open a dedicated current account for freelance income. Never mix with salary. HDFC/ICICI current accounts: ₹10,000–₹25,000 minimum balance. Required for professional invoicing.

**Step 2: Wise account (for international clients)**
Wise gives you a USD, EUR, and GBP account number. International clients transfer as if it's a local bank. You receive at interbank rates (~1–1.5% fee vs 3–4% at Indian banks). Required for Upwork payouts without the conversion loss.

**Step 3: Invoicing tool**
Wave (free) or Zoho Books (₹1,999/year). Both handle GST invoicing, recurring invoices, and payment tracking. Set up your invoice template before your first client.

**Step 4: Understand 44ADA (presumptive taxation)**
If your annual gross freelance income is below ₹75 lakh: file under Section 44ADA. 50% of gross receipts is deemed your income — no books of accounts required, no audit. Tax on the 50% at your slab rate. At ₹15 lakh gross income, you pay tax on ₹7.5 lakh. Highly favorable.

**Step 5: GST registration**
Not required below ₹20 lakh/year domestic revenue. **Required immediately if you invoice foreign clients in foreign currency** (treated as export of services — 0% GST, but you must be registered to claim LUT — Letter of Undertaking). Apply for GST registration the moment you have your first international client, even if domestic revenue is zero.

**Step 6: Separate tax account**
Open a recurring deposit or liquid fund and deposit 25–30% of every payment received. This is your advance tax / self-assessment tax reserve. Pay advance tax quarterly (June, September, December, March).

### Monthly financial discipline

```text
On every payment received:
  70% → operating expenses + drawings (your income)
  30% → tax reserve account (don't touch)

On the 1st of each month:
  Check: outstanding invoices, overdue payments, upcoming expenses
  Send: gentle reminder on any invoice >14 days unpaid
```

---

## Part 11 — Working While Employed {#part-11}

<div class="callout">

**The correct sequence:** Build while employed → confirm client demand → resign with evidence. The riskiest move is quitting before you have paid clients. The second riskiest is never starting because you're employed.

</div>

### Daily schedule (while at D&H)

```text
06:30–07:30  Upwork proposals (10/day takes ~45 minutes once you have
             templates. Proposals posted before 8 AM catch clients in
             US evening — highest competition window.)

Evening
19:00–21:00  Active project work (client deliverables)
             OR LinkedIn content writing
             OR portfolio/blog work

Weekend
4 hours/day  Discovery calls, project work, cold outreach batching
```

**Hard limit:** 15 hours/week maximum while employed. More than this and you'll burn out by month 3 and do neither job well.

### Weekly targets (months 1–3)

| Activity | Per week |
|---|---|
| Proposals sent | 50 (10/day × 5 days) |
| Cold emails | 5 |
| LinkedIn posts | 2–3 |
| Discovery calls | 1–3 (as they come) |
| Project hours (if active) | Up to 10 |

### On moonlighting and your employment contract

Check your contract specifically. Most Indian employment contracts prohibit "competitive employment" — taking clients who are D&H's direct competitors. Automation work for food processing, pharma, real estate, or software companies is not competitive. D&H deals in electrical welding consumables — that's a narrow vertical.

**Do not:** take D&H's direct competitors as clients while employed.  
**Do:** take clients in unrelated industries. Manufacturing is broad enough that most clients won't conflict.

---

## Part 12 — Failure Modes & Recovery {#part-12}

### Undercharging and never raising rates

**Signs:** You're winning every proposal. You're always busy. You're making less per hour than you did two months ago.  
**Recovery:** Raise your Upwork rate by $10 immediately. Stop applying to jobs below your new rate. Win rate will drop — that's correct. You're now competing in a higher tier.

### Proposal volume collapsing after month 2

**Signs:** You got a client in month 1, you're working on it, you stopped sending proposals.  
**Recovery:** Proposals are a pipeline activity, not a one-time activity. If you stop for 3 weeks, you have nothing lined up after this client. Minimum 5 proposals/day even while on an active project.

### Taking bad clients

**Signs:** Client is vague, argumentative, changes requirements daily, delays payment.  
**Recovery for this project:** Document every communication in writing. Deliver exactly the agreed scope and nothing more. Collect final payment before sending source code.  
**Recovery going forward:** Use the qualification questions from Part 7 before the next client. One bad client costs more in time and stress than three good clients earn.

### Scope creep destroying the project

**Signs:** Project is "almost done" but keeps getting new requirements. You've delivered 3 rounds of revisions that weren't in scope.  
**Recovery:** Send the scope creep email from Part 7 immediately — even if late. "Going forward, any additional requirements outside what we agreed will be quoted separately. Here's a summary of what we've added so far and the cost for each." If they push back, enforce or walk away. Scope creep that goes unaddressed will end with a disputed invoice.

### Burning out by month 3

**Signs:** You're spending 25+ hours/week on freelancing while working a full-time job. Quality is dropping. You're resenting both jobs.  
**Recovery:** Cut freelance hours to 10/week for 30 days. Complete current projects, don't take new ones. Rest. Then restart at 15 hours maximum.

### No traction after 3 months

**Signs:** 200+ proposals sent, fewer than 5 responses, zero clients.  
**Diagnosis:**
1. Proposal quality — read your proposals out loud. Are they about your skills or their problem?
2. Rate — are you above market for your review count? (At 0 reviews, $35/hr is too high to compete)
3. Profile — is your title a skill description or an outcome description?
4. Job selection — are you applying to jobs where you're genuinely the best fit, or anything Python-related?

**Recovery:** Rewrite your profile. Drop rate to $18–$20/hr for the next 5 jobs specifically to get reviews. Reviews are worth more than the rate difference at this stage.

### Waiting for perfect conditions

**The most common failure mode.** Portfolio isn't ready. Rate isn't set. Profile needs one more thing.  
**Recovery:** Send the first proposal today. Everything else is procrastination wearing the mask of preparation. The first 10 proposals will teach you more than 10 hours of planning.

---

---

## Part 13 — 5-Year Revenue Projection {#part-13}

<div class="callout">

**Base assumption:** ₹84/USD held constant. Year 1 is part-time (employed for 6–9 months). Full-time from Year 2. MCP server projects billed at international rates regardless of client location.

</div>

### Three scenarios

#### Conservative — Indian clients, slow rate growth

| Year | Key milestone | Monthly avg | Annual |
|---|---|---|---|
| Year 1 | Part-time, 3–5 Upwork reviews, first retainer | ₹25,000 | ₹3,00,000 |
| Year 2 | Full-time, 2 retainers + Indian project work | ₹75,000 | ₹9,00,000 |
| Year 3 | Upwork at $40/hr, 1 MCP project/quarter | ₹1,40,000 | ₹16,80,000 |
| Year 4 | Upwork at $55/hr, 3 retainers | ₹2,00,000 | ₹24,00,000 |
| Year 5 | $65/hr, stable retainer base | ₹2,50,000 | ₹30,00,000 |
| **Total** | | | **₹82,80,000** |

#### Realistic — Mix of Indian + international, MCP takes hold

| Year | Key milestone | Monthly avg | Annual |
|---|---|---|---|
| Year 1 | Part-time, first international client, 1 MCP project | ₹40,000 | ₹4,80,000 |
| Year 2 | Full-time, Toptal or direct USD clients, 2–3 retainers | ₹1,20,000 | ₹14,40,000 |
| Year 3 | $60/hr Upwork, 2 MCP projects/quarter at $3k–$5k each | ₹2,20,000 | ₹26,40,000 |
| Year 4 | $80/hr, MCP retainers + automation retainers | ₹3,20,000 | ₹38,40,000 |
| Year 5 | $90–$100/hr, known MCP specialist, referral-driven | ₹4,20,000 | ₹50,40,000 |
| **Total** | | | **₹1,34,40,000** |

#### Optimistic — International-first, MCP/AI market accelerates

| Year | Key milestone | Monthly avg | Annual |
|---|---|---|---|
| Year 1 | Early MCP traction, $3k project closes, 2 retainers | ₹55,000 | ₹6,60,000 |
| Year 2 | Toptal listed at $90/hr, 2 MCP projects/quarter | ₹1,80,000 | ₹21,60,000 |
| Year 3 | $120/hr MCP specialist rate, productised offering | ₹3,50,000 | ₹42,00,000 |
| Year 4 | $150/hr, $8k+ MCP projects + retainers | ₹5,50,000 | ₹66,00,000 |
| Year 5 | Agency or productised SaaS, team of 2–3 | ₹8,00,000 | ₹96,00,000 |
| **Total** | | | **₹2,32,20,000** |

### Why ₹1,34,40,000 is achievable

The realistic scenario holds up because the numbers are grounded in rate benchmarks, not optimism.

**Year 2 at ₹1,20,000/month** requires one international Upwork client at $40/hr doing 15 billable hours/week ($2,400/month = ₹2,01,600) plus one Indian retainer at ₹15,000/month. That's already above the estimate with just two clients.

**Year 3 at ₹2,20,000/month** — two MCP server projects per quarter at $3,000 each = $2,000/month from MCP alone (~₹1,68,000). Regular automation work at $60/hr for 10 hours/week adds ₹2,01,600/month. Year 3 is actually conservative in the realistic scenario.

### The two things that break it

<div class="warn">

**Risk 1 — Staying part-time indefinitely.** Part-time freelancing while employed caps you at ₹5,00,000–₹6,00,000/year. Useful income, but not the trajectory. The plan only works if you commit to full-time by Year 2.

**Risk 2 — Staying in the Indian market only.** Indian clients pay ₹30,000–₹60,000 for automation projects that Upwork international clients pay ₹1,00,000–₹2,00,000 for. Same work. The 5-year revenue difference between Indian-only and international clients is ₹50,00,000+.

</div>

### The number to watch — end of Year 2

If by end of Year 2 you are earning ₹1,20,000+/month consistently, you are on the Realistic or better trajectory. If you are below ₹60,000/month, the strategy needs adjustment — more international outreach, or a pivot toward MCP positioning where Indian rate floors don't apply.

The ₹1.34 crore is not a guarantee. It is what consistent execution on international client acquisition and 2–3 closed MCP server projects in Years 2–3 produces.

---

*Last updated: August 2026 · Private document — not indexed*
