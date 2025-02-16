import React from 'react'
import { Logos } from '../components'


function Home() {

    const handleClickHireMe = () => {
        window.location.href = "mailto:jainjayesh2003@gmail.com"
    }

    return (
        <section id="i1" className="flex justify-between h-screen py-10">

            <div className="w-1/2 space-y-6 pt-40 pl-25">
                <h1 className="text-5xl font-bold font-sans" style={{ wordSpacing: "15px" }}>
                    Hi! I'm Jayesh Jain -
                </h1>
                <h1 className="text-5xl font-bold font-sans text-[#00A693]" style={{ wordSpacing: "10px" }}>
                    MERN Developer
                </h1>
                <h6 className="text-gray-400">
                    Working with React, Node.js, and MongoDB. Passionate about building dynamic web applications and optimizing backend systems. Constantly learning and improving to bring ideas to life. Exploring JavaScript for deeper backend expertise. Seeking opportunities to grow and contribute.
                </h6>


                <div>
                    <div className="flex justify-between font-bold">
                        <h4>Email:</h4>
                        <h4 className="pr-80">LinkedIn:</h4>
                    </div>
                    <div className="flex pt-3 text-gray-400">
                        <h6>jainjayesh2003@gmail.com</h6>
                        <h6 className="pl-10">linkedin.com/in/jayesh-jain-developer</h6>
                    </div>
                </div>


                <div className="flex space-x-6">
                    <button className="border-2 px-6 py-3 rounded text-xl bg-blue-500 border-blue-500 text-white">
                        Download CV
                    </button>
                    <button onClick={handleClickHireMe} className="border-2 px-6 py-3 rounded text-xl bg-black border-black text-white">
                        Hire Me Now
                    </button>
                </div>


                <Logos />
            </div>


            <div className="w-1/2 h-screen flex items-center justify-center">
                <img src="/j1.jpeg" alt="Jayesh" className="w-200 h-210 object-cover" />
            </div>
        </section>
    );

}

export default Home