import chooseUsImg from "../assets/chooseUsImg.png";
const About = () => {
  return (
    <div className="bg-dark-gray font-Space_Grotesk md:px-10 px-4 font-DM_sans">
      <div className="max-w-[1100px] mx-auto py-[50px] md:py-[100px]">
        <div className="flex flex-col-reverse md:flex-row  items-center md:gap-5 lg:gap-[90px]">
          <div>
            <img className="" src={chooseUsImg} alt="" />
          </div>
          <div className="flex-1 my-[50px] md:my-[50px]">
            <h1 className="text-white text-2xl md:text-[30px] lg:text-[36px] md:leading-tight max-w-[300px]">
              Why should you choose Dune
            </h1>
            <p className="text-[#888] text-lg py-5">
              At Dune, we are dedicated to driving your business success through
              our comprehensive digital marketing services. Here’s why
              partnering with us is the best choice for your business growth
            </p>
            <div className="font-Inter">
            <h4 className="text-white text-lg font-bold pb-2.5">
              Targeted Paid Ads: <span className="font-normal">Reach the right audience effectively.</span>
            </h4>
            <h4 className="text-white text-lg font-bold pb-2.5">
              Expert Growth Consulting: <span className="font-normal">Personalized plans for business growth.</span>
            </h4>
            <h4 className="text-white text-lg font-bold pb-2.5">
              Creative Content: <span className="font-normal">Engaging content that builds your brand.</span>
            </h4>
            <h4 className="text-white text-lg font-bold pb-2.5">
            Innovative Websites: <span className="font-normal">Beautiful, functional website designs.</span>
            </h4>
            <h4 className="text-white text-lg font-bold pb-2.5">
            Proven Success: <span className="font-normal">Track record of driving results</span>
            </h4>
            </div>
            <div className="pt-[54px]">
              <a href="#contact">
                <button
                  style={{
                    background:
                      "linear-gradient(214deg, #FADE84 -51.05%, #FAB55A 94.68%)",
                  }}
                  className="px-[30px] py-[14px]  text-[#0D0D0D] rounded-full font-bold text-[16px]   hover:scale-105 duration-300"
                >
                  Contact us
                </button>
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;
