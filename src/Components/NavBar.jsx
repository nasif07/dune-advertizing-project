import logo from '/logo.svg'
const NavBar = () => {
    return (
        <div className="flex  justify-between text-[#151414] max-w-[1144px] mx-auto pt-4 font-Inter">
            <div className="flex gap-12 font-medium text-xs">
                <a href=""><button className="border-b-2 border-transparent hover:border-white pb-2">Home</button></a>
                <a href=""><button className="border-b-2 border-transparent hover:border-white pb-2">Services</button></a>
            </div>
            <img src={logo} alt="" />
            <div className="flex gap-12 font-medium text-xs">
                <a href=""><button className="border-b-2 border-transparent hover:border-white pb-2">Project</button></a>
                <a href=""><button className="border-b-2 border-transparent hover:border-white pb-2">About Us</button></a>
            </div>
        </div>
    );
};

export default NavBar;