import { NavLink, Outlet } from "react-router-dom";
import { FaAd, FaCalendar, FaHome, FaList, FaSearch, FaShoppingCart,FaUtensils, FaBook, FaUser } from "react-icons/fa";
import useAuth from "../hooks/useAuth";
import { useState } from "react";
import useAdmin from "../hooks/useAdmin";
import { MdAddBox } from "react-icons/md";
import { FaDollarSign } from "react-icons/fa6";

import { FaSackDollar } from "react-icons/fa6";
import { GiMeal } from "react-icons/gi";
import { MdOutlineShoppingBag } from "react-icons/md";
import { TfiAnnouncement } from "react-icons/tfi";
import { MdToday } from "react-icons/md";
import { MdNextWeek } from "react-icons/md";
import { FaListOl } from "react-icons/fa";
import { FaThList } from "react-icons/fa";
            import { ImList } from "react-icons/im";


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
       <li >
              <NavLink to="/dashboard/adminHome">
              <FaHome className="text-xl"></FaHome>
                Admin Home
                </NavLink>
            </li>
            <li >
              <NavLink to="/dashboard/addMeal">
              <FaUtensils className="text-xl"></FaUtensils>
               Add Meal
                </NavLink>
            </li>
            <li>
              <NavLink to="/dashboard/addBazar">
              <MdOutlineShoppingBag className="text-xl"></MdOutlineShoppingBag>
               Add bazar
                </NavLink>
            </li>
            <li>
              <NavLink to="/dashboard/announcement">
              <TfiAnnouncement className="text-xl"></TfiAnnouncement>
               Add Announcement
                </NavLink>
            </li>
            
            <li>
              <NavLink to="/dashboard/bookings">
              <FaList className="text-xl"></FaList>
                Bazar Bookings List
                </NavLink>
            </li>
            <li>
              <NavLink to="/dashboard/allBazar">
              <FaList className="text-xl"></FaList>
                All Bazar
                </NavLink>
            </li>
            <li>
              <NavLink to="/dashboard/allMeal">
              <FaListOl className="text-xl"></FaListOl>
                All Meal
                </NavLink>
            </li>
            <li>
              <NavLink to="/dashboard/allAnnouncement">
              <FaThList className="text-xl"></FaThList>
                All Announcement
                </NavLink>
            </li>
            

            <li>
              <NavLink to="/dashboard/allUsers">
              <ImList className="text-xl"></ImList>
                All Users
                </NavLink>
            </li>
            <li>
              <NavLink to="/dashboard/paymentList">
              <FaSackDollar className="text-xl"></FaSackDollar>
                Payment List
                </NavLink>
            </li>
            <li>
              <NavLink to="/dashboard/nextDayMeal">
              <MdNextWeek className="text-xl"> </MdNextWeek>
              Tommorrow total Meal
                </NavLink>
            </li>
            <li>
              <NavLink to="/dashboard/todayCount">
              <MdToday className="text-xl"></MdToday>
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
              <FaHome className="text-xl font-bold"></FaHome>
              <span className="text-lg">User Home</span>
                </NavLink>
            </li>
       <li>
              <NavLink to="/dashboard/setMeal">
              <MdAddBox className="text-xl font-bold"></MdAddBox>
              <span className=" text-lg">Book Your Meal</span>
                
                </NavLink>
            </li>
            <li>
              <NavLink to="/dashboard/payment">
              <FaDollarSign className="text-xl font-bold"></FaDollarSign>
              <span className=" text-lg">Payment</span>
                
                </NavLink>
            </li>
            <li>
              <NavLink to="/dashboard/myDeposit">
              <FaSackDollar className="text-xl font-bold"></FaSackDollar>
              <span className=" text-lg">My Deposit</span>
                
                </NavLink>
            </li>
            <li>
              <NavLink to="/dashboard/myMeal">
              <GiMeal className="text-xl font-bold"></GiMeal>
              <span className=" text-lg">My Meal List</span>
                
                </NavLink>
            </li>
       </div>
      </>
     }






            {/* home */}
        <div className="divider"></div>
        <li>
              <NavLink to="/">
              <FaHome className="text-xl font-bold"></FaHome>
              <span className=" text-lg">Home</span>
               
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