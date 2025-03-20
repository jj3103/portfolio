import React from 'react'
import { Logos } from '../components'

function About() {
    return (

        <section id="i2" className="flex flex-col sm:flex-row items-center sm:items-start justify-center min-h-screen px-6 sm:px-20 py-10">

            <div className="w-full sm:w-1/2 flex justify-center sm:justify-start mt-10 sm:mt-40">
                <img
                    alt="Jayesh"
                    src="/jayesh.jpeg"
                    className="rounded-full w-40 h-40 sm:w-150 sm:h-150 object-cover"
                />
            </div>

            <div className="w-full sm:w-1/2 text-center sm:text-left sm:mt-40">
                <h1 style={{ wordSpacing: '5px' }} className="text-3xl sm:text-4xl font-bold mt-10 sm:mt-20">
                    Have a Web Idea?
                </h1>
                <h1 style={{ wordSpacing: '5px' }} className="text-3xl sm:text-4xl font-bold mt-3">
                    Let's get it done!
                </h1>

                <h4 className="text-gray-400 text-sm sm:text-base leading-relaxed mt-4">
                    I am a passionate React and MERN stack developer with a keen interest in building dynamic and scalable web applications.
                    Currently working as an intern, I have hands-on experience with React, Node.js, Express, and MongoDB.
                    I enjoy problem-solving, optimizing code, and learning new technologies to enhance my expertise.
                    My goal is to grow as a full-stack developer and contribute to impactful projects that bring ideas to life.
                </h4>

                <h2 className="font-bold text-lg sm:text-2xl mt-6">
                    You can also follow me here:
                </h2>
                <div className="mt-4 flex justify-center sm:justify-start">
                    <Logos className="border rounded px-2 py-2 bg-blue-500 border-blue-400" iconColor="text-white" visibleLogs={3} />
                </div>
            </div>

        </section>

    )
}

export default About