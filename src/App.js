import React, { useState, useEffect } from 'react'
import { Header, Footer } from './containers'
import { Card } from './components/index'
import './App.css'
import * as image from './assets/images/index.js'
import { useNavigate } from 'react-router-dom'



const Loading = (props) => {

  const [animationFinished, setAnimationFinished] = useState(false)
  const [cached, setCached] = useState(false)
  window["headshot"] = image.headshot

  useEffect(() => {
    cacheImages([image.headshot])
    setInterval(() => {
      setAnimationFinished(true)
    }, 1500)
  }, [])

  useEffect(() => {
    if (cached && animationFinished) {
      setInterval(() => {
        props.setLoading(false)
      }, 700)
    }
  }, [cached, animationFinished])

  const cacheImages = async (images) => {
    const promises = await images.map((src) => {
      return new Promise((resolve, reject) => {
        const img = new Image()

        img.src = src
        img.onload = resolve()
        img.onerror = reject()
      })
    })

    await Promise.all(promises).then(() => {setCached(true)})
  }

  return(
    <>
      <div className="loader_page" style={{"backgroundColor": 'black'}}>
        {!animationFinished || !cached // If animation hasnt finished OR if the images arent cashed, then we have to wait
        ? <div className="scale-up-center">
            <img src={image.logo} alt="logo" className="loader_page-logo"/>
          </div>
        : <div className="roll-out-right">
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
  
  // setTimeout(() => {
  //   // setLoading(false)
  //   navigate('/home')
  // }, 2200)
  useEffect(() => {
    if (!loading) {
      navigate("/home")
    }
  }, [loading])

  return (
    <div className="App">
      {loading ? <Loading isLoading={loading} setLoading={setLoading}></Loading> : <></>}
    </div>
  )
}


export default App

