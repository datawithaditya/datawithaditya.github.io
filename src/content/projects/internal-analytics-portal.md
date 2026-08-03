---
title: "Internal Analytics Portal"
badge: "Flagship"
company: synchem
period: "2023–2025"
sortKey: 202506
tech: ["SQL Server", Python, "Power BI", SSRS, ETL]
description: "Centralised portal delivering daily sales reports, incentive calculations, and monthly planning analysis — replacing entirely manual field sales reporting."
articleBadgeLabel: "Flagship · Full-Stack"
articleCompanyLabel: "Synchem Pharmaceuticals"
articleYear: "2023 — 2025"
lede: "The system that replaced entirely manual field sales reporting at Synchem — delivering daily activity reports, incentive calculations, and monthly planning analysis from a single automated pipeline."
---

## The Problem

Field sales reporting was almost entirely manual. Numbers differed between reports because they were calculated at different times from different extracts. Incentive disputes were frequent because the methodology wasn't transparent or reproducible.

## How I Built It

**Data foundation.** Views and stored procedures in SQL Server standardised how field activity data was extracted — ensuring every report used the same logic.

**ETL pipeline.** Python-based ETL running on a schedule: pulls raw data, applies transformation logic, loads results into a reporting layer.

**Daily activity reports.** SSRS parameterised reports for rep activity sliced by region, manager, and rep. Manual morning compilation eliminated entirely.

**Incentive engine.** Incentive logic codified as a SQL-based engine: transparent, reproducible, auditable. Disputes dropped significantly.

**Power BI dashboard.** Monthly planning vs. achievement, trend analysis, and territory performance for MD and senior leadership.

## Results

- Entire manual morning reporting process eliminated
- MD received consistent, accurate daily analytics from the same pipeline
- Incentive disputes significantly reduced due to transparent calculations
- Self-service analytics enabled — managers could explore data independently
