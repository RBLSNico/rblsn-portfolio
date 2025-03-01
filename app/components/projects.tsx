import { FaGithub } from "react-icons/fa";

const ProjectsSection = () => {
    return (
        <section id="projects" className="rounded-xl flex flex-col items-center gap-5">
            <h1 className="text-(--primary-blue) text-3xl font-bold text-center">Projects</h1>

            <div className="md:flex-row flex flex-col items-center justify-center p-10 rounded-xl bg-gradient-to-r from-emerald-700 to-green-950 min-h-[80vh]">
                <div className="w-full order-1 md:order-2">
                    <img src="/PaintAR.png" alt="PaintAR" />
                </div>
                <div className="w-full flex flex-col gap-5 items-center md:items-start order-2 md:order-1">
                    <h1 className="text-white text-2xl font-semibold text-center md:text-left">PaintAR</h1>
                    <p className="text-white text-center md:text-left">
                        An android application that allows its users to see how various paint colors will look in their own living spaces without painting the walls. This application was developed using Java, Kotlin, while implementing the OpenCV library for image processing.
                    </p>
                    <a href="https://github.com/RBLSNico/PaintAR" className="flex items-center w-fit bg-black text-white rounded-xl px-5 py-3 hover:bg-white hover:text-black transition-colors duration-300 ease-in-out">
                        <FaGithub className="mr-2" />View on GitHub
                    </a>
                </div>
            </div>


            <div className="md:flex-row flex flex-col items-center justify-center gap-5 p-10 rounded-xl bg-linear-to-r from-yellow-700 to-amber-950 min-h-[80vh]">
                <div className="w-full">
                    <img src="/CafeBytes.png" alt="CafeBytes"></img>
                </div>
                <div className="w-full flex flex-col gap-5 items-center md:items-end">
                    <h1 className="text-white text-2xl font-semibold">CafeBytes</h1>
                    <p className="text-white text-center md:text-end">A self-contained kiosk ordering system developed eliminate the manual process of taking orders from students at the university cafeteria, saving time and reducing lines during peak hours. This web application was developed using HTML, CSS, Angular, TypeScript, AJAX, and Microsoft SQL Server. The Web API was developed using ASP.NET and C#.</p>
                    <a href="https://github.com/RBLSNico/CafebytesAPI" className="flex items-center w-fit bg-black text-white rounded-xl px-5 py-3 hover:bg-white hover:text-black transition-colors duration-300 ease-in-out">
                        <FaGithub className="mr-2" />View on GitHub
                    </a>
                </div>
            </div>

            <div className="md:flex-row-reverse flex flex-col items-center justify-center gap-5 p-10 rounded-xl bg-gradient-to-r from-indigo-700 to-blue-950 min-h-[80vh]">
                <div className="w-full">
                    <img src="/NULQueue.png" alt="NULQueue" />
                </div>
                <div className="w-full flex flex-col gap-5 items-center md:items-start order-2 md:order-1">
                    <h1 className="text-white text-2xl font-semibold text-center md:text-left">NU Laguna Queuing System</h1>
                    <p className="text-white text-center md:text-left">
                        A queuing system built for the benefit of the students at National University Laguna. This system optimizes the queuing process for students availing of various student services, such as enrollment, cashier transactions, and registrar’s office assistance. This was developed using HTML, CSS, Bootstrap, jQuery, JavaScript, PHP, and MySQL.
                    </p>
                    <a href="https://github.com/RBLSNico/NUL-QUEUE" className="flex items-center w-fit bg-black text-white rounded-xl px-5 py-3 hover:bg-white hover:text-black transition-colors duration-300 ease-in-out">
                        <FaGithub className="mr-2" />View on GitHub
                    </a>
                </div>
            </div>


            <div className="md:flex-row flex flex-col items-center justify-center gap-5 p-10 rounded-xl bg-linear-to-r from-purple-700 to-fuchsia-950 min-h-[80vh]">
                <div className="w-full">
                    <img src="/FindaHost.png" alt="FindaHost"></img>
                </div>
                <div className="w-full flex flex-col gap-5 items-center md:items-end">
                    <h1 className="text-white text-2xl font-semibold">FindaHost</h1>
                    <p className="text-white text-center md:text-end">As the lead WordPress Developer for FindaHost, I played a pivotal role in building, optimizing, and maintaining the platform, ensuring seamless functionality and enhanced user experience.</p>
                    <a href="https://findahost.io/" className="flex items-center w-fit bg-black text-white rounded-xl px-5 py-3 hover:bg-white hover:text-black transition-colors duration-300 ease-in-out">
                        Check Out FindaHost
                    </a>
                </div>
            </div>

        </section>
    )
}
export default ProjectsSection