import { useQuery } from "@tanstack/react-query";
import useAxiosSecure from "./useAxiosSecure";
import useAuth from "./useAuth";

 


const  useTotalMeal = () => {
  const axiosSecure =useAxiosSecure()
  const {user} =useAuth()
  const {data:totalMeal=[],refetch} = useQuery({
      queryKey:['totalMeal',user?.email],
      queryFn:async()=>{
        const res =await axiosSecure.get('/totalBookMeal')
        return res.data
      }
  })
  return[totalMeal,refetch]
};


export default  useTotalMeal;
  