import { Helmet } from "react-helmet-async";
import usePayment from "../../../../hooks/usePayment";
import SectionTitle from "../../../SectionTitle/SectionTitle";


const PaymentList = () => {
const [totalPayment] =usePayment()
console.log(totalPayment);
const totalDeposit =totalPayment.reduce((total,item)=>total+item.price,0)
console.log(totalDeposit);

// const depositByEmail = totalPayment.reduce((acc, item) => {
//   const { email, price } = item;
//   acc[email] = (acc[email] || 0) + price;
//   return acc;
// }, {});


const depositByEmail = Object.values(
  totalPayment.reduce((acc, item) => {
    const { email, price } = item;
    if (!acc[email]) {
      acc[email] = { email, totalDeposit: 0 };
    }
    acc[email].totalDeposit += price;
    return acc;
  }, {})
);


console.log(depositByEmail);


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
      <h2>Total Deposit Money List: {totalDeposit}</h2>
    </div>
    <div className="overflow-x-auto">
      <table className="table table-zebra ">
        {/* head */}
        <thead>
          <tr>
            <th>#</th>
            <td>Email</td>
            
            <td>Deposit Money</td>
            
            <td className="text-center">Status</td>
          </tr>
        </thead>
        <tbody>
          {depositByEmail?.map((user, index) => (
            <tr key={user._id}>
              <th>{index + 1}</th>
              
            
              <td>{user.email}</td>
              <td>{user.totalDeposit}</td>
              <td>{user.transactionId}</td>
             <td>Complete</td>


            </tr>
          ))}
        </tbody>
      </table>
    </div>
    </div>
  );
};

export default PaymentList;