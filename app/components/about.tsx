import { FaWordpress, FaNode, FaPhp, FaJs, FaCss3, FaReact } from "react-icons/fa"

const AboutSection = () => {
    return (
        <section id="about" className="flex flex-col justify-center items-center">
            <h1 className="text-(--primary-blue) text-3xl font-bold text-center">About Me</h1>
            <div className="m-0 flex items-center justify-center p-10 flex-col gap-10 md:flex-row">
                <div className="w-full items-center justify-center flex">
                    <img src="/rblsnico_img.jpg" className="max-w-[250px] rounded-full"></img>
                </div>
                <div className="w-full">
                    <p className="text-center sm:text-start">
                        I am Gabriel Nicolas Labutap Robles, I graduated from National University Laguna with a Bachelor's Degree in Information Technology in 2024. 
                        <br/><br/>
                        I am a passionate Web Developer with a strong foundation in full-stack development, specializing in <strong>WordPress, JavaScript, PHP,</strong> and modern web frameworks. I am always eager to improve my skills, knowledge, to expand my abilities so that I can contribute to meaningful projects.
                    </p>
                </div>
            </div>
            <h1 className="text-(--primary-blue) text-3xl font-bold text-center">Current Stack</h1>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-4 w-full min-h-100 mt-5">
                <div className="relative bg-gradient-to-r from-sky-400 to-blue-600 p-6 rounded-lg text-white text-center text-xl overflow-hidden group flex flex-col items-center justify-center">
                    <FaReact className="w-16 h-16 mb-2" />
                    <h2 className="sm:opacity-0 relative z-10 opacity-100 group-hover:opacity-100 transition-opacity duration-300">React</h2>
                </div>
                <div className="relative bg-gradient-to-r from-green-400 to-green-600 p-6 rounded-lg text-white text-center text-xl overflow-hidden group flex flex-col items-center justify-center">
                    <FaNode className="w-16 h-16 mb-2" />
                    <h2 className="sm:opacity-0 relative z-10 opacity-100 group-hover:opacity-100 transition-opacity duration-300">Node.js</h2>
                </div>
                <div className="relative bg-gradient-to-r from-indigo-400 to-indigo-600 p-6 rounded-lg text-white text-center text-xl overflow-hidden group flex flex-col items-center justify-center">
                    <FaPhp className="w-16 h-16 mb-2" />
                    <h2 className="sm:opacity-0 relative z-10 opacity-100 group-hover:opacity-100 transition-opacity duration-300">PHP</h2>
                </div>
                <div className="relative bg-gradient-to-r from-yellow-400 to-yellow-600 p-6 rounded-lg text-white text-center text-xl overflow-hidden group flex flex-col items-center justify-center">
                    <FaJs className="w-16 h-16 mb-2" />
                    <h2 className="sm:opacity-0 relative z-10 opacity-100 group-hover:opacity-100 transition-opacity duration-300">JavaScript</h2>
                </div>
                <div className="relative bg-gradient-to-r from-blue-600 to-blue-400 p-6 rounded-lg text-white text-center text-xl overflow-hidden group flex flex-col items-center justify-center">
                    <FaWordpress className="w-16 h-16 mb-2" />
                    <h2 className="sm:opacity-0 relative z-10 opacity-100 group-hover:opacity-100 transition-opacity duration-300">WordPress</h2>
                </div>
                <div className="relative bg-gradient-to-r from-blue-400 to-blue-600 p-6 rounded-lg text-white text-center text-xl overflow-hidden group flex flex-col items-center justify-center">
                    <FaCss3 className="w-16 h-16 mb-2" />
                    <h2 className="sm:opacity-0 relative z-10 opacity-100 group-hover:opacity-100 transition-opacity duration-300">CSS</h2>
                </div>
            </div>
        </section>
    )
}
export default AboutSection
