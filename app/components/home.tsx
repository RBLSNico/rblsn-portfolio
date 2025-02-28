import { FaLinkedin} from "react-icons/fa";

const HomeSection = () => {
    return (
        <section id="home" className="bg-(--primary-blue) rounded-xl flex flex-col items-center p-10 gap-5">
            <h1 className="text-white text-2xl font-semibold text-center">Hi,</h1>
            <h1 className="text-(--accent) md:text-5xl text-3xl font-bold text-center">I'm Nico, A Web Developer</h1>
            <p className="text-white text-center max-w-3xl">
                I specialize in creating and designing websites. I enjoy the process of starting from scratch and improving continuously. Learning is a passion of mine, and I always welcome a good challenge.
            </p>
            <a
                href="https://www.linkedin.com/in/gabriel-nicolas-robles-b2027b24b/"
                className="flex items-center text-white font-semibold rounded-3xl bg-linear-to-tr from-blue-600 to-blue-400 px-5 py-3 transition-transform transform hover:-translate-y-1"
            >
                <FaLinkedin className="mr-2" />
                Let's Connect
            </a>
        </section>
    )
}
export default HomeSection
