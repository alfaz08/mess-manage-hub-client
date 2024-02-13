import { Helmet } from "react-helmet-async";
import useTotalMeal from "../../../../hooks/useTotalMeal";
import SectionTitle from "../../../SectionTitle/SectionTitle";
import { FaTrashAlt } from "react-icons/fa";

const TodayCount = () => {
  const [totalMeal] = useTotalMeal();
console.log(totalMeal);

const current = new Date()
  const currentDay = current.getDate();
  const currentMonth =current.getMonth()

  

  const todayMeal = totalMeal.filter(item=>{
    const itemDate = new  Date(item.mealDate)
    const itemDay= itemDate.getDate()
    const itemMonth = itemDate.getMonth()
    
    return itemDay=== currentDay && itemMonth === currentMonth
  })
 
  console.log('today MEal',todayMeal);


const totalTodayMeal = todayMeal?.reduce(
  (total, item) => total + item.totalMeal,
  0
);

//breakfast
const tomorrowBreakfast = todayMeal?.filter(user =>
  user?.selectedMealOptions.includes('breakfast')
);


 
//lunch
const tomorrowLunch = todayMeal?.filter(user =>
  user?.selectedMealOptions.includes('lunch')
);

//dinner
const tomorrowDinner = todayMeal?.filter(user =>
  user?.selectedMealOptions.includes('dinner')
);





  return (
    <div>
      <Helmet>
        <title>Mess Manage | Deposit Money</title>
      </Helmet>
      <SectionTitle
        heading="Today Meal List"
        subHeading=""
      ></SectionTitle>
      <div className="flex justify-evenly my-4">
        <h2>Today  Meal: {totalTodayMeal}</h2>
        
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
            {todayMeal?.map((user, index) => (
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

export default TodayCount ;
