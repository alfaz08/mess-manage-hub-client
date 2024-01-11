import { useQuery } from "@tanstack/react-query";

import useAxiosSecure from "./useAxiosSecure";




const useBazarBooking = () => {
  const axiosSecure =useAxiosSecure()

   
  const {data:allBooking=[],refetch}=useQuery({
    queryKey:['allBooking'],
    queryFn:async()=>{
      const res = await axiosSecure.get('/books')
      return res.data
    }
    })


  return [allBooking,refetch]
};

export default useBazarBooking;