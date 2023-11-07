import { Link, NavLink } from "react-router-dom";
import logo from '../../assets/images/logo.png'


const Navbar = () => {
    const links = <>
        <NavLink to="/" className={({ isActive }) =>
            isActive ? 'btn btn-outline text-[#8e4afc] btn-sm hover:bg-[#8e4afc] hover:border-none hover:text-white' : 'btn btn-ghost text-[#8e4afc] btn-sm'}>Home
        </NavLink>
        <NavLink to="/services" className={({ isActive }) =>
            isActive ? 'btn btn-outline text-[#8e4afc] btn-sm hover:bg-[#8e4afc] hover:border-none hover:text-white' : 'btn btn-ghost text-[#8e4afc] btn-sm'}>Services
        </NavLink>
        <NavLink to="/about" className={({ isActive }) =>
            isActive ? 'btn btn-outline text-[#8e4afc] btn-sm hover:bg-[#8e4afc] hover:border-none hover:text-white' : 'btn btn-ghost text-[#8e4afc] btn-sm'}>About
        </NavLink>
    </>


    return (
        <div className="navbar bg-base-100">
            <div className="navbar-start">
                <div className="dropdown">
                    <label tabIndex={0} className="btn btn-ghost lg:hidden">
                        <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /></svg>
                    </label>
                    <ul tabIndex={0} className="menu menu-sm dropdown-content mt-3 z-[1] p-2 shadow bg-base-100 rounded-box w-52">
                        {links}
                        <li>
                            <label tabIndex={0} className="btn btn-ghost rounded-btn text-[#8e4afc] ">Dashboard</label>
                            <ul tabIndex={0} className="menu dropdown-content z-[1] p-2 shadow bg-base-100 rounded-box w-52 mt-12">
                                <li><a>My Service</a></li>
                                <li><a>Add Service</a></li>
                                <li><a>My Schedule</a></li>
                            </ul>
                        </li>

                    </ul>
                </div>
                <img src={logo} className='h-12 w-12' alt="" />
                <p className="font-bold text-xl">Swap<span className="text-[#8e4afc]">Savvy</span></p>
            </div>
            <div className="navbar-center hidden lg:flex">
                <ul className="menu menu-horizontal px-1">
                    <div className="flex justify-center items-center">
                        {links}
                    </div>

                    <div className="dropdown dropdown-bottom flex justify-center items-center">
                        <label tabIndex={0} className="btn btn-ghost rounded-btn text-[#8e4afc]">Dashboard</label>
                        <ul tabIndex={0} className="menu dropdown-content z-[1] shadow bg-base-100 rounded-box w-52">
                            <li><a>My Service</a></li>
                            <li><a>Add Service</a></li>
                            <li><a>My Schedule</a></li>
                        </ul>
                    </div>

                </ul>
            </div>
            <div className="navbar-end">
                <Link to='/login' className="btn text-[#8e4afc]">Login</Link>
            </div>
        </div>
    );
};

export default Navbar;