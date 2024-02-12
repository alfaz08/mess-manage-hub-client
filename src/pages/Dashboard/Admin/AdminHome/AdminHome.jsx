import { useQuery } from "@tanstack/react-query";
import useAuth from "../../../../hooks/useAuth";
import useAxiosSecure from "../../../../hooks/useAxiosSecure";
import usePayment from "../../../../hooks/usePayment";
import useTotalMeal from "../../../../hooks/useTotalMeal";
import { FaUsers } from "react-icons/fa6";
import { RiAdminLine } from "react-icons/ri";
import { GiMeal } from "react-icons/gi";
import { MdOutlineAttachMoney } from "react-icons/md";
import { MdOutlineFreeBreakfast } from "react-icons/md";
import { MdOutlineDinnerDining } from "react-icons/md";



const AdminHome = () => {
  const { user } = useAuth();

  const [totalMeal] = useTotalMeal();
  console.log(totalMeal);
 
  const [totalPayment] = usePayment();

   
   const axiosSecure= useAxiosSecure()

   const {data: stats} = useQuery({
    queryKey:['admin-stats'],
    queryFn:async()=>{
      const res= await axiosSecure.get('/admin-stats')
      return res.data
    }
   })

   console.log('stats',stats);

// adminCount

// breakfastMealsThisMonth

// dinnerMealsThisMonth

// lunchMealsThisMonth

// mealRateThisMonth

// totalMealsThisMonth

// totalPaymentThisMonth

// usersCount


 


  return (
    <div >

      

      <div>
        <h2 className="text-4xl font-bold mt-8"> Hi, Welcome {user?.displayName}</h2>
      </div>

   
      <div className="stats shadow ">
  
  <div className="stat">
    <div className="stat-figure text-secondary">
    <FaUsers className="text-4xl" />

    </div>
    <div className="stat-title">Total User</div>
    <div className="stat-value">{stats?.usersCount}</div>
  </div>


  <div className="stat">
    <div className="stat-figure text-secondary">
    <RiAdminLine className="text-4xl" />

    </div>
    <div className="stat-title">Total Admin</div>
    <div className="stat-value">{stats?.adminCount}</div>
    
  </div>
  
  <div className="stat">
    <div className="stat-figure text-secondary">
    <GiMeal className="text-4xl"/>
    </div>
    <div className="stat-title">Total Meal</div>
    <div className="stat-value">{stats?.totalMealsThisMonth}</div>
    
  </div>
  
  <div className="stat">
    <div className="stat-figure text-secondary">
    <MdOutlineAttachMoney className="text-4xl"/>

    </div>
    <div className="stat-title">Total Deposit</div>
    <div className="stat-value">{stats?.totalPaymentThisMonth}</div>
    
  </div>
  <div className="stat">
    <div className="stat-figure text-secondary">
      <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" className="inline-block w-8 h-8 stroke-current"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 8h14M5 8a2 2 0 110-4h14a2 2 0 110 4M5 8v10a2 2 0 002 2h10a2 2 0 002-2V8m-9 4h4"></path></svg>
    </div>
    <div className="stat-title">Meal Rate Till Now</div>
    <div className="stat-value">{stats?.mealRateThisMonth}</div>
  
  </div>
  <div className="stat">
    <div className="stat-figure text-secondary">
    <MdOutlineFreeBreakfast className="text-4xl"/>
    </div>
    <div className="stat-title">Breakfast</div>
    <div className="stat-value">{stats?.breakfastMealsThisMonth}</div>

  </div>
  <div className="stat">
    <div className="stat-figure text-secondary">
    <MdOutlineDinnerDining className="text-4xl"/>    </div>
    <div className="stat-title">Lunch</div>
    <div className="stat-value">{stats?.lunchMealsThisMonth}</div>
   
  </div>
  <div className="stat">
    <div className="stat-figure text-secondary">
    <MdOutlineDinnerDining className="text-4xl"/>
    </div>
    <div className="stat-title">Dinner</div>
    <div className="stat-value">{stats?.dinnerMealsThisMonth}</div>
    <div className="stat-desc">↘︎ 90 (14%)</div>
  </div>
  
</div>


    </div>
  );
};

export default AdminHome;
