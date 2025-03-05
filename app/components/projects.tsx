import { ReactNode, useEffect, useRef, useState } from "react";
import { FaGithub, FaJava, FaAndroid, FaHtml5, FaAngular, FaDatabase, FaWordpress, FaReact, FaBootstrap, FaElementor, FaCloudflare, FaCcStripe, FaFigma, FaBriefcase, FaLaptopCode } from "react-icons/fa";
import { SiKotlin, SiTypescript, SiTailwindcss, SiOpencv, SiSwagger, SiPhp, SiPlesk, SiChartdotjs } from "react-icons/si";
import { PiFileCSharp } from "react-icons/pi";
import { RiNextjsFill } from "react-icons/ri";
import { IoLogoJavascript } from "react-icons/io5";
import { DiMsqlServer, DiMysql } from "react-icons/di";
import { TbApi } from "react-icons/tb";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import AccordionItems from "./accordionItems";

import {
    Carousel,
    CarouselContent,
    CarouselItem,
    CarouselNext,
    CarouselPrevious,
} from "@/components/ui/carousel"

// Define TypeScript interfaces
interface IconItem {
    icon: React.ElementType;
    name: string;
}

interface ProjectItem {
    title: string;
    position?: string;
    description: string;
    images: string[];
    date: string;
    gradient: string;
    icons: IconItem[];
    id?: string;
    github?: string;
    link?: string;
    accordion?: ReactNode;
}

interface ProjectCardProps {
    item: ProjectItem;
    index: number;
    isWorkExperience?: boolean;
}

gsap.registerPlugin(ScrollTrigger);

const ProjectsSection = () => {
    const projectsRef = useRef<HTMLDivElement[]>([]);
    const sectionsRef = useRef<HTMLDivElement[]>([]);
    const [selectedImage, setSelectedImage] = useState<string | null>(null);


    const closeModal = () => setSelectedImage(null);

    useEffect(() => {
        // Only run animations on initial mount or page reload
        if (selectedImage === null) {
            projectsRef.current.forEach((project) => {
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
                            toggleActions: "play none restart reset",
                        },
                        stagger: 0.2,
                    }
                );
            });

            // Animation for section headers
            sectionsRef.current.forEach((section) => {
                gsap.fromTo(
                    section,
                    { opacity: 0, scale: 0.9 },
                    {
                        opacity: 1,
                        scale: 1,
                        duration: 0.8,
                        ease: "back.out(1.7)",
                        scrollTrigger: {
                            trigger: section,
                            start: "top 85%",
                            toggleActions: "play none restart reset",
                        }
                    }
                );
            });
        }

        // // Cleanup function
        // return () => {
        //     ScrollTrigger.getAll().forEach(trigger => trigger.kill());
        // };
    }, [selectedImage]);

    // Work Experience data
    const workExperience: ProjectItem[] = [
        {
            title: "FindaHost",
            description:
                "As the primary WordPress Developer for FindaHost, I was tasked to build, optimize, and maintain the whole website, ensuring seamless functionality, Search Engine Optimization (SEO), and enhanced user experience.",
            position: "Wordress Developer",
            images: ["/image/findahost1.png", "/image/findahost2.png", "/image/findahost3.png", "/image/fahalp1.png", "/image/fahalp2.png", "/image/fahalp3.png", "/image/fahalp4.png"],
            date: "June 2024 - Present",
            link: "https://findahost.io/",
            gradient: "bg-gradient-to-r from-purple-700 to-fuchsia-950",
            icons: [
                { icon: FaWordpress, name: "WordPress" },
                { icon: FaElementor, name: "Elementor" },
                { icon: FaHtml5, name: "HTML/CSS" },
                { icon: IoLogoJavascript, name: "JavaScript" },
                { icon: SiPhp, name: "PHP" },
                { icon: FaCloudflare, name: "Cloudflare" },
                { icon: FaCcStripe, name: "Stripe" },
                { icon: SiPlesk, name: "Plesk Obsidian" },
                { icon: FaFigma, name: "Figma" },
            ],
            accordion: <AccordionItems>
                <Carousel>
                    <CarouselContent className="flex-col md:flex-row">
                        <CarouselItem className="basis-1/2">
                            <h2 className="text-center py-2">Before</h2>
                            <img
                                src="/image/faha_metrix_before.png"
                                alt="sample works"
                                className="rounded-xl w-full h-auto cursor-pointer"
                                onClick={() => setSelectedImage("/image/faha_metrix_before.png")} // Open modal on click
                            />
                        </CarouselItem>
                        <CarouselItem className="basis-1/2">
                            <h2 className="text-center py-2">After</h2>
                            <img
                                src="/image/faha_metrix_after.png"
                                alt="sample works"
                                className="rounded-xl w-full h-auto cursor-pointer"
                                onClick={() => setSelectedImage("/image/faha_metrix_after.png")} // Open modal on click
                            />
                        </CarouselItem>
                    </CarouselContent>
                    <CarouselPrevious />
                    <CarouselNext />
                </Carousel>
            </AccordionItems>
        },
        {
            title: "Kunda House",
            description:
                "Responsible for maintaining and enhancing Kunda House's existing WordPress website. Improving site speed and SEO performance, successfully restoring full functionality, enhancing speed, and improving search engine visibility. Integrated Beds24 support for property management.",
            position: "Wordress Developer",
            images: ["/image/kundahouse1.png", "/image/kundahouse2.png", "/image/kundahouse3.png"],
            date: "June 2024 - Present",
            link: "https://kunda.house/",
            gradient: "bg-gradient-to-r from-blue-700 to-fuchsia-950",
            icons: [
                { icon: FaWordpress, name: "WordPress" },
                { icon: FaElementor, name: "Elementor" },
                { icon: FaHtml5, name: "HTML/CSS" },
                { icon: IoLogoJavascript, name: "JavaScript" },
            ],
            accordion: <AccordionItems>
                <Carousel>
                    <CarouselContent className="flex-col md:flex-row">
                        <CarouselItem className="basis-1/2">
                            <h2 className="text-center py-2">Before</h2>
                            <img
                                src="/image/kunda_before.png"
                                alt="sample works"
                                className="rounded-xl w-full h-auto cursor-pointer"
                                onClick={() => setSelectedImage("/image/kunda_before.png")} // Open modal on click
                            />
                        </CarouselItem>
                        <CarouselItem className="basis-1/2">
                            <h2 className="text-center py-2">After</h2>
                            <img
                                src="/image/kunda_after.png"
                                alt="sample works"
                                className="rounded-xl w-full h-auto cursor-pointer"
                                onClick={() => setSelectedImage("/image/kunda_after.png")} // Open modal on click
                            />
                        </CarouselItem>
                    </CarouselContent>
                    <CarouselPrevious />
                    <CarouselNext />
                </Carousel>
            </AccordionItems>
        },
        {
            title: "Spiralytics, Inc.",
            description:
                "Worked as an intern at Spiralytics, a digital marketing agency. Managed WordPress websites for multiple clients, created landing pages and sections using Elementor and Divi Builder, and handled Google Analytics, setting up Google Tag Manager and goals for clients. Developed custom HTML emails tailored to different clients.",
            position: "Intern",
            images: ["/image/spiralytics1.png"],
            date: "January 2024 - May 2024",
            link: "https://www.spiralytics.com/",
            gradient: "bg-gradient-to-r from-blue-700 to-blue-950",
            icons: [
                { icon: FaWordpress, name: "WordPress" },
                { icon: FaElementor, name: "Elementor" },
                { icon: FaHtml5, name: "HTML/CSS" },
                { icon: IoLogoJavascript, name: "JavaScript" },
            ]
        },
    ];

    // Projects data
    const projects: ProjectItem[] = [
        {
            title: "This Portfolio",
            description:
                "This portfolio was made with ❤️ using Next.js, React, Tailwind CSS, and GSAP for the animations.",
            images: ["/image/portfolio1.png", "/image/portfolio2.png", "/image/portfolio3.png"],
            date: "February 2025",
            github: "https://github.com/RBLSNico/rblsn-portfolio",
            gradient: "bg-gradient-to-r from-slate-800 to-gray-950",
            icons: [
                { icon: RiNextjsFill, name: "Next.js" },
                { icon: FaReact, name: "React" },
                { icon: SiTypescript, name: "TypeScript" },
                { icon: SiTailwindcss, name: "Tailwind CSS" },
            ]
        },
        {
            title: "FindaHost AirBnb Calculator",
            description:
                "Developed a custom Airbnb Pricing Calculator for FindaHost using Tailwind CSS and a REST API for real-time pricing calculations. The tool provides dynamic cost breakdowns, helping hosts estimate earnings and optimize their rental strategy with accurate market data.",
            images: ["/image/airbnb_calc1.png", "/image/airbnb_calc2.png", "/image/airbnb_calc3.png"],
            date: "November 2024 - December 2024",
            link: "https://findahost.io/airbnb-calculator/",
            gradient: "bg-gradient-to-r from-red-950 to-red-800",
            icons: [
                { icon: FaWordpress, name: "WordPress" },
                { icon: FaElementor, name: "Elementor" },
                { icon: SiTailwindcss, name: "Tailwind CSS" },
                { icon: TbApi, name: "REST API" },
                { icon: IoLogoJavascript, name: "JavaScript" },
            ]
        },
        {
            title: "NU Laguna Queuing System",
            description:
                "A queuing system built for the benefit of the students at National University Laguna. This system optimizes the queuing process for students availing of various student services, such as enrollment, cashier transactions, and registrar's office assistance.",
            images: ["/image/nulqueue1.png", "/image/nulqueue2.png", "/image/nulqueue3.png"],
            date: "December 2023 - January 2024",
            github: "https://github.com/RBLSNico/NUL-QUEUE",
            gradient: "bg-gradient-to-r from-indigo-700 to-blue-950",
            icons: [
                { icon: FaHtml5, name: "HTML/CSS" },
                { icon: DiMysql, name: "Mysql" },
                { icon: SiPhp, name: "PHP" },
                { icon: FaBootstrap, name: "Bootstrap" },
                { icon: SiChartdotjs, name: "Chart.js" },
            ]
        },
        {
            title: "CafeBytes",
            description:
                "A self-contained kiosk ordering system developed to eliminate the manual process of taking orders from students at the university cafeteria, saving time and reducing lines during peak hours. This web application was developed using HTML, CSS, Angular, TypeScript, AJAX, and Microsoft SQL Server.",
            images: ["/image/cafebytes1.png", "/image/cafebytes2.png", "/image/cafebytes3.png"],
            date: "June 2023",
            github: "https://github.com/RBLSNico/CafeBytes",
            gradient: "bg-gradient-to-r from-yellow-700 to-amber-950",
            icons: [
                { icon: FaAngular, name: "Angular" },
                { icon: SiTypescript, name: "TypeScript" },
                { icon: DiMsqlServer, name: "SQL Server" },
                { icon: SiSwagger, name: "Swagger UI" },
                { icon: PiFileCSharp, name: "C#" },
            ]
        },
        {
            title: "PaintAR",
            id: "PaintAR",
            description:
                "An android application that allows its users to see how various paint colors will look in their own living spaces without painting the walls. This application was developed using Java, Kotlin, while implementing the OpenCV library for image processing.",
            images: ["/image/paintar1.png", "/image/paintar2.png", "/image/paintar3.png"],
            date: "January 2023 - February 2023",
            github: "https://github.com/RBLSNico/PaintAR",
            gradient: "bg-gradient-to-r from-emerald-700 to-green-950",
            icons: [
                { icon: FaJava, name: "Java" },
                { icon: SiKotlin, name: "Kotlin" },
                { icon: FaAndroid, name: "Android Studio" },
                { icon: SiOpencv, name: "OpenCV" }
            ]
        },
    ];

    // Project card component to avoid repetition
    const ProjectCard: React.FC<ProjectCardProps> = ({ item, index, isWorkExperience = false }) => {
        return (
            <div
                key={index}
                ref={(el) => {
                    if (el) projectsRef.current.push(el);
                }}
                id={item.id}
                className={`rounded-xl ${item.gradient} flex-col w-full flex`}
            >
                <div className={`flex flex-col items-center gap-5 w-full p-8 ${isWorkExperience ? 'md:flex-row' : 'md:flex-row-reverse'}`}>
                    {/* Carousel Section */}
                    <div className="flex items-center justify-center md:w-1/2">
                        <Carousel className="max-w-[85%]">
                            <CarouselContent>
                                {item.images.map((image: string, i: number) => (
                                    <CarouselItem key={i} className="flex justify-center">
                                        <img src={image} alt={`${item.title} - ${i + 1}`} className="rounded-xl w-full h-auto cursor-pointer" onClick={() => setSelectedImage(image)} />
                                    </CarouselItem>
                                ))}
                            </CarouselContent>
                            <CarouselPrevious />
                            <CarouselNext />
                        </Carousel>
                    </div>

                    {/* Project Info Section */}
                    <div className="w-full md:w-1/2 flex flex-col gap-3 items-center md:items-start">
                        <h1 className="text-white text-2xl font-semibold text-center md:text-left">{item.title}</h1>
                        <h2 className="text-white text-md font-normal text-center md:text-left">{item.position}</h2>
                        <h2 className="text-white text-sm font-extralight text-center md:text-left">{item.date}</h2>
                        <p className="text-white text-center md:text-left">{item.description}</p>

                        {/* Technology Icons */}
                        <div className="flex flex-wrap gap-4 justify-center md:justify-start mt-2">
                            {item.icons.map((iconItem, i) => {
                                const [showName, setShowName] = useState(false);

                                return (
                                    <div
                                        key={i}
                                        className="flex flex-col items-center relative group cursor-pointer"
                                        onClick={() => setShowName(!showName)}
                                    >
                                        <iconItem.icon
                                            size={24}
                                            className="text-white hover:text-gray-200 transition-colors duration-300"
                                        />
                                        <span
                                            className={`absolute bottom-[-20px] bg-gray-800 text-white text-xs px-2 py-1 rounded-md opacity-0 group-hover:opacity-100 transition-opacity duration-300 ${showName ? "opacity-100" : ""}`}
                                        >
                                            {iconItem.name}
                                        </span>
                                    </div>
                                );
                            })}
                        </div>

                        {isWorkExperience ? (
                            <a
                                href={item.link}
                                className="flex items-center mt-2 w-fit bg-white text-black rounded-xl px-5 py-3 hover:bg-opacity-80 transition-colors duration-300 ease-in-out"
                            >
                                Visit Website
                            </a>
                        ) : (
                            <a
                                href={item.github}
                                className="flex items-center mt-2 w-fit bg-white text-black rounded-xl px-5 py-3 hover:bg-opacity-80 transition-colors duration-300 ease-in-out"
                            >
                                <FaGithub className="mr-2" />
                                View on GitHub
                            </a>
                        )}
                    </div>
                </div>
                <span>{item.accordion}</span>
            </div>
        );
    };

    return (
        <>
            <section id="projects" className="rounded-xl flex flex-col items-center gap-10">
                {/* Work Experience Section Header */}
                <div
                    ref={(el) => { if (el) sectionsRef.current[0] = el; }}
                    className="w-full flex flex-col items-center gap-3 mt-5"
                >
                    {/* <div className="flex items-center gap-2 bg-blue-900 text-white px-6 py-3 rounded-full">
                    <FaBriefcase size={20} />
                    <h1 className="text-white text-2xl font-bold">Work Experience</h1>
                </div>
                <div className="h-1 w-32 bg-blue-600 rounded-full"></div> */}
                    <h1 className="text-(--primary-blue) text-4xl font-extrabold text-center mt-5">Work Experience</h1>
                </div>

                {/* Work Experience Cards */}
                <div className="flex flex-col items-center gap-8 w-full">
                    {workExperience.map((item, index) => (
                        <ProjectCard key={index} item={item} index={index} isWorkExperience={true} />
                    ))}
                </div>

                {/* Divider between sections */}
                <div className="w-full flex justify-center my-8">
                    <div className="relative w-full max-w-4xl h-px bg-gray-300">
                    </div>
                </div>

                {/* Projects Section Header */}
                <div
                    ref={(el) => { if (el) sectionsRef.current[1] = el; }}
                    className="w-full flex flex-col items-center gap-3 mt-5"
                >
                    {/* <div className="flex items-center gap-2 bg-green-800 text-white px-6 py-3 rounded-full">
                    <FaLaptopCode size={20} />
                    <h1 className="text-white text-2xl font-bold">Projects</h1>
                </div>
                <div className="h-1 w-32 bg-green-600 rounded-full"></div> */}
                    <h1 className="text-(--primary-blue) text-4xl font-extrabold text-center">Projects</h1>
                </div>


                {/* Project Cards */}
                <div className="flex flex-col items-center gap-8 w-full">
                    {projects.map((item, index) => (
                        <ProjectCard key={index} item={item} index={index} isWorkExperience={false} />
                    ))}
                </div>
            </section>


            {/* Full-Screen Modal */}
            {selectedImage && (
                <div
                    className="fixed inset-0 bg-gray/20 backdrop-blur-sm bg-opacity-50 flex justify-center items-center z-50"
                    onClick={closeModal} // Close when clicking outside
                >
                    <div>
                        <img
                            src={selectedImage}
                            alt="Full Screen"
                            className="max-w-full max-h-[90vh] rounded-xl shadow-lg"
                        />
                    </div>
                </div>
            )}
        </>
    );
};

export default ProjectsSection;