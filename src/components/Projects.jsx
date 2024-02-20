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
                                        href='#'
                                        target='_blank'
                                        rel='noopener noreferrer'
                                        id='code'
                                    >
                                        <img 
                                            src='/code.png' 
                                            alt='Code Link' 
                                            className='code-icon'
                                            height='30px'
                                            width='30px'
                                        />
                                        <img 
                                            src='/code-hover.png' 
                                            alt='Code Link' 
                                            className='code-hover-icon'
                                            height='30px'
                                            width='30px'
                                        />
                                    </a>
                                </div>
                                <div className='live-link'>
                                    <span>Live Demo</span>
                                    <a 
                                        href='#'
                                        target='_blank'
                                        rel='noopener noreferrer'
                                        id='open-new'
                                    >
                                        <img 
                                            src='/open-new.png' 
                                            alt='Open in new window' 
                                            className='open-new-icon'
                                            height='30px'
                                            width='30px'
                                        />
                                        <img 
                                            src='/open-new-hover.png' 
                                            alt='Open in new window' 
                                            className='open-new-hover-icon'
                                            height='30px'
                                            width='30px'
                                        />
                                    </a>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
}