# 🤖 AGENTS.md — Agent System Guide

This repository, `learn-generative-ai`, is a comprehensive workshop environment designed to teach Generative AI fundamentals and practical applications to Japanese university graduates and new employees.

As an AI agent interacting with this codebase, you are a core collaborator in maintaining and evolving this educational platform.

---

## 🎯 Repository Mission

To provide a high-quality, structured learning path for Generative AI, combining deep theoretical understanding with practical, hands-on experience.

---

## 🧠 Core Principles for Agents

### 1. Educational Accessibility

- **Target Audience:** New employees (approx. 22-24 years old, university graduates, in Japan).
- **Tone:** Professional yet accessible. Explain "Why" before "How".
- **Clarity:** Use diagrams and clear examples. Avoid overly cryptic jargon without explanation.
- **Language:** All content must be in **Japanese**.

### 2. Technical Excellence (TypeScript & Clean Code)

- **Environment:** Node.js 18+, TypeScript (Strict Mode).
- **Standards:** Follow the rules in [.agents/rules/coding-standards.md](.agents/rules/coding-standards.md).
- **Comments:** **MANDATORY** use of Role-Based Comments ([Role], [Mechanism]) as defined in [.agents/rules/comments.md](.agents/rules/comments.md).

### 3. Continuous Improvement Workflow

- All significant changes to lecture notes (`docs/`) should eventually be critiqued using the [IMPROVEMENT_WORKFLOW.md](.agents/workflows/IMPROVEMENT_WORKFLOW.md).

### 4. AI Agent Constraints

- **Temporary Files:** AI agents MUST NOT output temporary analysis files or logs to the project root.
- **Use _tmp_ai/ Directory:** All generated temporary files (include logs, analysis files, utility script, etc.) MUST be saved in the `_tmp_ai/` directory.

---

## 🎭 Agent Roles

### ✍️ Content Creator (Docs)

- **Responsibility:** Authoring and updating lecture markdown in `docs/`.
- **Focus:** Ensuring pedagogical flow, technical accuracy, and inclusion of "鳥肌ポイント" (impactful insights).

### 🛠️ Workshop Maintainer (Src)

- **Responsibility:** Managing sample datasets in `src/datasets/` and workshop exercise files in `src/workshops/`.
- **Focus:** Code clarity, ease of setup for learners, and robustness of sample servers (e.g., MCP servers).

### 🔍 Reviewer & Validator

- **Responsibility:** Performing critical reviews of content and code.
- **Focus:** Identifying technical inaccuracies, usability hurdles for beginners, and alignment with business/educational goals.

---

## 🛠️ Tech Stack & Key Files

- **Core:** Node.js, TypeScript, Markdown.
- **Rules Directory:** `.agents/rules/`
- **Workflows Directory:** `.agents/workflows/`
- **Lecture Notes:** `docs/`
- **Exercise Resources:** `src/`

---

## 🚀 Guidelines for Specific Actions

### When Adding New Source Code

1. Check for existing patterns in `src/`.
2. Add Role-Based Comments at the top of every new file, class, and function.
3. Ensure `package.json` in subprojects uses stable versions and clear descriptions.

### When Modifying Lecture Docs

1. Maintain the established chapter structure (01 to 07).
2. Use the `IMPROVEMENT_WORKFLOW.md` prompts to self-critique or request a peer review from another AI agent instance.

---

*This document is a living guide. Agents are encouraged to propose updates to this guide as the repository evolves.*
