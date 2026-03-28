import React from 'react';

const JobCard = () => {
  return (
    <div className="bg-gray-900 py-16 px-6 sm:px-12 lg:px-20 flex items-center justify-center">
      <div className="w-full max-w-7xl bg-gray-800 rounded-3xl shadow-2xl border border-gray-700 p-12 space-y-10">
        
        <div className="text-center">
          <h1 className="text-4xl md:text-5xl font-bold text-white mb-4">
            Find the job you love 
          </h1>
          <p className="text-gray-300 text-lg md:text-xl max-w-2xl mx-auto">
            Discover opportunities, get matched with your skills, and connect with hiring managers directly.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          
          <div className="flex items-start space-x-4 p-6 bg-gray-700 rounded-2xl border border-gray-600 hover:border-blue-500/50 transition-all duration-300 group hover:transform hover:scale-105">
            <div className="w-12 h-12 bg-blue-500 rounded-2xl flex items-center justify-center flex-shrink-0 mt-1 group-hover:bg-blue-600 transition-all duration-300">
              <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9.663 17h4.673M12 3v1m6.364 1.636l-.707.707M21 12h-1M4 12H3m3.343-5.657l-.707-.707m2.828 9.9a5 5 0 117.072 0l-.548.547A3.374 3.374 0 0014 18.469V19a2 2 0 11-4 0v-.531c0-.895-.356-1.754-.988-2.386l-.548-.547z" />
              </svg>
            </div>
            <div>
              <h3 className="text-xl font-semibold text-white">AI-Powered Matching</h3>
              <p className="text-gray-300 mt-1">Get matched with jobs that fit your skills.</p>
            </div>
          </div>

          <div className="flex items-start space-x-4 p-6 bg-gray-700 rounded-2xl border border-gray-600 hover:border-green-500/50 transition-all duration-300 group hover:transform hover:scale-105">
            <div className="w-12 h-12 bg-green-500 rounded-2xl flex items-center justify-center flex-shrink-0 mt-1 group-hover:bg-green-600 transition-all duration-300">
              <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 12h.01M12 12h.01M16 12h.01M21 12c0 4.418-4.03 8-9 8a9.863 9.863 0 01-4.255-.949L3 20l1.395-3.72C3.512 15.042 3 13.574 3 12c0-4.418 4.03-8 9-8s9 3.582 9 8z" />
              </svg>
            </div>
            <div>
              <h3 className="text-xl font-semibold text-white">Direct Messaging</h3>
              <p className="text-gray-300 mt-1">Connect directly with hiring managers.</p>
            </div>
          </div>

          <div className="flex items-start space-x-4 p-6 bg-gray-700 rounded-2xl border border-gray-600 hover:border-purple-500/50 transition-all duration-300 group hover:transform hover:scale-105">
            <div className="w-12 h-12 bg-purple-500 rounded-2xl flex items-center justify-center flex-shrink-0 mt-1 group-hover:bg-purple-600 transition-all duration-300">
              <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z" />
              </svg>
            </div>
            <div>
              <h3 className="text-xl font-semibold text-white">Profile Builder</h3>
              <p className="text-gray-300 mt-1">Showcase your experience with a beautiful profile.</p>
            </div>
          </div>

        </div>
      </div>
    </div>
  );
};

export default JobCard;