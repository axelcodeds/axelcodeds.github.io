'use client';
import { useFeatherIcons } from '@/hooks/useFeatherIcons';

export default function Hero() {
  useFeatherIcons();

  return (
    <section className="relative z-10 hero-gradient text-white py-20 md:py-32">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col md:flex-row items-center">
          <div className="md:w-1/2 mb-10 md:mb-0">
            <h1 className="text-4xl md:text-5xl font-bold mb-4">Building Digital Dreams</h1>
            <p className="text-xl mb-8 opacity-90">
              Hi, I&apos;m a Computer Engineering student passionate about creating
              innovative solutions through code.
            </p>
            <div className="flex space-x-4">
              <a
                href="#projects"
                className="px-6 py-3 bg-white text-indigo-600 rounded-md font-medium hover:bg-gray-100 transition"
              >
                View My Work
              </a>
              <a
                href="#contact"
                className="px-6 py-3 border-2 border-white text-white rounded-md font-medium hover:bg-white hover:text-indigo-600 transition"
              >
                Contact Me
              </a>
            </div>
          </div>
          <div className="md:w-1/2 flex justify-center">
            <div className="relative">
              <div className="w-64 h-64 md:w-80 md:h-80 bg-white rounded-full overflow-hidden border-4 border-white shadow-xl">
                <img 
                  src="http://static.photos/technology/640x360/42" 
                  alt="Profile"
                  className="w-full h-full object-cover"
                />
              </div>
              <div className="absolute -bottom-4 -right-4 bg-indigo-600 rounded-full p-3 shadow-lg">
                <i data-feather="code" className="w-8 h-8"></i>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}