import React from 'react';
import { connect } from 'react-redux';
import { createStructuredSelector } from 'reselect';

import { emailSignInStart, googleSignInStart } from '../../redux/user/user.actions';
import { selectCurrentUser, selectAuthError } from '../../redux/user/user.selectors';

import CustomButton from '../custom-button/custom-button.component';
import CustomInput from '../custom-input/custom-input.component';

import { ReactComponent as GoogleLogo } from '../../assets/icons/google-icon.svg';

import './sign-in.styles.scss';

class SignIn extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
            email: '',
            password: ''
        }
    }


    handleSubmit = (e) => {
        e.preventDefault();

        const { emailSignInStart } = this.props;
        const { email, password } = this.state;
        emailSignInStart(email, password);
    }

    handleChange = (e) => {
        const { name, value } = e.target;

        this.setState({ [name]: value });
    }

    render() {
        const { mode, googleSignInStart, authError } = this.props;

        return (
            <form className={`sign-in__form ${mode ? 'sign-up-mode' : ''}`} onSubmit={this.handleSubmit} >
                <h2 className="sign-in__title">Sign In</h2>
                <CustomInput
                    name="email"
                    type="email"
                    handleChange={this.handleChange}
                    label="Email"
                    value={this.state.email}
                    required
                />
                <CustomInput
                    name="password"
                    type="password"
                    handleChange={this.handleChange}
                    label="Password"
                    value={this.state.password}
                    required
                />
                <span className={`sign-in__error-msg ${authError ? 'error-active' : ''}`} >
                    Invalid Email or Password! Please check again.
                </span>


                <CustomButton type="submit" round >Sign In</CustomButton>
                <figure className="sign-in__separation-line" ></figure>
                <CustomButton type="button" round googleButton onClick={googleSignInStart}>
                    <div className="sign-in__google-button" >
                        <GoogleLogo className="sign-in__google-icon" />
                        <span className="sign-in__google-text" >Sign In with Google</span>
                    </div>

                </CustomButton>



            </form>
        )
    }

}

const mapStateToProps = createStructuredSelector({
    currentUser: selectCurrentUser,
    authError: selectAuthError
});

const mapDispatchToProps = (dispatch) => ({
    emailSignInStart: (email, password) => dispatch(emailSignInStart({ email, password })),
    googleSignInStart: () => dispatch(googleSignInStart())
});

export default connect(mapStateToProps, mapDispatchToProps)(SignIn);