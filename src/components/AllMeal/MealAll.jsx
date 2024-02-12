import React, { useState } from "react";
import useMeal from "../../hooks/useMeal";

const MealAll = () => {
  const [allMeal] = useMeal();
  

  const currentDate = new Date();
  const currentMonth = currentDate.getMonth() + 1;

  const singleMealThisMonth = allMeal?.filter((item) => {
    const totalMeal = new Date(item.date);
    return totalMeal.getMonth() + 1 === currentMonth;
  });
 
const [sortMeal, setSortMeal] = useState("");

  const handleSort= (event)=>{
    const selectedValue = event.target.value;
    console.log("Selected value:", selectedValue);
    const sortedMeal = singleMealThisMonth.filter(item=>item.time===selectedValue)
    setSortMeal(sortedMeal)
  }
  console.log(sortMeal);


  const [currentPage, setCurrentPage] = useState(1);
  const itemsPerPage = 6;

  // Calculate the index range for the current page
  const indexOfLastItem = currentPage * itemsPerPage;
  const indexOfFirstItem = indexOfLastItem - itemsPerPage;
  const currentItems = singleMealThisMonth?.slice(
    indexOfFirstItem,
    indexOfLastItem
  );

  const paginate = (pageNumber) => setCurrentPage(pageNumber);



  return (
    <div>
      <div className="grid justify-center mt-10">
        <h2 className="grid text-3xl uppercase border-y-4 py-4 text-center ">
          All Meal This Month
        </h2>
      </div>
      <div>


      <div>
          <div className="flex mr-4 justify-end">
            <select
            className="border border-red-500 rounded px-4 py-2 mt-2"
              name="sortBy"
              id="sortBy"
             onChange={handleSort}
            >
              <option value="">
                {" "}
               
                sort
                
               
              </option>
              <option value="breakfast">Breakfast</option>
              <option value="lunch">Lunch</option>
              <option value="dinner">Dinner</option>
             
            </select>
          </div>
        </div>
   






      </div>


      {
        sortMeal ? 
        <div className="grid grid-cols-1 md:grid-cols-3 ">
        {sortMeal?.map((item) => (
          <div key={item._id} className="card w-96 mt-2 bg-base-100 shadow-xl">
            <figure className="px-10 pt-10">
              <img
                src="https://daisyui.com/images/stock/photo-1606107557195-0e29a4b5b4aa.jpg"
                alt="Shoes"
                className="rounded-xl"
              />
            </figure>
            <div className="card-body items-center text-center">
              <h2 className="card-title">{item.title}</h2>
              <p>Total {item.time}: {item.totalMeal}</p>
              <p> Meal Time: {item.time}</p>
              <p>
                Date:{" "}
                {item.date &&
                  new Intl.DateTimeFormat("en-US", {
                    year: "numeric",
                    day: "numeric",
                    month: "long",
                  }).format(new Date(item.date))}
              </p>
              <div className="card-actions">
                <button className="btn bg-red-300">See Details</button>
              </div>
            </div>
          </div>
        ))}
      </div>
        :
<div className="grid grid-cols-1 md:grid-cols-3 ">
        {currentItems?.map((item) => (
          <div key={item._id} className="card w-96 mt-2 bg-base-100 shadow-xl">
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
              <p>
                Date:{" "}
                {item.date &&
                  new Intl.DateTimeFormat("en-US", {
                    year: "numeric",
                    day: "numeric",
                    month: "long",
                  }).format(new Date(item.date))}
              </p>
              <div className="card-actions">
               
              </div>
            </div>
          </div>
        ))}
      </div>
      }




      {
        sortMeal ?
        null:
        <div className="flex justify-center mt-4">
  {[...Array(Math.ceil(singleMealThisMonth?.length / itemsPerPage))].map(
    (_, index) => (
      <div
        key={index}
        onClick={() => paginate(index + 1)}
        className={`mx-2 px-4 py-2 border border-gray-400 rounded cursor-pointer ${
          currentPage === index + 1 ? "bg-red-300 text-white" : ""
        }`}
      >
        {index + 1}
      </div>
    )
  )}
</div>
      }
    </div>
  );
};

export default MealAll;