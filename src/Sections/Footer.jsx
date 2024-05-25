import logo from "/logo.svg";
import facebook from "../assets/icon-for-services/facebook.svg";
import instragram from "../assets/icon-for-services/instragram.svg";
import tiktok from "../assets/icon-for-services/tiktok.svg";
import x from "../assets/icon-for-services/x.svg";
import whatsapp from "../assets/icon-for-services/whatsapp.svg";
const Footer = () => {
  return (
    <div className="md:px-10 px-4 bg-light-gray">
      <div className="max-w-[1100px] mx-auto py-[43px] flex justify-between items-center">
        <img src={logo} alt="" />
        <div className="flex gap-28 font-medium text-xs font-Inter text-white">
          <div className="flex flex-col gap-4">
            <a href="">Home</a>
            <a href="">Services</a>
          </div>
          <div className="flex flex-col gap-4">
            <a href="">About Us</a>
            <a href="">Contact</a>
          </div>
        </div>
        <div className="flex gap-4">
          <img className="w-12" src={facebook} alt="" />
          <img className="w-12" src={instragram} alt="" />
          <img className="w-12" src={tiktok} alt="" />
          <img className="w-12" src={x} alt="" />
          <img className="w-12" src={whatsapp} alt="" />
        </div>
      </div>
    </div>
  );
};

export default Footer;
