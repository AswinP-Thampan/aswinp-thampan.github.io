import React from 'react'
import './Resume.scss'
import { workexp, projects } from '../CMS/content'
import File from "../assets/file/Resume.pdf"

export default function Resume() {

    const downloadResume = (e) => {
        e.preventDefault();
        const link = document.createElement('a');
        link.href = File;
        link.download = 'AswinP_Resume.pdf'; // Set your custom file name here
        document.body.appendChild(link);
        link.click();
        document.body.removeChild(link);
    }

    return (
        <div className='scroll-container' style={{ height: 'calc(100vh - 60px)', overflowY: 'scroll' }}>
            <div>
                <div className='r-heading'>RESUME</div>
                <div className='main-div'>
                    <div style={{ marginBottom: '20px' }}>
                        <a href={File} target="_blank" rel="noreferrer" className='download' onClick={(e) => { downloadResume(e) }} >
                            View Full Résumé ↗
                        </a>
                    </div>
                    <div className='sections'>Work Experience</div>
                    {workexp.map((work) =>
                        <WorKExpCards work={work} />
                    )}
                    <div style={{ display: 'flex', gap: '20px', flexDirection: 'column', paddingTop: '50px' }}>
                        <div className='sections'>Projects</div>
                        {projects.map((prj, index) =>
                            <ProjectCards project={prj} />
                        )}
                    </div>
                    <a href={File} target="_blank" rel="noreferrer" className='download' onClick={(e) => { downloadResume(e) }} >
                            View Full Résumé2 ↗
                        </a>
                </div>

            </div>

        </div>
    )
}


const ProjectCards = ({ project }) => {

    return (
        <div className="cards">
            <div>
                <div style={{ display: 'flex', fontSize: '14px', color: "#8c8c8c" }}>{project.date} </div>
                <div style={{ display: 'flex', fontSize: '20px' }}>{project.name}</div>
                <hr style={{ marginLeft: "0px", opacity: '0.5' }} />
            </div>
            <div className='cards-font'>{project.content}</div>
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
                <div style={{ display: 'flex', fontSize: '14px', color: "#8c8c8c" }}>{work.startDate} - {work.endDate} </div>
                <div style={{ display: 'flex', fontSize: '20px' }}>{work.role} · {work.company} ({work.team})</div>
                <div style={{ display: 'flex', fontSize: '18px', color: "#8c8c8c" }}>{work.location} </div>
                <hr style={{ marginLeft: "0px", opacity: '0.5' }} />
            </div>
            <div className='cards-font'>{work.content}</div>
            <div style={{ display: 'flex', gap: '10px', marginTop: '10px', flexWrap: 'wrap' }}>
                {work.stack.map((item, index) =>
                    <div className='pills-stack' key={index}>{item.name}</div>
                )}
            </div>
        </div>
    )
}

