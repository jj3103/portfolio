function Footer() {
    const handleScrollSection = (id) => {
        const element = document.getElementById(id);
        if (element) {
            element.scrollIntoView({ behavior: "smooth", block: "start" });
        }
    };

    return (
        <footer className="absolute bottom-0 left-0 w-full bg-gray-800 p-4 flex justify-around text-white overflow-hidden">
            <button onClick={() => handleScrollSection("i1")} className="focus:text-blue-400">Home</button>
            <button onClick={() => handleScrollSection("i2")} className="focus:text-blue-400">About</button>
            <button onClick={() => handleScrollSection("i3")} className="focus:text-blue-400">Skills</button>
            <button onClick={() => handleScrollSection("i4")} className="focus:text-blue-400">Projects</button>
        </footer>
    );
}

export default Footer;


