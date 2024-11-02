import React, { useEffect } from 'react'
import './Navigation.scss';
// import { useSelector, useDispatch } from 'react-redux'
// import { home, resume, about } from '../store/slice/tabslice'
import { useNavigate } from 'react-router-dom';

const Navigation = ({page}) => {
    // const tab = useSelector((state) => state.tabs.value)
    // const dispatch = useDispatch()
    const navigate = useNavigate();

    const homeTabStyles = {
        backgroundColor: page == 'landing' ? '#ae0000fd' : '' 
    }

    const resumeTabStyles = {
        backgroundColor: page == 'resume' ? '#ae0000fd' : '' 
    }

    const contactTabStyles = {
        backgroundColor: page == 'contact' ? '#ae0000fd' : '' 
    }

  return (
    <div className='container-tab'>
      <button className='tab' style={homeTabStyles} onClick={()=>navigate('/home')}>Home</button>
      <button className='tab' style={resumeTabStyles} onClick={()=> navigate('/resume')}>Resume</button>
      <button className='tab' style={contactTabStyles} onClick={()=>navigate('/contact')}>Contact</button>
    </div>
  )
}

export default Navigation


