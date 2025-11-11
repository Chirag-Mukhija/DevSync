import React from 'react'
import SignInButton from './SignInButton'
const Navbar = () => {
  return (
    <nav className="navbar navbar-dark bg-dark px-3 d-flex justify-content-between align-items-center border-bottom border-secondary    ">
      <h1>DevSync</h1>
          <SignInButton />
    </nav>
  )
}

export default Navbar