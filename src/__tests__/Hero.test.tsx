import React from 'react';
import '@testing-library/jest-dom';
import { render, screen } from '@testing-library/react';
import Hero from '../components/Hero';

describe('Hero', () => {
  it('renders main heading', () => {
    render(<Hero />);
    expect(
      screen.getByText('RAISE - Research-Driven AI-First Software Engineering')
    ).toBeInTheDocument();
  });

  it('renders LLM models and tools', () => {
    render(<Hero />);
    [
      'OpenAI - GPT-4o',
      'Anthropic - claude-4-sonnet',
      'Google - Gemini 2.5 Pro',
      'ChatGPT',
      'Cursor',
      'GitHub',
      'Gemini CLI',
    ].forEach(item => {
      expect(screen.getByText(item)).toBeInTheDocument();
    });
  });
});
