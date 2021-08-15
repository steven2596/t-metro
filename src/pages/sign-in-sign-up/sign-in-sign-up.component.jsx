import React, { useState } from 'react';
import SignIn from '../../components/sign-in/sign-in.component';
import SignUp from '../../components/sign-up/sign-up.component';
import Button from '../../components/button/button.component';

import './sign-in-sign-up.styles.scss';
import { ReactComponent as SignUpFigure } from '../../assets/icons/sign-up.svg';
import { ReactComponent as SignInFigure } from '../../assets/icons/sign-in.svg';
import { ReactComponent as Logo } from '../../assets/icons/logo.svg';


const SignInSignUp = () => {
    const [mode, setMode] = useState(false);


    return (
        <div className={`sign-in-sign-up__page ${mode ? 'sign-up-mode' : ''}`}>
            <a href="/">
                <Logo className="home-logo" />
            </a>'
            <div className="home-button" >
                <a href="/">
                    <Button square ><span>&#8618;</span> Back to Homepage</Button>
                </a>
            </div>

            <div className="sign-in-sign-up__container" >
                <SignIn mode={mode} />
                <SignUp mode={mode} />
            </div>

            <div className={`sign-in-sign-up__panels ${mode} ? 'sign-up-mode' : ''}`}>

                <div className="panel panel--left">
                    <div className="panel__content panel__content--left" >
                        <h4 className="panel__heading">New Here?</h4>
                        <p className="panel__text">
                            Don't have an account? Sign up now. Enter your personal details and get started
                        </p>
                        <Button primary onClick={() => setMode(true)} >SIGN UP</Button>
                    </div>
                    <SignUpFigure className="panel__figure panel__figure--left" />

                </div>

                <div className="panel panel--right">
                    <div className="panel__content panel__content--right" >
                        <h4 className="panel__heading">Welcome Back!</h4>
                        <p className="panel__text">
                            Sign in with your account or sign in with Google
                        </p>
                        <Button primary onClick={() => setMode(false)} >SIGN IN</Button>
                    </div>
                    <SignInFigure className="panel__figure panel__figure--right" />
                </div>

            </div>

        </div>
    );
}

export default SignInSignUp;