import { techStack } from "../constants";
import "./About.css";

export default function About() {
    return (
        <section id="about">
            <div className="about-container">
                <div className="about-heading">
                    <h1>About Me</h1>
                </div>
                <div className="about-info">
                    <p>
                        I am an aspiring software developer, currently focusing
                        on mastering front-end development. I'm eager to apply
                        my skills in a collaborative environment where I can
                        learn, grow, and contribute to meaningful projects. If
                        you're looking for a motivated and adaptable developer,
                        please reach out!
                    </p>
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
