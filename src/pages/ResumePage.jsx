import React from 'react'
import Header from '../components/Header'
import Resume from '../components/Resume'
// import { useSelector } from 'react-redux'

const ResumePage = () => {

    // const dispatch = useDispatch()
    //   const tabs = useSelector((state) => state.tabs.value)

    return (
        <>
            <div className='bg-container'><div className='bg' /></div>
            <div className="App" >

                <div className='header-wrapper'><Header page='resume' /></div>
                <div style={{ overflow: 'hidden' , width: '100%' , height: 'calc(100vh - 125px)' , overflowY: 'scroll'}}><Resume /></div>
            </div>
        </>
    )
}

export default ResumePage
