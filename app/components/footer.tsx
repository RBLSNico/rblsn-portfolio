import { FaLinkedin, FaGithub, FaGoogle } from "react-icons/fa";

const Footer = () => {
    return (
        <footer className="bg-(--primary-blue) text-white py-5">
            <div className="container flex flex-col items-center">
                <p className="text-center mb-3">© 2025 Gabriel Nicolas Labutap Robles. All rights reserved.</p>
                <div className="flex space-x-4">
                    <a href="https://www.linkedin.com/in/gabriel-nicolas-robles-b2027b24b/" target="_blank" rel="noopener noreferrer">
                        <FaLinkedin className="h-6 w-6 hover:text-accent transition-colors" />
                    </a>
                    <a href="https://github.com/RBLSNico" target="_blank" rel="noopener noreferrer">
                        <FaGithub className="h-6 w-6 hover:text-accent transition-colors" />
                    </a>
                    <a href="mailto:roblesgabrielnicolas@gmail.com" target="_blank" rel="noopener noreferrer">
                        <FaGoogle className="h-6 w-6 hover:text-accent transition-colors" />
                    </a>
                </div>
            </div>
        </footer>
    );
};

export default Footer;
