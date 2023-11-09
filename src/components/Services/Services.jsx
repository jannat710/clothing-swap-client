import { Helmet } from "react-helmet-async";
import { useLoaderData } from "react-router-dom";
import AllServices from "./AllServices";


const Services = () => {
    const services = useLoaderData()
    console.log(services)
    return (
        <div>
            <Helmet><title>SwapSavvy | Services</title></Helmet>
            <h1 className="text-center text-4xl font-bold pt-10">All Services</h1>
            <div className="grid sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-5 py-10">
                {
                    services.map(service => <AllServices key={service._id} services={service}></AllServices>)
                }


            </div>
            <div className='py-5'>
                <p className="px-8"><button className='btn bg-black text-white border-none btn-md px-5 flex justify-center items-center mx-auto'>More</button></p>
            </div>
        </div>
    );
};

export default Services;