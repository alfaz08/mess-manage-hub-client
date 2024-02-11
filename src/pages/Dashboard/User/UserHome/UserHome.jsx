import useAuth from "../../../../hooks/useAuth";
import useMyMeal from "../../../../hooks/useMyMeal";
import useProfile from "../../../../hooks/useProfile";
import useSingleDeposit from "../../../../hooks/useSingleDeposit";
import { MdOutlineMail } from "react-icons/md";


import SectionTitle from "../../../SectionTitle/SectionTitle";
import { FaUserAlt } from "react-icons/fa";
import { MdAttachMoney } from "react-icons/md";
import { GiMeal } from "react-icons/gi";

import { MdOutlineBookmarkAdded } from "react-icons/md";




const UserHome = () => {
  const {user} =useAuth()
  const normalizedUserInfo =useProfile()
  const currentDate = new Date();
  const currentMonth = currentDate.getMonth() + 1; 

  const [myDeposit] =useSingleDeposit()
  const totalDepositThisMonth = myDeposit?.filter(item => {
    const totalDeposit = new Date(item.date);
    return totalDeposit.getMonth() + 1 === currentMonth;
  });

  const totalDeposit =totalDepositThisMonth.reduce((total,item)=>total+item.price,0)
  
  const [myBookMeal] =useMyMeal()
  
  const totalMealThisMonth = myBookMeal?.filter(item => {
    const totalMeal = new Date(item.mealDate);
    return totalMeal.getMonth() + 1 === currentMonth;
  });

  const totalMeal =totalMealThisMonth.reduce((total,item)=>total+item.totalMeal,0)

  


 

  

  return (
    <div className=''>
      
      <SectionTitle
        heading="Profile"
        subHeading="Welcome to Your"
      ></SectionTitle>



      <div className="flex justify-center">
      <div className="card w-96 bg-base-100 ">
  <figure><img className="mt-4 w-96 h-96" src={user?.photoURL} alt="Shoes" /></figure>
  <div className="card-body grid justify-center">
  <div className="flex ">
    <FaUserAlt className="mt-1 text-xl" />
    <h2 className="card-title">
    User Name: {user?.displayName}</h2>
    </div>
   
    <div className="flex ">
    <MdOutlineMail className="mt-1 text-xl" />
    <h2 className="card-title">
      User Email: {user?.email}</h2>
    </div>

    <div className="flex ">
    <MdAttachMoney className="mt-1 text-2xl" />
    <h2 className="card-title">
    spend money: {totalDeposit} TK</h2>
    </div>

    <div className="flex gap-2">
    <GiMeal className="mt-1 text-2xl" />
    <h2 className="card-title">
    Total meal: {totalMeal}</h2>
    </div>


    <div className="flex gap-2">
    <MdOutlineBookmarkAdded className="mt-1 text-2xl" />
    <h2 className="card-title">
    Bazar Booking Date:
      {
       normalizedUserInfo?.bookingDate ==="none"?
       null
       :
        <h2>{normalizedUserInfo?.bookingDate &&
          new Intl.DateTimeFormat("en-US", {
            year: "numeric",
            day: "numeric",
            month: "long",
          }).format(new Date(normalizedUserInfo?.bookingDate))}
          </h2>
          
          
    }</h2>
    </div>


  </div>
</div>
      </div>



     
    </div>
  );
};

export default UserHome;