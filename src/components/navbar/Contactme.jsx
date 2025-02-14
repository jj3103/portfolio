import React from 'react'

function Contactme() {
    const handleClick = () => {
        window.location.href = 'mailto:jainjayesh2003@gmail.com'
    }
    return (
        <button
            onClick={handleClick}
            className='border-2 px-5 py-4 rounded bg-black text-white border-black font-bold'>Contact Me</button>
    )
}

export default Contactme