---
title: "Commercial Rate Approval Automation"
badge: "Flagship"
company: dh
period: "Oct 2025"
sortKey: 202510
tech: [Python, Playwright, Flask, openpyxl, PyInstaller]
description: "Playwright bot that validates D&H's pending special rate requests against a configurable JSON rules DSL — paired with a Flask web app for managing rate conditions and customer discounts."
articleBadgeLabel: "Flagship · Decision Automation"
articleCompanyLabel: "D&H Sécheron Pvt. Ltd."
articleYear: "Oct 2025"
lede: "A two-part automation system — a Playwright bot that validates special rate requests against configurable business rules, and a Flask app for managing those rules — replacing a manual approval process with no audit trail."
---

## The Problem

D&H's commercial team handles special rate requests: sales reps requesting custom pricing for specific customer–item combinations. Reviewing each request against business rules — which rates are acceptable for which customers, brands, and product categories — was done entirely by hand. No audit trail. No consistent rule application. No way for managers to update approval criteria without calling a developer.

## What I Built

**JSON rules DSL.** Business rules stored as JSON condition objects: `field` (item brand, special category, item number, or customer name), `operator` (equals, in\_list, not\_in\_list, contains, starts\_with), and `value`. The commercial team can add or modify rules from a web interface — no code changes required.

**Playwright validation bot.** A desktop app (customtkinter UI, credentials stored securely via `keyring`) that logs into D&H's internal portal, fetches the full pending rate request list, navigates to each request, runs the rules engine against it, and writes every decision — with the matching rule — to a styled Excel audit log. Packaged as a `.exe` via PyInstaller for deployment without a Python environment.

**Flask rate manager.** A standalone Flask app deployed on PythonAnywhere for maintaining the rate conditions and customer discount tables. The validation bot fetches the current rule set from this API at runtime — a rule update on the web app takes effect on the next bot run without repackaging the `.exe`.

## Key Architecture Decision

Separating rule management from rule execution. Keeping the rule store in a web app (editable by commercial managers) and the execution logic in the Playwright bot (run by the ops team) means neither side depends on the other's release cycle. Updating a rule doesn't require repackaging and redistributing the `.exe`.

## Results

- Every rate request decision has a rule-traceable audit record in Excel
- Commercial managers can update approval rules without developer involvement
- Consistent rule application across all pending requests in a single run
- `.exe` deployment means no Python setup on operational machines
