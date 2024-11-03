import React from 'react'
import './Resume.scss'
import { workexp, projects } from '../CMS/content'

export default function Resume() {
    return (
        <div className='scroll-container' style={{ height: 'calc(100vh - 60px)', overflowY: 'scroll' }}>
            <div>
                <div><h2>Resume</h2></div>
                <div className='main-div'>
                    <div>Work Experience</div>
                        {workexp.map((work) =>
                            <WorKExpCards work={work} />
                        )}
                    <div style={{ display: 'flex', gap: '20px', flexDirection: 'column', padding: '0px' }}> Projects
                        {projects.map((prj, index) =>
                            <ProjectCards project={prj} />
                        )}
                    </div>
                </div>
            </div>
        </div>
    )
}


const ProjectCards = ({ project }) => {

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


const WorKExpCards = ({ work }) => {

    return (
        <div className="cards">
            <div>
                <div style={{ display: 'flex', fontSize: '14px' }}>{work.startDate} - {work.endDate} </div>
                <div style={{ display: 'flex', fontSize: '20px' }}>{work.role} · {work.company} ({work.team})</div>
                <div style={{ display: 'flex', fontSize: '18px' }}>{work.location} </div>
                <hr style={{ marginLeft: "0px", opacity: '0.5' }} />
            </div>
            <div style={{ fontSize: '18px' }}>{work.content}</div>
            <div style={{ display: 'flex', gap: '10px', marginTop: '10px', flexWrap: 'wrap' }}>
                {work.stack.map((item, index) =>
                    <div className='pills-stack' key={index}>{item.name}</div>
                )}
            </div>
        </div>
    )
}

