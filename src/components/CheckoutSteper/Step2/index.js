import React, { useState } from 'react';
import { TextField, Grid, Box, FormControl } from '@material-ui/core';
import useStyles from './style';

export default function Step2() {
  const classes = useStyles();
  const [rua, setRua] = useState('');
  const [numero, setNumero] = useState('');
  const [cidade, setCidade] = useState('');

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
        sm
        style={{
          paddingBottom: '50px'
        }}
      >
        <Grid item xs={12}>
          <FormControl fullWidth>
            <TextField
              id='margin-none'
              label='Nome completo'
              className={classes.textField}
              color='#000'
            />
          </FormControl>
        </Grid>
        <Grid container xs={12} direction='row'>
          <Grid item xs={6}>
            <FormControl fullWidth>
              <TextField
                label='Rua'
                id='margin-none'
                className={classes.textField}
                onChange={handleChangeRua}
              />
            </FormControl>
          </Grid>
          <Grid item xs={2}>
            <FormControl fullWidth>
              <TextField
                label='Número'
                id='margin-none'
                className={classes.textField}
                onChange={handleChangeNumero}
              />
            </FormControl>
          </Grid>
          <Grid item xs={4}>
            <FormControl fullWidth>
              <TextField
                label='Bairro'
                id='margin-none'
                className={classes.textField}
              />
            </FormControl>
          </Grid>
        </Grid>

        <Grid container xs={12} direction='row'>
          <Grid item xs={6}>
            <FormControl fullWidth>
              <TextField
                label='Cidade'
                id='margin-none'
                className={classes.textField}
                onChange={handleChangeCidade}
              />
            </FormControl>
          </Grid>
          <Grid item xs={2}>
            <FormControl>
              <TextField
                label='Estado'
                id='margin-none'
                className={classes.textField}
              />
            </FormControl>
          </Grid>
          <Grid item xs={4}>
            <FormControl>
              <TextField
                label='Cep'
                id='margin-none'
                className={classes.textField}
              />
            </FormControl>
          </Grid>
        </Grid>
      </Grid>
    </Box>
  );
}
