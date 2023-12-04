
import Gallery from "../Features/Gallery";
import Slider from "./Slider";
import Support from "../Features/Support";
import ServicesArea from "../Features/ServicesArea";
import { Helmet } from "react-helmet-async";
import Testimonials from "./Testimonials";
import LatestNews from "../Features/LatestNews";
import About from "../About/About";
import PopularServices from "./PopularServices";




const Home = () => {

    return (
        <div>
            <LatestNews></LatestNews>
            <Helmet><title>ClothingSwap | Home</title></Helmet>
            <Slider></Slider>
            <PopularServices></PopularServices>
            <Gallery></Gallery>
            <About></About>
            <Support></Support>
            <ServicesArea></ServicesArea>
            <Testimonials></Testimonials>
        </div>

    );
};

export default Home;