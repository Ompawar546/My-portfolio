import React, { useState } from 'react';
import { ExternalLink, Github, ArrowRight, Sparkles, Code, Database, Globe, Brain, Server, Palette } from 'lucide-react';

const projects = [
  {
    title: "PrepAhead – Job Preparation Platform",
    description:
      "An intelligent MERN Stack platform with automated assessment scoring, AI-powered mock interviews, personalized course and job recommendations, and enhanced user engagement.",
    tags: ["React.js", "Node.js", "Express.js", "MongoDB", "Machine Learning"],
    link: "https://prepahead-mern-project.onrender.com/",
    image: "/api/placeholder/600/400",
    gradient: "from-purple-600 to-pink-600",
    icon: Brain,
    category: "AI & Web dev"
  },
  {
    title: "Business Showcase Website – Tanaji Screens Pvt. Ltd.",
    description:
      "A freelance business showcase website developed from scratch to improve online presence by 60%, including SEO optimization, responsive design, and high-performance deployment.",
    tags: ["React.js", "Node.js", "CSS3", "JavaScript"],
    link: "#",
    image: "/api/placeholder/600/400",
    gradient: "from-blue-600 to-cyan-600",
    icon: Globe,
    category: "Web Development"
  },
  {
    title: "Social Connect – Social Media Platform",
    description:
      "A scalable full-stack social networking app with secure authentication, real-time updates, optimized database queries, and seamless media sharing.",
    tags: ["React.js", "Node.js", "Express.js", "MongoDB"],
    link: "#",
    image: "/api/placeholder/600/400",
    gradient: "from-green-600 to-teal-600",
    icon: Code,
    category: "Full Stack"
  },
  {
    title: "CineMatch – Movie Recommendation System",
    description:
      "A machine learning-powered recommendation engine using collaborative and content-based filtering, integrated with TMDB API for real-time movie data.",
    tags: ["Python", "Flask", "Scikit-learn", "Pandas", "NumPy", "TMDB API"],
    link: "#",
    image: "/api/placeholder/600/400",
    gradient: "from-orange-600 to-red-600",
    icon: Sparkles,
    category: "Machine Learning"
  },
  {
    title: "Backend Orders API",
    description:
      "A Node.js backend API for managing users and orders with PostgreSQL integration, secure authentication, and RESTful architecture, designed for scalable e-commerce or order management systems.",
    tags: ["Node.js", "Express.js", "PostgreSQL", "REST API"],
    link: "#",
    image: "/api/placeholder/600/400",
    gradient: "from-indigo-600 to-purple-600",
    icon: Database,
    category: "Backend"
  },
  {
    title: "Portfolio Website",
    description:
      "A modern, interactive portfolio showcasing skills, projects, and professional achievements, designed with an engaging UI and smooth user experience.",
    tags: ["React.js", "Tailwind CSS"],
    link: "#",
    image: "/api/placeholder/600/400",
    gradient: "from-pink-600 to-rose-600",
    icon: Palette,
    category: "Frontend"
  }
];

const Projects = () => {
  const [hoveredProject, setHoveredProject] = useState(null);

  return (
    <section id="projects" className="py-24 bg-gradient-to-br from-gray-50 via-purple-50 to-gray-100 relative overflow-hidden">
      {/* Animated background elements */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute -top-40 -right-40 w-96 h-96 bg-gradient-to-br from-purple-200/30 to-pink-200/30 rounded-full blur-3xl animate-pulse"></div>
        <div className="absolute -bottom-40 -left-40 w-96 h-96 bg-gradient-to-br from-blue-200/30 to-cyan-200/30 rounded-full blur-3xl animate-pulse delay-1000"></div>
        <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-72 h-72 bg-gradient-to-br from-purple-300/20 to-pink-300/20 rounded-full blur-3xl animate-pulse delay-500"></div>
      </div>
      
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative">
        <div className="text-center mb-20">
          <div className="inline-flex items-center gap-2 bg-purple-100 backdrop-blur-sm px-4 py-2 rounded-full text-purple-700 text-sm font-medium mb-6">
            <Sparkles size={16} className="animate-spin" />
            Featured Work
          </div>
          <h2 className="text-6xl font-bold bg-gradient-to-r from-gray-900 via-purple-900 to-gray-900 bg-clip-text text-transparent mb-6">
            Projects That Matter
          </h2>
          <p className="text-xl text-gray-700 max-w-3xl mx-auto leading-relaxed">
            Discover innovative solutions crafted with cutting-edge technologies and creative problem-solving
          </p>
        </div>
        
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          {projects.map((project, index) => {
            const IconComponent = project.icon;
            return (
              <div 
                key={index} 
                className="group relative"
                onMouseEnter={() => setHoveredProject(index)}
                onMouseLeave={() => setHoveredProject(null)}
              >
                <div className="relative bg-white/80 backdrop-blur-sm border border-gray-200/50 rounded-2xl overflow-hidden transition-all duration-500 hover:bg-white/90 hover:border-purple-200/50 hover:scale-105 hover:-rotate-1 shadow-lg hover:shadow-2xl">
                  {/* Gradient border effect */}
                  <div className={`absolute inset-0 bg-gradient-to-r ${project.gradient} opacity-0 group-hover:opacity-20 transition-opacity duration-500 rounded-2xl`}></div>
                  
                  {/* Project image/placeholder with overlay */}
                  <div className="relative h-48 overflow-hidden">
                    <div className={`absolute inset-0 bg-gradient-to-br ${project.gradient} opacity-80`}></div>
                    <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent"></div>
                    
                    {/* Category badge */}
                    <div className="absolute top-4 left-4 bg-white/90 backdrop-blur-sm px-3 py-1 rounded-full text-xs font-medium text-gray-800 shadow-sm">
                      {project.category}
                    </div>
                    
                    {/* Project icon */}
                    <div className="absolute top-4 right-4">
                      <div className="bg-white/90 backdrop-blur-sm p-3 rounded-full shadow-sm">
                        <IconComponent size={24} className="text-gray-800" />
                      </div>
                    </div>
                    
                    {/* Animated overlay on hover */}
                    <div className={`absolute inset-0 bg-gradient-to-r ${project.gradient} opacity-0 group-hover:opacity-90 transition-all duration-500 flex items-center justify-center`}>
                      <div className="transform translate-y-4 group-hover:translate-y-0 transition-transform duration-500">
                        <a 
                          href={project.link}
                          className="bg-gray-900 text-white px-8 py-3 rounded-full font-bold flex items-center gap-3 hover:bg-gray-800 transition-all duration-300 shadow-xl hover:shadow-2xl"
                        >
                          View Project
                          <ArrowRight size={18} className="transform group-hover:translate-x-1 transition-transform" />
                        </a>
                      </div>
                    </div>
                  </div>
                  
                  <div className="p-8">
                    <h3 className="text-2xl font-bold text-gray-900 mb-4 group-hover:text-transparent group-hover:bg-gradient-to-r group-hover:from-gray-900 group-hover:to-purple-700 group-hover:bg-clip-text transition-all duration-300">
                      {project.title}
                    </h3>
                    <p className="text-gray-600 mb-6 leading-relaxed line-clamp-3 group-hover:text-gray-700 transition-colors duration-300">
                      {project.description}
                    </p>
                    
                    {/* Tech stack tags */}
                    <div className="flex flex-wrap gap-2 mb-6">
                      {project.tags.map((tag, tagIndex) => (
                        <span
                          key={tagIndex}
                          className="bg-gray-100 backdrop-blur-sm text-gray-800 text-sm px-4 py-2 rounded-full font-medium border border-gray-200 hover:bg-purple-100 hover:text-purple-800 hover:border-purple-200 transition-all duration-300 hover:scale-110"
                        >
                          {tag}
                        </span>
                      ))}
                    </div>
                    
                    {/* Action buttons */}
                    <div className="flex items-center justify-between">
                      <a 
                        href={project.link}
                        className={`text-gray-800 hover:text-transparent hover:bg-gradient-to-r ${project.gradient} hover:bg-clip-text font-bold flex items-center gap-2 group/link transition-all duration-300`}
                      >
                        Launch Project
                        <ExternalLink size={16} className="transform group-hover/link:translate-x-1 group-hover/link:-translate-y-1 transition-transform duration-300" />
                      </a>
                      <a 
                        href="#"
                        className="bg-gray-100 backdrop-blur-sm p-3 rounded-full hover:bg-purple-100 transition-all duration-300 hover:scale-110 hover:rotate-12 border border-gray-200"
                      >
                        <Github size={20} className="text-gray-800" />
                      </a>
                    </div>
                  </div>
                  
                  {/* Animated corner accent */}
                  <div className={`absolute bottom-0 right-0 w-20 h-20 bg-gradient-to-tl ${project.gradient} opacity-20 transform translate-x-10 translate-y-10 group-hover:translate-x-0 group-hover:translate-y-0 transition-transform duration-500 rounded-tl-full`}></div>
                </div>
                
                {/* Floating glow effect */}
                <div className={`absolute inset-0 bg-gradient-to-r ${project.gradient} opacity-0 group-hover:opacity-20 blur-xl transition-all duration-500 -z-10 scale-105`}></div>
              </div>
            );
          })}
        </div>
        
        {/* Call to action */}
        <div className="text-center mt-20">
          <div className="inline-flex items-center gap-4 bg-gradient-to-r from-purple-600 to-pink-600 text-white px-8 py-4 rounded-full font-bold text-lg shadow-2xl hover:shadow-purple-500/25 transition-all duration-300 hover:scale-105 cursor-pointer">
            <a href="https://github.com/Ompawar546"><span>View All Projects on GitHub</span></a>
            <ArrowRight size={20} />
          </div>
        </div>
      </div>
    </section>
  );
};

export default Projects;