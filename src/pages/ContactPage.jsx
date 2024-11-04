import React from 'react'
import Header from '../components/Header'
import Sample from '../components/Sample'
import Contact from '../components/Contact'

const ContactPage = () => {
    return (
        <>
            <div className='bg-container'><div className='bg' /></div>
            <div className="App" >

                <Header page='contact' />
                {/* <Sample /> */}

                <Contact />
            </div>
        </>
    )
}

export default ContactPage
