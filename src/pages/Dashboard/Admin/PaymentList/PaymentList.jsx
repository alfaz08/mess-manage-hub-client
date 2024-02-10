import { Helmet } from "react-helmet-async";
import usePayment from "../../../../hooks/usePayment";
import SectionTitle from "../../../SectionTitle/SectionTitle";

import useTotalMeal from "../../../../hooks/useTotalMeal";


const PaymentList = () => {
  

  const currentDate = new Date();
const currentMonth = currentDate.getMonth() + 1;
const [totalPayment] =usePayment()

const [totalMeal] =useTotalMeal()
console.log(totalMeal);

const mealsThisMonth = totalMeal?.filter(item => {
  const mealDate = new Date(item.mealDate);
  return mealDate.getMonth() + 1 === currentMonth;
});
const paymentThisMonth = totalPayment?.filter(item => {
  const paymentDate = new Date(item.date);
  return paymentDate.getMonth() + 1 === currentMonth;
});

// const depositByEmail = totalPayment.reduce((acc, item) => {
//   const { email, price } = item;
//   acc[email] = (acc[email] || 0) + price;
//   return acc;
// }, {});


const depositByEmail = Object.values(
  paymentThisMonth.reduce((acc, item) => {
    const { email, price } = item;
    if (!acc[email]) {
      acc[email] = { email, totalDeposit: 0 };
    }
    acc[email].totalDeposit += price;
    return acc;
  }, {})
);

const totalSingleMeal = Object.values(
  mealsThisMonth.reduce((acc, item) => {
    const { email, totalMeal } = item;
    if (!acc[email]) {
      acc[email] = { email, totalMeal: 0 };
    }
    acc[email].totalMeal += totalMeal;
    return acc;
  }, {})
);


const matchedData = depositByEmail
  .filter((depositItem) => {
    // Find the corresponding totalSingleMeal item with matching email
    const matchingTotalMeal = totalSingleMeal.find(
      (mealItem) => mealItem.email === depositItem.email
    );

    // Include the depositItem in the result only if a matching totalSingleMeal item is found
    return matchingTotalMeal;
  })
  .map((matchedItem) => {
    // Find the corresponding totalSingleMeal item with matching email
    const matchingTotalMeal = totalSingleMeal.find(
      (mealItem) => mealItem.email === matchedItem.email
    );

    // Combine properties from both depositItem and totalSingleMeal item
    return {
      email: matchedItem.email,
      totalDeposit: matchedItem.totalDeposit,
      totalMeal: matchingTotalMeal.totalMeal,
      // Include other properties as needed
    };
  });


  const totalDeposit =matchedData.reduce((total,item)=>total+item.totalDeposit,0)
console.log('matchedData',matchedData);


console.log('deposit Email',depositByEmail);
console.log('totalMeal',totalSingleMeal);


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
      <h2>Transaction History List: {matchedData?.length}</h2>
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
            <td>Total Meal</td>
            <td className="text-center">Status</td>
          </tr>
        </thead>
        <tbody>
          {matchedData?.map((user, index) => (
            <tr key={user._id}>
              <th>{index + 1}</th>
              
            
              <td>{user.email}</td>
              <td>{user.totalDeposit}</td>
              <td>{user.totalMeal}</td>
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