import img1 from "../../../assets/Asset 1.png"
import img2 from "../../../assets/Asset 2.png"
import img3 from "../../../assets/Asset 3.png"
import img4 from "../../../assets/Asset 4.png"
import img5 from "../../../assets/Asset 5.png"


const Advantages = () => {
    return (
        <div className="max-w-[1420px] mx-auto">
            <h1 className="text-center text-3xl md:text-4xl mt-32 mb-12 font-semibold md:font-bold">Our<span className="text-red-600"> Advantages</span></h1>
            <div className="flex flex-col lg:flex-row lg:gap-6 items-center justify-between">
                <div className="flex flex-col justify-center items-center lg:w-[500px] mb-8 lg:mb-0 lg:h-[300px] p-5 ">
                    <img src={img1} />
                    <h1 className="font-bold text-center mt-5 mb-2">INNOVATION</h1>
                    <p className="text-gray-500 text-xs text-center]">Innovation is the driving force behind our progress, inspiring creativity and new ideas to shape the future.</p>
                </div>
                <div className=" flex flex-col justify-center items-center lg:w-[500px] mb-8 lg:mb-0 lg:h-[300px] p-5 ">
                    <img src={img2} />
                    <h1 className="font-bold text-center mt-5 mb-2">QUALITY</h1>
                    <p className="text-gray-500 text-xs text-center]">Our commitment to quality is unwavering, ensuring excellence in every aspect of our service.</p>
                </div>
                <div className=" flex flex-col justify-center items-center lg:w-[500px] mb-8 lg:mb-0 lg:h-[300px] p-5 ">
                    <img src={img3} />
                    <h1 className="font-bold text-center mt-5 mb-2">EXPERIENCE</h1>
                    <p className="text-gray-500 text-xs text-center]">Our extensive experience enables us to deliver unparalleled expertise and results in our field.</p>
                </div>
                <div className=" flex flex-col justify-center items-center lg:w-[500px] mb-8 lg:mb-0 lg:h-[300px] p-5 ">
                    <img src={img4} />
                    <h1 className="font-bold text-center mt-5 mb-2">HAPPY CLINTS</h1>
                    <p className="text-gray-500 text-xs text-center]">Happy clients are our ultimate measure of success, reflecting our dedication to providing exceptional service and exceeding expectations.</p>
                </div>
                <div className=" flex flex-col justify-center items-center lg:w-[500px] mb-8 lg:mb-0 lg:h-[300px] p-5 ">
                    <img src={img5} />
                    <h1 className="font-bold text-center mt-5 mb-2">SUPPORT</h1>
                    <p className="text-gray-500 text-xs text-center]">I can assist you in planning, organizing and executing successful events</p>
                </div>
            </div>
        </div>
    );
};

export default Advantages;