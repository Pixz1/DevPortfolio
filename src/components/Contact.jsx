import './Contact.css'

export default function Contact() {
    return (
        <section id='contact'>
            <div className='contact-container'>
                <div className='contact-heading'> 
                    <h1>Contact</h1>
                </div>
                <div className='contact-content'>
                    <h3>Feel free to get in contact with me via email below </h3>   
                </div>
                <div class="contact-box">
                    <span className='contact-span'>
                        <svg 
                            xmlns="http://www.w3.org/2000/svg" 
                            width="30" 
                            height="30" 
                            viewBox="0 0 24 24" 
                            fill="none" 
                            stroke="currentColor" 
                            stroke-width="2" 
                            stroke-linecap="round" 
                            stroke-linejoin="round" 
                            class="tabler-icon tabler-icon-mail"
                        >
                            <path d="M3 7a2 2 0 0 1 2 -2h14a2 2 0 0 1 2 2v10a2 2 0 0 1 -2 2h-14a2 2 0 0 1 -2 -2v-10z"></path>
                            <path d="M3 7l9 6l9 -6"></path>
                        </svg>
                    </span>
                    <div class="contact__info">
                        <h3>Mail</h3>
                        <a href="mailto:dehong.xu@outlook.com">dehong.xu@outlook.com</a>
                    </div>
                </div>
            </div>
        </section>
    )
}