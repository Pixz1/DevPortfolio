import './Footer.css'

export default function Footer() {

    const year = new Date().getFullYear();

    return (
        <div className='footer'>
            <h3>Copyright © {year}. All rights are reserved</h3>
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
    )
}