import useProfile from "../../hooks/useProfile";


const BookDate = () => {
  const normalizedUserInfo =useProfile()
  console.log(normalizedUserInfo);
  return (
    <div>
      
    </div>
  );
};

export default BookDate;