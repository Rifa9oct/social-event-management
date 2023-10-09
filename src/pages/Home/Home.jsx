import Bannar from "./Bannar/Bannar";
import ClientReview from "./ClintReview/ClinetReview";
import Service from "./Service/Service";

const Home = () => {
    return (
        <div>
            <Bannar></Bannar>
            <Service></Service>
            <ClientReview></ClientReview>
        </div>
    );
};

export default Home;