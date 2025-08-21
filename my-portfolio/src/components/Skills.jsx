import React, { useState, useEffect } from 'react';
import { Code, Server, Database, Layout, GitBranch, Terminal, Sparkles, Zap, Star } from 'lucide-react';

const skillCategories = [
  {
    title: "Frontend Development",
    icon: Layout,
    gradient: "from-blue-600 to-cyan-600",
    skills: [
      { name: "JavaScript", level: 90 },
      { name: "React.js", level: 85 },
      { name: "HTML5", level: 95 },
      { name: "CSS3", level: 90 },
      { name: "Bootstrap", level: 80 }
    ]
  },
  {
    title: "Backend Development",
    icon: Server,
    gradient: "from-green-600 to-teal-600",
    skills: [
      { name: "Node.js", level: 85 },
      { name: "Express.js", level: 80 },
      { name: "REST APIs", level: 85 },
      { name: "C#", level: 70 }
    ]
  },
  {
    title: "Database",
    icon: Database,
    gradient: "from-purple-600 to-pink-600",
    skills: [
      { name: "MongoDB", level: 85 },
      { name: "PostgreSQL", level: 75 }
    ]
  },
  {
    title: "Programming & Scripting",
    icon: Terminal,
    gradient: "from-orange-600 to-red-600",
    skills: [
      { name: "Core Java", level: 80 },
      { name: "Python", level: 75 },
      { name: "SQL", level: 80 },
      { name: "C", level: 70 }
    ]
  },
  {
    title: "Tools & Version Control",
    icon: GitBranch,
    gradient: "from-indigo-600 to-purple-600",
    skills: [
      { name: "Git & GitHub", level: 90 },
      { name: "Postman", level: 85 },
      { name: "VS Code", level: 95 }
    ]
  }
];

const Skills = () => {
  const [hoveredCard, setHoveredCard] = useState(null);
  const [animatedSkills, setAnimatedSkills] = useState(new Set());

  useEffect(() => {
    const timer = setTimeout(() => {
      const allSkillIds = skillCategories.flatMap((category, categoryIndex) =>
        category.skills.map((_, skillIndex) => `${categoryIndex}-${skillIndex}`)
      );
      setAnimatedSkills(new Set(allSkillIds));
    }, 500);

    return () => clearTimeout(timer);
  }, []);

  return (
    <section id="skills" className="py-24 bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900 relative overflow-hidden">
      {/* Animated background elements */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute -top-40 -right-40 w-96 h-96 bg-gradient-to-br from-blue-600/20 to-cyan-600/20 rounded-full blur-3xl animate-pulse"></div>
        <div className="absolute -bottom-40 -left-40 w-96 h-96 bg-gradient-to-br from-purple-600/20 to-pink-600/20 rounded-full blur-3xl animate-pulse delay-1000"></div>
        <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-72 h-72 bg-gradient-to-br from-green-600/10 to-teal-600/10 rounded-full blur-3xl animate-pulse delay-500"></div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative">
        <div className="text-center mb-20">
          <div className="inline-flex items-center gap-2 bg-white/10 backdrop-blur-sm px-4 py-2 rounded-full text-purple-300 text-sm font-medium mb-6">
            <Zap size={16} className="animate-pulse" />
            Technical Expertise
          </div>
          <h2 className="text-6xl font-bold bg-gradient-to-r from-white via-purple-200 to-pink-200 bg-clip-text text-transparent mb-6">
            Skills That Drive Innovation
          </h2>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto leading-relaxed">
            Mastering cutting-edge technologies to build exceptional digital experiences
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          {skillCategories.map((category, categoryIndex) => {
            const IconComponent = category.icon;
            return (
              <div 
                key={categoryIndex}
                className="group relative"
                onMouseEnter={() => setHoveredCard(categoryIndex)}
                onMouseLeave={() => setHoveredCard(null)}
              >
                <div className="relative bg-white/5 backdrop-blur-sm border border-white/10 rounded-2xl overflow-hidden transition-all duration-500 hover:bg-white/10 hover:border-white/20 hover:scale-105">
                  {/* Gradient border effect */}
                  <div className={`absolute inset-0 bg-gradient-to-r ${category.gradient} opacity-0 group-hover:opacity-20 transition-opacity duration-500 rounded-2xl`}></div>
                  
                  <div className="p-8 relative">
                    {/* Header */}
                    <div className="flex items-center gap-4 mb-8">
                      <div className={`p-4 bg-gradient-to-r ${category.gradient} rounded-xl shadow-lg group-hover:shadow-xl transition-shadow duration-300`}>
                        <IconComponent size={24} className="text-white" />
                      </div>
                      <h3 className="text-2xl font-bold text-white group-hover:text-transparent group-hover:bg-gradient-to-r group-hover:from-white group-hover:to-purple-200 group-hover:bg-clip-text transition-all duration-300">
                        {category.title}
                      </h3>
                    </div>

                    {/* Skills */}
                    <div className="space-y-6">
                      {category.skills.map((skill, skillIndex) => {
                        const skillId = `${categoryIndex}-${skillIndex}`;
                        const isAnimated = animatedSkills.has(skillId);
                        
                        return (
                          <div key={skillIndex} className="space-y-3">
                            <div className="flex justify-between items-center">
                              <span className="text-gray-200 font-medium text-lg">{skill.name}</span>
                              <div className="flex items-center gap-2">
                                <span className="text-gray-400 text-sm">{skill.level}%</span>
                                {skill.level >= 90 && <Star size={14} className="text-yellow-400 fill-current" />}
                              </div>
                            </div>
                            <div className="relative h-3 bg-white/10 rounded-full overflow-hidden backdrop-blur-sm">
                              {/* Background glow */}
                              <div className={`absolute inset-0 bg-gradient-to-r ${category.gradient} opacity-20 rounded-full`}></div>
                              
                              {/* Progress bar */}
                              <div 
                                className={`relative h-full bg-gradient-to-r ${category.gradient} rounded-full transform origin-left transition-all duration-1000 ease-out shadow-lg`}
                                style={{ 
                                  width: isAnimated ? `${skill.level}%` : '0%',
                                  transitionDelay: `${skillIndex * 200}ms`
                                }}
                              >
                                {/* Shimmer effect */}
                                <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/30 to-transparent transform -skew-x-12 animate-pulse"></div>
                              </div>
                            </div>
                          </div>
                        );
                      })}
                    </div>
                  </div>
                  
                  {/* Animated corner accent */}
                  <div className={`absolute bottom-0 right-0 w-20 h-20 bg-gradient-to-tl ${category.gradient} opacity-20 transform translate-x-10 translate-y-10 group-hover:translate-x-0 group-hover:translate-y-0 transition-transform duration-500 rounded-tl-full`}></div>
                </div>
                
                {/* Floating glow effect */}
                <div className={`absolute inset-0 bg-gradient-to-r ${category.gradient} opacity-0 group-hover:opacity-20 blur-xl transition-all duration-500 -z-10 scale-105`}></div>
              </div>
            );
          })}
        </div>

        {/* Additional Tools Section */}
        <div className="mt-20">
          <div className="text-center mb-12">
            <h3 className="text-2xl font-bold text-white mb-4">Additional Technologies</h3>
            <p className="text-gray-400">
              Expanding toolkit for comprehensive development solutions
            </p>
          </div>
          <div className="flex flex-wrap justify-center gap-4">
            {["AWS Cloud", "Redux", "TailwindCSS", "Excel"].map((tool, index) => (
              <div 
                key={index}
                className="group px-8 py-4 bg-white/5 backdrop-blur-sm border border-white/10 rounded-full hover:bg-white/10 hover:border-white/20 transition-all duration-300 transform hover:-translate-y-2 hover:scale-110 cursor-pointer"
              >
                <div className="flex items-center gap-2">
                  <Sparkles size={16} className="text-purple-400 group-hover:animate-spin" />
                  <span className="text-gray-300 font-medium group-hover:text-white transition-colors duration-300">
                    {tool}
                  </span>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Stats or Call to Action */}
        <div className="mt-20 text-center">
          <div className="inline-flex items-center gap-6 bg-gradient-to-r from-purple-600 to-pink-600 text-white px-12 py-6 rounded-2xl font-bold text-lg shadow-2xl hover:shadow-purple-500/25 transition-all duration-300 hover:scale-105 cursor-pointer">
            <div className="text-center">
              <div className="text-2xl font-bold">5+</div>
              <div className="text-sm opacity-90">Categories</div>
            </div>
            <div className="w-px h-8 bg-white/30"></div>
            <div className="text-center">
              <div className="text-2xl font-bold">20+</div>
              <div className="text-sm opacity-90">Technologies</div>
            </div>
            <div className="w-px h-8 bg-white/30"></div>
            <div className="text-center">
              <div className="text-2xl font-bold">85%</div>
              <div className="text-sm opacity-90">Avg Proficiency</div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Skills;