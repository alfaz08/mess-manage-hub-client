import { useQuery } from "@tanstack/react-query";
import useAuth from "./useAuth";
import useAxiosSecure from "./useAxiosSecure";

const  useMyMeal = () => {
  const axiosSecure =useAxiosSecure()
  const {user} =useAuth()
  const {data:myBookMeal=[],refetch} = useQuery({
      queryKey:['myBookMeal',user?.email],
      queryFn:async()=>{
        const res =await axiosSecure.get(`/userBookMeal/${user?.email}`)
        return res.data
      }
  })
  return[myBookMeal,refetch]
};


export default  useMyMeal;
  