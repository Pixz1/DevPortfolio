import './About.css'

export default function About() {
    return (
        <section id='about'>
            <div className='about-container'>
                <div className='about-heading'> 
                    <h1>About Me</h1>
                </div>
                <div className='about-info'>
                    <p>
                        I am an aspiring software developer, currently focusing on mastering front-end 
                        development. I'm eager to apply my skills in a collaborative environment where I can
                        learn, grow, and contribute to meaningful projects. If you're looking for a motivated 
                        and adaptable developer, please reach out!
                    </p>
                </div>
                <div className='about-tech'>
                    <p>Current Tech Stack</p>
                    <ul className='tech-icons'>
                        <li className='tech-icon'>
                            <img src='https://skillicons.dev/icons?i=html' alt='Html'/>
                        </li>
                        <li className='tech-icon'>
                            <img src='https://skillicons.dev/icons?i=css' alt='Css'/>
                            </li>
                        <li className='tech-icon'>
                            <img src='https://skillicons.dev/icons?i=js' alt='JavaScript'/>
                        </li>
                        <li className='tech-icon'>
                            <img src='https://skillicons.dev/icons?i=react' alt='React'/>
                        </li>
                    </ul>
                </div> 
            </div>
        </section>
    )
}