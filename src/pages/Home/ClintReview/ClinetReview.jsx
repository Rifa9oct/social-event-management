import clint_1 from "../../../assets/clint-1.jpg"
import clint_2 from "../../../assets/clint-2.jpg"
import { RiDoubleQuotesL } from "react-icons/ri";

const ClientReview = () => {
    return (

        <div className="max-w-[1440px] mx-auto">
            <h1 className="text-center text-4xl md:text-5xl mt-16 md:mt-40 mb-16 font-semibold md:font-bold">Our Happy <span className="text-red-600">Clients !</span></h1>
            <div className="bg-neutral-100 rounded-lg">
                {/* clint-1 */}
                <div className="flex items-center gap-3 mx-auto justify-center md:justify-start">
                    <div className="flex flex-col md:flex-row gap-3 items-center">
                        <p className="relative md:w-[50px] lg:[80px] lg:w-[80px] md:bg-blue-200 md:h-[150px] lg:[250px] border"></p>
                        <p className="mt-10 p-8 border-[18px] rounded-lg border-blue-200 w-[350px] lg:[300px] text-justify">
                            <div className="flex justify-center mb-2">
                                <RiDoubleQuotesL className="text-3xl md:text-5xl mt-2 font-bold"></RiDoubleQuotesL>
                            </div>
                            I had an absolutely delightful experience with this company! The service was top-notch, and the staff were incredibly friendly and attentive. I could not be happier with the results, and I highly recommend their services to anyone looking for a positive and professional experience
                        </p>
                    </div>
                    <div>
                        <p className="relative- rounded-e-lg md:w-[250px] lg:w-[400px] md:bg-blue-200 md:h-[150px] lg:h-[250px] border"></p>
                        <img className="absolute left-[125px] md:left-[450px] lg:left-[515px] top-[880px] md:top-[1065px] lg:top-[1020px] w-[150px] md:w-[200px] h-[150px] md:h-[200px] lg:w-[300px] lg:h-[300px] rounded-full" src={clint_1} />
                    </div>
                </div>

                {/* clint-2 */}
                <div className="flex items-center gap-3 mt-[150px] md:mt-[50px] lg:mt-[-100px] mb-40 mx-auto justify-center md:justify-end">
                    <div>
                        <p className="relative md:w-[250px] lg:w-[400px] rounded-s-lg md:bg-green-200 md:h-[150px] lg:h-[250px] border"></p>
                        <img className="absolute left-[145px] md:left-[120px] lg:left-[700px] top-[1410px] md:top-[1565px] lg:top-[1390px] w-[150px] md:w-[200px] h-[150px] md:h-[200px] lg:w-[300px] lg:h-[300px] rounded-full" src={clint_2} />
                    </div>
                    <div className="flex gap-3 items-center justify-end">
                        <p className="mb-10 p-8 border-[18px] rounded-lg border-green-200 w-[350px] lg:w-[300px] text-justify">
                            <div className="flex justify-center mb-2">
                                <RiDoubleQuotesL className="text-3xl md:text-5xl font-bold"></RiDoubleQuotesL>
                            </div>
                            I can not express how satisfied I am with the product I received from this company. From start to finish, the process was smooth, and the final outcome exceeded my expectations. The quality and attention to detail were outstanding, making it a truly happy and memorable experience.
                        </p>
                        <p className="relative md:w-[50px] lg:[80px] lg:w-[80px] md:bg-green-200 md:h-[150px] lg:[250px] border"></p>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default ClientReview;