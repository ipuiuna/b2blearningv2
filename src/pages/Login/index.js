import React, { useState } from 'react';
import Login from '../../components/Login';
import { makeStyles } from '@material-ui/core/styles';
import Modal from '@material-ui/core/Modal';

const useStyles = makeStyles(theme => ({
  paper: {
    position: 'absolute',
    width: 400,
    backgroundColor: theme.palette.background.paper,
    border: '2px solid #FFF',
    padding: theme.spacing(2, 4, 3)
  }
}));

export default function LoginPage(props) {
  const classes = useStyles();
  const [open, setOpen] = useState(false);

  const handleLogin = logged => {
    if (logged) {
      props.history.push('/');
    } else {
      handleOpen();
    }
  };

  const handleOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };

  return (
    <div>
      <Modal
        id='modal-erro-login'
        aria-labelledby='simple-modal-title'
        aria-describedby='simple-modal-description'
        open={open}
        onClose={handleClose}
        style={{
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center'
        }}
      >
        <div className={classes.paper}>
          <h2 id='simple-modal-title'>Erro</h2>
          <p id='simple-modal-description'>
            Nome de usuário ou senha incorretos. Tente novamente por favor.
          </p>
        </div>
      </Modal>
      <div className='box'>
        <Login id='login-component' title={'Login'} onLogin={handleLogin} />
      </div>
    </div>
  );
}
