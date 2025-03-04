import { FaLinkedin, FaGithub, FaEnvelope } from "react-icons/fa";
import { MapPin, Send } from 'lucide-react';

const Footer = () => {
    return (
        <footer className="bg-(--primary-blue) dark:bg-[#001F3F] text-white py-12 rounded-t-4xl h-full flex flex-col justify-between">
            <div className="container mx-auto px-4 grid md:grid-cols-2 gap-8 items-start">
                {/* Personal Info Section */}
                <div className="space-y-4 text-center md:text-left">
                    <h3 className="text-2xl font-bold mb-4">Gabriel Nicolas Robles</h3>
                    <div className="flex items-center justify-center md:justify-start space-x-2 mb-2">
                        <MapPin className="h-5 w-5 text-white/70" />
                        <span className="text-white/80">Philippines</span>
                    </div>
                    <p className="text-white/70 max-w-xs mx-auto md:mx-0">
                        Motivated developer committed to continuous learning and driven by solving real-world problems.
                    </p>
                </div>

                {/* Quick Links */}
                {/* <div className="space-y-4 text-center">
                    <h3 className="text-2xl font-bold mb-4">Quick Links</h3>
                    <div className="flex flex-col space-y-2">
                        <a href="#home" className="hover:text-accent transition-colors">Home</a>
                        <a href="#about" className="hover:text-accent transition-colors">About</a>
                        <a href="#projects" className="hover:text-accent transition-colors">Projects</a>
                        <a href="#contact" className="hover:text-accent transition-colors">Contact</a>
                    </div>
                </div> */}

                {/* Contact Section */}
                <div className="space-y-4 text-center md:text-right">
                    <h3 className="text-2xl font-bold mb-4">Get In Touch</h3>
                    <div className="flex justify-center md:justify-end space-x-4 mb-4">
                        <a
                            href="https://www.linkedin.com/in/gabriel-nicolas-robles-b2027b24b/"
                            target="_blank"
                            rel="noopener noreferrer"
                            className="bg-white/10 p-3 rounded-full hover:bg-white/20 transition-all duration-300 ease-in-out transform hover:scale-110"
                        >
                            <FaLinkedin className="h-6 w-6 text-white" />
                        </a>
                        <a
                            href="https://github.com/RBLSNico"
                            target="_blank"
                            rel="noopener noreferrer"
                            className="bg-white/10 p-3 rounded-full hover:bg-white/20 transition-all duration-300 ease-in-out transform hover:scale-110"
                        >
                            <FaGithub className="h-6 w-6 text-white" />
                        </a>
                    </div>
                    <a
                        href="mailto:roblesgabrielnicolas@gmail.com"
                        className="inline-flex items-center text-white/80 hover:text-white transition-colors"
                    >
                        <Send className="mr-2 h-5 w-5" />
                        roblesgabrielnicolas@gmail.com
                    </a>
                </div>
            </div>

            {/* Copyright */}
            <div className="text-center py-4 border-t border-white/10 mt-10">
                <p className="text-sm text-white/70">
                    © 2025 Gabriel Nicolas Labutap Robles. All rights reserved.
                </p>
            </div>
        </footer>
    );
};

export default Footer;