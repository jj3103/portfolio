import React from 'react'
import Name from './Name'
import Navitems from './Navitems'
import Logos from './Logos'
import Contactme from './Contactme'

function Navbar() {
    return (

        <nav
            className='w-full flex items-center justify-between px-8 py-3 bg-[#a8e9e2] border-2 border-gray-300 shadow-2xs fixed'>

            <div className='pr-10 border-r border-gray-300 min-h-[60px] flex items-center'>
                <Name />
            </div>

            <Navitems />

            <Logos className='border-1 rounded-full px-1 py-1 bg-white border-white' visibleLogs={4} />

            <div className='pl-10 border-l min-h-[60px] border-gray-300 flex items-center'>
                <Contactme />
            </div>

        </nav>

    )
}

export default Navbar