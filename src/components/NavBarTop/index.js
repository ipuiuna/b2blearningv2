import React, { Component } from 'react';
import theme from '../../Theme';
import { withStyles } from '@material-ui/core/styles';
import {
  AppBar,
  Toolbar,
  Button,
  Container,
  Grid,
  ThemeProvider,
  Typography,
  Box
} from '@material-ui/core';
import { NavLink } from 'react-router-dom';
import logo from '../../img/logo-white.png';
import PropTypes from 'prop-types';
import './style.scss';

const styles = theme => ({
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
});

class NavBarTop extends Component {
  constructor(props) {
    super(props);
    this.state = {
      totals: 0
    };
  }

  handleLogout = () => {
    localStorage.removeItem('email');
    window.location.pathname = '/';
  };

  render() {
    const { classes } = this.props;
    return (
      <React.Fragment>
        <ThemeProvider theme={theme}>
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
                      onClick={this.handleLogout}
                    >
                      <Typography component='div'>
                        <Box color='primary.contrastText'>Logout</Box>
                      </Typography>
                    </Button>
                    <Button variant='outlined' color='primary.dark'>
                      <Typography component='div'>
                        <Box color='primary.contrastText'>{`$ ${this.props.totals.toFixed(
                          2
                        )}`}</Box>
                      </Typography>
                    </Button>
                  </Grid>
                </Toolbar>
              </AppBar>
            </div>

            {/* <Navbar className='navbar navbar-expand-lg navbar-dark bg-dark fixed-top'>
          <div className='container'>
            <NavLink
              to={'/'}
              isActive={match => {
                return match ? match.isExact : false;
              }}
              className='nav-link navbar-brand'
            >
              <img className='logo' alt='Ta na Mão' src={logo}></img>
            </NavLink>
            <div className='collapse navbar-collapse' id='navbarResponsive'>
              <ul className='navbar-nav ml-auto'>
                <li className='nav-item'>
                  <NavLink
                    to={'/cart'}
                    isActive={match => {
                      return match ? match.isExact : false;
                    }}
                    className='nav-link'
                  >
                    Cart
                  </NavLink>
                </li>

                <li className='nav-item'>
                  <a className='nav-link' onClick={this.handleLogout} href='#'>
                    Logout
                  </a>
                </li>
              </ul>
              <span className='navbar-text'>{`$ ${this.props.totals.toFixed(
                2
              )}`}</span>
            </div>
          </div>
        </Navbar> */}
          </Container>
        </ThemeProvider>
      </React.Fragment>
    );
  }
}

NavBarTop.propTypes = {
  classes: PropTypes.object.isRequired
};

export default withStyles(styles)(NavBarTop);
