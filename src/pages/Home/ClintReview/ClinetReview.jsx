import clint_1 from "../../../assets/clint-1.jpg"
import clint_2 from "../../../assets/clint-2.jpg"
import { RiDoubleQuotesL } from "react-icons/ri";

const ClientReview = () => {
    return (

        <div>
            <h1 className="text-center text-3xl md:text-4xl mt-10 md:mt-40 mb-16 font-semibold md:font-bold">Happy <span className="text-red-600">Clients !</span></h1>
            <div className="bg-neutral-100 py-20">
                {/* clint-1 */}
                <div className="flex flex-col md:flex-row items-center gap-3 mx-auto justify-center md:justify-start" data-aos="fade-right"
                    data-aos-offset="500"
                    data-aos-easing="ease-in-sine">
                    <div className="flex flex-col md:flex-row gap-3 items-center">
                        <p className="relative md:w-[50px] lg:[80px] lg:w-[80px] md:bg-blue-200 md:h-[150px] lg:[250px] border"></p>
                        <p className="mt-40 md:mt-10 p-8 border-[12px] md:border-[18px] rounded-lg border-blue-200 w-[350px] lg:w-[300px] lg:[300px] text-justify">
                            <div className="flex justify-center mb-2">
                                <RiDoubleQuotesL className="text-3xl md:text-5xl mt-2 font-bold"></RiDoubleQuotesL>
                            </div>
                            I had an absolutely delightful experience with this company! The service was top-notch, and the staff were incredibly friendly and attentive. I could not be happier with the results, and I highly recommend their services to anyone looking for a positive and professional experience.
                        </p>
                    </div>
                    <div className="relative top-[-460px] md:top-0 border-red">
                        <p className="rounded-lg md:rounded-e-lg w-[250px] lg:w-[400px] bg-blue-200 h-[150px] lg:h-[250px] border"></p>
                        <img className="absolute left-[25px] top-[-25px] lg:top-[-25px] lg:left-[50px] w-[200px] h-[200px] lg:w-[300px] lg:h-[300px] rounded-full" src={clint_1} />
                    </div>
                </div>

                {/* clint-2 */}
                <div className="flex flex-col md:flex-row items-center gap-3 mt-[150px] md:mt-[50px] lg:mt-[-100px] mx-auto justify-center md:justify-end" data-aos="fade-left" data-aos-offset="300" data-aos-easing="ease-in-sine">
                    <div className="relative top-[-240px] md:top-0">
                        <p className="w-[250px] lg:w-[400px] rounded-lg md:rounded-s-lg bg-green-200 h-[150px] lg:h-[250px] border"></p>
                        <img className="absolute left-[25px] top-[-25px] lg:left-[50px] lg:top-[-25px]  w-[200px] h-[200px] lg:w-[300px] lg:h-[300px] rounded-full" src={clint_2} />
                    </div>
                    <div className="flex gap-3 items-center justify-end">
                        <p className="mt-[-300px] md:mt-0 mb-10 p-8  border-[12px] md:border-[18px] rounded-lg border-green-200 w-[350px] lg:w-[300px] text-justify">
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