import { useState } from "react";

import "./Projects.css";
import { Github, ProjectLink, LeftChev, RightChev } from "../Icons";
import { projects } from "../../constants";

export default function Projects() {
    const [projectIndex, setProjectIndex] = useState(0);

    const handlePrevProject = () => {
        if (projectIndex > 0) {
            setProjectIndex(projectIndex - 1);
        } else {
            setProjectIndex(projects.length - 1);
        }
    };

    const handleNextProject = () => {
        if (projectIndex < projects.length - 1) {
            setProjectIndex(projectIndex + 1);
        } else {
            setProjectIndex(0);
        }
    };

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
                                src={projects[projectIndex].imgSrc}
                                alt="project image"
                                className="project-img"
                            />
                        </div>

                        <div className="project-details">
                            <div className="title">
                                <h2>{projects[projectIndex].title}</h2>
                            </div>

                            <hr className="project-divider" />

                            <div className="description">
                                <p>{projects[projectIndex].description}</p>
                            </div>

                            <div className="links">
                                <div className="link">
                                    <span>Code</span>
                                    <Github
                                        width={25}
                                        height={25}
                                        link={projects[projectIndex].link1}
                                    />
                                </div>

                                <div className="link">
                                    <span>Live Demo</span>
                                    <ProjectLink
                                        link={projects[projectIndex].link2}
                                    />
                                </div>
                            </div>
                        </div>
                    </div>
                </div>

                <div className="chevron">
                    <LeftChev handleClick={handlePrevProject} />
                    <RightChev handleClick={handleNextProject} />
                </div>
            </div>
        </section>
    );
}
