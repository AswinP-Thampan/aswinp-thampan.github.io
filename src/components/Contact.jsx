import React, { useRef, useState } from 'react'
// import Sample from "./Sample.jsx"
import "./Contact.scss"

export default function Contact() {

    const [showNo, setShowNo] = useState(false)

    const timeoutRef = useRef(null);

    const handleMouseEnter = () => {
        clearTimeout(timeoutRef.current);
        timeoutRef.current = setTimeout(() => setShowNo(true), 500);
    };

    const handleMouseLeave = () => {
        clearTimeout(timeoutRef.current);
        setShowNo(false);
    };

    return (
        <div className='contact-main'>
            <div>
                {/* <Sample /> */}
                <div className='c-heading'>
                    CONTACT INFORMATION
                </div>
                <div style={{ fontFamily: 'Sans-new-regular', display: 'flex', justifyContent: 'center', alignItems: 'center', padding: '50px' }}>
                    <div style={{ width: '70%' }}>
                        <p>Let's bring ideas to life!</p>
                        <p>If you're looking for a developer who's passionate about crafting seamless user experiences and building efficient, scalable applications, you're in the right place. I'm always open to new opportunities, collaborations, or hearing about innovative projects. Feel free to reach out if you think we'd make a great team!</p>
                    </div>
                </div>
            </div>

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
                    onMouseEnter={handleMouseEnter}
                    onClick={() => window.location.href = "tel:+91 7022755291"}
                    onMouseLeave={handleMouseLeave}
                >
                    {!showNo ? "Phone ↗" : "+91 7022755291"}
                </div>
            </div>
        </div>
    )
}
