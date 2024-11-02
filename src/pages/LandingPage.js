import React from 'react'
import Header from '../components/Header'
// import Landing from '../components/Landing'
import { Landing2 } from '../components/Landing'
// import { useSelector } from 'react-redux'

const LandingPage = () => {

  // const dispatch = useDispatch()
  // const tabs = useSelector((state) => state.tabs.value)

  return (
    <>
      <div className='bg-container'><div className='bg' /></div>
      <div className="App" >

        {/* <div className='header-wrapper'><Header page='landing' /></div> */}
        <div style={{ width: '100%', height: 'calc(100vh - 60px)' , overflow: 'hidden' }}><Landing2 /></div>

      </div>
    </>
  )
}

export default LandingPage
