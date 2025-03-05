import { useEffect, useState } from "react";
import { Moon, Sun } from "lucide-react";

const DarkModeToggle: React.FC = () => {
    const [darkMode, setDarkMode] = useState<boolean | null>(null);

    useEffect(() => {
        const storedTheme = localStorage.getItem("theme");
        const prefersDark = window.matchMedia("(prefers-color-scheme: dark)").matches; // Define it here

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

    if (darkMode === null) return null; // Prevent rendering until hydration is complete

    return (
        <button
            onClick={toggleDarkMode}
            className="p-2 rounded-full bg-gray-200 dark:bg-[#001F3F] text-[#001F3F] cursor-pointer dark:text-white transition-all duration-300 hover:rotate-20"
        >
            {darkMode ? <Sun size={20} /> : <Moon size={20} />}
        </button>
    );
};

export default DarkModeToggle;
