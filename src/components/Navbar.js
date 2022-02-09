import React from "react";
import airbnbLogo from '../assets/images/airbnb-logo.png'

const Navbar = () => {
    return (
        <nav>
            <img src={airbnbLogo} className="logo" alt="airbnb" />
        </nav>
    )
}

export default Navbar;