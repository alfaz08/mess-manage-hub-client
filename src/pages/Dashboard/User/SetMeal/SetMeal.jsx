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

const SetMeal = () => {


  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
    control,
  } = useForm();
  const [startDate, setStartDate] = useState(new Date());

  const onSubmit =async (data)=>{
  
    const mealItem ={
      name: user?.displayName,
      email: user?.email,
      title: data.title,
      description: data.des,
      totalMeal:parseFloat(data.total),
      time:data.tag,
      createdAt: new Date(),
      date:data?.date ,
      items: data.items,
    }
  }


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
              


              





              


              





             

             

             



             

            
   
    
        {/* category */}
        <div className="form-control mt-6  ">
          <label className="label">
            <span className="label-text">Meal Time</span>
          </label>
          <select 
            defaultValue="default"
            {...register("tag",{required:true})}
            required
            className="select select-bordered border-red-400 w-full"
          >
            <option disabled value="default" >
              Select a Tag
            </option>
            <option value="breakfast">Breakfast</option>
            <option value="lunch">Lunch</option>
            <option value="dinner">Dinner</option>
            
          </select>
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
          minDate={new Date()} // Set the minimum date to today
          
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
                  value="Add Meal"
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