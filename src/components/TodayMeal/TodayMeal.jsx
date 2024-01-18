import useMeal from "../../hooks/useMeal";


const TodayMeal = () => {


  const [allMeal] =useMeal()

  const current = new Date()
  const currentDay = current.getDate();
  const currentMonth =current.getMonth()

  

  const todayMeal = allMeal.filter(item=>{
    const itemDate = new  Date(item.date)
    const itemDay= itemDate.getDate()
    const itemMonth = itemDate.getMonth()
    
    return itemDay=== currentDay && itemMonth === currentMonth
  })


  console.log(todayMeal);

  return (
    <div>
      <h2 className="text-3xl uppercase md:w-4/12 border-y-4 py-4 text-center flex justify-center items-center">Today Meal</h2>
      <div>
        
      </div>
    </div>
  );
};

export default TodayMeal;