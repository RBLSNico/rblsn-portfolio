import { useEffect, useRef } from "react";
import { FaGithub } from "react-icons/fa";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

const ProjectsSection = () => {
    const projectsRef = useRef<HTMLDivElement[]>([]);

    useEffect(() => {
        projectsRef.current.forEach((project, index) => {
            gsap.fromTo(
                project,
                { opacity: 0, y: 50 },
                {
                    opacity: 1,
                    y: 0,
                    duration: 0.5,
                    ease: "power2.out",
                    scrollTrigger: {
                        trigger: project,
                        start: "top 80%",
                        toggleActions: "play none restart none",
                    },
                    stagger: 0.2,
                }
            );
        });
    }, []);

    return (
        <section id="projects" className="rounded-xl flex flex-col items-center gap-5">
            <h1 className="text-(--primary-blue) text-3xl font-bold text-center">Projects</h1>

            {[
                {
                    title: "PaintAR",
                    description:
                        "An android application that allows its users to see how various paint colors will look in their own living spaces without painting the walls. This application was developed using Java, Kotlin, while implementing the OpenCV library for image processing.",
                    image: "/image/PaintAR.png",
                    github: "https://github.com/RBLSNico/PaintAR",
                    gradient: "bg-gradient-to-r from-emerald-700 to-green-950",
                },
                {
                    title: "CafeBytes",
                    description:
                        "A self-contained kiosk ordering system developed to eliminate the manual process of taking orders from students at the university cafeteria, saving time and reducing lines during peak hours. This web application was developed using HTML, CSS, Angular, TypeScript, AJAX, and Microsoft SQL Server.",
                    image: "/image/CafeBytes.png",
                    github: "https://github.com/RBLSNico/CafebytesAPI",
                    gradient: "bg-gradient-to-r from-yellow-700 to-amber-950",
                },
                {
                    title: "NU Laguna Queuing System",
                    description:
                        "A queuing system built for the benefit of the students at National University Laguna. This system optimizes the queuing process for students availing of various student services, such as enrollment, cashier transactions, and registrar’s office assistance.",
                    image: "/image/NULQueue.png",
                    github: "https://github.com/RBLSNico/NUL-QUEUE",
                    gradient: "bg-gradient-to-r from-indigo-700 to-blue-950",
                },
                {
                    title: "FindaHost",
                    description:
                        "As the lead WordPress Developer for FindaHost, I was tasked to build, optimize, and maintain the whole website, ensuring seamless functionality, Search Engine Optimization (SEO), and enhanced user experience.",
                    image: "/image/FindaHost.png",
                    link: "https://findahost.io/",
                    gradient: "bg-gradient-to-r from-purple-700 to-fuchsia-950",
                },
                {
                    title: "FindaHost AirBnb Calculator",
                    description:
                        "Developed a custom Airbnb Pricing Calculator for FindaHost using Tailwind CSS and a REST API for real-time pricing calculations. The tool provides dynamic cost breakdowns, helping hosts estimate earnings and optimize their rental strategy with accurate market data.",
                    image: "/image/airbnb_calculator.png",
                    link: "https://findahost.io/airbnb-calculator/",
                    gradient: "bg-gradient-to-r from-red-950 to-red-800",
                },
                {
                    title: "Kunda House",
                    description:
                        "Responsible for maintaining and enhancing Kunda House's existing WordPress website. Improving site speed and SEO performance, successfully restoring full functionality, enhancing speed, and improving search engine visibility. Integrated Beds24 support for property management.",
                    image: "/image/kunda_house.png",
                    link: "https://kunda.house/",
                    gradient: "bg-gradient-to-r from-purple-700 to-fuchsia-950",
                },
            ].map((project, index) => (
                <div
                    key={index}
                    ref={(el) => {
                        if (el) projectsRef.current[index] = el;
                    }}
                    className={`md:flex-row flex flex-col items-center justify-center gap-5 p-10 rounded-xl ${project.gradient} min-h-[80vh]`}
                >
                    <div className="w-full">
                        <img src={project.image} alt={project.title} />
                    </div>
                    <div className="w-full flex flex-col gap-5 items-center md:items-start">
                        <h1 className="text-white text-2xl font-semibold text-center md:text-left">{project.title}</h1>
                        <p className="text-white text-center md:text-left">{project.description}</p>
                        {project.github ? (
                            <a
                                href={project.github}
                                className="flex items-center w-fit bg-black text-white rounded-xl px-5 py-3 hover:bg-white hover:text-black transition-colors duration-300 ease-in-out"
                            >
                                <FaGithub className="mr-2" />
                                View on GitHub
                            </a>
                        ) : (
                            <a
                                href={project.link}
                                className="flex items-center w-fit bg-black text-white rounded-xl px-5 py-3 hover:bg-white hover:text-black transition-colors duration-300 ease-in-out"
                            >
                                Check Out Here
                            </a>
                        )}
                    </div>
                </div>
            ))}
        </section>
    );
};

export default ProjectsSection;
