import { useParams } from "react-router-dom";

const ServicePage = () => {
    const {id} = useParams();
    return (
        <div>
            <h1>service page</h1>
            <img src={id} alt="" />
        </div>
    );
};

export default ServicePage;