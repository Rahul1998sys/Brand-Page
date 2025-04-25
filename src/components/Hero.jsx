import React from 'react'

const Hero = () => {
  return (
    <main className='hero container'>
        <div className='hero-content'>
            <h1>YOUR FEET DESERVE THE BEST</h1>
            <p>Inspired by the original AJ1, this mid-top edition maintains the iconic look you love while choice colors and crisp leather give it a distinct identity</p>

            <div className='hero-btn'>
              <button className='btn-red'>Shop Now</button>
              <button className='btn-transparent'>Category</button>
            </div>

            <div className='shopping'>
              <p>Also available on</p>

              <div className='brand-icons'>
              <img src="/images/flipkart.png" alt="flipkart-logo" />
              <img src="/images/amazon.png" alt="amazon-logo" />
              </div>
            </div>
        </div>
        <div className='hero-image'>
          <img src="/images/shoe_image.png" alt="shoe-logo" />
        </div>
    </main>
  )
}

export default Hero;