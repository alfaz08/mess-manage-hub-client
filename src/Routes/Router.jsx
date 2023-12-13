import { createBrowserRouter } from "react-router-dom";
import MainLayout from "../layout/MainLayout";
import ErrorElement from "../pages/ErrorElements/ErrorElement";
import Home from "../pages/Home/Home";
import Login from "../pages/Login/Login";
import SignUp from "../pages/SignUp/SignUp";
import Dashboard from "../layout/Dashboard";
import UserHome from "../pages/Dashboard/User/UserHome/UserHome";
import AdminHome from "../pages/Dashboard/Admin/AdminHome/AdminHome";

const router = createBrowserRouter([
  {
   path: "/",
   element: <MainLayout></MainLayout>,
   errorElement: <ErrorElement></ErrorElement>,
   children:[
    {
      path: "/",
   element: <Home></Home>
    },
    {
      path: "login",
   element: <Login></Login>
    },
    {
      path: "signUp",
      element: <SignUp></SignUp>
    }
   ]
  },

  {
    path: "dashboard",
    element: <Dashboard></Dashboard>,
    errorElement: <ErrorElement></ErrorElement>,
    children:[

      //for users
      {
        path: "userHome",
        element: <UserHome></UserHome>
      },



      //for admin
      {
        path: "adminHome",
        element: <AdminHome></AdminHome>
      }
    ]
  }
   ]);

export default router