import React from 'react';
import {Navbar, Footer, AppointmentsList} from '../components'


const Appointments = ({token}) => {


  
  return (
    <>
      <Navbar token={token} />
      <AppointmentsList />
      <Footer />
    </>
  )
}

export default Appointments