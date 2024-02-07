import Swal from "sweetalert2";
import useAuth from "../../../../hooks/useAuth";
import useAxiosSecure from "../../../../hooks/useAxiosSecure";
import useBazar from "../../../../hooks/useBazar";
import { Helmet } from "react-helmet-async";
import SectionTitle from "../../../SectionTitle/SectionTitle";
import { FaTrashAlt } from "react-icons/fa";




 


  


const BazarList = () => {
  const [allBazar,refetch] =useBazar()
  console.log(allBazar);
  const axiosSecure =useAxiosSecure()
  const {user} =useAuth()

  const currentDate = new Date();
  const currentMonth = currentDate.getMonth() + 1; 
  const allBazarMonth = allBazar?.filter(item => {
    const bazarList = new Date(item.mealDate);
    return bazarList.getMonth() + 1 === currentMonth;
  });
  // const handleDelete = (email) => {
  //   Swal.fire({
  //     title: "Are you sure?",
  //     text: "You won't be able to revert this!",
  //     icon: "warning",
  //     showCancelButton: true,
  //     confirmButtonColor: "#3085d6",
  //     cancelButtonColor: "#d33",
  //     confirmButtonText: "Yes, delete it!",
  //   }).then((result) => {
  //     if (result.isConfirmed) {
  //       axiosSecure.delete(`/bazarBooking/${email}`).then((res) => {
  //         if (res.data.deletedCount > 0) {
  //           refetch();
  //           Swal.fire({
  //             title: "Deleted",
  //             text: "Your post has been deleted",
  //             icon: "success",
  //           });
  //         }
  //       });
  //     }
  //   });
  // };



  return (
    <div>
      <Helmet>
        <title>Mess Manage | Bazar</title>
      </Helmet>
      <SectionTitle
        heading="Bazar List"
        subHeading="What's new?"
      ></SectionTitle>
      <div className="flex justify-evenly my-4">
        <h2>Booking List: {allBazar?.length}</h2>
      </div>
      <div className="overflow-x-auto">
        <table className="table table-zebra ">
          {/* head */}
          <thead>
            <tr>
              <th>#</th>
              <td>Name</td>
              <td>Bazar Date</td>
              <td>Given Money</td>
              <td>Total Meal</td>
              <td>Status</td>
              <td>Delete</td>
            </tr>
          </thead>
          <tbody>
            {allBazarMonth?.map((user, index) => (
              <tr key={user._id}>
                <th>{index + 1}</th>
                <td>{user.name}</td>

                <td>
                  {user.date &&
                    new Intl.DateTimeFormat("en-US", {
                      year: "numeric",
                      day: "numeric",
                      month: "long",
                    }).format(new Date(user.date))}
                </td>
                <td>{user.bazarMoney} TK</td>
                <td>{user.totalMeal}</td>
                <td>{user.status}</td>

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

export default BazarList;

 