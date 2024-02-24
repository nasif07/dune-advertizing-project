import searchIcon from "../assets/icon-for-services/searchIcon.svg"
import codeIcon from "../assets/icon-for-services/codeIcon.svg"
import videoIcon from "../assets/icon-for-services/videoIcon.svg"
import noteBookIcon from "../assets/icon-for-services/noteIcon.svg"
import socialIcon from "../assets/icon-for-services/Glyph.svg"
import dollarIcon from "../assets/icon-for-services/dollarIcon.svg"
const Services = () => {
    return (
        <div className="bg-white py-[50px] md:py-[130px] max-w-[1160px] mx-auto px-4 md:px-10 font-DM_sans">
            <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-4 gap-8">
                <div className="col-span-1 md:col-span-3 lg:col-span-2 max-w-[390px]">
                    <h1 className="text-[#0D0D0D] text-[40px]  leading-tight">Our Digital <br /> Marketing Expertise</h1>
                    <p className="text-[#888] pt-[14px]">Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor Lorem ipsum dolor sit</p>
                </div>
                <div className="bg-[#F3F3F3] py-[50px] pl-[30px] rounded-3xl">
                    <img src={searchIcon} alt="" />
                    <p className="text-[#0D0D0D] pt-[30px] text-[20px]">Search Engine Optimization</p>
                </div>
                <div className="bg-[#F3F3F3] py-[50px] pl-[30px] rounded-3xl">
                    <img src={codeIcon} alt="" />
                    <p className="text-[#0D0D0D] pt-[30px] text-[20px]">Website design & development</p>
                </div>
                <div className="bg-[#F3F3F3] py-[50px] pl-[30px] rounded-3xl">
                    <img src={videoIcon} alt="" />
                    <p className="text-[#0D0D0D] pt-[30px] text-[20px]">Video editing & <br /> production</p>
                </div>
                <div className="bg-[#F3F3F3] py-[50px] pl-[30px] rounded-3xl">
                    <img src={noteBookIcon} alt="" />
                    <p className="text-[#0D0D0D] pt-[30px] text-[20px]">Content <br /> writing</p>
                </div>
                <div className="bg-[#F3F3F3] py-[50px] pl-[30px] rounded-3xl">
                    <img src={socialIcon} alt="" />
                    <p className="text-[#0D0D0D] pt-[30px] text-[20px]">Social media <br /> marketing</p>
                </div>
                <div className="bg-[#F3F3F3] py-[50px] pl-[30px] rounded-3xl">
                    <img src={dollarIcon} alt="" />
                    <p className="text-[#0D0D0D] pt-[30px] text-[20px]">Pay per <br /> click</p>
                </div>
            </div>
        </div>
    );
};

export default Services;