import React from 'react';
import '@testing-library/jest-dom';
import { render, screen } from '@testing-library/react';
import ProjectCard from '../components/ProjectCard';
import { Project } from '../types';

describe('ProjectCard', () => {
  const project: Project = {
    id: '1',
    title: 'Test Project',
    description: 'A test project.',
    technologies: ['React', 'TypeScript'],
    githubUrl: 'https://github.com/test/project',
    liveUrl: 'https://test.com',
    featured: true,
  };

  it('renders project title, description, and technologies', () => {
    render(<ProjectCard project={project} />);
    expect(screen.getByText('Test Project')).toBeInTheDocument();
    expect(screen.getByText('A test project.')).toBeInTheDocument();
    expect(screen.getByText('React')).toBeInTheDocument();
    expect(screen.getByText('TypeScript')).toBeInTheDocument();
  });

  it('renders github and live links', () => {
    render(<ProjectCard project={project} />);
    expect(screen.getAllByRole('link').length).toBeGreaterThanOrEqual(2);
  });
});
