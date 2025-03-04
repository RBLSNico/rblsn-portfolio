import { useEffect, useRef, RefObject } from 'react';
import { FaWordpress, FaNode, FaPhp, FaJs, FaCss3, FaReact, FaElementor, FaHtml5, FaCloudflare, FaCcStripe, FaFigma } from "react-icons/fa";
import { SiPlesk } from "react-icons/si";
import { IoLogoFirebase } from "react-icons/io5";
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/dist/ScrollTrigger';
import { RiNextjsFill, RiTailwindCssFill } from "react-icons/ri";
import { DiMysql } from "react-icons/di";



const AboutSection = () => {
    const sectionRef = useRef<HTMLElement>(null);
    const titleRef = useRef<HTMLHeadingElement>(null);
    const profileRef = useRef<HTMLDivElement>(null);
    const bioRef = useRef<HTMLDivElement>(null);
    const stackTitleRef = useRef<HTMLHeadingElement>(null);
    const stackGridRef = useRef<HTMLDivElement>(null);
    const stackItemsRef = useRef<HTMLDivElement[]>([]);

    useEffect(() => {
        // Register ScrollTrigger with GSAP
        if (typeof window !== 'undefined') {
            gsap.registerPlugin(ScrollTrigger);
        }

        // Main section animation when it comes into view
        gsap.fromTo(
            sectionRef.current,
            { opacity: 0 },
            {
                opacity: 1,
                duration: 0.8,
                scrollTrigger: {
                    trigger: sectionRef.current,
                    start: "top 80%",
                }
            }
        );

        // Title animation
        gsap.fromTo(
            titleRef.current,
            { y: -30, opacity: 0 },
            {
                y: 0,
                opacity: 1,
                duration: 0.6,
                scrollTrigger: {
                    trigger: titleRef.current,
                    start: "top 85%",
                }
            }
        );

        // Profile image animation
        gsap.fromTo(
            profileRef.current,
            { scale: 0.8, opacity: 0 },
            {
                scale: 1,
                opacity: 1,
                duration: 0.8,
                ease: "back.out(1.7)",
                scrollTrigger: {
                    trigger: profileRef.current,
                    start: "top 85%",
                    toggleActions: "play none restart reset",
                }
            }
        );

        // Bio text animation
        const animationSettings = window.innerWidth <= 768
            ? { y: 50, opacity: 0 } // Mobile: Fade up
            : { x: 50, opacity: 0 }; // Desktop: Fade from right

        gsap.fromTo(
            bioRef.current,
            animationSettings,
            {
                x: 0,
                y: 0,
                opacity: 1,
                duration: 0.8,
                scrollTrigger: {
                    trigger: bioRef.current,
                    start: "top 85%",
                    toggleActions: "play none restart reset",
                }
            }
        );


        // Stack title animation
        gsap.fromTo(
            stackTitleRef.current,
            { y: -30, opacity: 0 },
            {
                y: 0,
                opacity: 1,
                duration: 0.6,
                scrollTrigger: {
                    trigger: stackTitleRef.current,
                    start: "top 85%",
                    toggleActions: "play none restart reset",
                }
            }
        );

        // Staggered animation for stack items
        gsap.fromTo(
            stackItemsRef.current,
            { y: 50, opacity: 0, scale: 0.9 },
            {
                y: 0,
                opacity: 1,
                scale: 1,
                stagger: 0.1,
                duration: 0.5,
                ease: "power2.out",
                scrollTrigger: {
                    trigger: stackGridRef.current,
                    start: "top 85%",
                    toggleActions: "play none restart reset",
                }
            }
        );

        // Clean up
        return () => {
            ScrollTrigger.getAll().forEach(trigger => trigger.kill());
        };
    }, []);

    // Add items to the ref array with proper typing
    const addToRefs = (el: HTMLDivElement | null) => {
        if (el && !stackItemsRef.current.includes(el)) {
            stackItemsRef.current.push(el);
        }
    };


    return (
        <section id="about" ref={sectionRef} className="flex flex-col justify-center items-center">
            <h1 ref={titleRef} className="text-(--primary-blue) text-4xl font-extrabold text-center mt-5">About Me</h1>
            <div className="m-0 flex items-center justify-center p-10 flex-col gap-10 md:flex-row">
                <div ref={profileRef} className="w-full items-center justify-center flex">
                    <img src="/image/rblsnico_img.jpg" className="max-w-[300px] rounded-full"></img>
                </div>
                <div ref={bioRef} className="w-full">
                    <p className="text-center sm:text-start">
                        I am Gabriel Nicolas Labutap Robles, I graduated <strong>cum laude</strong> from National University Laguna with a Bachelor's Degree in Information Technology in 2024 and won the <strong>Best Capstone Project Award</strong> for our project, <a href="#PaintAR" className="font-bold">PaintAR</a>.
                        <br /><br />
                        I have extensive experience in creating and maintaining WordPress sites and am actively upskilling in modern frameworks to broaden my expertise and enhance my contributions to impactful projects.
                    </p>
                </div>
            </div>
            <h1 ref={stackTitleRef} className="text-(--primary-blue) text-4xl font-extrabold text-center mt-5">Current Stack</h1>
            <div ref={stackGridRef} className="grid grid-cols-2 md:grid-cols-4 gap-4 w-full min-h-100 mt-5">
                <div ref={addToRefs} className="relative bg-gradient-to-r from-orange-500 to-red-600 p-6 rounded-lg text-white text-center text-xl overflow-hidden group flex flex-col items-center justify-center">
                    <FaHtml5 className="w-16 h-16 mb-2" />
                    <h2 className="sm:opacity-0 relative z-10 opacity-100 group-hover:opacity-100 transition-opacity duration-300">HTML5</h2>
                </div>
                <div ref={addToRefs} className="relative bg-gradient-to-r from-blue-500 to-blue-700 p-6 rounded-lg text-white text-center text-xl overflow-hidden group flex flex-col items-center justify-center">
                    <FaCss3 className="w-16 h-16 mb-2" />
                    <h2 className="sm:opacity-0 relative z-10 opacity-100 group-hover:opacity-100 transition-opacity duration-300">CSS</h2>
                </div>
                <div ref={addToRefs} className="relative bg-gradient-to-r from-yellow-400 to-yellow-500 p-6 rounded-lg text-white text-center text-xl overflow-hidden group flex flex-col items-center justify-center">
                    <FaJs className="w-16 h-16 mb-2" />
                    <h2 className="sm:opacity-0 relative z-10 opacity-100 group-hover:opacity-100 transition-opacity duration-300">JavaScript</h2>
                </div>
                <div ref={addToRefs} className="relative bg-gradient-to-r from-purple-600 to-purple-800 p-6 rounded-lg text-white text-center text-xl overflow-hidden group flex flex-col items-center justify-center">
                    <FaPhp className="w-16 h-16 mb-2" />
                    <h2 className="sm:opacity-0 relative z-10 opacity-100 group-hover:opacity-100 transition-opacity duration-300">PHP</h2>
                </div>
                <div ref={addToRefs} className="relative bg-gradient-to-r from-green-600 to-green-800 p-6 rounded-lg text-white text-center text-xl overflow-hidden group flex flex-col items-center justify-center">
                    <FaNode className="w-16 h-16 mb-2" />
                    <h2 className="sm:opacity-0 relative z-10 opacity-100 group-hover:opacity-100 transition-opacity duration-300">Node.js</h2>
                </div>
                <div ref={addToRefs} className="relative bg-gradient-to-r from-blue-700 to-blue-900 p-6 rounded-lg text-white text-center text-xl overflow-hidden group flex flex-col items-center justify-center">
                    <FaWordpress className="w-16 h-16 mb-2" />
                    <h2 className="sm:opacity-0 relative z-10 opacity-100 group-hover:opacity-100 transition-opacity duration-300">WordPress</h2>
                </div>
                <div ref={addToRefs} className="relative bg-gradient-to-r from-pink-500 to-red-500 p-6 rounded-lg text-white text-center text-xl overflow-hidden group flex flex-col items-center justify-center">
                    <FaElementor className="w-16 h-16 mb-2" />
                    <h2 className="sm:opacity-0 relative z-10 opacity-100 group-hover:opacity-100 transition-opacity duration-300">Elementor</h2>
                </div>
                <div ref={addToRefs} className="relative bg-gradient-to-r from-blue-400 to-cyan-500 p-6 rounded-lg text-white text-center text-xl overflow-hidden group flex flex-col items-center justify-center">
                    <RiTailwindCssFill className="w-16 h-16 mb-2" />
                    <h2 className="sm:opacity-0 relative z-10 opacity-100 group-hover:opacity-100 transition-opacity duration-300">Tailwind CSS</h2>
                </div>
                <div ref={addToRefs} className="relative bg-gradient-to-r from-sky-400 to-blue-500 p-6 rounded-lg text-white text-center text-xl overflow-hidden group flex flex-col items-center justify-center">
                    <FaReact className="w-16 h-16 mb-2" />
                    <h2 className="sm:opacity-0 relative z-10 opacity-100 group-hover:opacity-100 transition-opacity duration-300">React</h2>
                </div>
                <div ref={addToRefs} className="relative bg-gradient-to-r from-black to-gray-900 p-6 rounded-lg text-white text-center text-xl overflow-hidden group flex flex-col items-center justify-center">
                    <RiNextjsFill className="w-16 h-16 mb-2" />
                    <h2 className="sm:opacity-0 relative z-10 opacity-100 group-hover:opacity-100 transition-opacity duration-300">Next.js</h2>
                </div>
                <div ref={addToRefs} className="relative bg-gradient-to-r from-yellow-400 to-orange-500 p-6 rounded-lg text-white text-center text-xl overflow-hidden group flex flex-col items-center justify-center">
                    <IoLogoFirebase className="w-16 h-16 mb-2" />
                    <h2 className="sm:opacity-0 relative z-10 opacity-100 group-hover:opacity-100 transition-opacity duration-300">Firebase</h2>
                </div>
                <div ref={addToRefs} className="relative bg-gradient-to-r from-blue-600 to-blue-800 p-6 rounded-lg text-white text-center text-xl overflow-hidden group flex flex-col items-center justify-center">
                    <DiMysql className="w-16 h-16 mb-2" />
                    <h2 className="sm:opacity-0 relative z-10 opacity-100 group-hover:opacity-100 transition-opacity duration-300">MySQL</h2>
                </div>
                <div ref={addToRefs} className="relative bg-gradient-to-r from-orange-400 to-orange-600 p-6 rounded-lg text-white text-center text-xl overflow-hidden group flex flex-col items-center justify-center">
                    <FaCloudflare className="w-16 h-16 mb-2" />
                    <h2 className="sm:opacity-0 relative z-10 opacity-100 group-hover:opacity-100 transition-opacity duration-300">Cloudflare</h2>
                </div>
                <div ref={addToRefs} className="relative bg-gradient-to-r from-gray-700 to-gray-900 p-6 rounded-lg text-white text-center text-xl overflow-hidden group flex flex-col items-center justify-center">
                    <SiPlesk className="w-16 h-16 mb-2" />
                    <h2 className="sm:opacity-0 relative z-10 opacity-100 group-hover:opacity-100 transition-opacity duration-300">Plesk Obsidian</h2>
                </div>
                <div ref={addToRefs} className="relative bg-gradient-to-r from-indigo-500 to-blue-700 p-6 rounded-lg text-white text-center text-xl overflow-hidden group flex flex-col items-center justify-center">
                    <FaCcStripe className="w-16 h-16 mb-2" />
                    <h2 className="sm:opacity-0 relative z-10 opacity-100 group-hover:opacity-100 transition-opacity duration-300">Stripe</h2>
                </div>
                <div ref={addToRefs} className="relative bg-gradient-to-r from-pink-500 to-purple-600 p-6 rounded-lg text-white text-center text-xl overflow-hidden group flex flex-col items-center justify-center">
                    <FaFigma className="w-16 h-16 mb-2" />
                    <h2 className="sm:opacity-0 relative z-10 opacity-100 group-hover:opacity-100 transition-opacity duration-300">Figma</h2>
                </div>

            </div>
        </section>
    );
};

export default AboutSection;