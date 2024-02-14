import { useState } from "react";
import useProfile from "../../hooks/useProfile";
import 'react-calendar/dist/Calendar.css';
import Calendar from "react-calendar";
import useAxiosSecure from "../../hooks/useAxiosSecure";
import Swal from "sweetalert2";
import { useNavigate } from "react-router-dom";
import useAuth from "../../hooks/useAuth";
import useBazarBooking from "../../hooks/useBazarBooking";

const BookDate = () => {
  const normalizedUserInfo = useProfile();
  const [value, onChange] = useState(new Date());
  const axiosSecure = useAxiosSecure();
  const navigate = useNavigate();
  const { user } = useAuth();
  const [allBooking] = useBazarBooking();

  const isDateDisabled = ({ activeStartDate, date, view }) => {
    if (
      (view === 'month' && date.getMonth() !== value.getMonth()) ||
      date < new Date()
    ) {
      return true;
    }

    // Check if the date is already booked
    const formattedDate = date.toISOString(); // Convert date to the same format as in allBooking
    const isBooked = allBooking.some(
      (booking) => booking.bookingDate === formattedDate
    );

    return isBooked;
  };

  const handleBookDate = async (value) => {
    const bookingInfo = {
      bookingDate: value,
      email: normalizedUserInfo?.email,
      name: normalizedUserInfo?.name,
      bazar: 'yes',
    };

    const res = await axiosSecure.post('/bazarBooked', bookingInfo);

    if (res.data) {
      Swal.fire({
        position: "top-end",
        icon: "success",
        title: 'Your bazar date is booked',
        showConfirmButton: false,
        timer: 1500,
      });
    }
    const bookingDate= value
    const patchData = {
      bazar: 'yes',
      bookingDate: bookingDate,
    };

    const patchRes = await axiosSecure.patch(
      `/member/bazar/${user?.email}`,
      patchData
    );

    if (patchRes.data.modifiedCount) {
      navigate('/dashboard/userHome');
    }
  };

  return (
    <div>
      <div
        className="hero min-h-screen"
        style={{
          backgroundImage:
            'url(https://i.ibb.co/3mXdzPG/bf65d51f34b1bf193ec947f3c0c3f3e0.jpg)',
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
            <button
              onClick={() => handleBookDate(value)}
              className="btn bg-red-300 hover:text-white hover:bg-black"
            >
              Book Date
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default BookDate;