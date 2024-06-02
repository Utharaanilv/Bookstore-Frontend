import React from 'react'
import { Sidebar } from "flowbite-react";
import { BiBuoy } from "react-icons/bi";
import { HiArrowSmRight, HiChartPie, HiHome, HiInbox, HiOutlineCloudUpload, HiShoppingBag, HiTable, HiUser, HiViewBoards } from "react-icons/hi";
import { SiHatenabookmark } from 'react-icons/si';




function SideBars() {



  return (
    <div>

<Sidebar aria-label="Sidebar with content separator example">
<div className='flex gap-4 flex-col md:flex-row mb-4'>
  <SiHatenabookmark size={40}/>
  <h2 style={{fontSize:"20px",fontWeight:"70px",fontFamily:"cursive"}}>Book Bliss!</h2>
</div>
<hr />
      <Sidebar.Items >
        <Sidebar.ItemGroup>
          <Sidebar.Item  href="/admin/dashboard" icon={HiChartPie}>
            Dashboard
          </Sidebar.Item >
          <Sidebar.Item href="/admin/dashboard/upload" icon={HiOutlineCloudUpload}>
           Upload
          </Sidebar.Item>
          <Sidebar.Item href="/admin/dashboard/manage" icon={HiInbox}>
          Manage
          </Sidebar.Item>
          <Sidebar.Item href="#" icon={HiUser}>
            Users
          </Sidebar.Item>
          <Sidebar.Item href="#" icon={HiShoppingBag}>
            Products
          </Sidebar.Item>
          <Sidebar.Item href="/home" icon={HiHome}>
           Home
          </Sidebar.Item>
          <Sidebar.Item href="#" icon={HiArrowSmRight}>
            Sign In
          </Sidebar.Item>
          <Sidebar.Item  href="#" icon={HiTable}>
            LogOut
          </Sidebar.Item>
        </Sidebar.ItemGroup>
        <Sidebar.ItemGroup>
          <Sidebar.Item href="#" icon={HiChartPie}>
            Upgrade to Pro
          </Sidebar.Item>
          <Sidebar.Item href="#" icon={HiViewBoards}>
            Documentation
          </Sidebar.Item>
          <Sidebar.Item href="#" icon={BiBuoy}>
            Help
          </Sidebar.Item>
        </Sidebar.ItemGroup>
      </Sidebar.Items>
    </Sidebar>
    </div>
  )
}

export default SideBars