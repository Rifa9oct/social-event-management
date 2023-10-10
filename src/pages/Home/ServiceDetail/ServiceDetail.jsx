import { BiDollar } from "react-icons/bi";
import PropTypes from 'prop-types';
import { Link } from "react-router-dom";

const ServiceDetail = ({ service }) => {
    const { id, name, img, price, description } = service;

    return (
        <div className="card w-[350px] h-[412px]  bg-base-100 shadow-lg mx-auto">
            <figure><img src={img} alt="Shoes" /></figure>
            <div className="card-body p-5">
                <h2 className="card-title text-xl lg:text-2xl text-red-600">{name}</h2>
                <p className="text-[#706F6F] text-sm">{description}</p>
                <div className="flex items-center justify-between my-4">
                    <div className="rating rating-sm rating-half">
                        <input type="radio" name={id} className="rating-hidden" />
                        <input type="radio" name={id} className="bg-red-500 mask mask-star-2 mask-half-1" />
                        <input type="radio" name={id} className="bg-red-500 mask mask-star-2 mask-half-2" />
                        <input type="radio" name={id} className="bg-red-500 mask mask-star-2 mask-half-1" />
                        <input type="radio" name={id} className="bg-red-500 mask mask-star-2 mask-half-2" />
                        <input type="radio" name={id} className="bg-red-500 mask mask-star-2 mask-half-1" />
                        <input type="radio" name={id} className="bg-red-500 mask mask-star-2 mask-half-2" />
                        <input type="radio" name={id} className="bg-red-500 mask mask-star-2 mask-half-1" checked />
                        <input type="radio" name={id} className="bg-red-500 mask mask-star-2 mask-half-2" />
                        <input type="radio" name={id} className="bg-red-500 mask mask-star-2 mask-half-1" />
                        <input type="radio" name={id} className="bg-red-500 mask mask-star-2 mask-half-2" />
                    </div>
                    <div className="flex items-center">
                        <BiDollar className="text-xl text-red-600"></BiDollar>
                        <p className="font-semibold text-[#706F6F]">{price}</p>
                    </div>
                </div>
                <div>
                    <Link to={`/service/${id}`}>
                        <button  className="btn font-bold text-red-500 border-2 border-red-600 hover:text-white bg-white hover:bg-red-500 w-full">See Detail</button>
                    </Link>
                </div>
            </div>
        </div>

    );
};

ServiceDetail.propTypes = {
    service: PropTypes.node
}

export default ServiceDetail;