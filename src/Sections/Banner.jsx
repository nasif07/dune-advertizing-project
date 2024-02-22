import NavBar from '../Components/NavBar';
import moduleName from '../assets/homeBg.svg';
const Banner = () => {
    return (
        <div style={{backgroundImage: `url('${moduleName}')`}} className='bg-cover bg-no-repeat md:bg-center lg:bg-top h-[1095px]'>
            <NavBar></NavBar>
        </div>
    );
};

export default Banner;