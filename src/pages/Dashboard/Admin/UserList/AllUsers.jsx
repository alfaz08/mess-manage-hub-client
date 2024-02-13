import React from 'react';
import useAllUsers from '../../../../hooks/useAllUsers';
import { FaUser, FaUserShield } from "react-icons/fa6";
import { FaTrashAlt } from "react-icons/fa";
import Swal from "sweetalert2";
import useAxiosSecure from '../../../../hooks/useAxiosSecure';

const AllUsers = () => {
  const [allUser,refetch]=useAllUsers()
  const axiosSecure =useAxiosSecure()
  console.log(allUser);

  const handleMakeAdmin = user =>{
    console.log(user);
     axiosSecure.patch(`/users/admin/${user._id}`)
     .then(res=>{
      console.log(res.data);
      if(res.data.modifiedCount>0){
        refetch()
        Swal.fire({
          position: 'top-end',
          icon: 'success',
          title: `${user.name} is an Admin Now!`,
          showConfirmButton: false,
          timer: 500,
        });
      }
     })
  
   }




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
        axiosSecure.delete(`/users/${email}`).then((res) => {
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
      <div className="mx-auto text-center border-red-300 border-y-4 py-4 md:w-4/12 my-8">
   <h2 className="text-3xl">User List: {allUser?.length}</h2>
    </div>
    
    
    <div className="overflow-x-auto">
      <table className="table table-zebra ">
        {/* head */}
        <thead>
          <tr>
            <th>#</th>
            <td>Name</td>
            <td>Roll</td>
            <td>Email</td>
            <td>Make Admin</td>
            <td>Delete</td>
          </tr>
        </thead>
        <tbody>
          {allUser?.map((user, index) => (
            <tr key={user._id}>
              <th>{index + 1}</th>
              <td>{user.name}</td>

              <td>{user.roll}</td>
              <td>{user.email}</td>

              <td>
              {user.roll ==='admin' ? 'Admin' :<button
           onClick={()=>handleMakeAdmin(user)}
           className="btn bg-orange-500 btn-lg">
         <FaUser className="text-white text-2xl"></FaUser>
          </button>}
              </td>
              <th>
                <button
                  onClick={() => handleDelete(user?.email)}
                  className="btn btn-ghost btn-lg"
                >
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

export default AllUsers;