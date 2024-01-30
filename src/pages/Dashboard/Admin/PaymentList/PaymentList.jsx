import { Helmet } from "react-helmet-async";
import usePayment from "../../../../hooks/usePayment";
import SectionTitle from "../../../SectionTitle/SectionTitle";


const PaymentList = () => {
const [totalPayment] =usePayment()
console.log(totalPayment);
const totalDeposit =totalPayment.reduce((total,item)=>total+item.price,0)
console.log(totalDeposit);

  return (
    <div>
      <Helmet>
        <title>Mess Manage | Deposit Money</title>
      </Helmet>
      <SectionTitle
        heading="Deposit List"
        subHeading="What's new?"
      ></SectionTitle>
        <div className="flex justify-evenly my-4">
      <h2>Transaction History List: {totalPayment?.length}</h2>
    </div>
    <div className="overflow-x-auto">
      <table className="table table-zebra ">
        {/* head */}
        <thead>
          <tr>
            <th>#</th>
            <td>Deposit Money</td>
            <td>Deposit Date</td>
            <td>Email</td>
            <td>Transaction Id</td>
            <td>Status</td>
          </tr>
        </thead>
        <tbody>
          {totalPayment?.map((user, index) => (
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
              <td>{user.email}</td>
              
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

export default PaymentList;