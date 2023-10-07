import clint_1 from "../../../assets/clint-1.jpg"
import clint_2 from "../../../assets/clint-2.jpg"
import { RiDoubleQuotesL } from "react-icons/ri";

const ClintReview = () => {
    return (

        <div>
            <h1 className="text-center text-5xl mt-40 mb-10 font-bold">Our Happy <span className="text-red-600">Clints !</span></h1>
            <div className="bg-neutral-100">
                {/* clint-1 */}
                <div className="flex items-center gap-6 mx-auto justify-start ">
                    <div className="flex gap-6 items-center">
                        <p className="relative w-[80px] bg-blue-200 h-[250px] border"></p>
                        <p className="mt-10 p-8 border-[18px] rounded-lg border-blue-200 w-[300px] text-justify">
                            <div className="flex justify-center mb-2">
                                <RiDoubleQuotesL className="text-5xl font-bold"></RiDoubleQuotesL>
                            </div>
                            I had an absolutely delightful experience with this company! The service was top-notch, and the staff were incredibly friendly and attentive. I could not be happier with the results, and I highly recommend their services to anyone looking for a positive and professional experience
                        </p>
                    </div>
                    <div>
                        <p className="relative- rounded-e-lg w-[400px] bg-blue-200 h-[250px] border"></p>
                        <img className="absolute left-[480px] top-[1020px] w-[300px] h-[300px] rounded-full" src={clint_1} />
                    </div>
                </div>

                {/* clint-2 */}
                <div className="flex items-center gap-6 mt-[-180px] mb-40 mx-auto justify-end">
                    <div>
                        <p className="relative w-[400px] rounded-s-lg bg-green-200 h-[250px] border"></p>
                        <img className="absolute left-[690px] top-[1350px] w-[300px] h-[300px] rounded-full" src={clint_2} />
                    </div>
                    <div className="flex gap-6 items-center justify-end">
                        <p className="mb-10 p-8 border-[18px] rounded-lg border-green-200 w-[300px] text-justify">
                            <div className="flex justify-center mb-2">
                                <RiDoubleQuotesL className="text-5xl font-bold"></RiDoubleQuotesL>
                            </div>
                            I can not express how satisfied I am with the product I received from this company. From start to finish, the process was smooth, and the final outcome exceeded my expectations. The quality and attention to detail were outstanding, making it a truly happy and memorable experience.
                        </p>
                        <p className="relative w-[80px] bg-green-200 h-[250px] border"></p>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default ClintReview;