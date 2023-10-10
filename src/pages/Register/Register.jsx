import { FaEye, FaEyeSlash } from 'react-icons/fa';
import { Link } from "react-router-dom";
import { useContext, useState } from "react";
import { AuthContext } from "../../provider/AuthProvider";
import { updateProfile } from "firebase/auth";
import { FcBusinessman } from 'react-icons/fc';
import Swal from 'sweetalert2';

const Register = () => {
    const { createUser } = useContext(AuthContext);
    const [showPassword, setShowPassword] = useState(false);

    const handleRegister = e => {
        e.preventDefault();
        const name = e.target.name.value;
        const photoUrl = e.target.photo.value;
        const email = e.target.email.value;
        const password = e.target.password.value;
        const accepted = e.target.terms.checked;

        //password verification
        if (password.length < 6) {
            Swal.fire("Opps!", "Password should be at least 6 characters or longer", "error");
            return;
        }
        else if (!/[A-Z]/.test(password)) {
            Swal.fire("Opps!", "Your password should have at least an uppercase character", "error");
            return;
        }
        else if (!/[^\w]/.test(password)) {
            Swal.fire("Opps!", "Your password should have at least a special character", "error");
            return;
        }
        else if (!accepted) {
            Swal.fire("Opps!", "Your should have accepted our terms and condition", "error");
            return;
        }

        createUser(email, password)
            .then(result => {
                console.log(result.user);
                Swal.fire("Great!", "Registration successfull", "success");
                updateProfile(result.user, {
                    displayName: name,
                    photoURL: photoUrl
                })
                e.target.reset();
            })
            .catch(error => {
                Swal.fire("Opps!", error.message, "error");
            })

    }

    return (
        <div className="my-32">
            <div className='relative shadow-xl w-[400px] mx-auto outline p-6 outline-green-500 rounded-lg'>
                <form onSubmit={handleRegister}>
                    <div className="form-control">
                        <label className="label">
                            <span className="label-text">Name</span>
                        </label>
                        <input type="text" name="name" placeholder="Youe name" className="input input-bordered" required />
                    </div>
                    <div className="form-control">
                        <label className="label">
                            <span className="label-text">Photo URL</span>
                        </label>
                        <input type="text" name="photo" placeholder="photo url" className="input input-bordered" />
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

                    <p className="mt-4 text-center">Already have an account? Please <Link className="text-green-500 font-bold underline" to="/login">Login</Link></p>
                </form>
                <div className="absolute top-[-50px] left-[150px]">
                    <FcBusinessman className="text-8xl p-2 bg-green-200 border rounded-full"></FcBusinessman>
                </div>
            </div>


        </div>
    );
};

export default Register;