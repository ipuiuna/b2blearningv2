import React from 'react';
import { TextField, Grid, Box, FormControl } from '@material-ui/core';
import useStyles from './styles';

export default function Step2(props) {
  const { setNumero, setRua, setCidade } = props;
  const classes = useStyles();

  const handleChangeRua = evt => {
    setRua(evt.target.value);
  };

  const handleChangeNumero = evt => {
    setNumero(evt.target.value);
  };

  const handleChangeCidade = evt => {
    setCidade(evt.target.value);
  };

  return (
    <Box
      boxShadow={2}
      style={{ padding: '0 10%', backgroundColor: 'rgba(229, 229, 229, 0.35)' }}
    >
      <Grid
        direction='column'
        container
        style={{
          paddingBottom: '50px'
        }}
      >
        <Grid container direction='row'>
          <Grid item xs={12}>
            <FormControl fullWidth>
              <TextField
                id='name'
                className={classes.textField}
                label='Nome completo'
                color='primary'
              />
            </FormControl>
          </Grid>
          <Grid item sm={6} xs={12}>
            <FormControl fullWidth>
              <TextField
                className={classes.textField}
                label='Rua'
                id='address'
                onChange={handleChangeRua}
              />
            </FormControl>
          </Grid>
          <Grid item sm={2} xs={12}>
            <FormControl fullWidth>
              <TextField
                className={classes.textField}
                label='Número'
                id='number'
                onChange={handleChangeNumero}
              />
            </FormControl>
          </Grid>
          <Grid item sm={4} xs={12}>
            <FormControl fullWidth>
              <TextField
                className={classes.textField}
                label='Bairro'
                id='bairro'
              />
            </FormControl>
          </Grid>
          <Grid item sm={6} xs={12}>
            <FormControl fullWidth>
              <TextField
                className={classes.textField}
                label='Cidade'
                id='city'
                onChange={handleChangeCidade}
              />
            </FormControl>
          </Grid>
          <Grid item sm={3} xs={12}>
            <FormControl>
              <TextField
                className={classes.textField}
                label='Estado'
                id='state'
              />
            </FormControl>
          </Grid>
          <Grid item sm={3} xs={12}>
            <FormControl>
              <TextField className={classes.textField} label='Cep' id='cep' />
            </FormControl>
          </Grid>
        </Grid>
      </Grid>
    </Box>
  );
}
