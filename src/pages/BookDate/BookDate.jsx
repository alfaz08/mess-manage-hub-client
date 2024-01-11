import { useState } from "react";
import useProfile from "../../hooks/useProfile";
import 'react-calendar/dist/Calendar.css';
import Calendar from "react-calendar";
import useAxiosSecure from "../../hooks/useAxiosSecure";
import Swal from "sweetalert2";
import { useNavigate } from "react-router-dom";
import useAuth from "../../hooks/useAuth";



const BookDate = () => {
  
  const normalizedUserInfo =useProfile()
  
  const [value, onChange] = useState(new Date());
  const axiosSecure =useAxiosSecure()
  const navigate =useNavigate()
  const {user} =useAuth()
 
  const isDateDisabled =({activeStartDate,date,view})=>{
    if(
      (view==='month' && date.getMonth() !== value.getMonth()) ||
      date <new Date()
    ){
      return true
    }
    return false
  }

  const handleBookDate = async (value)=>{
    const bookingInfo ={
      bookingDate:value,
      email:normalizedUserInfo?.email,
      name:normalizedUserInfo?.name,
      bazar:'yes'
    }
    const res = await axiosSecure.post('/bazarBooked',bookingInfo)
    if(res.data){
      Swal.fire({
        position:"top-end",
        icon:"success",
        title:'Your bazar date is booked',
        showConfirmButton:false,
        timer:1500
      })
    }
    const patchData = {
      bazar:'yes',
    };
    const patchRes = await axiosSecure.patch(`/member/bazar/${user?.email}`, patchData);
    if(patchRes.data.modifiedCount){
      navigate('/')
    }
  }


  return (
    <div>
      <div
        className="hero min-h-screen"
        style={{
          backgroundImage:
            'url(https://daisyui.com/images/stock/photo-1507358522600-9f71e620c44e.jpg)',
        }}
      >
        <div className="hero-overlay bg-opacity-60"></div>
        <div className="hero-content text-center text-neutral-content">
          <div className="">
            <Calendar
              className="text-red-600"
              onChange={onChange}
              value={value}
              tileDisabled={isDateDisabled}
            />
            <button onClick={()=>handleBookDate(value)} className="btn btn-warning hover:text-white hover:bg-black">Book Date</button>
          </div>
          
        </div>
       
      </div>
     
    </div>
  );
};

export default BookDate;