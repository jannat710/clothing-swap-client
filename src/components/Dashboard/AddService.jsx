import { Helmet } from "react-helmet-async";
import Swal from "sweetalert2";


const AddService = () => {
    const handleSubmit = (e) => {
        e.preventDefault();
        const form = e.target;
        const serviceName = form.serviceName.value;
        const serviceProviderImage =form.serviceProviderImage.value;
        const serviceProviderName = form.serviceProviderName.value;
        const serviceImage = form.serviceImage.value;
        const email = form.email.value;
        const servicePrice = form.servicePrice.value;
        const serviceArea = form.serviceArea.value;
        const serviceDescription = form.serviceDescription.value;
        console.log(serviceImage,serviceName, serviceProviderName, email, servicePrice, serviceArea, serviceDescription,serviceProviderImage)
    
        const productData = {
            serviceImage,
            serviceName,
            serviceProviderName,
            email,
            servicePrice,
            serviceArea,
            serviceDescription,
            serviceProviderImage
        }
        fetch('https://clothing-swap-server.vercel.app/services', {
            method: "POST",
            headers: {
                "Content-Type": "application/json",
            },
            body: JSON.stringify(productData),
        })
            .then((res) => res.json())
            .then((data) => {
                console.log(data);
                if (data.deletedCount > 0) {
                    Swal.fire(
                        'Added!',
                        'Services added successfully.',
                        'success'
                    )
                }
    
            });
    }
    return (
        <div>
            <Helmet><title>ClothingSwap | Add Services</title></Helmet>
            <div className="font-semibold text-3xl mx-20">
                <h3 className="text-[#D11752] py-10 text-sm md:text-xl lg:text-3xl  uppercase divider divider-neutral"><span className="px-10">My Services</span></h3>
            </div>
            <form onSubmit={handleSubmit} className="card-body">
                <div className="form-control">
                    <label className="label">
                        <span className="label-text">Picture URL of the Service</span>
                    </label>
                    <input type="url" name='serviceImage' placeholder="url" className="input input-bordered" required />
                </div>
                <div className="form-control">
                    <label className="label">
                        <span className="label-text">Service Provider Image</span>
                    </label>
                    <input type="url" name='serviceProviderImage' placeholder="url" className="input input-bordered" required />
                </div>
                <div className="form-control">
                    <label className="label">
                        <span className="label-text">Service Name</span>
                    </label>
                    <input type="text" name='serviceName' placeholder="name" className="input input-bordered" required />
                </div>
                <div className="form-control">
                    <label className="label">
                        <span className="label-text">Provider Name</span>
                    </label>
                    <input type="name" name='serviceProviderName' placeholder="Service Provider Name" className="input input-bordered" required />
                </div>
                <div className="form-control">
                    <label className="label">
                        <span className="label-text">Email</span>
                    </label>
                    <input type="email" name='email' placeholder="Enter your email" className="input input-bordered" required />
                </div>
                <div className="form-control">
                    <label className="label">
                        <span className="label-text">Price</span>
                    </label>
                    <input type="number" name='servicePrice' placeholder="Price" className="input input-bordered" required />
                </div>
                <div className="form-control">
                    <label className="label">
                        <span className="label-text">Service Area</span>
                    </label>
                    <input type="text" name='serviceArea' placeholder="Service Area" className="input input-bordered" required />
                </div>
                <div className="form-control">
                    <label className="label">
                        <span className="label-text">Description</span>
                    </label>
                    <input type="text" name='serviceDescription' placeholder="Description" className="input input-bordered" required />
                </div>
                <div className="form-control mt-6">
                    <button className="btn btn-outline text-black hover:bg-black hover:border-none hover:text-white">Add</button>
                </div>
            </form>

        </div>
    );
};

export default AddService;