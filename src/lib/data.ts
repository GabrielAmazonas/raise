import {
  ScientificPaper,
  CommunityReference,
  BuiltWithRaiseProject,
} from '@/types';

export const scientificPapers: ScientificPaper[] = [
  {
    id: '1',
    title: 'Attention Is All You Need',
    institutions: ['Google', 'University of Toronto'],
    paperUrl: 'https://arxiv.org/abs/1706.03762',
  },
  {
    id: '2',
    title:
      'Large Language Models (LLMs): Deployment, Tokenomics and Sustainability',
    institutions: ['Huawei', 'University of Ottawa'],
    paperUrl: 'https://arxiv.org/abs/2405.17147',
  },
  {
    id: '3',
    title: 'Early science acceleration experiments with GPT-5',
    institutions: ['OpenAI', 'Harvard University', 'University of Cambridge'],
    paperUrl: 'https://arxiv.org/abs/2511.16072',
  },
];

export const communityReferences: CommunityReference[] = [
  {
    id: '1',
    name: 'Uncle Bob Martin',
    twitterUrl: 'https://twitter.com/unclebobmartin',
    postImageUrl: '/uncle-bob-tdd.webp',
    description: 'Clean Code advocate and Agile development pioneer',
    idea: 'Test-Driven Development principles that guide robust software architecture and maintainable code practices',
  },
  {
    id: '2',
    name: 'Kent Beck',
    twitterUrl: 'https://twitter.com/kentbeck',
    postImageUrl: '/kent-beck-on-ai.webp',
    description: 'Creator of Extreme Programming and Test-Driven Development',
    idea: 'AI-assisted development workflows that enhance productivity while maintaining code quality and developer creativity',
  },
  {
    id: '3',
    name: 'Terence Tao',
    twitterUrl: 'https://mathstodon.xyz/@tao',
    postImageUrl: '/terence-tao.webp',
    description: 'Renowned mathematician and Fields Medalist',
    idea: 'AI applications on Mathematics reasearch, enabling complex problem-solving and theorem proving through advanced computational techniques',
  },
];

export const builtWithRaiseProjects: BuiltWithRaiseProject[] = [
  {
    id: '1',
    title: 'Data Explorer',
    projectUrl: 'https://data-explorer-delta.vercel.app/',
    description:
      'A completely offline tool that allows you to explore large datasets, outperforming traditional tools like Microsoft Excel and Google Sheets.',
    problemSolved:
      'Efficiently analyze large files without the performance limitations of conventional spreadsheet software.',
  },
  {
    id: '2',
    title: 'Data Modeling',
    projectUrl: 'https://data-modeling.vercel.app/',
    description:
      'Write DDL SQL code and instantly visualize the resulting database diagrams, helping you make informed modeling decisions.',
    problemSolved:
      'Provides an intuitive, visual tool for database design that is more user-friendly than offerings from major cloud providers like AWS and GCP.',
  },
];
