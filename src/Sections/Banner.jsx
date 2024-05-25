import NavBar from "../Components/NavBar";
import moduleName from "../assets/bannerBg.png";
const Banner = () => {
  return (
    <>
      <div
        style={{ backgroundImage: `url('${moduleName}')` }}
        className="bg-cover bg-no-repeat md:bg-center font-DM_sans min-h-screen"
      >
        <NavBar></NavBar>
        <div className="text-center max-w-[1160px] mx-auto px-4 md:px-10 text-[#000] pt-4">
          <h1 className="text-[76px] font-medium leading-tight w-[600px] mx-auto">
            Navigating the Digital Landscape
          </h1>
          <p className="text-3xl p-2">
              Welcome to the Sands of Dune!
          </p>
          
        </div>
      </div>
    </>
  );
};

export default Banner;
