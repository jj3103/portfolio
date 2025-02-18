import React from 'react'
import { Logos } from '../components'

function About() {
    return (
        <section id='i2'
            className='flex h-screen'>
            <div className='w-1/2 items-center mt-40 pl-25'>
                <img
                    alt='Jayesh'
                    src='/jayesh.jpeg'
                    className='rounded-full w-150 h-150 object-cover'
                />
            </div>
            <div className='w-1/2'>
                <h1
                    style={{ wordSpacing: '20px' }}
                    className='mt-70 text-4xl font-bold pl-20'>
                    Have an Web Idea?
                </h1>
                <h1
                    style={{ wordSpacing: '20px' }}
                    className='mt-3 text-4xl font-bold pl-20'>
                    Let's get it done!
                </h1>
                <h4
                    style={{ lineHeight: '1.7' }}
                    className='pl-20 mt-2 text-gray-400 pr-5'>
                    I am a passionate React and MERN stack developer with a keen interest in building dynamic and scalable web applications.
                    Currently working as an intern, I have hands-on experience with React, Node.js, Express, and MongoDB, and I am constantly improving my Mern skills.
                    I have been exploring Javascript to deepen my understanding of backend development.
                    I enjoy problem-solving, optimizing code, and learning new technologies to enhance my expertise.
                    My goal is to grow as a full-stack developer and contribute to impactful projects that bring ideas to life.
                </h4>
                <h2
                    style={{ wordSpacing: '5px' }}
                    className='pl-20 font-bold mt-10 text-2xl'>
                    You can also follow me here:
                </h2>
                <div className='pl-20 mt-2'>
                    <Logos className='border-1 rounded px-2 py-2 bg-blue-500 border-blue-400' iconColor='text-white' visibleLogs={3} />
                </div>
            </div>
        </section>
    )
}

export default About