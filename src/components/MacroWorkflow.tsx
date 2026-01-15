'use client';

import { useState } from 'react';

interface WorkflowStep {
  id: string;
  icon: string;
  title: string;
  shortTitle: string;
  description: string;
  humanRole: string;
  aiRole: string;
  color: 'primary' | 'accent' | 'mixed';
}

const workflowSteps: WorkflowStep[] = [
  {
    id: 'research',
    icon: '🔬',
    title: 'Research & Discover',
    shortTitle: 'RESEARCH',
    description:
      'Investigate emerging tools, methodologies, and innovations beyond LLM knowledge cutoffs.',
    humanRole: 'Lead research on cutting-edge technologies and industry trends',
    aiRole: 'Assist with analysis and pattern recognition in known domains',
    color: 'accent',
  },
  {
    id: 'define',
    icon: '📋',
    title: 'Define & Document',
    shortTitle: 'DEFINE',
    description:
      'Create AI-First documentation (PRD, RFC, ADR) with dual-model review workflow.',
    humanRole: 'Strategic decisions, priorities, and success criteria',
    aiRole: 'Draft documents, cross-validate, ensure completeness',
    color: 'mixed',
  },
  {
    id: 'implement',
    icon: '⚡',
    title: 'AI-First Implementation',
    shortTitle: 'IMPLEMENT',
    description:
      'Leverage a multi-LLM stack: select the right model for each task based on strengths and cost.',
    humanRole: 'Architecture decisions and code review oversight',
    aiRole: 'Code generation, refactoring, and test creation',
    color: 'primary',
  },
  {
    id: 'validate',
    icon: '✅',
    title: 'Quality & Validation',
    shortTitle: 'VALIDATE',
    description:
      'Cross-validate between LLMs with human checkpoints at critical decision points.',
    humanRole: 'Final validation, security review, and integration approval',
    aiRole: 'Automated testing, cross-LLM validation, quality metrics',
    color: 'mixed',
  },
  {
    id: 'iterate',
    icon: '🔄',
    title: 'Learn & Iterate',
    shortTitle: 'ITERATE',
    description:
      'Continuous improvement through knowledge sharing and workflow optimization.',
    humanRole: 'Performance analysis and process optimization research',
    aiRole: 'Token cost tracking, documentation, deployment',
    color: 'accent',
  },
];

export default function MacroWorkflow() {
  const [activeStep, setActiveStep] = useState<string | null>(null);

  const getStepColor = (color: WorkflowStep['color']) => {
    switch (color) {
      case 'primary':
        return 'var(--primary)';
      case 'accent':
        return 'var(--accent)';
      case 'mixed':
        return 'linear-gradient(135deg, var(--primary), var(--accent))';
    }
  };

  const getStepBorderColor = (color: WorkflowStep['color']) => {
    switch (color) {
      case 'primary':
        return '#ff2e9a';
      case 'accent':
        return '#ffe900';
      case 'mixed':
        return '#ff2e9a';
    }
  };

  return (
    <section
      id="macro-workflow"
      className="py-20 relative overflow-hidden"
      style={{ background: '#0d0618' }}
    >
      {/* Animated scan line effect */}
      <div
        className="absolute inset-0 pointer-events-none"
        style={{
          background:
            'repeating-linear-gradient(0deg, transparent 0px, transparent 2px, rgba(0,0,0,0.1) 2px, rgba(0,0,0,0.1) 4px)',
        }}
      />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="text-center mb-16">
          <h2 className="text-2xl md:text-3xl font-bold mb-4">
            The RAISE Workflow
          </h2>
          <p className="text-lg text-accent max-w-2xl mx-auto">
            A researcher mindset for AI-first software engineering
          </p>
        </div>

        {/* Core Principle Banner */}
        <div
          className="mb-16 p-6 text-center"
          style={{
            background: 'var(--card-bg)',
            border: '4px solid var(--primary)',
            boxShadow: '0 0 0 4px #000, 4px 4px 0 0 var(--primary)',
          }}
        >
          <p
            className="text-sm md:text-base leading-relaxed"
            style={{ color: 'var(--foreground)' }}
          >
            <span style={{ color: 'var(--accent)' }}>💡 Core Principle:</span>{' '}
            As the cost of producing code approaches zero, human effort should
            focus on{' '}
            <span style={{ color: 'var(--primary)' }}>research-driven</span>{' '}
            activities that extend beyond AI training data.
          </p>
        </div>

        {/* Workflow Diagram */}
        <div className="relative">
          {/* Connection Lines - Desktop */}
          <div className="hidden lg:block absolute top-1/2 left-0 right-0 h-1 bg-gradient-to-r from-[var(--accent)] via-[var(--primary)] to-[var(--accent)] transform -translate-y-1/2 z-0" />

          {/* Workflow Steps */}
          <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-5 gap-6 relative z-10 items-stretch">
            {workflowSteps.map((step, index) => (
              <div
                key={step.id}
                className="relative group cursor-pointer flex"
                onMouseEnter={() => setActiveStep(step.id)}
                onMouseLeave={() => setActiveStep(null)}
                onClick={() =>
                  setActiveStep(activeStep === step.id ? null : step.id)
                }
              >
                {/* Step Card */}
                <div
                  className="p-4 transition-transform duration-200 hover:-translate-y-2 flex flex-col w-full"
                  style={{
                    background: 'var(--card-bg)',
                    border: `4px solid ${getStepBorderColor(step.color)}`,
                    boxShadow: `0 0 0 4px #000, 4px 4px 0 0 ${getStepBorderColor(step.color)}`,
                  }}
                >
                  {/* Step Number */}
                  <div
                    className="absolute -top-3 -left-3 w-8 h-8 flex items-center justify-center text-xs font-bold"
                    style={{
                      background: getStepColor(step.color),
                      border: '2px solid #000',
                      color: step.color === 'accent' ? '#000' : '#fff',
                    }}
                  >
                    {index + 1}
                  </div>

                  {/* Icon */}
                  <div className="text-4xl mb-3 text-center">{step.icon}</div>

                  {/* Title */}
                  <h3
                    className="text-xs font-bold text-center mb-2 tracking-wider"
                    style={{
                      color:
                        step.color === 'accent'
                          ? 'var(--accent)'
                          : 'var(--primary)',
                      textShadow: '2px 2px 0 #000',
                    }}
                  >
                    {step.shortTitle}
                  </h3>

                  {/* Description */}
                  <p
                    className="text-[12px] text-center leading-relaxed flex-grow"
                    style={{ color: 'var(--foreground)', opacity: 0.9 }}
                  >
                    {step.description}
                  </p>
                </div>

                {/* Expanded Details Panel */}
                {activeStep === step.id && (
                  <div
                    className="absolute top-full left-1/2 transform -translate-x-1/2 mt-4 w-72 p-4 z-20"
                    style={{
                      background: 'var(--background-dark)',
                      border: '4px solid var(--primary)',
                      boxShadow:
                        '0 0 0 4px #000, 4px 4px 0 0 var(--accent), 0 0 30px rgba(255,46,154,0.3)',
                    }}
                  >
                    <h4
                      className="text-xs font-bold mb-3"
                      style={{ color: 'var(--accent)' }}
                    >
                      {step.title}
                    </h4>

                    <div className="space-y-3">
                      <div>
                        <div
                          className="text-[12px] font-bold mb-1 flex items-center gap-2"
                          style={{ color: 'var(--accent)' }}
                        >
                          <span>👤</span> HUMAN ROLE
                        </div>
                        <p
                          className="text-[12px]"
                          style={{ color: 'var(--foreground)', opacity: 0.8 }}
                        >
                          {step.humanRole}
                        </p>
                      </div>

                      <div>
                        <div
                          className="text-[12px] font-bold mb-1 flex items-center gap-2"
                          style={{ color: 'var(--primary)' }}
                        >
                          <span>🤖</span> AI ROLE
                        </div>
                        <p
                          className="text-[12px]"
                          style={{ color: 'var(--foreground)', opacity: 0.8 }}
                        >
                          {step.aiRole}
                        </p>
                      </div>
                    </div>

                    {/* Arrow pointer */}
                    <div
                      className="absolute -top-2 left-1/2 transform -translate-x-1/2 w-4 h-4 rotate-45"
                      style={{
                        background: 'var(--background-dark)',
                        borderTop: '4px solid var(--primary)',
                        borderLeft: '4px solid var(--primary)',
                      }}
                    />
                  </div>
                )}

                {/* Arrow to next step - Mobile/Tablet */}
                {index < workflowSteps.length - 1 && (
                  <div className="flex justify-center my-4 lg:hidden">
                    <div
                      className="text-2xl animate-bounce"
                      style={{ color: 'var(--primary)' }}
                    >
                      ▼
                    </div>
                  </div>
                )}
              </div>
            ))}
          </div>
        </div>

        {/* Human-AI Balance Indicator */}
        <div className="mt-16">
          <div className="flex flex-col md:flex-row items-center justify-center gap-8">
            <div className="flex items-center gap-3">
              <div
                className="w-4 h-4"
                style={{
                  background: 'var(--accent)',
                  border: '2px solid #000',
                }}
              />
              <span
                className="text-xs"
                style={{ color: 'var(--foreground)', opacity: 0.8 }}
              >
                Human-Led Research
              </span>
            </div>
            <div className="flex items-center gap-3">
              <div
                className="w-4 h-4"
                style={{
                  background:
                    'linear-gradient(135deg, var(--primary), var(--accent))',
                  border: '2px solid #000',
                }}
              />
              <span
                className="text-xs"
                style={{ color: 'var(--foreground)', opacity: 0.8 }}
              >
                Human-AI Collaboration
              </span>
            </div>
            <div className="flex items-center gap-3">
              <div
                className="w-4 h-4"
                style={{
                  background: 'var(--primary)',
                  border: '2px solid #000',
                }}
              />
              <span
                className="text-xs"
                style={{ color: 'var(--foreground)', opacity: 0.8 }}
              >
                AI-Driven Execution
              </span>
            </div>
          </div>
        </div>

        {/* Key Insight */}
        <div
          className="mt-12 p-6 text-center"
          style={{
            background: 'transparent',
            border: '2px dashed var(--accent)',
          }}
        >
          <p
            className="text-xs md:text-sm leading-relaxed"
            style={{ color: 'var(--foreground)', opacity: 0.9 }}
          >
            <span style={{ color: 'var(--accent)' }}>🎯 Key Insight:</span> LLMs
            have knowledge cutoffs. Your competitive advantage lies in{' '}
            <span style={{ color: 'var(--primary)' }}>
              researching what AI doesn&apos;t know
            </span>{' '}
            — emerging tools, new frameworks, and cutting-edge practices — while
            ensuring best practices in{' '}
            <span style={{ color: 'var(--accent)' }}>Security</span>,{' '}
            <span style={{ color: 'var(--accent)' }}>Scalability</span>, and{' '}
            <span style={{ color: 'var(--accent)' }}>Cost Efficiency</span>.
          </p>
        </div>
      </div>
    </section>
  );
}
