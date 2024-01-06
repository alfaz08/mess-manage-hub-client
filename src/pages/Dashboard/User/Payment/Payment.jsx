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
          className="input input-bordered w-96 border-amber-400 "
        />
      </div>

     
      <button className="btn btn-warning hover:text-white hover:bg-black">
        Deposit Money
      </button>
    </form>
    </div>
  );
};

export default Payment;