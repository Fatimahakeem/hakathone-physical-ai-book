---
id: "002"
title: "Remove Language and Difficulty Toggles"
stage: "refactor"
date: "2025-12-18"
surface: "agent"
model: "gemini-2.0-flash-exp"
feature: "frontend"
branch: "main"
user: "Administrator"
command: "remove beginner advance and english urdu buttons"
labels: ["frontend", "ui", "cleanup"]
links:
  spec: null
  ticket: null
  adr: null
  pr: null
files:
  - "frontend/src/theme/Root.js"
  - "frontend/src/components/ChatWidget.js"
  - "frontend/src/css/custom.css"
tests: []
prompt_text: |
  beginner advence or english urdu wala buttone hata do
response_text: |
  Removed the floating selection buttons for language and difficulty from the UI.
  - Removed `NavbarToggle` from `Root.js`.
  - Cleaned up CSS associated with the toggle container.
  - Removed the difficulty indicator from the `ChatWidget` header.
outcome: "Toggles removed from UI."
evaluation: "success"
---

## Context
User requested the removal of UI elements for selecting difficulty (Beginner/Advanced) and language (English/Urdu).

## Changes
- **Root.js**: Removed `NavbarToggle` component.
- **ChatWidget.js**: Removed the `(beginner)` style label from the header.
- **custom.css**: Removed positioning styles for the now-deleted toggle container.
