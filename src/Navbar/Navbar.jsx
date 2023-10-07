import { Link, NavLink } from "react-router-dom";

const Navbar = () => {
    const navLinks = <>
        <li> <NavLink to="/" className={({ isActive, isPending }) =>
            isActive ? "active px-3 py-2 rounded-lg  text-red-600 underline underline-offset-4 font-semibold" : isPending ? "pending" : ""}>Home</NavLink>
        </li>
        <li> <NavLink to="/aboutUs" className={({ isActive, isPending }) =>
            isActive ? "active px-3 py-2 rounded-lg  text-red-600 underline underline-offset-4 font-semibold" : isPending ? "pending" : ""}>About Us</NavLink>
        </li>
        <li> <NavLink to="/contact" className={({ isActive, isPending }) =>
            isActive ? "active px-3 py-2 rounded-lg  text-red-600 underline underline-offset-4 font-semibold" : isPending ? "pending" : ""}>Contact</NavLink>
        </li>
        <li> <NavLink to="/team" className={({ isActive, isPending }) =>
            isActive ? "active px-3 py-2 rounded-lg  text-red-600 underline underline-offset-4 font-semibold" : isPending ? "pending" : ""}>Our Team</NavLink>
        </li>
        <li> <NavLink to="/supports" className={({ isActive, isPending }) =>
            isActive ? "active px-3 py-2 rounded-lg  text-red-600 underline underline-offset-4 font-semibold" : isPending ? "pending" : ""}>Supports</NavLink>
        </li>
    </>
    return (
        <div className="navbar mb-20 mt-8">
            <div className="navbar-start">
                <div className="dropdown">
                    
                    <label tabIndex={0} className="btn btn-ghost lg:hidden">
                        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" className="inline-block w-5 h-5 stroke-current"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h16M4 18h16"></path></svg>
                    </label>
                    <ul tabIndex={0} className="text-[#706F6F] flex flex-col gap-4 font-semibold dropdown-content mt-3 z-[1] p-3 py-6 shadow bg-base-100 rounded-box w-52">
                        {navLinks}
                    </ul>
                </div>
                <a className="btn btn-ghost normal-case text-xl">event management</a>
            </div>
            
            <div className="navbar-center hidden lg:flex">
                <ul className="text-[#706F6F] flex gap-8 font-semibold">
                    {navLinks}
                </ul>
            </div>
            <div className="navbar-end">
                <Link to="/login">
                    <button className="btn bg-blue-500 text-white hover:bg-blue-700 font-semibold">Login</button>
                </Link>
                <Link to="/register">
                    <button className="ml-4 btn bg-green-500 text-white hover:bg-green-700 font-semibold">Register</button>
                </Link>
            </div>

        </div>
    );
};

export default Navbar;