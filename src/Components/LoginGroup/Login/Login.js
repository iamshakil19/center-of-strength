import React from 'react';
import './Login.css'
import loginImage from '../../../Images/login-image.jpg'
const Login = () => {
    return (
        <div>
            <h2 className='text-white text-center'>Login</h2>
            <div className='login-container'>
                <div>
                    <img src={loginImage} alt="" />
                </div>
                <form className='inputs-field'>

                </form>
            </div>
        </div>
    );
};

export default Login;