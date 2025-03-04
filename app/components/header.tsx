'use client'
import React, { useState, useEffect, useRef } from 'react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import DarkModeToggle from './darkmodetoggle';

gsap.registerPlugin(ScrollTrigger);

// Define interface for link items
interface NavLink {
    href: string;
    label: string;
    sectionId: string;
}

const navLinks: NavLink[] = [
    { href: "#home", label: "HOME", sectionId: "home" },
    { href: "#about", label: "ABOUT", sectionId: "about" },
    { href: "#projects", label: "WORKS", sectionId: "projects" },
    { href: "#contact", label: "CONTACT", sectionId: "contact" }
];

const Header: React.FC = () => {
    const [activeLink, setActiveLink] = useState<string>('');
    const [isMobileMenuOpen, setIsMobileMenuOpen] = useState<boolean>(false);
    const headerRef = useRef<HTMLDivElement>(null);

    useEffect(() => {
        if (!headerRef.current) return;

        // Create a scroll-based width animation
        const updateHeaderSize = () => {
            const scrollPosition = window.scrollY;

            if (scrollPosition === 0) {
                // At the top of the page, reset to full width
                gsap.to(headerRef.current, {
                    width: '100%',
                    duration: 0.3,
                    ease: 'power2.out'
                });
            } else {
                // When scrolled, reduce width
                gsap.to(headerRef.current, {
                    width: '40%',
                    duration: 0.3,
                    ease: 'power2.out'
                });
            }
        };

        // Initial sizing
        updateHeaderSize();

        // Add scroll event listener
        window.addEventListener('scroll', updateHeaderSize);

        // Create ScrollTrigger for additional responsiveness
        ScrollTrigger.create({
            trigger: document.body,
            start: 'top top',
            end: 'bottom bottom',
            onUpdate: (self) => {
                if (headerRef.current) {
                    const progress = self.progress;
                    const currentWidth = gsap.getProperty(headerRef.current, 'width');

                    // Dynamically adjust width based on scroll progress
                    if (progress > 0) {
                        gsap.to(headerRef.current, {
                            width: '40%',
                            duration: 0.3,
                            ease: 'power2.out'
                        });
                    }
                }
            }
        });

        // Cleanup
        return () => {
            window.removeEventListener('scroll', updateHeaderSize);
            ScrollTrigger.getAll().forEach(trigger => trigger.kill());
        };
    }, []);

    // Function to handle scroll and update active link
    useEffect(() => {
        const handleScroll = () => {
            const scrollPosition = window.scrollY;

            // Find which section is currently visible
            const sections = navLinks.map(link => {
                const section = document.getElementById(link.sectionId);
                if (!section) return { id: link.href, position: Infinity };

                const rect = section.getBoundingClientRect();
                const offset = 100; // Adjust this value based on when you want the highlight to change
                return {
                    id: link.href,
                    position: rect.top + scrollPosition - offset
                };
            });

            // Sort sections by position
            sections.sort((a, b) => a.position - b.position);

            // Find the current active section
            for (let i = 0; i < sections.length; i++) {
                if (i === sections.length - 1 || (sections[i].position <= scrollPosition && sections[i + 1].position > scrollPosition)) {
                    setActiveLink(sections[i].id);
                    break;
                }
            }
        };

        // Add scroll event listener
        window.addEventListener('scroll', handleScroll);

        // Call once to set initial active link
        handleScroll();

        // Clean up event listener
        return () => {
            window.removeEventListener('scroll', handleScroll);
        };
    }, []);

    // Handle link click with navigation
    const handleLinkClick = (e: React.MouseEvent<HTMLAnchorElement>, link: string): void => {
        e.preventDefault();

        // Get the section element
        const section = document.getElementById(link.replace('#', ''));
        if (section) {
            // Scroll to the section
            section.scrollIntoView({ behavior: 'smooth' });

            // Update active link
            setActiveLink(link);

            // Close mobile menu
            setIsMobileMenuOpen(false);
        }
    };

    // Close mobile menu when clicking outside
    useEffect(() => {
        const handleClickOutside = (event: MouseEvent) => {
            const target = event.target as HTMLElement;
            if (isMobileMenuOpen && !target.closest('header') && !target.closest('.mobile-menu')) {
                setIsMobileMenuOpen(false);
            }
        };

        document.addEventListener('mousedown', handleClickOutside);
        return () => {
            document.removeEventListener('mousedown', handleClickOutside);
        };
    }, [isMobileMenuOpen]);

    return (
        <>
            <header
                ref={headerRef}
                className="w-full sticky top-4 mx-auto flex flex-row items-center justify-between px-3 py-4 backdrop-blur-lg bg-white/30 rounded-full border border-(--primary-blue) shadow-md z-50 transition-all duration-300 hover:shadow-lg"
            >
                <div className="lg:hidden flex items-center justify-center ml-2">
                    {/* <img src="/svg/rblsn.svg" alt="RBLS logo" className="w-10 h-10" /> */}
                    <DarkModeToggle />
                </div>

                <nav className="hidden lg:flex items-center justify-between w-full px-5">
                    <div className="flex space-x-8">
                        {navLinks.slice(0, 2).map((link: NavLink) => (
                            <a
                                key={link.href}
                                href={link.href}
                                className={`text-[var(--primary-blue)] font-semibold text-md transition-all duration-200 hover:text-blue-800 dark:hover:text-[#EAD8B1] hover:scale-105 relative after:absolute after:bottom-0 after:left-0 after:h-0.5 after:w-0 after:bg-blue-800 dark:after:bg-[#EAD8B1] after:transition-all after:duration-300 hover:after:w-full ${activeLink === link.href ? "text-blue-800 dark:text-[#EAD8B1] after:w-full" : ""
                                    }`}
                                onClick={(e) => handleLinkClick(e, link.href)}
                            >
                                {link.label}
                            </a>
                        ))}
                    </div>

                    <div className="flex items-center justify-center mx-4">
                        {/* <img
                            src="/svg/rblsn.svg"
                            alt="RBLS logo"
                            className="w-10 h-10 transition-transform duration-300 hover:rotate-12"
                        /> */}
                        <DarkModeToggle />
                    </div>

                    <div className="flex space-x-8">
                        {navLinks.slice(2, 4).map((link: NavLink) => (
                            <a
                                key={link.href}
                                href={link.href}
                                className={`text-[var(--primary-blue)] font-semibold text-md transition-all duration-200 hover:text-blue-800 dark:hover:text-[#EAD8B1] hover:scale-105 relative after:absolute after:bottom-0 after:left-0 after:h-0.5 after:w-0 after:bg-blue-800 dark:after:bg-[#EAD8B1] after:transition-all after:duration-300 hover:after:w-full ${activeLink === link.href ? "text-blue-800 dark:text-[#EAD8B1] after:w-full" : ""
                                    }`}
                                onClick={(e) => handleLinkClick(e, link.href)}
                            >
                                {link.label}
                            </a>
                        ))}
                    </div>
                </nav>

                {/* Mobile menu button */}
                <button
                    className="lg:hidden text-[var(--primary-blue)] focus:outline-none p-2 transition-transform duration-300"
                    onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
                    aria-expanded={isMobileMenuOpen}
                    aria-label="Toggle navigation menu"
                >
                    {isMobileMenuOpen ? (
                        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" className="w-6 h-6">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                        </svg>
                    ) : (
                        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" className="w-6 h-6">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16m-7 6h7" />
                        </svg>
                    )}
                </button>
            </header>

            {/* Mobile Menu Dropdown */}
            <div
                className={`mobile-menu lg:hidden fixed top-20 left-4 right-4 rounded-xl backdrop-blur-lg bg-white/90 shadow-lg z-40 border border-[var(--primary-blue)] transition-all duration-300 ${isMobileMenuOpen
                    ? 'opacity-100 translate-y-0'
                    : 'opacity-0 -translate-y-4 pointer-events-none'
                    }`}
            >
                <nav className="p-6 flex flex-col space-y-4">
                    {navLinks.map((link: NavLink) => (
                        <a
                            key={link.href}
                            href={link.href}
                            className={`text-[#001F3F] font-semibold text-lg py-2 transition-all duration-200 border-b border-gray-200 last:border-b-0 hover:pl-2 active:text-blue-800 ${activeLink === link.href ? "text-blue-800 font-bold" : ""
                                }`}
                            onClick={(e) => handleLinkClick(e, link.href)}
                        >
                            <span className="flex justify-between items-center">
                                {link.label}
                                {activeLink === link.href && (
                                    <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                                    </svg>
                                )}
                            </span>
                        </a>
                    ))}
                </nav>
            </div>
        </>
    );
};

export default Header;