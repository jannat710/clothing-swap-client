
import Gallery from "../Features/Gallery";
import Slider from "./Slider";
import Support from "../Features/Support";
import ServicesArea from "../Features/ServicesArea";
import { Helmet } from "react-helmet-async";
import Testimonials from "./Testimonials";




const Home = () => {

    return (
        <div>
            <Helmet><title>ClothingSwap | Home</title></Helmet>
            <Slider></Slider>
            <Gallery></Gallery>
            <Support></Support>
            <ServicesArea></ServicesArea>
            <Testimonials></Testimonials>
        </div>

    );
};

export default Home;