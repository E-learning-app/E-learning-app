import React from "react";
import { Dropdown, Navbar, Avatar } from "flowbite-react";
import { Link } from "react-router-dom";


function Navbars() {
  return (
    <div style={{backgroundColor: "white" }}>
         <Navbar fluid rounded>
        <Navbar.Brand>
          <Link to="/home">
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
            <Link to="/login">
              <span>Sign out</span>
            </Link>
          </Dropdown>
          <Navbar.Toggle />
        </div>
        <Navbar.Collapse>
          <form className="flex items-center">
            <label htmlFor="search" className="sr-only">
              Search
            </label>
            <div className="relative w-full xl:w-96">
              <input
                type="text"
                id="search"
                className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-orange-500 focus:border-orange-500 block w-full px-4 py-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-orange-500 dark:focus:border-orange-500"
                placeholder="Search for a class..."
                required
              />
            </div>
          </form>
        </Navbar.Collapse>
      </Navbar>  
      </div>
  );
}

export default Navbars;