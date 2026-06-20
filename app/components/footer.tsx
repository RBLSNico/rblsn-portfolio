import { FaLinkedin, FaGithub } from "react-icons/fa";
import { MapPin, Send } from 'lucide-react';

const Footer = () => {
    return (
        <footer className="border-t-3 border-[var(--border-brutal)] bg-[var(--surface)] mt-12 w-full min-w-0 overflow-hidden">
            <div className="container mx-auto px-4 py-10 grid md:grid-cols-2 gap-8 items-start w-full min-w-0">
                <div className="space-y-4 text-center md:text-left">
                    <div className="flex items-center justify-center md:justify-start gap-2">
                        <span className="mono-label">FOOTER</span>
                    </div>
                    <h3 className="display-title text-2xl">Gabriel Nicolas Robles</h3>
                    <div className="flex items-center justify-center md:justify-start gap-2">
                        <MapPin className="h-4 w-4" />
                        <span className="font-[family-name:var(--font-ibm-plex-mono)] text-xs uppercase tracking-widest">Philippines</span>
                    </div>
                    <p className="text-[var(--muted-foreground)] max-w-xs mx-auto md:mx-0 text-sm">
                        Motivated developer committed to continuous learning and driven by solving real-world problems.
                    </p>
                </div>

                <div className="space-y-4 text-center md:text-right">
                    <span className="mono-label">GET_IN_TOUCH</span>
                    <div className="flex justify-center md:justify-end py-4 gap-3">
                        <a
                            href="https://www.linkedin.com/in/gabriel-nicolas-robles-b2027b24b/"
                            target="_blank"
                            rel="noopener noreferrer"
                            className="brutal-btn brutal-btn-outline !p-3"
                            aria-label="LinkedIn"
                        >
                            <FaLinkedin />
                        </a>
                        <a
                            href="https://github.com/RBLSNico"
                            target="_blank"
                            rel="noopener noreferrer"
                            className="brutal-btn brutal-btn-outline !p-3"
                            aria-label="GitHub"
                        >
                            <FaGithub />
                        </a>
                    </div>
                    <a
                        href="mailto:roblesgabrielnicolas@gmail.com"
                        className="inline-flex flex-wrap items-center justify-center md:justify-end gap-1 font-[family-name:var(--font-ibm-plex-mono)] text-[0.65rem] sm:text-xs uppercase tracking-wide sm:tracking-widest hover:text-[var(--accent-2)] transition-colors break-all max-w-full"
                    >
                        <Send className="h-4 w-4 shrink-0" />
                        roblesgabrielnicolas@gmail.com
                    </a>
                </div>
            </div>

            <div className="border-t-3 border-[var(--border-brutal)] bg-[var(--accent)] text-[var(--accent-foreground)] px-4">
                <p className="text-center py-3 font-[family-name:var(--font-ibm-plex-mono)] text-[0.55rem] sm:text-[0.65rem] uppercase tracking-wide sm:tracking-widest font-bold break-words leading-relaxed">
                    © {new Date().getFullYear()} GABRIEL NICOLAS LABUTAP ROBLES — ALL_RIGHTS_RESERVED — RBLSN.DEV
                </p>
            </div>
        </footer>
    );
};

export default Footer;
