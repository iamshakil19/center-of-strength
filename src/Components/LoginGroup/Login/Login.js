import React, { useEffect, useState } from 'react';
import './Login.css'
import loginImage from '../../../Images/login-image.jpg'
import { Link, useLocation, useNavigate } from 'react-router-dom';
import SocialLogin from '../../SocialLogin/SocialLogin';
import { useSignInWithEmailAndPassword } from 'react-firebase-hooks/auth';
import auth from '../../../firebase.init';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';


const Login = () => {
    const navigate = useNavigate()
    let location = useLocation();
    let from = location.state?.from?.pathname || "/";

    const [userInfo, setUserInfo] = useState({
        email: "",
        password: ""
    })
    const [customError, setCustomError] = useState({
        emailError: "",
        passwordError: "",
        othersError: ""
    })

    const [
        signInWithEmailAndPassword,
        user,
        loading,
        firebaseError,
    ] = useSignInWithEmailAndPassword(auth);

    const handleSubmit = event => {
        event.preventDefault()
        signInWithEmailAndPassword(userInfo.email, userInfo.password);
    }

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

    useEffect(()=>{
        if(user){
            navigate(from, { replace: true });
        }
    })


    return (
        <div>
            <h2 className='text-white text-center my-10 text-4xl font-bold font-extralight'>Login</h2>
            <div className='login-container'>
                <form onSubmit={handleSubmit} className='inputs-field'>
                    <div className='flex justify-center'>
                        <div className=''>
                            <p className='text-white mb-2'>Email</p>
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

                    <div className='flex justify-center mt-4'>
                        <div>
                            <p className=''><span className='text-white'>New in strength center ? <Link to="/register" ><span className='text-blue-500'>Please Register</span></Link></span></p>
                        </div>
                    </div>
                    <div className='flex justify-center mt-3'>
                        <div>
                            <p className=''><Link to="/" ><span className='text-blue-500'>Forgot Password ?</span></Link></p>
                        </div>
                    </div>
                    <div className='flex justify-center my-7'>
                        <input className='text-white text-lg font-semibold border py-1 px-4 rounded hover:bg-stone-800 duration-700 cursor-pointer' type="submit" value="Login" />
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

export default Login;