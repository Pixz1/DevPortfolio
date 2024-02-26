import './Home.css'
import { useState, useEffect } from 'react'

export default function Home() {

    // swaps img src based on colour mode
    const [linkedSrc, setLinkedSrc] = useState('/linked.png')
    const [githubSrc, setGithubSrc] = useState('/github.png')
    const darkModeQuery = window.matchMedia('(prefers-color-scheme: dark)')
    darkModeQuery.addEventListener('change', (event) => {
        if (event.matches) {
            setLinkedSrc('/linked-white.png')
            setGithubSrc('/github-white.png')
        }
        else {
            setLinkedSrc('/linked.png')
            setGithubSrc('/github.png')
        }
    })
    useEffect(() => {
        if (darkModeQuery) {
            setLinkedSrc('/linked-white.png')
            setGithubSrc('/github-white.png')
        }
    }, [])
    
    return (
        <section id='home'>
            <div className='home-container'>
                <div className='home-content-top'>
                    <div className='hero-heading'>
                        <h1>Hello I'm<br/> <span className='top-second-line'>Dehong Xu</span></h1>
                    </div>
                    <div className='hero-icons'>
                        <a 
                            href='https://www.linkedin.com/in/dehong-xu'
                            target='_blank'
                            rel='noopener noreferrer'
                            id='linked'
                        >
                            <img src={linkedSrc} alt='LinkedIn' className='linked-icon'/>
                            <img src='/linked-hover.png' alt='LinkedIn' className='linked-hover-icon'/>
                        </a>
                        <a
                            href='https://github.com/Pixz1'
                            target='_blank'
                            rel='noopener noreferrer'
                            id='github'
                        >
                            <img src={githubSrc} alt='GitHub' className='github-icon'/>
                            <img src='/github-hover.png' alt='GitHub' className='github-hover-icon'/>
                        </a>
                    </div>
                </div>
                <div className='home-content-bot'>
                    <div className='hero-heading'>
                        <h1>A Software<br/><span className='bot-second-line'>Developer</span></h1>
                    </div>              
                </div>
                <div className='home-content-footer'>
                    <p>Year of the Dragon</p>
                </div>               
            </div>
        </section>
    )
}