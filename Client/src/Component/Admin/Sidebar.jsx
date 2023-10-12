import React from 'react'
import { Label, Sidebar } from 'flowbite-react';
import { Link } from 'react-router-dom';
import {
    HiArrowSmRight,
    HiHome,
    HiInbox,
    HiLogout,
    HiAcademicCap,
    HiTable,
    HiUsers,
    HiViewBoards,
  } from "react-icons/hi"
function Sidebars() {
 
  return (

     <Sidebar
        aria-label="Sidebar with content separator example"
        style={{ backgroundColor: "#F9FAFB" }}
       
      >
        <Sidebar.Items style={{ backgroundColor: "#F9FAFB" }}>
          <Sidebar.ItemGroup style={{ backgroundColor: "#F9FAFB" }}>
          <Link to='home' ><div><Sidebar.Item icon={HiHome}>
              <p style={{ color: "black", fontSize: "20px" }}>Home</p>
            </Sidebar.Item></div></Link>
            <Link to="users"> <div>  <Sidebar.Item  icon={HiUsers}>
              <span style={{ color: "black", fontSize: "20px" }}> Users</span>
            </Sidebar.Item></div></Link>
            <Link to='classes'><div><Sidebar.Item href="#" icon={HiAcademicCap}>
              <p style={{ color: "black", fontSize: "20px" }}>Classes</p>
            </Sidebar.Item></div></Link>
          </Sidebar.ItemGroup>
          <Link to='/'><div style={{ flex: 2,  flexDirection: 'column', justifyContent: 'flex-end' , marginBottom: '20px' }}>
    <Sidebar.ItemGroup>
      <Sidebar.Item href="#" icon={HiLogout}>
        <p style={{ color: "black", fontSize: "20px" }}>Logout</p>
      </Sidebar.Item>
    </Sidebar.ItemGroup>
  </div></Link>
        </Sidebar.Items>
      </Sidebar>

 
  )
}

export default Sidebars