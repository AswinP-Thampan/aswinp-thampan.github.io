import React from 'react'
import './Header.scss';
import LinkedIn from '../assets/icons/react-black.svg'
import Github from '../assets/icons/sass-black.svg'
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
                    <div style={{ fontSize: '12px'}}>Made with:</div>
                    <a href='https://react.dev/' ><img className="icon" src={LinkedIn} alt='React' /></a>
                    <a href='https://sass-lang.com/' ><img className="icon" src={Github} alt='Scss' /></a>
                    {/* <Navigation page={page} /> */}
                </div>

            </div>
            <div className='nav-conatiner'><Navigation page={page} /></div>
        </>
    )
}

export default Header;
