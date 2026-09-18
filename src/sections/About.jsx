import React from 'react'
import Animated from '../components/Animated'

const About = () => {
  return (
    <section id='about' className='px-auto mt-44'>
      <div className='flex flex-col md:flex-row gap-14 md:gap-18 max-w-7xl mx-auto'>
       {/* LeftSide: Main Image */}
        <Animated scale={0.8} y={0}>
           <img src="/assets/about.png" alt="Dish" className='max-w-137 w-full h-full object-cover rounded-3xl'/>
        </Animated>

       {/* RightSide: Content Details */}
      </div>
    </section>
  )
}

export default About
