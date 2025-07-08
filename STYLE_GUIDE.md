# Style Guide

This document outlines the coding style and conventions for this project. All contributions, whether from humans or AI agents, MUST adhere to these guidelines.

## 1. General Principles

- **Clarity and Readability:** Write code that is easy to understand and maintain.
- **Consistency:** Follow the existing patterns and conventions in the codebase.
- **Simplicity:** Prefer simple, straightforward solutions over complex ones.

## 2. File Naming and Structure

- **Components:** Use PascalCase for component files (e.g., `MyComponent.tsx`).
- **Tests:** Use the `.test.tsx` or `.test.ts` extension for test files (e.g., `MyComponent.test.tsx`).
- **Utilities:** Place reusable functions in the `src/utils` directory.
- **Types:** Define custom types in the `src/types` directory.

## 3. TypeScript and JavaScript

- **Typing:** Use TypeScript for all new code. Add types to existing JavaScript code whenever possible.
- **ESLint and Prettier:** All code MUST pass the ESLint and Prettier checks. Use the provided npm scripts to format and lint your code.
- **Imports:** Use absolute paths for imports (e.g., `import MyComponent from '@/components/MyComponent';`).

## 4. React

- **Functional Components:** Use functional components with hooks instead of class-based components.
- **JSX:** Use the automatic JSX runtime. Do not explicitly import `React` just for JSX.
- **Props:** Use interfaces to define the types for component props.

## 5. Tailwind CSS

- **Utility-First:** Use Tailwind's utility classes for styling.
- **Custom CSS:** Avoid writing custom CSS. If necessary, add it to the `src/app/globals.css` file.

## 6. HTML

- **Semantic HTML:** Use semantic HTML5 elements to structure your content.
- **Accessibility:** Ensure that all components are accessible. Use ARIA attributes where appropriate.
