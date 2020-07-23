import React from 'react'
import './Navbar.css'

export default function Navbar() {

    return (
        <div className="topnav">
            <a href="#register">Register/Login</a>
            <a href="#latest">Latest</a>
            <a className="active" href="#home">Home</a>
            {/* <div className="welcome">
                Welcome to REACT-GAMING!
            </div> */}
        </div>
    )
}