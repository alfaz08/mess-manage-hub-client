import useSingleDeposit from "../../../../hooks/useSingleDeposit";


const UserDeposit = () => {
 
  const [myDeposit] =useSingleDeposit()
  console.log(myDeposit);

  return (
    <div>
      
    </div>
  );
};

export default UserDeposit;