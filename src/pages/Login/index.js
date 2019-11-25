import React, { Component } from 'react';
import './style.css';
import Login from '../../components/Login';

class LoginPage extends Component {
  state = {
    error: false
  };
  handleLogin = logged => {
    if (logged) {
      this.props.history.push('/');
    } else {
      this.setState({ error: true });
    }
  };

  render() {
    return (
      <div className='box'>
        {this.state.error && <div>Ocorreu um erro no login</div>}
        <Login title={'Login'} onLogin={this.handleLogin} />
      </div>
    );
  }
}

export default LoginPage;
