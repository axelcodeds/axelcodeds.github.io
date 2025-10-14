'use client';
import { useFeatherIcons } from '@/hooks/useFeatherIcons';

export default function Navigation() {
  useFeatherIcons();

  const handleMobileMenu = () => {
    alert("Mobile menu would open here");
  };

  return (
    <nav className="relative z-10 bg-white bg-opacity-80 backdrop-filter backdrop-blur-sm shadow-sm">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between h-16">
          <div className="flex items-center">
            <span className="text-xl font-bold text-indigo-600">Axel Diego</span>
          </div>
          <div className="hidden md:flex items-center space-x-8">
            <a href="#about" className="text-gray-700 hover:text-indigo-600 transition">About</a>
            <a href="#projects" className="text-gray-700 hover:text-indigo-600 transition">Projects</a>
            <a href="#skills" className="text-gray-700 hover:text-indigo-600 transition">Skills</a>
            <a href="#contact" className="text-gray-700 hover:text-indigo-600 transition">Contact</a>
            <a href="#" className="px-4 py-2 bg-indigo-600 text-white rounded-md hover:bg-indigo-700 transition">Resume</a>
          </div>
          <div className="md:hidden flex items-center">
            <button id="mobile-menu-button" onClick={handleMobileMenu}>
              <i data-feather="menu"></i>
            </button>
          </div>
        </div>
      </div>
    </nav>
  );
}