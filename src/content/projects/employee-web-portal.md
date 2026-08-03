---
title: "Employee Web Portal with Secure Data Pipeline"
badge: "Full-Stack"
company: synchem
period: "2024"
sortKey: 202412
tech: [Flask, "Azure SQL", PythonAnywhere, JSON]
description: "Flask portal for 100+ employees to view activity and incentive data — backed by a custom ETL bridging Azure SQL and PythonAnywhere securely."
articleBadgeLabel: "Full-Stack · Infrastructure"
articleCompanyLabel: "Synchem Pharmaceuticals"
articleYear: "2024"
lede: "A Flask web application giving 100+ field employees direct access to their own activity and incentive data — backed by a custom ETL pipeline bridging Azure SQL and PythonAnywhere without exposing the database."
---

## The Problem

The analytics portal I built for management wasn't accessible to the reps themselves. Field employees had no way to check their own data without asking their manager, creating unnecessary overhead and information asymmetry.

## The Architecture Challenge

The data source was an Azure-hosted SQL Server. Connecting a public-facing web app directly would have required opening ports and creating security risks. The solution: a **local transformation layer** — a scheduled Python process that connects to Azure SQL from a secure machine, transforms the data, and pushes it to PythonAnywhere via a whitelisted static IP.

**Data pipeline.** Python script runs on schedule — connects to Azure SQL, extracts and transforms rep-level data, serialises to structured JSON files.

**Deployment.** JSON files pushed to PythonAnywhere via whitelisted static IP. No live database ever exposed to the public internet.

**Flask web app.** Employees log in; app reads from pre-transformed JSON files to display personal data.

**Why JSON as the data layer?** Fast, stateless, easy to maintain. Schema changes only require updating the transformation script. Already MongoDB-compatible for a future migration path.

## Results

- 100+ field employees gained direct access to their own performance data
- Manager-relay requests for individual data eliminated entirely
- Secure architecture — no live database exposed to the public internet
- Incentive transparency improved: reps could verify calculations themselves
