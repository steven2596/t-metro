import React from 'react';
import { connect } from 'react-redux';

import { signUpStart } from '../../redux/user/user.actions';

import CustomButton from '../custom-button/custom-button.component';
import CustomInput from '../custom-input/custom-input.component';

import './sign-up.styles.scss';

class SignUp extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
            displayName: '',
            email: '',
            password: '',
            confirmPassword: ''
        }
    }

    handleSubmit = (e) => {
        e.preventDefault();

        const { displayName, email, password, confirmPassword } = this.state;
        const { signUpStart } = this.props;
        if (password !== confirmPassword) {
            alert('Passwords do not match');
            return;
        }

        signUpStart({ displayName, email, password });

    }

    handleChange = (e) => {
        const { name, value } = e.target;

        this.setState({ [name]: value });
    }

    render() {
        const { mode } = this.props;

        return (
            <form className={`sign-up__form ${mode ? 'sign-up-mode' : ''}`} onSubmit={this.handleSubmit} >
                <h2 className="sign-up__title">Sign Up</h2>
                <CustomInput
                    name="displayName"
                    type="text"
                    handleChange={this.handleChange}
                    label="Username"
                    value={this.state.displayName}
                    required
                />
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
                <CustomInput
                    name="confirmPassword"
                    type="password"
                    handleChange={this.handleChange}
                    label="Confirm Password"
                    value={this.state.confirmPassword}
                    required
                />
                <CustomButton type="submit" round >Sign Up</CustomButton>

            </form>
        )
    }

}

const mapDispatchToProps = (dispatch) => ({
    signUpStart: (user) => dispatch(signUpStart(user))
})

export default connect(null, mapDispatchToProps)(SignUp);