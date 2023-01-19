import React from 'react';
import {Navbar, Footer, NotificationsList} from '../components'


const Notifications = ({token}) => {


  
  return (
    <>
      <Navbar token={token} />
      <NotificationsList token={token}/>
      <Footer />
    </>
  )
}


export default Notifications