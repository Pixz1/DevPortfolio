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
                        I am an aspiring fullstack developer, currently focusing on mastering front-end 
                        development. I'm open to job opportunities where i can contribute, learn and grow. If you
                        think you have a good opportunity for me then don't hesitate to contact me
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