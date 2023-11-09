

const SingleServiceCard = ({ service }) => {
    console.log(service)
    const { _id, serviceImage, serviceName, serviceDescription, serviceProviderImage, serviceProviderName, servicePrice, serviceProviderLocation
    } = service;
    return (
        <div className="card card-side bg-base-100 shadow-xl px-8 py-11">
            <figure><img className="h-52" src={serviceImage} alt="Movie" /></figure>
            <div className="card-body">
                <h2 className="card-title">Service Name : {serviceName}</h2>
                <div className="flex justify-center items-center gap-5">
                    <img className="h-9 w-9 rounded-full" src={serviceProviderImage} alt="" />
                    <p>{serviceProviderName}</p>
                </div>
                <p>Service Provider Location : {serviceProviderLocation
                }</p>

                <p>Service Description : {serviceDescription}</p>
                <p>Service Price : {servicePrice}</p>
                <div className="card-actions justify-end">
                    <button className='btn bg-black text-white border-none btn-md px-5 ' onClick={() => document.getElementById('my_modal_5').showModal()}>Book Now</button>
                    <dialog id="my_modal_5" className="modal modal-bottom sm:modal-middle">
                        <div className="modal-box">
                            <img className="w-full h-52 mx-auto" src={serviceImage} />
                            
                            <div className="modal-action">
                                <form method="dialog ">
                                <input type="text" value={serviceName} disabled />
                                                                                                          
                                    <input type="text" value={serviceDescription} disabled />
                                    <input type="text" value={servicePrice} disabled />
                                    <div className="gap-5 flex flex-row">
                                    <button type="submit" className="btn bg-black text-white border-none btn-md px-5">Purchase</button>
                                    <button className="btn bg-black text-white border-none btn-md px-5">Close</button>
                                    </div>
                                    
                                </form>
                                
                                    
                            </div>
                        </div>
                    </dialog>
                </div>
            </div>
        </div>
    );
};

export default SingleServiceCard;