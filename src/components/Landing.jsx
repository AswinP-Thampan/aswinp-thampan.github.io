import React from "react";
import "./Landing.scss";
import Photo from "../assets/icons/profile-pic.jpg";
import { logos } from "../CMS/content";

const Landing2 = () => {
    return (
        <div className="landing-conatiner">
            <div style={{ display: "flex", gap: "20px", flexDirection: "column", position: "relative" }}>
                <div className="name-about-conatiner">
                    <div>
                        <div className="name">
                            Aswin P<span style={{ color: "red" }}>.</span>
                        </div>
                        <div>Full-Stack Developer</div>
                    </div>

                    <div style={{ width: "350px", display: "flex", flexDirection: "column", gap: "15px" }}>
                        <div className="languages">
                            Languages I speak:
                        </div>
                        <div className="scroll-conatiner">
                            <div className="infinte-scroll">
                                {logos.map((item, index) =>
                                    <div>
                                        <img key={index} src={item.logo} alt={item.name} />
                                        <div style={{ fontSize: '14px'}}>{item.name}</div>
                                    </div>
                                )}
                            </div>
                            <div className="infinte-scroll">
                                {logos.map((item, index) =>
                                    <div>
                                        <img key={index} src={item.logo} alt={item.name} />
                                        <div style={{ fontSize: '14px'}}>{item.name}</div>
                                    </div>
                                )}
                            </div>
                        </div>
                    </div>
                </div>
                <div className="conatiner">
                    <div>
                        <div className="about">
                            Hey! I'm a Web Developer who loves coding things from scratch and
                            bringing creative ideas to life in the browser. Whether it's
                            building smooth, interactive websites or experimenting with new
                            tech, I enjoy diving into projects and seeing them come to life.
                            Let’s build something cool!
                        </div>
                    </div>
                    <div style={{ display: "flex", alignItems: "center", justifyContent: 'center' }}>
                        <img src={Photo} className="profile-pic" />
                    </div>
                </div>
            </div>
        </div>
    );
};

export { Landing2 };

// const Landing = () => {

//     return (
//         <div>

//             <div style={{ display: 'flex', flexDirection: 'row', gap: '5vw', height: 'fit-content' }}>
//                 <div style={{ alignItems: 'strech', display: 'flex', flexDirection: 'column', justifyContent: 'center', textAlign: 'center', gap: '20px' }}>
//                     <div className='name' >Aswin P<span style={{ color: 'red' }}>.</span></div>
//                     <div style={{ textAlign: 'right' }}>Full-Stack Developer</div>
//                 </div>
//                 <div>
//                     <div className="about">
//                         Hey there! Welcome to my portfolio.
//                         I'm a Full Stack Developer specializing in Frontend, with 2 years of experience in React, JavaScript, and Redux. I build intuitive user interfaces and optimize performance using cloud platforms like Azure, delivering scalable solutions in Agile environments.
//                     </div>

//                 </div>

//             </div>
//             <div style={{ display: 'flex', flexDirection: 'column', gap: '20px', width: '100%' }}>
//                 <div>
//                     Languages I speak:
//                 </div>
//                 <div style={{ display: 'flex' , justifyContent:'center'}}>
//                     <div className='scroll-conatiner'>
//                         <div className='infinte-scroll'>
//                             <img src={ReactIcon} />
//                             <img src={HTML} />
//                             <img src={CSS} />
//                             <img src={JS} />
//                             <img src={Node} />
//                             <img src={Java} />
//                             <img src={Git} />
//                         </div>

//                         <div className='infinte-scroll'>
//                             <img src={ReactIcon} />
//                             <img src={HTML} />
//                             <img src={CSS} />
//                             <img src={JS} />
//                             <img src={Node} />
//                             <img src={Java} />
//                             <img src={Git} />
//                         </div>
//                     </div>
//                 </div>
//             </div>
//         </div>
//     )
// }

// export default Landing;
