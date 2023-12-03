import { FaFacebookF, FaGoogle, FaPinterest, FaTwitter, FaYoutube } from 'react-icons/fa';
import logo from '../../assets/images/logo.png'

const Footer = () => {
    return (
        <div>
            <footer className="footer p-10 bg-[#F9F9F9]">
                <aside className='flex flex-col justify-center items-center'>
                    <img src={logo} className='h-16 w-full' alt="" />
                    <p>FASHIONZONE Industries Ltd.<br />Providing reliable tech since 1992</p>
                </aside>

                <nav>
                    <header className="footer-title border-b w-full py-3">CONTACT US</header>
                    <a className="link link-hover">123 ABS Street, Uni 21, Bangladesh</a>
                    <a className="link link-hover">+88 123456789</a>
                    <a className="link link-hover">Mon - Fri: 08:00 - 22:00</a>
                    <a className="link link-hover">Sat - Sun: 10:00 - 23:00</a>
                </nav>
                <form>
                    <header className="footer-title border-b w-full py-3">Newsletter</header>
                    <fieldset className="form-control w-80">
                        <div className="flex">
                            <input type="text" placeholder="Enter your email address" className="rounded-sm input input-bordered join-item" />
                            <button className="btn border-none rounded-sm ml-2 bg-[#D11752] text-white">Subscribe</button>
                        </div>
                    </fieldset>
                </form>


            </footer>
            <hr className='w-10/12 mx-auto' />
            <div className="footer items-center py-5 bg-[#F9F9F9] flex flex-col">
                
                <nav className="grid-flow-col gap-4 md:place-self-center md:justify-self-end">
                    <a><FaFacebookF className="bg-[#D11752] text-white h-8 w-8 p-2 rounded-full"></FaFacebookF></a>
                    <a><FaYoutube className="bg-[#D11752] text-white h-8 w-8 p-2 rounded-full"></FaYoutube></a>
                    <a><FaGoogle className="bg-[#D11752] text-white h-8 w-8 p-2 rounded-full"></FaGoogle></a>
                    <a><FaPinterest className="bg-[#D11752] text-white h-8 w-8 p-2 rounded-full"></FaPinterest></a>
                    <a className="bg-[#D11752] h-8 w-8 p-2 text-white rounded-full"><FaTwitter></FaTwitter></a>
                </nav>
                <aside className="items-center ">
                    <p>Copyright © 2023 - All right reserved</p>
                </aside>
            </div>
            
        </div>
    );
};

export default Footer;