import React from 'react'
import SideBar from '../Components/SideBar'
import { Outlet } from 'react-router-dom'

function DashboardLayout() {
  return (
    <div className='flex gap-4 flex-col md:flex-row'>

<div><SideBar/></div>
<div><Outlet/></div>

    </div>
  )
}

export default DashboardLayout