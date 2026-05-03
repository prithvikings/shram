import React from 'react'

const Divider = ({height}) => {
  return (
    <div className={`w-full h-${height || '24'} border-y border-dashed border-zinc-300`}>
      <div 
        className='max-w-6xl mx-auto h-full border-x border-dashed border-zinc-300'
        style={{
          backgroundImage: 'radial-gradient(#d4d4d8 1px, transparent 1px)',
          backgroundSize: '16px 16px', // Adjust this value to change dot spacing
          backgroundPosition: 'center' // Keeps the dots neatly centered
        }}
      ></div>
      
    </div>
  )
}

export default Divider