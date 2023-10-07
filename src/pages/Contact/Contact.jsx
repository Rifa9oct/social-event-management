import location from "../../assets/location.png"
import { IoCall } from "react-icons/io5";
import { MdEmail, MdLocationPin } from "react-icons/md";
import "./contact.css";


const Contact = () => {

    return (
        <div className="text-center mb-20">
            <h1 className="text-4xl font-bold">OUR <span className="text-green-600">CONTACTS</span></h1>
            <p className="mt-2 text-xs">As an experienced Event Management company. we have all kind of Event <br /> equipment, logistics and resources available</p>

            <div className="flex justify-center items-center gap-3 mt-4 font-semibold">
                <MdLocationPin className="text-3xl text-green-600"></MdLocationPin>
                <p className="text-lg">16, Kemal Ataturk Avenue, Banani, Dhaka, 1213, Bangladesh</p>
            </div>
            <div className="flex justify-center items-center gap-10 mb-10">
                <div className="flex items-center font-semibold gap-2">
                    <IoCall className="text-2xl text-green-600"></IoCall>
                    <p className="text-lg">01727710506</p>
                </div>
                <div className="flex items-center font-semibold gap-2" >
                    <MdEmail className="text-2xl text-green-600"></MdEmail>
                    <p className="text-lg">dhakaeventplanners@gmail.com</p>
                </div>
            </div>
            <img className="w-[800px] rounded-lg shadow-xl mx-auto animate-up" src={location} alt="" />
        </div>
    );
};

export default Contact;