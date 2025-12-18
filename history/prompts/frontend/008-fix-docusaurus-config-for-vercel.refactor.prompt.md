---
id: 008
title: fix-docusaurus-config-for-vercel
stage: refactor
date: 2025-12-18
surface: agent
model: gemini-2.0
feature: frontend
branch: main
user: Administrator
command: fix config
labels: ["docusaurus", "vercel", "config"]
links:
  spec: null
  ticket: null
  adr: null
  pr: null
files:
 - frontend/docusaurus.config.ts
tests:
 - (none)
---

## Prompt

You are a senior Docusaurus + Vercel deployment engineer.

My Docusaurus site shows this error:
"Your Docusaurus site did not load properly. A very common reason is a wrong baseUrl configuration."

TASK:
1. Fix docusaurus.config.js so it works correctly on Vercel.
2. Ensure baseUrl is set correctly.
3. Ensure url, organizationName, and projectName are aligned with the GitHub repo.
4. Assume deployment is on Vercel (not GitHub Pages).
5. Remove any incorrect or random baseUrl values.
6. Output a clean, production-ready config file.

RULES:
- baseUrl must be '/'
- Output directory must be 'build'
- No placeholder values
- Use best practices

PROJECT NAME:
Physical AI & Humanoid Robotics

## Response snapshot

Updated `frontend/docusaurus.config.ts` to set `baseUrl` to `'/'` and configured `url` for Vercel. Updated project title to "Physical AI & Humanoid Robotics".

## Outcome

- ✅ Impact: Fixed configuration for Vercel deployment preventing "wrong baseUrl" error.
- 🧪 Tests: N/A
- 📁 Files: Modified `frontend/docusaurus.config.ts`
- 🔁 Next prompts: Deploy to Vercel
- 🧠 Reflection: Straightforward configuration update for Vercel compatibility.

## Evaluation notes (flywheel)

- Failure modes observed: None
- Graders run and results (PASS/FAIL): N/A
- Prompt variant (if applicable): N/A
- Next experiment (smallest change to try): N/A
