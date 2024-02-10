import useSingleDeposit from "../../../../hooks/useSingleDeposit";


const UserDeposit = () => {
 
  const [myDeposit] =useSingleDeposit()
 
  const currentDate = new Date();
  const currentMonth = currentDate.getMonth() + 1;
  const totalDepositThisMonth = myDeposit?.filter(item => {
    const totalDeposit = new Date(item.date);
    return totalDeposit.getMonth() + 1 === currentMonth;
  });

  return (
    <div>
    <div className="flex justify-evenly my-4">
      <h2>Transaction History List: {totalDepositThisMonth?.length}</h2>
    </div>
    <div className="overflow-x-auto">
      <table className="table table-zebra ">
        {/* head */}
        <thead>
          <tr>
            <th>#</th>
            <td>Price</td>
            <td>Order Date</td>
            <td>Transaction Id</td>
            <td>Status</td>
          </tr>
        </thead>
        <tbody>
          {totalDepositThisMonth?.map((user, index) => (
            <tr key={user._id}>
              <th>{index + 1}</th>
              <td>{user.price}</td>
              <td>{user.date && (
  new Intl.DateTimeFormat('en-US', {
    year: 'numeric',
    month: 'long',
    day: 'numeric',
    
  }).format(new Date(user.date))
)}</td>
              
              
              <td>{user.transactionId}</td>
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

export default UserDeposit;