import Advantages from "../Advantages/Advantages";
import Bannar from "../Bannar/Bannar";
import ClinetReview from "../ClintReview/ClinetReview";
import Footer from "../Footer/Footer";
import Services from "../ServiceContainer/Services/Services";

const Home = () => {
    return (
        <div>
            <Bannar></Bannar>
            <Advantages></Advantages>
            <Services></Services>
            <ClinetReview></ClinetReview>
            <Footer></Footer>
        </div>
    );
};

export default Home;