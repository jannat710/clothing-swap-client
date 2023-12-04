import { useQuery } from "@tanstack/react-query";
import { useParams } from "react-router-dom";
import useAxios from "../hook/useAxios";



const ServiceDetails = () => {

    const axiosOpen =useAxios()
    const { _id } = useParams()
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
           
            
        </div>
    );
};

export default ServiceDetails;