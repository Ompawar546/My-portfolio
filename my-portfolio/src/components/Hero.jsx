import React, { useState, useEffect } from 'react';
import { MenuIcon, XIcon, GithubIcon, LinkedinIcon, MailIcon, ExternalLinkIcon, ChevronDownIcon, CodeIcon, DatabaseIcon, ServerIcon } from 'lucide-react';

const Hero = () => {
  const [isVisible, setIsVisible] = useState(false);
  const [currentSkill, setCurrentSkill] = useState(0);
  
  const skills = ['Full Stack Developer', 'MERN Specialist', 'React Expert', 'Node.js Developer', 'Python Programmer'];
  
  useEffect(() => {
    setIsVisible(true);
    const skillInterval = setInterval(() => {
      setCurrentSkill((prev) => (prev + 1) % skills.length);
    }, 3000);
    
    return () => clearInterval(skillInterval);
  }, []);

  const scrollToProjects = () => {
    const projectsSection = document.getElementById('projects');
    if (projectsSection) {
      projectsSection.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <div className="relative min-h-screen overflow-hidden">
      {/* Animated Background */}
      <div className="absolute inset-0 bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900">
        <div className="absolute inset-0 opacity-20" style={{
          backgroundImage: `url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%239C92AC' fill-opacity='0.1'%3E%3Ccircle cx='30' cy='30' r='2'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")`
        }}></div>
        
        {/* Floating Elements */}
        <div className="absolute top-20 left-10 w-20 h-20 bg-blue-500 rounded-full opacity-10 animate-pulse"></div>
        <div className="absolute top-40 right-20 w-16 h-16 bg-purple-500 rounded-full opacity-10 animate-bounce delay-1000"></div>
        <div className="absolute bottom-40 left-20 w-12 h-12 bg-pink-500 rounded-full opacity-10 animate-pulse delay-2000"></div>
        
        {/* Animated Code Icons */}
        <div className="absolute top-1/4 left-1/4 text-blue-400 opacity-20 animate-float">
          <CodeIcon size={40} />
        </div>
        <div className="absolute top-1/3 right-1/4 text-green-400 opacity-20 animate-float delay-1000">
          <DatabaseIcon size={36} />
        </div>
        <div className="absolute bottom-1/3 left-1/3 text-purple-400 opacity-20 animate-float delay-2000">
          <ServerIcon size={32} />
        </div>
      </div>

      {/* Main Content */}
      <section id="home" className="relative z-10 pt-20 md:pt-32 pb-16 min-h-screen flex items-center">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full">
          <div className="text-center">
            
            {/* Profile Image */}
              <div className={`mb-8 transform transition-all duration-1000 ${isVisible ? 'translate-y-0 opacity-100' : 'translate-y-10 opacity-0'}`}>
                <div className="relative inline-block">
                  <div className="w-40 h-40 mx-auto rounded-full bg-gradient-to-r from-blue-500 to-purple-600 p-1 animate-pulse">
                    <div className="w-full h-full rounded-full bg-gray-800 flex items-center justify-center overflow-hidden">
                      <img 
                        src="/mylogo.jpg" 
                        alt="My Logo" 
                        className="w-full h-full object-cover rounded-full" 
                      />
                    </div>
                  </div>
                  <div className="absolute -top-2 -right-2 w-6 h-6 bg-green-500 rounded-full animate-ping"></div>
                  <div className="absolute -top-2 -right-2 w-6 h-6 bg-green-500 rounded-full"></div>
                </div>
              </div>


            {/* Main Heading */}
            <div className={`transform transition-all duration-1000 delay-200 ${isVisible ? 'translate-y-0 opacity-100' : 'translate-y-10 opacity-0'}`}>
              <h1 className="text-5xl md:text-7xl font-bold mb-6">
                <span className="text-white">Hi, I'm </span>
                <span className="bg-gradient-to-r from-blue-400 via-purple-500 to-pink-500 bg-clip-text text-transparent animate-gradient">
                  Om Pawar
                </span>
              </h1>
            </div>

            {/* Dynamic Role */}
            <div className={`transform transition-all duration-1000 delay-400 ${isVisible ? 'translate-y-0 opacity-100' : 'translate-y-10 opacity-0'}`}>
              <div className="h-16 flex items-center justify-center">
                <p className="text-2xl md:text-3xl text-gray-300 font-medium">
                  <span className="text-blue-400 transition-all duration-500 transform">
                    {skills[currentSkill]}
                  </span>
                </p>
              </div>
            </div>

            {/* Description */}
            <div className={`transform transition-all duration-1000 delay-600 ${isVisible ? 'translate-y-0 opacity-100' : 'translate-y-10 opacity-0'}`}>
              <p className="text-lg text-gray-400 mb-10 max-w-2xl mx-auto leading-relaxed">
                Crafting digital experiences with clean code and innovative solutions. 
                Passionate about building scalable web applications that make a difference.
              </p>
            </div>

            {/* CTA Buttons */}
            <div className={`transform transition-all duration-1000 delay-800 ${isVisible ? 'translate-y-0 opacity-100' : 'translate-y-10 opacity-0'}`}>
              <div className="flex flex-col sm:flex-row justify-center gap-4 mb-12">
                <button 
                  onClick={scrollToProjects}
                  className="group relative px-8 py-4 bg-gradient-to-r from-blue-600 to-purple-600 text-white font-semibold rounded-full overflow-hidden transform transition-all duration-300 hover:scale-105 hover:shadow-2xl hover:shadow-blue-500/25"
                >
                  <span className="relative z-10 flex items-center gap-2">
                    View My Work
                    <ExternalLinkIcon size={18} className="group-hover:translate-x-1 transition-transform" />
                  </span>
                  <div className="absolute inset-0 bg-gradient-to-r from-purple-600 to-pink-600 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                </button>
                
                <a 
                  href="/Om_Pawar_8208024158.pdf" 
                  download="Om_Pawar_Resume.pdf"
                  className="group px-8 py-4 border-2 border-gray-500 text-gray-300 font-semibold rounded-full hover:border-white hover:text-white hover:bg-white/10 transition-all duration-300 hover:scale-105"
                >
                  <span className="flex items-center gap-2">
                    Download Resume
                    <div className="w-0 group-hover:w-4 transition-all duration-300 overflow-hidden">
                      <ChevronDownIcon size={16} />
                    </div>
                  </span>
                </a>
              </div>
            </div>

            {/* Social Links */}
            <div className={`transform transition-all duration-1000 delay-1000 ${isVisible ? 'translate-y-0 opacity-100' : 'translate-y-10 opacity-0'}`}>
              <div className="flex justify-center space-x-6">
                <a 
                  href="https://github.com/Ompawar546" 
                  className="group relative p-4 rounded-full bg-gray-800/50 backdrop-blur-sm border border-gray-700 hover:border-gray-500 transition-all duration-300 hover:scale-110 hover:bg-gray-700/50"
                  target="_blank" 
                  rel="noopener noreferrer"
                >
                  <GithubIcon size={24} className="text-gray-400 group-hover:text-white transition-colors" />
                  <div className="absolute -top-8 left-1/2 transform -translate-x-1/2 bg-gray-800 text-white px-2 py-1 rounded text-sm opacity-0 group-hover:opacity-100 transition-opacity whitespace-nowrap">
                    GitHub
                  </div>
                </a>
                
                <a 
                  href="https://www.linkedin.com/in/om-pawar-8848b2249" 
                  className="group relative p-4 rounded-full bg-gray-800/50 backdrop-blur-sm border border-gray-700 hover:border-blue-500 transition-all duration-300 hover:scale-110 hover:bg-blue-600/20"
                  target="_blank" 
                  rel="noopener noreferrer"
                >
                  <LinkedinIcon size={24} className="text-gray-400 group-hover:text-blue-400 transition-colors" />
                  <div className="absolute -top-8 left-1/2 transform -translate-x-1/2 bg-gray-800 text-white px-2 py-1 rounded text-sm opacity-0 group-hover:opacity-100 transition-opacity whitespace-nowrap">
                    LinkedIn
                  </div>
                </a>
                
                <a 
                  href="mailto:ompawar3000@gmail.com" 
                  className="group relative p-4 rounded-full bg-gray-800/50 backdrop-blur-sm border border-gray-700 hover:border-red-500 transition-all duration-300 hover:scale-110 hover:bg-red-600/20"
                >
                  <MailIcon size={24} className="text-gray-400 group-hover:text-red-400 transition-colors" />
                  <div className="absolute -top-8 left-1/2 transform -translate-x-1/2 bg-gray-800 text-white px-2 py-1 rounded text-sm opacity-0 group-hover:opacity-100 transition-opacity whitespace-nowrap">
                    Email
                  </div>
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Custom CSS for additional animations */}
      <style jsx>{`
        @keyframes float {
          0%, 100% { transform: translateY(0px); }
          50% { transform: translateY(-20px); }
        }
        
        @keyframes gradient {
          0% { background-position: 0% 50%; }
          50% { background-position: 100% 50%; }
          100% { background-position: 0% 50%; }
        }
        
        .animate-float {
          animation: float 6s ease-in-out infinite;
        }
        
        .animate-gradient {
          background-size: 300% 300%;
          animation: gradient 3s ease infinite;
        }
      `}</style>
    </div>
  );
};

export default Hero;