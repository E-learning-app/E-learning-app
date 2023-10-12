import {
  createBrowserRouter,
  RouterProvider,
  Route,
  Outlet,
} from "react-router-dom";
import React from "react";
import Login from "./Component/Login";
import Signup from "./Component/Signup";
import Home from "./Component/Admin/Home";
import Navbars from "./Component/Navbar";
import Sidebars from "./Component/Admin/Sidebar";
import Users from "./Component/Admin/Users";
import Classes from "./Component/Admin/Classes";

const Layout = () => {
  return (
    <div>
    <div >
      <Navbars />
      <div className="flex" style={{ minHeight: '100vh' }}>
        <div>
          <Sidebars />
        </div>
        <div className="flex flex-grow-1" style={{ minHeight: "100vh" }}>
          <Outlet />
        </div>
      </div>
    </div>
    </div>
  );
};

const router = createBrowserRouter([
  {
    path: "/", 
    element: <Login />,
  },
  {
    path: "/signup",
    element: <Signup />,
  },
  {
    path: "/layout",
    element: <Layout />,
    children: [
      {
        path: "home",
        element: <Home />,
      },
      {
        path: "users",
        element: <Users />,
      },
      {
        path: "classes",
        element: <Classes />,
      },
    ],
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
