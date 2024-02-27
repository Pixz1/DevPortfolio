import './Projects.css'

export default function Projects() {
    return (
        <section id='projects'>
            <div className='projects-container'>
                <div className='projects-heading'> 
                    <h1>Projects</h1>
                </div>
                <div className='projects-content'>
                    <div className='project-container'>
                        <div className='img-container'>
                            <img src='/quiz-main.PNG' alt='project image' className='project-img'/>
                        </div>
                        <div className='project-details'>
                            <div className='title'>
                                <h2>Quizzy Time</h2>
                            </div>
                            <hr className='project-divider'/>
                            <div className='description'>
                                <p>
                                    Quizzy Time is a simple quiz web application, built with react using api from opentdb. Currently it
                                    has the following features: quiz progression, timer, hint, and navigation between questions.
                                </p>
                            </div>
                            <div className='links'>
                                <div className='code-link'>
                                    <span>Code</span>
                                    <a 
                                        href='https://github.com/Pixz1/quiz-app'
                                        target='_blank'
                                        rel='noopener noreferrer'
                                    >
                                        <svg 
                                            xmlns="http://www.w3.org/2000/svg" 
                                            width="25" 
                                            height="25" 
                                            viewBox="0 0 24 24"
                                            className='github-svg'
                                        >
                                            <path 
                                                d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z"
                                            />
                                        </svg>
                                    </a>
                                </div>
                                <div className='live-link'>
                                    <span>Live Demo</span>
                                    <a 
                                        href='#'
                                        target='_blank'
                                        rel='noopener noreferrer'
                                    >
                                        <svg 
                                            width="35px" 
                                            height="35px" 
                                            viewBox="0 0 24 24" 
                                            fill="none" 
                                            xmlns="http://www.w3.org/2000/svg"
                                            className='new-window-svg'
                                        >
                                            <path 
                                                d="M5 12V6C5 5.44772 5.44772 5 6 5H18C18.5523 5 19 5.44772 19 6V18C19 18.5523 18.5523 19 18 19H12M8.11111 12H12M12 12V15.8889M12 12L5 19" 
                                                stroke="#464455" 
                                                stroke-linecap="round" 
                                                stroke-linejoin="round"
                                            />
                                        </svg>
                                    </a>
                                    <span className='tooltip-text'>
                                        Link currently not available
                                    </span>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className='soon-tm'>
                        <h2>More projects coming soon...</h2>
                    </div>
                </div>
            </div>
        </section>
    )
}