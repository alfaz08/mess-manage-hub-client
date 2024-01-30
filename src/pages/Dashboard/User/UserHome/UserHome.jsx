import useAuth from "../../../../hooks/useAuth";
import useMyMeal from "../../../../hooks/useMyMeal";
import useProfile from "../../../../hooks/useProfile";
import useSingleDeposit from "../../../../hooks/useSingleDeposit";


const UserHome = () => {
  const {user} =useAuth()
  const normalizedUserInfo =useProfile()
  console.log(normalizedUserInfo);
 
  const [myDeposit] =useSingleDeposit()
  console.log(myDeposit);
  const totalDeposit =myDeposit.reduce((total,item)=>total+item.price,0)
  console.log(totalDeposit);
  
  const [myBookMeal] =useMyMeal()
  console.log(myBookMeal);

  const mealCost = parseFloat(totalDeposit/(myBookMeal.length))

  return (
    <div className='grid grid-cols-1 md:grid-cols-4'>
      
      <div className='col-span-2'>
      <div className="card card-compact bg-base-100 shadow-xl justify-center items-center mt-20">
  <figure><img src={user?.photoURL} alt="Shoes" /></figure>
  <div className="card-body">
   
    
    
  </div>
</div>
      </div>
      <div className=' col-span-2 mt-20'>
      <div className="">
     <div>
      <h2>Bazar Booking Date:
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
          
          
    }
      </h2>
     </div>
    <h2>spend money:{totalDeposit} TK</h2>
    <h2>Total meal: {myBookMeal.length} </h2>
    <h2>Overall Meal Rate: {mealCost} </h2>
    </div>
        
      </div>
    </div>
  );
};

export default UserHome;