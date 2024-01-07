import { CardElement, useElements, useStripe } from "@stripe/react-stripe-js";
import { useEffect, useState } from "react";
import { ToastContainer, toast } from "react-toastify";
import useAuth from "../../../../hooks/useAuth";
import useAxiosSecure from "../../../../hooks/useAxiosSecure";
import { useNavigate } from "react-router-dom";
import Swal from "sweetalert2";


const CheckoutForm = ({postItem}) => {
  console.log("postItem in CheckoutForm:", postItem.amount);
  const {user} =useAuth()
  console.log(user?.email);
 const stripe = useStripe()
 const elements = useElements()
 const [error,setError] =useState('')

 const axiosSecure =useAxiosSecure()
 const [clientSecret,setClientSecret] =useState('')
 const [transactionId,setTransactionId]=useState('')
  const navigate = useNavigate()


  useEffect(()=>{
    axiosSecure.post('/member-payment',{price:  postItem.amount})
    .then(res=>{
      console.log(res.data.clientSecret);
      setClientSecret(res.data.clientSecret)
    })
 },[])




  const handleSubmit = async(event) =>{
    event.preventDefault()

    if(!stripe || !elements){
      return
    }

    const card =elements.getElement(CardElement)

    if(card===null){
      return
    }   

    const {error,paymentMethod} =await stripe.createPaymentMethod({
      type:'card',
      card
    })
   if(error){
    console.log('payment method',error);
    setError(error.message)
   }
   else
   {
   console.log('payment method',paymentMethod);
   setError('')
   }

    //confirm payment
    const {paymentIntent,error: confirmError} =await stripe.confirmCardPayment(clientSecret,{
      payment_method:{
        card:card,
        billing_details:{
          email: user?.email || 'anonymous',
          name: user?.displayName ||'anonymous'
        }
      }
    })
    if(confirmError){
      console.log('confirm error',confirmError);
    }
    else{
      console.log('payment intent',paymentIntent);
      if(paymentIntent.status === 'succeeded'){
        setTransactionId(paymentIntent.id)
        Swal.fire({
          position:"top-end",
          icon:"success",
          title:`Payment is successful and Now you are Gold Member`,
          showConfirmButton:false,
          timer:1500
        })
        //now save the payment in database
        const payment ={
          email: user?.email,
          price:postItem?.amount,
          transactionId: paymentIntent.id
        }
        console.log(payment);
        const res = await axiosSecure.post('/memberPayments',payment)
        console.log('payment done',res.data);
      }
  
      const patchData = {
        roll: 'premium',
      };
  
      const patchRes = await axiosSecure.patch(`/member/${user?.email}`, patchData);
      if(patchRes.data.modifiedCount){
        navigate('/')
      }
  
  
  
  
    }
  

  }



  return (
   <form onSubmit={handleSubmit}>
    <CardElement
        options={{
          style: {
            base: {
              fontSize: '16px',
              color: '#424770',
              '::placeholder': {
                color: '#aab7c4',
              },
            },
            invalid: {
              color: '#9e2146',
            },
          },
        }}
      />
      <button className="btn btn-warning" type="submit" disabled={!stripe}>
        Pay
      </button>
      <p className="text-red-600">{error}</p>
   </form>
  );
};

export default CheckoutForm;