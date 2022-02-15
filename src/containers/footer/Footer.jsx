import React from 'react'
import './footer.css'
import * as image from '../../assets/images/index'
import { BsGithub, BsLinkedin, BsInstagram } from 'react-icons/bs'
import {Link} from 'react-router-dom'

const Footer = () => {
  return (
    <div className="footer">
      <div className="footer_logo-container">
        <img src={image.logo} alt='logo'></img>
        <h3>Michael Reza</h3>
      </div>
      <div className="footer_columns">
        <div className="footer_left">
          <h3 className="footer_column-header">Site Info</h3>
          <hr></hr>
          <p>Author: Michael Reza</p>
          <p>Published 2022</p>
          <p>Last Updated: 01/24/22 </p>
          <p>Created with React</p>
        </div>
        <div className="footer_middle">
          <h3 className="footer_column-header">Site Links</h3>
          <hr></hr>
          <nav>
            <Link to="/home">Home</Link>
            <Link to="/resume">Resume</Link>
            {/* <Link to="/projects">Projects</Link> */}
          </nav>
            <a href="https://github.com/MichaelReza">Github</a>
            <a href="https://www.linkedin.com/in/michael-reza-8359a0194">LinkedIn</a>
        </div>
        <div className="footer_right">
          <h3 className="footer_column-header">Socials</h3>
          <hr></hr>
          <div className="footer_social-icon_container">
            <a href="https://github.com/MichaelReza"> <BsGithub className="footer_social-icon"></BsGithub> </a>
            <a href="https://www.linkedin.com/in/michael-reza-8359a0194"> <BsLinkedin className="footer_social-icon"></BsLinkedin> </a>
            <a href="https://www.instagram.com/michael._.reza/"> <BsInstagram className="footer_social-icon"></BsInstagram> </a>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Footer
