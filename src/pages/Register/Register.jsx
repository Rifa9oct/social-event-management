import { FcBusinessman, FcGoogle } from "react-icons/fc";
import { FaEye, FaEyeSlash } from 'react-icons/fa';
import line from "../../assets/line.png"
import { Link } from "react-router-dom";
import { useState } from "react";

const Register = () => {
    const [showPassword, setShowPassword] = useState(false);

    const handleRegister = e => {
        e.preventDefault();
        const name = e.target.name.value;
        const email = e.target.email.value;
        const password = e.target.password.value;
        const accepted = e.target.terms.checked;
        console.log(name, email, password, accepted)
    }

    return (
        <div>
            <div className="my-32">
                <div className="relative">
                    <FcBusinessman className="absolute top-[-55px] left-[670px] text-8xl p-2 bg-green-200 border rounded-full"></FcBusinessman>
                </div>
                <form onSubmit={handleRegister} className="shadow-xl  w-[400px] mx-auto outline p-6 outline-green-500 rounded-lg">
                    <div className="form-control">
                        <label className="label">
                            <span className="label-text">Name</span>
                        </label>
                        <input type="text" name="name" placeholder="Youe name" className="input input-bordered" required />
                    </div>
                    <div className="form-control">
                        <label className="label">
                            <span className="label-text">Email</span>
                        </label>
                        <input type="email" name="email" placeholder="Your email" className="input input-bordered" required />
                    </div>
                    <div className="form-control">
                        <label className="label">
                            <span className="label-text">Password</span>
                        </label>

                        <div className="relative">
                            <input
                                type={showPassword ? "text" : "password"}
                                name="password" placeholder="password" className="input input-bordered w-full" required />
                            <span className="absolute top-4 right-4" onClick={() => setShowPassword(!showPassword)}>
                                {
                                    showPassword ? <FaEye></FaEye> : <FaEyeSlash></FaEyeSlash>
                                }
                            </span>
                        </div>

                        <div className="flex gap-2 mt-4">
                            <input type="checkbox" name="terms" />
                            <label htmlFor="terms">Accept our <a href="#">terms and conditions!</a></label>
                        </div>
                    </div>

                    <div className="form-control mt-6">
                        <button className="text-lg btn bg-green-500 hover:bg-green-700 text-white font-semibold">Register</button>
                    </div>

                    {/* or */}
                    <div className="flex items-center justify-center">
                        <img src={line} />
                        <p className="font-medium px-2 py-1 rounded-lg border-[3px] border-gray-400">OR</p>
                        <img src={line} />
                    </div>

                    {/* continue with google */}
                    <div className="flex items-center justify-center border-solid border-2 border-green-200 p-2 rounded-lg font-semibold">
                        <FcGoogle className="text-2xl mr-2"></FcGoogle>
                        <p className="text-gray-500">Continue with google</p>
                    </div>

                    <p className="mt-4 text-center">Already have an account? Please <Link className="text-green-500 font-bold underline" to="/login">Login</Link></p>
                </form>
            </div>
        </div>
    );
};

export default Register;