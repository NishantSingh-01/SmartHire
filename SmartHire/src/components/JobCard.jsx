import React from 'react';

const JobCard = () => {
  return (
    <div className=" bg-gray-900 py-16 px-6 sm:px-12 lg:px-20 flex items-center justify-center">
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
          
          <div className="flex items-start space-x-4 p-6 bg-gray-700 rounded-2xl border border-gray-600">
            <div className="w-12 h-12 bg-blue-500 rounded-2xl flex items-center justify-center flex-shrink-0 mt-1">
              <span className="text-white text-2xl">🤖</span>
            </div>
            <div>
              <h3 className="text-xl font-semibold text-white">AI-Powered Matching</h3>
              <p className="text-gray-300 mt-1">Get matched with jobs that fit your skills.</p>
            </div>
          </div>

          <div className="flex items-start space-x-4 p-6 bg-gray-700 rounded-2xl border border-gray-600">
            <div className="w-12 h-12 bg-green-500 rounded-2xl flex items-center justify-center flex-shrink-0 mt-1">
              <span className="text-white text-2xl">💬</span>
            </div>
            <div>
              <h3 className="text-xl font-semibold text-white">Direct Messaging</h3>
              <p className="text-gray-300 mt-1">Connect directly with hiring managers.</p>
            </div>
          </div>

          <div className="flex items-start space-x-4 p-6 bg-gray-700 rounded-2xl border border-gray-600">
            <div className="w-12 h-12 bg-purple-500 rounded-2xl flex items-center justify-center flex-shrink-0 mt-1">
              <span className="text-white text-2xl">👤</span>
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