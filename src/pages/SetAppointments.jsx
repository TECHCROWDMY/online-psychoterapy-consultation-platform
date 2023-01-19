import React from 'react';
import {Navbar, Footer, CreateAppointment} from '../components'


const SetAppointments = ({token} ) => {
    return (
        <>
          <Navbar token={token} />
          <CreateAppointment  token={token}/>
          <Footer />
        </>
      )
}

export default SetAppointments