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

  

 




 


  return (
    <div className="ml-2">



<div className="mx-auto text-center border-red-300 border-y-4 py-4 md:w-4/12 my-8">
    <h3 className="text-3xl uppercase ">Welcome {user?.displayName} DASHboard</h3>
   <h2>Whole data of your mess</h2>
    </div>


      
<div className="mx-auto text-center md:w-4/12 my-8">
<div className=" stats shadow mt-4 ">
  
  <div className="stat bg-red-200">
    <div className="stat-figure text-secondary">
    <FaUsers className="text-4xl" />

    </div>
    <div className="stat-title text-black">Total User</div>
    <div className="stat-value">{stats?.usersCount}</div>
  </div>


  <div className="stat bg-red-200">
    <div className="stat-figure text-secondary">
    <RiAdminLine className="text-4xl" />

    </div>
    <div className="stat-title text-black">Total Admin</div>
    <div className="stat-value">{stats?.adminCount}</div>
    
  </div>
  
  <div className="stat bg-red-200">
    <div className="stat-figure text-secondary">
    <GiMeal className="text-4xl"/>
    </div>
    <div className="stat-title text-black">Total Meal</div>
    <div className="stat-value">{stats?.totalMealsThisMonth}</div>
    
  </div>
  
  <div className="stat bg-red-200">
    <div className="stat-figure text-secondary">
    <MdOutlineAttachMoney className="text-4xl"/>

    </div>
    <div className="stat-title text-black">Total Deposit</div>
    <div className="stat-value">{stats?.totalPaymentThisMonth}</div>
    
  </div>
  
  
</div>
</div>
   
      
<div className="mx-auto text-center md:w-4/12 my-8">

<div className=" stats shadow mt-4">
  
 


  
  <div className="stat bg-red-200">
    <div className="stat-figure text-secondary">
    <GiMeal className="text-4xl"/>
    </div>
    <div className="stat-title text-black">Total Meal</div>
    <div className="stat-value">{stats?.totalMealsThisMonth}</div>
    
  </div>
  
  
  <div className="stat bg-red-200">
    <div className="stat-figure text-secondary">
    <MdOutlineFreeBreakfast className="text-4xl"/>
    </div>
    <div className="stat-title text-black">Breakfast</div>
    <div className="stat-value">{stats?.breakfastMealsThisMonth}</div>

  </div>
  <div className="stat bg-red-200">
    <div className="stat-figure text-secondary">
    <MdOutlineDinnerDining className="text-4xl"/>    </div>
    <div className="stat-title text-black">Lunch</div>
    <div className="stat-value">{stats?.lunchMealsThisMonth}</div>
   
  </div>
  <div className="stat bg-red-200">
    <div className="stat-figure text-secondary">
    <MdOutlineDinnerDining className="text-4xl"/>
    </div>
    <div className="stat-title text-black">Dinner</div>
    <div className="stat-value">{stats?.dinnerMealsThisMonth}</div>
    
  </div>
  
</div>
</div>






    </div>
  );
};

export default AdminHome;
