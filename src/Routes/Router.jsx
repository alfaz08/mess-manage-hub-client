import { createBrowserRouter } from "react-router-dom";
import MainLayout from "../layout/MainLayout";
import ErrorElement from "../pages/ErrorElements/ErrorElement";
import Home from "../pages/Home/Home";
import Login from "../pages/Login/Login";
import SignUp from "../pages/SignUp/SignUp";
import Dashboard from "../layout/Dashboard";
import UserHome from "../pages/Dashboard/User/UserHome/UserHome";
import AdminHome from "../pages/Dashboard/Admin/AdminHome/AdminHome";
import AddMeal from "../pages/Dashboard/Admin/AddMeal/AddMeal";
import AllUsers from "../pages/Dashboard/Admin/UserList/AllUsers";
import PrivateRoute from "./PrivateRoute";
import AdminRoute from "./AdminRoute";

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
        element: <PrivateRoute><UserHome></UserHome></PrivateRoute>
      },



      //for admin
      {
        path: "adminHome",
        element: <AdminRoute><AdminHome></AdminHome></AdminRoute>
      },
      {
        path: "addMeal",
        element: <AdminRoute><AddMeal></AddMeal></AdminRoute>
      },
      {
        path: "allUsers",
        element: <AdminRoute><AllUsers></AllUsers></AdminRoute>
      },
    ]
  }
   ]);

export default router