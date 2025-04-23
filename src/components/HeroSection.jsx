import React from "react";
import { Github, Linkedin, Mail, ChevronDown } from "lucide-react";

function HeroSection() {
  return (
    <section
      id="home"
      className="min-h-screen pt-24 flex flex-col justify-center relative"
    >
      <div className="container mx-auto px-4 md:px-6 py-12 md:py-24">
        <div className="max-w-3xl mx-auto">
          <h1 className="animate-fade-in text-4xl md:text-5xl lg:text-6xl font-bold text-gray-900 dark:text-white mb-6">
            <span className="block">Hi, I'm Shiv Poojan</span>
            <span className="text-blue-600 dark:text-blue-400">
              Full Stack Developer
            </span>
          </h1>

          <p className="text-lg md:text-xl text-gray-700 dark:text-gray-300 mb-8 leading-relaxed">
            I am a motivated developer with a strong interest in modern web
            technologies. I specialize in frontend development using tools like
            React and Tailwind CSS, and have a solid foundation in C++ for
            problem-solving and algorithmic thinking.
          </p>

          <div className="flex flex-wrap gap-4 mb-12">
            <a
              href="#contact"
              className="px-6 py-3 bg-blue-600 hover:bg-blue-700 text-white rounded-md transition-colors"
            >
              Contact Me
            </a>
            <a
              href="#projects"
              className="px-6 py-3 bg-gray-200 dark:bg-gray-800 hover:bg-gray-300 dark:hover:bg-gray-700 text-gray-900 dark:text-white rounded-md transition-colors"
            >
              View My Work
            </a>
          </div>

          <div className="flex gap-4">
            <a
              href="https://github.com/ishivpoojan22"
              target="_blank"
              rel="noopener noreferrer"
              className="p-2 rounded-full hover:bg-gray-100 dark:hover:bg-gray-800 transition-colors"
              aria-label="GitHub"
            >
              <Github size={24} className="text-gray-700 dark:text-gray-300" />
            </a>
            <a
              href="https://www.linkedin.com/in/shiv-poojan22/"
              target="_blank"
              rel="noopener noreferrer"
              className="p-2 rounded-full hover:bg-gray-100 dark:hover:bg-gray-800 transition-colors"
              aria-label="LinkedIn"
            >
              <Linkedin
                size={24}
                className="text-gray-700 dark:text-gray-300"
              />
            </a>
            <a
              href="mailto:myselfsp22@gmail.com"
              className="p-2 rounded-full hover:bg-gray-100 dark:hover:bg-gray-800 transition-colors"
              aria-label="Email"
            >
              <Mail size={24} className="text-gray-700 dark:text-gray-300" />
            </a>
          </div>
        </div>
      </div>

      <a
        href="#about"
        className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce p-2"
        aria-label="Scroll to About section"
      >
        <ChevronDown size={24} className="text-gray-700 dark:text-gray-300" />
      </a>
    </section>
  );
}

export default HeroSection;
