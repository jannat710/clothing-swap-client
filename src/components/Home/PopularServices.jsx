import { useQuery } from "@tanstack/react-query";
import useAxios from "../hook/useAxios";
import { Link } from "react-router-dom";



const PopularServices = () => {
    const axiosOpen = useAxios();
    const { data: services = [] } = useQuery({
        queryKey: ['services'],
        queryFn: async () => {
            const res = await axiosOpen.get('/services');
            return res.data;
        }
    })
    console.log(services)


    return (
        <div>
            <div className="font-semibold text-3xl mx-20">
                <h3 className="text-[#D11752] py-10 text-sm md:text-xl lg:text-3xl  uppercase divider divider-neutral"><span className="px-10">Popular Services</span></h3>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-5">
                {services.slice(0, 4).map(service => <div key={service._id}>
                    <div className="py-5 md:py-5 lg:py-10  p-5 md:p-5 lg:p-0">
                        <div className="rounded-lg flex justify-center items-center bg-base-100 shadow-xl w-full mx-auto h-72 border">
                            <figure>
                                <img className="h-72 w-64" src={service.serviceImage} />
                            </figure>
                            <div className="">
                                <h1 className="font-semibold text-lg"> Service Name : {service.serviceName}</h1>
                                <p className="">Description : {service.serviceDescription}</p>
                                <p className="">Service Area : {service.serviceArea}</p>
                                <p className="">Price : {service.servicePrice}</p>
                                <div className="flex justify-start items-center">
                                    <img className="h-8 w-8 rounded-full" src={service.serviceProviderImage} alt="" />
                                    <p className="">{service.serviceProviderName}</p>
                                </div>
                                <div className="card-actions justify-end">
                                    <button className="btn border-none rounded-sm bg-[#D11752] text-white">View Detail</button>
                                </div>
                            </div>
                        </div>
                    </div>


                </div>)
                }


            </div>
            <Link to='/services'><button className=" w-full btn border-none rounded-sm bg-black text-white">Show All</button></Link>

        </div>
    );
};

export default PopularServices;