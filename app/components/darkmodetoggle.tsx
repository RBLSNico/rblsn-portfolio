import { useEffect, useState } from "react";
import { Moon, Sun } from "lucide-react";

const DarkModeToggle: React.FC = () => {
    const [darkMode, setDarkMode] = useState<boolean | null>(null); // Start as null to avoid SSR mismatch

    useEffect(() => {
        // Access localStorage only in useEffect (client-side)
        const storedTheme = localStorage.getItem("theme") === "dark";
        setDarkMode(storedTheme);

        if (storedTheme) {
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
            className="p-2 rounded-full bg-gray-200 dark:bg-[#001F3F] text-[#001F3F] dark:text-white transition-all"
        >
            {darkMode ? <Sun size={20} /> : <Moon size={20} />}
        </button>
    );
};

export default DarkModeToggle;
