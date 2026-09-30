'use client'
import React, { useState, useEffect } from 'react';
import DarkModeToggle from './darkmodetoggle';

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

    useEffect(() => {
        const handleScroll = () => {
            const scrollPosition = window.scrollY;

            const sections = navLinks.map(link => {
                const section = document.getElementById(link.sectionId);
                if (!section) return { id: link.href, position: Infinity };

                const rect = section.getBoundingClientRect();
                const offset = 100;
                return {
                    id: link.href,
                    position: rect.top + scrollPosition - offset
                };
            });

            sections.sort((a, b) => a.position - b.position);

            for (let i = 0; i < sections.length; i++) {
                if (i === sections.length - 1 || (sections[i].position <= scrollPosition && sections[i + 1].position > scrollPosition)) {
                    setActiveLink(sections[i].id);
                    break;
                }
            }
        };

        window.addEventListener('scroll', handleScroll);
        handleScroll();

        return () => {
            window.removeEventListener('scroll', handleScroll);
        };
    }, []);

    useEffect(() => {
        document.documentElement.style.overflow = isMobileMenuOpen ? 'hidden' : '';
        document.body.style.overflow = isMobileMenuOpen ? 'hidden' : '';
        return () => {
            document.documentElement.style.overflow = '';
            document.body.style.overflow = '';
        };
    }, [isMobileMenuOpen]);

    const handleLinkClick = (e: React.MouseEvent<HTMLAnchorElement>, link: string): void => {
        e.preventDefault();

        const section = document.getElementById(link.replace('#', ''));
        if (section) {
            section.scrollIntoView({ behavior: 'smooth' });
            setActiveLink(link);
            setIsMobileMenuOpen(false);
        }
    };

    useEffect(() => {
        const handleClickOutside = (event: MouseEvent) => {
            const target = event.target as HTMLElement;
            if (isMobileMenuOpen && !target.closest('.header-wrapper')) {
                setIsMobileMenuOpen(false);
            }
        };

        document.addEventListener('mousedown', handleClickOutside);
        return () => {
            document.removeEventListener('mousedown', handleClickOutside);
        };
    }, [isMobileMenuOpen]);

    const linkClass = (href: string, mobile = false) =>
        `font-[family-name:var(--font-ibm-plex-mono)] text-xs font-bold uppercase tracking-widest transition-all duration-100 ${mobile ? 'block w-full text-center px-3 py-3 border border-[var(--border-brutal)]' : 'px-2 py-2'
        } ${activeLink === href
            ? 'bg-[var(--surface-2)] text-[var(--foreground)]'
            : 'bg-transparent hover:bg-[var(--surface-2)]'
        }`;

    return (
        <div className={`header-wrapper ${isMobileMenuOpen ? 'fixed inset-x-0 top-0' : 'sticky top-0'} z-50 mx-auto w-full max-w-[1140px] min-w-0`}>
            <header className="brutal-box flex flex-row items-center justify-between gap-2 px-3 sm:px-4 py-3 bg-[var(--surface)] w-full min-w-0">
                <div className="flex items-center gap-2 min-w-0 flex-1 overflow-hidden">
                    <a href="#home" className="font-[family-name:var(--font-ibm-plex-mono)] text-[0.65rem] sm:text-xs font-bold uppercase tracking-widest truncate">
                        RBLSN<span className="text-[var(--accent-2)]">.DEV</span>
                    </a>
                </div>

                <nav className="hidden md:flex items-center gap-1.5 shrink-0">
                    {navLinks.map((link) => (
                        <a
                            key={link.href}
                            href={link.href}
                            className={linkClass(link.href)}
                            onClick={(e) => handleLinkClick(e, link.href)}
                        >
                            {link.label}
                        </a>
                    ))}
                </nav>

                <div className="flex items-center gap-2 shrink-0">
                    <DarkModeToggle />
                    <button
                        type="button"
                        className="md:hidden brutal-btn brutal-btn-outline !p-2 !text-[0.65rem] !shadow-[2px_2px_0_var(--border-brutal)]"
                        onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
                        aria-expanded={isMobileMenuOpen}
                        aria-label="Toggle navigation menu"
                    >
                        {isMobileMenuOpen ? "[ X ]" : "[ ≡ ]"}
                    </button>
                </div>
            </header>

            {isMobileMenuOpen && (
                <div className=" absolute top-full left-0 right-0 mt-2 brutal-box z-40 bg-[var(--surface)] w-full max-w-full">
                    <nav className="p-3 flex flex-col gap-2">
                        {navLinks.map((link) => (
                            <a
                                key={link.href}
                                href={link.href}
                                className={linkClass(link.href, true)}
                                onClick={(e) => handleLinkClick(e, link.href)}
                            >
                                {link.label}
                                {activeLink === link.href && " ←"}
                            </a>
                        ))}
                    </nav>
                </div>
            )}
        </div>
    );
};

export default Header;
