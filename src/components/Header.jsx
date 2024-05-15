import "./Header.css";
import React, { useState, useEffect } from "react";

import ThemeSwitcher from "./ThemeSwitcher";
import { links } from "../constants";

export default function Header() {
    // open/close menu (mobile)
    const [menuOpen, setMenuOpen] = useState(false);
    const toggleMenu = () => {
        setMenuOpen(!menuOpen);
    };

    // useEffect to toggles scrollbar based on menuOpen state
    const toggleBodyScroll = (disableScroll) => {
        if (disableScroll) document.body.style.overflow = "hidden";
        else document.body.style.overflow = "auto";
    };
    useEffect(() => {
        // limits scrollbar to only lower screen medias
        const handleResize = () => {
            if (window.matchMedia("(max-width: 768px)").matches) {
                toggleBodyScroll(menuOpen);
            }
        };

        handleResize();
        window.addEventListener("resize", handleResize);

        return () => window.removeEventListener("resize", handleResize);
    }, [menuOpen]);

    return (
        <div className="navbar">
            <nav>
                <a href="#">
                    <h2>davo.dev</h2>
                </a>

                <ul className={`nav-links ${menuOpen ? "active" : ""}`}>
                    <ThemeSwitcher />
                    {links.map((link, index) =>
                        <a
                            key={index}
                            href={link.href}
                            className={link.className}
                            onClick={eval(link.onClick)}
                        >{link.linkName}</a>
                    )}
                </ul>
                
                <div
                    className={`hamburger ${menuOpen ? "active" : ""}`}
                    onClick={toggleMenu}
                >
                    <span className="bar"></span>
                    <span className="bar"></span>
                    <span className="bar"></span>
                </div>
            </nav>
        </div>
    );
}
