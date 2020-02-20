import React, { useState } from 'react';
import useStyles from './styles';
import Cart from '../../pages/Cart';
import Badge from '@material-ui/core/Badge';
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
import logo from '../../assets/img/logo-white.png';

export default function NavBarTop(props) {
  const { loading, total, getCart, changeQuantity, showCart } = props;
  const classes = useStyles();
  const [state, setState] = useState({
    right: false
  });

  const toggleDrawer = (side, open) => event => {
    if (
      event.type === 'keydown' &&
      (event.key === 'Tab' || event.key === 'Shift')
    ) {
      return;
    }

    setState({ ...state, [side]: open });
  };

  const sideList = side =>
    sideListContent(loading, total, getCart, changeQuantity, classes);

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
              <div>
                {showCart ? (
                  <Grid
                    container
                    direction='row'
                    justify='flex-end'
                    alignItems='center'
                    spacing={2}
                  >
                    <Badge
                      style={{ cursor: 'pointer' }}
                      badgeContent={getCart().length}
                      max={99}
                      color='error'
                    >
                      <ShoppingCartIcon
                        style={{ cursor: 'pointer' }}
                        onClick={toggleDrawer('right', true)}
                      ></ShoppingCartIcon>
                    </Badge>
                  </Grid>
                ) : null}
              </div>
            </Toolbar>
          </Container>
        </AppBar>
      </div>
    </React.Fragment>
  );
}

function sideListContent(loading, total, getCart, changeQuantity, classes) {
  return (
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
            {getCart() < 1 ? (
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
            ) : (
              <NavLink style={{ textDecoration: 'none' }} to='/checkout'>
                <Fab
                  disabled={total < 1}
                  className={classes.finalizarButton}
                  type='submit'
                  style={{
                    paddingLeft: 30,
                    paddingRight: 30,
                    borderRadius: 15
                  }}
                >
                  <Typography variant='h3' color='primary'>
                    Finalizar Compra
                  </Typography>
                </Fab>
              </NavLink>
            )}
          </ListItem>
        </List>
      </Grid>
    </div>
  );
}
