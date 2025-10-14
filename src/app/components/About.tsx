'use client';
import { useFeatherIcons } from '@/hooks/useFeatherIcons';

export default function About() {
  useFeatherIcons();

  return (
    <section id="about" className="relative z-10 py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="text-3xl font-bold text-center mb-12">About Me</h2>
        <div className="flex flex-col md:flex-row items-center">
          <div className="md:w-1/3 mb-8 md:mb-0 flex justify-center">
            <div className="w-64 h-64 rounded-lg overflow-hidden shadow-lg">
              <img 
                src="http://static.photos/workspace/640x360/23" 
                alt="Working"
                className="w-full h-full object-cover"
              />
            </div>
          </div>
          <div className="md:w-2/3 md:pl-12">
            <p className="text-lg mb-6">
              I&apos;m currently pursuing a degree in Computer Engineering with a passion for software development
              and hardware integration. My journey in tech began when I built my first program at 15, and
              since then I&apos;ve been fascinated by how technology can solve real-world problems.
            </p>
            <p className="text-lg mb-6">
              When I&apos;m not coding, you can find me participating in hackathons, contributing to open-source
              projects, or exploring the latest advancements in AI and IoT.
            </p>
            <div className="flex flex-wrap gap-4">
              <div className="flex items-center">
                <i data-feather="map-pin" className="mr-2 text-indigo-600"></i>
                <span>Universidad Autónoma de Guerrero</span>
              </div>
              <div className="flex items-center">
                <i data-feather="book" className="mr-2 text-indigo-600"></i>
                <span>Computer Engineering</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}