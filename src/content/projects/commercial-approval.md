---
title: "Commercial Rate Approval Automation"
badge: "Flagship"
company: dh
period: "Oct 2025"
sortKey: 202510
tech: [Python, Selenium, "SQL Server", "Rule Engine"]
description: "Rule-based decision engine auto-approving ~70% of SKU order line items daily — built after being embedded in the manual process alongside GM Commercial."
articleBadgeLabel: "Flagship · Decision Automation"
articleCompanyLabel: "D&H Sécheron Pvt. Ltd."
articleYear: "Oct 2025"
lede: "A rule-based engine that auto-approves ~70% of SKU order line items — replacing a bottleneck manual process I sat next to a GM to understand deeply first."
---

## The Problem

Every day, the Commercial team at D&H Sécheron manually reviewed hundreds of SKU order line items against a matrix of business rules — rate slabs, quantity thresholds, region-specific pricing exceptions — before approving or holding each one. The GM Commercial was the choke point. Turnaround was measured in hours; wrong-rate rejections downstream were a recurring source of friction with Sales.

## Understanding the Logic Before Coding

I embedded directly into the manual process — sat with the GM through several review cycles, mapped every rule they applied, and documented the edge cases they rejected with reasons. Only after the decision logic was fully understood on paper did I start building.

## How I Built It

- **Rule engine core.** Python module encoding the approval matrix declaratively — each rule as a named function returning `approve | hold | escalate` with a reason. Easy to add or amend rules without touching the pipeline.
- **Data pull via Selenium.** The upstream ERP has no API; Selenium script logs in nightly, pulls the queued line items, and normalises them into the rule engine's input format.
- **SQL Server for state.** Decisions and audit trail (rule triggered, timestamp, reason, escalation target) written to SQL Server for traceability.
- **Escalation-only human step.** Only items marked `escalate` land on the GM's desk. Everything auto-approved bypasses review with a full audit record.

## Key Architecture Decision

Explicit rules over a black-box ML classifier. Business rules change frequently — a declarative rule engine lets the Commercial team read, review, and challenge each rule. A model would have blocked adoption.

## Results

- ~70% of daily line items auto-approved with zero human intervention
- GM's daily review load reduced to only genuine edge cases
- Full audit trail for every decision — no more "why did we approve this?" investigations
- Downstream rate-rejection rate materially reduced
