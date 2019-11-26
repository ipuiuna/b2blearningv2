import React, { Component } from 'react';

class Login extends Component {
  state = {
    email: '',
    password: ''
  };

  handleChange = evt => {
    this.setState({ [evt.target.name]: evt.target.value });
  };

  handleSubmit = evt => {
    const { onLogin } = this.props;
    const login_url = `https://abi-bus-api.herokuapp.com/api/users/login?email=${this.state.email}&password=${this.state.password}`;
    fetch(login_url, { method: 'post' }).then(response => {
      if (response.ok) {
        localStorage.setItem('email', this.state.email);
        if (onLogin) {
          onLogin(true);
        }
      } else {
        if (onLogin) {
          onLogin(false);
        }
      }
    });
  };

  render() {
    const title = this.props.title || 'LOGIN';
    return (
      <div>
        <h1>{title}</h1>
        <input
          type='email'
          name='email'
          placeholder='Type your email...'
          onChange={this.handleChange}
        />
        <input
          type='password'
          name='password'
          placeholder='Type your password...'
          onChange={this.handleChange}
        />
        <button type='button' onClick={this.handleSubmit}>
          Login
        </button>
      </div>
    );
  }
}

export default Login;
