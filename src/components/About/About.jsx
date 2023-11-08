import { Helmet } from "react-helmet-async";
import pic from '../../assets/images/about.jpg'


const About = () => {
    return (
        <div>
            <Helmet><title>SwapSavvy | About</title></Helmet>
            <h1 className="text-4xl font-bold pt-10 text-center"><span className="text-[#8e4afc]">About </span> Us</h1>
            <div className="flex flex-col md:flex-row lg:flex-row justify-center items-center gap-10">
            <div className=" h-full w-full md:h-1/2 md:w-1/3 lg:h-1/2 lg:w-1/3  p-9">
                <img src={pic} alt="" />
                </div>
            <div className="w-1/3">          
                <h1 className="text-2xl font-semibold">Welcome to our clothing swap community!</h1>
                <p className="py-5">We believe in sustainable fashion and giving new life to pre-loved clothing items. Join us to refresh your wardrobe, reduce waste, and embrace the joy of sustainable style.</p>
                <button className="btn btn-outline text-[#8e4afc] btn-sm hover:bg-[#8e4afc] hover:border-none hover:text-white">Explore History</button>
            </div>
            </div>
        </div>
    );
};

export default About;