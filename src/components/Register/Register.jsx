import Lottie from "lottie-react";
import register from '../../assets/register.json'
import { Link } from "react-router-dom";

const Register = () => {
    return (
        <div>
        <h1 className="text-center text-4xl font-bold pt-10"><span className="text-[#8e4afc]">Register</span> Now</h1>
        <div>

            <div className="hero-content flex-col lg:flex-row-reverse">

                <div className="text-center lg:text-left">
                    <Lottie className="h-1/2 w-1/2 mx-auto" animationData={register}></Lottie>
                </div>
                <div className="card flex-shrink-0 w-full max-w-sm shadow-2xl bg-base-100">
                    <form className="card-body">
                        <div className="form-control">
                            <label className="label">
                                <span className="label-text">Name</span>
                            </label>
                            <input type="name" placeholder="Enter your name" className="input input-bordered" required />
                        </div>
                        <div className="form-control">
                            <label className="label">
                                <span className="label-text">Photo URL</span>
                            </label>
                            <input type="url" placeholder="Photo URL" className="input input-bordered" required />
                        </div>
                        <div className="form-control">
                            <label className="label">
                                <span className="label-text">Email</span>
                            </label>
                            <input type="email" placeholder="Enter your email" className="input input-bordered" required />
                        </div>
                        <div className="form-control">
                            <label className="label">
                                <span className="label-text">Password</span>
                            </label>
                            <input type="password" placeholder="password" className="input input-bordered" required />
                        </div>
                        <div className="form-control mt-6">
                            <button className="btn btn-outline text-[#8e4afc] hover:bg-[#8e4afc] hover:border-none hover:text-white">Register</button>
                        </div>
                    </form>
                    <div>
                    <p className="px-8 pb-8">Already have an account? Please <Link className="text-[#8e4afc] font-medium" to='/login'>Login</Link></p>
                    </div>
                </div>
            </div>
        </div>
    </div>
    );
};

export default Register;