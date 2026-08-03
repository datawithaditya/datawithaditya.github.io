---
title: "Sales Cost & Incentive Analytics System"
badge: "Sales Ops"
company: dh
period: "Jan 2026"
sortKey: 202601
tech: ["SQL Server", "Excel / VBA", Python]
description: "End-to-end incentive modeling evaluating performance, payouts, and cost efficiency — directly supporting C-suite planning decisions."
articleBadgeLabel: "Sales Ops · Analytics"
articleCompanyLabel: "D&H Sécheron Pvt. Ltd."
articleYear: "Jan 2026 — Present"
lede: "End-to-end incentive modeling evaluating performance, calculating payouts, and surfacing cost efficiency insights — built to support C-suite planning decisions directly."
---

## The Problem

Sales incentive structures in manufacturing are inherently complex: tiered growth bands, territory-specific targets, role-based multipliers, product-mix adjustments. At D&H, calculations were largely manual — impossible to scenario-model quickly.

## How I Built It

**Incentive structure modeling.** Translated the incentive policy — growth bands, role tiers, product categories, regional factors — into a structured data model. Each policy variable maps to a parameter in the calculation engine.

**Data pipeline.** Sales performance extracted from SQL Server, joined to rep and territory master data, loaded monthly at rep-month-territory level.

**Excel scenario calculator.** VBA-backed tool allowing leadership to model policy changes without touching the database.

**Cost efficiency analysis.** Incentive spend as % of revenue by region, product group, and rep tier.

## Results

- Incentive calculations completed in hours rather than days
- Leadership can model policy changes and see cost impact before committing
- Reps have visibility into how their incentives are calculated — improving trust
- Cost efficiency insights directly informing Q1 2026 policy review
