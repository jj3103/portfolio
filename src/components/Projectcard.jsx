import React from 'react';

function Projectcard({ image, name, description, githubLink }) {
    return (
        <div className="w-[350px] bg-white shadow-lg rounded-lg flex flex-col p-6 items-center">

            <div className="w-full h-[180px] flex items-center justify-center overflow-hidden">
                <img
                    src={image}
                    alt={name}
                    className="max-h-full max-w-full object-contain rounded-lg"
                />
            </div>

            {/* Text Content */}
            <h2 className="text-xl font-semibold mt-4">{name}</h2>
            <p className="text-gray-600 text-sm text-center px-2 flex-grow">{description}</p>

            {/* Button (Always at Bottom) */}
            <div className="mt-4">
                <a
                    rel="noopener noreferrer"
                    className="inline-block text-red-500 px-6 py-2 rounded-md border border-red-500 transition-all duration-300 shadow-md hover:bg-red-500 hover:text-white"
                    href={githubLink}
                    target="_blank"
                >
                    View on GitHub
                </a>
            </div>
        </div>
    );
}

export default Projectcard;
