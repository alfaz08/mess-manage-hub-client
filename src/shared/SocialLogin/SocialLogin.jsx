import { FaGoogle } from "react-icons/fa";


const SocialLogin = () => {
  return (
    <div >
      <div className="flex items-center justify-center">
      <hr className="mr-2 mt-2 ml-4 w-36 border-black" />
       <span className="text-2xl">or</span>
       <hr className="ml-2 mt-2 mr-4 w-36 border-black"/>
      </div>
       
      <div className="text-center mb-4 mt-4 ">
        <button   className=" text-red-600 font-bold btn border-black bg-custom-color hover:bg-black hover:text-white">
          <FaGoogle className="mr-2"></FaGoogle>
          Login With Google
        </button>
      </div>
    </div>
  );
};

export default SocialLogin;