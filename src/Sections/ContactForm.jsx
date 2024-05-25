const ContactForm = () => {
    const inputStyle = {
        outline: 'none'
    }
    return (
        <section id="contact" className=" px-4 md:px-10 bg-light-gray py-[100px] font-DM_sans">
            <div className=" max-w-[1160px] mx-auto bg-dark-gray rounded-[52px] py-[50px] md:py-[100px] px-2 md:px-8 lg:px-[50px]">
            <div className="md:flex gap-2 lg:gap-8">
                <div data-aos="fade-up" data-aos-duration="1000">
                    <p className="text-[#FAC66B] text-[20px]">Your info</p>
                    <h1 className="text-4xl md:text-[46px] text-white pt-5 pb-11 md:max-w-[300px] lg:max-w-[450px] leading-snug">Get connected to digital world with dune</h1>
                </div>
                <div  data-aos="fade-up" data-aos-duration="1000" className="flex-auto">
                    <form className="space-y-6 md:space-y-8" action="">
                        <div className="flex gap-3 md:gap-8">
                            <input style={inputStyle} type="text" placeholder="First name..." className="input rounded-full w-full  h-[55px] bg-light-gray pl-5" />
                            <input style={inputStyle} type="text" placeholder="Last name..." className="input rounded-full w-full  h-[55px] bg-light-gray pl-5" />
                        </div>
                        <div>
                            <input style={inputStyle} type="email" placeholder="Company email address..." className="input rounded-full w-full  h-[55px] bg-light-gray pl-5" />
                        </div>
                        <div className="flex gap-3 md:gap-8">
                            <input style={inputStyle} type="number" placeholder="Phone number..." className="input rounded-full w-full h-[55px] bg-light-gray pl-5" />
                            <input style={inputStyle} type="text" placeholder="Business name..." className="input rounded-full w-full h-[55px] bg-light-gray pl-5" />
                        </div>
                        <div>
                            <input style={inputStyle} type="text" placeholder="Website URL..." className="input rounded-full w-full  h-[55px] bg-light-gray pl-5" />
                        </div>
                        <button className="bg-[#C9864F] w-full py-[18px] text-white rounded-full font-bold text-[16px]">Get started now!</button>
                    </form>
                </div>
            </div>
        </div>
        </section>
    );
};

export default ContactForm;