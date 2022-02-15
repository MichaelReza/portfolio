import React, { useState } from 'react'
import { Header, Footer } from './containers'
import { Card } from './components/index'
import './App.css'
import * as image from './assets/images/index.js'
import { useNavigate } from 'react-router-dom'



const Loading = () => {

  const [animationTimer, setAnimationTimer] = useState(false)

  setInterval(() => {
    setAnimationTimer(true)
  }, 1500)

  return(
    <>
      <div className="loader_page" style={{"backgroundColor": 'black'}}>
        {animationTimer
        ? <div className="roll-out-right">
            <img src={image.logo} alt="logo" className="loader_page-logo"/>
          </div>
        : <div className="scale-up-center">
            <img src={image.logo} alt="logo" className="loader_page-logo"/>
          </div>
        }
      </div>
    </>
  )
}


const App = () => {
  const [loading, setLoading] = useState(true)
  const navigate = useNavigate();
  
  setTimeout(() => {
    setLoading(false)
    navigate('/home')
  }, 2200)

  return (
    <div className="App">
      {loading ? <Loading></Loading> : <></>}
    </div>
  )
}


export default App

