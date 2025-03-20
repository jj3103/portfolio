import React, { useState } from 'react'
import Name from '../navbar/Name'

function MobileNav() {
    const [menuOpen, setMenuOpen] = useState(false)

    const handleCV = () => {
        const cvUrl = '/CV/JayeshResume.pdf'
        const link = document.createElement("a")
        link.href = cvUrl;
        link.download = "JayeshResume.pdf"
        document.body.appendChild(link)
        link.click()
        document.body.removeChild(link)
    }

    const handleClick = () => {
        window.location.href = 'mailto:jainjayesh2003@gmail.com'
    }

    return (
        <nav className='border flex justify-between shadow-md border-gray-200 bg-[#a8e9e2]'>
            <div>
                <Name />
            </div>
            <div className='relative md:hidden'>
                <button
                    onClick={() => setMenuOpen(!menuOpen)}
                    className='text-2xl py-2 mr-5 cursor-pointer'>
                    ⋮
                </button>
                {menuOpen && (
                    <div className='absolute right-0 mt-2 w-30 bg-white text-black rounded-lg shadow-lg'>
                        <button onClick={handleClick} className='block px-2  hover:bg-gray-200 cursor-pointer '>Contact Me</button>
                        <button onClick={handleCV} className='block px-2 py-2 hover:bg-gray-200 cursor-pointer'>Download CV</button>
                    </div>
                )}
            </div>
        </nav>
    )
}

export default MobileNav