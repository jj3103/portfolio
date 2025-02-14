import React from 'react'

function Card({ icon, name, }) {
    return (
        <div className='flex flex-col rounded-lg items-center shadow-md p-6 w-68 h-60 bg-gray-600 '>
            <div className='text-4xl text-[#71f0e3] mt-15'>{icon}</div>
            <h2 className='mt-2 text-lg font-semibold text-white'>{name}</h2>
        </div>
    )
}

export default Card