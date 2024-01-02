
import useAxiosSecure from './useAxiosSecure';
import { useQuery } from '@tanstack/react-query';

const useAllUsers = () => {
  const axiosSecure =useAxiosSecure()
   
  const {data:allUser=[],refetch} =useQuery({
    queryKey:['allUsers'],
    queryFn:async()=>{
      const res= await axiosSecure.get('/users')
      return res.data
    }
  })



  return [allUser,refetch]
};

export default useAllUsers;