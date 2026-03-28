// import React, { useState, useEffect } from "react";
// import { useAuth } from "../context/Authcontext/Authcontext";

// const JobsPage = () => {
//   const [jobs, setJobs] = useState([]);
//   const [appliedJobs, setAppliedJobs] = useState([]);
//   const { api, token } = useAuth();

//   useEffect(() => {
//     const fetchJobs = async () => {
//       try {
//         const res = await api.get("/jobs", {
//           headers: {
//             Authorization: `Bearer ${token}`,
//           },
//         });
//         setJobs(res.data);
//       } catch (error) {
//         console.log(error);
//       }
//     }

//     const fetchAppliedJobs = async () => {
//       try {
//         const res = await api.get("/applications/my-applications", {
//           headers: {
//             Authorization: `Bearer ${token}`,
//           },
//         })

//         const appliedIds = res.data.applications.map(app => app.jobId);
//         setAppliedJobs(appliedIds);
//       } catch (error) {
//         console.log(error);
//       }
//     }

//     if (token) {
//       fetchJobs();
//       fetchAppliedJobs();
//     }
//   }, [token]);

//   const handleApply = async (id) => {
//     try {
//       await api.post(`/applications/apply/${id}`, {}, {
//         headers: {
//           Authorization: `Bearer ${token}`,
//         },
//       });

//       setAppliedJobs(prev => [...prev, id]);
//     } catch (error) {
//       console.log(error.response?.data || error.message);
//     }
//   };

//   return (
//     <div className="min-h-screen bg-gradient-to-r from-slate-700 to-slate-900 text-white py-10 px-4">
//       <div className="max-w-6xl mx-auto">
//         <div className="text-center mb-10">
//           <h1 className="text-3xl md:text-4xl font-bold mb-2">
//             Available Jobs
//           </h1>
//           <p className="text-gray-300">
//             Find your next career opportunity
//           </p>
//         </div>

//         {jobs.length === 0 ? (
//           <div className="text-center py-20">
//             <div className="inline-flex items-center justify-center w-16 h-16 rounded-full bg-slate-800 mb-4">
//               <svg className="w-8 h-8 text-gray-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
//                 <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M21 13.255A23.931 23.931 0 0112 15c-3.183 0-6.22-.62-9-1.745M16 6V4a2 2 0 00-2-2h-4a2 2 0 00-2 2v2m4 6h.01M5 20h14a2 2 0 002-2V8a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
//               </svg>
//             </div>
//             <p className="text-gray-400 text-lg">No jobs available at the moment</p>
//             <p className="text-gray-500 text-sm mt-1">Check back later for new opportunities</p>
//           </div>
//         ) : (
//           <div className="space-y-5">
//             {jobs.map((job) => (
//               <div
//                 key={job.id}
//                 className="bg-slate-800/50 backdrop-blur rounded-xl p-6 border border-slate-700 hover:border-slate-600 transition-all hover:bg-slate-800/70"
//               >
//                 <div className="flex flex-col lg:flex-row lg:items-start lg:justify-between gap-4">
//                   <div className="flex-1">
//                     <div className="flex items-start justify-between flex-wrap gap-3">
//                       <div>
//                         <h2 className="text-xl md:text-2xl font-semibold text-white mb-1">
//                           {job.title}
//                         </h2>
//                         <div className="flex items-center gap-2 text-gray-300 text-sm">
//                           <span>{job.company}</span>
//                           <span className="w-1 h-1 bg-gray-500 rounded-full"></span>
//                           <span>{job.location}</span>
//                         </div>
//                       </div>
//                       <button
//                         onClick={() => handleApply(job.id)}
//                         disabled={appliedJobs.includes(job.id)}
//                         className={`px-6 py-2 rounded-lg text-sm font-medium transition-all ${
//                           appliedJobs.includes(job.id)
//                             ? "bg-slate-700 text-gray-400 cursor-not-allowed"
//                             : "bg-blue-600 hover:bg-blue-700 text-white shadow-lg hover:shadow-blue-600/30"
//                         }`}
//                       >
//                         {appliedJobs.includes(job.id) ? "✓ Applied" : "Apply Now"}
//                       </button>
//                     </div>

//                     <div className="flex flex-wrap gap-2 mt-4">
//                       <span className="text-xs bg-slate-700 text-gray-300 px-3 py-1 rounded-full">
//                         {job.type || "Full-time"}
//                       </span>
//                       <span className="text-xs bg-slate-700 text-gray-300 px-3 py-1 rounded-full">
//                         {job.experienceYears
//                           ? `${job.experienceYears}+ years`
//                           : "Entry level"}
//                       </span>
//                       {job.salaryRange && (
//                         <span className="text-xs bg-slate-700 text-gray-300 px-3 py-1 rounded-full">
//                           💰 {job.salaryRange}
//                         </span>
//                       )}
//                     </div>

//                     {job.requiredSkills && job.requiredSkills.length > 0 && (
//                       <div className="mt-4">
//                         <p className="text-sm text-gray-400 mb-2">Required Skills:</p>
//                         <div className="flex flex-wrap gap-2">
//                           {job.requiredSkills.map((skill, idx) => (
//                             <span
//                               key={idx}
//                               className="text-xs bg-slate-700/50 text-blue-300 px-2 py-1 rounded border border-slate-600"
//                             >
//                               {skill}
//                             </span>
//                           ))}
//                         </div>
//                       </div>
//                     )}

//                     {job.description && (
//                       <p className="text-gray-400 text-sm mt-4 line-clamp-2">
//                         {job.description}
//                       </p>
//                     )}
//                   </div>
//                 </div>
//               </div>
//             ))}
//           </div>
//         )}
//       </div>
//     </div>
//   );
// };

// export default JobsPage
import React, { useState, useEffect } from "react";
import { useAuth } from "../context/Authcontext/Authcontext";
import { useNavigate } from "react-router-dom";
import toast from "react-hot-toast";

const JobsPage = () => {
  const [jobs, setJobs] = useState([]);
  const [appliedJobs, setAppliedJobs] = useState([]);
  const { api, token } = useAuth();
  const navigate = useNavigate();

  useEffect(() => {
    const fetchJobs = async () => {
      try {
        const res = await api.get("/jobs", {
          headers: {
            Authorization: `Bearer ${token}`,
          },
        });
        setJobs(res.data);
      } catch (error) {
        console.log(error);
      }
    };

    const fetchAppliedJobs = async () => {
      try {
        const res = await api.get("/applications/my-applications", {
          headers: {
            Authorization: `Bearer ${token}`,
          },
        });

        const appliedIds = res.data.applications.map((app) => app.jobId);
        setAppliedJobs(appliedIds);
      } catch (error) {
        console.log(error);
      }
    };

    if (token) {
      fetchJobs();
      fetchAppliedJobs();
    }
  }, [token]);

const handleApply = async (id) => {
  try {
    await api.post(
      `/applications/apply/${id}`,
      {},
      {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      }
    );

    setAppliedJobs((prev) => [...prev, id]);
    toast.success("Job Applied");
  } catch (error) {
    toast.error(error.response?.data?.message || error.message || "Something went wrong");
    console.log(error.response?.data || error.message);
  }
}

  return (
    <div className="min-h-screen bg-gradient-to-r from-slate-700 to-slate-900 text-white py-10 px-4">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-10">
          <h1 className="text-3xl md:text-4xl font-bold mb-2">
            Available Jobs
          </h1>
          <p className="text-gray-300">
            Find your next career opportunity
          </p>
        </div>

        {jobs.length === 0 ? (
          <div className="text-center py-20">
            <p className="text-gray-400 text-lg">
              No jobs available at the moment
            </p>
          </div>
        ) : (
          <div className="space-y-5">
            {jobs.map((job) => (
              <div
                key={job.id}
                onClick={() => navigate(`/job-insights/${job.id}`)}
                className="bg-slate-800/50 backdrop-blur rounded-xl p-6 border border-slate-700 hover:border-slate-600 transition-all hover:bg-slate-800/70 cursor-pointer"
              >
                <div className="flex flex-col lg:flex-row lg:items-start lg:justify-between gap-4">
                  <div className="flex-1">
                    <div className="flex items-start justify-between flex-wrap gap-3">
                      <div>
                        <h2 className="text-xl md:text-2xl font-semibold text-white mb-1">
                          {job.title}
                        </h2>
                        <div className="flex items-center gap-2 text-gray-300 text-sm">
                          <span>{job.company}</span>
                          <span className="w-1 h-1 bg-gray-500 rounded-full"></span>
                          <span>{job.location}</span>
                        </div>
                      </div>

                      <button
                        onClick={(e) => {
                          e.stopPropagation();
                          handleApply(job.id);
                        }}
                        disabled={appliedJobs.includes(job.id)}
                        className={`px-6 py-2 rounded-lg text-sm font-medium transition-all ${
                          appliedJobs.includes(job.id)
                            ? "bg-slate-700 text-gray-400 cursor-not-allowed"
                            : "bg-blue-600 hover:bg-blue-700 text-white shadow-lg hover:shadow-blue-600/30"
                        }`}
                      >
                        {appliedJobs.includes(job.id)
                          ? "✓ Applied"
                          : "Apply Now"}
                      </button>
                    </div>

                    <div className="flex flex-wrap gap-2 mt-4">
                      <span className="text-xs bg-slate-700 text-gray-300 px-3 py-1 rounded-full">
                        {job.type || "Full-time"}
                      </span>

                      <span className="text-xs bg-slate-700 text-gray-300 px-3 py-1 rounded-full">
                        {job.experienceYears
                          ? `${job.experienceYears}+ years`
                          : "Entry level"}
                      </span>

                      {job.salaryRange && (
                        <span className="text-xs bg-slate-700 text-gray-300 px-3 py-1 rounded-full">
                          💰 {job.salaryRange}
                        </span>
                      )}
                    </div>

                    {job.requiredSkills && job.requiredSkills.length > 0 && (
                      <div className="mt-4">
                        <p className="text-sm text-gray-400 mb-2">
                          Required Skills:
                        </p>
                        <div className="flex flex-wrap gap-2">
                          {job.requiredSkills.map((skill, idx) => (
                            <span
                              key={idx}
                              className="text-xs bg-slate-700/50 text-blue-300 px-2 py-1 rounded border border-slate-600"
                            >
                              {skill}
                            </span>
                          ))}
                        </div>
                      </div>
                    )}

                    {job.description && (
                      <p className="text-gray-400 text-sm mt-4 line-clamp-2">
                        {job.description}
                      </p>
                    )}
                  </div>
                </div>
              </div>
            ))}
          </div>
        )}
      </div>
    </div>
  );
};

export default JobsPage;