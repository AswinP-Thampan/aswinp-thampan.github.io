import React from 'react'
import './Header.scss';
import LinkedIn from '../assets/icons/icons8-linkedin.svg'
import Github from '../assets/icons/github-mark-white.svg'
import Mail from '../assets/icons/email-7603.svg'
import Navigation from './Navigation';
import Logo from './Logo';


const Header = ({ page }) => {
    return (
        <>
            <div className='header'>
                <Logo />
                {/* <div><Navigation page={page} /></div> */}
                <div className='header-contact'>
                    <a href='mailto:aswinp.thampan@gmail.com' ><img className="icon" src={Mail} alt='Mail' /></a>
                    <a href='https://www.linkedin.com/in/aswinp-thampan' ><img className="icon" src={LinkedIn} alt='LinkedIn' /></a>
                    <a href='https://github.com/AswinP-Thampan' ><img className="icon" src={Github} alt='Github' /></a>
                    {/* <Navigation page={page} /> */}
                </div>

            </div>
            <div className='nav-conatiner'><Navigation page={page} /></div>
        </>
    )
}

export default Header;
