import "./App.css";
import React from "react";
import Header from "./components/Header/Header";
import Home from "./components/Home/Home";
import About from "./components/About/About";
import Projects from "./components/Projects/Projects";
import Contact from "./components/Contact/Contact";
import Footer from "./components/Footer/Footer";

function App() {
    return (
        <>
            <Header />
            <Home />
            <About />
            <Projects />
            <Contact />
            <Footer />
        </>
    );
}

export default App;