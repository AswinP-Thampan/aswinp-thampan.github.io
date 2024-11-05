import React from 'react'
import { useNavigate } from 'react-router-dom';
import './Header.scss'

const Logo = () => {
    const navigate = useNavigate();

    return (
        <div style={{ display: 'flex', alignItems: 'baseline', gap: '2px', width: '120px' }}>
            <div onClick={()=>navigate('/home')} style={{ fontSize: '20px' , cursor: 'pointer'}}>AP</div>
            <div onClick={()=>navigate('/home')} className='circle' style={{ cursor: 'pointer'}}/>
        </div>
    )
}

export default Logo
