import React from 'react';
import FacebookIcon from '@material-ui/icons/Facebook';
import InstagramIcon from '@material-ui/icons/Instagram';
import WhatsAppIcon from '@material-ui/icons/WhatsApp';
import { Grid, Typography, Link, Container } from '@material-ui/core';
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
        item
        xs={12}
        container
        style={{
          backgroundColor: muitheme.palette.secondary.main
        }}
      >
        <Container>
          <Grid container justify='center'>
            <ExpandLessIcon
              className='expandless-icon'
              style={{
                color: '#fff'
              }}
            />
          </Grid>
          <Grid container justify='center'>
            <Typography color='textPrimary'>ir para o topo</Typography>
          </Grid>
        </Container>
      </Grid>
      <Grid className={classes.linksGrid} container justify='center' xs={12}>
        <Container>
          <Grid container direction='row'>
            <Grid
              container
              className={classes.linksSet}
              direction='column'
              xs={12}
              sm={3}
            >
              <Typography color='textPrimary' variant='h3'>
                INSTITUCIONAL
              </Typography>
              <Typography>
                <Link color='textPrimary'>marca</Link>
              </Typography>
              <Typography>
                <Link color='textPrimary'>quem somos</Link>
              </Typography>
              <Typography>
                <Link color='textPrimary'>fale conosco</Link>
              </Typography>
            </Grid>
            <Grid
              container
              className={classes.linksSet}
              direction='column'
              xs={12}
              sm={3}
            >
              <Typography color='textPrimary' variant='h3'>
                MINHA CONTA
              </Typography>
              <Typography>
                <Link color='textPrimary'>conta</Link>
              </Typography>
              <Typography>
                <Link color='textPrimary'>pedidos</Link>
              </Typography>
              <Typography>
                <Link color='textPrimary'>carrinho</Link>
              </Typography>
              <Typography>
                <Link color='textPrimary'>editar conta</Link>
              </Typography>
            </Grid>
            <Grid
              container
              className={classes.linksSet}
              direction='column'
              xs={12}
              sm={3}
            >
              <Typography color='textPrimary' variant='h3'>
                AJUDA
              </Typography>
              <Typography>
                <Link color='textPrimary'>pagamentos</Link>
              </Typography>
              <Typography>
                <Link color='textPrimary'>entrega</Link>
              </Typography>
              <Typography>
                <Link onClick={handleLogout} color='textPrimary'>
                  logout
                </Link>
              </Typography>
            </Grid>
            <Grid
              container
              className={classes.linksSet}
              direction='column'
              xs={12}
              sm={3}
            >
              <Typography variant='h3' color='textPrimary'>
                CONECTE-SE
              </Typography>
              <Grid container direction='row'>
                <Typography>
                  <Link
                    color='textPrimary'
                    href='https://www.instagram.com/beertechabi/'
                  >
                    <InstagramIcon />
                  </Link>
                  <Link
                    color='textPrimary'
                    href='https://www.facebook.com/beertechabi/'
                  >
                    <FacebookIcon />
                  </Link>
                  <Link color='textPrimary' href='#'>
                    <WhatsAppIcon />
                  </Link>
                </Typography>
              </Grid>
            </Grid>
          </Grid>
        </Container>
      </Grid>
      <Grid container justify='center' className={classes.brandGrid}>
        <Typography variant='body2' color='textPrimary'>
          Bud Light Team, ABInbev. 2020
        </Typography>
      </Grid>
    </Grid>
  );
}
