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



     

      <div className="stats shadow">
  
  <div className="stat">
    <div className="stat-figure text-primary">
      <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" className="inline-block w-8 h-8 stroke-current"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z"></path></svg>
    </div>
    <div className="stat-title">Deposit Money</div>
    <div className="stat-value text-primary">  {totalDeposit}</div>
    <div className="stat-desc">21% more than last month</div>
  </div>
  <div className="stat">
    <div className="stat-figure text-primary">
      <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" className="inline-block w-8 h-8 stroke-current"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z"></path></svg>
    </div>
    <div className="stat-title">Bazar Booking Date</div>
    <div className="stat-value text-primary">   {
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
          
          
    }</div>
    <div className="stat-desc">21% more than last month</div>
  </div>
  
  <div className="stat">
    <div className="stat-figure text-secondary">
      <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" className="inline-block w-8 h-8 stroke-current"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M13 10V3L4 14h7v7l9-11h-7z"></path></svg>
    </div>
    <div className="stat-title">Total Meal</div>
    <div className="stat-value text-secondary">{totalMeal}</div>
    <div className="stat-desc">21% more than last month</div>
  </div>
  
  <div className="stat">
    <div className="stat-figure text-secondary">
      <div className="avatar online">
        <div className="w-16 rounded-full">
          <img src={user?.photoURL} />
        </div>
      </div>
    </div>
    <div className="stat-value">{user?.displayName}</div>
    <div className="stat-title">Tasks done</div>
    <div className="stat-desc text-secondary">31 tasks remaining</div>
  </div>
  
</div>

     
    </div>
  );
};

export default UserHome;