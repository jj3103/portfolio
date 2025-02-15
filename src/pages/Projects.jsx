
import { useState, useEffect } from "react";
import { Projectcard } from "../components";
import { motion } from "framer-motion";

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

function Projects() {
    const [currentIndex, setCurrentIndex] = useState(0);

    const nextSlide = () => {
        setCurrentIndex((prev) => (prev + 1) % projects.length);
    };

    useEffect(() => {
        const interval = setInterval(nextSlide, 3000);
        return () => clearInterval(interval);
    }, []);

    return (
        <section id="i4" className="min-h-screen flex flex-col justify-center items-center">
            <h1 className="font-bold text-4xl mb-5" style={{ wordSpacing: "15px" }}>
                My Personal Projects :-
            </h1>
            <h4 className="mb-10 text-gray-400 text-center w-[80%]">
                By utilizing the power of the MERN stack, I turn creative concepts into robust, dynamic applications that provide intuitive user experiences and efficient solutions.
            </h4>

            {/* **Slider Container** */}
            <div className="relative w-[900px] h-[450px] flex justify-center items-center overflow-hidden">
                {/* **Sliding Cards Container** */}
                <motion.div className="flex items-center justify-center">
                    {projects.map((project, index) => {
                        let positionClass = "hidden"; // Default: Hide cards

                        if (index === currentIndex) {
                            positionClass = "z-10 scale-110 opacity-100"; // Center card
                        } else if (index === (currentIndex - 1 + projects.length) % projects.length) {
                            positionClass = "-translate-x-[100%] scale-90 opacity-50 -z-10"; // Left card behind
                        } else if (index === (currentIndex + 1) % projects.length) {
                            positionClass = "translate-x-[105%] scale-90 opacity-50 -z-10"; // Right card behind
                        }

                        return (
                            <motion.div
                                key={index}
                                className={`absolute w-[400px] transition-all duration-500 ease-in-out ${positionClass}`}
                            >
                                <Projectcard
                                    name={project.name}
                                    description={project.description}
                                    image={project.image}
                                    githubLink={project.github}
                                />
                            </motion.div>
                        );
                    })}
                </motion.div>
            </div>
        </section>
    );
}

export default Projects;














