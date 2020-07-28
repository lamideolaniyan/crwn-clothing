import React from 'react';

import './sign-in.styles.scss';

import FormInput from '../form-input/form-input.component';
import CustomButton from '../custom-button/custom-button.component';

class SignIn extends React.Component {
  state = {
    email: '',
    password: '',
  };

  handleSubmit = e => {
    e.preventDefault();
    this.setState({ email: '', password: '' });
  };

  handleChange = e => {
    const { name, value } = e.target;
    this.setState({ [name]: value });
  };

  render() {
    return (
      <div className='sign-in'>
        <h2 className='title'>I already have an account</h2>
        <span>Sign in with your email and password</span>

        <form onSubmit={this.handleSubmit}>
          <FormInput type='email' name='email' value={this.state.email} required handleChange={this.handleChange} label='Email' />
          <FormInput type='password' name='password' value={this.state.password} required handleChange={this.handleChange} label='Password' />

          <CustomButton type='submit'>Sign in</CustomButton>
        </form>
      </div>
    );
  }
}

export default SignIn;