import { useQuery } from "@tanstack/react-query";
import useAuth from "./useAuth";
import useAxiosSecure from "./useAxiosSecure";




const  useSingleDeposit = () => {
  const axiosSecure =useAxiosSecure()
  const {user} =useAuth()
  const {data:myDeposit=[],refetch} = useQuery({
      queryKey:['myDeposit',user?.email],
      queryFn:async()=>{
        const res =await axiosSecure.get(`/userDeposit/${user?.email}`)
        return res.data
      }
  })
  return[myDeposit,refetch]
};


export default  useSingleDeposit;