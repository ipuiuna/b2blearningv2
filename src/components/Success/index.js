import React from 'react';
import useStyles from './styles';
import { Typography, Button, Grid } from '@material-ui/core';
import { NavLink } from 'react-router-dom';
import cheers from '../../assets/img/cheers.png';

const Success = () => {
  const classes = useStyles();
  return (
    <Grid container alignItems='center' direction='column'>
      <Grid item>
        <Typography id='label-sucess' className={classes.successMessage}>
          PAGAMENTO EFETUADO COM SUCESSO!
        </Typography>
      </Grid>
      <Grid item className={classes.successImg}>
        <img
          id='img-cheers'
          className={classes.img}
          alt='cheers'
          src={cheers}
        />
      </Grid>
      <Grid item>
        <Typography id='label-wait' className={classes.goodByeMessage}>
          Agora é só esperar que já já estamos ai ;)
        </Typography>
      </Grid>
      <Grid item>
        <NavLink style={{ textDecoration: 'none' }} to='/'>
          <Button
            id='button-new-order'
            variant='contained'
            type='submit'
            color='secondary'
          >
            <Typography
              id='label-button-new-order'
              variant='h3'
              color='primary'
            >
              Novo pedido
            </Typography>
          </Button>
        </NavLink>
      </Grid>
    </Grid>
  );
};

export default Success;
