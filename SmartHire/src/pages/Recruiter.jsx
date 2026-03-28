import React from 'react'
import RecruiterNavbar from '../components/RecruiterNavbar'
import RecuiterHome from './RecuiterHome'
import Footer from '../components/Footer'
import RecruiterHero from '../components/RecruiterHero'
import HowWork from '../components/HowWork'
import HireTalent from '../components/HireTalent'
const Recruiter = () => {
  return (
    <div>
      <RecruiterNavbar/>
      <RecuiterHome/>
     <hr className="my- border-0 h-px bg-gradient-to-r from-transparent via-gray-700 to-transparent" /> 
     <HowWork/> 
     <HireTalent/>
      <RecruiterHero/>
     <hr className="my- border-0 h-px bg-gradient-to-r from-transparent via-gray-700 to-transparent" />
      <Footer/>
    </div>
  )
}

export default Recruiter
