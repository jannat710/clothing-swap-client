import Lottie from "lottie-react";
import login from '../../assets/login.json'
import { Link } from "react-router-dom";

const Login = () => {
    return (

        <div>
            <h1 className="text-center text-4xl font-bold pt-10"><span className="text-[#8e4afc]">Login</span> Now</h1>
            <div>
                <div className="hero-content flex-col lg:flex-row-reverse">
                    <div className="text-center lg:text-left">
                        <Lottie animationData={login}></Lottie>
                    </div>
                    <div className="card flex-shrink-0 w-full max-w-sm shadow-2xl bg-base-100">
                        <form className="card-body">
                            <div className="form-control">
                                <label className="label">
                                    <span className="label-text">Email</span>
                                </label>
                                <input type="email" placeholder="email" className="input input-bordered" required />
                            </div>
                            <div className="form-control">
                                <label className="label">
                                    <span className="label-text">Password</span>
                                </label>
                                <input type="password" placeholder="password" className="input input-bordered" required />
                            </div>
                            <div className="form-control mt-6">
                                <button className="btn btn-outline text-[#8e4afc] hover:bg-[#8e4afc] hover:border-none hover:text-white">Login</button>
                            </div>
                        </form>
                        <div>
                            <p className="px-8">New to this site? Please <Link className="text-[#8e4afc] font-medium" to='/register'>Register</Link></p>
                            <p className="text-center">or</p>
                            <div className="form-control mt-6 px-8 pb-8">
                            <button className="btn btn-outline text-[#8e4afc] hover:bg-[#8e4afc] hover:border-none hover:text-white">Sign in With Google</button>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Login;