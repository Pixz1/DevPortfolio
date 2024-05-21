import "./Projects.css";
import { Github, ProjectLink } from "../Icons";

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
                                    <span className="link-span">Code</span>
                                    <Github width={25} height={25} />
                                </div>

                                <div className="link">
                                    <span className="link-span">Live Demo</span>
                                    <ProjectLink link="https://www.google.com/" />
                                </div>
                            </div>
                        </div>
                    </div>

                    {/* <div className="soon-tm">
                        <h2>More projects coming soon...</h2>
                    </div> */}
                </div>
            </div>
        </section>
    );
}
