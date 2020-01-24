import React, { useState } from 'react';
import {
  Grid,
  ThemeProvider,
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
import ExpandLessIcon from '@material-ui/icons/ExpandLess';
import CloseIcon from '@material-ui/icons/Close';
import { makeStyles } from '@material-ui/core/styles';
import logo from '../../assets/img/logo-white.png';
import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import ListItemText from '@material-ui/core/ListItemText';
import muitheme from '../../Theme';
import './style.css';

const drawerWidth = 250;

const useStyles = makeStyles(theme => ({
  paper: {
    height: 312,
    width: 300,
    marginTop: 24,
    marginBottom: 24,
    backgroundColor: muitheme.palette.secondary.main,
    borderRadius: 16
  },
  drawer: {
    width: drawerWidth,
    flexShrink: 0
  },
  drawerPaper: {
    width: drawerWidth
  },
  drawerHeader: {
    display: 'flex',
    alignItems: 'center',
    padding: theme.spacing(0, 1),
    ...theme.mixins.toolbar,
    justifyContent: 'flex-start'
  },
  content: {
    flexGrow: 1,
    padding: theme.spacing(3),
    transition: theme.transitions.create('margin', {
      easing: theme.transitions.easing.sharp,
      duration: theme.transitions.duration.leavingScreen
    }),
    marginRight: -drawerWidth
  },
  contentShift: {
    transition: theme.transitions.create('margin', {
      easing: theme.transitions.easing.easeOut,
      duration: theme.transitions.duration.enteringScreen
    }),
    marginRight: 0
  },
  inicialContent: {
    marginLeft: 50
  }
}));

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
    console.log(email);
  };

  const handleChangePassword = evt => {
    setPassword(evt.target.value);
    console.log(password);
  };

  const handleSubmit = evt => {
    evt.preventDefault();
    const { onLogin } = props;
    const login_url = `https://abi-bus-api.herokuapp.com/api/users/login?email=${email}&password=${password}`;

    fetch(login_url, { method: 'post' }).then(response => {
      if (response.ok) {
        localStorage.setItem('email', email);
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
        <ListItem>
          <ListItemText>
            <Typography variant='h5' align='center' color='textSecondary'>
              Olá!
            </Typography>
          </ListItemText>
        </ListItem>
        <form onSubmit={handleSubmit}>
          <ListItem>
            <Input
              type='email'
              name='email'
              label='Usuário'
              onChange={handleChangeEmail}
            />
          </ListItem>
          <ListItem>
            <Input
              type='password'
              name='password'
              label='Senha'
              onChange={handleChangePassword}
            />
          </ListItem>
          <ListItem alignItems='center' style={{ justifyContent: 'center' }}>
            <Fab
              variant='extended'
              size='small'
              //className='login-label'
              className='login-buton login-label'
              type='submit'
            >
              Entrar
            </Fab>
          </ListItem>
        </form>
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
        <div className={classes.drawerHeader}>
          <IconButton onClick={handleDrawerClose}>
            <CloseIcon />
          </IconButton>
        </div>
        {sideList('right')}
      </Drawer>
      <ThemeProvider theme={muitheme}>
        <Grid item>
          <AppBar
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
                <Fab variant='extended' size='small' className='login-buton'>
                  <div className='login-label' onClick={handleDrawerOpen}>
                    Entrar
                  </div>
                </Fab>
              </Toolbar>
            </Container>
          </AppBar>
        </Grid>
        <Grid item>
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
            <Grid container justify='center' spacing={4}>
              <Grid item>
                <Paper className={classes.paper}>
                  <DoneIcon className='landing-icons' />
                  <Typography variant='h5'>Valide seu cep</Typography>
                  <Typography>Antes de selecionar suas</Typography>
                  <Typography>compras, recomendamos</Typography>
                  <Typography>que verifique se entregamos</Typography>
                  <Typography>na sua casa</Typography>
                </Paper>
              </Grid>
              <Grid item>
                <Paper className={classes.paper}>
                  <TouchAppIcon className='landing-icons' />
                  <Typography variant='h5'>Escolha seus produtos</Typography>
                  <Typography>adicione seus produtos</Typography>
                  <Typography>preferidos no seu carrinho e</Typography>
                  <Typography>finalize sua compra</Typography>
                </Paper>
              </Grid>
              <Grid item>
                <Paper className={classes.paper}>
                  <MoodIcon className='landing-icons' />
                  <Typography variant='h5'>Receba em casa</Typography>
                  <Typography>acompanhe seu pedido em</Typography>
                  <Typography>tempo real e receba seus</Typography>
                  <Typography>produtos sem stress ;)</Typography>
                </Paper>
              </Grid>
            </Grid>
          </Container>
        </Grid>
        <Grid
          item
          style={{
            backgroundColor: muitheme.palette.secondary.main,
            height: 64
          }}
        >
          <Grid item>
            <ExpandLessIcon
              className='expandless-icon'
              style={{
                color: '#fff'
              }}
            />
          </Grid>
          <Grid item>
            <Typography color='textPrimary'>ir para o topo</Typography>
          </Grid>
        </Grid>

        <Grid
          style={{ backgroundColor: '#fff', marginTop: 0, marginBottom: 8 }}
          container
          direction='row'
          justify='center'
          spacing={10}
        >
          <Grid item>
            <Grid container direction='column'>
              <Typography variant='h6'>INSTITUCIONAL</Typography>
              <Link>marca</Link>
              <Link>quem somos</Link>
              <Link>fale conosco</Link>
            </Grid>
          </Grid>
          <Grid item>
            <Grid container direction='column'>
              <Typography variant='h6'>MINHA CONTA</Typography>
              <Link>conta</Link>
              <Link>pedidos</Link>
              <Link>carrinho</Link>
              <Link>editar conta</Link>
            </Grid>
          </Grid>
          <Grid item>
            <Grid container direction='column'>
              <Typography variant='h6'>AJUDA</Typography>
              <Link>pagamentos</Link>
              <Link>entrega</Link>
            </Grid>
          </Grid>
        </Grid>
        <Grid
          style={{
            backgroundColor: muitheme.palette.primary.main,
            paddingTop: 8,
            paddingBottom: 8,
            bottom: 0
          }}
        >
          <Typography variant='body2' color='textPrimary'>
            Bud Light Team, ABInbev. 2020
          </Typography>
        </Grid>
      </ThemeProvider>
    </div>

    // <div>
    //   <form onSubmit={this.handleSubmit}>
    //     <h1>{title}</h1>
    //     <input
    //       type='email'
    //       name='email'
    //       placeholder='Type your email...'
    //       onChange={this.handleChange}
    //       required
    //     />
    //     <input
    //       type='password'
    //       name='password'
    //       placeholder='Type your password...'
    //       onChange={this.handleChange}
    //       required
    //     />
    //     <button type='submit'>Login</button>
    //   </form>
    // </div>
  );
}
