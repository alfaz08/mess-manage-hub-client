import { Helmet } from "react-helmet-async";
import { Controller, useForm } from "react-hook-form";
import { FaCalendarAlt } from "react-icons/fa";
import { FaPlusCircle } from "react-icons/fa";
import { FaMinusCircle } from "react-icons/fa";
import SectionTitle from "../../../SectionTitle/SectionTitle";
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";
import { useState } from "react";
import { subMonths } from 'date-fns'; // Import subMonths function from date-fns
import useAuth from "../../../../hooks/useAuth";
import useAxiosSecure from "../../../../hooks/useAxiosSecure";
import Swal from "sweetalert2";
import { lastDayOfMonth } from 'date-fns';

const SetMeal = () => {

  const {user} =useAuth()
 const axiosSecure =useAxiosSecure()
  const [breakfastChecked, setBreakfastChecked] = useState(false);
  const [lunchChecked, setLunchChecked] = useState(false);
  const [dinnerChecked, setDinnerChecked] = useState(false);

  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
    control,
  } = useForm();
  const [startDate, setStartDate] = useState(new Date());

  const onSubmit = async (data) => {
    // Capture the selected meal options
    const selectedMealOptions = [];
    if (breakfastChecked) selectedMealOptions.push("breakfast");
    if (lunchChecked) selectedMealOptions.push("lunch");
    if (dinnerChecked) selectedMealOptions.push("dinner");
  
    // Include the meal options in the submitted data
    const formData = {
      ...data,
      selectedMealOptions,
    };
  
    // Create the mealItem object
    const mealItem = {
      name: user?.displayName,
      email: user?.email,
      createdAt: new Date(),
      mealDate: formData.date,
     
      selectedMealOptions: formData.selectedMealOptions,
      totalMeal:parseFloat(selectedMealOptions.length)
    };
  
     
    const menuRes =await axiosSecure.post('/bookMeal',mealItem)
      
      if(menuRes.data.insertedId){
        reset()
        //show success popup
        Swal.fire({
          position:"top-end",
          icon:"success",
          title:`Meal is added`,
          showConfirmButton:false,
          timer:1500
        })

      }
  };


  return (
    <div>
      <Helmet>
        <title>Mess Manage | Book Meal</title>
      </Helmet>
      <SectionTitle
        heading="add your meal"
        subHeading=""
      ></SectionTitle>
      <div className="hero ">
        <div className="hero-content flex-col ">
          
          <div className="card shadow-xl md:w-[700px]">
            <form onSubmit={handleSubmit(onSubmit)} className="card-body ">
              


            <div className="form-control mt-4">
        <label className="label">
          <span className="label-text">Meal Options</span>
        </label>
        <div className="flex space-x-4">
          <label className="inline-flex items-center">
            <input
              type="checkbox"
              checked={breakfastChecked}
              onChange={() => setBreakfastChecked(!breakfastChecked)}
              className="form-checkbox text-red-400"
            />
            <span className="ml-2">Breakfast</span>
          </label>
          <label className="inline-flex items-center">
            <input
              type="checkbox"
              checked={lunchChecked}
              onChange={() => setLunchChecked(!lunchChecked)}
              className="form-checkbox text-red-400"
            />
            <span className="ml-2">Lunch</span>
          </label>
          <label className="inline-flex items-center">
            <input
              type="checkbox"
              checked={dinnerChecked}
              onChange={() => setDinnerChecked(!dinnerChecked)}
              className="form-checkbox text-red-400"
            />
            <span className="ml-2">Dinner</span>
          </label>
        </div>
      </div>






              


              





             

             

             



             

            
   
    
       
        <div className="form-control ">
  <label className="label">
    <span className="label-text">Meal Date</span>
  </label>
  <Controller
    name="date"
    className="border-red-400 border"
    control={control}
    render={({ field }) => (
      <div className="relative ">
        <DatePicker
  selected={field.value}
  onChange={(date) => {
    field.onChange(date);
    setStartDate(date);
  }}
  minDate={new Date(new Date().setHours(0, 0, 0, 0) + 24 * 60 * 60 * 1000)} // Set the minimum date to tomorrow
  maxDate={lastDayOfMonth(new Date())} // Set the maximum date to the end of this month
  customInput={
    <input
      className="w-full p-4 ml-2 border-red-400 border rounded-md"
      placeholder="Select date"
    />
  }
  required
/>
        <div className="absolute inset-y-0 cursor-pointer  flex items-center px-2 pointer-events-none">
          <FaCalendarAlt className="text-red-400 " />
        </div>
      </div>
    )}
  />
</div>

              


         




              <div className="form-control mt-6">
                <input
                  className="btn bg-red-300 hover:text-white hover:bg-black"
                  type="submit"
                  value="Book Meal"
                />
              </div>
            </form>
          
            <div>
           
          </div>
          </div>
          
        </div>
      </div>
           
   
<div>

</div>

    </div>
  );
};

export default SetMeal;