import React from 'react'
import { FaGithub, FaLinkedin, FaInstagram, FaEnvelope } from 'react-icons/fa'


function Logos({ className, iconColor = 'text-black' }) {

    const logos = [
        {
            name: "GitHub",
            icon: <FaGithub size={20} className={iconColor} />,
            link: ''
        },
        {
            name: "LinkedIn",
            icon: <FaLinkedin size={20} className={iconColor} />,
            link: ''
        },
        {
            name: "Instagram",
            icon: <FaInstagram size={20} className={iconColor} />,
            link: ''
        },
        {
            name: "Mail",
            icon: <FaEnvelope size={20} className={iconColor} />,
            link: ''
        },
    ]
    return (
        <ul className='flex space-x-6'>
            {logos.map((logo) => (
                <a className={`${className}`} key={logo.name}>
                    {logo.icon}
                </a>
            ))}
        </ul>
    )
}

export default Logos