import React from 'react'
import SellCard from './SellCard'

const Home = () => {
  return (
    <div>
      <div className="container">
        <div className="row pt-20">
          <div className="col-12 flex justify-center ">
            <div className='text-center'>
              <h1 className='poppins text-6xl'>The Indian <span className='text-green-500'> Exporter</span></h1>
              <p className='roboto font-semibold text-3xl py-4'>Your Direct Gateway to <span className='border-b-2 border-green-500'>Indian Manufacturers</span>.</p>
              <a href="#contact" class="inline-block roboto font-semibold tracking-wide fs-5 text-capitalize mt-4 bg-green-gradient text-white font-semibold py-2 px-6 rounded-lg hover:bg-green-600 transition-colors duration-300">
                Get in Touch
              </a>

            </div>
          </div>
        </div>

        <div className="row mt-5">
          <SellCard />
        </div>
      </div>
    </div>
  )
}

export default Home
