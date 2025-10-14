export default function Footer() {
  return (
    <footer className="relative z-10 bg-gray-900 text-white py-10">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col md:flex-row justify-between items-center">
          <div className="mb-6 md:mb-0">
            <span className="text-xl font-bold text-indigo-400">Axel Diego</span>
            <p className="mt-2 text-gray-400">Building the future, one line of code at a time.</p>
          </div>
          <div className="flex space-x-6">
            <a href="#about" className="text-gray-400 hover:text-white transition">About</a>
            <a href="#projects" className="text-gray-400 hover:text-white transition">Projects</a>
            <a href="#skills" className="text-gray-400 hover:text-white transition">Skills</a>
            <a href="#contact" className="text-gray-400 hover:text-white transition">Contact</a>
          </div>
        </div>
        <div className="mt-8 pt-8 border-t border-gray-800 text-center text-gray-500">
          <p>&copy; 2025 Axel Diego. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
}