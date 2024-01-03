import { useForm } from "react-hook-form";
import useAxiosPublic from "../../../../hooks/useAxiosPublic";
import useAxiosSecure from "../../../../hooks/useAxiosSecure";
import useAuth from "../../../../hooks/useAuth";
import { Helmet } from "react-helmet-async";
import SectionTitle from "../../../SectionTitle/SectionTitle";
import Swal from "sweetalert2";




const AddMeal = () => {
  const axiosPublic =useAxiosPublic()
  const axiosSecure = useAxiosSecure()
  const {user} =useAuth()

  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm();


  const onSubmit =async (data)=>{
  
    const mealItem ={
      name: user?.displayName,
      email: user?.email,
      title: data.title,
      description: data.des,
      totalMeal:data.total,
      time:data.tag,
      createdAt: new Date(),
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
                  className="input input-bordered border-red-400"
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
                  className="input input-bordered border-red-400"
                />
              </div>


              





              


              





             

              <div className="form-control">
                <label className="label">
                  <span className="label-text">Meal Item</span>
                </label>
                <input
                  type="text"
                  name="item"
                  {...register("item", { required: true })}
                  placeholder="Meal Item"
                  className="input input-bordered border-green-300"
                />
               
              </div>



              <div className="form-control">
                <label className="label">
                  <span className="label-text">Total Meal</span>
                </label>
                <input
                  type="number"
                  name="total"
                  {...register("total", { required: true })}
                  placeholder="Total meal"
                  className="input input-bordered border-green-300"
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
            className="select select-bordered border-amber-400 w-full"
          >
            <option disabled value="default" >
              Select a Tag
            </option>
            <option value="breakfast">Breakfast</option>
            <option value="lunch">Lunch</option>
            <option value="dinner">Dinner</option>
            
          </select>
        </div>

      

              


         




              <div className="form-control mt-6">
                <input
                  className="btn bg-green-300 hover:text-white hover:bg-black"
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