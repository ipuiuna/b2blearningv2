import React from "react";
import { TextField, Grid, Box, FormControl } from "@material-ui/core";
import useStyles from "./styles";
import { cpfMask } from "./mask";

const TextControl = (props) => {
  const classes = useStyles();
  return (
    <FormControl fullWidth>
      <TextField className={classes.textField} color='primary' {...props} />
    </FormControl>
  );
};

export default function Step2(props) {
  const {
    setNumero,
    setRua,
    setCidade,
    setNome,
    setBairro,
    setEstado,
    setCep,
  } = props;

  const handleChangeRua = (evt) => {
    setRua(evt.target.value);
  };

  const handleChangeNumero = (evt) => {
    setNumero(evt.target.value);
  };

  const handleChangeCidade = (evt) => {
    setCidade(evt.target.value);
  };

  const handleChangeNome = (evt) => {
    setNome(evt.target.value);
  };

  const handleChangeBairro = (evt) => {
    setBairro(evt.target.value);
  };

  const handleChangeEstado = (evt) => {
    setEstado(evt.target.value);
  };

  const handleChangeCep = (evt) => {
    setCep(cpfMask(evt.target.value));
  };

  return (
    <Box
      boxShadow={2}
      style={{ padding: "0 10%", backgroundColor: "rgba(229, 229, 229, 0.35)" }}
    >
      <Grid
        direction='column'
        container
        style={{
          paddingBottom: "50px",
        }}
      >
        <Grid container direction='row'>
          <Grid item xs={12}>
            <TextControl
              id='name'
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
              type='number'
              id='number'
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
              onChange={handleChangeCep}
              type='number'
            />
          </Grid>
        </Grid>
      </Grid>
    </Box>
  );
}
