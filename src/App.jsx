import { React, useState, useEffect } from "react";

import "./App.css";
import Header from "./components/Header/Header";
import Home from "./components/Home/Home";
import About from "./components/About/About";
import Projects from "./components/Projects/Projects";
import Contact from "./components/Contact/Contact";
import Footer from "./components/Footer/Footer";
import Sidebar from "./components/Sidebar/Sidebar";

const sections = ["#home", "#about", "#projects", "#contact"];

// Debounce function
function debounce(func, delay) {
    let timer;
    return function (...args) {
        clearTimeout(timer);
        timer = setTimeout(() => func.apply(this, args), delay);
    };
}

function App() {
    // Handles side links
    const [activeSideLink, setActiveSideLink] = useState("#home");
    const handleSideLinkClick = (link) => {
        setActiveSideLink(link);
        document.querySelector(link).scrollIntoView({ behavior: "smooth" });
    };

    // Sets up section scrolling for scrollwheel
    const handleWheel = debounce((e) => {
        const currentIndex = sections.indexOf(activeSideLink);

        if (e.deltaY > 0 && currentIndex < sections.length - 1) {
            // Scroll down
            const nextSection = sections[currentIndex + 1];
            setActiveSideLink(nextSection);
            document
                .querySelector(nextSection)
                .scrollIntoView({ behavior: "smooth" });
        } else if (e.deltaY < 0 && currentIndex > 0) {
            //  Scroll up
            const prevSection = sections[currentIndex - 1];
            setActiveSideLink(prevSection);
            document
                .querySelector(prevSection)
                .scrollIntoView({ behavior: "smooth" });
        }
    }, 100);

    // Sets up section scrolling for up & down key
    const handleKeys = (e) => {
        if (e.key === "ArrowUp" || e.key === "ArrowDown") {
            e.preventDefault(); // Prevents default behaviour of arrow keys
            const currentIndex = sections.indexOf(activeSideLink);
            let nextIndex;

            if (e.key === "ArrowUp") {
                nextIndex = Math.max(currentIndex - 1, 0); // Ensure index !< 0
            } else {
                nextIndex = Math.min(currentIndex + 1, sections.length - 1); // Ensure index !> section length
            }

            const nextSection = sections[nextIndex];
            setActiveSideLink(nextSection);
            document
                .querySelector(nextSection)
                .scrollIntoView({ behavior: "smooth" });
        }
    };
    // Calls the section scrolling
    useEffect(() => {
        window.addEventListener("wheel", handleWheel);
        window.addEventListener("keydown", handleKeys);

        // Clean up event listener after dismount
        return () => {
            window.removeEventListener("wheel", handleWheel);
            window.removeEventListener("keydown", handleKeys);
        };
    }, [activeSideLink]);

    return (
        <>
            <Header />
            <Sidebar
                activeSideLink={activeSideLink}
                handleSideLinkClick={handleSideLinkClick}
            />
            <Home />
            <About />
            <Projects />
            <Contact />
            <Footer />
        </>
    );
}

export default App;
