import React from 'react';
import '../navbar/navbar.css'
import './mobilenavmenu.css'
import { Link } from 'react-router-dom'
import disableScroll from 'disable-scroll'

const MobileNavMenu = () => {


  const handleEmail = () => {
    const time = new Date()
    const hours = time.getHours()
    const timeOfDay = (hours < 12) ? "Morning" : (hours < 18) ? "Afternoon" : "Evening"
    window.open(`mailto:michael.s.reza@gmail.com?subject=Good ${timeOfDay} Michael`)
  }

  return (
    <div className="navbar-menu_container">
      <div className="navbar-menu_links">
        <nav>
          <Link onClick={() => {disableScroll.off()}} to="/home">Home</Link>
          {/* <Link to="/about">About</Link> */}
          <Link onClick={() => {disableScroll.off()}} to="/resume">Resume</Link>
          {/* <Link to="/projects">Projects</Link> */}
          <a href="https://github.com/MichaelReza">Github</a>
          <a href="https://www.linkedin.com/in/michael-reza-8359a0194">LinkedIn</a>
          <a onClick={handleEmail}>Contact</a>
        </nav>
      </div>
    </div>
  )
}

export default MobileNavMenu;
