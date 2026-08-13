---
title: "Tally Automation — Broker Statement to Vouchers"
badge: "Accounting Automation"
company: dh
period: "Aug 2026"
sortKey: 202608
tech: [Python, Flask, openpyxl, requests, Tally XML API, Jinja2]
description: "Flask app that imports MProfit broker statements into Tally as XML vouchers — with a stateless FIFO cost-basis engine, automatic LTCG/STCG classification, and preflight master creation. ~200 transactions/month, live in production."
articleBadgeLabel: "Accounting · Tally Integration"
articleCompanyLabel: "DnH Secheron (D&H Group — Trading Company)"
articleYear: "Aug 2026"
lede: "A Flask web app that turns MProfit broker-statement Excel exports into Tally vouchers — handling purchases, sales with FIFO cost-basis, and intraday speculation — for a family trading company processing roughly 200 transactions per month."
---

## The Problem

D&H's trading arm posts every equity transaction from its broker (Emkay Global) into Tally by hand. A single sell requires more than data entry: the accountant has to walk the FIFO lot history from the earliest buy, split consumed quantities into LTCG (held > 365 days) and STCG buckets, and then compose a balancing voucher with cost basis, brokerage, other charges, and the resulting gain — all in Tally's clunky voucher UI. At ~200 transactions per month across all instruments, this consumed **15–25 hours of accounting work every month** and was the recurring source of reconciliation errors at quarter-end.

## What I Built

**MProfit Excel parser.** MProfit exports broker statements as an `.xlsx` with a distinctive column layout — asset name, transaction type (Buy / Sell), quantity, price, brokerage, other charges, and trade date. The parser normalises each row into a typed `Transaction` object and summarises the batch for review before anything hits Tally.

**Tally XML client.** A thin HTTP client that speaks Tally's XML request envelope over `localhost:9000`. Handles both queries (Collection exports) and mutations (voucher creation, master creation). Explicit error surfacing when Tally is offline — the sidebar shows connection status on every page so users always know whether the target is reachable.

**Preflight master creation.** Any batch will touch a mix of stock items, broker ledgers, brokerage/other-charge ledgers, capital gains ledgers, and the investment asset ledger. Before posting a single voucher, the preflight step queries what already exists in Tally and auto-creates the rest — with the correct parent groups from `config.json`. A first-ever trade in a new stock never blocks; it just creates the master and continues.

**Stateless FIFO cost-basis engine.** Instead of maintaining a parallel lot database, the engine queries Tally's own voucher history for the stock item, replays every Purchase / Sales movement chronologically to rebuild remaining FIFO lots, then consumes those lots against the proposed sale. Tally remains the single source of truth — the tool never drifts from it, needs no local state, and correctly handles historical edits made directly in Tally.

**Automatic LTCG / STCG classification.** For each consumed slice, the engine computes holding days from the lot's purchase date and classifies it as LTCG (> 365 days for listed equity, STT-paid) or STCG. Gross sale proceeds are then distributed across the two buckets pro-rata by quantity, so the resulting Sales voucher balances cleanly: Dr side (broker net + brokerage + other charges) = Cr side (cost basis + LTCG gain + STCG gain).

**Intraday detection.** Any `(date, asset)` pair with both a Buy and a Sell in the same batch is automatically re-routed from purchase / sale vouchers to a speculation journal — matching Indian tax treatment of intraday trading as speculative business income rather than capital gains.

**Web review UI.** Flask + Jinja2 templates for upload → preview → mapping → post → result. The user reviews the parsed batch, confirms broker / stock-item mappings, previews the vouchers that will be created, and then commits — all before anything is written to Tally.

## Key Architecture Decision

**Tally is the source of truth. The tool is stateless.** The FIFO engine rebuilds cost-basis lots from Tally's voucher history on every sale evaluation. This has three consequences: no local database to keep in sync, no drift between the tool and the accounts, and full correctness even when the accountant edits history directly in Tally. It also caught a subtle rounding bug — Tally rounds `RATE` to 2dp on export, drifting cost basis by rupees over large trades. Using `AMOUNT / qty` gives an exact per-share cost instead.

## Results

- **~200 transactions per month** posted to Tally through the app
- **15–25 hours per month** of manual accounting work eliminated
- **Zero cost-basis drift** — FIFO always matches Tally's own history
- **First-time buys of new stocks never block** — masters auto-create on preflight
- **Clean voucher balance** on every sell — gross-proceeds distribution keeps Dr = Cr without accountant intervention
- **Intraday trades routed correctly** to speculation journal, no manual re-classification needed
