import React from 'react'
import banner from '../assets/images/banner.jpg'
import './Home.css'

function Home() {
  return (
    <div className='home'>
        <img className='home__image' src={banner} alt="bannerImg" />
    </div>
  )
}

export default Home