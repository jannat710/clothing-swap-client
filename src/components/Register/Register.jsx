import Lottie from "lottie-react";
import swal from 'sweetalert2';
import registerAnimation from '../../assets/registerAnimation.json'
import { Link } from "react-router-dom";
import { useContext } from "react";
import { AuthContext } from "../../provider/AuthProvider";
import Swal from "sweetalert2";

const Register = () => {
    const { user,createUser } = useContext(AuthContext);
    console.log(user)


    const handleRegister = e => {
        e.preventDefault();
        const form = e.target;
        const name= form.name.value;
        const url= form.url.value;
        const email= form.email.value;
        const password= form.password.value;
        console.log(name,email,url,password)

        createUser(email,password)
        .then(result =>{
            const user = result.user;
            swal.fire("Good job!", "User Created Successfully!", "success")
            console.log(user)
        })
        .catch(error =>{
            Swal.fire('Error', 'Invalid!', 'error'); 
            });
        

    }
    return (
        <div>
        <h1 className="text-center text-4xl font-bold pt-10"><span className="text-[#8e4afc]">Register</span> Now</h1>
        <div>

            <div className="hero-content flex-col lg:flex-row-reverse">

                <div className="text-center lg:text-left">
                    <Lottie className="h-1/2 w-1/2 mx-auto" animationData={registerAnimation}></Lottie>
                </div>
                <div className="card flex-shrink-0 w-full max-w-sm shadow-2xl bg-base-100">
                    <form onSubmit={handleRegister} className="card-body">
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
                                <span className="label-text">Email</span>
                            </label>
                            <input type="email" name='email' placeholder="Enter your email" className="input input-bordered" required />
                        </div>
                        <div className="form-control">
                            <label className="label">
                                <span className="label-text">Password</span>
                            </label>
                            <input type="password" name='password' placeholder="password" className="input input-bordered" required />
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