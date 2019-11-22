import React, { Component } from 'react';
import './login.css';

class Login extends Component {
  constructor() {
    super();
    this.state = {
      email: '',
      password: ''
    };
  }

  handleChange = evt => {
    this.setState({ [evt.target.name]: evt.target.value });
  };

  handleSubmit = evt => {
    const login_url = `https://abi-bus-api.herokuapp.com/api/users/login?email=${this.state.email}&password=${this.state.password}`;
    fetch(login_url, { method: 'post' }).then(response => {
      if (response.ok) {
        localStorage.setItem('email', this.state.email);
        this.props.history.push('/home');
      } else {
        return alert(`${this.state.email} not found!`);
      }
    });
  };

  render() {
    return (
      <div className='box'>
        <h1>{this.props.title}</h1>
        <div>
          <input
            type='email'
            name='email'
            placeholder='Type your email...'
            onChange={this.handleChange}
          ></input>
          <input
            type='password'
            name='password'
            placeholder='Type your password...'
            onChange={this.handleChange}
          ></input>
          <button type='submit' onClick={this.handleSubmit}>
            Login
          </button>
        </div>
      </div>
    );
  }
}

export default Login;
