import "./Sidebar.css";

const Sidebar = ({ activeSideLink, handleSideLinkClick }) => {
    return (
        <div className="sidebar">
            <a
                href="#home"
                className={`side-links ${
                    activeSideLink === "#home" ? "active" : ""
                }`}
                onClick={() => handleSideLinkClick("#home")}
                data-text="Home"
            />
            <a
                href="#about"
                className={`side-links ${
                    activeSideLink === "#about" ? "active" : ""
                }`}
                onClick={() => handleSideLinkClick("#about")}
                data-text="About"
            />
            <a
                href="#projects"
                className={`side-links ${
                    activeSideLink === "#projects" ? "active" : ""
                }`}
                onClick={() => handleSideLinkClick("#projects")}
                data-text="Projects"
            />
            <a
                href="#contact"
                className={`side-links ${
                    activeSideLink === "#contact" ? "active" : ""
                }`}
                onClick={() => handleSideLinkClick("#contact")}
                data-text="Contact"
            />
        </div>
    );
};

export default Sidebar;
