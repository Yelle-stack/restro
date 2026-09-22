import React from 'react'
import Animated from '../components/Animated'
import { dishes } from '../data/data'

const Dishes = () => {
  return (
    <section id='dishes' className='px-auto mt-44'>
      <div className='text-center mb-16'>
       <Animated delay={0.2}>
          <p className='text-orange-500 font-medium uppercase mb-3.5'>
            Chef's Signature Selection
          </p>
       </Animated>
       <Animated>
          <h2 className='text-4xl md:text-5xl max-w-lg mx-auto text-balance'>
            Discover our signature dishes
          </h2>
       </Animated>
      </div>

      <div className='grid grid-cols-2 md:grid-cols-4 gap-12 md:gap-18 max-w-5xl mx-auto'>
        {dishes.map((dish, index)=>(
          <Animated>
            
          </Animated>
        ))}
      </div>
    </section>
  )
}

export default Dishes
