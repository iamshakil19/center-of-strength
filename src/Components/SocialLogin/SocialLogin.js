import React, { useEffect } from 'react';
import facebookLogo from '../../Images/facebook.png'
import googleLogo from '../../Images/google.png'
import githubLogo from '../../Images/github.png'
import { useSignInWithFacebook, useSignInWithGithub, useSignInWithGoogle } from 'react-firebase-hooks/auth';
import './SocialLogin.css'
import auth from '../../firebase.init';
import { useLocation, useNavigate } from 'react-router-dom';


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

    return (
        <div>
            {
                 facebookError && <p className='text-red-500 mt-1 text-sm text-center'> {facebookError.message} </p>
            }
            {
                 googleError && <p className='text-red-500 mt-1 text-sm text-center'> {googleError.message} </p>
            }
            {
                 githubError && <p className='text-red-500 mt-1 text-sm text-center'> {githubError.message} </p>
            }
            <div className='socialLogin-container'>
                <button>
                    <img onClick={() => signInWithFacebook()} src={facebookLogo} alt="" />
                </button>
                <img onClick={() => signInWithGoogle()} src={googleLogo} alt="" />
                <img onClick={() => signInWithGithub()} src={githubLogo} alt="" />
            </div>
        </div>
    );
};

export default SocialLogin;