import React from 'react'
import banner from '../assets/images/banner.jpg'
import './Home.css'
import Product from './Product'

function Home() {
  return (
    <div className='home'>
      <img className='home__image' src={banner} alt="bannerImg" />
      <div className="home__row">
        <Product
          id='001'
          title="iPhone 14 Pro, 128GB, Silver"
          price={129900}
          rating={5}
          image="https://www.jiomart.com/images/product/original/493177797/apple-iphone-14-pro-max-128-gb-silver-digital-o493177797-p593687918-0-202209091829.jpeg" />
        <Product
          id='002'
          title="Echo (4th Gen, 2020 release) | Premium sound powered by Dolby and Alexa (Black)"
          price={6999}
          rating={3}
          image="https://m.media-amazon.com/images/I/61dgl2srHDL.jpg" />
      </div>
      <div className="home__row">
      <Product
          id='003'
          title="HyperX Cloud Core On-Ear Wired Gaming Headset with Mic for PC, DTS Headpone:X (Black)"
          price={5999}
          rating={4}
          image="https://m.media-amazon.com/images/I/712CzUClvjL._SL1500_.jpg" />
          <Product
          id='004'
          title="The Mahabharata Secret Paperback"
          price={212}
          rating={4}
          image="https://m.media-amazon.com/images/P/9383202319.01._SCLZZZZZZZ_SX500_.jpg" />
          <Product
          id='005'
          title="Cloth Fusion 100% Room Darkening Blackout Door Curtain 7 feet Set of 2 | Thermal Insulated Heavy Polyester Solid Curtain | Grey"
          price={1549}
          rating={5}
          image="https://m.media-amazon.com/images/I/61R31xgOA8L._SL1500_.jpg" />
      </div>
      <div className="home__row">
      <Product
          id='006'
          title="LG UltraWide 73. 66 cm (29 Inch) WFHD (2560 x 1080) IPS Display - HDR 10, Radeon FreeSync, sRGB 99%, Slim Bezel, Multitasking Monitor - 29WL500 (Black)_29WL500-B"
          price={17480}
          rating={2}
          image="https://m.media-amazon.com/images/I/71PP5CrY9GL._SL1500_.jpg" /> 
      </div>
    </div>
  )
}

export default Home