import useMeal from "../../hooks/useMeal";


const MealAll = () => {
  
  const [allMeal] =useMeal()
  console.log(allMeal);

  return (
    <div>
      <div className="grid justify-center mt-10">
    
      <h2 className="grid   text-3xl uppercase  border-y-4 py-4 text-center ">All Meal This Month</h2>
      </div>
      Sort by breakfast
      <div className="grid grid-cols-1 md:grid-cols-3 ">
        
          {
            
            allMeal?.map(item=>
              <div key={item._id} className="card w-96 mt-2 bg-base-100 shadow-xl">
    <figure className="px-10 pt-10">
      <img src="https://daisyui.com/images/stock/photo-1606107557195-0e29a4b5b4aa.jpg" alt="Shoes" className="rounded-xl" />
    </figure>
    <div className="card-body items-center text-center">
      <h2 className="card-title">{item.title}</h2>
      <p>Total Meal: {item.totalMeal}</p>
      <p> Meal Time: {item.time}</p>
      <p>Date:  {item.date &&
                      new Intl.DateTimeFormat("en-US", {
                        year: "numeric",
                        day: "numeric",
                        month: "long",
                      }).format(new Date(item.date))}</p>
      <div className="card-actions">
        <button className="btn bg-red-300">See Details</button>
      </div>
    </div>
  </div>
              
              )
          }

           
      </div>
    </div>
  );
};

export default MealAll;