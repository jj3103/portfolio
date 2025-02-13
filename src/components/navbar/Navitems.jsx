import React from 'react'


function Navitems() {


    const handleScrollSection = (id) => {
        const element = document.getElementById(id);
        element.scrollIntoView({
            behavior: 'smooth',
            block: 'start'
        })
    }

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
                    <button onClick={() => handleScrollSection(items.id)}>
                        {items.name}
                    </button>
                </li>
            ))}
        </ul>

    )
}

export default Navitems