import React from 'react'
import Header from '../components/Header'
import Contact from '../components/Contact'

const ContactPage = () => {
    return (
        <>
            <div className='bg-container'><div className='bg' /></div>
            <div className="App" >
                <div className='header-wrapper'><Header page='contact' /></div>
                <div style={{ overflow: 'hidden' , width: '100%' , height: 'calc(100vh - 125px)'}}><Contact /></div>
            </div>
        </>
    )
}

export default ContactPage
