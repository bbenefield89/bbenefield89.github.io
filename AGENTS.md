# Repository Instructions

## Purpose
- This repository contains a personal portfolio website for a software engineer.
- The audience is recruiters and hiring managers evaluating technical work and presentation.
- Keep the site polished, minimal, professional, and easy to maintain by hand.

## Technical Constraints
- Use only plain HTML, CSS, and vanilla JavaScript.
- Do not introduce frameworks, build tools, package managers, transpilers, or external UI libraries unless explicitly requested.
- Keep the site deployable as static files on GitHub Pages.
- Preserve the current file model centered on `index.html`, `styles.css`, and `script.js`.

## Implementation Defaults
- Prefer semantic HTML and accessible interactive elements.
- Keep markup straightforward and readable rather than overly abstracted.
- Organize CSS with clear sections and reusable variables or tokens for colors, spacing, typography, radius, and motion.
- Keep JavaScript minimal, dependency-free, and limited to progressive enhancement or small UI behaviors.
- Favor small, direct edits over unnecessary restructuring.

## Design Guardrails
- Preserve a dark-mode-first presentation with an optional light mode.
- Maintain a clean, modern, recruiter-friendly visual tone.
- Prioritize readability, spacing, hierarchy, typography, and responsive behavior.
- The website should work cleanly across major screen-size breakpoints, including mobile, tablet, laptop, and desktop widths.
- Keep featured projects as the main content focus.
- Do not add a blog, testimonials, heavy animation, gimmicky effects, or agency-style visuals unless explicitly requested.
- Avoid adding sections or UI complexity that do not improve the portfolio’s hiring value.

## Content Expectations
- Use clear, professional copy aimed at software engineering roles.
- If real project details, links, or contact data are missing, use obvious placeholders rather than inventing specific claims.
- Keep content concise and skimmable.
- Favor measurable outcomes and concrete responsibilities when describing projects.

## Git Workflow Expectations
- Use branch names in the format `BB-<ticket number>`.
- Ticket numbers must increase incrementally by `1`.
- Track the next ticket number to create in this file and update it when creating the next branch.
- Advance the tracked next ticket number at branch creation time, not at merge time.
- Current next ticket number: `BB-2`.
- Use conventional commits for all commit messages.
- When the user says merge it or ship it, interpret that as: commit the work, squash the branch history, and fast-forward main.

## Workflow Expectations
- Inspect the existing structure before making significant edits and preserve consistency across the three main files.
- Keep the code easy for a human to edit without tooling.
- Use a mobile-first approach when making CSS changes.
- Any CSS change should be checked against the major breakpoints in use so layout, spacing, and interaction behavior remain solid across mobile, tablet, laptop, and desktop sizes.
- Avoid adding external dependencies for fonts, icons, analytics, or components unless explicitly requested.
- After changes, run lightweight checks appropriate to a static site, such as reviewing file integrity or basic script syntax when available.
- Do not make unrelated structural changes while handling a focused request.

## File Roles
- `index.html`: semantic page structure and content.
- `styles.css`: design system, layout, theme variables, and responsive styling.
- `script.js`: small interactive behaviors such as theme toggling or navigation state.

## Agent Behavior
- Default to preserving the existing visual direction unless the user asks for a redesign.
- When extending the site, keep new code consistent with the established naming and layout patterns.
- Prefer performance and simplicity over cleverness.
- If a request conflicts with these constraints, follow the user’s request but keep the impact contained and explicit.



