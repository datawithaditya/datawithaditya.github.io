---
title: "Financial Analytics Library & MCP Server"
badge: "MCP Server"
company: dh
period: "2026"
sortKey: 202607
tech: [Python, pandas, FastMCP, "MCP", "OAuth 2.0 PKCE"]
description: "175-function pandas analytics library over D&H's NAV exports, wrapped in an MCP server exposing 7 analysis tools to Claude — queryable via Claude Desktop or claude.ai using OAuth 2.0 PKCE."
articleBadgeLabel: "AI Tools · Data Engineering"
articleCompanyLabel: "D&H Sécheron Pvt. Ltd."
articleYear: "2026"
lede: "A financial analytics platform built in two layers: a 175-function pandas library for D&H's NAV data, and an MCP server on top of it — so Claude can answer management's financial questions by running real analysis functions against real data."
---

## The Problem

D&H Sécheron's financial data lives in NAV (Business Central) — monthly Excel exports for sales, purchasing, production, inventory, item movements, and BOM costs. Answering management questions ("what's our raw material over-consumption trend?" or "which customers are new vs. returning this quarter?") meant manually locating the right file, applying the right formula, and constructing the analysis from scratch each time.

## Phase 1 — The Analytics Library

A Python library of 175+ functions across 10 data modules, each with a consistent interface: a `load_*` function that reads and cleans the Excel file, and analysis functions that operate on the resulting DataFrame.

- **Sales Register** — turnover by customer, product, and region; new vs. repeat customer analysis
- **Purchase Register** — vendor-wise purchase analysis and trend tracking
- **Production** — PTN report parsing and output metrics
- **Inventory** — aging bucket analysis and stock movement
- **Item Ledger** — movement-level analysis across all item types
- **BOM Cost** — standard cost per BOM and summary comparisons
- **Pan-India Performance** — region and state-level aggregations
- **Live Inventory** — real-time generation report parsing
- **Main File** — 16 KPI ratios from the consolidated monthly workbook, plus debtor aging

Any new data file dropped in the correct folder is automatically discoverable — no code changes.

## Phase 2 — The MCP Server

An MCP server built with FastMCP that exposes 7 tools to Claude:

- `start_session` — opens a log file for the session (always called first)
- `discover_files` — lists all available data files by type
- `read_main_file` — loads all KPI ratios and debtor data in one call
- `load_dataset` — loads any Excel file into session memory and returns a dataset\_id
- `list_analyses` — lists all available analysis functions for a given data type
- `run_analysis` — executes any analysis function on a loaded dataset
- `compare_periods` — cross-period comparisons (month-on-month, new vs. repeat customers, etc.)

**Dual deployment.** `stdio` mode for Claude Desktop — single-user, no auth needed, runs locally. `streamable HTTP + OAuth 2.0 PKCE` mode for claude.ai web — hand-built OAuth provider, public URL via Cloudflare tunnel, password-protected. The same server binary handles both; mode is set by a command-line flag.

## Results

- Management can ask "what's our purchase trend by vendor this quarter?" and get a structured breakdown in seconds
- The same analytics functions run in Claude and standalone — no framework lock-in
- OAuth 2.0 PKCE implemented from scratch: a working reference for MCP servers that need browser-based auth without a full identity provider
