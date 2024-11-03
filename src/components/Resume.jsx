import React from 'react'
import './Resume.scss'
import ReactIcon from "../assets/icons/react-svgrepo-com.svg";
import { paymentPlatformContent, serverManagementContent, projects } from '../CMS/content'

const Cards = ({ project }) => {

    return (
        <div className="cards">
            <div>
                <div style={{ display: 'flex', fontSize: '14px' }}>{project.date} </div>
                <div style={{ display: 'flex', fontSize: '20px' }}>{project.name}</div>
                <hr style={{ marginLeft: "0px", opacity: '0.5' }} />
            </div>
            <div style={{ fontSize: '18px' }}>{project.content}</div>
            <div style={{ display: 'flex', gap: '10px', marginTop: '10px', flexWrap: 'wrap' }}>
                {project.stack.map((item, index) =>
                    <div className='pills-stack' key={index}>{item}</div>
                )}
            </div>
        </div>
    )
}

const Resume = () => {

    return (
        <div className='scroll-container' style={{ height: 'calc(100vh - 60px)', overflowY: 'scroll' }}>
            <div>
                <div><h2>Resume</h2></div>
                <div className='main-div'>
                    <div>Work Experience</div>
                    <div className="cards">
                        <div>
                            <div style={{ display: 'flex', fontSize: '14px' }}>{paymentPlatformContent.startDate} - {paymentPlatformContent.endDate} </div>
                            <div style={{ display: 'flex', fontSize: '20px' }}>{paymentPlatformContent.role} · {paymentPlatformContent.company} ({paymentPlatformContent.team})</div>
                            <div style={{ display: 'flex', fontSize: '18px' }}>{paymentPlatformContent.location} </div>
                            <hr style={{ marginLeft: "0px", opacity: '0.5' }} />
                        </div>
                        <div style={{ fontSize: '18px' }}>{paymentPlatformContent.content}</div>
                        <div style={{ display: 'flex', gap: '10px', marginTop: '10px', flexWrap: 'wrap' }}>
                            {paymentPlatformContent.stack.map((item, index) =>
                                <div className='pills-stack' key={index}>{item.name}</div>
                            )}
                        </div>
                    </div>
                    <div className="cards">
                        <div>
                            <div style={{ display: 'flex', fontSize: '14px' }}>{serverManagementContent.startDate} - {serverManagementContent.endDate} </div>
                            <div style={{ display: 'flex', fontSize: '20px' }}>{serverManagementContent.role} · {serverManagementContent.company} ({serverManagementContent.team})</div>
                            <div style={{ display: 'flex', fontSize: '18px' }}>{serverManagementContent.location} </div>
                            <hr style={{ marginLeft: "0px", opacity: '0.5' }} />
                        </div>
                        <div style={{ fontSize: '18px' }}>{serverManagementContent.content}</div>
                        <div style={{ display: 'flex', gap: '10px', marginTop: '10px', flexWrap: 'wrap' }}>
                            {serverManagementContent.stack.map((item, index) =>
                                <div className='pills-stack' key={index}>{item.name}</div>
                            )}
                        </div>
                    </div>

                    <div className="cards">
                        <ul style={{ display: 'flex', gap: '20px', flexDirection: 'column', padding: '0px' }}> Projects
                            {projects.map((prj, index) => 
                                <li className='prj-cards' key={index}>
                                    <Cards project={prj} />
                                </li>
                            )}
                        </ul>
                    </div>

                </div>
            </div>
        </div>
    )
}

export default Resume
