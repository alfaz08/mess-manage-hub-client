import { useQuery } from "@tanstack/react-query";

import useAxiosSecure from "./useAxiosSecure";




const useMeal = () => {
  const axiosSecure =useAxiosSecure()

   
  const {data:allMeal=[],refetch}=useQuery({
    queryKey:['allMeal'],
    queryFn:async()=>{
      const res = await axiosSecure.get('/meals')
      return res.data
    }
    })


  return [allMeal,refetch]
};

export default useMeal;