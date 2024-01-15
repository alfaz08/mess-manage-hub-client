import { useQuery } from "@tanstack/react-query";

import useAxiosSecure from "./useAxiosSecure";




const useBazar = () => {
  const axiosSecure =useAxiosSecure()

   
  const {data:allBazar=[],refetch}=useQuery({
    queryKey:['allBazar'],
    queryFn:async()=>{
      const res = await axiosSecure.get('/bazar')
      return res.data
    }
    })


  return [allBazar,refetch]
};

export default useBazar;