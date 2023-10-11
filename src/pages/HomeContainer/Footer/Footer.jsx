import { SiFacebook } from "react-icons/si";
import { FiInstagram } from "react-icons/fi";
import { AiFillYoutube } from "react-icons/ai";

const Footer = () => {
    return (
        <div className="flex flex-col md:flex-row items-center justify-center gap-10 lg:gap-52 p-10 bg-black text-neutral-content">
            <div>
                <img src="https://i.ibb.co/t31dmKC/logo.png" />
            </div>
            <div className=" flex gap-16 lg:gap-52">
                <div>
                    <h1 className="text-lg font-bold text-gray-500">COMPANY</h1>
                    <div className="flex flex-col gap-1 mt-2">
                        <a className="link link-hover">About</a>
                        <a className="link link-hover">Contact</a>
                        <a className="link link-hover">Support</a>
                        <a className="link link-hover">Team member</a>
                    </div>
                </div>
                <div>
                    <h1 className="text-lg font-bold text-gray-500">SOCIAL</h1>
                    <div className="flex items-center gap-6 mt-3">
                        <a className=""><a href="#"><SiFacebook className="text-white text-3xl"></SiFacebook></a></a>
                        <a className=""><a href="#"><FiInstagram className="text-white text-3xl"></FiInstagram></a></a>
                        <a className=""><a href="#"><AiFillYoutube className="text-white text-3xl"></AiFillYoutube></a></a>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Footer;