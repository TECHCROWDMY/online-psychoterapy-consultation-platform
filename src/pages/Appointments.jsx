import React from 'react';
import {Navbar, Footer, AppointmentsList} from '../components'


const Appointments = ({token}) => {
  return (
    <div>
    <Navbar token={token} />
    <AppointmentsList token={token}/>
    <Footer />
    

</div>
  )
}

export default Appointments