import { useEffect, useRef } from 'react';
import gsap from 'gsap';
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { FaLinkedin, FaGithub, FaDownload, FaEnvelope } from "react-icons/fa";

const HomeSection = () => {
    const sectionRef = useRef(null);
    const titleRef = useRef(null);
    const subtitleRef = useRef(null);
    const paragraphRef = useRef(null);
    const buttonRef = useRef(null);
    const buttonSectionRef = useRef(null);

    useEffect(() => {
        const tl = gsap.timeline({
            defaults: { ease: "power3.out" },
            scrollTrigger: {
                trigger: sectionRef.current,
                start: "top 80%",
                toggleActions: "play none restart reset",
            },
        });

        tl.fromTo(sectionRef.current,
            { opacity: 0, y: 30 },
            { opacity: 1, y: 0, duration: 0.6 }
        );

        tl.fromTo(titleRef.current,
            { y: -30, opacity: 0 },
            { y: 0, opacity: 1, duration: 0.4 },
            "-=0.3"
        );

        tl.fromTo(subtitleRef.current,
            { y: 30, opacity: 0 },
            { y: 0, opacity: 1, duration: 0.4 },
            "-=0.2"
        );

        tl.fromTo(paragraphRef.current,
            { opacity: 0 },
            { opacity: 1, duration: 0.5 },
            "-=0.2"
        );

        tl.fromTo(buttonRef.current,
            { opacity: 0 },
            { opacity: 1, duration: 0.4 },
            "-=0.2"
        );

        tl.fromTo(buttonSectionRef.current,
            { opacity: 0 },
            { opacity: 1, duration: 0.4 },
            "-=0.3"
        );

        return () => {
            tl.kill();
        };
    }, []);

    return (
        <section
            ref={sectionRef}
            className="brutal-box flex flex-col p-4 sm:p-6 md:p-10 gap-6 bg-[var(--surface)] w-full min-w-0 overflow-hidden"
        >
            <div className="flex flex-wrap items-center justify-between gap-2 border-b-3 border-[var(--border-brutal)] pb-4">
                <span className="mono-label">USER_PROFILE</span>
                <div className="flex flex-wrap gap-2 justify-end">
                    <span className="status-pill status-pill--lime">AVAILABLE</span>
                    <span className="status-pill status-pill--cyan">PH 🇵🇭</span>
                </div>
            </div>

            <div className="flex flex-col items-start gap-4 w-full min-w-0">
                <p
                    ref={titleRef}
                    className="font-[family-name:var(--font-ibm-plex-mono)] text-xs sm:text-sm uppercase tracking-wide sm:tracking-widest text-[var(--muted-foreground)] break-words"
                >
                    QUERY: WHO_IS_NICO<span className="cursor-blink" />
                </p>

                <h1
                    ref={subtitleRef}
                    className="display-title text-[2rem] sm:text-5xl md:text-7xl lg:text-8xl leading-[0.9] w-full"
                >
                    Gabriel
                    <br />
                    <span className="text-[var(--accent-2)]">Nicolas</span>
                    <br />
                    <span className="text-[var(--accent)]">Robles</span>
                </h1>

                <div className="flex flex-wrap gap-2 mt-2">
                    <span className="status-pill status-pill--neutral">DEVELOPER</span>
                    <span className="status-pill status-pill--pink">WEB</span>
                    <span className="status-pill status-pill--cyan">FULL-STACK</span>
                </div>
            </div>

            <p
                ref={paragraphRef}
                className="text-base md:text-lg max-w-2xl border-l-4 border-[var(--accent)] pl-4 leading-relaxed"
            >
                I specialize in creating and designing websites. I enjoy starting from scratch and improving continuously. Learning is a passion — I always welcome a good challenge.
            </p>

            <div ref={buttonRef} className="flex flex-col items-start gap-4">
                <a
                    href="https://www.linkedin.com/in/gabriel-nicolas-robles-b2027b24b/"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="brutal-btn"
                >
                    <FaLinkedin />
                    Connect
                </a>

                <div ref={buttonSectionRef} className="flex flex-wrap items-center gap-3">
                    <a
                        href="https://github.com/RBLSNico"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="brutal-btn brutal-btn-outline"
                        aria-label="GitHub"
                    >
                        <FaGithub />
                        GitHub
                    </a>
                    <a
                        href="https://drive.google.com/file/d/1nqemKt1QhPeoC9v5YQE6GbrCAuG-Y_7q/view?usp=sharing"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="brutal-btn brutal-btn-outline"
                    >
                        <FaDownload />
                        Resume
                    </a>
                    <a
                        href="mailto:roblesgabrielnicolas@gmail.com"
                        className="brutal-btn brutal-btn-pink"
                        aria-label="Email"
                    >
                        <FaEnvelope />
                        Email
                    </a>
                </div>
            </div>

            <div className="font-[family-name:var(--font-ibm-plex-mono)] text-[0.6rem] sm:text-[0.65rem] uppercase tracking-wide sm:tracking-widest text-[var(--muted-foreground)] border-t-2 border-dashed border-[var(--border-brutal)] pt-4 mt-2 break-words leading-relaxed">
                <span className="block sm:inline">FILES_LOADED: 4_SECTIONS</span>
                <span className="hidden sm:inline"> — </span>
                <span className="block sm:inline">LAST_UPDATE: 2025</span>
                <span className="hidden sm:inline"> — </span>
                <span className="block sm:inline">BUILD: NEXT.JS_16</span>
            </div>
        </section>
    );
};

export default HomeSection;
