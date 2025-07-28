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
            <Link
              href="https://github.com/gabrielamazonas/raise"
              target="_blank"
              rel="noopener noreferrer"
              className="border border-gray-800 text-gray-800 hover:bg-gray-800 hover:text-white px-8 py-3 rounded-lg font-medium transition-colors duration-200 flex items-center justify-center gap-2"
              aria-label="Implementation"
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 24 24"
                fill="currentColor"
                className="w-5 h-5"
              >
                <path d="M12 2C6.477 2 2 6.484 2 12.021c0 4.428 2.865 8.184 6.839 9.504.5.092.682-.217.682-.483 0-.237-.009-.868-.014-1.703-2.782.605-3.369-1.342-3.369-1.342-.454-1.157-1.11-1.465-1.11-1.465-.908-.62.069-.608.069-.608 1.004.07 1.532 1.032 1.532 1.032.892 1.53 2.341 1.088 2.91.832.092-.647.35-1.088.636-1.339-2.221-.253-4.555-1.113-4.555-4.951 0-1.093.39-1.988 1.029-2.688-.103-.253-.446-1.272.098-2.65 0 0 .84-.27 2.75 1.025A9.564 9.564 0 0 1 12 6.844c.85.004 1.705.115 2.504.337 1.909-1.295 2.748-1.025 2.748-1.025.546 1.378.202 2.397.1 2.65.64.7 1.028 1.595 1.028 2.688 0 3.847-2.337 4.695-4.566 4.944.359.309.678.92.678 1.855 0 1.338-.012 2.419-.012 2.749 0 .268.18.579.688.481C19.138 20.2 22 16.447 22 12.021 22 6.484 17.523 2 12 2Z" />
              </svg>
              <span className="inline">Implementation</span>
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
