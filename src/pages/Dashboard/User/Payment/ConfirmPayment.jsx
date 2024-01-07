import { useLocation } from "react-router-dom";
import useAuth from "../../../../hooks/useAuth";
import { Elements } from "@stripe/react-stripe-js";
import { loadStripe } from "@stripe/stripe-js";
import CheckoutForm from "./CheckoutForm";


const stripePromise =loadStripe(import.meta.env.VITE_PAYMENT_GATEWAY_PK)

const ConfirmPayment = () => {
  
  const location =useLocation()
  const { postItem } = location.state;
  

  return (
    <div className="container mx-auto mt-4">
       <Elements stripe={stripePromise}>
         <CheckoutForm postItem={postItem}></CheckoutForm>
       </Elements>
    </div>
  );
};

export default ConfirmPayment;