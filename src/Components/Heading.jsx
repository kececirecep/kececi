import React from 'react'

const Heading = (props) => {
  return (
    <div>
        <h1 className='text-xl lg:text-4xl font-bold mb-6'>{props.head}</h1>
        <p className='text-sm xl:text-lg mb-6 lg:mb-10 text-gray-400 pb-6 lg:pb-10 border-b border-white/10'>{props.paragraph}</p>
    </div>
  )
}

export default Heading