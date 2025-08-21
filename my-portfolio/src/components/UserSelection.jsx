import { useState } from 'react';
import { useNavigate } from 'react-router-dom';

const UserSelection = () => {
  const navigate = useNavigate();
  const [userType, setUserType] = useState('');

  const handleSelection = (type) => {
    setUserType(type);
    localStorage.setItem('userType', type);

    if (type === 'admin') {
      navigate('/admin/login');
    } else {
      navigate('/portfolio');
    }
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-indigo-900 via-purple-900 to-pink-800 relative overflow-hidden">
      {/* Animated background elements */}
      <div className="absolute inset-0">
        <div className="absolute top-20 left-20 w-72 h-72 bg-blue-400 rounded-full mix-blend-multiply filter blur-xl opacity-20 animate-pulse"></div>
        <div className="absolute top-40 right-20 w-72 h-72 bg-purple-400 rounded-full mix-blend-multiply filter blur-xl opacity-20 animate-pulse" style={{animationDelay: '2s'}}></div>
        <div className="absolute -bottom-20 left-40 w-72 h-72 bg-pink-400 rounded-full mix-blend-multiply filter blur-xl opacity-20 animate-pulse" style={{animationDelay: '4s'}}></div>
      </div>

      <div className="relative z-10 min-h-screen flex items-center justify-center px-4">
        <div className="max-w-6xl w-full">
          {/* Header Section */}
          <div className="text-center mb-12 mt-16">
            <h1 className="text-7xl font-black text-transparent bg-clip-text bg-gradient-to-r from-yellow-400 via-pink-400 to-blue-400 mb-6 leading-tight">
              Welcome to My Portfolio
            </h1>
            <p className="text-xl text-blue-100 max-w-2xl mx-auto leading-relaxed mb-6">
              Discover my journey as a developer, explore my projects, and see how I can contribute to your team.
            </p>
            <p className="text-2xl font-semibold text-transparent bg-clip-text bg-gradient-to-r from-cyan-300 to-blue-300 mb-2">
              Choose Your Role
            </p>
            <p className="text-lg text-purple-200">
              Select the option that best describes you to get a tailored experience
            </p>
          </div>

          {/* Selection Cards */}
          <div className="grid md:grid-cols-3 gap-10 max-w-7xl mx-auto">
            {/* Recruiter Card */}
            <div 
              onClick={() => handleSelection('recruiter')}
              className="group relative bg-white/10 backdrop-blur-lg rounded-3xl p-10 border border-white/20 hover:bg-white/20 transition-all duration-500 cursor-pointer hover:scale-105 hover:shadow-2xl"
            >
              <div className="absolute inset-0 bg-gradient-to-br from-blue-500/20 to-teal-500/20 rounded-3xl opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
              <div className="relative z-10">
                <div className="w-20 h-20 bg-gradient-to-br from-blue-500 to-teal-500 rounded-2xl flex items-center justify-center mb-8 group-hover:rotate-12 transition-transform duration-300">
                  <svg className="w-10 h-10 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 13.255A23.931 23.931 0 0112 15c-3.183 0-6.22-.62-9-1.745M16 6V4a2 2 0 00-2-2h-4a2 2 0 00-2-2v2m8 0V6a2 2 0 002 2h2a1 1 0 011 1v6.5" />
                  </svg>
                </div>
                <h3 className="text-3xl font-bold text-white mb-4">Recruiters & Employers</h3>
                <p className="text-blue-100 leading-relaxed mb-6 text-lg">
                  Access detailed technical skills, professional experience, and project showcases designed for hiring decisions.
                </p>
                <div className="text-base text-blue-200 opacity-75">
                  → View resume, technical assessments, and work samples
                </div>
              </div>
            </div>

            {/* Visitor Card */}
            <div 
              onClick={() => handleSelection('visitor')}
              className="group relative bg-white/10 backdrop-blur-lg rounded-3xl p-10 border border-white/20 hover:bg-white/20 transition-all duration-500 cursor-pointer hover:scale-105 hover:shadow-2xl"
            >
              <div className="absolute inset-0 bg-gradient-to-br from-green-500/20 to-lime-500/20 rounded-3xl opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
              <div className="relative z-10">
                <div className="w-20 h-20 bg-gradient-to-br from-green-500 to-lime-500 rounded-2xl flex items-center justify-center mb-8 group-hover:rotate-12 transition-transform duration-300">
                  <svg className="w-10 h-10 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 6.253v13m0-13C10.832 5.477 9.246 5 7.5 5S4.168 5.477 3 6.253v13C4.168 18.477 5.754 18 7.5 18s3.332.477 4.5 1.253m0-13C13.168 5.477 14.754 5 16.5 5c1.746 0 3.332.477 4.5 1.253v13C19.832 18.477 18.246 18 16.5 18c-1.746 0-3.332.477-4.5 1.253" />
                  </svg>
                </div>
                <h3 className="text-3xl font-bold text-white mb-4">Students & Visitors</h3>
                <p className="text-green-100 leading-relaxed mb-6 text-lg">
                  Explore my learning journey, discover coding tutorials, and get inspired by creative projects and experiments.
                </p>
                <div className="text-base text-green-200 opacity-75">
                  → Interactive demos, learning resources, and inspiration
                </div>
              </div>
            </div>

            {/* Admin Card */}
            <div 
              onClick={() => handleSelection('admin')}
              className="group relative bg-white/10 backdrop-blur-lg rounded-3xl p-10 border border-white/20 hover:bg-white/20 transition-all duration-500 cursor-pointer hover:scale-105 hover:shadow-2xl"
            >
              <div className="absolute inset-0 bg-gradient-to-br from-gray-600/20 to-gray-800/20 rounded-3xl opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
              <div className="relative z-10">
                <div className="w-20 h-20 bg-gradient-to-br from-gray-600 to-gray-800 rounded-2xl flex items-center justify-center mb-8 group-hover:rotate-12 transition-transform duration-300">
                  <svg className="w-10 h-10 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10.325 4.317c.426-1.756 2.924-1.756 3.35 0a1.724 1.724 0 002.573 1.066c1.543-.94 3.31.826 2.37 2.37a1.724 1.724 0 001.065 2.572c1.756.426 1.756 2.924 0 3.35a1.724 1.724 0 00-1.066 2.573c.94 1.543-.826 3.31-2.37 2.37a1.724 1.724 0 00-2.572 1.065c-.426 1.756-2.924 1.756-3.35 0a1.724 1.724 0 00-2.573-1.066c-1.543.94-3.31-.826-2.37-2.37a1.724 1.724 0 00-1.065-2.572c-1.756-.426-1.756-2.924 0-3.35a1.724 1.724 0 001.066-2.573c-.94-1.543.826-3.31 2.37-2.37.996.608 2.296.07 2.572-1.065z" />
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" />
                  </svg>
                </div>
                <h3 className="text-3xl font-bold text-white mb-4">Admin Access</h3>
                <p className="text-gray-100 leading-relaxed mb-6 text-lg">
                  Secure administrative panel for content management, analytics, and portfolio customization features.
                </p>
                <div className="text-base text-gray-200 opacity-75">
                  → Dashboard, content editor, and system settings
                </div>
              </div>
            </div>
          </div>

          {/* Footer */}
          <div className="text-center mt-16">
            <p className="text-blue-200/60 text-sm">
              Built with passion for technology and innovation • Ready to make an impact
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default UserSelection;