import React, { useEffect, useState } from 'react'
import { RiMenu3Line, RiCloseLine } from 'react-icons/ri'
import logo from '../../assets/images/logo.png'
import './navbar.css'
// import '../mobileNavMenu/mobilenavmenu.css'
import { Link } from "react-router-dom";
import { MobileNavMenu } from '../index'
import disableScroll from 'disable-scroll'


const Navbar = () => {

  const [menu, setMenu] = useState(false)

  function handleMenuClick () {
    setMenu(!menu)
    if (!menu) disableScroll.on()
    else disableScroll.off()
  }

  const handleEmail = () => {
    const time = new Date()
    const hours = time.getHours()
    const timeOfDay = (hours < 12) ? "Morning" : (hours < 18) ? "Afternoon" : "Evening"
    window.open(`mailto:michael.s.reza@gmail.com?subject=Good ${timeOfDay} Michael`)
  }

  return (
    <div className="navbar">
      <div className="navbar-links">
        <div className="navbar-links_logo">
          <nav>
            <Link onClick={() => {disableScroll.off()}} to="/" ><img src={logo} alt="logo"/></Link>
          </nav>
        </div>
        <div className="navbar-links_container">
          <nav>
            <Link className="link" to="/home">Home</Link>
            {/* <Link className="link" to="/about">About</Link> */}
            <Link className="link" to="/resume">Resume</Link>
            {/* <Link className="link" to="/projects">Projects</Link> */}
            <a className="link" href="https://github.com/MichaelReza">Github</a>
            <a className="link" href="https://www.linkedin.com/in/michael-reza-8359a0194">LinkedIn</a> 
          </nav>
        </div>
      </div>
      <div className="navbar-contact">
        <button type="button" onClick={handleEmail}>Contact</button>
      </div>
      <div className="navbar-menu">
        {menu
        ? <div>
            <RiCloseLine color="fff" size={50} onClick={() => handleMenuClick() }/>
            <MobileNavMenu /> 
          </div>
        : <div>
            <RiMenu3Line color="#fff" size={50} onClick={() => handleMenuClick() }/>
          </div>
        }
      </div>
    </div>
  )
}

export default Navbar