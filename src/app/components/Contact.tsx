'use client';
import { useFeatherIcons } from '@/hooks/useFeatherIcons';

export default function Contact() {
  useFeatherIcons();

  return (
    <section id="contact" className="relative z-10 py-20 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="text-3xl font-bold text-center mb-12">Let&apos;s Connect</h2>
        <div className="flex flex-col md:flex-row">
          <div className="md:w-1/2 mb-10 md:mb-0">
            <h3 className="text-xl font-semibold mb-4">Get in Touch</h3>
            <p className="mb-6">
              I&apos;m always open to discussing new projects, creative ideas or opportunities to be
              part of your vision.
            </p>
            <div className="space-y-4">
              <div className="flex items-center">
                <i data-feather="mail" className="mr-4 text-indigo-600"></i>
                <span>axelds404@gmail.com</span>
              </div>
              <div className="flex items-center">
                <i data-feather="map-pin" className="mr-4 text-indigo-600"></i>
                <span>Chilpancingo, Guerrero, México.</span>
              </div>
            </div>
            <div className="mt-8 flex space-x-4">
              <a 
                href="https://github.com/axelcodeds"
                className="w-10 h-10 flex items-center justify-center bg-gray-200 rounded-full hover:bg-indigo-600 hover:text-white transition"
              >
                <i data-feather="github" className="w-5 h-5"></i>
              </a>
            </div>
          </div>
          <div className="md:w-1/2 md:pl-12">
            <form className="space-y-4">
              <div>
                <label htmlFor="name" className="block mb-1">Name</label>
                <input 
                  type="text" 
                  id="name"
                  className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-indigo-500"
                />
              </div>
              <div>
                <label htmlFor="email" className="block mb-1">Email</label>
                <input 
                  type="email" 
                  id="email"
                  className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-indigo-500"
                />
              </div>
              <div>
                <label htmlFor="subject" className="block mb-1">Subject</label>
                <input 
                  type="text" 
                  id="subject"
                  className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-indigo-500"
                />
              </div>
              <div>
                <label htmlFor="message" className="block mb-1">Message</label>
                <textarea 
                  id="message" 
                  rows={4}
                  className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-indigo-500"
                ></textarea>
              </div>
              <button 
                type="submit" 
                disabled
                className="px-6 py-3 bg-indigo-600 text-white rounded-md hover:bg-indigo-700 transition w-full"
              >
                Send Message <i data-feather="send" className="ml-2 w-4 h-4 inline"></i>
              </button>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
}