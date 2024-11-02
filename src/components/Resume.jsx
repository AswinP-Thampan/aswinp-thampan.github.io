import React from 'react'
import './Resume.scss'
import ReactIcon from "../assets/icons/react-svgrepo-com.svg";
import { paymentPlatformContent, serverManagementContent } from '../CMS/content'

const Resume = () => {

    return (
        <div className='scroll-container' style={{ height: 'calc(100vh - 60px)', overflowY: 'scroll' }}>
            <div>
                <div><h2>Resume</h2></div>
                <div className='main-div'>
                    <div>Work Experience</div>
                    <div className="cards">
                        <div>
                            <div style={{ display: 'flex', justifyContent: 'center' }}>{paymentPlatformContent.name}</div>
                            <div style={{ display: 'flex', justifyContent: 'center', fontSize: '18px' }}>{paymentPlatformContent.startDate} - {paymentPlatformContent.endDate}</div>
                            <div className='company-role'>
                                <div className='pills'>{paymentPlatformContent.company} : {paymentPlatformContent.team}</div>
                                <div className='pills'>{paymentPlatformContent.role}</div>
                            </div>
                            <div style={{ fontSize:'18px' , display:'flex' , gap:'10px' , justifyContent:'center' , marginTop: '10px'}}>
                            {paymentPlatformContent.stack.map((item, index) =>
                                <div className='pills-stack' key={index}><img style={{ height: '15px' , marginRight:'5px'}} src={item.logo} />{item.name}</div>
                            )}
                            </div>
                            <hr style={{ opacity: '0.5' }} />
                        </div>
                        <ul>
                            {paymentPlatformContent.content.map((item, index) =>
                                <li key={index}>{item}</li>
                            )}
                        </ul>
                        <hr style={{ opacity: '0.5' }} />
                    </div>
                    <div className="cards">
                        <div>
                            <div style={{ display: 'flex', justifyContent: 'center' }}>{serverManagementContent.name}</div>
                            <div style={{ display: 'flex', justifyContent: 'center', fontSize: '18px' }}>{serverManagementContent.startDate} - {serverManagementContent.endDate}</div>
                            <div className='company-role'>
                                <div className='pills'>{serverManagementContent.company} : {serverManagementContent.team}</div>
                                <div className='pills'>{serverManagementContent.role}</div>
                            </div>
                            <div style={{ fontSize:'18px' , display:'flex' , gap:'10px' , justifyContent:'center' , marginTop: '10px'}}>
                            {serverManagementContent.stack.map((item, index) =>
                                <div className='pills-stack' key={index}><img style={{ height: '15px' , marginRight:'5px'}} src={item.logo} />{item.name}</div>
                            )}
                            </div>
                            <hr />
                        </div>
                        <ul>
                            {serverManagementContent.content.map((item, index) =>
                                <li key={index}>{item}</li>
                            )}
                        </ul>
                        <hr style={{ opacity: '0.5' }} />
                        <div>
                           {/* <img src={}/>
                           <img src={}/>
                           <img src={}/>
                           <img src={}/>
                           <img src={}/>
                           <img src={}/>
                           <img src={}/> */}
                        </div>
                    </div>

                    <div className="cards">
                        <ul style={{ display: 'flex', gap: '20px', flexDirection: 'column' , padding: '0px'}}> Projects
                            <li className='prj-cards'>
                                <div style={{ width: '20%' }}>
                                    Airport Management System Website:
                                </div>
                                <div style={{ width: '80%' }}>
                                    <ul>
                                        <li>Provided features for CRUD operations in MongoDB such as checking delays, seat availability for specific dates, seat booking, seat upgradation, etc. </li>
                                        <li>Developed a website using JavaScript & MongoDB for communication between internal airport staff.</li>
                                    </ul>
                                </div>
                            </li>
                            <li className='prj-cards'>
                                <div style={{ width: '20%' }}>
                                    Freelancing Website for Tutors:
                                </div>
                                <div style={{ width: '80%' }}>
                                    <ul>
                                        <li>Due to the increasing need for online learning platforms created a website for online tutoring. </li>
                                        <li>The goal was to implement the platform within the university to facilitate student connections between alumni and students.</li>
                                        <li>Enabled user registration for both tutors and students & facilitated students in scheduling live classes with tutors, with slot selection and initial payment features.</li>
                                    </ul>
                                </div>
                            </li>
                            <li className='prj-cards'>
                                <div style={{ width: '20%' }}>
                                    Banking Flow
                                </div>
                                <div style={{ width: '80%' }}>
                                    <ul>
                                        <li>Developed a website to demonstrate banking processes, with a strong emphasis on user-friendly design for transactions such as deposits and withdrawals. </li>
                                        <li>The technology stack for this project includes PHP, JavaScript, HTML, CSS, and MySQL.</li>
                                    </ul>
                                </div>
                            </li>
                        </ul>
                    </div>

                </div>
            </div>
        </div>
    )
}

export default Resume
