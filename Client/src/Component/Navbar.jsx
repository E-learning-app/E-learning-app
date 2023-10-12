import React from "react";
import { Dropdown, Navbar, Avatar } from "flowbite-react";
import { Link } from "react-router-dom";


function Navbars() {
  const navbarStyle = {
    backgroundColor: "#F9FAFB",
  };
  return (
    <div >
         <Navbar  fluid rounded style={navbarStyle}>
        <Navbar.Brand>
          <Link to="home">
            <i
              className="fas fa-book-open fa-2x me-3"
              style={{ color: "#ff6219" }}
            ></i>
            <span
              className="self-center whitespace-nowrap text-xxl font-semibold dark:text-black"
              style={{ color: "black", fontSize: "24px" }}
            >
              E-LEARNING
            </span>
          </Link>
        </Navbar.Brand>
        <div className="flex md:order-2">
          <Dropdown
            arrowIcon={false}
            inline
            label={
              <Avatar
                alt="User settings"
                img=""
                rounded
                style={{ height: "60px", width: "60px" }}
              />
            }
          >
            <Dropdown.Header>
              <span className="block text-sm">El Hesh</span>
              <span className="block truncate text-sm font-medium">
                elhesh@gmail.com
              </span>
            </Dropdown.Header>
            <p>Settings</p>
            <Dropdown.Divider />
            <Link to="/">
              <span>Sign out</span>
            </Link>
          </Dropdown>
          <Navbar.Toggle />
        </div>
        <Navbar.Collapse>
        <span
              className="flex items-center"
              style={{ color: "black", fontSize: "24px" }}
            >
              Admin dashboard
            </span>
        </Navbar.Collapse>
      </Navbar>  
      </div>
  );
}

export default Navbars;
