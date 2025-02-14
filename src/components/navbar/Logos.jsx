import React from 'react'
import { FaGithub, FaLinkedin, FaInstagram, FaEnvelope } from 'react-icons/fa'


function Logos({ className, iconColor = 'text-black' }) {

    const handleClick = (link) => {
        window.open(link, '_blank')
    }

    const logos = [
        {
            name: "GitHub",
            icon: <FaGithub size={20} className={iconColor} />,
            link: 'https://github.com/jj3103'
        },
        {
            name: "LinkedIn",
            icon: <FaLinkedin size={20} className={iconColor} />,
            link: 'https://www.linkedin.com/in/jayesh-jain-8b65bb188/'
        },
        {
            name: "Instagram",
            icon: <FaInstagram size={20} className={iconColor} />,
            link: 'https://www.instagram.com/jayesh._.jain31/'
        },
        {
            name: "Mail",
            icon: <FaEnvelope size={20} className={iconColor} />,
            link: 'mailto:jainjayesh2003@gmail.com'
        },
    ]
    return (
        <ul className='flex space-x-6'>
            {logos.map((logo) => (
                <a onClick={() => handleClick(logo.link)} className={`${className}`} key={logo.name}>
                    {logo.icon}
                </a>
            ))}
        </ul>
    )
}

export default Logos