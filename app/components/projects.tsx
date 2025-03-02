import { useEffect, useRef } from "react";
import { FaGithub, FaJava, FaAndroid, FaHtml5, FaAngular, FaDatabase, FaWordpress, FaReact, FaBootstrap, FaElementor } from "react-icons/fa";
import { SiKotlin, SiTypescript, SiTailwindcss, SiOpencv, SiSwagger, SiPhp } from "react-icons/si";
import { DiMsqlServer, DiMysql } from "react-icons/di";
import { TbApi } from "react-icons/tb";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import {
    Carousel,
    CarouselContent,
    CarouselItem,
    CarouselNext,
    CarouselPrevious,
} from "@/components/ui/carousel"


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
                    duration: 1,
                    ease: "power2.out",
                    scrollTrigger: {
                        trigger: project,
                        start: "top 80%",
                        toggleActions: "play none none reset",
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
                    images: ["/image/paintar1.png", "/image/paintar2.png", "/image/paintar3.png"],
                    github: "https://github.com/RBLSNico/PaintAR",
                    gradient: "bg-gradient-to-r from-emerald-700 to-green-950",
                    icons: [
                        { icon: FaJava, name: "Java" },
                        { icon: SiKotlin, name: "Kotlin" },
                        { icon: FaAndroid, name: "Android" },
                        { icon: SiOpencv, name: "OpenCV" }
                    ]
                },
                {
                    title: "CafeBytes",
                    description:
                        "A self-contained kiosk ordering system developed to eliminate the manual process of taking orders from students at the university cafeteria, saving time and reducing lines during peak hours. This web application was developed using HTML, CSS, Angular, TypeScript, AJAX, and Microsoft SQL Server.",
                    images: ["/image/cafebytes1.png", "/image/cafebytes2.png", "/image/cafebytes3.png"],
                    github: "https://github.com/RBLSNico/CafebytesAPI",
                    gradient: "bg-gradient-to-r from-yellow-700 to-amber-950",
                    icons: [
                        { icon: FaAngular, name: "Angular" },
                        { icon: DiMsqlServer, name: "SQL Server" },
                        { icon: SiSwagger, name: "Swagger UI" }
                    ]
                },
                {
                    title: "NU Laguna Queuing System",
                    description:
                        "A queuing system built for the benefit of the students at National University Laguna. This system optimizes the queuing process for students availing of various student services, such as enrollment, cashier transactions, and registrar's office assistance.",
                    images: ["/image/nulqueue1.png", "/image/nulqueue2.png", "/image/nulqueue3.png"],
                    github: "https://github.com/RBLSNico/NUL-QUEUE",
                    gradient: "bg-gradient-to-r from-indigo-700 to-blue-950",
                    icons: [
                        { icon: FaHtml5, name: "HTML/CSS" },
                        { icon: DiMysql, name: "Mysql" },
                        { icon: SiPhp, name: "PHP" },
                        { icon: FaBootstrap, name: "Bootstrap" }
                    ]
                },
                {
                    title: "FindaHost",
                    description:
                        "As the lead WordPress Developer for FindaHost, I was tasked to build, optimize, and maintain the whole website, ensuring seamless functionality, Search Engine Optimization (SEO), and enhanced user experience.",
                    images: ["/image/findahost1.png", "/image/findahost2.png", "/image/findahost3.png"],
                    link: "https://findahost.io/",
                    gradient: "bg-gradient-to-r from-purple-700 to-fuchsia-950",
                    icons: [
                        { icon: FaWordpress, name: "WordPress" },
                        { icon: FaHtml5, name: "HTML/CSS" },
                        { icon: FaHtml5, name: "Elementor" }
                    ]
                },
                {
                    title: "FindaHost AirBnb Calculator",
                    description:
                        "Developed a custom Airbnb Pricing Calculator for FindaHost using Tailwind CSS and a REST API for real-time pricing calculations. The tool provides dynamic cost breakdowns, helping hosts estimate earnings and optimize their rental strategy with accurate market data.",
                    images: ["/image/airbnb_calc1.png", "/image/airbnb_calc2.png", "/image/airbnb_calc3.png"],
                    link: "https://findahost.io/airbnb-calculator/",
                    gradient: "bg-gradient-to-r from-red-950 to-red-800",
                    icons: [
                        { icon: SiTailwindcss, name: "Tailwind CSS" },
                        { icon: TbApi, name: "REST API" },
                        { icon: FaWordpress, name: "WordPress" },
                        { icon: FaHtml5, name: "Elementor" }
                    ]
                },
                {
                    title: "Kunda House",
                    description:
                        "Responsible for maintaining and enhancing Kunda House's existing WordPress website. Improving site speed and SEO performance, successfully restoring full functionality, enhancing speed, and improving search engine visibility. Integrated Beds24 support for property management.",
                    images: ["/image/kundahouse1.png", "/image/kundahouse2.png", "/image/kundahouse3.png"],
                    link: "https://kunda.house/",
                    gradient: "bg-gradient-to-r from-purple-700 to-fuchsia-950",
                    icons: [
                        { icon: FaWordpress, name: "WordPress" },
                        { icon: FaHtml5, name: "HTML/CSS" },
                        { icon: FaHtml5, name: "Elementor" }
                    ]
                },
            ].map((project, index) => (
                <div
                    key={index}
                    ref={(el) => {
                        if (el) projectsRef.current[index] = el;
                    }}
                    className={`md:flex-row flex flex-col items-center justify-center gap-5 p-10 rounded-xl ${project.gradient} min-h-[80vh]`}
                >
                    {/* Carousel Section */}
                    <div className="flex items-center justify-center">
                        <Carousel className="max-w-[85%]">
                            <CarouselContent>
                                {project.images.map((image, i) => (
                                    <CarouselItem key={i} className="flex justify-center">
                                        <img src={image} alt={`${project.title} - ${i + 1}`} className="rounded-xl w-full h-auto" />
                                    </CarouselItem>
                                ))}
                            </CarouselContent>
                            <CarouselPrevious />
                            <CarouselNext />
                        </Carousel>
                    </div>

                    {/* Project Info Section */}
                    <div className="w-full flex flex-col gap-5 items-center md:items-start">
                        <h1 className="text-white text-2xl font-semibold text-center md:text-left">{project.title}</h1>
                        <p className="text-white text-center md:text-left">{project.description}</p>

                        {/* Technology Icons */}
                        <div className="flex flex-wrap gap-4 justify-center md:justify-start mt-2">
                            {project.icons.map((item, i) => (
                                <div key={i} className="flex flex-col items-center">
                                    <item.icon size={24} className="text-white hover:text-gray-200 transition-colors duration-300" />
                                    <span className="text-white text-xs mt-1">{item.name}</span>
                                </div>
                            ))}
                        </div>

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