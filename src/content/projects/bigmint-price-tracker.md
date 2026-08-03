---
title: "BigMint Steel Price Tracker"
badge: "Procurement"
company: dh
period: "Jul 2026"
sortKey: 202606
tech: [Python, requests, BeautifulSoup, Tkinter, pywebview, PyInstaller]
description: "Desktop app that scrapes steel and metal commodity prices from BigMint using session-cookie authentication — delivering one-click price tracking and trend history to Excel."
articleBadgeLabel: "Procurement · Desktop App"
articleCompanyLabel: "D&H Sécheron Pvt. Ltd."
articleYear: "Jul 2026"
lede: "A PyInstaller-packaged desktop app that automates BigMint commodity price lookups for D&H's procurement team — browser-based login via pywebview, scraping via session cookies, trend history appended to Excel on every run."
---

## The Problem

D&H's procurement team tracks steel and metal commodity prices through BigMint, a price data portal that requires login and surfaces data in a web UI. Getting prices into a spreadsheet meant logging in, navigating to each material, reading the price, and pasting manually — repeated for every tracked material, every day.

## How I Built It

**Login flow.** BigMint requires authentication. The app launches a `pywebview` embedded browser window — the user logs in through the real BigMint site, and the session cookies are captured and written to `cookies.txt` automatically. On all subsequent runs, the app reuses these cookies until they expire, then surfaces an expiry alert before attempting any scrapes.

**Scraping pipeline.** Python `requests` with the captured cookies fetches each tracked price page. `BeautifulSoup` extracts the current price, unit, and change metadata from the price-detail card. Each material's URL is maintained in a plain `urls.txt` file — adding a new material to track is a one-line edit.

**Excel output.** `openpyxl` appends one row per material per run to a structured `prices.xlsx` — date, material name, price, unit, and change from the prior run. Styled with borders and colour-coded change indicators.

**Tkinter GUI.** Sun Valley-themed (`sv-ttk`) master-detail layout: material list on the left with current price and a directional arrow showing the last change, tabbed detail panel on the right with overview and full price history. Collapsible log panel at the bottom for run output. DPI-aware on Windows for sharp rendering on high-resolution displays.

**PyInstaller packaging.** Distributed as a single `.exe` — procurement staff can run it without a Python environment. The packaged binary handles the `_MEIPASS` vs. user-writable directory split correctly: bundled read-only resources (icon, default URLs) come from the temp extract, while `cookies.txt`, `prices.xlsx`, and the webview profile live next to the `.exe`.

## Results

- Daily price tracking reduced from manual browsing to a single button click
- Excel trend history builds automatically on every run — no copy-paste
- Session expiry detected and flagged before any scrape attempts
- No Python installation required on procurement machines
