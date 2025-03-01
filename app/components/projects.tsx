import { FaGithub } from "react-icons/fa";

const ProjectsSection = () => {
    return (
        <section id="projects" className="rounded-xl flex flex-col items-center gap-5">
            <h1 className="text-(--primary-blue) text-3xl font-bold text-center">Projects</h1>

            <div className="md:flex-row flex flex-col items-center justify-center p-10 rounded-xl bg-gradient-to-r from-emerald-700 to-green-950 min-h-[80vh]">
                <div className="w-full order-1 md:order-2">
                    <img src="/image/PaintAR.png" alt="PaintAR" />
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
                    <img src="/image/CafeBytes.png" alt="CafeBytes"></img>
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
                    <img src="/image/NULQueue.png" alt="NULQueue" />
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
                    <img src="/image/FindaHost.png" alt="FindaHost"></img>
                </div>
                <div className="w-full flex flex-col gap-5 items-center md:items-end">
                    <h1 className="text-white text-2xl font-semibold">FindaHost</h1>
                    <p className="text-white text-center md:text-end">As the lead WordPress Developer for FindaHost, I was tasked to build, optimize, and maintain the whole website, ensuring seamless functionality Search Engine Optimization (SEO) and enhanced user experience.</p>
                    <a href="https://findahost.io/" className="flex items-center w-fit bg-black text-white rounded-xl px-5 py-3 hover:bg-white hover:text-black transition-colors duration-300 ease-in-out">
                        Check Out FindaHost
                    </a>
                </div>
            </div>

            <div className="md:flex-row-reverse flex flex-col items-center justify-center gap-5 p-10 rounded-xl bg-gradient-to-r from-red-950 to-red-800 min-h-[80vh]">
                <div className="w-full">
                    <img src="/image/airbnb_calculator.png" alt="FindaHost AirBnb Calculator" />
                </div>
                <div className="w-full flex flex-col gap-5 items-center md:items-start order-2 md:order-1">
                    <h1 className="text-white text-2xl font-semibold text-center md:text-left">FindaHost AirBnb Calculator</h1>
                    <p className="text-white text-center md:text-left">
                        Developed a custom Airbnb Pricing Calculator for FindaHost using Tailwind CSS and a REST API for real-time pricing calculations. The tool provides dynamic cost breakdowns, helping hosts estimate earnings and optimize their rental strategy with accurate market data.
                    </p>
                    <a href="https://github.com/RBLSNico/NUL-QUEUE" className="flex items-center w-fit bg-black text-white rounded-xl px-5 py-3 hover:bg-white hover:text-black transition-colors duration-300 ease-in-out">
                        Check Out
                    </a>
                </div>
            </div>

            <div className="md:flex-row flex flex-col items-center justify-center gap-5 p-10 rounded-xl bg-linear-to-r from-purple-700 to-fuchsia-950 min-h-[80vh]">
                <div className="w-full">
                    <img src="/image/kunda_house.png" alt="Kunda House"></img>
                </div>
                <div className="w-full flex flex-col gap-5 items-center md:items-end">
                    <h1 className="text-white text-2xl font-semibold">Kunda House</h1>
                    <p className="text-white text-center md:text-end">
                        Responsible for maintaining and enhancing Kunda House's existing WordPress website. Improving site speed and SEO performance, successfully restoring full functionality, enhancing speed, and improving search engine visibility. Integrated Beds24 support for property management.</p>
                    <a href="https://kunda.house/" className="flex items-center w-fit bg-black text-white rounded-xl px-5 py-3 hover:bg-white hover:text-black transition-colors duration-300 ease-in-out">
                        Check Out Kunda House
                    </a>
                </div>
            </div>

        </section>
    )
}
export default ProjectsSection