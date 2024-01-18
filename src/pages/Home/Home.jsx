import { Helmet } from "react-helmet-async";

import Footer from "../../components/Footer/Footer";
import AnnouncementBreaking from "../../components/Breaking/AnnouncementBreaking";
import TodayMeal from "../../components/TodayMeal/TodayMeal";


const Home = () => {
  return (
    <div>
      <Helmet>
        <title>Mess Manage | Home</title>
      </Helmet>
      <div className="container mx-auto">
      <AnnouncementBreaking></AnnouncementBreaking>
      <TodayMeal></TodayMeal>
      </div>
      <Footer ></Footer>
    </div>
  );
};

export default Home;