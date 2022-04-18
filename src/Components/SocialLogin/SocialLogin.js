import React, { useEffect } from 'react';
import facebookLogo from '../../Images/facebook.png'
import googleLogo from '../../Images/google.png'
import githubLogo from '../../Images/github.png'
import { useSignInWithFacebook, useSignInWithGithub, useSignInWithGoogle } from 'react-firebase-hooks/auth';
import './SocialLogin.css'
import auth from '../../firebase.init';
import { useLocation, useNavigate } from 'react-router-dom';
import { sendEmailVerification } from 'firebase/auth';
import { toast, ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';


const SocialLogin = () => {

    const navigate = useNavigate()
    let location = useLocation();
    let from = location.state?.from?.pathname || "/";

    const [signInWithFacebook, facebookUser, loading, facebookError] = useSignInWithFacebook(auth)
    const [signInWithGoogle, googleUser, loading1, googleError] = useSignInWithGoogle(auth)
    const [signInWithGithub, githubUser, loading2, githubError] = useSignInWithGithub(auth)

    useEffect(() => {
        if (googleUser || facebookUser || githubUser) {
            navigate(from, { replace: true });
        }
    })
    if ( googleError ) {
        toast.error(`${googleError?.message}`, {
            position: "top-center",
            autoClose: 5000,
            hideProgressBar: false,
            closeOnClick: true,
            pauseOnHover: true,
            draggable: true,
            progress: undefined,
            });
    }

    return (
        <div className='socialLogin-container'>
            <button>
                <img onClick={() => signInWithFacebook()} src={facebookLogo} alt="" />
            </button>
            <img onClick={() => signInWithGoogle()} src={googleLogo} alt="" />
            <img onClick={() => signInWithGithub()} src={githubLogo} alt="" />
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

export default SocialLogin;