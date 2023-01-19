import React from 'react';
import {Navbar, HeroSection, Footer} from '../components'

const Homepage = ({token,user}) => {
  return (
    
    <div>
          <Navbar token={token} />
          <HeroSection token={token} user={user} />
          <Footer />
          

    </div>
  )
}

export default Homepage