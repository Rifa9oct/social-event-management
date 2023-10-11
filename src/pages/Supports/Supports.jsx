import img1 from "../../assets/img1.jpg"
import img2 from "../../assets/img2.jpg"
import img3 from "../../assets/img3.jpg"
import img4 from "../../assets/img4.jpg"
import { SiFacebook } from "react-icons/si";
import { BsTwitter } from "react-icons/bs";
import { FiInstagram } from "react-icons/fi";


const Supports = () => {
    return (
        <div className="max-w-[1440px] p-5 mx-auto">
            <h1 className="text-center lg:text-4xl text-3xl mb-16 font-semibold md:font-bold"><span className="text-blue-600">OUR PERFECT</span> TEAM</h1>
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 justify-center">
                {/* member-1 */}
                <div className="md:w-[600px] rounded-xl shadow-lg flex flex-col md:flex-row items-center gap-8 mb-20 mx-auto">
                    <img className="w-full md:w-[300px] rounded-t-xl md:rounded-tr-none md:rounded-l-xl h-[50%] md:h-[300px]" src={img1} />
                    <div className="p-5">
                        <h1 className="text-2xl font-semibold ">Ann Richmond</h1>
                        <h2 className="mt-2 text-orange-300 font-semibold">Manager</h2>
                        <p className="my-2 text-[#706F6F] text-xs">The Manager oversees the overall operations, coordinating resources, timelines, and budgets to ensure flawless event execution and client satisfaction.</p>
                        <div className="flex gap-6 items-center justify-center md:justify-start">
                            <a href="#"><SiFacebook className="text-blue-500 text-3xl"></SiFacebook></a>
                            <a href="#"> <BsTwitter className="text-blue-500 text-3xl"></BsTwitter></a>
                            <a href="#"><FiInstagram className="text-blue-500 text-3xl"></FiInstagram></a>
                        </div>
                    </div>
                </div>

                {/* member-2 */}
                <div className="md:w-[600px] rounded-xl shadow-lg flex flex-col md:flex-row items-center gap-8 mb-20 mx-auto">
                    <img className="w-full md:w-[300px] rounded-t-xl md:rounded-tr-none md:rounded-l-xl h-[50%] md:h-[300px]" src={img3} />
                    <div className="p-5">
                        <h1 className="text-2xl font-semibold ">Jeffrey Brown</h1>
                        <h2 className="mt-2 text-orange-300 font-semibold">Creative Leader</h2>
                        <p className="my-2 text-[#706F6F] text-xs">The Creative Leader is the visionary, inspiring innovation and artistic excellence in event concepts and designs, ensuring unforgettable experiences.</p>
                        <div className="flex gap-6 items-center justify-center md:justify-start">
                            <a href="#"><SiFacebook className="text-blue-500 text-3xl"></SiFacebook></a>
                            <a href="#"> <BsTwitter className="text-blue-500 text-3xl"></BsTwitter></a>
                            <a href="#"><FiInstagram className="text-blue-500 text-3xl"></FiInstagram></a>
                        </div>
                    </div>
                </div>

                {/* member-3 */}
                <div className="md:w-[600px] rounded-xl shadow-lg flex flex-col md:flex-row items-center gap-8 mb-20 mx-auto">
                    <img className="w-full md:w-[300px] rounded-t-xl md:rounded-tr-none md:rounded-l-xl h-[50%] md:h-[300px]" src={img2} />
                    <div className="p-5">
                        <h1 className="text-2xl font-semibold ">Roxie Swanson</h1>
                        <h2 className="mt-2 text-orange-300 font-semibold">Sales Manager</h2>
                        <p className="my-2 text-[#706F6F] text-xs">The Sales Manager is the driving force behind client relationships and revenue growth, with a focus on securing new partnerships and expanding our client base.</p>
                        <div className="flex gap-6 items-center justify-center md:justify-start">
                            <a href="#"><SiFacebook className="text-blue-500 text-3xl"></SiFacebook></a>
                            <a href="#"> <BsTwitter className="text-blue-500 text-3xl"></BsTwitter></a>
                            <a href="#"><FiInstagram className="text-blue-500 text-3xl"></FiInstagram></a>
                        </div>
                    </div>
                </div>

                {/* member-4 */}
                <div className="md:w-[600px] rounded-xl shadow-lg flex flex-col md:flex-row items-center gap-8 mb-20 mx-auto">
                    <img className="w-full md:w-[300px] rounded-t-xl md:rounded-tr-none md:rounded-l-xl h-[50%] md:h-[300px]" src={img4} />
                    <div className="p-5">
                        <h1 className="text-2xl font-semibold ">Alex Grinfield</h1>
                        <h2 className="mt-2 text-orange-300 font-semibold">Event Coordinator</h2>
                        <p className="my-2 text-[#706F6F] text-xs">The Event Coordinator is the detail-oriented orchestrator, handling logistics, vendor coordination, and on-site management to bring event visions to life seamlessly.</p>
                        <div className="flex gap-6 items-center justify-center md:justify-start">
                            <a href="#"><SiFacebook className="text-blue-500 text-3xl"></SiFacebook></a>
                            <a href="#"> <BsTwitter className="text-blue-500 text-3xl"></BsTwitter></a>
                            <a href="#"><FiInstagram className="text-blue-500 text-3xl"></FiInstagram></a>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Supports;