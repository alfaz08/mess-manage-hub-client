import useMeal from "../../hooks/useMeal";


const TodayMeal = () => {


  const [allMeal] =useMeal()

  const current = new Date();
const currentDay = current.getDate();
const currentMonth = current.getMonth();

const todayMeal = allMeal.filter(item => {
  const itemDate = new Date(item.date);
  const itemDay = itemDate.getDate();
  const itemMonth = itemDate.getMonth();

  return itemDay === currentDay && itemMonth === currentMonth;
});


  console.log('today meal',todayMeal);

  return (
    <div>
      <div className="grid justify-center">
      <h2 className="grid   text-3xl uppercase  border-y-4 py-4 text-center ">Today Meal</h2>
      </div>
      
      <div className="grid grid-cols-1 md:grid-cols-3">
        {
          todayMeal ?
          todayMeal?.map(item=>
            <div key={item._id} className="card w-96 bg-base-100 shadow-xl">


{
                item.time ==='breakfast' ?
                <figure className="px-10 pt-10">
    <img src="https://i.ibb.co/gFW8DbD/Breakfast-category-icon.png" alt="Shoes" className="rounded-xl" />
  </figure>
  :
  item.time==='lunch'?
  <figure className="px-10 pt-10">
    <img src="https://i.ibb.co/mb9dYF8/lunch-chalk.png" alt="Shoes" className="rounded-xl" />
  </figure>
  :
  <figure className="px-10 pt-10">
    <img src="https://i.ibb.co/FxCC178/e303eb666db7f7dccdff7e47f383b1a3.jpg" alt="Shoes" className="rounded-xl" />
  </figure>

              }
  



  <div className="card-body items-center text-center">
    <h2 className="card-title">{item.title}</h2>
    <p>Total {item.time}: {item.totalMeal}</p>
    <p> Meal Time: {item.time}</p>
    <p>Date:  {item.date &&
                    new Intl.DateTimeFormat("en-US", {
                      year: "numeric",
                      day: "numeric",
                      month: "long",
                    }).format(new Date(item.date))}</p>
    <div className="card-actions">
     
    </div>
  </div>
</div>
            
            )

            :
            <p className="font-bold text-4xl">No Meal Today</p>
        }
      </div>
    </div>
  );
};

export default TodayMeal;