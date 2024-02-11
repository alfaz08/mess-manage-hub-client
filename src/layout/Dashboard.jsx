import { NavLink, Outlet } from "react-router-dom";
import { FaAd, FaCalendar, FaHome, FaList, FaSearch, FaShoppingCart,FaUtensils, FaBook, FaUser } from "react-icons/fa";
import useAuth from "../hooks/useAuth";
import { useState } from "react";
import useAdmin from "../hooks/useAdmin";
const Dashboard = () => {



 const {user} =useAuth()
 const [isMenuOpen, setIsMenuOpen] = useState(true);
 const [isAdmin] =useAdmin()

  return (
    <div className="flex">
      {/* dashboard side bar */}
       <div className={`w-64 min-h-screen bg-red-200 sm:hidden md:block ${isMenuOpen ? 'hidden' : ''} `}>
         <ul className="menu">


     {
      isAdmin ?
      <>
       <div onClick={() => setIsMenuOpen(true)} className={`sm:hidden md:block ${isMenuOpen ? 'hidden' : ''} `}>
       <li>
              <img src={user?.photoURL} className="h-40 w-40 rounded-full ml-6" alt="" />
            </li>
       <li>
              <NavLink to="/dashboard/adminHome">
              <FaHome></FaHome>
                Admin Home
                </NavLink>
            </li>
            <li>
              <NavLink to="/dashboard/addMeal">
              <FaUtensils></FaUtensils>
               Add Meal
                </NavLink>
            </li>
            <li>
              <NavLink to="/dashboard/addBazar">
              <FaUtensils></FaUtensils>
               Add bazar
                </NavLink>
            </li>
            <li>
              <NavLink to="/dashboard/announcement">
              <FaUtensils></FaUtensils>
               Add Announcement
                </NavLink>
            </li>
            
            <li>
              <NavLink to="/dashboard/bookings">
              <FaList></FaList>
                Bazar Bookings List
                </NavLink>
            </li>
            <li>
              <NavLink to="/dashboard/allBazar">
              <FaList></FaList>
                All Bazar
                </NavLink>
            </li>
            <li>
              <NavLink to="/dashboard/allMeal">
              <FaList></FaList>
                All Meal
                </NavLink>
            </li>
            <li>
              <NavLink to="/dashboard/allAnnouncement">
              <FaList></FaList>
                All Announcement
                </NavLink>
            </li>

            <li>
              <NavLink to="/dashboard/allUsers">
              <FaUser></FaUser>
                All Users
                </NavLink>
            </li>
            <li>
              <NavLink to="/dashboard/paymentList">
              <FaUser></FaUser>
                Payment List
                </NavLink>
            </li>
            <li>
              <NavLink to="/dashboard/nextDayMeal">
              <FaUser></FaUser>
              Tommorrow total Meal
                </NavLink>
            </li>
            <li>
              <NavLink to="/dashboard/todayCount">
              <FaUser></FaUser>
              Today total Meal
                </NavLink>
            </li>
       </div>
      </>
      :
     
      <>
       <div onClick={() => setIsMenuOpen(true)} className={`sm:hidden md:block ${isMenuOpen ? 'hidden' : ''} `}>
       <li>
              <img src={user?.photoURL} className="h-40 w-40 rounded-full ml-6" alt="" />
            </li>
       <li>
              <NavLink to="/dashboard/userHome">
              <FaHome></FaHome>
                User Home
                </NavLink>
            </li>
       <li>
              <NavLink to="/dashboard/setMeal">
              <FaHome></FaHome>
                Book Your Meal
                </NavLink>
            </li>
            <li>
              <NavLink to="/dashboard/payment">
              <FaCalendar></FaCalendar>
                Payment
                </NavLink>
            </li>
            <li>
              <NavLink to="/dashboard/myDeposit">
              <FaCalendar></FaCalendar>
                My Deposit
                </NavLink>
            </li>
            <li>
              <NavLink to="/dashboard/myMeal">
              <FaCalendar></FaCalendar>
                My Meal List
                </NavLink>
            </li>
       </div>
      </>
     }






            {/* home */}
        <div className="divider"></div>
        <li>
              <NavLink to="/">
              <FaHome></FaHome>
                Home
                </NavLink>
            </li>
      


         </ul>
      </div>
      <div className="block lg:hidden">
          <button onClick={() => setIsMenuOpen(!isMenuOpen)}>
           
            <span className="text-2xl">&#9776;</span>
          </button>
        </div>
         {/* dashboard content */}
        <div className="flex-1">
          <Outlet></Outlet>
        </div>

    </div>
  );
};

export default Dashboard;