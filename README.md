# RAISE - Research-Driven AI-First Software Engineering

### Version: 0.1

### Release Date: 07/07/2025

**Every Software Engineer deserves a RAISE.**

RAISE is a project dedicated to **supporting the Software Engineering community with research-driven approaches to AI-first software engineering**. This portfolio showcases how cutting-edge AI models and tools can be integrated into modern software development workflows while maintaining high standards of code quality and engineering best practices.

## Core Principle & Rationale

The fundamental principle behind RAISE is that **LLMs and specialized SLMs will continuously improve at software engineering tasks over time**.

As engineers, failing to integrate these tools into our daily engineering workflows represents a **massive opportunity cost** that will only grow larger with each passing day.

As the cost of producing functional code approaches zero, RAISE proposes that **human effort should be strategically focused on research-driven activities**:

- **Defining project priorities** through research-backed problem analysis—including objectives, expectations, non-goals, and success criteria informed by industry trends and emerging methodologies
- **Enabling Quality Assurance** through research into cutting-edge testing frameworks, security practices, and validation processes that may not be in LLM training data
- **Researching and implementing automated cost monitoring strategies** by discovering:
  - Latest LLM pricing models and optimization techniques
  - Emerging computational resource allocation methodologies
  - Novel efficiency improvement algorithms and monitoring tools
- **Investigating performance monitoring innovations** and connecting them to continuous improvement iteration loops based on recent research and industry developments

## Research-Driven Human Contribution

**Research in the RAISE context** refers to the systematic investigation and discovery of:

- **Emerging Tools & Technologies**: LLMs have knowledge cutoffs and may not be aware of the latest developer tools, frameworks, or AI models that could enhance productivity
- **Methodology Innovations**: New software engineering practices, architectural patterns, and development workflows that have emerged since LLM training data collection
- **Industry Standards Evolution**: Updates to security standards, compliance requirements, and best practices that may not be reflected in AI model knowledge
- **Performance Optimization Breakthroughs**: Recent research in computational efficiency, algorithm optimization, and resource management techniques
- **Cost Management Strategies**: Latest pricing models, token optimization techniques, and resource allocation methodologies from cloud providers and AI service vendors

**The Human Research Advantage**: While LLMs excel at applying known patterns and established practices, humans provide critical value by discovering and validating information that extends beyond AI training data. This research-driven approach ensures that AI-first development workflows incorporate the most current innovations and maintain competitive advantage through continuous learning and adaptation.

**Research Integration Pipeline**: Human-discovered insights are systematically integrated into AI prompts, project documentation, and development workflows, creating a feedback loop that enhances the entire AI-first development process with cutting-edge knowledge.

## Project Vision

RAISE bridges the gap between academic research and practical software engineering by:

- **Research Foundation**: Incorporating insights from foundational papers like "Attention Is All You Need" and recent research on LLM deployment and sustainability
- **Community Wisdom**: Drawing inspiration from industry leaders like Uncle Bob Martin (Clean Code, TDD) and Kent Beck (Extreme Programming, AI-assisted development)
- **AI-First Approach**: Leveraging multiple LLM models and AI tools to enhance productivity while maintaining developer creativity and code quality

## Tech Stack

### LLM Models

- **OpenAI GPT-4o** - Strategic ideation, business refinement, and cross-team communication
- **Anthropic Claude-4-Sonnet** - Code generation, refactoring, and development workflows
- **Google Gemini 2.5 Pro** - Research Assistant, Up-to-date tool documents, Recent innovation in Architecture and Guidelines insights.

### Development Tools

- **Cursor** - AI-powered code editor
- **ChatGPT** - Interactive development assistance and strategic ideation
- **GitHub** - Version control and collaboration
  - **GitHub Copilot** - Real-time code review and quality assurance
- **Gemini CLI** - Command-line AI integration 

### Framework & Technologies

This is a [Next.js](https://nextjs.org) project built with modern web technologies, featuring:

- TypeScript for type safety
- Tailwind CSS for styling
- Jest and Cypress for testing
- Research-driven component architecture

## How Each LLM Was Used

- **GPT-4o (via ChatGPT)**: Employed for high-level marketing and business ideation, helping to define the project's vision and strategic direction.
- **Claude 4 Sonnet (via Cursor)**: Utilized as the primary coding assistant within the Cursor IDE, focusing on writing, refactoring, and debugging application code.
- **GPT-4o (via GitHub Copilot)**: Integrated for real-time code review, quality assurance, and maintaining coding standards throughout the development process.
- **Gemini 2.5 Pro (via Gemini CLI)**: Leveraged for architectural planning, infrastructure setup, and deployment strategies, ensuring a robust and scalable foundation with AI-First web research.

## RAISE Workflow: Multi-LLM Development Process

### Engineering Workflow Diagram

```mermaid
flowchart TD
    A[👤💬 Human: Research-Driven Requirements & Scope\nChatGPT - Business Ideation] --> DaC[📄 DaC: AI-First Document as Code (PRD, RFC, ADR)\nModel 1: Draft, Model 2: Review/Counterpoints]
    DaC --> B{🎯 Research-Informed Iteration and Refinement}
    B --> C[👤🔧 Human: Research AI-Tools and AI-First QA process\nMulti-LLM Stack Planning]
    C --> D{🤖 Choose LLM Stack}

    D -->|Business & Market Ideas| E[ChatGPT-GPT-4o: Strategy & Vision]
    D -->|Code implementation| F[Cursor-Claude-4-Sonnet: Development]
    D -->|Documentation & Deploy| G[Gemini CLI-2.5 Pro: Infrastructure]

    E --> H[🔄 Iterative Development Cycle]
    F --> H
    G --> H

    H --> I[🤖 Cursor + Claude-4-Sonnet: Code Implementation]
    I --> J[👤🔍 Human: Research-Enhanced Code Review\nGitHub Copilot - GPT-4o Assistance]
    J --> K{Quality Check}

    K -->|Needs refinement| L[🤖 Claude-4-Sonnet: Code Analysis & Improvements]
    L --> M[👤🏗️ Human: Research-Informed Architectural Decisions\nCursor - Design Patterns]
    M --> N[🤖 GPT-4o: Generate Tests & Validation]

    K -->|Approved| O[✅ AI-First QA Pipeline]
    N --> O

    O --> P[🤖 Cross-validate between LLM Stack]
    P --> Q[🤖 Automated Test Execution]
    Q --> R[👤✅ Human Validation Points\nMulti-Tool Quality Gates]

    R --> S{Final Validation}
    S -->|Pass| T[👤🚀 Human: Integration Approval\nGemini CLI - Deployment Ready]
    S -->|Fail| U[👤🔬 Human: Research-Based Root Cause Analysis\nChatGPT - Problem Solving]

    U --> V[🤖 AI Stack: Error Analysis & Fix Suggestions]
    V --> H

    T --> W[🚀 Deploy & Monitor\nGemini CLI - Production]
    W --> X[📊 Token Cost Analysis]
    X --> Y[👤📈 Human: Research-Driven Workflow Optimization\nCross-LLM Performance Review]
    Y --> Z[📚 Knowledge Sharing & Learning\nGemini CLI - Documentation]

    style A fill:#e1f5fe
    style C fill:#e1f5fe
    style J fill:#e1f5fe
    style M fill:#e1f5fe
    style R fill:#e1f5fe
    style T fill:#e1f5fe
    style U fill:#e1f5fe
    style Y fill:#e1f5fe

    style E fill:#fff3e0
    style F fill:#fff3e0
    style G fill:#fff3e0
    style I fill:#fff3e0
    style L fill:#fff3e0
    style N fill:#fff3e0
    style P fill:#fff3e0
    style Q fill:#fff3e0
    style V fill:#fff3e0
```

**Legend:**

- 👤 **Blue nodes**: Research-driven human critical decision points enhanced by AI tool assistance
- 🤖 **Orange nodes**: AI-driven tasks with research-informed human oversight
- 🔄 **Process nodes**: Iterative cycles with continuous feedback and knowledge discovery
- 💬🔧🔍🏗️✅🚀🔬📈 **AI Tool Icons**: Specific AI assistants used in research-enhanced human tasks

### Document as Code (DaC): AI-First Documentation Workflow

**Document as Code (DaC)** is a foundational pillar in RAISE, ensuring that all critical engineering documents—**PRD (Product Requirements Document), RFC (Request for Comments), and ADR (Architecture Decision Record)**—are designed and maintained as AI-first artifacts.

- **AI-First Design**: Each document type is structured for seamless AI collaboration and automation.
- **Dual-Model Workflow**:
  - **Model 1**: Translates business hypotheses and requirements into the initial structured document (PRD, RFC, or ADR).
  - **Model 2**: Reviews the document, adds counterpoints, and ensures completeness and critical analysis.
- **Continuous Improvement**: Documents are iteratively refined through human-AI feedback loops, ensuring clarity, rigor, and alignment with evolving project goals.
- **Traceability**: All document changes and reviews are logged for transparency and future learning.

This approach ensures that documentation is not only up-to-date and high quality, but also leverages the strengths of multiple AI models for both creation and critical review, driving better engineering outcomes.

### 1. **Research-Driven Iteration and Refinement** 🎯

**Human Role**: Critical - Research-driven definition of requirements, scope, and success criteria with AI assistance

- **Research emerging AI tools and methodologies** to define optimal AI-First QA processes for systematic development
- **Investigate latest LLM capabilities and limitations** to choose appropriate AI stack based on task complexity:
  - **ChatGPT-GPT-4o**: Business strategy, market ideas, problem solving (enhanced with current market research)
  - **Cursor-Claude-4-Sonnet**: Code implementation, refactoring, design patterns (updated with latest framework innovations)
  - **Gemini CLI-2.5 Pro**: Documentation, deployment, infrastructure (informed by recent DevOps research)
  - **GitHub Copilot-GPT-4o**: Code reviews, quality assurance (supplemented with current security standards)

### 2. **Iterative Development Cycle** 🔄

**AI-First Implementation with Tool Stack**:

1. **Strategy & Planning**: ChatGPT-GPT-4o for business logic and market-driven decisions
2. **Code Implementation**: Cursor + Claude-4-Sonnet for development and refactoring
3. **Code Review**: GitHub Copilot-GPT-4o for quality assurance and best practices
4. **Testing & Validation**: Multi-LLM approach for comprehensive test generation
5. **Documentation & Deployment**: Gemini CLI-2.5 Pro for docs and infrastructure

### 3. **AI-First QA Pipeline** ✅

**Automated AI Stack Validation**:

- Cross-validate implementations between ChatGPT, Claude, and Gemini
- Multi-tool quality gates with GitHub Copilot code review integration
- Automated test generation and execution across the LLM stack
- Code quality metrics monitoring with tool-specific insights

**Research-Enhanced Human Validation Points with AI Tool Support**:

- Functional requirements verification enhanced by researching current industry standards and user expectations
- User experience evaluation informed by investigating latest UX/UI trends and accessibility guidelines
- Security and compliance review supplemented by research into emerging threats and updated regulations
- Final integration approval backed by investigating latest deployment best practices and infrastructure innovations

### 4. **Token Cost Management** 💰

#### **Cost Monitoring Strategies**

- **Pre-task Estimation**: Calculate token requirements before starting
- **Model Selection**: Use cost-effective models for appropriate tasks:
  - Simple tasks: ChatGPT-3.5 or Gemini Flash
  - Complex tasks: Reserve GPT-4o/Claude-4 for critical decisions
- **Batch Processing**: Group similar requests to minimize API calls

#### **Cost Control Techniques**

- **Context Optimization**: Maintain focused, relevant context windows
- **Response Caching**: Store and reuse common code patterns
- **Progressive Refinement**: Start with cheaper models, escalate as needed
- **Token Budgets**: Set daily/weekly limits per project phase

#### **Monitoring Tools**

- Real-time token usage tracking via API metrics
- Cost per feature/component analysis
- ROI measurement: Development time saved vs. token costs
- Monthly budget alerts and optimization recommendations

## Research-Driven Human-in-the-Loop Critical Points 🤝

### **Research-Informed Strategic Decision Making** 💬

- Architecture and design patterns selection through investigation of emerging frameworks and patterns beyond LLM knowledge
- Technology stack choices enhanced by researching latest tool releases, performance benchmarks, and community adoption trends
- Feature prioritization informed by current market research, user behavior studies, and competitive analysis

### **Research-Enhanced Quality Control Gates** 🔍

- Code review incorporating research into latest security vulnerabilities, coding standards, and maintainability practices
- Integration testing using cutting-edge testing frameworks and methodologies discovered through active research
- Performance benchmarking with newly discovered optimization techniques and industry best practices

### **Research-Backed Domain Expertise** 🏗️

- Business logic validation enhanced by researching current industry regulations, market trends, and customer expectations
- User experience design informed by investigating latest accessibility standards, design system innovations, and user research findings
- Security and compliance requirements updated through research into emerging threats, regulatory changes, and security standards

### **Research-Driven Continuous Learning** 📈

- Model performance evaluation through investigation of new LLM releases, capability assessments, and optimization techniques
- Workflow optimization based on research into productivity methodologies, development practices, and tool integrations
- Team knowledge sharing enhanced by researching industry conferences, academic papers, and community best practices evolution

## AI-First Development Configuration

RAISE implements a comprehensive AI-first development environment with specialized configurations for each AI tool in our stack.

### .cursor/rules - Project-Specific AI Rules

The project includes detailed AI agent rules in `.cursor/rules/project/project_rules.mdc` that govern how Claude 4 Sonnet operates within the Cursor IDE:

#### Core AI Development Principles

1. **Analyze Before Acting**: AI agents must read and understand existing code patterns before making changes
2. **Follow Established Conventions**: Strict adherence to `STYLE_GUIDE.md` and existing architectural patterns
3. **Incremental Development**: Break changes into smaller, testable functions that can be executed in the integrated terminal
4. **Comprehensive Verification**: Run type-checker, test suite, and linter after every change
5. **Test-Driven Development**:
   - Unit tests for isolated functions and inter-component logic
   - Integration tests for cross-component features
   - E2E tests for larger features or when prompted

#### AI Diary Integration

The Cursor rules enforce systematic documentation in `.ai-diary/`:

- **Success Logging**: Document successful changes with context and verification steps
- **Error Analysis**: Include root cause analysis, reproduction steps, and immediate fix implementation

### .github/copilot-instructions - Code Review AI

GitHub Copilot is configured via `.github/copilot-instructions.md` to serve as our code review and quality assurance AI:

#### Copilot's Role in Quality Assurance

- **Context Analysis**: Analyze current file and surrounding codebase before generating suggestions
- **Style Guide Compliance**: Enforce patterns from `STYLE_GUIDE.md` and `TECHNOLOGY_STACK.md`
- **Test Generation**: Create corresponding tests following existing patterns
- **Documentation Standards**: Generate JSDoc comments and update Markdown documentation

#### Technology Stack Enforcement

Copilot ensures all generated code uses approved technologies:

- Next.js 15 with App Router
- TypeScript for type safety
- Tailwind CSS for styling
- Jest and Cypress for testing

### CONTRIBUTING.md - AI Agent Guidelines

The project's `CONTRIBUTING.md` provides comprehensive guidelines specifically designed for AI agents:

#### AI-First Development Workflow

1. **Task Analysis**: Break user requests into clear objectives
2. **Context Gathering**: Use available tools to understand current implementation
3. **Plan Formulation**: Create step-by-step plans for significant changes
4. **Implementation**: Clean, efficient, well-documented code changes
5. **Verification Pipeline**: Comprehensive testing and quality checks
6. **Documentation**: Update AI diary and commit with clear messages

#### Multi-Tool Verification Commands

```bash
# Type checking
npx tsc --noEmit --project tsconfig.test.json

# Test execution
npm test

# Code quality
npm run lint
npm run format:check
```

### Unit Tests and Pre-Commit Strategy

#### Jest Configuration and Coverage Standards

Our Jest setup (`jest.config.mjs`) enforces rigorous testing standards:

```javascript
coverageThreshold: {
  global: {
    branches: 80,
    functions: 80,
    lines: 80,
    statements: 80,
  },
}
```

#### Testing Framework Architecture

- **Unit Tests**: `src/__tests__/` with Jest + React Testing Library
- **Integration Tests**: Cross-component testing in same directory structure
- **E2E Tests**: `cypress/e2e/` with comprehensive user workflow coverage
- **Component Tests**: Cypress component testing for isolated UI testing

#### Pre-Commit Automation Pipeline

**Husky + Lint-Staged Configuration**:

`.husky/pre-commit` runs lint-staged automatically on every commit.

`.lintstagedrc.json` defines our pre-commit quality pipeline:

```json
{
  "*.{js,jsx,ts,tsx}": [
    "prettier --write",
    "eslint --fix",
    "jest --bail --findRelatedTests"
  ],
  "*.{json,md,yml,yaml}": ["prettier --write"]
}
```

#### Pre-Commit Quality Gates

1. **Code Formatting**: Prettier auto-formats all code files
2. **Linting**: ESLint fixes issues and enforces coding standards
3. **Related Testing**: Jest runs tests for files being committed
4. **Documentation**: Prettier formats configuration and documentation files

#### Development Scripts

```bash
# Development with AI assistance
npm run dev              # Next.js with Turbopack for fast iteration

# Testing pipeline
npm test                 # Unit and integration tests
npm run test:watch       # Watch mode for TDD
npm run test:coverage    # Coverage reporting
npm run test:e2e         # Cypress E2E tests
npm run test:e2e:open    # Interactive Cypress testing

# Code quality
npm run lint             # ESLint checking
npm run lint:fix         # Auto-fix linting issues
npm run format           # Prettier formatting
npm run format:check     # Format validation
```

#### Multi-LLM Testing Strategy

- **Claude 4 Sonnet (Cursor)**: Primary test implementation and TDD cycles
- **GPT-4o (GitHub Copilot)**: Code review and test quality assurance
- **Gemini 2.5 Pro**: E2E test architecture and deployment testing

## Getting Started

First, run the development server:

```bash
npm run dev
```

Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.

You can start editing the page by modifying `app/page.tsx`. The page auto-updates as you edit the file.

### AI-First Development Workflow

1. **Start Development**: Use Cursor with Claude 4 Sonnet for implementation
2. **Code Review**: GitHub Copilot provides real-time quality assurance
3. **Testing**: Jest runs automatically via pre-commit hooks
4. **Documentation**: AI diary tracks all changes and decisions
5. **Deployment**: Gemini CLI handles infrastructure and deployment
