import searchIcon from "../assets/icon-for-services/searchIcon.svg";
import codeIcon from "../assets/icon-for-services/codeIcon.svg";
import videoIcon from "../assets/icon-for-services/videoIcon.svg";
import noteBookIcon from "../assets/icon-for-services/noteIcon.svg";
import socialIcon from "../assets/icon-for-services/Glyph.svg";
import dollarIcon from "../assets/icon-for-services/dollarIcon.svg";
import serviceSearch from "../assets/serviceSearch.png";
const Services = () => {
  return (
    // <div className="bg-dark-gray font-DM_sans">
    //     <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-4 gap-8 py-[50px] md:py-[130px] max-w-[1160px] mx-auto px-4 md:px-10">
    //         <div className="col-span-1 md:col-span-3 lg:col-span-2 max-w-[390px]">
    //             <h1 className="text-white text-[40px]  leading-tight">Our Digital <br /> Marketing Expertise</h1>
    //             <p className="text-[#888] pt-[14px]">Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor Lorem ipsum dolor sit</p>
    //         </div>
    //         <div className="bg-light-gray py-[50px] pl-[30px] rounded-3xl">
    //             <img src={searchIcon} alt="" />
    //             <p className="text-white pt-[30px] text-[20px]">Search Engine Optimization</p>
    //         </div>
    //         <div className="bg-light-gray py-[50px] pl-[30px] rounded-3xl">
    //             <img src={codeIcon} alt="" />
    //             <p className="text-white pt-[30px] text-[20px]">Website design & development</p>
    //         </div>
    //         <div className="bg-light-gray py-[50px] pl-[30px] rounded-3xl">
    //             <img src={videoIcon} alt="" />
    //             <p className="text-white pt-[30px] text-[20px]">Video editing & <br /> production</p>
    //         </div>
    //         <div className="bg-light-gray py-[50px] pl-[30px] rounded-3xl">
    //             <img src={noteBookIcon} alt="" />
    //             <p className="text-white pt-[30px] text-[20px]">Content <br /> writing</p>
    //         </div>
    //         <div className="bg-light-gray py-[50px] pl-[30px] rounded-3xl">
    //             <img src={socialIcon} alt="" />
    //             <p className="text-white pt-[30px] text-[20px]">Social media <br /> marketing</p>
    //         </div>
    //         <div className="bg-light-gray py-[50px] pl-[30px] rounded-3xl">
    //             <img src={dollarIcon} alt="" />
    //             <p className="text-white pt-[30px] text-[20px]">Pay per <br /> click</p>
    //         </div>
    //     </div>
    // </div>
    <div className="bg-dark-gray font-DM_sans py-[100px]">
        <h1 className="text-white font-bold text-[32px] text-center pb-[100px]">We help brands <br /> with</h1>
      <div className="py-[50px] md:py-[130px] max-w-[1160px] mx-auto px-4 md:px-10 border-2 border-[#C9864F] rounded-3xl flex flex-col gap-[120px]">
        <div className="flex justify-between items-center gap-20 px-24">
          <div className=" max-w-[510px] flex flex-col gap-4">
            <p className="text-[#C9864F] text-xs leading-none">Technical SEO</p>
            <h3 className="text-[36px] font-bold text-white leading-tight w-[260px]">
              Search Engine Optimization
            </h3>
            <p className="text-[#888] text-lg">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed
              ullamcorper fringilla massa, nec commodo nisl condimentum sed.
              Nullam auctor lobortis dolor, nec convallis erat interdum ut.
              Vivamus et ipsum vel elit posuere volutpat. Ut vel semper lorem.
              Sed ac aliquam risus. Integer sagittis velit ac lorem consectetur,
              sit amet blandit justo consequat. Aenean luctus ipsum vitae justo
              dapibus, ac faucibus arcu consectetur.
            </p>
          </div>
          <div>
            <img src={serviceSearch} alt="" />
          </div>
        </div>
        <div className="flex justify-between items-center gap-20 px-24">
          <div className=" max-w-[510px] flex flex-col gap-4">
            <p className="text-[#C9864F] text-xs leading-none">Creative assets</p>
            <h3 className="text-[36px] font-bold text-white leading-tight w-[260px]">
            Video editing & Production
            </h3>
            <p className="text-[#888] text-lg">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed
              ullamcorper fringilla massa, nec commodo nisl condimentum sed.
              Nullam auctor lobortis dolor, nec convallis erat interdum ut.
              Vivamus et ipsum vel elit posuere volutpat. Ut vel semper lorem.
              Sed ac aliquam risus. Integer sagittis velit ac lorem consectetur,
              sit amet blandit justo consequat. Aenean luctus ipsum vitae justo
              dapibus, ac faucibus arcu consectetur.
            </p>
          </div>
          <div>
            <img src={serviceSearch} alt="" />
          </div>
        </div>
        <div className="flex justify-between items-center gap-20 px-24">
          <div className=" max-w-[510px] flex flex-col gap-4">
            <p className="text-[#C9864F] text-xs leading-none">Marketing genius</p>
            <h3 className="text-[36px] font-bold text-white leading-tight w-[260px]">
            Social Media Marketing
            </h3>
            <p className="text-[#888] text-lg">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed
              ullamcorper fringilla massa, nec commodo nisl condimentum sed.
              Nullam auctor lobortis dolor, nec convallis erat interdum ut.
              Vivamus et ipsum vel elit posuere volutpat. Ut vel semper lorem.
              Sed ac aliquam risus. Integer sagittis velit ac lorem consectetur,
              sit amet blandit justo consequat. Aenean luctus ipsum vitae justo
              dapibus, ac faucibus arcu consectetur.
            </p>
          </div>
          <div>
            <img src={serviceSearch} alt="" />
          </div>
        </div>
        <div className="flex justify-between items-center gap-20 px-24">
          <div className=" max-w-[510px] flex flex-col gap-4">
            <p className="text-[#C9864F] text-xs leading-none">Marketing genius</p>
            <h3 className="text-[36px] font-bold text-white leading-tight w-[260px]">
            Website Design & Development
            </h3>
            <p className="text-[#888] text-lg">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed
              ullamcorper fringilla massa, nec commodo nisl condimentum sed.
              Nullam auctor lobortis dolor, nec convallis erat interdum ut.
              Vivamus et ipsum vel elit posuere volutpat. Ut vel semper lorem.
              Sed ac aliquam risus. Integer sagittis velit ac lorem consectetur,
              sit amet blandit justo consequat. Aenean luctus ipsum vitae justo
              dapibus, ac faucibus arcu consectetur.
            </p>
          </div>
          <div>
            <img src={serviceSearch} alt="" />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Services;
