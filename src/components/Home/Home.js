import React, { Component } from 'react';

class Home extends Component {
  handleLogout = () => {
    localStorage.removeItem('email');
    this.props.history.push('/login');
  };

  render() {
    const email = localStorage.getItem('email');
    return (
      <div>
        <h1>{`Bem vindo: ${email}`}</h1>
        <input type='submit' onClick={this.handleLogout} value='Logout'></input>
      </div>
    );
  }
}
export default Home;
