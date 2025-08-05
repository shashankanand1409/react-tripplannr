import React from 'react'
import './navbar.css'

const Navbar = () => {
  return (
    <>
    <header>
    <div className="navbar fixed top-0 left-0 w-full z-20">
        <p><span className='span'>TRIP</span> PLANNR</p>
        <p>Home</p>
        <p>Carpool</p>
        <p>Tickets</p>
        <p>Hotels</p>
        <p>Restaurants</p>
        <p>Live Events</p>
        <p>Contact Us</p>

    <div class="icons">
        <i class="fas fa-search" id="search-btn"></i>
        <i class="fas fa-user" id ="login-btn"></i>
    </div>
    </div>
    </header>

    </>
  )
}

export default Navbar