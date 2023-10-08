import { Link, NavLink } from "react-router-dom";
import logo from "../assets/logo.png"
import { useContext } from "react";
import { AuthContext } from "../provider/AuthProvider";
import Swal from "sweetalert2";

const Navbar = () => {
    const { user, logOut } = useContext(AuthContext);
    const navLinks = <>
        <li> <NavLink to="/" className={({ isActive, isPending }) =>
            isActive ? "active rounded-lg  text-red-600 underline underline-offset-4 font-semibold" : isPending ? "pending" : ""}>Home</NavLink>
        </li>
        <li> <NavLink to="/aboutUs" className={({ isActive, isPending }) =>
            isActive ? "active rounded-lg  text-red-600 underline underline-offset-4 font-semibold" : isPending ? "pending" : ""}>About</NavLink>
        </li>
        <li> <NavLink to="/contact" className={({ isActive, isPending }) =>
            isActive ? "active rounded-lg  text-red-600 underline underline-offset-4 font-semibold" : isPending ? "pending" : ""}>Contact</NavLink>
        </li>
        <li> <NavLink to="/supports" className={({ isActive, isPending }) =>
            isActive ? "active rounded-lg  text-red-600 underline underline-offset-4 font-semibold" : isPending ? "pending" : ""}>Supports</NavLink>
        </li>
    </>

    const handleLogOut = () => {
        logOut()
            .then(() => {
                Swal.fire(
                    'Thank you',
                    'Logout successfully',
                    'success'
                )
            })
            .catch(error => console.error(error))
    }


    return (
        <div className="navbar mb-10 flex-col md:flex-row mt-8 max-w-[1440px] mx-auto">
            <div className="navbar-start">
                <div className="dropdown">
                    <label tabIndex={0} className="btn btn-ghost lg:hidden">
                        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" className="inline-block w-5 h-5 stroke-current"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h16M4 18h16"></path></svg>
                    </label>
                    <ul tabIndex={0} className="text-[#706F6F] flex flex-col gap-4 font-semibold dropdown-content mt-3 z-[1] p-6 py-6 shadow bg-base-100 rounded-box w-52">
                        {navLinks}
                    </ul>
                </div>
                <img className="h-20 mx-auto md:mx-0" src={logo} />
            </div>

            <div className="navbar-center hidden lg:flex">
                <ul className="text-[#706F6F] text-lg flex gap-8 font-semibold">
                    {navLinks}
                </ul>
            </div>

            <div className="navbar-end mt-8 lg:mt-0">
                {
                    user ?
                        <>
                            <div className="flex flex-col items-center">
                                {
                                    user.photoURL ? <>
                                        <img className="mt-6 w-[50px] h-[50px] mx-3 rounded-full border-[3px] border-blue-800" src={user.photoURL} />
                                        <p className="text-blue-800 font-semibold">{user.displayName}</p>
                                    </> :
                                    <>
                                        <img className="mt-6 w-[50px] h-[50px] mx-3 rounded-full" src="https://i.ibb.co/VC1vhmp/user.png"/>
                                        <p className="text-black font-semibold">{user.displayName}</p>
                                    </>

                                }
                            </div>
                            <div>
                                <a onClick={handleLogOut} className="btn text-base bg-blue-500 text-white hover:bg-blue-700 font-semibold">Logout</a>
                            </div>
                        </> :
                        <Link to="/login">
                            <button className="btn text-base bg-blue-500 text-white hover:bg-blue-700 font-semibold">Login</button>
                        </Link>
                }

                <Link to="/register">
                    <button className="ml-4 btn text-base bg-green-500 text-white hover:bg-green-700 font-semibold">Register</button>
                </Link>
            </div>
        </div>
    );
};

export default Navbar;