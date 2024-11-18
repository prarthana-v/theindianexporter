import React from 'react'
import Header from '../Components/Header/Header'
import Home from '../Components/Home/Home'
import About from '../Components/About/About'
import WhyUs from '../Components/WhyUs/WhyUs'
import OurProcess from '../Components/OurProcess/OurProcess'

const HomePage = () => {
  return (
    <div>
      <Header />
      <Home />
      <About />
      <WhyUs />
      <OurProcess />
    </div>
  )
}

export default HomePage
