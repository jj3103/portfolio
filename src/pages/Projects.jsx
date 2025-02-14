import React, { useEffect, useState } from "react";
import { Projectcard } from "../components";
import { motion, AnimatePresence } from "framer-motion";


function Projects() {
    const projects = [
        {
            id: 1,
            name: "To-Do List",
            image: "/Todo.png",
            description: "A task management app allowing users to add, edit, and delete tasks efficiently. Uses Redux Toolkit for state management and Context API for lightweight state handling.",
            github: "https://github.com/your-github/todo-list",
        },
        {
            id: 2,
            name: "Portfolio",
            image: "/Portfolio.png",
            description: "A personal portfolio website showcasing skills, projects, and contact information. Features smooth animations and a modern UI built with React.",
            github: "https://github.com/your-github/portfolio",
        },
        {
            id: 3,
            name: "Blog Web App",
            image: "/BlogImage.png",
            description: "A dynamic blogging platform allowing users to create, edit, and delete blog posts. Uses Appwrite for backend services and React Hook Form for form validation.",
            github: "https://github.com/your-github/blog-web-app",
        },
        {
            id: 4,
            name: "HR Management System",
            image: "/HR-1.png",
            description: "A full-stack HR system for managing personnel records, attendance, and roles. Built using the MERN stack with role-based authentication.",
            github: "https://github.com/your-github/hr-management",
        },
    ];

    const [currentIndex, setCurrentIndex] = useState(0);

    // Automatically slide every 3 seconds
    useEffect(() => {
        const interval = setInterval(() => {
            setCurrentIndex((prevIndex) => (prevIndex + 1) % projects.length);
        }, 3000);

        return () => clearInterval(interval);
    }, []);

    return (
        <section id="i4" className="min-h-screen scroll-mt-20 overflow-hidden flex flex-col justify-center">
            <h1 style={{ wordSpacing: '15px' }} className="font-bold text-4xl mb-5 pl-25">My Personal Projects :-</h1>
            <h4 className="mb-10 pl-25 text-gray-400">
                By utilizing the power of the MERN stack, I turn creative concepts into robust, dynamic applications that provide intuitive user experiences and efficient solutions.
            </h4>

            {/* Scrolling Container */}
            <div className="relative w-full min-h-[450px] flex justify-center items-center overflow-hidden mt-20">
                <AnimatePresence mode="wait">
                    <motion.div
                        key={currentIndex} // Re-renders animation on change
                        initial={{ opacity: 0, x: 100 }}
                        animate={{ opacity: 1, x: 0 }}
                        exit={{ opacity: 0, x: -100 }}
                        transition={{ duration: 0.5 }}
                        className="absolute w-full flex justify-center"
                    >
                        <Projectcard
                            name={projects[currentIndex].name}
                            description={projects[currentIndex].description}
                            image={projects[currentIndex].image}
                            githubLink={projects[currentIndex].github}
                        />
                    </motion.div>
                </AnimatePresence>
            </div>
        </section>
    );
}

export default Projects;
