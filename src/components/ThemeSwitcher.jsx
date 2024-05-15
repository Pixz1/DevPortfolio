import { useEffect, useState } from "react";

const ThemeSwitcher = () => {
    const [theme, setTheme] = useState("dark");

    useEffect(() => {
        document.body.dataset.theme = theme;
    }, [theme]);

    const toggleTheme = () => {
        setTheme(theme === "light" ? "dark" : "light");
    };

    return (
        <button className="theme-toggle" onClick={toggleTheme}>
            Light/Dark
        </button>
    );
};

export default ThemeSwitcher;
