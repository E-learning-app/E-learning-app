import {
  createBrowserRouter,
  RouterProvider,
  Route,
  Outlet,
} from "react-router-dom";
import React from "react";
import Login from "./Component/Login";
import Signup from "./Component/Signup";
import Home from "./Component/Home";
import Navbars from "./Component/Navbar";
import Sidebars from "./Component/HomePage/Sidebar";
import Users from "./Component/HomePage/Users";

const Layout = () => {
  return (
    <div >
      <Navbars />

      <div className="flex" style={{ minHeight: '100vh' }}>
        <div>
          <Sidebars />
        </div>
        <div className='flex flex-grow-1' style={{ minHeight: '100vh' }}>
          <Outlet />
        </div>
      </div>
    </div>
  );
};

const router = createBrowserRouter([
  {
    path: "/",
    element: <Layout />,
    children: [
      {
        path: "/home",
        element: <Home />,
      },
      {
        path: "/users",
        element: <Users />,
      },
    ],
  },
  {
    path: "/signup",
    element: <Signup />,
  },
  {
    path: "/login",
    element: <Login />,

  },
]);

function App() {
  return (
    <div>
      <div>
        <RouterProvider router={router} />
      </div>
    </div>
  );
}
export default App;
