import { useForm } from "react-hook-form";
import useAxiosPublic from "../../../../hooks/useAxiosPublic";
import useAxiosSecure from "../../../../hooks/useAxiosSecure";
import useAuth from "../../../../hooks/useAuth";
import { Helmet } from "react-helmet-async";
import SectionTitle from "../../../SectionTitle/SectionTitle";




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
  
    const productInfo ={
      
      
    }
    console.log(productInfo);

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
                  <span className="label-text">Product Name</span>
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
                  <span className="label-text">Product Description</span>
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
                  <span className="label-text">Expire Date</span>
                </label>
                <input
                  type="date"
                  name="expire"
                  {...register("expire", { required: true })}
                  placeholder="Expire Date"
                  className="input input-bordered border-green-300"
                />
               
              </div>


            
        {/* category */}
      

              

              <div className="form-control w-full my-6">
                <input
                  {...register("image", { required: true })}
                  required
                  type="file"
                  className="file-input file-input-bordered border-green-300 file-input-green w-full "
                />
              </div>

         




              <div className="form-control mt-6">
                <input
                  className="btn bg-green-300 hover:text-white hover:bg-black"
                  type="submit"
                  value="Add Product"
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