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
                        development. Check out the Projects section below for some examples.
                    </p>
                </div>
                <div className='about-tech'>
                    <p>Current Tech Stack</p>
                    <ul className='tech-icons'>
                        <li className='tech-icon'><img src='https://skillicons.dev/icons?i=html'/></li>
                        <li className='tech-icon'><img src='https://skillicons.dev/icons?i=css'/></li>
                        <li className='tech-icon'><img src='https://skillicons.dev/icons?i=js'/></li>
                        <li className='tech-icon'><img src='https://skillicons.dev/icons?i=react'/></li>
                    </ul>
                </div> 
            </div>
        </section>
    )
}