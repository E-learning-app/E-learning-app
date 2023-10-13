import {
  createBrowserRouter,
  RouterProvider,
  Route,
  Outlet,
} from "react-router-dom";

// import React, { createContext, useState } from "react";
// import Login from "./Component/Login";
// import Signup from "./Component/Signup";
// import Home from "./Component/Admin/Home";
// import Navbars from "./Component/Navbar";
// import Sidebars from "./Component/Admin/Sidebar";
// import Users from "./Component/Admin/Users";
// import Classes from "./Component/Admin/Classes";
// import Userhome from "./Component/User/Userhome";
import AddCourse from "./Component/Admin/AddCourse";

// export const userContext = createContext();
// const Layout = () => {
//   return (
//     <div>
//       <div>
//         <Navbars />
//         <div className="flex" style={{ minHeight: "100vh" }}>
//           <div>
//             <Sidebars />
//           </div>
//           <div className="flex flex-grow-1" style={{ minHeight: "100vh" }}>
//             <Outlet />
//           </div>
//         </div>
//       </div>
//     </div>
//   );
// };
// const UserLayout = () => {
//   return (
//     <div>
//       <div>
//         <Navbars />
//         <div className="flex" style={{ minHeight: "100vh" }}>
//           <div>
//             <Userhome />
//           </div>
//           <div className="flex flex-grow-1" style={{ minHeight: "100vh" }}>
//             <Outlet />
//           </div>
//         </div>
//       </div>
//     </div>
//   );
// };

// const router = createBrowserRouter([
//   {
//     path: "/",
//     element: <Login />,
//   },
//   {
//     path: "/signup",
//     element: <Signup />,
//   },
//   {
//     path: "/layout",
//     element: <Layout />,
//     children: [
//       {
//         path: "admin/home",
//         element: <Home />,
//       },
//       {
//         path: "admin/users",
//         element: <Users />,
//       },
//       {
//         path: "admin/classes",
//         element: <Classes />,
//       },
//     ],
//   },
//   {
//     path: "/UserLayout",
//     element: <UserLayout />,
//     children: [
//       {
//         path: "user/home",
//         element: <Userhome />,
//       },
//     ],
//   },
// ]);

function App() {
  // const [user, setUser] = useState("");
  // console.log("i'm cosole logged from app ", user);
  return (
    <AddCourse />
    // <div>
    //   <userContext.Provider value={{ user, setUser }}>
    //     <div>
    //       <RouterProvider router={router} />
    //     </div>
    //   </userContext.Provider>
    // </div>
  );
}
export default App;
