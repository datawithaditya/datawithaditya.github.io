---
title: "Automation & Reporting Portal"
badge: "Flagship"
company: dh
period: "2026"
sortKey: 202608
tech: [Python, Flask, APScheduler, PostgreSQL, MSAL, "Graph API", "WhatsApp API"]
description: "Central hub for running and scheduling 21 business analytics scripts — delivering reports via email and WhatsApp, with Azure SSO, live log streaming, and a WhatsApp product chatbot."
articleBadgeLabel: "Flagship · Full-Stack"
articleCompanyLabel: "D&H Sécheron Pvt. Ltd."
articleYear: "2026"
lede: "A Flask portal that centralised D&H's fragmented Python scripts into a single platform — letting any authorised user trigger or schedule reports, see live logs, and receive results by email or WhatsApp."
---

## The Problem

D&H Sécheron's analytics scripts — daily sales reports, collection summaries, incentive calculations, production reports — existed as standalone Python files on a single machine. Running them meant opening a terminal. Distributing results meant manually sending emails. There was no scheduling, no visibility into whether a script was running or had failed, and no audit history. Adding a new report required editing files directly on the server.

## What I Built

**Script plugin system.** Every script inherits from a `BaseScript` class and declares its name, category, and parameter schema. Flask auto-discovers all subclasses at startup — adding a new report means writing one file and restarting. 21 scripts are live across Sales, Finance, Production, and System categories.

**APScheduler integration.** Any script can be scheduled with a cron expression from the portal UI. A 24-hour schedule timeline (with live CPU and memory graphs via `psutil`) gives operators full visibility into what runs and when.

**Live log streaming.** Script output streams to the browser in real time via Server-Sent Events. No need to SSH in and tail a log file — the run history page stores every output for later review.

**Dual report delivery.** Scripts send results via Microsoft Graph API (email, with Excel attachments) and WhatsApp — Twilio for image-heavy reports using Content Templates, Meta Cloud API for the customer-facing chatbot.

**WhatsApp product chatbot.** Customers text a D&H number to request product leaflets, brochures, or case studies. The bot runs a fuzzy SKU search (rapidfuzz) against a product catalog synced from OneDrive, and replies with the correct document link. Handles ambiguous queries and multi-turn conversations.

**Azure SSO.** MSAL-based login via Azure AD. Three roles: superadmin (full access), admin (script access by category), accounts (collections only). Category-level access policies are managed from the admin UI — no redeployment to change who sees what.

**Other modules.** Quarterly incentive calculation dashboard (employee master, salary, policy rules, Excel export), sales target grid (state × special category × month), encrypted-at-rest collections interface, and WhatsApp message logs with delivery KPIs.

## Deployment

Hosted on Render (web service, Gunicorn). PostgreSQL database on Supabase. The only infrastructure is environment variables in the Render dashboard — no on-premise servers, no manual deploys.

## Results

- Daily sales reports, collection summaries, and production reports now run automatically on schedule
- All report distribution handled by the portal — no manual email composition
- WhatsApp chatbot handles product brochure queries around the clock without staff involvement
- New scripts added by writing one Python file — no changes to the portal itself
