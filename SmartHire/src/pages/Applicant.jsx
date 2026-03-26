import React, { useState, useEffect } from 'react'
import { useAuth } from '../context/Authcontext/Authcontext'

const Applicant = () => {
  const { api } = useAuth()
  const [applicants, setApplicants] = useState([])
  const [loading, setLoading] = useState(true)
  const [filter, setFilter] = useState('all')
  const [searchTerm, setSearchTerm] = useState('')

  useEffect(() => {
    fetchApplicants()
  }, [])

  const fetchApplicants = async () => {
    try {
      const token = localStorage.getItem('token')
      const response = await api.get('/applicants', {
        headers: {
          Authorization: `Bearer ${token}`
        }
      })
      setApplicants(response.data)
    } catch (error) {
      console.error('Error fetching applicants:', error)
    } finally {
      setLoading(false)
    }
  }

  const updateStatus = async (applicantId, status) => {
    try {
      const token = localStorage.getItem('token')
      await api.patch(`/applicants/${applicantId}/status`, 
        { status },
        {
          headers: {
            Authorization: `Bearer ${token}`
          }
        }
      )
      
      // Update local state
      setApplicants(applicants.map(applicant => 
        applicant.id === applicantId ? { ...applicant, status } : applicant
      ))
      
      // Show success message
      showNotification(`Status updated to ${status}`, 'success')
    } catch (error) {
      console.error('Error updating status:', error)
      showNotification('Failed to update status', 'error')
    }
  }

  const showNotification = (message, type) => {
    const notification = document.createElement('div')
    notification.className = `fixed top-4 right-4 px-6 py-3 rounded-lg shadow-lg z-50 animate-slide-in ${
      type === 'success' ? 'bg-green-500' : 'bg-red-500'
    } text-white`
    notification.textContent = message
    document.body.appendChild(notification)
    setTimeout(() => notification.remove(), 3000)
  }

  const getStatusColor = (status) => {
    switch(status) {
      case 'pending':
        return 'bg-yellow-500/20 text-yellow-400 border-yellow-500/50'
      case 'reviewed':
        return 'bg-blue-500/20 text-blue-400 border-blue-500/50'
      case 'shortlisted':
        return 'bg-purple-500/20 text-purple-400 border-purple-500/50'
      case 'rejected':
        return 'bg-red-500/20 text-red-400 border-red-500/50'
      case 'hired':
        return 'bg-green-500/20 text-green-400 border-green-500/50'
      default:
        return 'bg-gray-500/20 text-gray-400 border-gray-500/50'
    }
  }

  const filteredApplicants = applicants.filter(applicant => {
    const matchesFilter = filter === 'all' || applicant.status === filter
    const matchesSearch = applicant.name?.toLowerCase().includes(searchTerm.toLowerCase()) ||
                         applicant.email?.toLowerCase().includes(searchTerm.toLowerCase()) ||
                         applicant.jobTitle?.toLowerCase().includes(searchTerm.toLowerCase())
    return matchesFilter && matchesSearch
  })

  const stats = {
    total: applicants.length,
    pending: applicants.filter(a => a.status === 'pending').length,
    shortlisted: applicants.filter(a => a.status === 'shortlisted').length,
    hired: applicants.filter(a => a.status === 'hired').length
  }

  if (loading) {
    return (
      <div className="min-h-screen bg-gradient-to-br from-gray-900 to-gray-800 flex items-center justify-center">
        <div className="text-center">
          <div className="inline-block w-12 h-12 border-4 border-green-500 border-t-transparent rounded-full animate-spin"></div>
          <p className="text-gray-400 mt-4">Loading applicants...</p>
        </div>
      </div>
    )
  }

  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-900 to-gray-800 py-8 px-4">
      <div className="max-w-7xl mx-auto">
        
        {/* Header */}
        <div className="mb-8">
          <div className="inline-block mb-3">
            <div className="w-16 h-1 bg-gradient-to-r from-green-400 to-green-600 rounded-full"></div>
          </div>
          <h1 className="text-4xl font-bold bg-gradient-to-r from-white to-gray-300 bg-clip-text text-transparent">
            Applicants
          </h1>
          <p className="text-gray-400 mt-2">
            Manage and review all job applicants
          </p>
        </div>

        {/* Stats Cards */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 mb-8">
          <div className="bg-gray-800/50 backdrop-blur-sm rounded-xl p-6 border border-gray-700 hover:border-green-500/50 transition-all duration-300">
            <div className="flex items-center justify-between">
              <div>
                <p className="text-gray-400 text-sm">Total Applicants</p>
                <p className="text-3xl font-bold text-white mt-2">{stats.total}</p>
              </div>
              <div className="w-12 h-12 bg-green-500/20 rounded-lg flex items-center justify-center">
                <span className="text-2xl">👥</span>
              </div>
            </div>
          </div>
          
          <div className="bg-gray-800/50 backdrop-blur-sm rounded-xl p-6 border border-gray-700 hover:border-yellow-500/50 transition-all duration-300">
            <div className="flex items-center justify-between">
              <div>
                <p className="text-gray-400 text-sm">Pending Review</p>
                <p className="text-3xl font-bold text-white mt-2">{stats.pending}</p>
              </div>
              <div className="w-12 h-12 bg-yellow-500/20 rounded-lg flex items-center justify-center">
                <span className="text-2xl">⏳</span>
              </div>
            </div>
          </div>
          
          <div className="bg-gray-800/50 backdrop-blur-sm rounded-xl p-6 border border-gray-700 hover:border-purple-500/50 transition-all duration-300">
            <div className="flex items-center justify-between">
              <div>
                <p className="text-gray-400 text-sm">Shortlisted</p>
                <p className="text-3xl font-bold text-white mt-2">{stats.shortlisted}</p>
              </div>
              <div className="w-12 h-12 bg-purple-500/20 rounded-lg flex items-center justify-center">
                <span className="text-2xl">⭐</span>
              </div>
            </div>
          </div>
          
          <div className="bg-gray-800/50 backdrop-blur-sm rounded-xl p-6 border border-gray-700 hover:border-green-500/50 transition-all duration-300">
            <div className="flex items-center justify-between">
              <div>
                <p className="text-gray-400 text-sm">Hired</p>
                <p className="text-3xl font-bold text-white mt-2">{stats.hired}</p>
              </div>
              <div className="w-12 h-12 bg-green-500/20 rounded-lg flex items-center justify-center">
                <span className="text-2xl">🎉</span>
              </div>
            </div>
          </div>
        </div>

        {/* Filters and Search */}
        <div className="bg-gray-800/50 backdrop-blur-sm rounded-xl p-6 border border-gray-700 mb-8">
          <div className="flex flex-col md:flex-row gap-4 justify-between items-start md:items-center">
            <div className="flex flex-wrap gap-2">
              <button
                onClick={() => setFilter('all')}
                className={`px-4 py-2 rounded-lg transition-all duration-300 ${
                  filter === 'all'
                    ? 'bg-green-500 text-white'
                    : 'bg-gray-700 text-gray-300 hover:bg-gray-600'
                }`}
              >
                All
              </button>
              <button
                onClick={() => setFilter('pending')}
                className={`px-4 py-2 rounded-lg transition-all duration-300 ${
                  filter === 'pending'
                    ? 'bg-yellow-500 text-white'
                    : 'bg-gray-700 text-gray-300 hover:bg-gray-600'
                }`}
              >
                Pending
              </button>
              <button
                onClick={() => setFilter('reviewed')}
                className={`px-4 py-2 rounded-lg transition-all duration-300 ${
                  filter === 'reviewed'
                    ? 'bg-blue-500 text-white'
                    : 'bg-gray-700 text-gray-300 hover:bg-gray-600'
                }`}
              >
                Reviewed
              </button>
              <button
                onClick={() => setFilter('shortlisted')}
                className={`px-4 py-2 rounded-lg transition-all duration-300 ${
                  filter === 'shortlisted'
                    ? 'bg-purple-500 text-white'
                    : 'bg-gray-700 text-gray-300 hover:bg-gray-600'
                }`}
              >
                Shortlisted
              </button>
              <button
                onClick={() => setFilter('hired')}
                className={`px-4 py-2 rounded-lg transition-all duration-300 ${
                  filter === 'hired'
                    ? 'bg-green-500 text-white'
                    : 'bg-gray-700 text-gray-300 hover:bg-gray-600'
                }`}
              >
                Hired
              </button>
              <button
                onClick={() => setFilter('rejected')}
                className={`px-4 py-2 rounded-lg transition-all duration-300 ${
                  filter === 'rejected'
                    ? 'bg-red-500 text-white'
                    : 'bg-gray-700 text-gray-300 hover:bg-gray-600'
                }`}
              >
                Rejected
              </button>
            </div>
            
            <div className="w-full md:w-64">
              <input
                type="text"
                placeholder="Search by name, email or job..."
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
                className="w-full bg-gray-700 border border-gray-600 text-white px-4 py-2 rounded-lg focus:outline-none focus:border-green-500 transition-colors"
              />
            </div>
          </div>
        </div>

        {/* Applicants List */}
        {filteredApplicants.length === 0 ? (
          <div className="bg-gray-800/50 backdrop-blur-sm rounded-xl p-12 text-center border border-gray-700">
            <div className="text-6xl mb-4">📭</div>
            <h3 className="text-xl font-semibold text-white mb-2">No applicants found</h3>
            <p className="text-gray-400">
              {searchTerm ? 'Try adjusting your search criteria' : 'No applicants match the selected filter'}
            </p>
          </div>
        ) : (
          <div className="grid grid-cols-1 gap-6">
            {filteredApplicants.map((applicant) => (
              <div
                key={applicant.id}
                className="bg-gray-800/50 backdrop-blur-sm rounded-xl p-6 border border-gray-700 hover:border-green-500/50 transition-all duration-300 hover:transform hover:scale-[1.02]"
              >
                <div className="flex flex-col lg:flex-row gap-6">
                  {/* Avatar and Basic Info */}
                  <div className="flex-shrink-0">
                    <div className="w-20 h-20 bg-gradient-to-br from-green-500 to-green-600 rounded-full flex items-center justify-center">
                      <span className="text-3xl font-bold text-white">
                        {applicant.name?.charAt(0) || '?'}
                      </span>
                    </div>
                  </div>
                  
                  {/* Details */}
                  <div className="flex-grow">
                    <div className="flex flex-wrap items-start justify-between gap-4 mb-4">
                      <div>
                        <h3 className="text-xl font-semibold text-white mb-1">
                          {applicant.name}
                        </h3>
                        <p className="text-gray-400 text-sm">{applicant.email}</p>
                        {applicant.phone && (
                          <p className="text-gray-500 text-xs mt-1">📞 {applicant.phone}</p>
                        )}
                      </div>
                      <div className="flex flex-col items-end gap-2">
                        <span className={`px-3 py-1 rounded-full text-xs font-medium border ${getStatusColor(applicant.status)}`}>
                          {applicant.status?.toUpperCase()}
                        </span>
                        <span className="text-gray-500 text-xs">
                          Applied: {new Date(applicant.appliedAt).toLocaleDateString()}
                        </span>
                      </div>
                    </div>
                    
                    {/* Job Info */}
                    <div className="bg-gray-700/30 rounded-lg p-4 mb-4">
                      <p className="text-gray-300 text-sm">
                        <span className="font-semibold text-green-400">Position:</span> {applicant.jobTitle}
                      </p>
                      {applicant.experience && (
                        <p className="text-gray-300 text-sm mt-1">
                          <span className="font-semibold text-green-400">Experience:</span> {applicant.experience} years
                        </p>
                      )}
                    </div>
                    
                    {/* Skills */}
                    {applicant.skills && applicant.skills.length > 0 && (
                      <div className="mb-4">
                        <p className="text-sm text-gray-400 mb-2">Skills:</p>
                        <div className="flex flex-wrap gap-2">
                          {applicant.skills.map((skill, idx) => (
                            <span
                              key={idx}
                              className="px-2 py-1 bg-gray-700 text-gray-300 text-xs rounded-md"
                            >
                              {skill}
                            </span>
                          ))}
                        </div>
                      </div>
                    )}
                    
                    {/* Cover Letter Preview */}
                    {applicant.coverLetter && (
                      <div className="mb-4">
                        <p className="text-sm text-gray-400 mb-2">Cover Letter:</p>
                        <p className="text-gray-300 text-sm line-clamp-2">
                          {applicant.coverLetter}
                        </p>
                      </div>
                    )}
                    
                    {/* Action Buttons */}
                    <div className="flex flex-wrap gap-3 mt-4 pt-4 border-t border-gray-700">
                      <button
                        onClick={() => window.open(applicant.resumeUrl, '_blank')}
                        className="px-4 py-2 bg-blue-600 hover:bg-blue-700 text-white rounded-lg transition-all duration-300 text-sm"
                      >
                        📄 View Resume
                      </button>
                      
                      {applicant.status === 'pending' && (
                        <>
                          <button
                            onClick={() => updateStatus(applicant.id, 'reviewed')}
                            className="px-4 py-2 bg-blue-500/20 hover:bg-blue-500/30 text-blue-400 rounded-lg transition-all duration-300 text-sm border border-blue-500/30"
                          >
                            Mark as Reviewed
                          </button>
                          <button
                            onClick={() => updateStatus(applicant.id, 'shortlisted')}
                            className="px-4 py-2 bg-purple-500/20 hover:bg-purple-500/30 text-purple-400 rounded-lg transition-all duration-300 text-sm border border-purple-500/30"
                          >
                            Shortlist
                          </button>
                        </>
                      )}
                      
                      {applicant.status === 'reviewed' && (
                        <button
                          onClick={() => updateStatus(applicant.id, 'shortlisted')}
                          className="px-4 py-2 bg-purple-500/20 hover:bg-purple-500/30 text-purple-400 rounded-lg transition-all duration-300 text-sm border border-purple-500/30"
                        >
                          Shortlist
                        </button>
                      )}
                      
                      {(applicant.status === 'shortlisted' || applicant.status === 'reviewed') && (
                        <button
                          onClick={() => updateStatus(applicant.id, 'hired')}
                          className="px-4 py-2 bg-green-500/20 hover:bg-green-500/30 text-green-400 rounded-lg transition-all duration-300 text-sm border border-green-500/30"
                        >
                          Mark as Hired
                        </button>
                      )}
                      
                      {applicant.status !== 'rejected' && applicant.status !== 'hired' && (
                        <button
                          onClick={() => updateStatus(applicant.id, 'rejected')}
                          className="px-4 py-2 bg-red-500/20 hover:bg-red-500/30 text-red-400 rounded-lg transition-all duration-300 text-sm border border-red-500/30"
                        >
                          Reject
                        </button>
                      )}
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        )}
      </div>

      {/* Add animation styles */}
      <style jsx>{`
        @keyframes slide-in {
          from {
            transform: translateX(100%);
            opacity: 0;
          }
          to {
            transform: translateX(0);
            opacity: 1;
          }
        }
        
        .animate-slide-in {
          animation: slide-in 0.3s ease-out;
        }
        
        .line-clamp-2 {
          display: -webkit-box;
          -webkit-line-clamp: 2;
          -webkit-box-orient: vertical;
          overflow: hidden;
        }
      `}</style>
    </div>
  )
}

export default Applicant