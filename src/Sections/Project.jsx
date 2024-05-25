import Project1 from "../assets/project1.png";
const Project = () => {
  return (
    <div className="bg-light-gray font-DM_sans py-[100px]">
      <div className=" max-w-[1160px] mx-auto px-4 md:px-10">
        <div className="col-span-1 md:col-span-3 lg:col-span-2 max-w-[390px] pb-[50px]">
          <h1 className="text-white text-[40px]  leading-tight">
            Check our <br />
            latest works
          </h1>
          <p className="text-[#888] pt-[14px]">
            Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam
            nonumy eirmod tempor Lorem ipsum dolor sit
          </p>
        </div>
        <div className="grid grid-cols-2  max-w-[1160px] mx-auto">
          <div className="space-y-4">
            <div className="">
              <img
                className="w-[447px] h-[600px] shadow-md rounded-3xl"
                src={Project1}
                alt=""
              />
            </div>
            <div className="ml-8">
              <h1 className="font-normal text-xl text-white">NSP Website</h1>
              <p className="font-normal text-lg text-[#888888]">
                Lorem ipsum dolor sit amet
              </p>
            </div>
          </div>
          <div className="grid grid-cols-1 grid-rows-2 gap-8">
            <div className="flex gap-8">
              <div className="box-1 space-y-4">
                <div>
                  <div className="bg-dark-gray w-[352px] h-[249px] rounded-2xl"></div>
                </div>
                <div className="ml-8">
                  <h1 className="font-normal text-xl text-white">NSP Website</h1>
                  <p className="font-normal text-lg text-[#888888]">
                    Lorem ipsum dolor sit amet
                  </p>
                </div>
              </div>
              <div className="box-2 space-y-4">
                <div>
                  <div className=" bg-dark-gray w-[256px] h-[249px] rounded-2xl "></div>
                </div>
                <div className="ml-8">
                  <h1 className="font-normal text-xl text-white">NSP Website</h1>
                  <p className="font-normal text-lg text-[#888888]">
                    Lorem ipsum dolor
                  </p>
                </div>
              </div>
            </div>
            <div className="box-3 space-y-4">
              <div>
                <div className=" bg-dark-gray h-[249px] w-[640px] rounded-2xl"></div>
              </div>
              <div className="ml-8">
                <h1 className="font-normal text-xl text-white">NSP Website</h1>
                <p className="font-normal text-lg text-[#888888]">
                  Lorem ipsum dolor sit amet
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Project;
