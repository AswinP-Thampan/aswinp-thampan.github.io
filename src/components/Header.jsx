import React from 'react'
import './Header.scss';
import ReactIcon from '../assets/icons/react-black.svg'
import Scss from '../assets/icons/sass-black.svg'
import Navigation from './Navigation';
import Logo from './Logo';


const Header = ({ page }) => {
    return (
        <>
            <div className='header'>
                <Logo />
                <div className='header-contact'>
                    <div style={{ fontSize: '12px'}}>Made with:</div>
                    <a href='https://react.dev/' ><img className="icon" src={ReactIcon} alt='React' /></a>
                    <a href='https://sass-lang.com/' ><img className="icon" src={Scss} alt='Scss' /></a>
                </div>

            </div>
            <div className='nav-conatiner'><Navigation page={page} /></div>
        </>
    )
}

export default Header;
