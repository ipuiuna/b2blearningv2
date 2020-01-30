import React, { useState } from 'react';
import useStyles from './styles';
import Cart from '../../pages/Cart';
import {
  AppBar,
  Toolbar,
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

export default function NavBarTop(props) {
  const { loading, total, getCart, changeQuantity } = props;
  const classes = useStyles();
  const [state, setState] = useState({
    right: false
  });

  // const handleLogout = () => {
  //   localStorage.removeItem('email');
  //   window.location.pathname = '/';
  // };

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
    // to close drawer
    // onClick={toggleDrawer(side, false)}
    // onKeyDown={toggleDrawer(side, false)}
    <div role='presentation'>
      <Grid container>
        <List>
          <ListItem>
            <Cart
              loading={loading}
              total={total}
              getCart={getCart}
              changeQuantity={changeQuantity}
            />
          </ListItem>

          <ListItem>
            <Grid container justify='flex-end'>
              <Typography variant='h2' color='primary'>
                {`R$ ${total.toFixed(2)}`}
              </Typography>
            </Grid>
          </ListItem>

          <ListItem alignItems='center' style={{ justifyContent: 'center' }}>
            <Fab
              disabled={total < 1}
              className={classes.finalizarButton}
              type='submit'
              style={{ paddingLeft: 30, paddingRight: 30, borderRadius: 15 }}
            >
              <Typography variant='h3' color='primary'>
                Finalizar Compra
              </Typography>
            </Fab>
          </ListItem>
        </List>
      </Grid>
    </div>
  );

  return (
    <React.Fragment>
      <Drawer
        anchor='right'
        open={state.right}
        onClose={toggleDrawer('right', false)}
      >
        <div className={classes.drawerHeader}>
          <Grid container justify='center'>
            <Typography color='textPrimary' variant='h2'>
              Carrinho
            </Typography>
          </Grid>

          <IconButton onClick={toggleDrawer('right', false)}>
            <Typography color='textPrimary'>
              <CloseIcon />
            </Typography>
          </IconButton>
        </div>
        {sideList('right')}
      </Drawer>

      <div className={classes.root}>
        <AppBar position='fixed'>
          <Container>
            <Toolbar className={classes.toolbar}>
              <NavLink
                to={'/'}
                isActive={match => {
                  return match ? match.isExact : false;
                }}
                className='nav-link'
              >
                <img className={classes.logo} alt='Ta na Mão' src={logo}></img>
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
              </Grid>
            </Toolbar>
          </Container>
        </AppBar>
      </div>
    </React.Fragment>
  );
}
