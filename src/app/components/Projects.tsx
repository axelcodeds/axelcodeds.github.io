'use client';
import { useFeatherIcons } from '@/hooks/useFeatherIcons';

export default function Projects() {
  useFeatherIcons();

  return (
    <section id="projects" className="relative z-10 py-20 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="text-3xl font-bold text-center mb-12">Featured Projects</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {/* Project 1 */}
          <div className="bg-white rounded-xl overflow-hidden shadow-md card-hover">
            <div className="h-48 overflow-hidden">
              <img 
                src="http://static.photos/technology/640x360/1" 
                alt="Project 1"
                className="w-full h-full object-cover"
              />
            </div>
            <div className="p-6">
              <h3 className="text-xl font-bold mb-2">AURA Guerrero</h3>
              <p className="text-gray-600 mb-4">
                AURA Guerrero is an open-source web application that provides
                public access to air quality and UV radiation data for Guerrero, Mexico.
              </p>
              <div className="flex flex-wrap gap-2 mb-4">
                <span className="px-3 py-1 bg-indigo-100 text-indigo-800 rounded-full text-sm">HTML</span>
                <span className="px-3 py-1 bg-indigo-100 text-indigo-800 rounded-full text-sm">CSS</span>
                <span className="px-3 py-1 bg-indigo-100 text-indigo-800 rounded-full text-sm">JavaScript</span>
                <span className="px-3 py-1 bg-indigo-100 text-indigo-800 rounded-full text-sm">TailwindCSS</span>
              </div>
              <a 
                href="https://github.com/axelcodeds/nasa_challenge"
                className="text-indigo-600 font-medium flex items-center"
              >
                View Project <i data-feather="arrow-right" className="ml-2 w-4 h-4"></i>
              </a>
            </div>
          </div>
        </div>
        <div className="text-center mt-12">
          <a 
            href="https://github.com/axelcodeds"
            className="px-6 py-3 border-2 border-indigo-600 text-indigo-600 rounded-md font-medium hover:bg-indigo-600 hover:text-white transition inline-flex items-center"
          >
            View All Projects <i data-feather="github" className="ml-2 w-5 h-5"></i>
          </a>
        </div>
      </div>
    </section>
  );
}