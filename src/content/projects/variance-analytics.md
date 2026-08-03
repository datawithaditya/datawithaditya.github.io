---
title: "Inventory & Production Variance Analytics"
badge: "Analytics"
company: dh
period: "Dec 2025"
sortKey: 202512
tech: [Python, "SQL Server", Excel, "Power BI"]
description: "Monthly models comparing actual raw material consumption vs. expected — enabling early detection of wastage and process inefficiency."
articleBadgeLabel: "Analytics · Manufacturing"
articleCompanyLabel: "D&H Sécheron Pvt. Ltd."
articleYear: "Dec 2025 — Present"
lede: "Monthly models comparing what manufacturing should have consumed against what it actually consumed — surfacing wastage and inefficiencies before they become expensive problems."
---

## The Problem

D&H was tracking raw material stock and finished goods output separately but had never connected the two into a structured variance model. Month-end reviews were happening without any quantitative view of material efficiency.

## How I Built It

**Expected consumption model.** From the bill-of-materials for each finished product, I calculate theoretical raw material consumption based on actual finished goods output each month.

**Actual consumption extraction.** SQL Server queries against inventory and material movement tables extract actual consumption at the same SKU granularity.

**Variance calculation.** Difference between expected and actual calculated at item and product-category level. Both over-consumption and under-consumption surface for investigation.

**Reporting.** Monthly Excel reports for operational reviews; Power BI dashboard for rolling trend visibility.

## Results

- First quantitative view of production material efficiency at D&H
- Monthly variance analysis now standard input into operational reviews
- Identified raw material categories with consistent over-consumption patterns
- Enabled early intervention before month-end cost surprises
