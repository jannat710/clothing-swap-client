import logo from '../../assets/images/logo.png'
import { AiFillYoutube } from 'react-icons/ai';
import { FaTwitter } from 'react-icons/fa';
import { BsFacebook } from 'react-icons/bs';


const Footer = () => {
    return (
        <div className="p-10 bg-base-200 text-base-content">
            <h1 className="text-center">SIGN UP FOR OUR NEWSLETTER</h1>
            <p className="text-center py-4">Enter your email address</p>
            <div className="flex justify-center items-center">

                <fieldset className="form-control w-80 pb-8">

                    <div className="relative">
                        <input type="text" placeholder="username@site.com" className="input input-bordered w-full pr-16" />
                        <button className="btn btn-primary absolute top-0 right-0 rounded-l-none">Subscribe</button>
                    </div>
                </fieldset>
            </div>
            <footer className="footer">

                <aside className='flex flex-col justify-center items-center'>
                <img src={logo} className='h-14 w-14' alt="" />
                    <h1 className="font-bold text-xl">SwapSavvy</h1>
                    <p>FASHIONZONE Industries Ltd.<br />Providing reliable tech since 1992</p>
                </aside>
                <nav>
                    <header className="footer-title">Services</header>
                    <a className="link link-hover">Branding</a>
                    <a className="link link-hover">Design</a>
                    <a className="link link-hover">Marketing</a>
                    <a className="link link-hover">Advertisement</a>
                </nav>
                <nav>
                    <header className="footer-title">Company</header>
                    <a className="link link-hover">About us</a>
                    <a className="link link-hover">Contact</a>
                    <a className="link link-hover">Jobs</a>
                    <a className="link link-hover">Press kit</a>
                </nav>
                <nav>
                    <header className="footer-title">Legal</header>
                    <a className="link link-hover">Terms of use</a>
                    <a className="link link-hover">Privacy policy</a>
                    <a className="link link-hover">Cookie policy</a>
                </nav>
            </footer>
            <div className="footer items-center p-4 bg-base-200 text-base-content">
                <aside className="items-center grid-flow-col">
                    
                    <p>Copyright © 2023 - All right reserved</p>
                </aside>
                <nav className="grid-flow-col gap-4 md:place-self-center md:justify-self-end">
                    <a><BsFacebook className='text-blue-600 h-6 w-6'></BsFacebook>
                    </a>
                    <a><FaTwitter className='text-blue-600 h-6 w-6'></FaTwitter></a>
                    <a><AiFillYoutube className='text-red-600 h-6 w-6'></AiFillYoutube></a>

                </nav>
            </div>
        </div>
    );
};

export default Footer;