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
import AddBazar from "../pages/Dashboard/Admin/AddBazar/AddBazar";
import Payment from "../pages/Dashboard/User/Payment/Payment";
import ConfirmPayment from "../pages/Dashboard/User/Payment/ConfirmPayment";
import BookDate from "../pages/BookDate/BookDate";
import BazarBookingList from "../pages/Dashboard/Admin/BazarBookingList/BazarBookingList";
import BazarList from "../pages/Dashboard/Admin/BazarList/BazarList";
import MealList from "../pages/Dashboard/Admin/MealList/MealList";
import Announcement from "../pages/Dashboard/Admin/Announcement/Announcement";
import AllAnnouncement from "../pages/Dashboard/Admin/Announcement/AllAnnouncement";
import UserDeposit from "../pages/Dashboard/User/UserDeposit/UserDeposit";
import UserActivities from "../pages/Dashboard/User/UserActivities/UserActivities";
import SetMeal from "../pages/Dashboard/User/SetMeal/SetMeal";
import SingleTotalPayment from "../pages/Dashboard/Admin/TotalPayment/SingleTotalPayment";
import PaymentList from "../pages/Dashboard/Admin/PaymentList/PaymentList";
import MyMeal from "../pages/Dashboard/User/MyMeal/MyMeal";
import TodayMealCalcu from "../pages/Dashboard/Admin/TomorrowMeal/TodayMealCalcu";
import TodayCount from "../pages/Dashboard/Admin/TodayMealList/TodayCount";

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
    },
    {
      path: "bookDate",
      element: <PrivateRoute> <BookDate></BookDate> </PrivateRoute>
    },
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
      {
        path: "payment",
        element: <Payment></Payment> 
      },
      {
        path: "setMeal",
        element: <SetMeal></SetMeal> 
      },
      {
        path: "confirmPayment",
        element: <ConfirmPayment></ConfirmPayment> 
      },
      {
        path: "myDeposit",
        element: <UserDeposit></UserDeposit> 
      },
      {
        path: "myMeal",
        element: <MyMeal></MyMeal>
      },
      {
        path: "myActivities",
        element: <UserActivities></UserActivities>
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
      {
        path: "addBazar",
        element: <AdminRoute> <AddBazar></AddBazar> </AdminRoute>
      },
      {
        path: "bookings",
        element: <AdminRoute> <BazarBookingList></BazarBookingList> </AdminRoute>
      },
      {
        path: "allBazar",
        element: <AdminRoute> <BazarList></BazarList> </AdminRoute>
      },
      {
        path: "allMeal",
        element: <AdminRoute> <MealList></MealList> </AdminRoute>
      },
      {
        path: "announcement",
        element: <AdminRoute> <Announcement></Announcement> </AdminRoute>
      },
      {
        path: "allAnnouncement",
        element: <AdminRoute> <AllAnnouncement></AllAnnouncement> </AdminRoute>
      },
      {
        path: "paymentList",
        element: <AdminRoute> <PaymentList></PaymentList> </AdminRoute>
      },
      {
        path: "nextDayMeal",
        element: <AdminRoute> <TodayMealCalcu></TodayMealCalcu> </AdminRoute>
      },
      {
        path: "todayCount",
        element: <AdminRoute> <TodayCount></TodayCount> </AdminRoute>
      },
    ]
  }
   ]);

export default router