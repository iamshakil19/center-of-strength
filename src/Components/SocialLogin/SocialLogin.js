import React from 'react';
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

    const [signInWithFacebook, FacebookUser, loading, facebookError] = useSignInWithFacebook(auth)
    const [signInWithGoogle, googleUser, loading1, googleError] = useSignInWithGoogle(auth)
    const [signInWithGithub, githubUser, loading2, githubError] = useSignInWithGithub(auth)

if(googleUser){
    navigate(from, { replace: true });
}

    return (
        <div className='socialLogin-container'>
            <button>
                <img onClick={() => signInWithFacebook()} src={facebookLogo} alt="" />
            </button>
            <img onClick={() => signInWithGoogle()} src={googleLogo} alt="" />
            <img onClick={() => signInWithGithub()} src={githubLogo} alt="" />
        </div>
    );
};

export default SocialLogin;