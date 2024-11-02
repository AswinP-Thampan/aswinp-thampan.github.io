import React from 'react'

const Logo = () => {
    return (
        <div style={{ display: 'flex', alignItems: 'baseline', gap: '2px', width: '120px' }}>
            <div style={{ fontSize: '20px' }}>AP</div>
            <div className='circle' />
        </div>
    )
}

export default Logo
