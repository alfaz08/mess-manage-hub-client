import { useForm, useFieldArray, Controller } from "react-hook-form";
import useAxiosPublic from "../../../../hooks/useAxiosPublic";
import useAxiosSecure from "../../../../hooks/useAxiosSecure";
import useAuth from "../../../../hooks/useAuth";
import { Helmet } from "react-helmet-async";
import SectionTitle from "../../../SectionTitle/SectionTitle";
import Swal from "sweetalert2";
import { FaMinusCircle } from "react-icons/fa";
import { useState } from "react";
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";
import { FaCalendarAlt } from 'react-icons/fa';
import { FaPlusCircle } from "react-icons/fa";

const AddBazar = () => {
  const axiosPublic = useAxiosPublic();
  const axiosSecure = useAxiosSecure();
  const { user } = useAuth();
  const [startDate, setStartDate] = useState(new Date());

  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
    control,
  } = useForm({
    defaultValues: {
      items: [{ weight: "", item: "" }],
    },
  });

  const { fields, append, remove } = useFieldArray({
    control,
    name: "items",
  });

  const onSubmit = async (data) => {
    const itemList = {
      name: data.title,
      
      totalMeal: data.total,
      bazarMoney:data.money,
      createdAt: new Date(),
      date:data?.date ,
      items: data.items,
      status: 'pending'
    };

    console.log(itemList);
  };

  return (
    <div>
      <Helmet>
        <title>Mess Manage | Add Meal</title>
      </Helmet>
      <SectionTitle heading="add an item" subHeading="What's new?" />
      <div className="hero ">
        <div className="hero-content flex-col ">
          <div className="card shadow-xl md:w-[700px]">
            <form onSubmit={handleSubmit(onSubmit)} className="card-body ">
              <div className="form-control">
                <label className="label">
                  <span className="label-text">Name of Bazar Man</span>
                </label>
                <input
                  type="text"
                  name="title"
                  {...register("title", { required: true })}
                  placeholder="Name"
                  className="input input-bordered border-red-400"
                />
              </div>
              
             



              {fields.map((item, index) => (
                <div key={item.id} className="form-control">
                  <label className="label">
                    <span className="label-text">{`Item-${
                      index + 1
                    } (Ingredients name and weight)`}</span>
                  </label>

                  <div className="mt-2 md:flex  gap-6">
                    <div>
                      <input
                        type="text"
                        name={`items[${index}].item`}
                        {...register(`items[${index}].item`, { required: true })}
                        placeholder="Ingredients Name"
                        className="input input-bordered w-72 border-red-400"
                      />
                    </div>

                    <div>
                      <input
                        type="text"
                        name={`items[${index}].weight`}
                        {...register(`items[${index}].weight`, {
                          required: true,
                        })}
                        placeholder="Weight"
                        className="input input-bordered  border-red-400"
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

              
              <div className="flex ">
              <h2 className="mt-2 ">Add More Item</h2>
              <button
                type="button"
                onClick={() => append({ item: "", weight: "" })}
                className="btn w-24 bg-red-200  hover:text-white hover:bg-black"
              >
                <FaPlusCircle className="text-2xl"/>

              </button>
              </div>



           
             


            
            


              <div className="form-control">
                <label className="label">
                  <span className="label-text">Today Total Meal</span>
                </label>
                <input
                  type="number"
                  name="total"
                  {...register("total", { required: true })}
                  placeholder="Total meal"
                  className="input input-bordered border-red-400"
                />
              </div>
           
             <div className="md:flex md:justify-around">

             <div className="form-control ">
  <label className="label">
    <span className="label-text">Select Bazar Date</span>
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

<div className="form-control   ">
                <label className="label">
                  <span className="label-text">Given Money for Bazar</span>
                </label>
                <input
                  type="number"
                  name="money"
                  {...register("money", { required: true })}
                  placeholder="Total  money for bazar"
                  className="input input-bordered border-red-400"
                />
                  
              </div>


             </div>




              



              <div className="form-control mt-6">
                <input
                  className="btn bg-red-300 hover:text-white hover:bg-black"
                  type="submit"
                  value="Add Meal"
                />
              </div>
            </form>
            <div></div>
          </div>
        </div>
      </div>

      <div></div>
    </div>
  );
};

export default AddBazar;
