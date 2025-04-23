import React from 'react';
import { navItems } from '../data/navItems';
import { Code, Heart } from 'lucide-react';

function Footer() {
  const currentYear = new Date().getFullYear();
  
  return (
    <footer className="bg-gray-900 text-white py-12">
      <div className="container mx-auto px-4 md:px-6">
        <div className="flex flex-col md:flex-row justify-between items-center mb-8">
          <div className="flex items-center gap-2 text-lg font-semibold mb-4 md:mb-0">
            <Code className="text-blue-400" size={24} />
            <span>Shiv Poojan</span>
          </div>
          
          <nav className="flex flex-wrap justify-center gap-6">
            {navItems.map((item) => (
              <a 
                key={item.href}
                href={item.href}
                className="text-gray-300 hover:text-blue-400 transition-colors"
              >
                {item.label}
              </a>
            ))}
          </nav>
        </div>
        
        <hr className="border-gray-800 mb-8" />
        
        <div className="flex flex-col md:flex-row justify-between items-center">
          <p className="text-gray-400 mb-4 md:mb-0">
            © {currentYear} Shiv Poojan. All rights reserved.
          </p>
          
          <div className="flex items-center gap-1 text-gray-400">
            <span>Made with</span>
            <Heart size={16} className="text-red-500 fill-current" />
            <span>using React & Tailwind CSS</span>
          </div>
        </div>
      </div>
    </footer>
  );
}

export default Footer;