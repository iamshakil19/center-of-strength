import React from 'react';
import './Login.css'
import loginImage from '../../../Images/login-image.jpg'
import { Link } from 'react-router-dom';
import SocialLogin from '../../SocialLogin/SocialLogin';


const Login = () => {

    const handleSubmit = event => {
        event.preventDefault()
    }
    return (
        <div>
            <h2 className='text-white text-center my-10 text-4xl font-bold font-extralight'>Login</h2>
            <div className='login-container'>
                <form onClick={handleSubmit} className='inputs-field'>
                    <div className='flex justify-center'>
                        <div className=''>
                            <p className='text-white mb-2'>Email</p>
                            <input className='outline-0 bg-transparent text-white input-style ' type="email" name="email" id="email" placeholder='Type your email' required />
                            <div style={{ height: "1px", width: "280px" }} className="bg-slate-400"></div>
                        </div>
                    </div>

                    <div className='flex justify-center'>
                        <div className=''>
                            <p className='text-white mb-2 mt-5'>Password</p>
                            <input className='outline-0 bg-transparent text-white input-style ' type="password" name="password" id="password" placeholder='Type your password' required />
                            <div style={{ height: "1px", width: "280px" }} className="bg-slate-400"></div>
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
        </div>
    );
};

export default Login;