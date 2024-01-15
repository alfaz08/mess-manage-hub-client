import { Controller, useFieldArray, useForm } from "react-hook-form";
import useAxiosPublic from "../../../../hooks/useAxiosPublic";
import useAxiosSecure from "../../../../hooks/useAxiosSecure";
import useAuth from "../../../../hooks/useAuth";
import { Helmet } from "react-helmet-async";
import SectionTitle from "../../../SectionTitle/SectionTitle";
import Swal from "sweetalert2";
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";
import { useState } from "react";
import { FaCalendarAlt } from "react-icons/fa";
import { FaPlusCircle } from "react-icons/fa";
import { FaMinusCircle } from "react-icons/fa";

const AddMeal = () => {
  const axiosPublic =useAxiosPublic()
  const axiosSecure = useAxiosSecure()
  const {user} =useAuth()
  const [startDate, setStartDate] = useState(new Date());

  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
    control,
  } = useForm({
    defaultValues: {
      items: [{  item: "" }],
    },
  });

  const { fields, append, remove } = useFieldArray({
    control,
    name: "items",
  });


  const onSubmit =async (data)=>{
  
    const mealItem ={
      name: user?.displayName,
      email: user?.email,
      title: data.title,
      description: data.des,
      totalMeal:data.total,
      time:data.tag,
      createdAt: new Date(),
      date:data?.date ,
      items: data.items,
    }
   
    const menuRes =await axiosSecure.post('/meals',mealItem)
      
      if(menuRes.data.insertedId){
        reset()
        //show success popup
        Swal.fire({
          position:"top-end",
          icon:"success",
          title:`${data.title} is added in the post!`,
          showConfirmButton:false,
          timer:1500
        })

      }

  }





  return (
    <div>
      <Helmet>
        <title>Mess Manage | Add Meal</title>
      </Helmet>
      <SectionTitle
        heading="add an item"
        subHeading="What's new?"
      ></SectionTitle>
      <div className="hero ">
        <div className="hero-content flex-col ">
          
          <div className="card shadow-xl md:w-[700px]">
            <form onSubmit={handleSubmit(onSubmit)} className="card-body ">
              <div className="form-control">
                <label className="label">
                  <span className="label-text">Meal Title</span>
                </label>
                <input
                  type="text"
                  name="title"
                  {...register("title", { required: true })}
                  placeholder="Name"
                  className="input input-bordered  border-red-400"
                />
              </div>


              <div className="form-control">
                <label className="label">
                  <span className="label-text">Meal Description</span>
                </label>
                <input
                  type="text"
                  name="des"
                  {...register("des", { required: true })}
                  placeholder="Description"
                  className="input input-bordered h-40 border-red-400"
                />
              </div>


              





              


              





             

              {fields.map((item, index) => (
                <div key={item.id} className="form-control">
                  <label className="label">
                    <span className="label-text">{`Item-${
                      index + 1
                    } (Item name and weight)`}</span>
                  </label>

                  <div className="mt-2 md:flex  gap-6">
                    <div>
                      <input
                        type="text"
                        name={`items[${index}].item`}
                        {...register(`items[${index}].item`, { required: true })}
                        placeholder="Item Name"
                        className="input input-bordered w-72 border-red-400"
                      />
                    </div>

                   
                    <div>
                    <button
                    type="button"
                    className=" btn bg-red-200 hover:text-white hover:bg-black"
                    onClick={() => remove(index)}
                  >
                  <FaMinusCircle className="text-2xl" />
                  </button>
                    </div>
                  </div>

                  
                </div>
              ))}

              <button
                type="button"
                onClick={() => append({ item: "" })}
                className="btn w-24 bg-red-200  hover:text-white hover:bg-black"
              >
                <FaPlusCircle className="text-2xl"/>

              </button>



              <div className="form-control">
                <label className="label">
                  <span className="label-text">Total Meal</span>
                </label>
                <input
                  type="number"
                  name="total"
                  {...register("total", { required: true })}
                  placeholder="Total meal"
                  className="input input-bordered border-red-400"
                />
               
              </div>

            
        {/* category */}
    
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
      <div className="relative">
        <DatePicker
          selected={field.value}
          onChange={(date) => {
            field.onChange(date);
            setStartDate(date);
          }}
          minDate={new Date()} // Set the minimum date to today
          customInput={
            <input
              className="w-full p-2 border-red-400 border rounded-md"
              placeholder="Select date"
            />
          }
          required
        />
        <div className="absolute inset-y-0 cursor-pointer  flex items-center px-2 pointer-events-none">
          <FaCalendarAlt className="text-red-400" />
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

export default AddMeal;