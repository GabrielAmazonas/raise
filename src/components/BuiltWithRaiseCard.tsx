import { BuiltWithRaiseProject } from '@/types';

interface BuiltWithRaiseCardProps {
  project: BuiltWithRaiseProject;
}

export default function BuiltWithRaiseCard({
  project,
}: BuiltWithRaiseCardProps) {
  return (
    <div className="bg-white rounded-lg shadow-md overflow-hidden hover:shadow-lg transition-shadow duration-300 flex flex-col">
      <div className="p-6 flex-grow">
        <div className="flex items-center justify-between mb-2">
          <a
            href={project.projectUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="text-xl font-semibold text-gray-900 hover:text-blue-600 transition-colors"
          >
            {project.title}
          </a>
          <a
            href={project.projectUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="text-blue-400 hover:text-blue-600 transition-colors"
            aria-label={`Visit ${project.title}`}
          >
            <svg
              className="w-6 h-6"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14"
              ></path>
            </svg>
          </a>
        </div>
        <p className="text-gray-600 mb-4">{project.description}</p>
        <div className="border-t pt-4">
          <h4 className="text-sm font-medium text-gray-900 mb-2">
            Problem Solved
          </h4>
          <p className="text-gray-700 text-sm leading-relaxed">
            {project.problemSolved}
          </p>
        </div>
      </div>
    </div>
  );
}
