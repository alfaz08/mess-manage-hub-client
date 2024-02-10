
import useBazarBooking from "../../../../hooks/useBazarBooking";
import useAxiosSecure from "../../../../hooks/useAxiosSecure";
import Swal from "sweetalert2";
import { FaTrashAlt } from "react-icons/fa";
import useAuth from "../../../../hooks/useAuth";
import { Helmet } from "react-helmet-async";
import SectionTitle from "../../../SectionTitle/SectionTitle";

const BazarBookingList = () => {
  const [allBooking, refetch] = useBazarBooking();
  const axiosSecure =useAxiosSecure()
  const {user} =useAuth()

  const currentDate = new Date();
  const currentMonth = currentDate.getMonth() + 1; 
  const allBookingThisMonth = allBooking?.filter(item => {
    const bookingList = new Date(item.bookingDate);
    return bookingList.getMonth() + 1 === currentMonth;
  });


  const handleDelete = (email) => {

   
    Swal.fire({
      title: "Are you sure?",
      text: "You won't be able to revert this!",
      icon: "warning",
      showCancelButton: true,
      confirmButtonColor: "#3085d6",
      cancelButtonColor: "#d33",
      confirmButtonText: "Yes, delete it!",
    }).then((result) => {
      if (result.isConfirmed) {
        const patchData = {
          bazar: 'no',
          bookingDate: ''
        };
        axiosSecure.patch(`/bazarCancel/${email}`, patchData);
      console.log(patchData);

        axiosSecure.delete(`/bazarBooking/${email}`).then((res) => {
          if (res.data.deletedCount > 0) {
            refetch();
            Swal.fire({
              title: "Deleted",
              text: "Your post has been deleted",
              icon: "success",
            });
          }
          
        
          
        });
      }
    });
  };



  return (
    <div>
      <Helmet>
        <title>Mess Manage | Booking</title>
      </Helmet>
      <SectionTitle
        heading="Booking List"
        subHeading="What's new?"
      ></SectionTitle>
      <div className="flex justify-evenly my-4">
        <h2>Booking List: {allBookingThisMonth?.length}</h2>
      </div>
      <div className="overflow-x-auto">
        <table className="table table-zebra ">
          {/* head */}
          <thead>
            <tr>
              <th>#</th>
              <td>Name</td>
              <td>Booking Date</td>
              <td>Email</td>
              
              <td>Delete</td>
            </tr>
          </thead>
          <tbody>
            {allBookingThisMonth?.map((user, index) => (
              <tr key={user._id}>
                <th>{index + 1}</th>
                <td>{user.name}</td>

                <td>
                  {user.bookingDate &&
                    new Intl.DateTimeFormat("en-US", {
                      year: "numeric",
                      day: "numeric",
                      month: "long",
                    }).format(new Date(user.bookingDate))}
                </td>
                <td>{user.email}</td>
                
                

                <th>
                  <button className="btn btn-ghost btn-lg"
                  onClick={() => handleDelete(user?.email)}>
                    <FaTrashAlt className="text-red-600"></FaTrashAlt>
                  </button>
                </th>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default BazarBookingList;
