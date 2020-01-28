import React, { useState } from 'react';
import theme from '../../Theme';
import { makeStyles } from '@material-ui/core/styles';
import Cart from '../../pages/Cart';
import {
  AppBar,
  Toolbar,
  Button,
  ThemeProvider,
  Box,
  Grid,
  Drawer,
  Typography,
  Container,
  List,
  ListItem,
  Fab,
  IconButton
} from '@material-ui/core';
import ShoppingCartIcon from '@material-ui/icons/ShoppingCart';
import CloseIcon from '@material-ui/icons/Close';
import { NavLink } from 'react-router-dom';
import logo from '../../img/logo-white.png';
import PropTypes from 'prop-types';
import './style.scss';

const useStyles = makeStyles(theme => ({
  drawerHeader: {
    display: 'flex',
    alignItems: 'center',
    padding: theme.spacing(0, 1),
    ...theme.mixins.toolbar,
    justifyContent: 'flex-end',
    backgroundColor: theme.palette.primary.main
  },
  list: {
    width: 300
  },
  fullList: {
    width: 'auto'
  },
  root: {
    flexGrow: 1
  },
  logo: {
    height: '43px'
  },
  toolbar: {
    justifyContent: 'space-between'
  },
  total: {
    justifyContent: 'center',
    padding: '0px'
  },
  buttonMargin: {
    marginRight: '10px'
  }
}));

export default function NavBarTop(props) {
  const classes = useStyles();
  const [state, setState] = useState({
    right: false
  });

  const handleLogout = () => {
    localStorage.removeItem('email');
    window.location.pathname = '/';
  };

  const toggleDrawer = (side, open) => event => {
    if (
      event.type === 'keydown' &&
      (event.key === 'Tab' || event.key === 'Shift')
    ) {
      return;
    }

    setState({ ...state, [side]: open });
  };

  const sideList = side => (
    <div
      className={classes.fullList}
      role='presentation'
      onClick={toggleDrawer(side, false)}
      onKeyDown={toggleDrawer(side, false)}
    >
      <List>
        <ListItem>
          <Cart />
        </ListItem>

        <ListItem alignItems='center' style={{ justifyContent: 'center' }}>
          <Fab
            variant='extended'
            size='small'
            className='login-buton login-label'
            type='button'
          >
            Finalizar Compra
          </Fab>
        </ListItem>
      </List>
    </div>
  );

  return (
    <React.Fragment>
      <ThemeProvider theme={theme}>
        <Drawer
          anchor='right'
          open={state.right}
          onClose={toggleDrawer('right', false)}
        >
          <div className={classes.drawerHeader}>
            <Typography color='textPrimary' variant='h2'>
              Carrinho
            </Typography>
            <IconButton>
              <Typography
                color='textPrimary'
                onClick={toggleDrawer('right', false)}
              >
                <CloseIcon />
              </Typography>
            </IconButton>
          </div>
          {sideList('right')}
        </Drawer>

        <Container maxWidth='sm'>
          <div className={classes.root}>
            <AppBar position='fixed'>
              <Toolbar className={classes.toolbar}>
                <NavLink
                  to={'/'}
                  isActive={match => {
                    return match ? match.isExact : false;
                  }}
                  className='nav-link'
                >
                  <img
                    className={classes.logo}
                    alt='Ta na Mão'
                    src={logo}
                  ></img>
                </NavLink>

                <Grid
                  container
                  direction='row'
                  justify='flex-end'
                  alignItems='center'
                  spacing={2}
                >
                  <ShoppingCartIcon
                    onClick={toggleDrawer('right', true)}
                  ></ShoppingCartIcon>

                  <NavLink to={'/cart'} className='nav-link'>
                    <Button
                      className={classes.buttonMargin}
                      variant='outlined'
                      color='primary.dark'
                    >
                      <Typography component='div'>
                        <Box color='primary.contrastText'>Cart</Box>
                      </Typography>
                    </Button>
                  </NavLink>

                  <Button
                    className={classes.buttonMargin}
                    variant='outlined'
                    color='primary.dark'
                    onClick={handleLogout}
                  >
                    <Typography component='div'>
                      <Box color='primary.contrastText'>Logout</Box>
                    </Typography>
                  </Button>
                  <Button variant='outlined' color='primary.dark'>
                    <Typography component='div'>
                      <Box color='primary.contrastText'>{`$ ${props.totals.toFixed(
                        2
                      )}`}</Box>
                    </Typography>
                  </Button>
                </Grid>
              </Toolbar>
            </AppBar>
          </div>
        </Container>
      </ThemeProvider>
    </React.Fragment>
  );
}

NavBarTop.propTypes = {
  classes: PropTypes.object.isRequired
};
