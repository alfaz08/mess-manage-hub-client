import { Helmet } from "react-helmet-async";


const Home = () => {
  return (
    <div>
      <Helmet>
        <title>Mess Manage | Home</title>
      </Helmet>
      <div className="text-5xl">
       This is home
      </div>
    </div>
  );
};

export default Home;