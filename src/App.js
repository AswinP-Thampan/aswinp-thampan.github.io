import logo from './logo.svg';
import './App.css';
// import Sample from './components/Sample';
import LandingPage from './pages/LandingPage';
import ResumePage from './pages/ResumePage.jsx';
import { BrowserRouter as Router, Route, Routes, Navigate } from "react-router-dom";
import ContactPage from './pages/ContactPage.jsx';
import { color } from 'framer-motion';

function App() {
  return (
    <>
<LandingPage />
    </>
  );
}



export default App;
