import komaIcon from '../assets/koma.svg';
import { FaAngleRight, FaAngleLeft } from "react-icons/fa6";

import { useEffect, useState } from 'react';
const Testimonials = () => {
    const array = [{ name: 'John Doe', designation: 'Student', testimonialDescription: 'Being a student, Taskiee has been my go-to tool for organizing assignments and study schedules. The visual timeline and reminder features have helped me stay on top of my coursework', keyWord: 'Child' }, { name: 'Jane Doe', designation: 'Freelancer', testimonialDescription: 'Taskiee has been a game-changer for my freelance work. It allows me to effortlessly prioritize tasks, set realistic deadlines, and maintain a healthy work-life balance', keyWord: 'Gentlewoman' }, { name: 'Shiyam Sarker', designation: 'Entrepreneur', testimonialDescription: "Taskiee's collaborative features have been instrumental in streamlining tasks for my startup. The ability to share projects and track progress with the team has enhanced our efficiency.", keyWord: 'Gentleman' }, { name: 'Bob Smith', designation: 'Creative Professional', testimonialDescription: 'As a creative professional, Taskiee has simplified my project management. The clean design and goal tracking feature keep me inspired and organized throughout the creative process.', keyWord: 'Child' }, { name: 'Eva Williams', designation: 'Remote Worker', testimonialDescription: "Taskiee's mobile app has made remote work a breeze for me. I can seamlessly manage tasks on the go, ensuring that I stay productive regardless of my location.", keyWord: 'Individual' }, { name: 'Chris Brown', designation: 'Parent', testimonialDescription: 'Managing family schedules is no easy task, but Taskiee has made it seamless. From school activities to household chores, Taskiee keeps our family organized and on track.', keyWord: 'Boy' }, { name: 'Olivia Davis', designation: 'Health Professional', testimonialDescription: 'In the healthcare field, where time is crucial, Taskiee has become my ally. Its time tracking feature has allowed me to optimize patient care and manage administrative tasks efficiently.', keyWord: 'Girl' }, { name: 'Liam Wilson', designation: 'Researcher', testimonialDescription: "Taskiee's analytics feature has proven invaluable in my research endeavors. It provides insightful data on my productivity patterns, helping me refine my workflow and achieve research goals", keyWord: 'Toddler' }];

    const [currentSlider, setCurrentSlider] = useState(0);
    // The slider images array
    const prevSlider = () => setCurrentSlider((currentSlider) => (currentSlider === 0 ? array.length - 2 : currentSlider - 1));
    const nextSlider = () => setCurrentSlider((currentSlider) => (currentSlider === array.length - 2 ? 0 : currentSlider + 1));
    // if you don't want to change the slider automatically then you can just remove the useEffect
    useEffect(() => {
        const intervalId = setInterval(() => {
            nextSlider();
        }, 3500);
        return () => {
            clearInterval(intervalId);
        };
    }, [currentSlider]);
    const isSmallScreen = window.innerWidth <= 768;
    return (
        <div className="md:px-10 px-4 py-[80px] bg-dark-gray">
            <div className='max-w-[1160px] mx-auto font-DM_sans'>
                <h1 className="text-[40px] font-bold text-white pb-[30px]">Testimonials</h1>
                <div className=" mx-auto  flex flex-row items-center overflow-hidden gap-5 lg:gap-10 ">
                    <div className="relative overflow-hidden">
                        <div className="absolute w-full h-full flex items-center justify-between z-50 ">
                            {/* arrow left */}
                            <button onClick={prevSlider} className="flex justify-center items-center hover:bg-white/30 rounded-full w-6 h-6 md:w-10 md:h-10 mr-12">
                                <FaAngleLeft className='w-4 h-4 md:w-12 md:h-12 text-white'></FaAngleLeft>
                            </button>
                            {/* arrow right */}
                            <button onClick={nextSlider} className="flex justify-center items-center hover:bg-white/30 rounded-full w-6 h-6 md:w-10 md:h-10">
                                <FaAngleRight className='w-4 h-4 md:w-12 md:h-12 text-white'></FaAngleRight>
                            </button>
                        </div>
                        {/* slider container */}
                        <div
                            className="ease-linear  duration-300 flex mx-[15px]"
                            style={{ transform: `translateX(-${currentSlider * (isSmallScreen ? 100 : 50)}%)` }}>
                            {/* sliders */}
                            {array.map((each, idx) => (
                                <div key={idx} className="p-10 min-w-full md:min-w-[50%]">
                                    <div className="h-full p-8 rounded-3xl bg-light-gray relative">
                                        <img className='absolute top-5 right-5 w-[50px]' src={komaIcon} alt="" />
                                        <a className="inline-flex items-center mb-6 py-4">
                                            <img alt="testimonial" src={`https://source.unsplash.com/200x200/?${each.keyWord}`} className="w-12 h-12 rounded-full flex-shrink-0 object-cover object-center" />
                                            <span className="flex-grow flex flex-col pl-4">
                                                <span className="title-font font-medium text-white">{each.name}</span>
                                                <span className="text-[#888] text-sm">{each?.designation}</span>
                                            </span>
                                        </a>
                                        <p className="leading-relaxed  text-[#888]">{each?.testimonialDescription}</p>
                                    </div>
                                </div>
                            ))}
                        </div>
                    </div>
                </div>
            </div>

        </div>
    );
};

export default Testimonials;