import React from 'react'
import { Label, Sidebar } from 'flowbite-react';
import { Link } from 'react-router-dom';
import {
    HiArrowSmRight,
    HiHome,
    HiInbox,
    HiShoppingBag,
    HiTable,
    HiUsers,
    HiViewBoards,
  } from "react-icons/hi"
function Sidebars() {
  return (

     <Sidebar
        aria-label="Sidebar with content separator example"
        style={{ backgroundColor: "white" }}
       
      >
        <Sidebar.Items style={{ backgroundColor: "white" }}>
          <Sidebar.ItemGroup style={{ backgroundColor: "white" }}>
           <Link to='/home' ><Sidebar.Item icon={HiHome}>
              <p style={{ color: "black", fontSize: "20px" }}>Home</p>
            </Sidebar.Item></Link>
            <Sidebar.Item  icon={HiUsers}>
              <Link to="/users"><span>Users</span></Link>
            </Sidebar.Item>
            <Sidebar.Item href="#" icon={HiShoppingBag}>
              <p>Products</p>
            </Sidebar.Item>
            <Sidebar.Item href="#" icon={HiArrowSmRight}>
              <p>Sign In</p>
            </Sidebar.Item>
            <Sidebar.Item href="#" icon={HiTable}>
              <p>Sign Up</p>
            </Sidebar.Item>
          </Sidebar.ItemGroup>
          <Sidebar.ItemGroup>
            <Sidebar.Item href="#" icon={HiHome}>
              <p>Help</p>
            </Sidebar.Item>
          </Sidebar.ItemGroup>
        </Sidebar.Items>
      </Sidebar>

 
  )
}

export default Sidebars