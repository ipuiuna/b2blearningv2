import React from 'react';
import { TextField, Grid, Box, FormControl } from '@material-ui/core';
import useStyles from './style';

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
        <Grid item xs={12} sm>
          <FormControl fullWidth>
            <TextField
              id='name'
              label='Nome completo'
              className={classes.textField}
              color='primary'
            />
          </FormControl>
        </Grid>
        <Grid container direction='row'>
          <Grid item xs={6}>
            <FormControl fullWidth>
              <TextField
                label='Rua'
                id='address'
                className={classes.textField}
                onChange={handleChangeRua}
              />
            </FormControl>
          </Grid>
          <Grid item xs={2}>
            <FormControl fullWidth>
              <TextField
                label='Número'
                id='number'
                className={classes.textField}
                onChange={handleChangeNumero}
              />
            </FormControl>
          </Grid>
          <Grid item xs={4}>
            <FormControl fullWidth>
              <TextField
                label='Bairro'
                id='bairro'
                className={classes.textField}
              />
            </FormControl>
          </Grid>
        </Grid>

        <Grid container direction='row'>
          <Grid item xs={6}>
            <FormControl fullWidth>
              <TextField
                label='Cidade'
                id='city'
                className={classes.textField}
                onChange={handleChangeCidade}
              />
            </FormControl>
          </Grid>
          <Grid item xs={2}>
            <FormControl>
              <TextField
                label='Estado'
                id='state'
                className={classes.textField}
              />
            </FormControl>
          </Grid>
          <Grid item xs={4}>
            <FormControl>
              <TextField label='Cep' id='cep' className={classes.textField} />
            </FormControl>
          </Grid>
        </Grid>
      </Grid>
    </Box>
  );
}
