
import Gallery from "../Features/Gallery";
import Slider from "./Slider";
import Support from "../Features/Support";
import ServicesArea from "../Features/ServicesArea";
import HappyClient from "./HappyClient";
import { Helmet } from "react-helmet-async";
import About from "../About/About";




const Home = () => {
    return (
        <div>
            <Helmet><title>SwapSavvy | Home</title></Helmet>
            <Slider></Slider>
            <About></About>
            <Gallery></Gallery>
            <Support></Support>
            <ServicesArea></ServicesArea>
            <HappyClient></HappyClient>
            
        </div>

    );
};

export default Home;