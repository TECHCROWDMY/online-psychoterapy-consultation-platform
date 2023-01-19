import React from 'react';
import { Navbar, UsersList, Footer } from '../components'

const Admin = ( {token} ) => {
  return (
    <div>
        <Navbar  token={token} />
        <UsersList />
        <Footer />
    </div>
  )
}

export default Admin