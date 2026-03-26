import React from "react";

const HireTalent = () => {
  return (
    <div className="bg-gradient-to-br from-gray-900 via-gray-950 to-black text-white py-20 px-6">
      <div className="max-w-6xl mx-auto">

        <h1 className="text-4xl md:text-5xl font-bold text-center mb-16">
          Hire the talent you need 
        </h1>

        <div className="grid md:grid-cols-2 gap-12 items-center">

          <div className="space-y-10">

            <div className="flex items-start gap-5 bg-gray-800/60 p-6 rounded-2xl border border-gray-700 backdrop-blur-md shadow-md">
              <div className="text-3xl flex-shrink-0">👤</div>
              <div>
                <h3 className="text-xl font-semibold text-white">Vetted Candidate Pool</h3>
                <p className="text-gray-400 mt-1">Access thousands of qualified professionals.</p>
              </div>
            </div>

            <div className="flex items-start gap-5 bg-gray-800/60 p-6 rounded-2xl border border-gray-700 backdrop-blur-md shadow-md">
              <div className="text-3xl flex-shrink-0">📄</div>
              <div>
                <h3 className="text-xl font-semibold text-white">Easy Job Posting</h3>
                <p className="text-gray-400 mt-1">Post openings quickly and easily.</p>
              </div>
            </div>

            <div className="flex items-start gap-5 bg-gray-800/60 p-6 rounded-2xl border border-gray-700 backdrop-blur-md shadow-md">
              <div className="text-3xl flex-shrink-0">✅</div>
              <div>
                <h3 className="text-xl font-semibold text-white">Applicant Management</h3>
                <p className="text-gray-400 mt-1">Track and manage candidates in one place.</p>
              </div>
            </div>

          </div>

          <div className="hidden md:block border-l border-gray-700 h-full"></div>

        </div>
      </div>
    </div>
  );
};

export default HireTalent;