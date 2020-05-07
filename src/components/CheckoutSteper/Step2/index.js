import React from 'react';
import { TextField, Grid, Box, FormControl } from '@material-ui/core';
import useStyles from './styles';
import { cepMask, numberMask } from './mask';

const TextControl = (props) => {
  const classes = useStyles();
  return (
    <FormControl fullWidth>
      <TextField className={classes.textField} color='primary' {...props} />
    </FormControl>
  );
};

export default function Step2(props) {
  const { setFormState, formState } = props;

  const handleChangeEvt = (evt) => {
    const fieldName = evt.target.name;
    if (evt.target.name !== 'cep') {
      setFormState({ ...formState, [fieldName]: evt.target.value });
    } else {
      if (evt.target.value.length > 9) {
        setFormState({ ...formState, [fieldName]: formState.cep });
      } else {
        setFormState({ ...formState, [fieldName]: evt.target.value });
      }
    }
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
          paddingBottom: '50px',
        }}
      >
        <Grid container direction='row'>
          <Grid item xs={12}>
            <TextControl
              name='nome'
              id='name'
              helperText={
                formState.nome && formState.nome.length > 128
                  ? 'Numero de caracteres máximo atingido.'
                  : formState.nome === ''
                  ? 'Por favor preencha seu nome'
                  : ''
              }
              label='Nome completo'
              onChange={handleChangeEvt}
            />
          </Grid>
          <Grid item sm={6} xs={12}>
            <TextControl
              label='Rua'
              helperText={
                formState.rua === '' ? 'Digite sua rua por favor.' : ''
              }
              id='address'
              name='rua'
              onChange={handleChangeEvt}
            />
          </Grid>
          <Grid item sm={2} xs={12}>
            <TextControl
              label='Número'
              helperText={
                formState.numero === '' ? 'Digite seu número por favor.' : ''
              }
              id='number'
              placeholder='123'
              name='numero'
              value={numberMask(formState.numero)}
              onChange={handleChangeEvt}
            />
          </Grid>
          <Grid item sm={4} xs={12}>
            <TextControl
              label='Bairro'
              helperText={
                formState.bairro === '' ? 'Digite seu bairro por favor.' : ''
              }
              name='bairro'
              id='bairro'
              onChange={handleChangeEvt}
            />
          </Grid>
          <Grid item sm={6} xs={12}>
            <TextControl
              label='Cidade'
              helperText={
                formState.cidade === '' ? 'Digite sua cidade por favor.' : ''
              }
              name='cidade'
              id='city'
              onChange={handleChangeEvt}
            />
          </Grid>
          <Grid item sm={3} xs={12}>
            <TextControl
              label='Estado'
              name='estado'
              helperText={
                formState.estado === '' ? 'Digite seu estado por favor.' : ''
              }
              id='state'
              onChange={handleChangeEvt}
            />
          </Grid>
          <Grid item sm={3} xs={12}>
            <TextControl
              label='Cep'
              name='cep'
              id='cep'
              placeholder='00000-000'
              value={cepMask(formState.cep)}
              helperText={
                (formState.cep && formState.cep.length !== 9) ||
                formState.cep === ''
                  ? 'Por favor digite um CEP válido.'
                  : ''
              }
              onChange={handleChangeEvt}
            />
          </Grid>
        </Grid>
      </Grid>
    </Box>
  );
}
