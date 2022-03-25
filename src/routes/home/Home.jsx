import React from 'react';
import './home.css'
import { Header, Footer } from '../../containers/index'
import { TextWheel } from '../../components';
import { headshot } from '../../assets/images/index'

const Home = () => {

  return (
    <div className="gradient__bg fade-in-fwd home_page">
      <Header></Header>
      <div className="section__padding home__page">
        <div className="body__main-header">
          <h1 className="gradient__text">
            Hello, 
            <br></br>
            I'm Michael Reza
          </h1>
        </div>
        <div className="body__headshot-row_orientation-container">
          <div className="body__headshot-container">
            <div className="body__headshot-backing_orange"></div>
            <div className="body__headshot-backing_gray"></div>
            <img alt="headshot" src={headshot} />
            <div></div>
          </div>
        </div>
        <div className="body__intro-container">
          {/* <TextWheel
            beginningText="I am a"
            text={["Computer Science Major", "Full Stack Developer", "Database Manager", "Web Designer"]}
            /> */}
            <h2>I am a</h2>
            <div className='body__information-text'>
              <p>Software Engineer</p>
              <p>Database Manager</p>
              <p>Web Developerrrr</p>
            </div>
            <h2>I am from</h2>
            <div className='body__information-text'>
              <p>Orange County, California</p>
            </div>
            <h2>I attended</h2>
            <div className='body__information-text'>
              <p>Loyola Marymount University</p>
              <p>Computer Science B.S. </p>
            </div>
        </div>
      </div>
      <Footer></Footer>
    </div>
)};

export default Home;
