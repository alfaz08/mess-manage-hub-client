import { useQuery } from "@tanstack/react-query";
import useAuth from "./useAuth";
import useAxiosSecure from "./useAxiosSecure";






const   usePayment  = () => {
  const axiosSecure =useAxiosSecure()
  const {user} =useAuth()
  const {data:totalPayment=[],refetch} = useQuery({
      queryKey:['totalPayment'],
      queryFn:async()=>{
        const res =await axiosSecure.get(`/paymentList`)
        return res.data
      }
  })
  return[totalPayment,refetch]
};


export default   usePayment;
 