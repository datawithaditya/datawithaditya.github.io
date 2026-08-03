---
title: "Personalised Doctor's Day Video Campaign"
badge: "Automation"
company: synchem
period: "Jul 2024"
sortKey: 202407
tech: [Python, MoviePy, Pillow, "Batch Processing"]
description: "Python pipeline generating thousands of personalised videos by dynamically embedding individual doctor names into a master template."
articleBadgeLabel: "Automation · Creative Tech"
articleCompanyLabel: "Synchem Pharmaceuticals"
articleYear: "Jul 2024"
lede: "A Python pipeline that turned a single video template into thousands of individually personalised doctor appreciation messages — making a company-wide campaign feel crafted for each recipient."
---

## The Brief

Synchem's marketing team wanted to send a personalised video to every doctor in their network for Doctor's Day 2024. With thousands of doctors in the database, manual creation was completely infeasible.

## How I Built It

**Template design.** The creative team produced a master video with a designated area for the doctor's name — font, position, colour, and timing specified as constraints for the code.

**Name rendering pipeline.** For each doctor, Python extracts the name, renders it as an image layer using Pillow, and composites it onto the video frames at the correct timestamp using MoviePy.

**Batch processing.** Pipeline processes the entire database in parallel batches. Names with special characters (common in Indian names) handled explicitly to avoid rendering errors.

**Quality sampling.** Random sample automatically extracted after each batch for manual review before the full run commits.

## Results

- Thousands of personalised videos generated in hours — impossible to do manually
- Campaign delivered on time with zero manual video editing
- Genuinely personalised messages improving engagement vs. generic broadcasts
- Pipeline reusable for future campaigns with minimal modification
