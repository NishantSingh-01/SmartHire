import React, { useState, useEffect } from "react";
import axios from "axios";
import { useAuth } from "../context/Authcontext/Authcontext";

const JobsPage = () => {
  const [jobs, setJobs] = useState([]);
  const [appliedJobs, setAppliedJobs] = useState([]);
  const {api}   = useAuth()

  useEffect(() => {
    const fetchJobs = async () => {
      try {
      const res = await api.get("/jobs", {
      headers: {
        Authorization: `Bearer ${token}`,
      },
    })
        console.log(res.data)
        setJobs(res.data);
      } catch (error) {
        console.log(error);
      }
    };

    fetchJobs();
  }, []);

  const handleApply = (id) => {
    if (!appliedJobs.includes(id)) {
      setAppliedJobs([...appliedJobs, id]);
    }
  };

  return (
    <div className="bg-black min-h-screen text-white px-6 py-10">
      <div className="max-w-6xl mx-auto">
        <h1 className="text-3xl md:text-4xl font-semibold mb-10 text-center">
          Available Jobs 💼
        </h1>

        <div className="space-y-6">
          {jobs.map((job) => (
            <div
              key={job.id}
              className="border border-gray-700 rounded-2xl p-6 flex flex-col md:flex-row md:items-center md:justify-between hover:bg-gray-900 transition"
            >
              <div>
                <h2 className="text-xl md:text-2xl font-semibold">{job.title}</h2>
                <p className="text-gray-400 text-sm mt-1">
                  {job.company} • {job.location}
                </p>
                <div className="flex flex-wrap gap-2 mt-2">
                  <span className="text-xs bg-gray-800 px-3 py-1 rounded-full">{job.type || "Full-time"}</span>
                  <span className="text-xs bg-gray-800 px-3 py-1 rounded-full">{job.experienceYears ? `${job.experienceYears}+ yrs` : "0-1 yrs"}</span>
                  {job.salaryRange && (
                    <span className="text-xs bg-gray-800 px-3 py-1 rounded-full">{job.salaryRange}</span>
                  )}
                </div>
                {job.requiredSkills && (
                  <p className="text-gray-400 text-sm mt-2">
                    Skills: {job.requiredSkills.join(", ")}
                  </p>
                )}
              </div>

              <button
                onClick={() => handleApply(job.id)}
                disabled={appliedJobs.includes(job.id)}
                className={`mt-4 md:mt-0 px-5 py-2 rounded-lg text-sm font-medium transition
                  ${
                    appliedJobs.includes(job.id)
                      ? "bg-gray-700 cursor-not-allowed"
                      : "bg-white text-black hover:bg-gray-200"
                  }`}
              >
                {appliedJobs.includes(job.id) ? "Applied ✅" : "Apply Now"}
              </button>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default JobsPage;