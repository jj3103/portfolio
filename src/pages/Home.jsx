import React from 'react'
import { Logos } from '../components'


function Home() {

    const handleClickHireMe = () => {
        window.location.href = "mailto:jainjayesh2003@gmail.com"
    }
    const handleDownloadCv = () => {
        const cvUrl = '/CV/JayeshResume.pdf'
        const link = document.createElement("a")
        link.href = cvUrl;
        link.download = "JayeshResume.pdf"
        document.body.appendChild(link)
        link.click()
        document.body.removeChild(link)
    }

    return (
        <section id="i1" className="flex flex-col-reverse sm:flex-row justify-between  sm:py-10">

            <div className="w-full  sm:w-1/2 sm:space-y-6 pt-10 sm:pt-40 px-6 sm:pl-25">

                <h1 className="text-3xl sm:text-5xl font-bold font-sans tracking-wide">
                    Hi! I'm Jayesh Jain -
                </h1>

                <h1 className="text-3xl sm:text-5xl font-bold font-sans text-[#00A693] tracking-wider">
                    MERN Developer
                </h1>

                <h6 className="text-gray-400 text-sm sm:text-base leading-relaxed">
                    Working with React, Node.js, and MongoDB. Passionate about building dynamic web applications and optimizing backend systems. Constantly learning and improving to bring ideas to life. Exploring JavaScript for deeper backend expertise. Seeking opportunities to grow and contribute.
                </h6>


                <div className="hidden sm:block space-y-4">
                    <div className="font-bold">
                        <div className="flex justify-between">
                            <h4>Email:</h4>
                            <h4 className="pr-20 lg:pr-80">LinkedIn:</h4>
                        </div>
                        <div className="flex text-gray-400">
                            <h6>jainjayesh2003@gmail.com</h6>
                            <h6 className="pl-4 md:pl-7">linkedin.com/in/jayesh-jain-developer</h6>
                        </div>
                    </div>


                    <div className="flex space-x-4">
                        <button
                            onClick={handleDownloadCv}
                            className="px-6 py-3 text-xl text-white bg-blue-500 border-2 border-blue-500 rounded hover:bg-blue-600 transition"
                        >
                            Download CV
                        </button>
                        <button
                            onClick={handleClickHireMe}
                            className="px-6 py-3 text-xl text-white bg-black border-2 border-black rounded hover:bg-gray-900 transition"
                        >
                            Hire Me Now
                        </button>
                    </div>


                    <Logos visibleLogs={4} />
                </div>
            </div>


            <div className="w-full sm:w-1/2  sm:h-screen py-5 flex items-center justify-center">
                <img src="/j1.jpeg" alt="Jayesh" className="w-full h-full object-contain" />
            </div>
        </section>


    );

}

export default Home