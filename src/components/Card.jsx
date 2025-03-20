import React from 'react'

function Card({ icon, name }) {
    return (
        <div className='flex flex-col items-center justify-center rounded-lg shadow-lg p-6 w-40 sm:w-70 sm:h-55 h-44 bg-gray-700 hover:scale-105 transition-transform duration-300'>
            <div className='text-5xl text-[#71f0e3]'>{icon}</div>
            <h2 className='mt-2 text-lg font-semibold text-white'>{name}</h2>
        </div>
    )
}

export default Card
