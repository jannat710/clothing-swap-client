import { Helmet } from "react-helmet-async";
import useAxios from "../hook/useAxios";
import { useQuery } from "@tanstack/react-query";
import { useState } from "react";
import { Link, useParams } from "react-router-dom";




const Services = () => {
    const {id}=useParams()
    const axiosOpen = useAxios();
    const [showMore, setShowMore] = useState(false);
    const { data: services = [] } = useQuery({
        queryKey: ['services'],
        queryFn: async () => {
            const res = await axiosOpen.get('/services', {
                headers: {
                    Authorization: `Bearer ${localStorage.getItem('access-token')}`
                }
            });
            return res.data;
        }
    })
    console.log(services)


    return (
        <div>
           
            <Helmet>
                <title>ClothingSwap | Services</title>
            </Helmet>
            <div className="font-semibold text-3xl mx-20">
                <h3 className="text-[#D11752] py-10 text-sm md:text-xl lg:text-3xl uppercase divider divider-neutral">
                    <span className="px-10">All Services</span>
                </h3>
            </div>
            <h1 className="font-bold text-2xl">Total Services : {services.length}</h1>
            <div className="grid grid-cols-1">
                {services.slice(0, showMore ? services.length : 6).map((service) => (
                    <div key={service._id}>
                        <div className="py-5 md:py-5 lg:py-10  p-5 md:p-5 lg:p-0">
                            <div className="rounded-lg flex justify-center items-center bg-base-100 shadow-xl w-full mx-auto h-72 border">
                                <figure>
                                    <img className="h-72 w-64" src={service.serviceImage} />
                                </figure>
                                <div className="card-body">
                                    <h1 className="font-semibold text-lg"> Service Name : {service.serviceName}</h1>
                                    <p className="">Description : {service.serviceDescription}</p>
                                    <p className="">Service Area : {service.serviceArea}</p>
                                    <p className="">Price : {service.servicePrice}</p>
                                    <div className="flex justify-start items-center">
                                        <img className="h-8 w-8 rounded-full" src={service.serviceProviderImage} alt="" />
                                        <p className="">{service.serviceProviderName}</p>
                                    </div>
                                    <div className="card-actions justify-end">
                                       <Link to={`/services-details/${id}`}> <button className="btn border-none rounded-sm ml-2 bg-[#D11752] text-white">View Detail</button></Link>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                ))}
            </div>
            {services.length > 6 && (
                <button
                    className="btn border-[#D11752] rounded-sm text-[#D11752] py-5 w-full"
                    onClick={() => setShowMore(!showMore)}
                >
                    {showMore ? 'Hide' : 'More'}
                </button>
            )}
        </div>
    );
};

export default Services;