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
    /* 5 */ { name: 'HTML', logo: HTML },
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

const freelancingContent = {
    name: 'Freelancer',
    startDate: 'NOV 2024',
    endDate: 'FEB 2025',
    company: 'Self Employed',
    role: 'Web and Logo Designer',
    team: '2 Projects',
    stack: [
        {name: "Next.js"},
        {name: "Tailwind"},
        {name: "Vercel"},
        logos[7],
        logos[4],
        logos[1],
        logos[11],
        {name: "Illustrator"},
        {name: "Procreate"},
    ],
    location: "Remote",
    content: "Designed a unique logo for a marble company, capturing its brand identity with a sleek and modern aesthetic. And developed a fully responsive website for a pizza shop, enhancing online presence with an intuitive UI and seamless navigation. Managed both projects while collaborating with clients to refine concepts, meet design expectations, and ensure timely delivery."
};


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
        logos[4],
        logos[3],
        {name: "Express"},
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
        {name: "Tailwind"},
        logos[2],
        logos[12],
        logos[1],
    ],
    location: "Gurgaon, IN",
    content: "Created a server management portal, for the orchestration and identification of bottlenecks, enabling visualization of server telemetry and health. Enabled dynamic changes to server configuration for improved resource management and flexibility. Designed filtered server stats pages and reverse-engineered components for enhanced reusability."
};

const airportPrj = {
    name: "Airport Internal Management System",
    date: "AUG 2021",
    content: "Created a website for internal airport communication, allowing real-time updates on delays, emergencies, and system statuses. Provided admin capabilities for managing flight statuses, seat bookings, and service modifications like upgrades and meal preferences.", 
    stack: [ "MongoDB", "JavaScript" , "jQuery" , "HTML/CSS" ]
}

const tutorPrj = {
    name: "Tutorly (Interactive Learning Hub)",
    date: "DEC 2021",
    content: "­­Developed a dynamic web platform to cater to the growing demand for online learning by connecting alumni and students. The website aimed to enhance students' industry insights and learning opportunities.	Implemented user registration features for both tutors and students, ensuring a personalized experience. ", 
    stack: [ "React.js" , "JavaScript" , "HTML/CSS" , "jQuery" , "MySQL"  ]
}

const bankPrj = {
    name: "Banking Service Flow",
    date: "AUG 2020",
    content: "­Website to demonstrate banking processes, with a strong emphasis on user-friendly design for transactions such as deposits and withdrawals. Enabled users to view their transaction history in real time, complete with status details, by developing a connection to the database that reflects changes as transactions occur.", 
    stack: [ "JavaScript" , "HTML/CSS" , "PHP" , "phpMyAdmin" , "MySQL"  ]
}

const eaF1Prj = {
    name: "eaf1 (Everything About F1) ↗",
    date: "OCT 2024",
    content: "An interactive F1 car exploration website designed to provide an in-depth look at F1 car parts, their specifications, and the rich history of the sport. Users can explore detailed descriptions of car components, view specifications of various F1 cars, and delve into the Hall of Fame to learn about iconic drivers and historic achievements.", 
    stack: [ "Next.js" , "Tailwind" , "Vercel"  ],
    src: 'https://eaf1.vercel.app/'
}

const workexp = [
    freelancingContent,
    paymentPlatformContent,
    serverManagementContent
]

const projects = [
    eaF1Prj,
    tutorPrj,
    airportPrj,
    bankPrj
]

export { workexp, logos, projects };