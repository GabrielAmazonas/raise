import { Skill } from '@/types';

export const formatDate = (dateString: string): string => {
  const date = new Date(dateString);
  return date.toLocaleDateString('en-US', {
    year: 'numeric',
    month: 'long',
  });
};

export const getProficiencyColor = (
  proficiency: Skill['proficiency']
): string => {
  const colors = {
    beginner: 'bg-gray-200 text-gray-800',
    intermediate: 'bg-blue-200 text-blue-800',
    advanced: 'bg-green-200 text-green-800',
    expert: 'bg-purple-200 text-purple-800',
  };
  return colors[proficiency];
};

export const getCategoryColor = (category: Skill['category']): string => {
  const colors = {
    frontend: 'bg-blue-100 text-blue-800',
    backend: 'bg-green-100 text-green-800',
    database: 'bg-yellow-100 text-yellow-800',
    devops: 'bg-purple-100 text-purple-800',
    other: 'bg-gray-100 text-gray-800',
  };
  return colors[category];
};

export const calculateYearsOfExperience = (
  startDate: string,
  endDate?: string
): number => {
  const start = new Date(startDate);
  const end = endDate ? new Date(endDate) : new Date();
  const diffTime = Math.abs(end.getTime() - start.getTime());
  const diffYears = diffTime / (1000 * 60 * 60 * 24 * 365.25);
  return Math.round(diffYears * 10) / 10;
};

export const truncateText = (text: string, maxLength: number): string => {
  if (text.length <= maxLength) return text;
  return text.slice(0, maxLength) + '...';
};
