import {
  scientificPapers,
  communityReferences,
  builtWithRaiseProjects,
} from '../data';

describe('data', () => {
  test('scientificPapers should have valid entries', () => {
    expect(scientificPapers.length).toBeGreaterThan(0);
    scientificPapers.forEach(paper => {
      expect(paper).toHaveProperty('id');
      expect(paper).toHaveProperty('title');
      expect(paper).toHaveProperty('institutions');
      expect(paper).toHaveProperty('paperUrl');
    });
  });

  test('communityReferences should have valid entries', () => {
    expect(communityReferences.length).toBeGreaterThan(0);
    communityReferences.forEach(ref => {
      expect(ref).toHaveProperty('id');
      expect(ref).toHaveProperty('name');
      expect(ref).toHaveProperty('twitterUrl');
      expect(ref).toHaveProperty('postImageUrl');
      expect(ref).toHaveProperty('description');
      expect(ref).toHaveProperty('idea');
    });
  });

  test('builtWithRaiseProjects should have valid entries', () => {
    expect(builtWithRaiseProjects.length).toBeGreaterThan(0);
    builtWithRaiseProjects.forEach(project => {
      expect(project).toHaveProperty('id');
      expect(project).toHaveProperty('title');
      expect(project).toHaveProperty('projectUrl');
      expect(project).toHaveProperty('description');
      expect(project).toHaveProperty('problemSolved');
    });
  });
});
