---
title: "PTN Commitment Tracking Portal"
badge: "Internal Tool"
company: dh
period: "Nov 2025"
sortKey: 202511
tech: [Python, Flask, "SQL Server", SMTP]
description: "Promise-to-Notify dashboard with email modal — single source of truth for delivery commitments across Planning, Sales, and Operations."
articleBadgeLabel: "Internal Tool · Operations"
articleCompanyLabel: "D&H Sécheron Pvt. Ltd."
articleYear: "Nov 2025 — Present"
lede: "A Promise-to-Notify dashboard that replaced scattered email chains with a single source of truth for delivery commitments across Planning, Sales, and Operations."
---

## The Problem

Sales sent PTN commitments via freeform email with no central record. Operations didn't know what sales had committed, planning couldn't prioritise against commitments, and there was no audit trail when things slipped.

## What I Built

**Commitment Dashboard.** Centralised view of all active PTN commitments — customer, item, committed date, responsible team, and status.

**Enhanced Email Modal.** Reps create PTN commitments through a structured modal that logs the record to SQL Server before sending — data always captured before communication goes out.

**Automated reminders.** System notifies the responsible operations team as committed dates approach.

## Results

- Single source of truth for all PTN commitments across three departments
- Follow-up overhead significantly reduced — no more chasing email chains
- Overdue commitments surface automatically rather than at escalation
- Improved accountability and trust across Planning, Sales, and Operations
