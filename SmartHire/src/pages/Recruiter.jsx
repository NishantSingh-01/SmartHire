import React from 'react'
import RecruiterNavbar from '../components/RecruiterNavbar'
import RecuiterHome from './RecuiterHome'
import Footer from '../components/Footer'
import RecruiterHero from '../components/RecruiterHero'
import HowWork from '../components/HowWork'
const Recruiter = () => {
  return (
    <div>
      <RecruiterNavbar/>
      <RecuiterHome/>
     <hr className="my- border-0 h-px bg-gradient-to-r from-transparent via-gray-700 to-transparent" /> 
     <HowWork/> 
      <RecruiterHero/>
     <hr className="my- border-0 h-px bg-gradient-to-r from-transparent via-gray-700 to-transparent" />
      <Footer/>
    </div>
  )
}

export default Recruiter
