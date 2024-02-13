import useAuth from "../../../../hooks/useAuth";
import useMyMeal from "../../../../hooks/useMyMeal";
import useProfile from "../../../../hooks/useProfile";
import useSingleDeposit from "../../../../hooks/useSingleDeposit";
import { FaDollarSign } from "react-icons/fa6";

import { MdOutlineBookmarkAdd } from "react-icons/md";
import { GiHotMeal } from "react-icons/gi";




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
      
      <div className="mx-auto text-center border-red-300 border-y-4 py-4 md:w-4/12 my-8">
    <h3 className="text-3xl uppercase ">Welcome {user?.displayName} DASHboard</h3>
   <h2>Whole meal data this month</h2>
    </div>



     

      <div className="mx-auto text-center md:w-6/12 my-6">
      <div className="stats shadow">
  
  <div className="stat bg-red-200">
    <div className="stat-figure text-primary">
    

    </div>
    <div className="stat-title">Deposit Money</div>
    <div className="stat-value text-primary flex gap-2"> <FaDollarSign className="mt-3 text-xl"/> {totalDeposit}</div>

  </div>
  
  
  <div className="stat  bg-red-200">
    <div className="stat-figure text-secondary">
    

    </div>
    <div className="stat-title">Total Meal</div>
    <div className="stat-value text-secondary flex gap-6"><GiHotMeal className="text-xl mt-3"/>{totalMeal}</div>
    
  </div>

  
</div>
      </div>

 <div className="mx-auto text-center rounded-lg md:w-4/12 my-8">
 <div className="stat  bg-red-200">
    <div className="stat-figure text-primary">
    

    </div>
    <div className="stat-title">Bazar Booking Date</div>
    <div className="stat-value text-primary flex gap-2 justify-center"> < MdOutlineBookmarkAdd className="mt-1"></MdOutlineBookmarkAdd>{
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
   
  </div>
 </div>


     
    </div>
  );
};

export default UserHome;