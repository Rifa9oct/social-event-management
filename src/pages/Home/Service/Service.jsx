import { useEffect, useState } from "react";
import ServiceDetail from "../ServiceDetail/ServiceDetail";
import { BsCloudArrowDownFill, BsCloudArrowUpFill } from "react-icons/bs";

const Service = () => {
    const [services, setServices] = useState([]);
    const [seeall, setSeeall] = useState(true);

    useEffect(() => {
        fetch('fakeData.json')
            .then(res => res.json())
            .then(data => setServices(data));
    }, []);

    return (
        <div className="max-w-[1420px] mx-auto">
            <h1 className="text-center text-3xl md:text-4xl mt-16 md:mt-32 mb-16 font-semibold md:font-bold">Our <span className="text-red-600">Services</span></h1>
            <div className="grid grid-cols-1 lg:grid-cols-3 justify-between gap-6 mt-20">

                {
                    seeall ?
                        <>
                            {
                                services.slice(0, 3).map(service => <ServiceDetail
                                    key={service.id} service={service}></ServiceDetail>)
                            }
                        </> :
                        <>
                            {
                                services.map(service => <ServiceDetail
                                    key={service.id} service={service}></ServiceDetail>)
                            }

                        </>
                }
            </div>
            {
                seeall ?
                    <>
                        <div className="flex items-center justify-center mt-10">
                            <button onClick={()=>setSeeall(!seeall)} className="btn bg-red-500 hover:bg-red-700 text-white font-semibold">More<BsCloudArrowDownFill className="text-xl"></BsCloudArrowDownFill></button>
                        </div>
                    </> :
                    <>
                        <div className="flex items-center justify-center mt-10">
                            <button onClick={()=>setSeeall(!seeall)} className="btn bg-red-500 hover:bg-red-700 text-white font-semibold">Less<BsCloudArrowUpFill className="text-xl"></BsCloudArrowUpFill></button>
                        </div>
                    </>
            }
        </div>
    );
};

export default Service;