import Header from '@/components/Header';
import Hero from '@/components/Hero';
import CommunityReferenceCard from '@/components/CommunityReferenceCard';
import PaperCard from '@/components/PaperCard';
import { communityReferences, scientificPapers } from '@/lib/data';

export default function Home() {
  return (
    <div className="min-h-screen bg-gray-50">
      <Header />
      <main>
        <Hero />
        {/* Scientific Inspiration Section */}
        <section id="scientific-inspiration" className="py-20 bg-white">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <h2 className="text-3xl font-bold text-gray-900 mb-10 text-center">
              Research-Driven Foundations
            </h2>
            <div className="grid gap-8 grid-cols-1 md:grid-cols-2">
              {scientificPapers.map(paper => (
                <PaperCard key={paper.id} paper={paper} />
              ))}
            </div>
          </div>
        </section>

        {/* Community References Section */}
        <section
          id="community-references"
          className="py-20"
          style={{ background: '#181028' }}
        >
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <h2 className="text-3xl font-bold text-white mb-10 text-center">
              Community References
            </h2>
            <div className="grid gap-8 grid-cols-1 md:grid-cols-2">
              {communityReferences.map(reference => (
                <CommunityReferenceCard
                  key={reference.id}
                  reference={reference}
                />
              ))}
            </div>
          </div>
        </section>
      </main>
    </div>
  );
}
