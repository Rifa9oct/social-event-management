import Advantages from "./Advantages/Advantages";
import Bannar from "./Bannar/Bannar";
import ClientReview from "./ClintReview/ClinetReview";
import Footer from "./Footer/Footer";
import Service from "./Service/Service";

const Home = () => {
    return (
        <div>
            <Bannar></Bannar>
            <Advantages></Advantages>
            <Service></Service>
            <ClientReview></ClientReview>
            <Footer></Footer>
        </div>
    );
};

export default Home;