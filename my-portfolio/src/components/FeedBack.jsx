import React, { useState } from 'react';
// Note: axios import removed for artifact compatibility - you'll need to add it back
import { Send, CheckCircle, AlertCircle, User, Mail, Building2, MessageSquare, Sparkles, Heart, Star } from 'lucide-react';

const FeedBack = () => {
  const [feedbackData, setFeedbackData] = useState({
    name: '',
    email: '',
    company: '',
    feedback: '',
    userType: 'visitor', // Removed localStorage for artifact compatibility
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitError, setSubmitError] = useState('');
  const [submitSuccess, setSubmitSuccess] = useState(false);

  const handleFeedbackSubmit = async (e) => {
    e.preventDefault();
    setIsSubmitting(true);
    setSubmitError('');
    setSubmitSuccess(false);

    try {
      // Note: axios call commented out for artifact compatibility
      // const response = await axios.post('https://oms-portfolio-19lv.onrender.com/api/feedback/submit', feedbackData);
      
      // Simulating success for demo
      await new Promise(resolve => setTimeout(resolve, 2000));
      setSubmitSuccess(true);
      setFeedbackData({
        ...feedbackData,
        name: '',
        email: '',
        company: '',
        feedback: '',
      });
    } catch (error) {
      console.error('Feedback submission error:', error);
      setSubmitError(error.response?.data?.error || 'Error submitting feedback. Please try again.');
    } finally {
      setIsSubmitting(false);
    }
  };

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFeedbackData((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  return (
    <section id="feedback" className="py-24 bg-gradient-to-br from-gray-50 via-purple-50 to-gray-100 relative overflow-hidden">
      {/* Animated background elements */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute -top-40 -right-40 w-96 h-96 bg-gradient-to-br from-purple-200/30 to-pink-200/30 rounded-full blur-3xl animate-pulse"></div>
        <div className="absolute -bottom-40 -left-40 w-96 h-96 bg-gradient-to-br from-blue-200/30 to-cyan-200/30 rounded-full blur-3xl animate-pulse delay-1000"></div>
        <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-72 h-72 bg-gradient-to-br from-purple-300/20 to-pink-300/20 rounded-full blur-3xl animate-pulse delay-500"></div>
      </div>
      
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative">
        <div className="text-center mb-20">
          <div className="inline-flex items-center gap-2 bg-purple-100 backdrop-blur-sm px-4 py-2 rounded-full text-purple-700 text-sm font-medium mb-6">
            <Heart size={16} className="animate-pulse" />
            Let's Connect
          </div>
          <h2 className="text-6xl font-bold bg-gradient-to-r from-gray-900 via-purple-900 to-gray-900 bg-clip-text text-transparent mb-6">
            Get In Touch
          </h2>
          <p className="text-xl text-gray-700 max-w-3xl mx-auto leading-relaxed">
            I'd love to hear your thoughts, feedback, or discuss potential opportunities
          </p>
        </div>

        <div className="max-w-4xl mx-auto">
          <div className="relative">
            {/* Main form container */}
            <div className="bg-white/80 backdrop-blur-sm rounded-3xl shadow-2xl p-8 md:p-12 relative border border-gray-200/50 hover:border-purple-200/50 transition-all duration-500">
              {/* Gradient border effect */}
              <div className="absolute inset-0 bg-gradient-to-r from-purple-600/10 to-pink-600/10 opacity-0 hover:opacity-100 transition-opacity duration-500 rounded-3xl pointer-events-none"></div>
              
              {submitSuccess && (
                <div className="absolute inset-0 flex items-center justify-center bg-white/95 backdrop-blur-sm rounded-3xl transition-all duration-500 z-10">
                  <div className="text-center">
                    <div className="relative mb-6">
                      <CheckCircle className="w-20 h-20 text-green-500 mx-auto" />
                      <div className="absolute inset-0 bg-green-400 rounded-full opacity-20 animate-ping"></div>
                    </div>
                    <h3 className="text-3xl font-bold text-gray-900 mb-4">Thank You!</h3>
                    <p className="text-xl text-gray-600 mb-6">Your message has been sent successfully.</p>
                    <div className="flex justify-center gap-1">
                      {[...Array(5)].map((_, i) => (
                        <Star key={i} size={20} className="text-yellow-400 fill-current animate-pulse" style={{ animationDelay: `${i * 100}ms` }} />
                      ))}
                    </div>
                  </div>
                </div>
              )}

              <form onSubmit={handleFeedbackSubmit} className="space-y-8 relative">
                {submitError && (
                  <div className="bg-red-50 border border-red-200 p-6 rounded-2xl flex items-center gap-4 shadow-sm">
                    <AlertCircle className="w-6 h-6 text-red-500 flex-shrink-0" />
                    <p className="text-red-700 font-medium">{submitError}</p>
                  </div>
                )}

                <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                  <div className="group">
                    <label htmlFor="name" className="block text-sm font-semibold text-gray-800 mb-3">
                      Full Name *
                    </label>
                    <div className="relative">
                      <div className="absolute inset-0 bg-gradient-to-r from-purple-400 to-pink-400 opacity-0 group-hover:opacity-20 group-focus-within:opacity-20 transition-opacity duration-300 rounded-xl blur"></div>
                      <User className="w-5 h-5 text-gray-500 absolute left-4 top-1/2 transform -translate-y-1/2 z-10" />
                      <input
                        type="text"
                        id="name"
                        name="name"
                        value={feedbackData.name}
                        onChange={handleInputChange}
                        className="relative pl-12 w-full rounded-xl border-2 border-gray-200 bg-white py-4 px-4 text-gray-800 placeholder-gray-500 focus:border-purple-400 focus:ring-4 focus:ring-purple-100 transition-all duration-300 hover:border-gray-300"
                        placeholder="Enter your full name"
                        required
                      />
                    </div>
                  </div>

                  <div className="group">
                    <label htmlFor="email" className="block text-sm font-semibold text-gray-800 mb-3">
                      Email Address *
                    </label>
                    <div className="relative">
                      <div className="absolute inset-0 bg-gradient-to-r from-blue-400 to-cyan-400 opacity-0 group-hover:opacity-20 group-focus-within:opacity-20 transition-opacity duration-300 rounded-xl blur"></div>
                      <Mail className="w-5 h-5 text-gray-500 absolute left-4 top-1/2 transform -translate-y-1/2 z-10" />
                      <input
                        type="email"
                        id="email"
                        name="email"
                        value={feedbackData.email}
                        onChange={handleInputChange}
                        className="relative pl-12 w-full rounded-xl border-2 border-gray-200 bg-white py-4 px-4 text-gray-800 placeholder-gray-500 focus:border-purple-400 focus:ring-4 focus:ring-purple-100 transition-all duration-300 hover:border-gray-300"
                        placeholder="Enter your email"
                        required
                      />
                    </div>
                  </div>
                </div>

                {feedbackData.userType === 'recruiter' && (
                  <div className="group">
                    <label htmlFor="company" className="block text-sm font-semibold text-gray-800 mb-3">
                      Company Name
                    </label>
                    <div className="relative">
                      <div className="absolute inset-0 bg-gradient-to-r from-green-400 to-teal-400 opacity-0 group-hover:opacity-20 group-focus-within:opacity-20 transition-opacity duration-300 rounded-xl blur"></div>
                      <Building2 className="w-5 h-5 text-gray-500 absolute left-4 top-1/2 transform -translate-y-1/2 z-10" />
                      <input
                        type="text"
                        id="company"
                        name="company"
                        value={feedbackData.company}
                        onChange={handleInputChange}
                        className="relative pl-12 w-full rounded-xl border-2 border-gray-200 bg-white py-4 px-4 text-gray-800 placeholder-gray-500 focus:border-purple-400 focus:ring-4 focus:ring-purple-100 transition-all duration-300 hover:border-gray-300"
                        placeholder="Enter your company name"
                      />
                    </div>
                  </div>
                )}

                <div className="group">
                  <label htmlFor="feedback" className="block text-sm font-semibold text-gray-800 mb-3">
                    Message / Feedback *
                  </label>
                  <div className="relative">
                    <div className="absolute inset-0 bg-gradient-to-r from-purple-400 to-pink-400 opacity-0 group-hover:opacity-20 group-focus-within:opacity-20 transition-opacity duration-300 rounded-xl blur"></div>
                    <MessageSquare className="w-5 h-5 text-gray-500 absolute left-4 top-6 z-10" />
                    <textarea
                      id="feedback"
                      name="feedback"
                      value={feedbackData.feedback}
                      onChange={handleInputChange}
                      rows={6}
                      className="relative pl-12 w-full rounded-xl border-2 border-gray-200 bg-white py-4 px-4 text-gray-800 placeholder-gray-500 focus:border-purple-400 focus:ring-4 focus:ring-purple-100 transition-all duration-300 hover:border-gray-300 resize-none"
                      placeholder="Share your thoughts, feedback, or message..."
                      required
                    ></textarea>
                  </div>
                </div>

                <button
                  type="submit"
                  disabled={isSubmitting}
                  className={`relative w-full group overflow-hidden ${
                    isSubmitting 
                      ? 'bg-gray-400 cursor-not-allowed' 
                      : 'bg-gradient-to-r from-purple-600 to-pink-600 hover:from-purple-700 hover:to-pink-700 transform hover:-translate-y-1 hover:scale-105'
                  } text-white py-4 px-8 rounded-xl font-bold text-lg transition-all duration-300 shadow-lg hover:shadow-2xl`}
                >
                  {/* Button background animation */}
                  {!isSubmitting && (
                    <div className="absolute inset-0 bg-gradient-to-r from-pink-600 to-purple-600 opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
                  )}
                  
                  <span className="relative flex items-center justify-center gap-3">
                    {isSubmitting ? (
                      <>
                        <div className="w-6 h-6 border-t-2 border-white rounded-full animate-spin" />
                        Sending Message...
                      </>
                    ) : (
                      <>
                        <Send className="w-6 h-6 transform group-hover:translate-x-1 group-hover:-translate-y-1 transition-transform duration-300" />
                        Send Message
                        <Sparkles className="w-5 h-5 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                      </>
                    )}
                  </span>
                </button>
              </form>
            </div>

            {/* Floating glow effect */}
            <div className="absolute inset-0 bg-gradient-to-r from-purple-600/20 to-pink-600/20 opacity-0 hover:opacity-100 blur-xl transition-all duration-500 -z-10 scale-105 rounded-3xl"></div>
          </div>

          {/* Contact info or additional elements */}
          <div className="mt-16 text-center">
            <p className="text-gray-600 mb-8 text-lg">
              Prefer a direct approach? Let's connect on social media
            </p>
            <div className="flex justify-center gap-6">
              {[
                { name: 'LinkedIn', gradient: 'from-blue-600 to-blue-700' },
                { name: 'GitHub', gradient: 'from-gray-700 to-gray-900' },
                { name: 'Email', gradient: 'from-purple-600 to-pink-600' }
              ].map((social, index) => (
                <div 
                  key={index}
                  className={`group px-8 py-4 bg-gradient-to-r ${social.gradient} text-white rounded-full font-medium shadow-lg hover:shadow-xl transition-all duration-300 transform hover:-translate-y-2 hover:scale-110 cursor-pointer`}
                >
                  <span className="relative">
                    {social.name}
                    <Sparkles className="w-4 h-4 absolute -top-1 -right-5 opacity-0 group-hover:opacity-100 transition-opacity duration-300 animate-pulse" />
                  </span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default FeedBack;