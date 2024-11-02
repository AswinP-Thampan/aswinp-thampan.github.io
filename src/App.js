import logo from './logo.svg';
import './App.css';
// import Sample from './components/Sample';
import LandingPage from './pages/LandingPage.jsx';
import ResumePage from './pages/ResumePage.jsx';
import { BrowserRouter as Router, Route, Routes, Navigate } from "react-router-dom";
import ContactPage from './pages/ContactPage.jsx';
import { color } from 'framer-motion';
import Sample from './Sample.js';

function App() {
  return (
    <>
      {/* <Router>
        <Routes>
          <Route path="/" element={<LandingPage />} />
          <Route path="/home" element={<LandingPage />} />
          <Route path="/resume" element={<ResumePage />} />
          <Route path="/contact" element={<ContactPage />} />
        </Routes>
      </Router>
      <LandingPage/>
      <div style={{ color: 'black' }}>
        Version 1.0
      </div>
      <div style={{ color: 'white' }}>
        Version 1.0
      </div> */}
      <Sample/>
    </>
  );
}



export default App;
