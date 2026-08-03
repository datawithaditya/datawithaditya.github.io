---
title: "Employee Management System"
badge: "HR Systems"
company: synchem
period: "2023"
sortKey: 202312
tech: [SSRS, "SQL Server", "DB Design"]
description: "Relational DB schema for salary, leave, onboarding, and expenses with SSRS automated reports — cut HR processing time by 30%."
articleBadgeLabel: "HR Systems · SSRS"
articleCompanyLabel: "Synchem Pharmaceuticals"
articleYear: "2023"
lede: "A complete HR data system — relational schema, automated reports, and centralised access — that cut HR processing time by 30% and brought all employee data under one roof."
---

## The Problem

HR operations were managed across fragmented Excel files — salary in one spreadsheet, leave in another, onboarding in a shared folder, expenses in email. No single system of record. Any cross-functional report required manually consolidating all sources.

## How I Built It

**Database design.** Normalised relational schema in SQL Server covering four HR domains: employee master data, salary and payroll, leave management, and expense tracking.

**Data migration.** Existing data from Excel files cleaned, standardised, and loaded into the new schema.

**SSRS reports.** Parameterised reports for payroll summaries, leave balances, expense claim status, and onboarding completion. HR staff run these themselves.

**Access control.** Role-based access: HR sees all records, managers see their team, employees see only their own data.

## Results

- HR processing time reduced by 30% through automated report generation
- Single source of truth for all employee HR data across 100+ staff
- Manual report compilation for payroll and leave eliminated
- Foundation for the employee self-service portal built in 2024
