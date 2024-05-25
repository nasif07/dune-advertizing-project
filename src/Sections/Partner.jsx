import google from "../assets/googleName.svg";
import instragram from "../assets/instragramName.svg";
import tiktok from "../assets/tiktokName.svg";
import shopify from "../assets/shopifyName.svg";
import amazon from "../assets/amazonName.svg";
import youtube from "../assets/youtubeName.svg";

const Partner = () => {
  return (
    <div className="md:px-10 px-4 bg-dark-gray">
      <div className="max-w-[1100px] mx-auto py-[43px] md:py-[125px] font-DM_sans">
        <h1 className="font-bold text-white text-5xl font-DM_sans leading-snug tracking-wider">
          We are partnered <br /> with leading growth channels
        </h1>
        <button
          className="px-[30px] py-[18px]  text-white bg-[#C9864F] rounded-full font-bold text-[16px] mt-9 mb-16 hover:scale-105 duration-300"
        >
          Click here to dominate!
        </button>
        <div className="flex gap-[145px] pb-16 lg:pl-28">
            <img src={google} alt="" />
            <img src={tiktok} alt="" />
            <img src={youtube} alt="" />
        </div>
        <div className="flex gap-[145px] lg:pl-28">
            <img src={instragram} alt="" />
            <img src={amazon} alt="" />
            <img src={shopify} alt="" />
        </div>
      </div>
    </div>
  );
};

export default Partner;
