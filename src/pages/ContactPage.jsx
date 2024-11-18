import React from 'react'
import Header from '../components/Header'
import Contact from '../components/Contact'

const ContactPage = () => {
    return (
        <>
            <div className='bg-container'><div className='bg' /></div>
            <div className="App" >
                <div className='header-wrapper'><Header page='contact' /></div>
                <div className= 'cc-wrapper'><Contact /></div>
            </div>
        </>
    )
}

export default ContactPage
