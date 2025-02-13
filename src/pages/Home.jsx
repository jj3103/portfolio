import React from 'react'
import { Logos } from '../components'


function Home() {
    return (
        <section
            id='i1'
            className='flex justify-between h-screen '>
            <div className='w-1/2'>
                <h1
                    style={{ letterSpacing: '-0px', wordSpacing: '15px' }}
                    className=' text-5xl font-bold font-sans pt-40 pl-25'>
                    Hi! I'm Jayesh Jain -
                </h1>
                <h1
                    className=' text-5xl font-bold font-sans pl-25 text-[#00A693]'
                    style={{ wordSpacing: '10px' }}>
                    MERN Developer
                </h1>
                <h6 className='pl-25 pt-10 text-gray-400'>
                    Working with React, Node.js, and MongoDB.
                    Passionate about building dynamic web applications and optimizing backend systems.
                    Constantly learning and improving to bring ideas to life.
                    Exploring Javascript for deeper backend expertise. Seeking opportunities to grow and contribute.
                </h6>
                <div className='flex justify-between pl-25 pt-25'>
                    <h4 className='font-bold'>Email:</h4>
                    <h4 className='pr-80 font-bold'>LinkedIn:</h4>
                </div>
                <div className='flex pl-25 pt-3 '>
                    <h6 className='text-gray-400'>jainjayesh2003@gmail.com</h6>
                    <h6 className='pl-10 text-gray-400'>linkedin.com/in/jayesh-jain-developer</h6>
                </div>
                <div className='flex pt-10 pl-25 space-x-6'>
                    <button
                        className='border-2 px-6 py-3 rounded text-xl bg-blue-500 border-blue-500 text-white'>
                        Download CV
                    </button>
                    <button
                        className='border-2 px-6 py-3 rounded text-xl bg-black border-black text-white'>
                        Hire Me Now
                    </button>
                </div>
                <div className='pl-25 pt-5'>
                    <Logos />
                </div>

            </div>
            <div className='w-1/2 h-screen py-1'>
                <img
                    src='/jayesh.jpeg'
                    alt='Jayesh'
                    className=' w-200 h-210 object-cover'
                />
            </div>
        </section>
    )
}

export default Home