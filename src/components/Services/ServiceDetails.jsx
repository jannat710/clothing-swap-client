import { useEffect, useState } from "react";
import { useLoaderData, useParams } from "react-router-dom";
import SingleServiceCard from "./SingleServiceCard";


const ServiceDetails = () => {
    const [service, setCategory] = useState({})
    const { id } = useParams()
    const services = useLoaderData()
    useEffect(() => {
        const findService = services?.find(service => service._id === id)
        setCategory(findService)
    }, [id, services])
    return (
        <div>
            <SingleServiceCard service={service}></SingleServiceCard>
        </div>
    );
};

export default ServiceDetails;