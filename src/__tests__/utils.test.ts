import '@testing-library/jest-dom';
import {
  formatDate,
  getProficiencyColor,
  getCategoryColor,
  calculateYearsOfExperience,
  truncateText,
} from '../utils';

describe('Utils', () => {
  describe('formatDate', () => {
    it('formats date correctly', () => {
      const result = formatDate('2023-01-15');
      expect(result).toMatch(/January 2023/);
    });
  });

  describe('getProficiencyColor', () => {
    it('returns correct color for each proficiency level', () => {
      expect(getProficiencyColor('beginner')).toBe('bg-gray-200 text-gray-800');
      expect(getProficiencyColor('intermediate')).toBe(
        'bg-blue-200 text-blue-800'
      );
      expect(getProficiencyColor('advanced')).toBe(
        'bg-green-200 text-green-800'
      );
      expect(getProficiencyColor('expert')).toBe(
        'bg-purple-200 text-purple-800'
      );
    });
  });

  describe('getCategoryColor', () => {
    it('returns correct color for each category', () => {
      expect(getCategoryColor('frontend')).toBe('bg-blue-100 text-blue-800');
      expect(getCategoryColor('backend')).toBe('bg-green-100 text-green-800');
      expect(getCategoryColor('database')).toBe(
        'bg-yellow-100 text-yellow-800'
      );
      expect(getCategoryColor('devops')).toBe('bg-purple-100 text-purple-800');
      expect(getCategoryColor('other')).toBe('bg-gray-100 text-gray-800');
    });
  });

  describe('calculateYearsOfExperience', () => {
    it('calculates years correctly', () => {
      const startDate = '2020-01-01';
      const endDate = '2023-01-01';
      const result = calculateYearsOfExperience(startDate, endDate);
      expect(result).toBe(3);
    });

    it('calculates years from start date to now when no end date', () => {
      const startDate = '2020-01-01';
      const result = calculateYearsOfExperience(startDate);
      expect(result).toBeGreaterThan(3);
    });
  });

  describe('truncateText', () => {
    it('truncates text longer than max length', () => {
      const text = 'This is a very long text that should be truncated';
      const result = truncateText(text, 20);
      expect(result).toBe('This is a very long ...');
    });

    it('returns original text if shorter than max length', () => {
      const text = 'Short text';
      const result = truncateText(text, 20);
      expect(result).toBe('Short text');
    });
  });
});
