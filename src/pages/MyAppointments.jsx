import React from 'react';
import {Navbar, Footer, MyAppointmentsList} from '../components'


const MyAppointments = ({token}) => {


  
  return (
    <>
      <Navbar token={token} />
      <MyAppointmentsList token={token}/>
      <Footer />
    </>
  )
}

export default MyAppointments