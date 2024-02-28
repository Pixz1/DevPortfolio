import './Contact.css'
import React, { useState, useRef, useEffect } from 'react'

export default function Contact() {

    const [showForm, setShowForm] = useState(false)
    const formRef = useRef(null)

    const handleToggle = () => {
        setShowForm(!showForm) 

        if (!showForm && formRef.current) {
            // needs timer to adjust for delay in rendering and css change
            setTimeout(() => {
                formRef.current.scrollIntoView({ behavior: 'smooth' })
            }, 50)
        }
    }

    // resets form when redirected by formspree
    useEffect(() => {
        window.onbeforeunload = () => {
            for (const form of document.getElementsByTagName('form'))
            {
                form.reset()
            }
        }

        return () => {
            window.onbeforeunload = null
        }
    }, [])

    return (
        <section id='contact'>
            <div className='contact-container'>
                <div className='contact-heading'> 
                    <h1>Contact</h1>
                </div>
                <div className='contact-content'>
                    <h3>Feel free to get in contact with me via email below </h3>   
                </div>
                <div className="contact-email">
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
                    <div className="contact__info">
                        <h3>Mail</h3>
                        <a href="mailto:dehong.xu@outlook.com">dehong.xu@outlook.com</a>
                    </div>
                </div>
                <div className='form-title'>
                    <h3>Prefer a contact form?</h3>   
                    <label class="switch">
                        <input type="checkbox" onChange={handleToggle}/>
                        <span class="slider round"/>
                    </label>
                </div>
                <div className={`form-content ${showForm ? 'show' : ''}`} ref={formRef}>
                    <form action='https://formspree.io/f/xoqgwwoe' method='post'>
                        <div className='form-field'>
                            <label className='form-label' for='name'>Name</label>
                            <input id='name' className='form-input' required placeholder='Enter Your Name' type='text' name='name'/>
                        </div>
                        <div className='form-field'>
                            <label className='form-label' for='email'>Email</label>
                            <input id='email' className='form-input' required placeholder='Enter Your Email' type='email' name='email'/>
                        </div>
                        <div className='form-field'>
                            <label className='form-label' for='message'>Message</label>
                            <textarea id='message' className='form-input' required placeholder='Enter Your Message' name='message' 
                                rows='7'
                            />
                        </div>
                        <button className='submit-btn' type='submit'>Submit</button>
                    </form>
                </div>
            </div>
        </section>
    )
}