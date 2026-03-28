import React from "react";
import { Link } from "react-router-dom";

const CandidateSteps = () => {
  const steps = [
    {
      number: "01",
      title: "Create Your Profile",
      description: "Sign up and build your professional profile with skills, experience, and preferences.",
      icon: (
        <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z" />
        </svg>
      ),
      color: "blue"
    },
    {
      number: "02",
      title: "Get AI-Matched Jobs",
      description: "Our AI analyzes your profile and matches you with relevant job opportunities.",
      icon: (
        <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9.663 17h4.673M12 3v1m6.364 1.636l-.707.707M21 12h-1M4 12H3m3.343-5.657l-.707-.707m2.828 9.9a5 5 0 117.072 0l-.548.547A3.374 3.374 0 0014 18.469V19a2 2 0 11-4 0v-.531c0-.895-.356-1.754-.988-2.386l-.548-.547z" />
        </svg>
      ),
      color: "green"
    },
    {
      number: "03",
      title: "Apply With One Click",
      description: "Submit applications instantly with your pre-filled profile and resume.",
      icon: (
        <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 15l-2 5L9 9l11 4-5 2zm0 0l5 5M7.188 2.239l.777 2.897M5.136 7.965l-2.898-.777M13.95 4.05l-2.122 2.122m-5.657 5.656l-2.12 2.122" />
        </svg>
      ),
      color: "purple"
    },
    {
      number: "04",
      title: "Track & Get Hired",
      description: "Monitor your applications, receive updates, and connect with employers.",
      icon: (
        <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5H7a2 2 0 00-2 2v12a2 2 0 002 2h10a2 2 0 002-2V7a2 2 0 00-2-2h-2M9 5a2 2 0 002 2h2a2 2 0 002-2M9 5a2 2 0 012-2h2a2 2 0 012 2m-6 9l2 2 4-4" />
        </svg>
      ),
      color: "orange"
    }
  ];

  const getColorClasses = (color) => {
    const colors = {
      blue: {
        bg: "bg-blue-500/20",
        hoverBg: "group-hover:bg-blue-500",
        iconColor: "text-blue-400",
        hoverIconColor: "group-hover:text-white",
        border: "group-hover:border-blue-500/50",
        numberBg: "bg-blue-500/10",
        numberText: "text-blue-400"
      },
      green: {
        bg: "bg-green-500/20",
        hoverBg: "group-hover:bg-green-500",
        iconColor: "text-green-400",
        hoverIconColor: "group-hover:text-white",
        border: "group-hover:border-green-500/50",
        numberBg: "bg-green-500/10",
        numberText: "text-green-400"
      },
      purple: {
        bg: "bg-purple-500/20",
        hoverBg: "group-hover:bg-purple-500",
        iconColor: "text-purple-400",
        hoverIconColor: "group-hover:text-white",
        border: "group-hover:border-purple-500/50",
        numberBg: "bg-purple-500/10",
        numberText: "text-purple-400"
      },
      orange: {
        bg: "bg-orange-500/20",
        hoverBg: "group-hover:bg-orange-500",
        iconColor: "text-orange-400",
        hoverIconColor: "group-hover:text-white",
        border: "group-hover:border-orange-500/50",
        numberBg: "bg-orange-500/10",
        numberText: "text-orange-400"
      }
    };
    return colors[color];
  };

  const benefits = [
    "Free lifetime access",
    "AI-powered job matching",
    "Real-time application tracking",
    "Direct messaging with recruiters"
  ];

  return (
    <div className="bg-gradient-to-br from-gray-900 via-gray-950 to-black text-white py-20 px-6">
      <div className="max-w-7xl mx-auto">

        <div className="text-center mb-16">
          <div className="inline-block mb-4">
            <div className="w-16 h-1 bg-gradient-to-r from-blue-400 to-purple-600 rounded-full mx-auto"></div>
          </div>
          <h1 className="text-4xl md:text-5xl font-bold bg-gradient-to-r from-white to-gray-300 bg-clip-text text-transparent">
            Your Journey to Success
          </h1>
          <p className="text-gray-400 mt-4 text-lg max-w-2xl mx-auto">
            Four simple steps to land your dream job and advance your career
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 mb-16">
          {steps.map((step, index) => {
            const colors = getColorClasses(step.color);
            return (
              <div
                key={index}
                className={`relative bg-gray-800/40 p-6 rounded-2xl border border-gray-700 backdrop-blur-md transition-all duration-300 group cursor-pointer hover:transform hover:scale-105 ${colors.border}`}
              >
                <div className={`absolute top-4 right-4 w-8 h-8 ${colors.numberBg} rounded-full flex items-center justify-center`}>
                  <span className={`text-xs font-bold ${colors.numberText}`}>{step.number}</span>
                </div>
                <div className={`w-14 h-14 ${colors.bg} rounded-xl flex items-center justify-center mb-4 transition-all duration-300 ${colors.hoverBg}`}>
                  <div className={`${colors.iconColor} ${colors.hoverIconColor} transition-all duration-300`}>
                    {step.icon}
                  </div>
                </div>
                <h3 className="text-xl font-semibold text-white mb-2 group-hover:text-transparent group-hover:bg-gradient-to-r group-hover:from-white group-hover:to-gray-300 group-hover:bg-clip-text transition-all duration-300">
                  {step.title}
                </h3>
                <p className="text-gray-400 text-sm leading-relaxed">
                  {step.description}
                </p>
              </div>
            );
          })}
        </div>

      
      </div>
    </div>
  );
};

export default CandidateSteps