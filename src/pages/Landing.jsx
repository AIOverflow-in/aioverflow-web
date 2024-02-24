import React from 'react'
import HeroHeader from '../components/Landing/HeroHeader'
import AboutSection from '../components/Landing/AboutSection'
import Projects from '../components/Landing/Projects'
import OneLiner from '../components/Landing/OneLiner'
import Services from '../components/Landing/Services'
import Metrics from '../components/Landing/Metrics'
import Testimonials from '../components/Landing/Testimonials'
import Achievements from '../components/Landing/Achievements'
import Mentoring from '../components/Landing/Mentoring'
import Team from '../components/Landing/Team'
import Clients from '../components/Landing/Clients'

function Landing() {
  return (
    <div className='bg-transparent'>
       {/* <HeroHeader /> */}
       <AboutSection />
       <OneLiner />
       <Projects />
       <Achievements />
       <Clients />
       <Services />
       <Metrics />
       <Testimonials />
       <Mentoring />
       {/* <Team  /> */}
       
    </div>
  )
}

export default Landing