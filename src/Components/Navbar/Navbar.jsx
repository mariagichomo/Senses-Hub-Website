import React from 'react'
import './Navbar.css'
import logo from '../../assets/Senses Hub Logo.png'

const Navbar = () => {
    return (
        <nav>
            <img src ={logo} alt= "Senses Hub Logo"/>
            <ul>
                <li>Home</li>
                <li>About Us</li>
                <li>Services</li>
                <li>Events</li>
                <li>Shop</li>
            </ul>
        </nav>
    )
}

export default Navbar