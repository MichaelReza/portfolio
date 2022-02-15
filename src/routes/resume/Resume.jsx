import React from 'react'
import { Header, Footer } from '../../containers/index'
import { Placeholder } from '../../components/index'
import './resume.css'

const Resume = () => {
  return (
    <div className="gradient__bg">
      <Header />
      <div className='resume__page section__padding'>
        <div className="resume__main-content">
          <h1>EXPERIENCE</h1>
          <div>
            <h2>LOYOLA MARYMOUNT UNIVERSITY, LOS ANGELES</h2>
            <h2>OCTOBER 2018 - MAY 2021</h2>
            <p>Served as an Administrative Assistant for the Dean’s office responsible for 
            updating college website, creating spreadsheets, scheduling meetings, and 
            providing students and staff with vital information about the college (forms, 
            classes, programs, etc.).</p>
            <br/>
            <h2>FORKAIA SOFTWARE ENGINEERING INTERNSHIP</h2>
            <h2>SEPTEMBER 2019 – DECEMBER 2019</h2>
            <p>
              Served as a remote software engineering intern for Forkaia, and was 
              responsible for collaborating with other interns to discuss programming 
              strategies and website design for A_Connect, a Forkaia online service 
              currently in development that will serve to connect students and professionals 
              with similar interests, jobs, or hobbies across the U.S.
            </p>
            <br/><br/>
          </div>
          <h1>EDUCATION</h1>
          <div>
            <h2>COMPUTER SCIENCE B.S.</h2>
            <p>Graduation Date - May 7, 2022</p>
            <br/>
            <div style={{fontWeight: "bold"}}>Relevant Coursework: </div>                                                                        
            <p>
              Algorithms, Data Structures, Computer Systems Organization, 
              Theory of Computation, Logic Design, Computer Programming, 
              Fundamentals of Cybersecurity, Methods of Proof, Calculus I & II, 
              Artificial Intelligence, Compilers, Operating Systems
            </p>
            <br/><br/>
          </div>
          <h1>AWARDS</h1>
          <div>
            <h2>GIT 2 GUD CODING COMPETITION - Second Place</h2>
            <p>Loyola Marymount University ACM - March 2021</p>
            <br/><br/>
          </div>
          <h1 style={{color:"lightslategray"}}>CERTIFICATIONS</h1>
          <div>
            <h2>IT SUPPORT FUNDAMENTALS</h2>
            <p>Coursera: Grow With Google - July 2020</p>
            <br/>
            {/* <div style={{fontWeight: "bold"}}>Subjects Covered: </div>                                                                            */}
            {/* Binary code, hexadecimal code, logic gates, computer components, technical support, virtual machines, troubleshooting, operating systems, computer architecture, networks, cybersecurity */}
            <h2>CASCADING STYLE SHEETS (CSS)</h2>
            <p>LinkedIn - January 2022</p>
            <br/>
            <h2>Cybersecurity</h2>
            <p>LinkedIn - February 2022</p>
            <br/>
          </div>
        </div>
        <div className='resume__margin-content'>
          <div className='resume__margin-section'>
            <h1>PROJECTS</h1>
            <h2>Hyprlink</h2>
            <p>Database Manager and Lead Back-End Engineer for social media mobile application</p>
            <br/>
            <h2>Circuitry</h2>
            <p>Lead Developer and Environment Engineer for 3D mini-game</p>
            <br/>
            <h2>Speare</h2> 
            <p>Associate Developer for programming language and compiler</p>
            <br/>
          </div>
          <div className='resume__margin-section'>
            <h1>SKILLS</h1>
            <ul>
              <li>Hypertext Transfer Protocol</li>
              <li>Database Management</li>
              <li>Full Stack Development</li>
              <li>React Native</li>
              <li>PostgreSQL</li>
              <li>JavaScript</li>
              <li>Python</li>
              <li>Figma</li>
              <li>React</li>
              <li>HTML</li>
              <li>Java</li>
              <li>AWS</li>
              <li>CSS</li>
            </ul> 
          </div>
        </div>
      </div>
      <Footer />
    </div>
  )
}

export default Resume
