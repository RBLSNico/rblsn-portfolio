import { FaGithub } from "react-icons/fa";

const ProjectsSection = () => {
    return (
        <section id="projects" className="bg-(--primary-blue) rounded-xl flex flex-col items-center p-10 gap-5">
            <h1 className="text-white text-2xl font-semibold text-center">Projects</h1>
            {/* PaintAR */}
            <div className="flex flex-row items-center justify-center">
                <div className="w-full flex flex-col gap-5">
                    <h1 className="text-white text-2xl font-semibold">PaintAR</h1>
                    <p className="text-white">An android application that allows its users to see how various paint colors will look in their own living spaces without painting the walls. This application was developed using Java, Kotlin, while implementing the OpenCV library for image processing.</p>
                    <a href="https://github.com/RBLSNico/PaintAR" className="flex items-center w-fit bg-black text-white rounded-xl px-5 py-3 hover:bg-white hover:text-black transition-colors duration-300 ease-in-out">
                        <FaGithub className="mr-2" />View on GitHub
                    </a>
                </div>
                <div className="w-full">
                    <img src="/PaintAR.png" alt="PaintAR"></img>
                </div>
            </div>

            <div className="flex flex-row items-center justify-center">
                <div className="w-full flex flex-col gap-5">
                    <h1 className="text-white text-2xl font-semibold">CafeBytes</h1>
                    <p className="text-white">A self-contained kiosk ordering system developed eliminate the manual process of taking orders from students at the university cafeteria, saving time and reducing lines during peak hours. This web application was developed using HTML, CSS, Angular, TypeScript, AJAX, and Microsoft SQL Server. The Web API was developed using ASP.NET and C#.</p>
                    <a href="https://github.com/RBLSNico/CafebytesAPI" className="flex items-center w-fit bg-black text-white rounded-xl px-5 py-3 hover:bg-white hover:text-black transition-colors duration-300 ease-in-out">
                        <FaGithub className="mr-2" />View on GitHub
                    </a>
                </div>
                <div className="w-full">
                    <img src="/CafeBytes.png" alt="CafeBytes"></img>
                </div>
            </div>
        </section>
    )
}
export default ProjectsSection