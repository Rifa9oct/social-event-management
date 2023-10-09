import { useLoaderData, useParams } from "react-router-dom";

const ServicePage = () => {
    const services = useLoaderData();

    const { id } = useParams();
    const idInt = parseInt(id);
    const showService = services.find(service => service.id === idInt);

    const { name, img, descriptionDetail } = showService;

    return (
        <div className="max-w-[1420px] mx-auto mb-20">
            <h1 className="text-center text-3xl md:text-4xl mt-16 md:mt-32 mb-16 font-semibold md:font-bold">{name}</h1>
            <img className="mx-auto" src={img} alt="" />
            <p className="text-justify w-[1000px] mx-auto mt-10">{descriptionDetail}</p>
            <div className="flex justify-center mt-10">
                <button className="btn btn-success hover:bg-green-600 text-white">Order Now</button>
            </div>
        </div>
    );
};

export default ServicePage;