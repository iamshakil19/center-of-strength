import React from 'react';
import facebookLogo from '../../Images/facebook.png'
import googleLogo from '../../Images/google.png'
import githubLogo from '../../Images/github.png'
import { useSignInWithFacebook, useSignInWithGithub, useSignInWithGoogle } from 'react-firebase-hooks/auth';
import './SocialLogin.css'
import auth from '../../firebase.init';


const SocialLogin = () => {

    const [signInWithFacebook, FacebookUser, loading, facebookError] = useSignInWithFacebook(auth)
    const [signInWithGoogle, googleUser, loading1, googleError] = useSignInWithGoogle(auth)
    const [signInWithGithub, githubUser, loading2, githubError] = useSignInWithGithub(auth)

    return (
        <div className='socialLogin-container'>
            {

            }
            <img onClick={() => signInWithFacebook()} src={facebookLogo} alt="" />
            <img onClick={() => signInWithGoogle()} src={googleLogo} alt="" />
            <img onClick={() => signInWithGithub()} src={githubLogo} alt="" />
        </div>
    );
};

export default SocialLogin;