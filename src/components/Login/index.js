import React, { useState } from 'react';
import {
  Grid,
  AppBar,
  Toolbar,
  Typography,
  Link,
  Container,
  Fab,
  Paper,
  Input,
  IconButton
} from '@material-ui/core';
import Drawer from '@material-ui/core/Drawer';
import DoneIcon from '@material-ui/icons/Done';
import TouchAppIcon from '@material-ui/icons/TouchApp';
import MoodIcon from '@material-ui/icons/Mood';
import CloseIcon from '@material-ui/icons/Close';
import logo from '../../assets/img/logo-white.png';
import mLogo from '../../assets/img/m-logo.png';
import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import ListItemText from '@material-ui/core/ListItemText';
import muitheme from '../../Theme';
import useStyles from './styles';
import Footer from '../Footer';

export default function Login(props) {
  const classes = useStyles();
  const [open, setOpen] = useState(false);
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const handleDrawerOpen = () => {
    setOpen(true);
  };
  const handleDrawerClose = () => {
    setOpen(false);
  };

  const handleChangeEmail = evt => {
    setEmail(evt.target.value);
  };

  const handleChangePassword = evt => {
    setPassword(evt.target.value);
  };

  const handleSubmit = evt => {
    evt.preventDefault();
    const { onLogin } = props;
    const login_url = `https://abi-bus-api.herokuapp.com/api/users/login?email=${email}&password=${password}`;

    fetch(login_url, { method: 'post' }).then(response => {
      if (response.ok) {
        localStorage.setItem('user', 'ok');
        response.json().then(json => {
          localStorage.setItem('user', JSON.stringify(json));
        });
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

  const sideList = side => (
    <div
      className={classes.list}
      role='presentation'
      onClick={handleDrawerOpen}
    >
      <List>
        <Grid container justify='center'>
          <ListItem>
            <ListItemText>
              <Typography
                id='text-ola'
                className={classes.ola}
                align='center'
                color='primary'
              >
                Olá!
              </Typography>
              <Typography
                id='text-home-01'
                className={classes.loginMessage}
                align='center'
                color='primary'
              >
                Faça o login para ter acesso ao nosso catálogo de produtos.
              </Typography>
            </ListItemText>
          </ListItem>
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
                className={classes.loginButtom}
                type='submit'
                color='secondary'
              >
                <Typography
                  classeName={classes.loginLabel}
                  variant='h3'
                  color='primary'
                  id='button-entrar'
                >
                  <div
                    className={classes.loginLabel}
                    onClick={handleDrawerOpen}
                  >
                    Entrar
                  </div>
                </Typography>
              </Fab>
            </ListItem>
          </form>
        </Grid>
      </List>
    </div>
  );

  return (
    <div className='App'>
      <Drawer
        variant='persistent'
        anchor='right'
        open={open}
        classes={{ paper: classes.drawerPaper }}
      >
        <AppBar className={classes.drawerHeader}>
          <Grid container direction='row' alignItems='center'>
            <Grid item style={{ flexGrow: 1 }}>
              <img alt='Tá na mão logo' className={classes.mLogo} src={mLogo} />
            </Grid>
            <Grid item className={classes.closeIconContainer}>
              <IconButton
                className={classes.closeIcon}
                onClick={handleDrawerClose}
              >
                <CloseIcon />
              </IconButton>
            </Grid>
          </Grid>
        </AppBar>

        {sideList('right')}
      </Drawer>

      <Grid item>
        <AppBar
          id='pageTop'
          bgcolor='primary.main'
          style={{
            display: 'flex',
            flexDirection: 'row',
            alignItems: 'center'
          }}
          position='static'
        >
          <Container>
            <Toolbar style={{ justifyContent: 'flex-end', flexGrow: 1 }}>
              {!open ? (
                <Fab
                  variant='extended'
                  size='small'
                  className={classes.loginButtom}
                  color='secondary'
                  onClick={handleDrawerOpen}
                >
                  <Typography color='primary' variant='h3'>
                    <div className={classes.loginLabel}>Entrar</div>
                  </Typography>
                </Fab>
              ) : null}
            </Toolbar>
          </Container>
        </AppBar>
      </Grid>
      <Grid
        item
        style={{
          backgroundColor: muitheme.palette.primary.main,
          paddingTop: 25
        }}
      >
        <Container>
          <Grid className='landing-page' container justify='flex-start'>
            <Link edge='start' aria-label='inicio'>
              <img alt='ta na mao logo' src={logo} />
            </Link>
          </Grid>
          <Typography
            className={classes.inicialContent}
            variant='h2'
            align='left'
            color='textPrimary'
          >
            E aí, bora fazer
          </Typography>
          <Typography
            className={classes.inicialContent}
            variant='h2'
            align='left'
            color='textPrimary'
          >
            um churras?
          </Typography>
          <Typography variant='subtitle1' align='left' color='textPrimary'>
            O Tá na Mão é uma plataforma que
          </Typography>
          <Typography variant='subtitle1' align='left' color='textPrimary'>
            reune tudo para o seu churrasco.
          </Typography>
          <Grid
            container
            justify='center'
            spacing={4}
            style={{ paddingTop: 50, paddingBottom: 50 }}
          >
            <Grid item>
              <Paper className={classes.paper}>
                <DoneIcon className={classes.landingIcons} />
                <Typography
                  className={classes.landingIconsText}
                  variant='h5'
                  color='primary'
                >
                  VALIDE SEU CEP
                </Typography>
                <Typography color='primary'>
                  Antes de selecionar suas
                </Typography>
                <Typography color='primary'>compras, recomendamos</Typography>
                <Typography color='primary'>
                  que verifique se entregamos
                </Typography>
                <Typography color='primary'>na sua casa</Typography>
              </Paper>
            </Grid>
            <Grid item>
              <Paper className={classes.paper}>
                <TouchAppIcon
                  className={`landing-icons ${classes.landingIcons}`}
                />
                <Typography
                  className={classes.landingIconsText}
                  variant='h5'
                  color='primary'
                >
                  ESCOLHA SEUS PRODUTOS
                </Typography>
                <Typography color='primary'>adicione seus produtos</Typography>
                <Typography color='primary'>
                  preferidos no seu carrinho e
                </Typography>
                <Typography color='primary'>finalize sua compra</Typography>
              </Paper>
            </Grid>
            <Grid item>
              <Paper className={classes.paper}>
                <MoodIcon className={`landing-icons ${classes.landingIcons}`} />
                <Typography
                  className={classes.landingIconsText}
                  variant='h5'
                  color='primary'
                >
                  RECEBA EM CASA
                </Typography>
                <Typography color='primary'>acompanhe seu pedido em</Typography>
                <Typography color='primary'>
                  tempo real e receba seus
                </Typography>
                <Typography color='primary'>produtos sem stress ;)</Typography>
              </Paper>
            </Grid>
          </Grid>
        </Container>
      </Grid>
      <Footer logout={false} />
    </div>
  );
}
