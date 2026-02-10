import React from 'react';
import '@testing-library/jest-dom';
import { render, screen } from '@testing-library/react';
import Hero from '../components/Hero';

describe('Hero', () => {
  it('renders main heading', () => {
    render(<Hero />);
    expect(
      screen.getByText('IMPACTE: An AI-First Software Engineering Framework')
    ).toBeInTheDocument();
  });

  it('renders subtitle', () => {
    render(<Hero />);
    expect(
      screen.getByText(
        /Intelligent Multi-Agent Product-Centric Architecture with Cost-Efficiency and Trade-offs Engineering/
      )
    ).toBeInTheDocument();
  });

  it('renders call-to-action links', () => {
    render(<Hero />);
    expect(screen.getByText('Get In Touch')).toBeInTheDocument();
    expect(screen.getByText('Implementation')).toBeInTheDocument();
  });
});
