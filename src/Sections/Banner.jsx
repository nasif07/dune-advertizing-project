import NavBar from '../Components/NavBar';
import moduleName from '../assets/homeBg.svg';
import arrowIcon from '../assets/iconArrow.svg'
const Banner = () => {
    return (
        <>
        <div style={{ backgroundImage: `url('${moduleName}')` }} className='bg-cover bg-no-repeat md:bg-center  h-[1095px]'>
            <NavBar></NavBar>
            <div className='text-center text-white max-w-[800px] mx-auto'>
                <h1 className='text-[96px] leading-tight pt-[54px] pb-10'>Navigating the Digital Landscape</h1>
                <div className=''>
                    <span className='text-[28px]  px-[45px] py-[15px] bg-[#FFA252] rounded-full'>Welcome to the Sands of Dune!</span>
                </div>
                <div className='pt-[250px]'>
                    <a href="#"><button style={{ boxShadow: "0px 8px 22px 0px rgba(20, 77, 138, 0.30)" }} className="text-[#323232] font-bold bg-white px-[30px] py-[18px] rounded-full mb-12 md:mb-0  hover:scale-105 duration-300">Explore Our Services</button></a>
                </div>
                <div className='flex justify-center pt-[18px]'>
                    <img src={arrowIcon} alt="" />
                </div>
            </div>

        </div>
        
        </>
    );
};

export default Banner;
// 