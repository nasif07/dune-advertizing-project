import logo from "../assets/Frame.svg"
const NavBar = () => {
    return (
        <div className="flex justify-between text-white max-w-[1144px] mx-auto pt-3">
            <div className="flex gap-[10px] font-medium text-lg">
                <a href=""><button className="border-b-2 border-transparent hover:border-[#F9BF64] p-[10px]">Home</button></a>
                <a href=""><button className="border-b-2 border-transparent hover:border-[#F9BF64] p-[10px]">Services</button></a>
            </div>
            <img src={logo} alt="" />
            <div className="flex gap-[10px] font-medium text-lg">
                <a href=""><button className="border-b-2 border-transparent hover:border-[#F9BF64] p-[10px]">Project</button></a>
                <a href=""><button className="border-b-2 border-transparent hover:border-[#F9BF64] p-[10px]">About Us</button></a>
            </div>
        </div>
    );
};

export default NavBar;