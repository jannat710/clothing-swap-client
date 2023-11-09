import Lottie from "lottie-react";
import loginAnimation from '../../assets/loginAnimation.json'
import { Link, useNavigate } from "react-router-dom";
import { useContext } from "react";
import swal from 'sweetalert2';
import { AuthContext } from "../../provider/AuthProvider";
import Swal from "sweetalert2";
import { Helmet } from "react-helmet-async";

const Login = () => {
    const { user, login, googleSignIn } = useContext(AuthContext);
    const navigate = useNavigate();

    const handleGoogleSignIn = () => {
        googleSignIn()
            .then((result) => {
                swal.fire("Good job!", "Successfully sign in with google!", "success")
                navigate('/');
            });
    }

    const handleLogin = e => {
        e.preventDefault();
        const form = e.target;
        const email = form.email.value;
        const password = form.password.value;
        console.log(email, password)

        login(email, password)
            .then(result => {
                const user = result.user;
                swal.fire("Good job!", "User logged in Successfully!", "success")
                navigate('/');
            })
            .catch(error => {
                Swal.fire('Error', 'Invalid!', 'error');
            });

    }
    return (

        <div>
            <Helmet><title>SwapSavvy | Login</title></Helmet>
            <h1 className="text-center text-4xl font-bold pt-10"><span className="text-black">Login</span> Now</h1>
            <div>
                <div className="hero-content flex-col lg:flex-row-reverse">
                    <div className="text-center lg:text-left">
                        <Lottie animationData={loginAnimation}></Lottie>
                    </div>
                    <div className="card flex-shrink-0 w-full max-w-sm shadow-2xl bg-base-100">
                        <form onSubmit={handleLogin} className="card-body">
                            <div className="form-control">
                                <label className="label">
                                    <span className="label-text">Email</span>
                                </label>
                                <input type="email" name='email' placeholder="email" className="input input-bordered" required />
                            </div>
                            <div className="form-control">
                                <label className="label">
                                    <span className="label-text">Password</span>
                                </label>
                                <input type="password" name='password' placeholder="password" className="input input-bordered" required />
                            </div>
                            <div className="form-control mt-6">
                                <button className="btn btn-outline text-black hover:bg-black hover:border-none hover:text-white">Login</button>
                            </div>
                        </form>
                        <div>
                            <p className="px-8">New to this site? Please <Link className="text-black font-medium" to='/register'>Register</Link></p>
                            <p className="text-center">or</p>
                            <div className="form-control mt-6 px-8 pb-8">
                                <button onClick={handleGoogleSignIn} className="btn btn-outline text-black hover:bg-black hover:border-none hover:text-white">Sign in With Google</button>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Login;