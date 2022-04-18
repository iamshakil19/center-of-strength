import React, { useEffect, useState } from 'react';
import { Link, useLocation, useNavigate } from 'react-router-dom';
import SocialLogin from '../../SocialLogin/SocialLogin';
import loginImage from '../../../Images/login-image.jpg'
import { useCreateUserWithEmailAndPassword } from "react-firebase-hooks/auth";
import './Register.css'
import auth from '../../../firebase.init';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';


const Register = () => {
    const location = useLocation()
    const [createUserWithEmailAndPassword, user, loading, firebaseError] =
        useCreateUserWithEmailAndPassword(auth);

    const [userInfo, setUserInfo] = useState({
        email: "",
        password: "",
        confirmPass: ""
    })
    const [customError, setCustomError] = useState({
        emailError: "",
        passwordError: "",
        othersError: ""
    })

    const handleInputEmail = event => {
        const emailRegex = /\S+@\S+\.\S+/
        const validEmail = emailRegex.test(event.target.value)
        if (validEmail) {
            setUserInfo({ ...userInfo, email: event.target.value })
            setCustomError({ ...customError, emailError: "" })
        }
        else {
            setCustomError({ ...customError, emailError: "Invalid email" })
            setUserInfo({ ...userInfo, email: "" })
        }
    }

    const handleInputPassword = event => {
        const passwordRegex = /.{6,}/
        const validPassword = passwordRegex.test(event.target.value)
        if (validPassword) {
            setUserInfo({ ...userInfo, password: event.target.value })
            setCustomError({ ...customError, passwordError: "" })
        }
        else {
            setCustomError({ ...customError, passwordError: "Minimum 6 character length" })
            setUserInfo({ ...userInfo, password: "" })
        }
    }

    const handleInputConfirmPassword = event => {

        if (event.target.value === userInfo.password) {
            setUserInfo({ ...userInfo, confirmPass: event.target.value })
            setCustomError({ ...customError, passwordError: "" })
        }
        else {
            setCustomError({ ...customError, passwordError: "Password don't match" })
            setUserInfo({ ...userInfo, confirmPass: "" })
        }
    }

    useEffect(() => {
        if (firebaseError) {
            toast.error(`${firebaseError.message}`, {
                position: "top-center",
                autoClose: 5000,
                hideProgressBar: false,
                closeOnClick: true,
                pauseOnHover: true,
                draggable: true,
                progress: undefined,
            });
        }
    }, [firebaseError])

    const navigate = useNavigate()
    const from = location.state?.from?.pathname || "/"
    useEffect(() => {
        if (user) {
            navigate(from, { replace: true })
        }
    })

    const handleSubmit = event => {
        event.preventDefault()
        createUserWithEmailAndPassword(userInfo.email, userInfo.password);
    }

    return (
        <div>
            <h2 className='text-white text-center my-10 text-4xl font-bold font-extralight'>Register</h2>
            <div className='login-container'>
                <form onSubmit={handleSubmit} className='inputs-field'>

                    <div className='flex justify-center'>
                        <div className=''>
                            <p className='text-white mb-2 mt-5'>Email</p>
                            <input onChange={handleInputEmail} className='outline-0 bg-transparent text-white input-style ' type="email" name="email" id="email" placeholder='Type your email' required />
                            <div style={{ height: "1px", width: "280px" }} className="bg-slate-400"></div>
                            {
                                customError?.emailError && <p className='text-red-500 mt-1 text-sm'>{customError.emailError}</p>
                            }
                        </div>
                    </div>

                    <div className='flex justify-center'>
                        <div className=''>
                            <p className='text-white mb-2 mt-5'>Password</p>
                            <input onChange={handleInputPassword} className='outline-0 bg-transparent text-white input-style ' type="password" name="password" id="password" placeholder='Type your password' required />
                            <div style={{ height: "1px", width: "280px" }} className="bg-slate-400"></div>
                            {
                                customError?.passwordError && <p className='text-red-500 mt-1 text-sm'>{customError.passwordError}</p>
                            }
                        </div>
                    </div>

                    <div className='flex justify-center'>
                        <div className=''>
                            <p className='text-white mb-2 mt-5'>Confirm Password</p>
                            <input onChange={handleInputConfirmPassword} className='outline-0 bg-transparent text-white input-style ' type="password" name="confirm-password" id="confirm-password" placeholder='Type your confirm password' required />
                            <div style={{ height: "1px", width: "280px" }} className="bg-slate-400"></div>
                        </div>
                    </div>

                    <div className='flex justify-center mt-4'>
                        <div>
                            <p className=''><span className='text-white'>Already have an account ? <Link to="/login" ><span className='text-blue-500'>Login</span></Link></span></p>
                        </div>
                    </div>

                    <div className='flex justify-center my-7'>
                        <input className='text-white text-lg font-semibold border py-1 px-4 rounded hover:bg-stone-800 duration-700 cursor-pointer' type="submit" value="Register" />
                    </div>
                    <p className='text-white text-center'>Or login with</p>
                    <SocialLogin></SocialLogin>
                </form>
                <div>
                    <img className='login-image rounded-3xl' src={loginImage} alt="" />
                </div>
            </div>
            <ToastContainer
                position="top-center"
                autoClose={5000}
                hideProgressBar={false}
                newestOnTop={false}
                closeOnClick
                rtl={false}
                pauseOnFocusLoss
                draggable
                pauseOnHover
            />
        </div>
    );
};

export default Register;