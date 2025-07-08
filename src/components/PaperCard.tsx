import { ScientificPaper } from '@/types';

interface PaperCardProps {
  paper: ScientificPaper;
}

export default function PaperCard({ paper }: PaperCardProps) {
  return (
    <div className="bg-white rounded-lg shadow-md overflow-hidden hover:shadow-lg transition-shadow duration-300">
      <div className="p-6">
        <div className="flex items-start justify-between mb-4">
          <h3 className="text-xl font-semibold text-gray-900 mb-2 leading-tight">
            {paper.title}
          </h3>
        </div>
        <div className="mb-4">
          <h4 className="text-sm font-medium text-gray-700 mb-2">
            Institutions:
          </h4>
          <div className="flex flex-wrap gap-2">
            {paper.institutions.map((institution, index) => (
              <span
                key={index}
                className="px-3 py-1 bg-blue-100 text-blue-800 text-sm rounded-full"
              >
                {institution}
              </span>
            ))}
          </div>
        </div>

        <div className="flex items-center gap-4">
          <a
            href={paper.paperUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center px-4 py-2 bg-indigo-600 text-white text-sm font-medium rounded-md hover:bg-indigo-700 transition-colors duration-200"
          >
            <svg
              className="w-4 h-4 mr-2"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14"
              />
            </svg>
            Read Paper
          </a>
        </div>
      </div>
    </div>
  );
}
