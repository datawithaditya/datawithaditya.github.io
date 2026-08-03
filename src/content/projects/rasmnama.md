---
title: "RasmNama — Family Celebration Platform"
badge: "SaaS · Founder"
company: personal
period: "2026 · Live"
sortKey: 202608
tech: [FastAPI, SQLAlchemy, PostgreSQL, "Azure Blob", "Azure Communication Services", Razorpay, Pillow]
description: "Solo-built SaaS for families to preserve wedding and celebration memories — organised by ceremony, invite-based family access, photo storage on Azure Blob, and a Razorpay-backed credit system. Live at rasmnama.com."
articleBadgeLabel: "SaaS · Founder / Lead Engineer"
articleCompanyLabel: "Independent · rasmnama.com"
articleYear: "2026 · Live"
lede: "A private family memory platform where wedding photos are organised by ceremony — Mehndi, Sangeet, Haldi, Pheras, Reception — with invite-based access control, a focal-point photo pipeline, and Razorpay-backed credit purchases. Live at rasmnama.com."
externalUrl: "https://rasmnama.com"
externalLabel: "Visit rasmnama.com →"
---

## The Problem

Indian weddings produce thousands of photos across five or six distinct ceremonies, each with different sets of guests, photographers, and moods. They end up scattered — a WhatsApp group, a Google Drive folder, the photographer's delivery link — with no ceremony-level organisation and no controlled way for extended family to access them without sharing an unsecured link to everything.

## What I Built

**Data model.** The core hierarchy is `Event` (a wedding) → `Ceremony` (Mehndi, Sangeet, Haldi, Pheras, Reception) → `Photo`. Each event is isolated — its photos, members, and storage path are entirely separate from every other event on the platform.

**Auth and invite system.** JWT + refresh tokens with `python-jose` and `passlib[bcrypt]`. Three roles: `admin` (full control), `family` (view and upload), `guest` (view only). Families onboard via invite tokens — a link-based flow that doesn't require the new member to know there's a platform at all before they open the link.

**Photo pipeline.** On upload, Pillow generates resized variants and a thumbnail. Focal-point metadata is stored alongside each photo so front-end clients can crop intelligently at different aspect ratios without re-querying the server. Storage backend is pluggable — Azure Blob Storage in production, AWS S3 or local filesystem for dev and test.

**Payments.** Razorpay-backed credit system. Families buy upload credits in advance; each photo upload deducts credits. Credit-based deliberately — no monthly subscription, no lock-in for families who only want to capture one event. Auto-refund on failed uploads. Order creation confirmed working end-to-end against a real Razorpay test-mode account.

**Email.** Azure Communication Services for transactional email — invite links, welcome messages. Domain verified, sending confirmed live with real message delivery.

**Infrastructure.** systemd for process supervision (`rasmnama.service`) and nightly PostgreSQL backups (`rasmnama-backup.timer`). nginx reverse proxy with a Let's Encrypt certificate on auto-renewal. PostgreSQL on Azure Flexible Server. Rate limiting via `slowapi`, error monitoring via Sentry.

## Status

Infrastructure is genuinely production-grade: real HTTPS domain (`rasmnama.com`), real verified transactional email, real database with confirmed nightly backups, Razorpay integration tested end-to-end. Pre-revenue — the payment flow is wired and functional but no real customer has completed checkout yet.

73 commits, solo-built, July 2026 onwards.
