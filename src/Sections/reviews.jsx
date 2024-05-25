import advertise1 from "../assets/advertise1.png";
import advertise2 from "../assets/advertise2.png";
import advertise3 from "../assets/advertise3.png";
import advertise4 from "../assets/advertise4.png";
import advertise5 from "../assets/advertise5.png";
import advertise6 from "../assets/advertise6.png";
import Marquee from "react-fast-marquee";
const reviews = () => {
  return (
    <div className="bg-dark-gray font-Space_Grotesk md:px-10 px-4 font-DM_sans">
      <div className="max-w-[980px] mx-auto md:py-[100px] lg:py-10">
        <div className="flex flex-col gap-6">
          <Marquee speed={30} autoFill="true">
            <img className="pr-8 h-80" src={advertise1} alt="" />
            <img className="pr-8 h-80" src={advertise2} alt="" />
            <img className="pr-8 h-80" src={advertise3} alt="" />
          </Marquee>
          <Marquee speed={30} autoFill="true" direction="right">
            <img className="pr-8 h-80" src={advertise4} alt="" />
            <img className="pr-8 h-80" src={advertise5} alt="" />
            <img className="pr-8 h-80" src={advertise6} alt="" />
          </Marquee>
        </div>
      </div>
    </div>
  );
};

export default reviews;
