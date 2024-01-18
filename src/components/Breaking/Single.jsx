import Marquee from "react-fast-marquee";


const Single = ({item}) => {
  return (
    <div>
      <Marquee>{item.title}</Marquee>
    </div>
  );
};

export default Single;