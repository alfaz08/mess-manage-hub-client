import useMyMeal from "../../../../hooks/useMyMeal";


const MyMeal = () => {
  const [myBookMeal] =useMyMeal()
  console.log(myBookMeal);
  const currentDate = new Date();
  const currentMonth = currentDate.getMonth() + 1;
 

  const totalMealThisMonth = myBookMeal?.filter(item => {
    const totalMeal = new Date(item.mealDate);
    return totalMeal.getMonth() + 1 === currentMonth;
  });

  const totalMeal =totalMealThisMonth.reduce((total,item)=>total+item.totalMeal,0)

  return (
    <div>
      <div className="mx-auto text-center border-red-300 border-y-4 py-4 md:w-4/12 my-8">
   <h2 className="text-3xl">Total Meal: {totalMeal}</h2>
    </div>
      
    <div className="overflow-x-auto">
      <table className="table table-zebra ">
        {/* head */}
        <thead>
          <tr>
            <th>#</th>
            <td>Name</td>
            <td>Order Date</td>
            <td>Meal Time</td>
           
          </tr>
        </thead>
        <tbody>
          {totalMealThisMonth?.map((user, index) => (
            <tr key={user._id}>
              <th>{index + 1}</th>
              <td>{user.name}</td>
              <td>{user.mealDate && (
  new Intl.DateTimeFormat('en-US', {
    year: 'numeric',
    month: 'long',
    day: 'numeric',
    
  }).format(new Date(user.mealDate))
)}</td>
              
              
              



              <td>{ <h2 className='bg-red-200 p-4 text-xl text-center rounded-lg'>{user.selectedMealOptions.join(', ')}</h2>
              }</td>

              
            </tr>
          ))}
        </tbody>
      </table>
    </div>
      
    </div>
  );
};

export default MyMeal;