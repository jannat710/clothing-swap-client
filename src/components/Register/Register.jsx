
import Google from '../../assets/icon/google.png'
import { Link, useNavigate } from "react-router-dom";
import Swal from "sweetalert2";
import { Helmet } from "react-helmet-async";
import useAuth from "../hook/useAuth";
import useAxios from '../hook/useAxios';


const Register = () => {
    const { createUser, updateUserProfile, googleSignIn } = useAuth();
    const navigate = useNavigate();
    const axiosOpen = useAxios();


    //Google
    const handleGoogleSignIn = () => {
        googleSignIn()
        .then(result => {
            console.log(result.user);
            const userInfo = {
                email: result.user?.email,
                name: result.user?.displayName,
                photo: result.user?.photoURL
            }
            axiosOpen.post('/users', userInfo)
                .then(res => {
                    console.log(res.data);
                    navigate('/');
                })
        })
    }


    const handleRegister = e => {
        e.preventDefault();
        const form = e.target;
        const name = form.name.value;
        const url = form.url.value;
        const email = form.email.value;
        const password = form.password.value;
        console.log(name, email, url, password)

        createUser(email, password)
        .then(result => {
            const loggedUser = result.user;
            console.log(loggedUser);
            updateUserProfile(name, url)
                .then(() => {
                    const userInfo = {
                        name: name,
                        email: email,
                        photo: url
                    }
                    axiosOpen.post('/users', userInfo)
                        .then(res => {
                            if (res.insertedId) {
                                console.log('user added to the database');
                                Swal.fire({
                                    position: "center",
                                    icon: "success",
                                    title: "User created successfully",
                                    showConfirmButton: false,
                                    timer: 1500
                                });

                                navigate('/');
                            }
                        })

                })
                .catch(error => console.log(error))
        })
}




    

    return (
        <div>
            <Helmet><title>ClothingSwap | Sign In</title></Helmet>
            <div className="hero min-h-screen">
                <div className="flex-col max-w-2xl md:flex-row-reverse">
                    <div className="">
                        <div className="w-96 px-8">
                            <h1 className="py-8 text-2xl font-bold">Sign up to
                                <span className="font-bold text-[#D11752]"> Clothing Swap</span>
                            </h1>
                            <div className="form-control">
                                <button onClick={handleGoogleSignIn} className="btn rounded-3xl  border-2 border-[#D11752]">
                                    <img className="h-8" src={Google} alt="" />
                                    Sign in with Google
                                </button>

                                <p className="text-center text-sm pt-5 divider text-[#6e6d7a]">or sign in with email</p>
                            </div>
                        </div>
                        <form onSubmit={handleRegister} className="card-body w-96">
                            <div className="form-control">
                                <label className="label">
                                    <span className="label-text">Name</span>
                                </label>
                                <input type="name" name='name' placeholder="Enter your name" className="input input-bordered" required />
                            </div>
                            <div className="form-control">
                                <label className="label">
                                    <span className="label-text">Photo URL</span>
                                </label>
                                <input type="url" name='url' placeholder="Photo URL" className="input input-bordered" required />
                            </div>

                            <div className="form-control">
                                <label className="label">
                                    <span className="label-text font-bold">Email</span>
                                </label>
                                <input type="email" name="email" placeholder="Enter your email" className="input input-bordered" required />
                            </div>
                            <div className="form-control">
                                <label className="label">
                                    <span className="label-text font-bold">Password</span>
                                </label>
                                <input type="password" name="password" placeholder="Enter your password" className="input input-bordered" required />
                            </div>
                            <div className="form-control mt-6">
                                <input className="btn rounded-3xl bg-[#D11752] text-white" type="submit" value="Sign In" />
                            </div>
                        </form>
                        <p className='text-center pb-5'><small className="text-sm text-[#6e6d7a]">Do not have an account? <Link className="underline font-bold" to="/register">Register</Link> </small></p>

                    </div>
                </div>

            </div>

        </div>
    );
};

export default Register;