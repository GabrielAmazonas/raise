import Image from 'next/image';
import { CommunityReference } from '@/types';

interface CommunityReferenceCardProps {
  reference: CommunityReference;
}

export default function CommunityReferenceCard({
  reference,
}: CommunityReferenceCardProps) {
  return (
    <div className="bg-white rounded-lg shadow-md overflow-hidden hover:shadow-lg transition-shadow duration-300">
      {/* Post Image */}
      <div className="relative aspect-video bg-gray-100 overflow-hidden">
        <Image
          src={reference.postImageUrl}
          alt={`${reference.name} post`}
          fill
          className="object-contain"
        />
      </div>

      <div className="p-6">
        {/* Name and Twitter Link */}
        <div className="flex items-center justify-between mb-3">
          <h3 className="text-xl font-semibold text-gray-900">
            {reference.name}
          </h3>
          <a
            href={reference.twitterUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="text-blue-400 hover:text-blue-600 transition-colors"
            aria-label={`Follow ${reference.name} on Twitter`}
          >
            <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
              <path d="M23.953 4.57a10 10 0 01-2.825.775 4.958 4.958 0 002.163-2.723c-.951.555-2.005.959-3.127 1.184a4.92 4.92 0 00-8.384 4.482C7.69 8.095 4.067 6.13 1.64 3.162a4.822 4.822 0 00-.666 2.475c0 1.71.87 3.213 2.188 4.096a4.904 4.904 0 01-2.228-.616v.06a4.923 4.923 0 003.946 4.827 4.996 4.996 0 01-2.212.085 4.936 4.936 0 004.604 3.417 9.867 9.867 0 01-6.102 2.105c-.39 0-.779-.023-1.17-.067a13.995 13.995 0 007.557 2.209c9.053 0 13.998-7.496 13.998-13.985 0-.21 0-.42-.015-.63A9.935 9.935 0 0024 4.59z" />
            </svg>
          </a>
        </div>

        {/* Description */}
        <p className="text-gray-600 mb-4 text-sm">{reference.description}</p>

        {/* Idea Implementation */}
        <div className="border-t pt-4">
          <h4 className="text-sm font-medium text-gray-900 mb-2">
            Implemented Idea:
          </h4>
          <p className="text-gray-700 text-sm leading-relaxed">
            {reference.idea}
          </p>
        </div>
      </div>
    </div>
  );
}
