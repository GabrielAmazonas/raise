# Contributing Guidelines for AI Agents

This document provides guidelines for AI-powered software engineering agents contributing to this project. Adhering to these guidelines is crucial for maintaining code quality, consistency, and a streamlined development workflow.

## 1. Core Mandates

- **Analyze First, Act Second:** Before writing or modifying any code, thoroughly analyze the existing codebase, file structure, and project conventions. Use tools like `glob`, `read_file`, and `search_file_content` to understand the context.
- **Mimic Existing Patterns:** All contributions MUST follow the established coding style, architectural patterns, and conventions. Do not introduce new libraries or patterns without explicit instruction.
- **Break Changes into Smaller Functions:** For every change you make, break it down into smaller functions that can be executed on the integrated terminal. Do not assume anything is working without running and making sure it runs as expected.
- **Verify Changes:** After making any changes, you MUST run the appropriate verification scripts to ensure that the codebase is still functional and adheres to the project's standards.

## 2. Development Workflow

1.  **Understand the Task:** Break down the user's request into a clear set of objectives.
2.  **Gather Context:** Use the available tools to read relevant files and understand the current implementation.
3.  **Formulate a Plan:** Create a step-by-step plan and, if the changes are significant, present it to the user for approval.
4.  **Implement Changes:** Use the `replace` or `write_file` tools to modify the code. Ensure your changes are clean, efficient, and well-documented.
5.  **Run Verification Checks:** After implementation, run the following commands to ensure your changes have not introduced any regressions:

    ```bash
    # Check for type errors
    npx tsc --noEmit --project tsconfig.test.json

    # Run the test suite
    npm test

    # Check for linting and formatting issues
    npm run lint
    npm run format:check
    ```

6.  **Write Tests:** Based on the scope of changes:
    - **Unit Tests:** For inter-component logic or isolated functions
    - **Integration Tests:** For cross-component features
    - **E2E Tests:** For bigger features or when prompted

7.  **Update AI Diary:**
    - **On Success:** Add successful changes to `.ai-diary/[current-date].md` (create if needed)
    - **On Error:** Document errors with root cause analysis and steps to reproduce

8.  **Commit Changes (If Requested):** If the user requests a commit, use `git status` and `git diff` to review the changes, then write a clear and concise commit message that follows the project's conventions.

## 3. AI Diary Requirements

### Success Logging

Every time a change is confirmed successful, add it to the `.ai-diary` directory:

- Create a new file named `[YYYY-MM-DD].md` if it doesn't exist
- Document the change with context, implementation details, and verification steps

### Error Logging

Every time an error occurs, add it to the respective ai-diary document:

- **Root Cause Analysis:** What caused the error?
- **Steps to Reproduce:** How can this error be reproduced?
- **Resolution:** Immediately analyze the best approach to address it and implement a fix

## 4. Testing Guidelines

### Unit Tests

- **When:** For inter-component logic or isolated functions
- **Location:** `src/__tests__/` directory
- **Framework:** Jest with React Testing Library
- **Coverage:** Aim for comprehensive coverage of business logic

### Integration Tests

- **When:** For cross-component features
- **Location:** `src/__tests__/` directory
- **Framework:** Jest with React Testing Library
- **Scope:** Test component interactions and data flow

### E2E Tests

- **When:** For bigger features or when prompted
- **Location:** `cypress/e2e/` directory
- **Framework:** Cypress
- **Scope:** Test complete user workflows

## 5. Tech Stack Specifics

This project uses:

- **Next.js 15:** React framework with App Router
- **TypeScript:** Type safety and better developer experience
- **Tailwind CSS:** Utility-first CSS framework
- **Jest:** Unit and integration testing
- **Cypress:** End-to-end testing

Ensure all contributions align with these technologies and their best practices.

## 6. Tool Usage

- **File Paths:** Always use absolute paths for file-related tools. Use `pwd` to get the current working directory if needed.
- **Shell Commands:** Explain any potentially destructive shell commands before executing them. Use non-interactive flags where possible (e.g., `npm install -y`).
- **Safety:** Do not commit or expose any secrets, API keys, or other sensitive information.

## 7. Commit Message Format

When committing changes, use clear and descriptive commit messages:

```
feat: add 8-bit theme with neon colors and pixel fonts
fix: resolve TypeScript compilation errors
test: add unit tests for ProjectCard component
docs: update contributing guidelines with AI diary requirements
```
