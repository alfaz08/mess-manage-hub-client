import { Helmet } from "react-helmet-async";
import useTotalMeal from "../../../../hooks/useTotalMeal";
import SectionTitle from "../../../SectionTitle/SectionTitle";
import { FaTrashAlt } from "react-icons/fa";

const TodayMealCalcu = () => {
  const [totalMeal] = useTotalMeal();
console.log(totalMeal);

const current = new Date();
const tomorrow = new Date(current);
tomorrow.setDate(current.getDate() + 1);

const tomorrowDay = tomorrow.getDate();
const tomorrowMonth = tomorrow.getMonth();

const tomorrowMeal = totalMeal.filter((item) => {
  const itemDate = new Date(item.mealDate);
  const itemDay = itemDate.getDate();
  const itemMonth = itemDate.getMonth();

  return itemDay === tomorrowDay && itemMonth === tomorrowMonth;
});

console.log(tomorrowMeal);

const totalTodayMeal = tomorrowMeal.reduce(
  (total, item) => total + item.totalMeal,
  0
);

//breakfast
const tomorrowBreakfast = tomorrowMeal?.filter(user =>
  user?.selectedMealOptions.includes('breakfast')
);


 
//lunch
const tomorrowLunch = tomorrowMeal?.filter(user =>
  user?.selectedMealOptions.includes('lunch')
);

//dinner
const tomorrowDinner = tomorrowMeal?.filter(user =>
  user?.selectedMealOptions.includes('dinner')
);





  return (
    <div>
      <Helmet>
        <title>Mess Manage | Deposit Money</title>
      </Helmet>
      <SectionTitle
        heading="Tomorrow meal List"
        subHeading="What's new?"
      ></SectionTitle>
      <div className="flex justify-evenly my-4">
        <h2>Tomorrow Meal: {totalTodayMeal}</h2>
        
        <h2>Total Breakfast: {tomorrowBreakfast.length}</h2>
        <h2>Total Lunch: {tomorrowLunch?.length}</h2>
        <h2>Total Dinner: { tomorrowDinner.length}</h2>
        <h2>Sort By Date: {}</h2>
      </div>

      <div className="overflow-x-auto">
        <table className="table table-zebra ">
          {/* head */}
          <thead>
            <tr>
              <th>#</th>
              <td>Name</td>

              <td>Email</td>
              <td>Meal Date</td>
              <td>Meal Time</td>
            </tr>
          </thead>
          <tbody>
            {tomorrowMeal?.map((user, index) => (
              <tr key={user._id}>
                <th>{index + 1}</th>
                <td>{user.name}</td>

                <td>{user.email}</td>

                <td>
                  {user.mealDate &&
                    new Intl.DateTimeFormat("en-US", {
                      year: "numeric",
                      day: "numeric",
                      month: "long",
                    }).format(new Date(user.mealDate))}
                </td>

                <td>
  {user?.selectedMealOptions.map((item, index) => (
    <span
      key={item}
      className={`p-2 mx-1 rounded ${
        item === 'breakfast'
          ? 'bg-yellow-200' // Set your desired color for breakfast
          : item === 'lunch'
          ? 'bg-green-200' // Set your desired color for lunch
          : item === 'dinner'
          ? 'bg-blue-200' // Set your desired color for dinner
          : ''
      }`}
    >
      {item}
    </span>
  ))}
</td>


              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default TodayMealCalcu;
