import React from 'react'
import AboutImg from '../assets/images/about-img'
const About = () => {
  return (
   <>
   <section className='about' id='about'>
    <h1 className='heading'>
      <span>About </span>us
    </h1>
    <div className='row'>
      <div className='image'>
        <img src= {AboutImg} alt=''/>
      </div>
      <div className='content'>
        <h3>What Make Our Food Special? </h3>
        <p>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Odio, laborum veniam placeat in omnis, nisi illum quae iste iusto assumenda corporis ab aliquid nostrum quo, enim facilis laudantium reiciendis earum.
        </p>
        <p>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Odio, laborum veniam placeat in omnis, nisi illum quae iste iusto assumenda corporis ab aliquid nostrum quo, enim facilis laudantium reiciendis earum.
        </p>
        <a href='#' className='btn'>Learn More</a>
      </div>
    </div>
   </section>
   </>
  )
}

export default About
