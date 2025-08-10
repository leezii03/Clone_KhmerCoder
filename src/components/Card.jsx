import React from 'react'

const Card = ({ icon, title, description }) => {
  return (
    <div className='text-white w-[450px] bg-gray-900 rounded-lg p-6'>
      <div className={`backdrop-blur-xl p-3 rounded-md w-fit`}>
        {icon}
      </div>
      <h1 className='py-4 text-xl font-bold'>{title}</h1>
      <p className='text-gray-400 text-[18px]'>{description}</p>
    </div>
  )
}

export default Card
