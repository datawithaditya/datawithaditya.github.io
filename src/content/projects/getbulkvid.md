---
title: "GetBulkVid — Bulk Personalised Video SaaS"
badge: "SaaS · Founder"
company: personal
period: "2026 · Live"
sortKey: 202607
tech: [React, FastAPI, PostgreSQL, "AWS EC2 Spot", "FFmpeg + HarfBuzz", "SQS FIFO", Razorpay]
description: "Founder + lead engineer of a production SaaS turning one master video into thousands of personalised MP4s with full Hindi & Indic script support — for Indian pharma, BFSI, and FMCG teams."
articleBadgeLabel: "SaaS · Founder / Lead Engineer"
articleCompanyLabel: "Independent · getbulkvid.com"
articleYear: "2026 · Live"
lede: "One master video, an Excel of names, thousands of individually personalised MP4s — the productised, self-serve version of the Doctor's Day pipeline I first built at Synchem. Live and taking payments."
externalUrl: "https://getbulkvid.com"
externalLabel: "Visit getbulkvid.com →"
---

## The Origin

At Synchem I'd built a Python pipeline generating personalised Doctor's Day videos from a master template. It worked, but it was a one-off, only-I-could-run-it script. Meanwhile pharma, BFSI, and FMCG teams across India were paying agencies ₹15–25 per video for exactly the same work — and waiting weeks. **GetBulkVid** is that pipeline turned into a product any team can self-serve, at ₹3 per video, in under an hour.

## How I Built It

- **Browser overlay editor.** React canvas editor where the admin drags text placeholders onto the master video — WYSIWYG with FFmpeg. What you see in the browser is exactly what the pipeline renders.
- **Excel → render pipeline.** Upload a CSV/Excel with columns like `DoctorName`, `MRName`, `City`. Each row spawns a job; the render worker composites the overlay per row and writes a named MP4 to S3.
- **Autoscaling GPU-free render fleet.** An in-house autoscaler polls SQS depth and scales an Azure VMSS of ffmpeg workers from 0 to N. Cold start optimised via a pre-baked golden image — no cloud-init, no bootstrap, no minute-long install penalty.
- **Full Indic script support.** HarfBuzz shaping in FFmpeg for correct rendering of Hindi, Tamil, Telugu, Bengali, Gujarati conjuncts — the hardest part of the whole thing, and a real moat vs. off-the-shelf video tools.
- **Pay-as-you-go credits.** Razorpay-backed credits, never expire, auto-refund on any failed render. No monthly SaaS lock-in — enterprise procurement doesn't have to sign a subscription.

## Architecture Decision

Golden AMI over Custom Script Extension. The autoscaler is triggered by queue depth, so cold-start latency shows up as job wait time. A generic image + boot-time `apt install ffmpeg` would add 60–120s per new worker. Pre-baking cuts that to just the raw Azure VM boot (~90s), which shows up directly as user-visible latency saved.

## Status

- Live at [getbulkvid.com](https://getbulkvid.com) with real users and Razorpay payments
- ₹3 per video (Standard tier) vs. agency benchmark of ₹15–25
- ~45 minute SLA for 1,000 videos on Spot EC2 workers
- Full-stack solo build: frontend, backend, render infra, deployment, autoscaler
