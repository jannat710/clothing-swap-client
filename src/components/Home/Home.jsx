
import Gallery from "../Features/Gallery";
import Slider from "./Slider";
import Support from "../Features/Support";
import ServicesArea from "../Features/ServicesArea";
import HappyClient from "./HappyClient";
import { Helmet } from "react-helmet-async";
import About from "../About/About";
import PopularServices from "./PopularServices";
import { Link, useLoaderData } from "react-router-dom";




const Home = () => {
    const services =useLoaderData()
    console.log(services)
    return (
        <div>
            <Helmet><title>SwapSavvy | Home</title></Helmet>
            <Slider></Slider>
            <About></About>
            {/* <PopularServices></PopularServices> */}
            <h1 className="text-center text-4xl font-bold pt-10">Popular <span className="text-[#8e4afc]">Services</span></h1>
            <p className="text-center py-5">Join our clothing swap events and trade your pre-loved items for <br/> fresh fashion finds. Embrace sustainable style while connecting with fellow fashion enthusiasts <br/> in our vibrant community!</p>
            <div className="grid sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-5 py-10">
                {
                    services.map(service => <PopularServices key={service._id} services={service}></PopularServices>)
                }
                
            </div>
            <div>
            <p className="px-8"><Link className="" to='/services'><button className='btn bg-[#8e4afc] text-white border-none btn-md px-5 flex justify-center items-center mx-auto'>Show All</button></Link></p>
            </div>
            <Gallery></Gallery>
            <Support></Support>
            <ServicesArea></ServicesArea>
            <HappyClient></HappyClient>
            
        </div>

    );
};

export default Home;