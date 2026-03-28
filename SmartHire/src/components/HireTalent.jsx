import React from "react";

const HireTalent = () => {
  const features = [
    {
      title: "Vetted Candidate Pool",
      description: "Access thousands of qualified professionals.",
      icon: (
        <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 4.354a4 4 0 110 5.292M15 21H3v-1a6 6 0 0112 0v1zm0 0h6v-1a6 6 0 00-9-5.197M13 7a4 4 0 11-8 0 4 4 0 018 0z" />
        </svg>
      ),
      color: "blue"
    },
    {
      title: "Easy Job Posting",
      description: "Post openings quickly and easily.",
      icon: (
        <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
        </svg>
      ),
      color: "green"
    },
    {
      title: "Applicant Management",
      description: "Track and manage candidates in one place.",
      icon: (
        <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5H7a2 2 0 00-2 2v12a2 2 0 002 2h10a2 2 0 002-2V7a2 2 0 00-2-2h-2M9 5a2 2 0 002 2h2a2 2 0 002-2M9 5a2 2 0 012-2h2a2 2 0 012 2m-6 9l2 2 4-4" />
        </svg>
      ),
      color: "purple"
    }
  ];

  const getColorClasses = (color) => {
    const colors = {
      blue: {
        bg: "bg-blue-500/20",
        hoverBg: "group-hover:bg-blue-500",
        iconColor: "text-blue-400",
        hoverIconColor: "group-hover:text-white",
        border: "group-hover:border-blue-500/50"
      },
      green: {
        bg: "bg-green-500/20",
        hoverBg: "group-hover:bg-green-500",
        iconColor: "text-green-400",
        hoverIconColor: "group-hover:text-white",
        border: "group-hover:border-green-500/50"
      },
      purple: {
        bg: "bg-purple-500/20",
        hoverBg: "group-hover:bg-purple-500",
        iconColor: "text-purple-400",
        hoverIconColor: "group-hover:text-white",
        border: "group-hover:border-purple-500/50"
      }
    };
    return colors[color];
  };

  return (
    <div className="bg-gradient-to-br from-gray-900 via-gray-950 to-black text-white py-20 px-6">
      <div className="max-w-6xl mx-auto">

        <div className="text-center mb-16">
          <div className="inline-block mb-4">
            <div className="w-16 h-1 bg-gradient-to-r from-blue-400 to-purple-600 rounded-full mx-auto"></div>
          </div>
          <h1 className="text-4xl md:text-5xl font-bold bg-gradient-to-r from-white to-gray-300 bg-clip-text text-transparent">
            Hire the talent you need
          </h1>
          <p className="text-gray-400 mt-4 text-lg max-w-2xl mx-auto">
            Streamline your hiring process with our comprehensive recruitment tools
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-12 items-start">
          <div className="space-y-6">
            {features.map((feature, index) => {
              const colors = getColorClasses(feature.color);
              return (
                <div
                  key={index}
                  className={`flex items-start gap-5 bg-gray-800/40 p-6 rounded-2xl border border-gray-700 backdrop-blur-md shadow-md transition-all duration-300 group cursor-pointer hover:transform hover:scale-105 ${colors.border}`}
                >
                  <div className={`w-12 h-12 ${colors.bg} rounded-xl flex items-center justify-center flex-shrink-0 transition-all duration-300 ${colors.hoverBg}`}>
                    <div className={`${colors.iconColor} ${colors.hoverIconColor} transition-all duration-300`}>
                      {feature.icon}
                    </div>
                  </div>
                  <div>
                    <h3 className="text-xl font-semibold text-white group-hover:text-transparent group-hover:bg-gradient-to-r group-hover:from-white group-hover:to-gray-300 group-hover:bg-clip-text transition-all duration-300">
                      {feature.title}
                    </h3>
                    <p className="text-gray-400 mt-1 text-sm">
                      {feature.description}
                    </p>
                  </div>
                </div>
              );
            })}
          </div>

          <div className="hidden md:block">
            <div className="bg-gradient-to-br from-blue-600/20 to-purple-600/20 rounded-2xl p-8 border border-gray-700 backdrop-blur-sm">
              <div className="text-center mb-6">
                <div className="w-20 h-20 bg-gradient-to-br from-blue-500 to-purple-600 rounded-full flex items-center justify-center mx-auto mb-4">
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-10 w-10 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 13.255A23.931 23.931 0 0112 15c-3.183 0-6.22-.62-9-1.745M16 6V4a2 2 0 00-2-2h-4a2 2 0 00-2 2v2m4 6h.01M5 20h14a2 2 0 002-2V8a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                  </svg>
                </div>
                <h3 className="text-2xl font-bold text-white mb-2">Ready to hire?</h3>
                <p className="text-gray-300 text-sm">
                  Post your first job today and find the perfect candidate
                </p>
              </div>
              
              <div className="space-y-3 mb-6">
                <div className="flex items-center gap-3 text-sm text-gray-300">
                  <svg className="w-5 h-5 text-green-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                  </svg>
                  <span>Access to 10,000+ candidates</span>
                </div>
                <div className="flex items-center gap-3 text-sm text-gray-300">
                  <svg className="w-5 h-5 text-green-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                  </svg>
                  <span>AI-powered candidate matching</span>
                </div>
                <div className="flex items-center gap-3 text-sm text-gray-300">
                  <svg className="w-5 h-5 text-green-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                  </svg>
                  <span>Analytics and insights dashboard</span>
                </div>
              </div>

              <button className="w-full px-6 py-3 bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700 text-white rounded-xl font-semibold transition-all duration-300 transform hover:scale-105 shadow-lg">
                Post a Job Now
              </button>
            </div>
          </div>
        </div>

        <div className="mt-12 text-center md:hidden">
          <button className="px-6 py-3 bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700 text-white rounded-xl font-semibold transition-all duration-300 transform hover:scale-105 shadow-lg">
            Post a Job Now
          </button>
        </div>
      </div>
    </div>
  );
};

export default HireTalent;