import { Helmet } from "react-helmet-async";
import about from '../../assets/images/photo7.jpg'


const About = () => {
    return (
        <div>
            <Helmet><title>ClothingSwap | About</title></Helmet>
            <div className='relative'>
            <img className='h-[80vh] py-10 w-full mx-auto' src={about} alt="" />
            <div className='absolute top-0 left-0 w-full h-full flex justify-center items-center px-24'>
                <div className='bg-white p-4 md:p-10 lg:p-20 opacity-50'>
                    <h1 className='text-4xl text-black text-center pb-5'>About Us</h1>
                    <h1 className="text-2xl font-semibold">Welcome to our clothing swap community!</h1>
                    <p className="py-5">We believe in sustainable fashion and giving new life to pre-loved clothing items. Join us to refresh your wardrobe, reduce waste, and embrace the joy of sustainable style.</p>
                    <button className="btn border-none rounded-sm ml-2 bg-[#D11752] text-white">Explore History</button>
                </div>
            </div>
        </div>

        </div>
    );
};

export default About;