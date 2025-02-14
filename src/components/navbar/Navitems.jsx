import React, { useEffect, useState } from 'react'


function Navitems() {

    const [activeSection, setActiveSection] = useState('i1');

    const handleScrollSection = (id) => {
        const element = document.getElementById(id);
        element.scrollIntoView({
            behavior: 'smooth',
            block: 'start'
        })
        setActiveSection(id)
    }

    useEffect(() => {
        const handleScroll = () => {
            const sections = document.querySelectorAll('section')
            let currentSection = 'i1';

            sections.forEach((section) => {
                const rect = section.getBoundingClientRect();
                if (rect.top <= 150 && rect.bottom >= 150) {
                    currentSection = section.id;
                }
            })
            setActiveSection(currentSection)
        }
        window.addEventListener('scroll', handleScroll);
        return () => window.removeEventListener('scroll', handleScroll)
    }, [])

    const navItems = [
        {
            name: "Home",
            id: "i1"
        },
        {
            name: "About",
            id: "i2"
        },
        {
            name: "Skills",
            id: "i3"
        },
        {
            name: "Projects",
            id: "i4"
        },
    ]
    return (

        <ul className='flex space-x-6'>
            {navItems.map((items) => (
                <li key={items.name}>
                    <button
                        className={activeSection === items.id ? "text-blue-500 font-bold" : "text-gray-500"}
                        onClick={() => handleScrollSection(items.id)}>
                        {items.name}
                    </button>
                </li>
            ))}
        </ul>

    )
}

export default Navitems