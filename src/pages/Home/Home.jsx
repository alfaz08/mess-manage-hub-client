import { Helmet } from "react-helmet-async";

import Footer from "../../components/Footer/Footer";
import AnnouncementBreaking from "../../components/Breaking/AnnouncementBreaking";


const Home = () => {
  return (
    <div>
      <Helmet>
        <title>Mess Manage | Home</title>
      </Helmet>
      <div className="container mx-auto">
      <AnnouncementBreaking></AnnouncementBreaking>
      </div>
      <Footer ></Footer>
    </div>
  );
};

export default Home;