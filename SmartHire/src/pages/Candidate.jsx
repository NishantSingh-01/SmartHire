import React from 'react'
import Navbar from '../components/Navbar'
import Footer from '../components/Footer'
import CandidateHome from '../components/CandidateHome'
import JobCard from '../components/JobCard'
import HireTalent from '../components/HireTalent'
import CandidateSteps from '../components/CandidateSteps'
const Candidate = () => {
  return (
    <div>
     <Navbar/>
     <CandidateHome/>
     <JobCard/>
     {/* <HireTalent/> */}
     <CandidateSteps/>
     <Footer/>
    </div>
  )
}

export default Candidate
