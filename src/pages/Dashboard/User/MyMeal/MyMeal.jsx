import useMyMeal from "../../../../hooks/useMyMeal";


const MyMeal = () => {
  const [myBookMeal] =useMyMeal()
  console.log(myBookMeal);

  return (
    <div>
      <div className="flex justify-evenly my-4">
      <h2>Total Meal: {myBookMeal?.length}</h2>
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
            <td>Status</td>
          </tr>
        </thead>
        <tbody>
          {myBookMeal?.map((user, index) => (
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
              
              
              <td>{user.selectedMealOptions.join(', ')}</td>



              <td>{ <h2 className='bg-green-300 p-4 text-center rounded-lg'>complete</h2>
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