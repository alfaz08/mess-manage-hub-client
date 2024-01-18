
import Swal from "sweetalert2";
import useAuth from "../../../../hooks/useAuth";
import useAxiosSecure from "../../../../hooks/useAxiosSecure";

import { Helmet } from "react-helmet-async";
import SectionTitle from "../../../SectionTitle/SectionTitle";
import { FaTrashAlt } from "react-icons/fa";
import useAnnouncement from "../../../../hooks/useAnnouncement";
import { useParams } from "react-router-dom";



const AllAnnouncement = () => {
  const [announcement,refetch] =useAnnouncement()
  console.log(announcement);
  const axiosSecure =useAxiosSecure()
  const {user} =useAuth()
  


  const handleDelete = (id) => {
    console.log(id);
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
        axiosSecure.delete(`/announcements/${id}`).then((res) => {
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
        <title>Mess Manage | Meal</title>
      </Helmet>
      <SectionTitle
        heading="Meal List"
        subHeading="What's new?"
      ></SectionTitle>
      <div className="flex justify-evenly my-4">
        <h2>Booking List: {announcement?.length}</h2>
      </div>
      <div className="overflow-x-auto">
        <table className="table table-zebra ">
          {/* head */}
          <thead>
            <tr>
              <th>#</th>
              
              <td>Announcement Title</td>
              <td>Announcement Description</td>
              
              <td>Delete</td>
            </tr>
          </thead>
          <tbody>
            {announcement?.map((user, index) => (
              <tr key={user._id}>
                <th>{index + 1}</th>
                <td>{user.title}</td>

                <td>{user.description}
                  
                </td>
                
               
                

                <th>
                  <button className="btn btn-ghost btn-lg"
                  onClick={() => handleDelete(user?._id)}>
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

export default AllAnnouncement;

 
  