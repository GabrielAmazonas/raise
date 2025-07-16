import Link from 'next/link';

export default function Hero() {
  return (
    <section className="py-20" style={{ background: '#000' }}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center">
          <h1 className="project-title text-4xl md:text-6xl font-bold mb-6">
            RAISE - Research-Driven AI-First Software Engineering
          </h1>
          <p className="text-xl md:text-2xl text-accent mb-8 max-w-3xl mx-auto">
            Supporting the Software Engineering community with research-driven
            approaches to AI-first software engineering.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link
              href="https://www.linkedin.com/in/gabriel-amazonas"
              target="_blank"
              rel="noopener noreferrer"
              className="border border-blue-600 text-blue-600 hover:bg-blue-600 hover:text-white px-8 py-3 rounded-lg font-medium transition-colors duration-200"
            >
              Get In Touch
            </Link>
          </div>
        </div>

        {/* Tech Stack Preview */}
        <div className="mt-16">
          <h2 className="text-lg font-semibold text-gray-400 mb-6 text-center">
            LLM Models
          </h2>
          <div className="flex flex-wrap justify-center gap-4">
            {[
              'OpenAI - GPT-4o',
              'Anthropic - claude-4-sonnet',
              'Google - Gemini 2.5 Pro',
            ].map(tech => (
              <span
                key={tech}
                className="bg-white px-4 py-2 rounded-full text-sm font-medium text-gray-700 shadow-sm"
              >
                {tech}
              </span>
            ))}
          </div>
        </div>
        {/* Tools */}
        <div className="mt-16">
          <h2 className="text-lg font-semibold text-gray-400 mb-6 text-center">
            Tools
          </h2>
          <div className="flex flex-wrap justify-center gap-4">
            {['ChatGPT', 'Cursor', 'GitHub', 'Gemini CLI'].map(tech => (
              <span
                key={tech}
                className="bg-white px-4 py-2 rounded-full text-sm font-medium text-gray-700 shadow-sm"
              >
                {tech}
              </span>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
