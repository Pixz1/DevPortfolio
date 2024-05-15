import { aboutInfo, techStack } from "../../constants";
import "./About.css";

export default function About() {
    return (
        <section id="about">
            <div className="about-container">
                <div className="about-heading">
                    <h1>About Me</h1>
                </div>

                <div className="about-info">
                    <p>{aboutInfo}</p>
                </div>

                <div className="about-tech">
                    <p>Current Tech Stack</p>
                    <ul className="tech-icons">
                        {techStack.map((tech, index) => (
                            <li key={index} className="tech-icon">
                                <img src={tech.iconUrl} alt={tech.altText} />
                            </li>
                        ))}
                    </ul>
                </div>
            </div>
        </section>
    );
}
