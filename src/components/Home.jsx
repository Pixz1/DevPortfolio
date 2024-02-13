import './Home.css'

export default function Home() {
    return (
        <section id='home'>
            <div className='home-container'>
                <div className='home-content'>
                    <div className='hero-heading'>
                        <h1>Hello there, I'm Dehong Xu </h1>
                    </div>
                    <div className='hero-info'>
                        <p>An aspiring fullstack developer, currently focusing on mastering front-end developement.</p>
                    </div>
                    <div className='hero-icons'>
                        <a 
                            href='https://www.linkedin.com/in/dehong-xu'
                            target='_blank'
                            rel='noopener noreferrer'
                            id='linked'
                        >
                            <img src='/linked.png' alt='LinkedIn' className='linked-icon'/>
                            <img src='/linked-hover.png' alt='LinkedIn' className='linked-hover-icon'/>
                        </a>
                        <a
                            href='https://github.com/Pixz1'
                            target='_blank'
                            rel='noopener noreferrer'
                            id='github'
                        >
                            <img src='/github.png' alt='GitHub' className='github-icon'/>
                            <img src='/github-hover.png' alt='GitHub' className='github-hover-icon'/>
                        </a>
                    </div>
                    <div className='hero-info'>
                        <p>Current Tech Stack</p>
                        <ul className='tech-icons'>
                            <li className='tech-icon'><img src='https://skillicons.dev/icons?i=html'/></li>
                            <li className='tech-icon'><img src='https://skillicons.dev/icons?i=css'/></li>
                            <li className='tech-icon'><img src='https://skillicons.dev/icons?i=js'/></li>
                            <li className='tech-icon'><img src='https://skillicons.dev/icons?i=react'/></li>
                        </ul>
                    </div> 
                </div>
            </div>
        </section>
    )
}