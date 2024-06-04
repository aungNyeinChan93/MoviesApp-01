import React from 'react'
import Header from './Header'
import { Outlet } from 'react-router'


const ShareLayout = () => {
  return (
    <div className='ShareLayout'>
      <Header/>
      <Outlet/>
    </div>
  )
}

export default ShareLayout
