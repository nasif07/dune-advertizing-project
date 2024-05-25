import NavBar from "../Components/NavBar";
import moduleName from "../assets/homeBg.svg";
import advertise1 from "../assets/advertise1.png";
import advertise2 from "../assets/advertise2.png";
import advertise3 from "../assets/advertise3.png";
import advertise4 from "../assets/advertise4.png";
import advertise5 from "../assets/advertise5.png";
import advertise6 from "../assets/advertise6.png";
import Marquee from "react-fast-marquee";
const Banner = () => {
  return (
    <>
      <div
        style={{ backgroundImage: `url('${moduleName}')` }}
        className="bg-cover bg-no-repeat md:bg-center   font-DM_sans bg-dark-gray"
      >
        <NavBar></NavBar>
        <div className="text-center text-white max-w-[1160px] mx-auto px-4 md:px-10">
          <h1 className="text-[80px] leading-tight pt-5 pb-5 font-DM_sans">
            Navigating the Digital Landscape
          </h1>
          <div className="">
            <span className="text-[28px]  px-[45px] py-[10px] bg-[#FFA252] rounded-full">
              Welcome to the Sands of Dune!
            </span>
          </div>
          {/* <div className='pt-[250px]'>
                    <a href="#contact"><button style={{ boxShadow: "0px 8px 22px 0px rgba(20, 77, 138, 0.30)" }} className="text-[#323232] font-bold bg-white px-[30px] py-[18px] rounded-full mb-12 md:mb-0  hover:scale-105 duration-300">Explore Our Services</button></a>
                </div>
                <div className='flex justify-center pt-[18px]'>
                    <img src={arrowIcon} alt="" />
                </div> */}
          <div className="flex flex-col gap-6 pb-16 pt-12">
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
    </>
  );
};

export default Banner;
