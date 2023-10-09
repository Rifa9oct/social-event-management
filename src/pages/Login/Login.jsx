import { FcBusinessman, FcGoogle } from "react-icons/fc";
import { FaEye, FaEyeSlash } from 'react-icons/fa';
import line from "../../assets/line.png"
import { Link } from "react-router-dom";
import { useContext, useState } from "react";
import Swal from "sweetalert2";
import { AuthContext } from "../../provider/AuthProvider";

const Login = () => {
    const [showPassword, setShowPassword] = useState(false);
    const { signinUser, setLogin, signInWithGoogle } = useContext(AuthContext);

    const handleLogin = e => {
        e.preventDefault();
        const email = e.target.email.value;
        const password = e.target.password.value;
        signinUser(email, password)
            .then(() => {
                Swal.fire("Good job", "Login successfull", "success");
                setLogin(true);
                e.target.reset();
            })
            .catch(error => {
                Swal.fire("Login Error", error.message, "error")
                console.log(error);
            })
    }

    const handleGoogleSignIn = () => {
        signInWithGoogle()
            .then(result => {
                console.log(result.user)
            })
            .catch(error => {
                console.log(error)
            })
    }

    return (
        <div className="my-32">
            <div className="relative">
                <FcBusinessman className="absolute top-[-55px] left-[160px] md:left-[330px] lg:left-[685px] text-8xl p-2 bg-blue-200 border rounded-full"></FcBusinessman>
            </div>

            <div  className="shadow-xl  w-[400px] mx-auto outline p-6 outline-blue-500 rounded-lg">
                <form onSubmit={handleLogin}>
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

                        <label className="label">
                            <a href="#" className="text-sm link link-hover">Forgot password?</a>
                        </label>
                    </div>

                    <div className="form-control mt-6">
                        <button className="text-lg btn bg-blue-500 hover:bg-blue-700 text-white font-semibold">Login</button>
                    </div>

                    {/* or */}
                    <div className="flex items-center my-3 justify-center">
                        <img src={line} />
                        <p className="font-medium px-2 py-1 rounded-lg border-[3px] border-gray-400">OR</p>
                        <img src={line} />
                    </div>
                </form>
                {/* continue with google */}
                <div className="flex items-center justify-center border-solid border-2 border-blue-200 p-2 rounded-lg font-semibold">
                    <FcGoogle className="text-2xl mr-2"></FcGoogle>
                    <button onClick={handleGoogleSignIn} className="text-gray-500">Continue with google</button>
                </div>
                <p className="mt-4 text-center">Do not have an account? Please <Link className="text-blue-500 font-bold underline" to="/register">Register</Link></p>
            </div>

        </div>

    );
};

export default Login;