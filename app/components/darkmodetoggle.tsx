import { useEffect, useState } from "react";
import { Moon, Sun } from "lucide-react";

const DarkModeToggle: React.FC = () => {
    const [darkMode, setDarkMode] = useState<boolean | null>(null);

    useEffect(() => {
        const storedTheme = localStorage.getItem("theme");
        const prefersDark = window.matchMedia("(prefers-color-scheme: dark)").matches;

        if (storedTheme) {
            setDarkMode(storedTheme === "dark");
        } else {
            setDarkMode(prefersDark);
            localStorage.setItem("theme", prefersDark ? "dark" : "light");
        }

        if (storedTheme === "dark" || (!storedTheme && prefersDark)) {
            document.documentElement.classList.add("dark");
        } else {
            document.documentElement.classList.remove("dark");
        }
    }, []);

    const toggleDarkMode = () => {
        const newMode = !darkMode;
        setDarkMode(newMode);
        localStorage.setItem("theme", newMode ? "dark" : "light");

        if (newMode) {
            document.documentElement.classList.add("dark");
        } else {
            document.documentElement.classList.remove("dark");
        }
    };

    if (darkMode === null) return null;

    return (
        <button
            onClick={toggleDarkMode}
            className="p-2 border-2 border-[var(--border-brutal)] bg-[var(--surface-2)] text-[var(--foreground)] cursor-pointer shadow-[2px_2px_0_var(--border-brutal)] hover:bg-[var(--accent)] hover:text-[var(--accent-foreground)] hover:-translate-x-0.5 hover:-translate-y-0.5 hover:shadow-[3px_3px_0_var(--border-brutal)] active:translate-x-0.5 active:translate-y-0.5 active:shadow-none transition-all duration-100"
            aria-label="Toggle dark mode"
        >
            {darkMode ? <Sun size={16} /> : <Moon size={16} />}
        </button>
    );
};

export default DarkModeToggle;
