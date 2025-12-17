---
id: 002
title: Identify connected GitHub account
stage: general
date: 2025-12-17
surface: agent
model: gemini-2.0-flash-thinking-exp
feature: none
branch: main
user: rabiya972
command: get_me
labels: ["github", "auth", "account"]
links:
  spec: null
  ticket: null
  adr: null
  pr: null
files:
  - history/prompts/general/002-identify-github-account.general.prompt.md
tests:
  - none
---

## Prompt

mera github knsa connectt hai ?

## Response snapshot

Your connected GitHub account is **rabiya972**.

## Outcome

- ✅ Impact: User now knows which GitHub account is authenticated.
- 🧪 Tests: none
- 📁 Files: created PHR
- 🔁 Next prompts: User may ask to perform git operations.
- 🧠 Reflection: Simple identity check fulfilled using get_me tool.

## Evaluation notes (flywheel)

- Failure modes observed: none
- Graders run and results (PASS/FAIL): none
- Prompt variant (if applicable): null
- Next experiment (smallest change to try): null
