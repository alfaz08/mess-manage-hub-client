import React from "react";
import useBazarBooking from "../../../../hooks/useBazarBooking";
import useAxiosSecure from "../../../../hooks/useAxiosSecure";
import Swal from "sweetalert2";
import { FaTrashAlt } from "react-icons/fa";

const BazarBookingList = () => {
  const [allBooking, refetch] = useBazarBooking();

  return (
    <div>
      <div className="flex justify-evenly my-4">
        <h2>User List: {allBooking?.length}</h2>
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
            {allBooking?.map((user, index) => (
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
                  <button className="btn btn-ghost btn-lg">
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
