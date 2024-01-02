import React from 'react';
import useAllUsers from '../../../../hooks/useAllUsers';

const AllUsers = () => {
  const [allUser]=useAllUsers()
  console.log(allUser);
  return (
    <div>
      
    </div>
  );
};

export default AllUsers;