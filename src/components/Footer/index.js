import React from 'react';
import FacebookIcon from '@material-ui/icons/Facebook';
import InstagramIcon from '@material-ui/icons/Instagram';
import WhatsAppIcon from '@material-ui/icons/WhatsApp';
import { Grid, Typography, Link, Container } from '@material-ui/core';
import ExpandLessIcon from '@material-ui/icons/ExpandLess';
import muitheme from '../../Theme';
import useStyles from './styles';

export default function Footer(props) {
  const { logout } = props;
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
          <a href='#pageTop' style={{ textDecoration: 'none' }}>
            <Grid container justify='center'>
              <ExpandLessIcon
                id='expandless-icon'
                className={classes.expandlessIcon}
                style={{
                  color: '#fff'
                }}
              />
            </Grid>
            <Grid container justify='center'>
              <Typography id='label-top' color='textPrimary'>
                ir para o topo
              </Typography>
            </Grid>
          </a>
        </Container>
      </Grid>

      <Grid className={classes.linksGrid} container justify='center'>
        <Container>
          <Grid container>
            <Grid item className={classes.linksSet} lg={3} xs={12} md={3}>
              <Typography
                id='label-institucional'
                color='textPrimary'
                align='left'
                variant='h3'
              >
                INSTITUCIONAL
              </Typography>
              <Typography align='left'>
                <Link id='link-marca' color='textPrimary'>
                  marca
                </Link>
              </Typography>
              <Typography align='left'>
                <Link id='link-quem-somos' color='textPrimary'>
                  quem somos
                </Link>
              </Typography>
              <Typography align='left'>
                <Link id='link-fale-conosco' color='textPrimary'>
                  fale conosco
                </Link>
              </Typography>
            </Grid>
            <Grid item className={classes.linksSet} lg={3} xs={12} md={3}>
              <Typography
                id='label-minha-conta'
                color='textPrimary'
                align='left'
                variant='h3'
              >
                MINHA CONTA
              </Typography>
              <Typography align='left'>
                <Link id='link-conta' color='textPrimary'>
                  conta
                </Link>
              </Typography>
              <Typography align='left'>
                <Link id='link-pedidos' color='textPrimary'>
                  pedidos
                </Link>
              </Typography>
              <Typography align='left'>
                <Link id='link-carrinho' color='textPrimary'>
                  carrinho
                </Link>
              </Typography>
              <Typography align='left'>
                <Link id='link-editar-conta' color='textPrimary'>
                  editar conta
                </Link>
              </Typography>
            </Grid>
            <Grid item className={classes.linksSet} lg={3} xs={12} md={3}>
              <Typography
                id='label-ajuda'
                color='textPrimary'
                align='left'
                variant='h3'
              >
                AJUDA
              </Typography>
              <Typography align='left'>
                <Link id='link-pagamentos' color='textPrimary'>
                  pagamentos
                </Link>
              </Typography>
              <Typography align='left'>
                <Link id='link-entrega' color='textPrimary'>
                  entrega
                </Link>
              </Typography>
              <Typography id='link-logout' align='left'>
                {logout ? (
                  <Link onClick={handleLogout} color='textPrimary'>
                    logout
                  </Link>
                ) : null}
              </Typography>
            </Grid>
            <Grid item className={classes.linksSet} lg={3} xs={12} md={3}>
              <Typography
                id='label-conecte-se'
                variant='h3'
                align='right'
                color='textPrimary'
              >
                CONECTE-SE
              </Typography>
              <Grid container direction='row' justify='flex-end'>
                <Grid item>
                  <Link
                    id='link-insta'
                    color='textPrimary'
                    href='https://www.instagram.com/beertechabi/'
                  >
                    <InstagramIcon />
                  </Link>
                </Grid>
                <Grid item>
                  <Link
                    id='link-face'
                    color='textPrimary'
                    href='https://www.facebook.com/beertechabi/'
                  >
                    <FacebookIcon />
                  </Link>
                </Grid>
                <Grid item>
                  <Link id='link-whats' color='textPrimary' href='#'>
                    <WhatsAppIcon />
                  </Link>
                </Grid>
              </Grid>
            </Grid>
          </Grid>
        </Container>
      </Grid>

      <Grid container justify='center' className={classes.brandGrid}>
        <Typography id='label-brand' variant='body2' color='textPrimary'>
          Bud Light Team, ABInbev. 2020
        </Typography>
      </Grid>
    </Grid>
  );
}
