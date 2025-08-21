import React, { useState, useEffect } from 'react';
import { MenuIcon, XIcon, GithubIcon, LinkedinIcon, MailIcon, ArrowUpIcon, HeartIcon } from 'lucide-react';
import Hero from './Hero';
import Projects from './Projects';
import Skills from './Skills';
import FeedBack from './FeedBack';

const Portfolio = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const [showScrollTop, setShowScrollTop] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      const scrollTop = window.scrollY;
      setIsScrolled(scrollTop > 50);
      setShowScrollTop(scrollTop > 300);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth'
    });
  };

  const handleNavClick = (e, href) => {
    e.preventDefault();
    setIsMenuOpen(false);
    const element = document.querySelector(href);
    if (element) {
      element.scrollIntoView({
        behavior: 'smooth',
        block: 'start'
      });
    }
  };

  return (
    <div className="min-h-screen bg-slate-900">
      {/* Enhanced Navigation */}
      <nav className={`fixed w-full z-50 transition-all duration-300 ${
        isScrolled
          ? 'bg-slate-900/95 backdrop-blur-md shadow-2xl border-b border-gray-700/50'
          : 'bg-transparent'
      }`}>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center h-20">
            {/* Logo + Tagline */}
            <div className="flex flex-col">
              <span className="text-3xl font-extrabold bg-gradient-to-r from-blue-400 to-purple-500 bg-clip-text text-transparent">
                Om Pawar
              </span>
              <span className="text-sm text-gray-400 font-medium tracking-wide">
                Full Stack Developer
              </span>
            </div>

            {/* Desktop Navigation */}
            <div className="hidden md:flex items-center space-x-2">
              {[
                { href: '#home', label: 'Home' },
                { href: '#projects', label: 'Projects' },
                { href: '#skills', label: 'Skills' },
                { href: '#contact', label: 'Contact' }
              ].map((item) => (
                <a
                  key={item.href}
                  href={item.href}
                  onClick={(e) => handleNavClick(e, item.href)}
                  className="relative px-5 py-3 text-lg text-gray-300 hover:text-white font-semibold transition-all duration-300 group"
                >
                  <span className="relative z-10">{item.label}</span>
                  <div className="absolute inset-0 bg-gradient-to-r from-blue-600/20 to-purple-600/20 rounded-lg opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                  <div className="absolute bottom-0 left-1/2 transform -translate-x-1/2 w-0 h-0.5 bg-gradient-to-r from-blue-400 to-purple-500 group-hover:w-full transition-all duration-300"></div>
                </a>
              ))}

              {/* Call-to-Action Button */}
                  <a
                    href="/Om_Pawar_8208024158.pdf"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="ml-4 px-5 py-2 text-white bg-gradient-to-r from-blue-500 to-purple-500 rounded-xl shadow-lg hover:shadow-purple-600/30 transition-all duration-300 hover:scale-105"
                  >
                    Resume
                  </a>
            </div>

            {/* Mobile Menu Button */}
            <div className="md:hidden">
              <button
                onClick={() => setIsMenuOpen(!isMenuOpen)}
                className="relative p-2 text-gray-300 hover:text-white focus:outline-none group"
              >
                <div className="absolute inset-0 bg-gray-700/50 rounded-lg opacity-0 group-hover:opacity-100 transition-opacity"></div>
                <div className="relative">
                  {isMenuOpen ? <XIcon size={28} /> : <MenuIcon size={28} />}
                </div>
              </button>
            </div>
          </div>
        </div>

        {/* Mobile Menu */}
        <div className={`md:hidden transition-all duration-300 ${
          isMenuOpen
            ? 'max-h-64 opacity-100'
            : 'max-h-0 opacity-0 overflow-hidden'
        }`}>
          <div className="bg-slate-800/95 backdrop-blur-md border-t border-gray-700/50">
            <div className="px-4 py-4 space-y-2">
              {[
                { href: '#home', label: 'Home' },
                { href: '#projects', label: 'Projects' },
                { href: '#skills', label: 'Skills' },
                { href: '#contact', label: 'Contact' }
              ].map((item, index) => (
                <a
                  key={item.href}
                  href={item.href}
                  onClick={(e) => handleNavClick(e, item.href)}
                  className={`block px-4 py-3 text-gray-300 hover:text-white font-medium rounded-lg hover:bg-gray-700/50 transition-all duration-300 transform ${
                    isMenuOpen ? 'translate-x-0 opacity-100' : 'translate-x-4 opacity-0'
                  }`}
                  style={{ transitionDelay: `${index * 50}ms` }}
                >
                  {item.label}
                </a>
              ))}
              <a
                href="/Om-Pawar-Resume.pdf"
                className="block text-center px-4 py-3 mt-2 text-white bg-gradient-to-r from-blue-500 to-purple-500 rounded-lg shadow-md hover:scale-105 transition-all duration-300"
              >
                Resume
              </a>
            </div>
          </div>
        </div>
      </nav>

      {/* Sections */}
      <Hero />
      <Projects />
      <Skills />
      <FeedBack />

      {/* Scroll to Top Button */}
      <button
        onClick={scrollToTop}
        className={`fixed bottom-8 right-8 p-3 bg-gradient-to-r from-blue-600 to-purple-600 text-white rounded-full shadow-lg transition-all duration-300 hover:scale-110 hover:shadow-2xl z-40 ${
          showScrollTop ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10 pointer-events-none'
        }`}
      >
        <ArrowUpIcon size={20} />
      </button>

      {/* Footer */}
      <footer className="relative bg-gradient-to-br from-slate-900 via-slate-800 to-slate-900 text-white overflow-hidden">
        <div className="absolute inset-0 opacity-5">
          <div className="absolute inset-0" style={{
            backgroundImage: `url("data:image/svg+xml,%3Csvg width='40' height='40' viewBox='0 0 40 40' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='%23ffffff' fill-opacity='0.1'%3E%3Cpath d='m0 40l40-40h-40z'/%3E%3C/g%3E%3C/svg%3E")`
          }}></div>
        </div>

        <div className="absolute top-10 left-10 w-16 h-16 bg-blue-500 rounded-full opacity-10 animate-pulse"></div>
        <div className="absolute bottom-10 right-20 w-12 h-12 bg-purple-500 rounded-full opacity-10 animate-bounce"></div>

        <div className="relative z-10">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              <div className="text-center md:text-left">
                <div className="mb-4">
                  <span className="text-3xl font-bold bg-gradient-to-r from-blue-400 to-purple-500 bg-clip-text text-transparent">
                    Om Pawar
                  </span>
                </div>
                <p className="text-gray-400 text-sm leading-relaxed">
                  Full Stack Developer passionate about creating amazing digital experiences 
                  with modern technologies and clean code.
                </p>
              </div>

              <div className="text-center">
                <h3 className="text-lg font-semibold mb-4 text-gray-200">Quick Links</h3>
                <div className="space-y-2">
                  {[
                    { href: '#home', label: 'Home' },
                    { href: '#projects', label: 'Projects' },
                    { href: '#skills', label: 'Skills' },
                    { href: '#contact', label: 'Contact' }
                  ].map((item) => (
                    <a
                      key={item.href}
                      href={item.href}
                      onClick={(e) => handleNavClick(e, item.href)}
                      className="block text-gray-400 hover:text-white transition-colors duration-300 hover:translate-x-1 transform"
                    >
                      {item.label}
                    </a>
                  ))}
                </div>
              </div>

              <div className="text-center md:text-right">
                <h3 className="text-lg font-semibold mb-4 text-gray-200">Let's Connect</h3>
                <div className="flex justify-center md:justify-end space-x-4 mb-4">
                  <a
                    href="https://github.com/Ompawar546"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="group relative p-3 bg-gray-800/50 rounded-full border border-gray-700 hover:border-gray-500 transition-all duration-300 hover:scale-110"
                  >
                    <GithubIcon size={20} className="text-gray-400 group-hover:text-white transition-colors" />
                    <div className="absolute -top-8 left-1/2 transform -translate-x-1/2 bg-gray-800 text-white px-2 py-1 rounded text-xs opacity-0 group-hover:opacity-100 transition-opacity whitespace-nowrap">
                      GitHub
                    </div>
                  </a>

                  <a
                    href="https://www.linkedin.com/in/om-pawar-8848b2249"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="group relative p-3 bg-gray-800/50 rounded-full border border-gray-700 hover:border-blue-500 transition-all duration-300 hover:scale-110 hover:bg-blue-600/20"
                  >
                    <LinkedinIcon size={20} className="text-gray-400 group-hover:text-blue-400 transition-colors" />
                    <div className="absolute -top-8 left-1/2 transform -translate-x-1/2 bg-gray-800 text-white px-2 py-1 rounded text-xs opacity-0 group-hover:opacity-100 transition-opacity whitespace-nowrap">
                      LinkedIn
                    </div>
                  </a>

                  <a
                    href="mailto:ompawar546@gmail.com"
                    className="group relative p-3 bg-gray-800/50 rounded-full border border-gray-700 hover:border-red-500 transition-all duration-300 hover:scale-110 hover:bg-red-600/20"
                  >
                    <MailIcon size={20} className="text-gray-400 group-hover:text-red-400 transition-colors" />
                    <div className="absolute -top-8 left-1/2 transform -translate-x-1/2 bg-gray-800 text-white px-2 py-1 rounded text-xs opacity-0 group-hover:opacity-100 transition-opacity whitespace-nowrap">
                      Email
                    </div>
                  </a>
                </div>
                <p className="text-gray-400 text-sm">
                  ompawar3000@gmail.com
                </p>
              </div>
            </div>
          </div>

          <div className="border-t border-gray-700/50 bg-slate-900/50">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-6">
              <div className="flex flex-col md:flex-row justify-between items-center space-y-4 md:space-y-0">
                <div className="flex items-center text-gray-400 text-sm">
                  <span>&copy; 2025 Om Pawar. All rights reserved.</span>
                </div>
                <div className="flex items-center text-gray-400 text-sm">
                  <span>Made with</span>
                  <HeartIcon size={16} className="mx-1 text-red-500 animate-pulse" />
                  <span>and lots of coffee</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </footer>

      <style jsx>{`
        @keyframes float {
          0%, 100% { transform: translateY(0px); }
          50% { transform: translateY(-10px); }
        }
        .animate-float {
          animation: float 3s ease-in-out infinite;
        }
      `}</style>
    </div>
  );
};

export default Portfolio;
