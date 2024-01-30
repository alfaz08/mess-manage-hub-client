






  import Swal from "sweetalert2";
import useAuth from "../../../../hooks/useAuth";
import useAxiosSecure from "../../../../hooks/useAxiosSecure";

import { Helmet } from "react-helmet-async";
import SectionTitle from "../../../SectionTitle/SectionTitle";
import { FaTrashAlt } from "react-icons/fa";
import useMeal from "../../../../hooks/useMeal";
import { useParams } from "react-router-dom";





 


  


const MealList = () => {
  const [allMeal,refetch] =useMeal()
  
  const axiosSecure =useAxiosSecure()
  const {user} =useAuth()

  console.log(allMeal);


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
        axiosSecure.delete(`/allMeal/${id}`).then((res) => {
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
        <h2>Booking List: {allMeal?.length}</h2>
      </div>
      <div className="overflow-x-auto">
        <table className="table table-zebra ">
          {/* head */}
          <thead>
            <tr>
              <th>#</th>
              <td>Name</td>
              <td>Meal Title</td>
              <td>Meal Time</td>
              <td>Total Meal</td>
              <td>Meal Item</td>
             
              <td>Delete</td>
            </tr>
          </thead>
          <tbody>
            {allMeal?.map((user, index) => (
              <tr key={user._id}>
                <th>{index + 1}</th>
                <td>{user.name}</td>

                <td>{user.title}
                  
                </td>
                <td>{user.time} </td>
                <td>{user.totalMeal}</td>
               
                <td>{user.items.map((item) => item.item).join(', ')}</td>


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

export default MealList;

 
  