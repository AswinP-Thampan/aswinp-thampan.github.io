import logo from './logo.svg';
import './App.css';
// import Sample from './components/Sample';
import LandingPage from './pages/LandingPage';
import ResumePage from './pages/ResumePage';
import { HashRouter  as Router, Route, Routes } from "react-router-dom";
import ContactPage from './pages/ContactPage';

function App() {
  return (
      <Router>
        <Routes>
          <Route path="/" element={<LandingPage/>} />
          <Route path="/home" element={<LandingPage/>} />
          <Route path="/resume" element={<ResumePage/>} />
          <Route path="/contact" element={<ContactPage/>} />
        </Routes>
      </Router>
  );
}



export default App;
