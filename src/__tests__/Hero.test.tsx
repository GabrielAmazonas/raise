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

  it('renders call-to-action links', () => {
    render(<Hero />);
    expect(screen.getByText('Get In Touch')).toBeInTheDocument();
    expect(screen.getByText('Implementation')).toBeInTheDocument();
  });
});
