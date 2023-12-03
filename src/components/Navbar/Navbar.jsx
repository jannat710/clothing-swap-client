import { Link, NavLink } from "react-router-dom";
import logo from '../../assets/images/logo.png'
import { useContext } from "react";
import { AuthContext } from "../../provider/AuthProvider";


const Navbar = () => {
    const { user, logout } = useContext(AuthContext);
    console.log(user)

    const links = <>
        <li>
            <NavLink
                to="/"
                className={({ isActive, isPending }) =>
                    isPending ? "pending" : isActive ? "text-[#D11752] font-semibold text-sm " : "font-semibold text-sm"
                }>
                Home
            </NavLink>
        </li>
        <li>
            <NavLink
                to="/services"
                className={({ isActive, isPending }) =>
                    isPending ? "pending" : isActive ? "text-[#D11752] font-semibold text-sm " : "font-semibold text-sm"
                }>
                Services
            </NavLink>
        </li>
        <li>
            <NavLink
                to="/about"
                className={({ isActive, isPending }) =>
                    isPending ? "pending" : isActive ? "text-[#D11752] font-semibold text-sm " : "font-semibold text-sm"
                }>
                About
            </NavLink>
        </li>
    </>


    return (
        <div className="navbar border-b-2 p-4">
            <div className="navbar-start">
                <div className="dropdown">
                    <label tabIndex={0} className="btn btn-ghost lg:hidden">
                        <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /></svg>
                    </label>
                    <ul tabIndex={0} className="menu menu-sm dropdown-content mt-3 z-[1] p-2 shadow bg-base-100 rounded-box w-52">
                        {links}

                    </ul>
                </div>
                <img src={logo} className='h-12 w-1/3' alt="" />
                
            </div>
            <div className="navbar-center hidden lg:flex">
                <ul className="menu menu-horizontal px-1">
                    <div className="flex justify-center items-center">
                        {links}
                    </div>

                    <div className="dropdown dropdown-bottom flex justify-center items-center">
                        {user?.email && (
                            <div>
                                <label tabIndex={0} className="btn btn-ghost dropdown-bottom rounded-btn text-black">
                                    Dashboard
                                </label>
                                <ul tabIndex={0} className="menu dropdown-content z-[1] shadow bg-base-100 rounded-box w-52">
                                    <NavLink to="/myservice" className={({ isActive }) =>
                                        isActive ? 'btn btn-outline text-black btn-sm hover:bg-black hover:border-none hover:text-white' : 'btn btn-ghost text-black btn-sm'}>My-services
                                    </NavLink>
                                    <NavLink to="/addservice" className={({ isActive }) =>
                                        isActive ? 'btn btn-outline text-black btn-sm hover:bg-black hover:border-none hover:text-white' : 'btn btn-ghost text-black btn-sm'}>Add-services
                                    </NavLink>
                                    <NavLink to="/myschedule" className={({ isActive }) =>
                                        isActive ? 'btn btn-outline text-black btn-sm hover:bg-black hover:border-none hover:text-white' : 'btn btn-ghost text-black btn-sm'}>My-schedules
                                    </NavLink>


                                </ul>
                            </div>
                        )}
                    </div>

                </ul>
            </div>
            <div className="navbar-end">
                <div className="flex flex-col justify-center items-center pr-3">
                    <img className="rounded-full w-7" src={user?.photoURL} alt="" />
                    <p>{user?.displayName}</p>
                </div>

                {user?.email ? (<button className="btn text-black" onClick={logout}>Logout</button>) : (<Link to='/login' className="btn text-black">Login</Link>)}
            </div>
        </div>
    );
};

export default Navbar;