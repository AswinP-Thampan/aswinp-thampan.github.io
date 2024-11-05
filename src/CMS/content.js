import ReactIcon from "../assets/icons/react-svgrepo-com.svg";
import Git from "../assets/icons/git-svgrepo-com.svg";
import Java from "../assets/icons/java-svgrepo-com.svg";
import Node from "../assets/icons/node-js-svgrepo-com.svg";
import JS from "../assets/icons/javascript-svgrepo-com.svg";
import HTML from "../assets/icons/html-5-svgrepo-com.svg";
import CSS from "../assets/icons/css-3-svgrepo-com.svg";
import Redux from '../assets/icons/redux-svgrepo-com.svg'
import Storybook from '../assets/icons/storybook-icon-svgrepo-com.svg'
import MySQL from '../assets/icons/mysql-svgrepo-com.svg'
import Firebase from '../assets/icons/firebase-svgrepo-com.svg'
import Figma from '../assets/icons/figma-svgrepo-com.svg'
import Spring from '../assets/icons/spring-svgrepo-com.svg'
import TsIcon from '../assets/icons/Typescript_logo_2020.svg'
import jQuery from '../assets/icons/jquery-svgrepo-com.svg'

const logos = [
    /* 0 */ { name: 'React.js', logo: ReactIcon }, 
    /* 1 */ { name: 'Git', logo: Git },
    /* 2 */ { name: 'Java', logo: Java },
    /* 3 */ { name: 'Node.js', logo: Node },
    /* 4 */ { name: 'Javascript', logo: JS },
    /* 5 */ { name: 'HTML/CSS', logo: HTML },
    /* 6 */ { name: 'CSS', logo: CSS },
    /* 7 */ { name: 'Redux', logo: Redux },
    /* 8 */ { name: 'Storybook', logo: Storybook },
    /* 9 */ { name: 'MySQL', logo: MySQL },
    /* 10 */ { name: 'Firebase', logo: Firebase },
    /* 11 */ { name: 'Figma', logo: Figma },
    /* 12 */ { name: 'Spring Boot', logo: Spring },
    /* 13 */ { name: 'TypeScript', logo: TsIcon },
    /* 14 */ { name: 'jQuery', logo: jQuery }
]

const paymentPlatformContent = {
    name: 'Payment Portal for Merchant',
    startDate: 'APR 2023',
    endDate: 'SEP 2024',
    company: 'Comviva',
    role: 'Product Development Engineer',
    team: 'CVS Dept.',
    stack: [
        logos[0],
        logos[13],
        logos[7],
        logos[5],
        logos[4],
        logos[3],
        {name: "Express.js"},
        logos[9],
        logos[8],
        logos[10],
        logos[1]
    ],
    location: "Bangalore, IN",
    content: "Developed a digital payment platform across apps, tablets, and websites, enabling bank and wallet transactions, bill payments, and mobile recharges. Led 35+ team as SPOC, assigning tasks, resolving design issues, optimizing components, and securing portals. Recognized with 2 ACE cards for commitments and efforts in the project."
};

const serverManagementContent = {
    name: 'Server Management Portal',
    startDate: 'JUN 2022',
    endDate: 'APR 2023',
    company: 'Comviva',
    role: 'Product Development Engineer',
    team: 'MBS Dept.',
    stack: [
        logos[0],
        logos[7],
        logos[4],
        logos[5],
        logos[2],
        logos[12],
        logos[1],
    ],
    location: "Gurgaon, IN",
    content: "Created a server management portal, for the orchestration and identification of bottlenecks, enabling visualization of server telemetry and health. Enabled dynamic changes to server configuration for improved resource management and flexibility. Designed filtered server stats pages and reverse-engineered components for enhanced reusability."
};

const airportPrj = {
    name: "Airport Management System Website",
    date: "AUG 2021",
    content: "Created a website using JavaScript & MongoDB for communication among internal airport staff. Provided CRUD features in MongoDB, including checking delays, seat availability, seat booking, upgrades.", 
    stack: [ "MongoDB", "JavaScript" , "jQuery" , "HTML/CSS" ]
}

const tutorPrj = {
    name: "Freelancing Website for Tutors",
    date: "DEC 2021",
    content: "Built a website to address the growing demand for online learning platforms, facilitating connections between alumni and students while enhancing students' industry insights and learning opportunities. Implemented user registration for both tutors and students & facilitated students in scheduling live classes with tutors, with slot selection and initial payment features.", 
    stack: [ "React.js" , "JavaScript" , "HTML/CSS" , "jQuery" , "MySQL"  ]
}

const bankPrj = {
    name: "Banking System Flow Website",
    date: "AUG 2020",
    content: "Designed a website to demonstrate banking processes, with a strong emphasis on user-friendly design for transactions such as deposits and withdrawals. Enabled users to view their transaction history in real time, complete with status details, by developing a connection to the database that reflects changes as transactions occur.", 
    stack: [ "JavaScript" , "HTML/CSS" , "PHP" , "phpMyAdmin" , "MySQL"  ]
}

const workexp = [
    paymentPlatformContent,
    serverManagementContent
]

const projects = [
    // tutorPrj,
    tutorPrj,
    airportPrj,
    bankPrj
]

export { workexp, logos, projects };