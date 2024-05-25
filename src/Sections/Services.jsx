import ads from "../assets/ads.svg";
import dev from "../assets/dev.svg";
import rocket from "../assets/rocket.svg";
import content from "../assets/content.svg";
const Services = () => {
  return (

    <div className="bg-dark-gray font-DM_sans py-[50px] md:py-[100px] md:px-10 px-4">
        <h1 className="text-white font-medium text-[52px] text-center pb-24 leading-tight">We help <br />  brands with</h1>
      <div className="max-w-[980px] mx-auto flex flex-col gap-[120px]">
        <div className="flex justify-between items-end gap-20">
          <div className=" max-w-[510px] flex flex-col gap-4">
            <p className="text-[#C9864F] text-xs leading-none">ads</p>
            <h3 className="text-[36px] font-bold text-white leading-tight w-[260px]">
            Paid Ads
            </h3>
            <p className="text-[#888] text-lg max-w-[500px]">
            Boost your business with Dune Advertising's Paid Ads service. We create tailored strategies, design engaging ads, and manage campaigns on Google, Facebook, and more. Enjoy precise targeting, continuous optimization, and detailed performance reports. Achieve maximum ROI and growth with Dune Advertising.
            </p>
          </div>
          <div>
            <img width="248px" height="248px" src={ads} alt="" />
          </div>
        </div>
        <div className="flex justify-between items-end gap-20">
          <div className=" max-w-[510px] flex flex-col gap-4">
            <p className="text-[#C9864F] text-xs leading-none">Consulting</p>
            <h3 className="text-[36px] font-bold text-white leading-tight w-[380px]">
            Business Growth Consulting
            </h3>
            <p className="text-[#888] text-lg max-w-[500px]">
            Transform your business with Dune Advertising's Growth Consulting. Our experts analyze, strategize, and provide tailored solutions to drive your growth. Overcome challenges and reach new heights with Dune's innovative support and actionable insights.
            </p>
          </div>
          <div>
            <img src={rocket} alt="" />
          </div>
        </div>
        <div className="flex justify-between items-end gap-20">
          <div className=" max-w-[510px] flex flex-col gap-4">
            <p className="text-[#C9864F] text-xs leading-none">Content</p>
            <h3 className="text-[36px] font-bold text-white leading-tight">
            Content Creation
            </h3>
            <p className="text-[#888] text-lg max-w-[500px]">
            nhance your brand with Dune Advertising's Content Creation service. Our creative team produces high-quality, engaging content tailored to your audience. From captivating visuals to compelling copy, we ensure your message resonates and drives action. Boost your online presence and connect with your audience through powerful content crafted by Dune Advertising.
            </p>
          </div>
          <div>
            <img src={content} alt="" />
          </div>
        </div>
        <div className="flex justify-between items-end gap-20">
          <div className=" max-w-[510px] flex flex-col gap-4">
            <p className="text-[#C9864F] text-xs leading-none">Website</p>
            <h3 className="text-[36px] font-bold text-white leading-tight w-[385px]">
            Website development and design
            </h3>
            <p className="text-[#888] text-lg max-w-[500px]">
            Elevate your online presence with Dune Advertising's Website Development and Design. We create stunning, user-friendly websites tailored to your brand, ensuring responsive design and seamless navigation. Make a lasting impact and drive results with Dune Advertising.
            </p>
          </div>
          <div>
            <img src={dev} alt="" />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Services;
