import React, { useState } from 'react';
import { Fab, Input, Typography, Grid, List } from '@material-ui/core';
import ListItem from '@material-ui/core/ListItem';
import { useHistory } from 'react-router-dom';
import useStyles from './styles';

export default function Login(props) {
  const { path, handleOpen } = props;
  const classes = useStyles();
  const history = useHistory();
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const handleChangeEmail = (evt) => {
    setEmail(evt.target.value);
  };

  const handleChangePassword = (evt) => {
    setPassword(evt.target.value);
  };

  const handleLogin = (logged) => {
    if (logged) {
      history.push(path);
    } else {
      handleOpen();
    }
  };

  const handleSubmit = (evt) => {
    evt.preventDefault();
    // const { onLogin } = props;
    const login_url = `https://abi-bus-api.herokuapp.com/api/users/login?email=${email}&password=${password}`;

    fetch(login_url, { method: 'post' }).then((response) => {
      if (response.ok) {
        localStorage.setItem('user', 'ok');
        response.json().then((json) => {
          localStorage.setItem('user', JSON.stringify(json));
        });
        if (handleLogin) {
          handleLogin(true);
        }
      } else {
        if (handleLogin) {
          handleLogin(false);
        }
      }
    });
  };

  return (
    <div className={classes.list}>
      <List>
        <Grid container justify='center'>
          <form onSubmit={handleSubmit}>
            <ListItem>
              <Input
                id='input-home-01'
                className={classes.inputFields}
                type='email'
                name='email'
                placeholder='Email'
                onChange={handleChangeEmail}
              />
            </ListItem>
            <ListItem>
              <Input
                id='input-home-02'
                className={classes.inputFields}
                type='password'
                name='password'
                placeholder='Senha'
                onChange={handleChangePassword}
              />
            </ListItem>
            <ListItem alignItems='center' style={{ justifyContent: 'center' }}>
              <Fab
                variant='extended'
                size='small'
                type='submit'
                color='secondary'
                id='button-entrar-drawer'
              >
                <Typography
                  className={classes.loginLabel}
                  variant='h3'
                  color='primary'
                >
                  <div className={classes.loginLabel}>Entrar</div>
                </Typography>
              </Fab>
            </ListItem>
          </form>
        </Grid>
      </List>
    </div>
  );
}
