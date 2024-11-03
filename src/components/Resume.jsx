import React from 'react'
import './Resume.scss'
import { workexp, projects } from '../CMS/content'
import File from "../assets/file/Resume.pdf"

export default function Resume() {

    const handleDownload = () => {
        // Link to the PDF file stored in the public folder
        const pdfPath = `../assets/file/Resume.pdf`;
    
        // Create a link element
        const link = document.createElement('a');
        link.href = pdfPath;
        link.download = 'sample.pdf'; // Name for the downloaded file
        link.click();
      };


    return (
        <div className='scroll-container' style={{ height: 'calc(100vh - 60px)', overflowY: 'scroll' }}>
            <div>
                <div className='r-heading'>RESUME</div>
                <div className='main-div'>
                <a href={File} target="_blank"
                    rel="noreferrer">
                    Open Second PDF
                </a>
                <a href={File} download="pavel_cv"> Download My CV </a>
                        <button onClick={handleDownload} type="button" >Download Resume</button>
                    {/* </a> */}
                    {/* <a href={require("")} download="AswinP_Resume">Download full resume</a> */}
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

