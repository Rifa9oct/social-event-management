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
            <h1 className="text-center lg:text-5xl text-3xl mb-16 font-semibold md:font-bold"><span className="text-blue-600">OUR PERFECT</span> TEAM</h1>
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 justify-center">
                {/* member-1 */}
                <div className="md:w-[600px] rounded-xl shadow-lg flex flex-col md:flex-row items-center gap-8 mb-20 mx-auto">
                    <img className="w-full md:w-[300px] rounded-t-xl md:rounded-l-xl h-[50%] md:h-[300px]" src={img1} />
                    <div className="p-5">
                        <h1 className="text-2xl text-center md:text-start font-semibold ">Ann Richmond</h1>
                        <p className="my-4 text-[#706F6F]">Sample text. Click to select the text box.Click again or double click to start editing the text.</p>
                        <div className="flex gap-6 items-center justify-center md:justify-start">
                            <a href="#"><SiFacebook className="text-blue-500 text-3xl"></SiFacebook></a>
                            <a href="#"> <BsTwitter className="text-blue-500 text-3xl"></BsTwitter></a>
                            <a href="#"><FiInstagram className="text-blue-500 text-3xl"></FiInstagram></a>
                        </div>
                    </div>
                </div>

                {/* member-2 */}
                <div className="md:w-[600px] rounded-xl shadow-lg flex flex-col md:flex-row items-center gap-8 mb-20 mx-auto">
                    <img className="w-full md:w-[300px] rounded-t-xl md:rounded-l-xl h-[50%] md:h-[300px]" src={img3} />
                    <div className="p-5">
                        <h1 className="text-2xl text-center md:text-start font-semibold ">Jeffrey Brown</h1>
                        <p className="my-4 text-[#706F6F]">Sample text. Click to select the text box.Click again or double click to start editing the text.</p>
                        <div className="flex gap-6 items-center justify-center md:justify-start">
                            <a href="#"><SiFacebook className="text-blue-500 text-3xl"></SiFacebook></a>
                            <a href="#"> <BsTwitter className="text-blue-500 text-3xl"></BsTwitter></a>
                            <a href="#"><FiInstagram className="text-blue-500 text-3xl"></FiInstagram></a>
                        </div>
                    </div>
                </div>

                {/* member-3 */}
                <div className="md:w-[600px] rounded-xl shadow-lg flex flex-col md:flex-row items-center gap-8 mb-20 mx-auto">
                    <img className="w-full md:w-[300px] rounded-t-xl md:rounded-l-xl h-[50%] md:h-[300px]" src={img2} />
                    <div className="p-5">
                        <h1 className="text-2xl text-center md:text-start font-semibold ">Roxie Swanson</h1>
                        <p className="my-4 text-[#706F6F]">Sample text. Click to select the text box.Click again or double click to start editing the text.</p>
                        <div className="flex gap-6 items-center justify-center md:justify-start">
                            <a href="#"><SiFacebook className="text-blue-500 text-3xl"></SiFacebook></a>
                            <a href="#"> <BsTwitter className="text-blue-500 text-3xl"></BsTwitter></a>
                            <a href="#"><FiInstagram className="text-blue-500 text-3xl"></FiInstagram></a>
                        </div>
                    </div>
                </div>

                {/* member-4 */}
                <div className="md:w-[600px] rounded-xl shadow-lg flex flex-col md:flex-row items-center gap-8 mb-20 mx-auto">
                    <img className="w-full md:w-[300px] rounded-t-xl md:rounded-l-xl h-[50%] md:h-[300px]" src={img4} />
                    <div className="p-5">
                        <h1 className="text-2xl text-center md:text-start font-semibold ">Alex Grinfield</h1>
                        <p className="my-4 text-[#706F6F]">Sample text. Click to select the text box.Click again or double click to start editing the text.</p>
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