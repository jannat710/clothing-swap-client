
import Gallery from "../Features/Gallery";
import Slider from "./Slider";
import Support from "../Features/Support";
import ServicesArea from "../Features/ServicesArea";
import { Helmet } from "react-helmet-async";




const Home = () => {

    return (
        <div>
            <Helmet><title>SwapSavvy | Home</title></Helmet>
            <Slider></Slider>
            <Gallery></Gallery>
            <Support></Support>
            <ServicesArea></ServicesArea>
        </div>

    );
};

export default Home;