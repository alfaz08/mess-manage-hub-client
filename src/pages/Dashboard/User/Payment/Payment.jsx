import { useForm } from "react-hook-form";

import { useNavigate } from "react-router-dom";

const Payment = () => {
  const { register, handleSubmit ,reset} = useForm();
  
  const navigate = useNavigate()

  const onSubmit = async(data) => {
    const postItem ={
      amount: parseFloat(data?.name),
      
    }
    navigate('/dashboard/confirmPayment', { state: { postItem } });
  }
  
  return (


    <div>
      <div className="mx-auto text-center border-red-300 border-y-4 py-4 md:w-4/12 my-8">
   <h2 className="text-3xl">Deposit Your Money</h2>
    </div>

    
    <div className="mx-auto text-center md:w-4/12 my-8">
      <form onSubmit={handleSubmit(onSubmit)} className="ml-2">
      <div className="form-control my-6">
        <label className="label">
          <span className="label-text text-xl font-bold">How much money you want to deposit</span>
        </label>
        <input
          type="number"
          placeholder="amount"
          {...register("name",{required:true})}
          required
          className="input input-bordered w-96 border-red-400 "
        />
      </div>

     
      <button className="btn justify-center text-center bg-red-300 hover:text-white hover:bg-black">
        Deposit Money
      </button>
    </form>
    </div>
    </div>
  );
};

export default Payment;