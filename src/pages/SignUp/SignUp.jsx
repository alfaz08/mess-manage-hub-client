import { useForm } from "react-hook-form";
import { Link, Navigate, useNavigate} from "react-router-dom";
import SocialLogin from "../../shared/SocialLogin/SocialLogin";
import useAuth from "../../hooks/useAuth";
import { useState } from "react";
import useAxiosPublic from "../../hooks/useAxiosPublic";
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import Swal from "sweetalert2";
const image_hosting_key = import.meta.env.VITE_IMAGE_HOSTING_KEY;
const image_hosting_api = `https://api.imgbb.com/1/upload?key=${image_hosting_key}`;

const SignUp = () => {
  const {createUser,updateUserProfile} = useAuth()
  const [loggedIn,setLoggedIn]= useState(false)
  const axiosPublic =useAxiosPublic()
  

  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm();

 const onSubmit =async (data)=>{
  const { name, email, password, image, accountType } = data;

    console.log(name, email, password, image, accountType);

    const imageFile ={image: data.image[0]}
    const res =await axiosPublic.post(image_hosting_api,imageFile,{
      headers:{
        "content-type": "multipart/form-data"
      }
    })
   if(res.data.success){
    try{
      const result = await createUser(data.email,data.password)
      const loggedUser = result.user;

      await updateUserProfile(data.name, res.data.data.display_url);
       console.log('updated');
      const userInfo ={
        email: data.email,
        name:data.name,
        roll:'member',
        type: 'normal',
        bazar: 'no'
      }
      const userRes = await axiosPublic.post('/users',userInfo)
      if(userRes.data.insertedId){
        console.log('user added to database');
        Swal.fire({
          position: 'top-end',
          icon: 'success',
          title: 'Sign up has been successful',
          showConfirmButton: false,
          timer: 500,
        });
        setLoggedIn(true)
      
      }
    }catch(error){
      toast.error(error.message)
      reset()
    }
   }

 }


  return (
    <>
    <div>
   
   {
    loggedIn && <Navigate to="/"></Navigate>
   }
  
<div className="hero ">
        <div className="hero-content flex-col ">
          <div className="text-center lg:text-left">
            <h1 className="text-5xl font-bold">Create an account</h1>
            
          </div>
          <div className="card shadow-xl md:w-[700px]">
            <form onSubmit={handleSubmit(onSubmit)} className="card-body ">
              <div className="form-control">
                <label className="label">
                  <span className="label-text">Name</span>
                </label>
                <input
                  type="text"
                  name="name"
                  {...register("name", { required: true })}
                  placeholder="Name"
                  className="input input-bordered border-red-400"
                />
               
              </div>

              <div className="form-control">
                <label className="label">
                  <span className="label-text">Email</span>
                </label>
                <input
                  type="email"
                  name="email"
                  placeholder="Email"
                  {...register("email", { required: true })}
                  className="input input-bordered border-red-400"
                />
                {errors.email && (
                  <span className="text-red-600">This field is required</span>
                )}
              </div>

              <div className="form-control">
                <label className="label">
                  <span className="label-text">Password</span>
                </label>
                <input
                  type="password"
                  {...register("password", {
                    required: true,
                    maxLength: 20,
                    minLength: 6,
                    pattern: /^(?=.*[A-Z])(?=.*[\W_]).{6,}$/,
                  })}
                  name="password"
                  placeholder="password"
                  className="input input-bordered border-red-400"
                />
                {errors.password?.type === "required" && (
                  <span className="text-red-600">password is required</span>
                )}
                {errors.password?.type === "minLength" && (
                  <span className="text-red-600">
                    Password must be 6 character
                  </span>
                )}
                {errors.password?.type === "maxLength" && (
                  <span className="text-red-600">
                    Password less than 20 character
                  </span>
                )}
                {errors.password?.type === "pattern" && (
                  <span className="text-red-600">
                    Password must have one upper case one lower case one number
                    one special charcter
                  </span>
                )}
              </div>

              <div className="form-control w-full my-6">
                <input
                  {...register("image", { required: true })}
                  required
                  type="file"
                  className="file-input file-input-bordered border-red-400 file-input-green w-full "
                />
              </div>

              {/* <div className="form-control">
  
  <div className="grid">
    <label className="">
      <input
        type="radio"
        {...register("accountType", { required: true })}
        value="customer"
      />
      <span className="ml-2">I am a Customer</span>
    </label>
    <label className="">
      <input
        type="radio"
        {...register("accountType", { required: true })}
        value="vendor"
      />
      <span className="ml-2">I am a Vendor</span>
    </label>
  </div>
  {errors.accountType && (
    <span className="text-red-600">Please select your account type</span>
  )}
</div> */}





              <div className="form-control mt-6">
                <input
                  className="btn text-white bg-red-500 hover:text-white hover:bg-black"
                  type="submit"
                  value="Sign Up"
                />
              </div>
            </form>
            <p className="text-center mt-4 mb-4 ">
        <span className="text-xl font-semibold ">Already have an account.Please </span>
        <Link to="/login"  className=" font-bold text-blue-600 text-xl hover:text-red-600">Login</Link>
      </p>
            <div>
           
          </div>
          </div>
          
        </div>
      </div>
           
   
<div>
<SocialLogin></SocialLogin>

</div>

<ToastContainer/>
      </div>

    
    
    </>
  
  );
};

export default SignUp;