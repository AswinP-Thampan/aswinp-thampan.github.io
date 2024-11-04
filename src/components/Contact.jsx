import React, { useState } from 'react'
import "./Contact.scss"

export default function Contact() {

    const [showNo, setShowNo] = useState(false)
    return (
        <div className='contact-container'>
            <a href='mailto:aswinp.thampan@gmail.com' >
                <div className="contact-cards">Gmail ↗</div>
            </a>
            <a href='https://www.linkedin.com/in/aswinp-thampan' >
                <div className="contact-cards">Linkedin ↗</div>
            </a>

            <a href='https://github.com/AswinP-Thampan' >
                <div className="contact-cards">Github ↗</div>
            </a>
            <div
                className={"contact-cards"}
                onMouseEnter={() => setShowNo(true)}
                onClick={() => window.location.href = "tel:+91 7022755291"}
                onMouseLeave={() => setShowNo(false)}
            >
                {!showNo ? "Phone ↗" : "+91 7022755291"}
            </div>
        </div>
    )
}
