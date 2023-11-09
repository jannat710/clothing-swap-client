import Swal from "sweetalert2";

const handleSubmit = (e) => {
    e.preventDefault();
    const form = e.target;
    const Servicename = form.Servicename.value;
    const name = form.name.value;
    const email = form.email.value;
    const price = form.price.value;
    const area = form.area.value;
    const description = form.description.value;
    console.log(Servicename, name, email, price, area, description)

    const productData = {
        Servicename,
        name,
        email,
        price,
        area,
        description
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

const AddService = () => {
    return (
        <div>
            <h1 className="text-center text-4xl font-bold pt-10">Add <span className="text-black">Service</span></h1>

            <form onSubmit={handleSubmit} className="card-body">
                <div className="form-control">
                    <label className="label">
                        <span className="label-text">Picture URL of the Service</span>
                    </label>
                    <input type="url" name='url' placeholder="url" className="input input-bordered" required />
                </div>
                <div className="form-control">
                    <label className="label">
                        <span className="label-text">Service Name</span>
                    </label>
                    <input type="text" name='Servicename' placeholder="name" className="input input-bordered" required />
                </div>
                <div className="form-control">
                    <label className="label">
                        <span className="label-text">Name</span>
                    </label>
                    <input type="name" name='name' placeholder="Enter your name" className="input input-bordered" required />
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
                    <input type="number" name='price' placeholder="Price" className="input input-bordered" required />
                </div>
                <div className="form-control">
                    <label className="label">
                        <span className="label-text">Service Area</span>
                    </label>
                    <input type="text" name='area' placeholder="Service Area" className="input input-bordered" required />
                </div>
                <div className="form-control">
                    <label className="label">
                        <span className="label-text">Description</span>
                    </label>
                    <input type="text" name='description' placeholder="Description" className="input input-bordered" required />
                </div>
                <div className="form-control mt-6">
                    <button className="btn btn-outline text-black hover:bg-black hover:border-none hover:text-white">Add</button>
                </div>
            </form>
        </div>
    );
};

export default AddService;