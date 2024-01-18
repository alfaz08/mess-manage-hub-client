import { useQuery } from "@tanstack/react-query";
import useAxiosSecure from "./useAxiosSecure";



const useAnnouncement = () => {
  const axiosSecure =useAxiosSecure()

  const {data: announcement=[],refetch}=useQuery({
    queryKey:['announcement'],
    queryFn:async()=>{
    const res =await axiosSecure.get('/announcements')
    return res.data
    }
  })
  return [announcement,refetch]
};

export default useAnnouncement;