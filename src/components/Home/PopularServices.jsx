


const PopularServices = ({ services }) => {
    console.log(services)
    const { serviceImage, serviceName, serviceDescription, serviceProviderImage, serviceProviderName, servicePrice } = services;

    return (
        <div className="card bg-base-100 h-72 shadow-xl image-full" style={{ backgroundImage: `url(${serviceImage})`, backgroundSize: 'cover', backgroundPosition: 'center' }}>
            <figure><img className="w-full h-full object-cover" src={serviceImage} /></figure>
            <div className="card-body">
                <h2 className="card-title">Service Name: {serviceName}</h2>
                <p>Service Description: {serviceDescription}</p>
                <p>Service Price: {servicePrice}</p>
                <div className="flex gap-2 justify-center items-center">
                    <img className="h-8 w-8 rounded-full" src={serviceProviderImage} alt="" />
                    <p>{serviceProviderName}</p>

                </div>
            </div>
        </div>
    );
};

export default PopularServices;