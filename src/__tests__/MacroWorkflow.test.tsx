import React from 'react';
import '@testing-library/jest-dom';
import { render, screen, fireEvent } from '@testing-library/react';
import MacroWorkflow from '../components/MacroWorkflow';

describe('MacroWorkflow', () => {
  it('renders the section heading', () => {
    render(<MacroWorkflow />);
    expect(screen.getByText('The RAISE Workflow')).toBeInTheDocument();
  });

  it('renders the core principle banner', () => {
    render(<MacroWorkflow />);
    expect(screen.getByText(/Core Principle:/)).toBeInTheDocument();
  });

  it('renders all workflow steps', () => {
    render(<MacroWorkflow />);
    ['RESEARCH', 'DEFINE', 'IMPLEMENT', 'VALIDATE', 'ITERATE'].forEach(step => {
      expect(screen.getByText(step)).toBeInTheDocument();
    });
  });

  it('renders the key insight section', () => {
    render(<MacroWorkflow />);
    expect(screen.getByText(/Key Insight:/)).toBeInTheDocument();
  });

  it('renders the legend items', () => {
    render(<MacroWorkflow />);
    expect(screen.getByText('Human-Led Research')).toBeInTheDocument();
    expect(screen.getByText('Human-AI Collaboration')).toBeInTheDocument();
    expect(screen.getByText('AI-Driven Execution')).toBeInTheDocument();
  });

  it('shows expanded details on step click', () => {
    render(<MacroWorkflow />);
    const researchStep = screen
      .getByText('RESEARCH')
      .closest('.cursor-pointer');
    if (researchStep) {
      fireEvent.click(researchStep);
      expect(screen.getByText('Research & Discover')).toBeInTheDocument();
      expect(screen.getByText('HUMAN ROLE')).toBeInTheDocument();
      expect(screen.getByText('AI ROLE')).toBeInTheDocument();
    }
  });
});
