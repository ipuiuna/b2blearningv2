import React from 'react';
import { Grid, Typography, Link } from '@material-ui/core';
import ExpandLessIcon from '@material-ui/icons/ExpandLess';
import muitheme from '../../Theme';
import useStyles from './styles';

export default function Footer() {
  const classes = useStyles();
  const handleLogout = () => {
    localStorage.removeItem('user');
    window.location.pathname = '/';
  };
  return (
    <Grid container className={classes.footerBottom}>
      <Grid
        container
        style={{
          backgroundColor: muitheme.palette.secondary.main
        }}
      >
        <Grid item container justify='center'>
          <ExpandLessIcon
            className='expandless-icon'
            style={{
              color: '#fff'
            }}
          />
        </Grid>
        <Grid item container justify='center'>
          <Typography color='textPrimary'>ir para o topo</Typography>
        </Grid>
      </Grid>
      <Grid
        className={classes.linksGrid}
        container
        direction='row'
        justify='center'
      >
        <Grid item className={classes.linksGridItem}>
          <Grid container direction='column'>
            <Typography color='textPrimary' variant='h6'>
              INSTITUCIONAL
            </Typography>
            <Link color='textPrimary'>marca</Link>
            <Link color='textPrimary'>quem somos</Link>
            <Link color='textPrimary'>fale conosco</Link>
          </Grid>
        </Grid>
        <Grid item className={classes.linksGridItem}>
          <Grid container direction='column'>
            <Typography color='textPrimary' variant='h6'>
              MINHA CONTA
            </Typography>
            <Link color='textPrimary'>conta</Link>
            <Link color='textPrimary'>pedidos</Link>
            <Link color='textPrimary'>carrinho</Link>
            <Link color='textPrimary'>editar conta</Link>
          </Grid>
        </Grid>
        <Grid item>
          <Grid container direction='column'>
            <Typography color='textPrimary' variant='h6'>
              AJUDA
            </Typography>
            <Link color='textPrimary'>pagamentos</Link>
            <Link color='textPrimary'>entrega</Link>
            <Link onClick={handleLogout} color='textPrimary'>
              logout
            </Link>
          </Grid>
        </Grid>
      </Grid>
      <Grid container justify='center' className={classes.brandGrid}>
        <Typography variant='body2' color='textPrimary'>
          Bud Light Team, ABInbev. 2020
        </Typography>
      </Grid>
    </Grid>
  );
}
