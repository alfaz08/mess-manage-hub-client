import { Helmet } from "react-helmet-async";
import useTotalMeal from "../../../../hooks/useTotalMeal";
import SectionTitle from "../../../SectionTitle/SectionTitle";


const TodayMealCalcu = () => {

  const [totalMeal] =useTotalMeal()
   console.log(totalMeal);

  const totalAllMeal =totalMeal.reduce((total,item)=>total+item.totalMeal,0)
  



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
      <h2>Today Total Meal: {totalAllMeal}</h2>
      <h2>Sort By Date: {}</h2>
    </div>
    </div>
  );
};

export default TodayMealCalcu;