import { NavLink, Outlet } from "react-router-dom";
import { FaAd, FaCalendar, FaHome, FaList, FaSearch, FaShoppingCart,FaUtensils, FaBook, FaUser } from "react-icons/fa";
const Dashboard = () => {

 const isAdmin =false


  return (
    <div className="flex">
      {/* dashboard side bar */}
      <div className="w-64 min-h-screen bg-green-200">
         <ul className="menu">


     {
      isAdmin ?
      <>
       <li>
              <NavLink to="/dashboard/adminHome">
              <FaHome></FaHome>
                Admin Home
                </NavLink>
            </li>
            <li>
              <NavLink to="/dashboard/addItems">
              <FaUtensils></FaUtensils>
               Add Items
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
              <NavLink to="/dashboard/users">
              <FaUser></FaUser>
                All Users
                </NavLink>
            </li>
      </>
      :
     
      <>
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
         {/* dashboard content */}
        <div className="flex-1">
          <Outlet></Outlet>
        </div>

    </div>
  );
};

export default Dashboard;