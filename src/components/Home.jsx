import './Home.css'

export default function Home() {
    return (
        <section id='home'>
            <div className='home-container'>
                <div className='home-content-top'>
                    <div className='hero-heading'>
                        <h1>Hello I'm<br/> <span className='heading-second-line'>Dehong Xu</span></h1>
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
                </div>
                <div className='home-content-bot'>
                    <div className='hero-info'>
                        <h1>A Front End<br/><span className='info-second-line'>Developer</span></h1>
                    </div>              
                </div>
                <div className='home-content-footer'>
                    <p>Year of the Dragon</p>
                </div>               
            </div>
        </section>
    )
}