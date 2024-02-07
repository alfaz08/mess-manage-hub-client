import useAuth from "../../../../hooks/useAuth";
import usePayment from "../../../../hooks/usePayment";
import useTotalMeal from "../../../../hooks/useTotalMeal";

const AdminHome = () => {
  const { user } = useAuth();

  const [totalMeal] = useTotalMeal();
  console.log(totalMeal);
  const [totalPayment] = usePayment();





  const currentDate = new Date();
const currentMonth = currentDate.getMonth() + 1; // Adding 1 because getMonth() returns zero-based index
// Filter meals for the current month
const mealsThisMonth = totalMeal?.filter(item => {
  const mealDate = new Date(item.mealDate);
  return mealDate.getMonth() + 1 === currentMonth;
});

const totalAllMeal = totalMeal
  ?.filter(item => {
    const mealDate = new Date(item.mealDate);
    return mealDate.getMonth() + 1 === currentMonth;
  })
  .reduce((total, item) => total + item.totalMeal, 0);
  console.log('final',totalAllMeal);



  const totalDeposit = totalPayment 
    ?. filter(item=>{
      const paymentDate = new Date(item.date)
      return paymentDate.getMonth()+1 ===currentMonth
    })
    .reduce((total,item)=>total+item.price,0)

    console.log('payment',totalDeposit);

  const mealRate = parseFloat(totalDeposit / totalAllMeal).toFixed(3);

 // Count breakfast, lunch, and dinner meals
const breakfast = mealsThisMonth?.filter(user =>
  user?.selectedMealOptions.includes("breakfast")
)?.length || 0;

const lunch= mealsThisMonth?.filter(user =>
  user?.selectedMealOptions.includes("lunch")
)?.length || 0;

const dinner = mealsThisMonth?.filter(user =>
  user?.selectedMealOptions.includes("dinner")
)?.length || 0;


console.log('Breakfast count:', breakfast);
console.log('Lunch count:', lunch);
console.log('Dinner count:', dinner);

  return (
    <div className="grid grid-cols-1 md:grid-cols-4">
      <div className="col-span-2">
        <div className="card card-compact bg-base-100 shadow-xl justify-center items-center mt-20">
          <figure>
            <img src={user?.photoURL} alt="Shoes" />
          </figure>
          <div className="card-body">
            <div className="card-actions justify-end">
              <button className="btn btn-warning">Buy Now</button>
            </div>
          </div>
        </div>
      </div>
      <div className=" col-span-2 mt-20">
        <h2>Total Deposit: {totalDeposit}</h2>
        <h2>Total Meal: {totalAllMeal}</h2>
        <h2>Total Breakfast: {breakfast}</h2>
        <h2>Total Lunch: {lunch}</h2>
        <h2>Total Dinner: {dinner}</h2>

        <h2>Meal Rate till Today: {mealRate}</h2>
      </div>
    </div>
  );
};

export default AdminHome;
