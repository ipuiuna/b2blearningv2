import React from 'react';
import { TextField, Grid, Box } from '@material-ui/core';
import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles(theme => ({
  textField: {
    marginLeft: theme.spacing(1),
    marginRight: theme.spacing(1)
  }
}));

export default function Step2() {
  const classes = useStyles();

  return (
    <Box boxShadow={2}>
      <Grid
        direction='column'
        container
        style={{
          backgroundColor: 'rgba(229, 229, 229, 0.35)',
          paddingBottom: '50px'
        }}
      >
        <Grid item style={{ width: '80%' }}>
          <TextField
            id='margin-none'
            label='Nome'
            className={classes.textField}
            style={{ width: '100%' }}
          />
        </Grid>
        <Grid item style={{ width: '80%' }}>
          <TextField
            label='Rua'
            id='margin-none'
            style={{ width: '45%' }}
            className={classes.textField}
          />
          <TextField
            label='Número'
            id='margin-none'
            style={{ width: '10%' }}
            className={classes.textField}
          />
          <TextField
            label='Bairro'
            id='margin-none'
            style={{ width: '40%' }}
            className={classes.textField}
          />
        </Grid>
        <Grid item>
          <TextField
            label='Cidade'
            id='margin-none'
            className={classes.textField}
          />
          <TextField
            label='Estado'
            id='margin-none'
            className={classes.textField}
          />
          <TextField
            label='Cep'
            id='margin-none'
            className={classes.textField}
          />
        </Grid>
      </Grid>
    </Box>
  );
}
