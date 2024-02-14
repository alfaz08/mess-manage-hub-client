import axios from "axios";


const axiosSecure = axios.create({
  baseURL: 'https://messmanagehub-server.vercel.app/'
}
  )


const useAxiosSecure = () => {
  //request interceptor to add authorization header for every secure call to API
  axiosSecure.interceptors.request.use(function(config){
    const token =localStorage.getItem('access-token')

    config.headers.authorization = `Bearer ${token}`
     return config
   },function(error){
     return Promise.reject(error)
   })
  return axiosSecure;
};

export default useAxiosSecure;