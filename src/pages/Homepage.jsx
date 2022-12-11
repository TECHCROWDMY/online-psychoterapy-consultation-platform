import React from 'react';
import {Navbar, HeroSection, Footer} from '../components'

const Homepage = ({token}) => {
  return (
    
    <div>
          <Navbar token={token} />
          <HeroSection token={token}/>
          <Footer />
          

    </div>
  )
}

export default Homepage