import useAuth from "../../../../hooks/useAuth";


const AdminHome = () => {
  const {user} =useAuth()
 
  
  // const {address,date,email,image,name,phone,roll,shop} =userInfo
  console.log(user?.displayName);
    

  return (
    <div className='grid grid-cols-1 md:grid-cols-4'>
      
      <div className='col-span-2'>
      <div className="card card-compact bg-base-100 shadow-xl justify-center items-center mt-20">
  <figure><img src={user?.photoURL} alt="Shoes" /></figure>
  <div className="card-body">
   
    
    <div className="card-actions justify-end">
      <button className="btn btn-warning">Buy Now</button>
    </div>
  </div>
</div>
      </div>
      <div className=' col-span-2 mt-20'>
        
        
      </div>
    </div>
  );
};

export default AdminHome;