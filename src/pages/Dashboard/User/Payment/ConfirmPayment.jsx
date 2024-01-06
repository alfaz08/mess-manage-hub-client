import { useLocation } from "react-router-dom";
import useAuth from "../../../../hooks/useAuth";


const ConfirmPayment = () => {
  const {user} =useAuth()
  const location =useLocation()
  const { postItem } = location.state;
  console.log(user?.email);
  console.log(postItem);
  return (
    <div>
      
    </div>
  );
};

export default ConfirmPayment;