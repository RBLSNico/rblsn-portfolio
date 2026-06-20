import { useEffect, useRef } from 'react';
import { FaWordpress, FaNode, FaPhp, FaJs, FaCss3, FaReact, FaElementor, FaHtml5, FaCloudflare, FaCcStripe, FaFigma } from "react-icons/fa";
import { SiPlesk } from "react-icons/si";
import { IoLogoFirebase } from "react-icons/io5";
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/dist/ScrollTrigger';
import { RiNextjsFill, RiTailwindCssFill } from "react-icons/ri";
import { DiMysql } from "react-icons/di";

const STACK_COLORS = [
    // 'bg-[var(--accent)] text-[var(--accent-foreground)]',
    // 'bg-[var(--accent-3)] text-[#0A0A0A]',
    // 'bg-[var(--accent-2)] text-white',
    'bg-[var(--surface-2)] text-[var(--foreground)]',
];

const stackItems = [
    { icon: FaHtml5, name: 'HTML5' },
    { icon: FaCss3, name: 'CSS' },
    { icon: FaJs, name: 'JavaScript' },
    { icon: FaPhp, name: 'PHP' },
    { icon: FaNode, name: 'Node.js' },
    { icon: FaWordpress, name: 'WordPress' },
    { icon: FaElementor, name: 'Elementor' },
    { icon: RiTailwindCssFill, name: 'Tailwind CSS' },
    { icon: FaReact, name: 'React' },
    { icon: RiNextjsFill, name: 'Next.js' },
    { icon: IoLogoFirebase, name: 'Firebase' },
    { icon: DiMysql, name: 'MySQL' },
    { icon: FaCloudflare, name: 'Cloudflare' },
    { icon: SiPlesk, name: 'Plesk Obsidian' },
    { icon: FaCcStripe, name: 'Stripe' },
    { icon: FaFigma, name: 'Figma' },
];

const AboutSection = () => {
    const sectionRef = useRef<HTMLElement>(null);
    const titleRef = useRef<HTMLHeadingElement>(null);
    const profileRef = useRef<HTMLDivElement>(null);
    const bioRef = useRef<HTMLDivElement>(null);
    const stackTitleRef = useRef<HTMLHeadingElement>(null);
    const stackGridRef = useRef<HTMLDivElement>(null);
    const stackItemsRef = useRef<HTMLDivElement[]>([]);

    useEffect(() => {
        if (typeof window !== 'undefined') {
            gsap.registerPlugin(ScrollTrigger);
        }

        gsap.fromTo(sectionRef.current, { opacity: 0 }, {
            opacity: 1, duration: 0.8,
            scrollTrigger: { trigger: sectionRef.current, start: "top 80%" }
        });

        gsap.fromTo(titleRef.current, { y: -30, opacity: 0 }, {
            y: 0, opacity: 1, duration: 0.6,
            scrollTrigger: { trigger: titleRef.current, start: "top 85%" }
        });

        gsap.fromTo(profileRef.current, { scale: 0.9, opacity: 0 }, {
            scale: 1, opacity: 1, duration: 0.6,
            scrollTrigger: { trigger: profileRef.current, start: "top 85%", toggleActions: "play none restart reset" }
        });

        const animationSettings = window.innerWidth <= 768
            ? { y: 50, opacity: 0 }
            : { x: 50, opacity: 0 };

        gsap.fromTo(bioRef.current, animationSettings, {
            x: 0, y: 0, opacity: 1, duration: 0.8,
            scrollTrigger: { trigger: bioRef.current, start: "top 85%", toggleActions: "play none restart reset" }
        });

        gsap.fromTo(stackTitleRef.current, { y: -30, opacity: 0 }, {
            y: 0, opacity: 1, duration: 0.6,
            scrollTrigger: { trigger: stackTitleRef.current, start: "top 85%", toggleActions: "play none restart reset" }
        });

        gsap.fromTo(stackItemsRef.current, { y: 30, opacity: 0 }, {
            y: 0, opacity: 1, stagger: 0.05, duration: 0.4,
            scrollTrigger: { trigger: stackGridRef.current, start: "top 85%", toggleActions: "play none restart reset" }
        });

        return () => {
            ScrollTrigger.getAll().forEach(trigger => trigger.kill());
        };
    }, []);

    const addToRefs = (el: HTMLDivElement | null) => {
        if (el && !stackItemsRef.current.includes(el)) {
            stackItemsRef.current.push(el);
        }
    };

    return (
        <section id="about" ref={sectionRef} className="flex flex-col gap-8 w-full min-w-0">
            <div className="flex flex-col items-start gap-2">
                <span className="mono-label">ABOUT_ME</span>
                <h2 ref={titleRef} className="section-title">About Me</h2>
            </div>

            <div className="brutal-box p-4 sm:p-6 md:p-8 flex flex-col md:flex-row gap-8 items-start bg-[var(--surface)] w-full min-w-0">
                <div ref={profileRef} className="shrink-0 mx-auto md:mx-0 w-full max-w-[260px]">
                    <div className="border-3 border-[var(--border-brutal)] shadow-[5px_5px_0_var(--border-brutal)] p-1 bg-[var(--accent)] w-full">
                        <img
                            src="/image/rblsnico_img.jpg"
                            alt="Gabriel Nicolas Robles"
                            className="w-full aspect-square object-cover grayscale hover:grayscale-0 transition-all duration-300"
                        />
                    </div>
                    <p className="font-[family-name:var(--font-ibm-plex-mono)] text-[0.6rem] uppercase tracking-widest mt-3 text-center text-[var(--muted-foreground)]">
                        IMG_REF: RBLSN_001
                    </p>
                </div>

                <div ref={bioRef} className="flex-1 space-y-4">
                    <span className="status-pill status-pill--lime">CUM_LAUDE — 2024</span>
                    <p className="text-base leading-relaxed">
                        I am <strong>Gabriel Nicolas Labutap Robles</strong>. I graduated <strong>cum laude</strong> from National University Laguna with a Bachelor&apos;s Degree in Information Technology in 2024 and won the <strong>Best Capstone Project Award</strong> for our project, <a href="#PaintAR" className="font-bold underline decoration-[var(--accent-2)] decoration-3 underline-offset-4 hover:text-[var(--accent-2)]">PaintAR</a>.
                    </p>
                    <p className="text-base leading-relaxed text-[var(--muted-foreground)]">
                        I have extensive experience in creating and maintaining WordPress sites and am actively upskilling in modern frameworks to broaden my expertise and enhance my contributions to impactful projects.
                    </p>
                </div>
            </div>

            <div className="flex flex-col items-start gap-2">
                <span className="mono-label">CURRENT_STACK</span>
                <h2 ref={stackTitleRef} className="section-title">Tech Stack</h2>
            </div>

            <div ref={stackGridRef} className="grid grid-cols-2 md:grid-cols-4 gap-3 w-full">
                {stackItems.map((item, i) => {
                    const Icon = item.icon;
                    const colorClass = STACK_COLORS[i % STACK_COLORS.length];
                    return (
                        <div
                            key={item.name}
                            ref={addToRefs}
                            className={`brutal-box-sm p-4 flex flex-col items-center justify-center gap-2 group cursor-default hover:-translate-x-0.5 hover:-translate-y-0.5 hover:shadow-[4px_4px_0_var(--border-brutal)] transition-all duration-100 ${colorClass}`}
                        >
                            <Icon className="w-10 h-10" />
                            <span className="font-[family-name:var(--font-ibm-plex-mono)] text-[0.55rem] sm:text-[0.65rem] font-bold uppercase tracking-wide sm:tracking-widest text-center break-words">
                                {item.name}
                            </span>
                        </div>
                    );
                })}
            </div>
        </section>
    );
};

export default AboutSection;
