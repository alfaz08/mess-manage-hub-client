import useAuth from "../../../../hooks/useAuth";
import usePayment from "../../../../hooks/usePayment";
import useTotalMeal from "../../../../hooks/useTotalMeal";

const AdminHome = () => {
  const { user } = useAuth();

  const [totalMeal] = useTotalMeal();
  const [totalPayment] = usePayment();

  const totalAllMeal = totalMeal?.reduce(
    (total, item) => total + item.totalMeal,
    0
  );
  console.log(totalAllMeal);

  const totalDeposit = totalPayment?.reduce(
    (total, item) => total + item.price,
    0
  );
  console.log(totalDeposit);

  const mealRate = parseFloat(totalDeposit / totalAllMeal).toFixed(3);

  //breakfast
  const breakfast = totalMeal?.filter((user) =>
    user?.selectedMealOptions.includes("breakfast")
  );

  //lunch
  const lunch = totalMeal?.filter((user) =>
    user?.selectedMealOptions.includes("lunch")
  );

  //dinner
  const dinner = totalMeal?.filter((user) =>
    user?.selectedMealOptions.includes("dinner")
  );

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
        <h2>Total Breakfast: {breakfast?.length}</h2>
        <h2>Total Lunch: {lunch?.length}</h2>
        <h2>Total Dinner: {dinner?.length}</h2>

        <h2>Meal Rate till Today: {mealRate}</h2>
      </div>
    </div>
  );
};

export default AdminHome;
