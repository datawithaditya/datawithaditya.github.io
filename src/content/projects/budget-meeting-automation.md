---
title: "Budget Meeting Document Automation"
badge: "Office Tools"
company: synchem
period: "2024"
sortKey: 202408
tech: [Python, VBA, Excel, PDF]
description: "VBA + Python pipeline exporting rep-wise PDFs and batch-printing in predefined order — a full day of manual prep reduced to 30 minutes."
articleBadgeLabel: "Automation · Office Tools"
articleCompanyLabel: "Synchem Pharmaceuticals"
articleYear: "2024"
lede: "VBA and Python automating the entire quarterly budget meeting document pack — from per-rep PDF generation to batch printing — eliminating a process that used to take a full working day."
---

## The Problem

Every quarter, budget reviews required individual documents for each sales rep — exported as PDFs from a master Excel workbook and printed in a specific order. Done entirely by hand, typically 80–100 times per cycle. The whole preparation consumed most of a working day.

## How I Built It

**VBA — PDF generation.** Macro iterates through the rep list, applies the data filter for each rep, exports the visible worksheet as a correctly named PDF. 6–8 hours of clicking now completes in minutes unattended.

**Python — Batch printing.** Script reads the generated PDF folder, sorts files into the predefined print order (region → manager → rep), and sends them to the printer in sequence using the Windows print API.

**Error handling.** VBA checks expected data exists before exporting; Python verifies all expected PDFs were generated before printing — preventing partial or misordered runs.

## Results

- Full day of manual preparation reduced to under 30 minutes
- Naming and ordering errors eliminated entirely
- Budget meeting prep runs reliably without analyst involvement
- Consistent and repeatable across every quarterly cycle
