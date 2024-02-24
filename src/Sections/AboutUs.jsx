import aeroIcon from "../assets/aeroIcon.svg"
import aboutImg2 from "../assets/aboutBanner2.png"
import aboutImg1 from "../assets/aboutbanner1.png"
import avatar from "../assets/avatar.png"


const About = () => {



    return (
        <div className="bg-[#FFF4E2] font-Space_Grotesk md:px-10 px-4 font-DM_sans">
            <div className="max-w-[1160px] mx-auto py-[50px] md:py-[100px]">
                <div className="flex flex-col-reverse md:flex-row  items-center md:gap-5 lg:gap-[132px]">

                    <div className="relative">
                        <img className="" src={aboutImg1} alt="" />
                        <div className="absolute top-10 right-20">
                            <p className="text-[#0D0D0D] text-[13px] font-normal pb-2">Our Customers</p>
                            <div className="flex gap-3 items-center">
                            <img src={avatar} alt="" />
                            <p className="text-[#FF865E] font-medium text-[13px]">+25k</p>
                            </div>
                        </div>
                    </div>
                    <div className="flex-1 my-[50px] md:my-[50px]">
                        <h1 className="text-[#0D0D0D] text-2xl md:text-[30px] lg:text-[40px] md:leading-tight max-w-[300px]">Why should you choose Dune</h1>
                        <p className="text-[#888] py-[20px]">Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor Lorem ipsum dolor sit amet consetetur sadipscing elitr</p>
                        <div className="flex gap-3 items-center pb-[10px]">
                            <img className="w-5" src={aeroIcon} alt="" />
                            <h4 className="text-[#272932] text-[16px] font-medium">Lorem ipsum dolor sit amet, consetetur sadipscing</h4>
                        </div>
                        <div className="flex gap-3 items-center pb-[10px]">
                            <img className="w-5" src={aeroIcon} alt="" />
                            <h4 className="text-[#272932] text-[16px] font-medium">sed diam nonumy eirmod tempor Lorem ipsum dolor</h4>
                        </div>
                        <div className="flex gap-3 items-center pb-[10px]">
                            <img className="w-5" src={aeroIcon} alt="" />
                            <h4 className="text-[#272932] text-[16px] font-medium">sed diam nonumy eirmod tempor Lorem ipsum dolor</h4>
                        </div>
                        <div className="pt-[54px]">
                            <a href="#contact"><button style={{ background: 'linear-gradient(214deg, #FADE84 -51.05%, #FAB55A 94.68%)' }} className="px-[30px] py-[14px]  text-[#0D0D0D] rounded-full font-bold text-[16px]   hover:scale-105 duration-300">Contact us</button></a>
                        </div>
                    </div>
                </div>
                <div className="md:flex items-center md:gap-8 lg:gap-[132px] pt-[150px] pb-[50px]">

                    <div className="flex-1 my-[50px] md:my-0">
                        <h1 className="text-[#0D0D0D] text-2xl md:text-[30px] lg:text-[40px] md:leading-tight max-w-[300px]">Why should you choose Dune</h1>
                        <p className="text-[#888] py-[20px]">Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor Lorem ipsum dolor sit amet consetetur sadipscing elitr</p>
                        <div className="pt-[27px]">
                            <a href="#contact"><button style={{ background: 'linear-gradient(214deg, #FADE84 -51.05%, #FAB55A 94.68%)' }} className="px-[30px] py-[14px]  text-[#0D0D0D] rounded-full font-bold text-[16px]   hover:scale-105 duration-300">Contact us</button></a>
                        </div>

                    </div>
                    <div>
                        <img src={aboutImg2} alt="" />
                    </div>

                </div>


            </div>
        </div>
    );
};

export default About;