import "./Projects.css";
import { Github } from "../Icons";

export default function Projects() {
    return (
        <section id="projects">
            <div className="projects-container">
                <div className="projects-heading">
                    <h1>Projects</h1>
                </div>

                <div className="projects-content">
                    <div className="project-container">
                        <div className="img-container">
                            <img
                                src="/DevPortfolio/quiz-main.PNG"
                                alt="project image"
                                className="project-img"
                            />
                        </div>

                        <div className="project-details">
                            <div className="title">
                                <h2>Quizzy Time</h2>
                            </div>

                            <hr className="project-divider" />

                            <div className="description">
                                <p>
                                    Quizzy Time is a simple quiz web
                                    application, built with react using api from
                                    opentdb. Currently it has the following
                                    features: quiz progression, timer, hint, and
                                    navigation between questions.
                                </p>
                            </div>

                            <div className="links">
                                <div className="link">
                                    <span>Code</span>
                                    <Github />
                                </div>

                                <div className="link">
                                    <span>Live Demo</span>
                                    <a
                                        href="#"
                                        target="_blank"
                                        rel="noopener noreferrer"
                                    >
                                        <svg
                                            width="35px"
                                            height="35px"
                                            viewBox="0 0 24 24"
                                            fill="none"
                                            xmlns="http://www.w3.org/2000/svg"
                                            className="new-window-svg"
                                        >
                                            <path
                                                d="M5 12V6C5 5.44772 5.44772 5 6 5H18C18.5523 5 19 5.44772 19 6V18C19 18.5523 18.5523 19 18 19H12M8.11111 12H12M12 12V15.8889M12 12L5 19"
                                                stroke="#464455"
                                                stroke-linecap="round"
                                                stroke-linejoin="round"
                                            />
                                        </svg>
                                    </a>
                                    <span className="tooltip-text">
                                        Link currently not available
                                    </span>
                                </div>
                            </div>
                        </div>
                    </div>

                    <div className="soon-tm">
                        <h2>More projects coming soon...</h2>
                    </div>
                </div>
            </div>
        </section>
    );
}
