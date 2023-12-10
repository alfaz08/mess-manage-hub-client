import { Helmet } from "react-helmet-async";
import Navbar from "../../components/Navbar/Navbar";
import Footer from "../../components/Footer/Footer";


const Home = () => {
  return (
    <div>
      <Helmet>
        <title>Mess Manage | Home</title>
      </Helmet>
      <Footer ></Footer>
    </div>
  );
};

export default Home;