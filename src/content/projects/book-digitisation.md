---
title: "Legacy Business Book Digitisation"
badge: "Document Eng."
company: synchem
period: "2023"
sortKey: 202310
tech: [Python, OpenCV, Pillow, "PDF Pipeline"]
description: "Reconstructed a pharma reference book from degraded scans via deskewing, watermark removal, and layout standardisation — redistributed to the entire sales team."
articleBadgeLabel: "Document Engineering"
articleCompanyLabel: "Synchem Pharmaceuticals"
articleYear: "2023"
lede: "Reconstructing a pharmaceutical reference book from degraded scanned pages — deskewing, watermark removal, layout standardisation — turning an unusable legacy document into a clean, print-ready resource."
---

## The Problem

Synchem had a comprehensive pharmaceutical reference book that was invaluable when printed. The only surviving digital versions were low-quality scans with watermarks, inconsistent margins, skewed pages, and degraded image quality. No original source files existed.

## How I Built It

**Page extraction.** Scanned PDF split into individual page images using PyPDF2 and Pillow at consistent DPI.

**Deskewing.** OpenCV detects the dominant text angle on each page and rotates it back to straight.

**Watermark removal.** Stamped watermarks isolated using Pillow and NumPy image masking based on distinctive pixel value distribution, replaced with interpolated background colour.

**Layout standardisation.** Page borders detected and standardised for consistent margins. Brightness and contrast normalised across varying scan quality.

**Reconstruction.** Cleaned pages assembled back into a single PDF with consistent page size, resolution, and layout — ready for commercial printing.

## Results

- Unusable degraded scans transformed into a clean, print-ready PDF
- Book successfully redistributed to the full field sales team
- No manual page editing required — entirely pipeline-processed
- Resource recovered in-house at fraction of professional restoration cost
