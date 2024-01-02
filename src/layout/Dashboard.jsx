import { NavLink, Outlet } from "react-router-dom";
import { FaAd, FaCalendar, FaHome, FaList, FaSearch, FaShoppingCart,FaUtensils, FaBook, FaUser } from "react-icons/fa";
import useAuth from "../hooks/useAuth";
import { useState } from "react";
import useAdmin from "../hooks/useAdmin";
const Dashboard = () => {



 const {user} =useAuth()
 const [isMenuOpen, setIsMenuOpen] = useState(false);
 const [isAdmin] =useAdmin()

  return (
    <div className="flex">
      {/* dashboard side bar */}
       <div className={`w-64 min-h-screen bg-red-200 sm:hidden md:block ${isMenuOpen ? 'hidden' : ''} `}>
         <ul className="menu">


     {
      isAdmin ?
      <>
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
              <NavLink to="/dashboard/manageItems">
              <FaList></FaList>
                Manage Items
                </NavLink>
            </li>
            <li>
              <NavLink to="/dashboard/bookings">
              <FaBook></FaBook>
                Manage Bookings
                </NavLink>
            </li>
            <li>
              <NavLink to="/dashboard/allUsers">
              <FaUser></FaUser>
                All Users
                </NavLink>
            </li>
      </>
      :
     
      <>
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
              <NavLink to="/dashboard/reservation">
              <FaCalendar></FaCalendar>
                Reservation
                </NavLink>
            </li>
            <li>
              <NavLink to="/dashboard/cart">
              <FaShoppingCart></FaShoppingCart>
                My Cart
                </NavLink>
            </li>
            <li>
              <NavLink to="/dashboard/review">
              <FaAd></FaAd>
                Add a Review
                </NavLink>
            </li>
            <li>
              <NavLink to="/dashboard/bookings">
              <FaList></FaList>
                Bookings
                </NavLink>
            </li>
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
        <li>
              <NavLink to="/order/salad">
              <FaSearch></FaSearch>
                Menu
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