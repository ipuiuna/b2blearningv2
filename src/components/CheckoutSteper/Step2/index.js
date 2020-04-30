import React, { useState, useEffect } from 'react';
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
  const [numeroLocal, setNumeroLocal] = useState('');
  const [cepLocal, setCepLocal] = useState('');
  const [nomeLocal, setNomeLocal] = useState('');
  const {
    setNumero,
    setRua,
    setCidade,
    setNome,
    setBairro,
    setEstado,
    setCep,
    setErrorCep,
    errorCep,
    setErrorNome,
  } = props;

  const handleChangeRua = (evt) => {
    setRua(evt.target.value);
  };

  const handleChangeNumero = (evt) => {
    setNumeroLocal(evt.target.value);
  };

  const handleChangeCidade = (evt) => {
    setCidade(evt.target.value);
  };

  const handleChangeNome = (evt) => {
    setNomeLocal(evt.target.value);
  };

  const handleChangeBairro = (evt) => {
    setBairro(evt.target.value);
  };

  const handleChangeEstado = (evt) => {
    setEstado(evt.target.value);
  };

  const handleChangeCep = (evt) => {
    setCepLocal(evt.target.value.replace('-', ''));
  };

  useEffect(() => {
    setNumero(numeroLocal);

    if (nomeLocal.length <= 128) {
      setErrorNome(false);
      setNome(nomeLocal);
    } else if (nomeLocal.length > 128 || nomeLocal === '') {
      setErrorNome(true);
    }

    if (cepLocal.length === 8) {
      setErrorCep(false);
      setCep(cepLocal);
    } else if (cepLocal.length < 8 && cepLocal) {
      setErrorCep(true);
    }
  }, [
    cepLocal,
    nomeLocal,
    setCep,
    setErrorCep,
    setErrorNome,
    setNome,
    numeroLocal,
    setNumero,
  ]);

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
              id='name'
              helperText={
                nomeLocal.length > 128
                  ? 'Numero de caracteres máximo atingido.'
                  : nomeLocal === ''
                  ? 'Por favor preencha seu nome'
                  : ''
              }
              label='Nome completo'
              onChange={handleChangeNome}
            />
          </Grid>
          <Grid item sm={6} xs={12}>
            <TextControl label='Rua' id='address' onChange={handleChangeRua} />
          </Grid>
          <Grid item sm={2} xs={12}>
            <TextControl
              label='Número'
              id='number'
              placeholder='123'
              value={numberMask(numeroLocal)}
              onChange={handleChangeNumero}
            />
          </Grid>
          <Grid item sm={4} xs={12}>
            <TextControl
              label='Bairro'
              id='bairro'
              onChange={handleChangeBairro}
            />
          </Grid>
          <Grid item sm={6} xs={12}>
            <TextControl
              label='Cidade'
              id='city'
              onChange={handleChangeCidade}
            />
          </Grid>
          <Grid item sm={3} xs={12}>
            <TextControl
              label='Estado'
              id='state'
              onChange={handleChangeEstado}
            />
          </Grid>
          <Grid item sm={3} xs={12}>
            <TextControl
              label='Cep'
              id='cep'
              placeholder='00000-000'
              value={cepMask(cepLocal)}
              helperText={errorCep ? 'Por favor digite um CEP válido.' : ''}
              onChange={handleChangeCep}
            />
          </Grid>
        </Grid>
      </Grid>
    </Box>
  );
}
