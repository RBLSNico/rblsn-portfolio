import { useEffect, useRef } from 'react';
import gsap from 'gsap';
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { FaLinkedin, FaGithub, FaGoogle, FaDownload, FaEnvelope } from "react-icons/fa";

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

        // Animate section background
        tl.fromTo(sectionRef.current,
            { opacity: 0, scale: 0.9 },
            { opacity: 1, scale: 1, duration: 0.8 }
        );

        // Animate first title
        tl.fromTo(titleRef.current,
            { y: -50, opacity: 0 },
            { y: 0, opacity: 1, duration: 0.5 },
            "-=0.4"
        );

        // Animate name/subtitle
        tl.fromTo(subtitleRef.current,
            { y: 50, opacity: 0 },
            { y: 0, opacity: 1, duration: 0.5 },
            "-=0.3"
        );

        // Animate paragraph
        tl.fromTo(paragraphRef.current,
            { opacity: 0 },
            { opacity: 1, duration: 0.7 },
            "-=0.2"
        );

        // Animate button
        tl.fromTo(buttonRef.current,
            { opacity: 0, scale: 0.8 },
            { opacity: 1, scale: 1, duration: 0.5 },
            "-=0.4"
        );

        // Animate button section
        tl.fromTo(buttonSectionRef.current,
            { opacity: 0, scale: 0.8 },
            { opacity: 1, scale: 1, duration: 0.5 },
            "-=0.4"
        );

        // Cleanup function
        return () => {
            tl.kill();
        };
    }, []);


    return (
        <section
            ref={sectionRef}
            className="bg-(--primary-blue) dark:bg-[#001F3F] rounded-xl flex flex-col items-center p-10 gap-5"
        >
            <h1
                ref={titleRef}
                className="text-white text-3xl font-semibold text-center"
            >
                Hi,
            </h1>
            <h1
                ref={subtitleRef}
                className="text-(--accent) md:text-5xl text-3xl font-bold text-center"
            >
                I'm Nico, A Developer
            </h1>
            <p
                ref={paragraphRef}
                className="text-white text-center max-w-3xl"
            >
                I specialize in creating and designing websites. I enjoy the process of starting from scratch and improving continuously. Learning is a passion of mine, and I always welcome a good challenge.
            </p>
            <div ref={buttonRef} className='flex flex-col items-center justify-center gap-3'>
                <a
                    href="https://www.linkedin.com/in/gabriel-nicolas-robles-b2027b24b/"
                    className="flex items-center w-fit text-white font-semibold rounded-3xl bg-linear-to-tr from-blue-600 to-blue-400 px-5 py-3 transition-all transform ease-in-out hover:scale-105 duration-300"
                >

                    <FaLinkedin className="mr-2" />
                    Let's Connect
                </a>
                <div ref={buttonSectionRef} className='flex flex-row items-center justify-center gap-5'>
                    <a
                        href="https://github.com/RBLSNico"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="bg-white/10 p-3 rounded-full hover:bg-white/20 transition-all duration-300 ease-in-out transform hover:scale-110"
                    >
                        <FaGithub className="h-8 w-8 text-white" />
                    </a>
                    <a
                        href="https://drive.google.com/file/d/1nqemKt1QhPeoC9v5YQE6GbrCAuG-Y_7q/view?usp=sharing"
                        className="flex items-center text-white font-semibold rounded-3xl bg-white/10 px-5 py-3 transform hover:bg-white/20 transition-all duration-300 ease-in-out hover:scale-105"
                    >
                        <FaDownload className="mr-2" />
                        Resume
                    </a>
                    <a
                        href="mailto:roblesgabrielnicolas@gmail.com"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="bg-white/10 p-3 rounded-full hover:bg-white/20 transition-all duration-300 ease-in-out transform hover:scale-110"
                    >
                        <FaEnvelope className="h-8 w-8 text-white" />
                    </a>
                </div>
            </div>
        </section>
    );
};

export default HomeSection;