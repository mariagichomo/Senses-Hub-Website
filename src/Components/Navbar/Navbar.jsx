import React from 'react'
import './Navbar.css'
import logo from '../../assets/Senses Hub Logo.png'

const Navbar = () => {
    return (
        <nav className='container'>
            <img src ={logo} alt= "Senses Hub Logo" className = 'logo' />
            <ul>
                <li>Home</li>
                <li>About Us</li>
                <li>Services</li>
                <li>Events</li>
                <li>Shop</li>
                <li><button className= 'btn'>Contact Us</button></li>
            </ul>
        </nav>
    )
}

export default Navbar