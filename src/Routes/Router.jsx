import { createBrowserRouter } from "react-router-dom";
import MainLayout from "../layout/MainLayout";
import ErrorElement from "../pages/ErrorElements/ErrorElement";
import Home from "../pages/Home/Home";
import Login from "../pages/Login/Login";
import SignUp from "../pages/SignUp/SignUp";

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
   ]);

export default router