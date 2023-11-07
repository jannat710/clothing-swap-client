
import Gallery from "../Features/Gallery";
import Slider from "./Slider";
import Support from "../Features/Support";
import ServicesArea from "../Features/ServicesArea";
import HappyClient from "./HappyClient";




const Home = () => {
    return (
        <div>
            <Slider></Slider>
            <Gallery></Gallery>
            <Support></Support>
            <ServicesArea></ServicesArea>
            <HappyClient></HappyClient>
            this is home
        </div>

    );
};

export default Home;