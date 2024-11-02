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

const logos = [
    {
        //0
        name: 'React.js',
        logo: ReactIcon
    },
    {
        name: 'TypeScript',
        logo: TsIcon
    },
    {
        //1
        name: 'Git',
        logo: Git
    },
    {
        //2
        name: 'Java',
        logo: Java
    },
    {
        //3
        name: 'Node.js',
        logo: Node
    },
    {
        //4
        name: 'Javascript',
        logo: JS
    },
    {
        //5
        name: 'HTML/CSS',
        logo: HTML
    },
    {
        //6
        name: 'CSS',
        logo: CSS
    },
    {
        //7
        name: 'Redux',
        logo: Redux
    },
    {
        //8
        name: 'Storybook',
        logo: Storybook
    },
    {
        //9
        name: 'MySQL',
        logo: MySQL
    },
    {
        //10
        name: 'Firebase',
        logo: Firebase
    },
    {
        //11
        name: 'Figma',
        logo: Figma
    },
    {
        name: 'Spring Boot',
        logo: Spring
    }
]

const paymentPlatformContent = {
    name: 'Payment Portal for Merchant',
    startDate: 'April 2023',
    endDate: 'September 2024',
    company: 'Comviva Technologies Ltd',
    role: 'Product Development Engineer',
    team: 'CVS Team',
    stack: [
        logos[0],
        logos[7],
        logos[5],
        logos[4],
        logos[3],
        logos[9],
        logos[11],
        logos[8],
        logos[10]
    ],
    content: [
        "Digital payment platform was developed to use across apps, tablets, and websites, enabling bank and wallet transactions, bill payments, and mobile recharges.",
        "Component design, testing and desk check were made using wireframes and visualized using Storybook.",
        "Depending on the requirement, UI flow for different regions was understood and implemented for better UX.",
        "To have better state management and reduce component drilling in ReactJS, Redux Toolkit was used.",
        "Worked as the SPOC and liaison between the backend team of a partner company (Ericsson), the frontend and backend of Comviva, and the client (MTN).",
        "Proactive analysis was made to ensure the UI flow of Figma wireframes wasn’t affected due to missing or corrupted design tokens.",
        "Dynamic creation of the component from the wireframe with the right token was ensured for extended reusability.",
        "Deliverables for each task comprising different flows were completed on time and passed on for Minimum Viable Product (MVP) Testing and User Acceptance Testing (UAT).",
        "Upon change requests and scope enhancements, existing tokens were diligently reused to avoid deadline extensions.",
        "During sprint retrospection, attempted to minimize sprint restructuring and revamping of project timeline.",
        "To enhance security for the payment portal, multiple sessions were blocked, and proper route guards were implemented.",
        "Implemented code structuring and centralization practices for enhanced project organization.",
        "Successfully led a team of 35+ members, headed scrum calls, fostering collaboration and achieving project objectives."
    ]
};

const serverManagementContent = {
    name: 'Server Management Portal',
    startDate: 'June 2022',
    endDate: 'April 2023',
    company: 'Comviva Technologies Ltd',
    role: 'Product Development Engineer',
    team: 'MBS Team',
    stack: [
        logos[0],
        logos[1],
        logos[2],
        logos[4],
        logos[5],
        logos[7],
        logos[12],
    ],
    content: [
        "For orchestration and identification of bottlenecks, a server management portal was implemented where the telemetry and health of the server could be visualized.",
        "Facilitating and modifying the state of the server could be done using the centralized server state management portal.",
        "For server resource management and flexibility, the ability to change server configuration dynamically was implemented.",
        "Designed webpages with refined filtration for displaying server status and modes, making it easier to access the required configuration in the pool.",
        "Reverse engineered components and wireframes from the existing Server Management Portal written in extension JS.",
        "Using the derived design elements, we constructed structured server configurations in ReactJS to integrate with project objectives and enhance efficiency.",
        "Spring Boot services were used to develop microservices, ensuring seamless front-end and back-end integration."
    ]
};

export {paymentPlatformContent , serverManagementContent , logos} ;