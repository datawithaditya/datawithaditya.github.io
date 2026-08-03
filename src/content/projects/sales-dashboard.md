---
title: "Sales Dashboard — Product Group & SKUs"
badge: "Power BI"
company: synchem
period: "2024"
sortKey: 202410
tech: ["Power BI", DAX, "Power Query", "SQL Server"]
description: "Interactive drill-down dashboard by product group, SKU, and role hierarchy with near real-time automated data refresh."
articleBadgeLabel: "Power BI · Analytics"
articleCompanyLabel: "Synchem Pharmaceuticals"
articleYear: "2024"
lede: "An interactive Power BI dashboard giving regional sales managers granular, near real-time performance visibility by product, SKU, and role — replacing static monthly reports."
---

## The Problem

Understanding performance at the right granularity required a data structure that static Excel reports simply couldn't provide. Managers needed to drill from region all the way down to individual SKU performance by rep role.

## How I Built It

**Star schema data model.** Central sales fact table joined to dimension tables for product (with product group hierarchy), territory/region, rep (with role hierarchy), and time.

**DAX measures.** Achievement %, growth vs. same period last year, contribution to product group total — as measures rather than calculated columns, ensuring correct response to every slicer combination.

**Automated data refresh.** SQL Server updated via an automated pipeline; Power BI refreshes on schedule. Managers see up-to-date numbers each morning.

**Drill-through hierarchy.** Region → territory → rep, and product group → SKU.

## Results

- Moved from monthly static reports to near real-time interactive analysis
- Granular product and SKU performance visibility previously unavailable
- Product strategy decisions grounded in SKU-level data for the first time
- Time spent on data clarification in review meetings significantly reduced
