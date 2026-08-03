---
title: "LLM Fine-Tuning Research — Web Novel Writing"
badge: "AI / Research"
company: personal
period: "2024"
sortKey: 202409
tech: [Python, Axolotl, "LoRA / QLoRA", RunPod, "Mistral 7B"]
description: "Explored fine-tuning Llama 2 and Mistral 7B on serialised fiction datasets using LoRA/QLoRA on RunPod GPU instances — end-to-end from dataset curation to evaluation."
articleBadgeLabel: "Personal · AI Research"
articleCompanyLabel: "Independent"
articleYear: "2024"
lede: "Hands-on exploration of fine-tuning open-source language models on serialised fiction datasets — from dataset curation to LoRA training on GPU cloud infrastructure."
---

## The Motivation

I've long been interested in serialised web fiction and wanted to understand whether an open-source LLM could be fine-tuned for this genre, and more broadly, to gain hands-on experience with the fine-tuning stack that sits behind applied AI products.

## What I Explored

**Model selection.** Evaluated Llama 2 (7B and 13B) and Mistral 7B as base models — open weights, well-documented, within budget for GPU cloud experimentation.

**Dataset sourcing.** Scraped and structured publicly available web novel chapters, formatting them into instruction-tuning format. Dataset curation was the most time-consuming step.

**Training stack.** Used Axolotl with QLoRA — enabling fine-tuning on a single A100 GPU via RunPod. Cost: a few dollars per full training run.

**Evaluation.** Evaluated outputs qualitatively against a rubric for genre-appropriate style: consistent POV, pacing, dialogue style, and world-building coherence.

## What I Learned

- Dataset quality dominates output quality — the curation step is the real work
- QLoRA makes fine-tuning accessible at minimal cost — A100 at ~$2/hr on RunPod
- Axolotl dramatically simplifies training configuration vs. raw HuggingFace Trainer
- Gained working knowledge of the fine-tuning pipeline that directly informs AI PM thinking
