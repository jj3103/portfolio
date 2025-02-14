import React from 'react'
import { FaGithub, FaReact, FaNodeJs } from 'react-icons/fa'
import { SiMongodb } from 'react-icons/si'
import { Card } from '../components'

function Skills() {

    const skills = [
        {
            name: 'GitHub',
            icon: <FaGithub size={80} />
        },
        {
            name: 'React',
            icon: <FaReact size={80} />
        },
        {
            name: 'NodeJs',
            icon: <FaNodeJs size={80} />
        },
        {
            name: 'MongoDb',
            icon: <SiMongodb size={80} />
        },
    ]

    return (
        <section id='i3' className='scroll-mt-20 mb-45 mt-10'>
            <div className=' overflow-visible'>
                <h1 style={{ wordSpacing: '10px', lineHeight: '50px' }} className='flex text-4xl pl-30  font-bold'>
                    What my Web Development <br />Skills Include
                </h1>
                <h3 className='pl-30 mt-3 text-gray-400'>
                    I specialize in React, building dynamic and responsive web applications.<br />
                    Along with Node.js, Express, and MongoDB, I focus on creating scalable and efficient full-stack solutions.
                </h3>

                <div className='flex justify-center mt-30 flex-wrap gap-10 '>
                    {skills.map((skill) => (
                        <Card icon={skill.icon} name={skill.name} key={skill.name} />
                    ))}

                </div>

            </div>
        </section>
    )
}

export default Skills