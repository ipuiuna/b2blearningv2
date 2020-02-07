import React, { useState, useEffect } from 'react';
import { NavLink } from 'react-router-dom';
import GetStepContent from './GetStepContent';
import useStyles from './styles';
import {
  Stepper,
  Step,
  StepLabel,
  Button,
  Typography,
  Grid,
  Box
} from '@material-ui/core';

function getSteps() {
  return ['Resumo do pedido', 'Detalhes de entrega', 'Pagamento'];
}

export default function CheckoutStepper(props) {
  const {
    getCart,
    total,
    payments,
    loading,
    selectPaymentMethod,
    managerState
  } = props;
  const classes = useStyles();
  const [activeStep, setActiveStep] = useState(0);
  const [rua, setRua] = useState('');
  const [numero, setNumero] = useState('');
  const [cidade, setCidade] = useState('');
  const [order, setOrder] = useState(null);
  const steps = getSteps();

  useEffect(() => {
    activeStep === steps.length && placeOrder();
  });

  const placeOrder = () => {
    managerState('loading', true);
    const customer = localStorage.getItem('user');
    const order = {
      products: getCart(),
      paymentMethod: payments.find(payment => payment.selected === true),
      customer: customer.id,
      shippingAddress: {
        address: rua,
        number: numero,
        city: cidade
      }
    };
    localStorage.setItem('order', JSON.stringify(order));
    fetch('https://abi-bus-api.herokuapp.com/api/orders', {
      method: 'POST',
      body: localStorage.getItem('order')
    }).then(response => {
      if (response.ok) {
        localStorage.removeItem('cart', 'order');
        setOrder(true);
        managerState('loading', false);
      }
    });
  };

  const checkPayment = () => {
    return payments.some(payment => payment.selected === true);
  };

  const handleNext = () => {
    setActiveStep(prevActiveStep => prevActiveStep + 1);
  };

  const handleBack = () => {
    setActiveStep(prevActiveStep => prevActiveStep - 1);
  };

  return (
    <div className={classes.root}>
      <Box boxShadow={2}>
        <Stepper activeStep={activeStep}>
          {steps.map((label, index) => {
            const stepProps = {};
            const labelProps = {};
            return (
              <Step key={index} {...stepProps}>
                <StepLabel {...labelProps}>
                  <Typography variant='h3' color='primary'>
                    {label}
                  </Typography>
                </StepLabel>
              </Step>
            );
          })}
        </Stepper>
      </Box>

      <div>
        {activeStep === steps.length ? (
          <div>{finalStep(classes, order)}</div>
        ) : (
          <div>
            <GetStepContent
              activeStep={activeStep}
              total={total}
              getCart={getCart}
              payments={payments}
              selectPaymentMethod={selectPaymentMethod}
              setRua={setRua}
              setNumero={setNumero}
              setCidade={setCidade}
            />

            <Grid container style={{ marginTop: 16 }} justify='space-between'>
              <Button
                variant='contained'
                disabled={activeStep === 0}
                color='secondary'
                onClick={handleBack}
                className={classes.buttonBack}
              >
                {activeStep === 0 ? (
                  <Typography variant='h3'>Voltar</Typography>
                ) : (
                  <Typography variant='h3' color='primary'>
                    Voltar
                  </Typography>
                )}
              </Button>

              {(activeStep === 2 && !checkPayment()) ||
              (activeStep === 0 && getCart().length === 0) ||
              (activeStep === 1 &&
                (rua === '' || cidade === '' || numero === '')) ? (
                <Button
                  variant='contained'
                  color='secondary'
                  disabled
                  className={classes.button}
                >
                  <Typography variant='h3' color='primary'>
                    {activeStep === steps.length - 1
                      ? 'Finalizar pedido'
                      : 'Confirmar pedido'}
                  </Typography>
                </Button>
              ) : (
                <Button
                  variant='contained'
                  color='secondary'
                  onClick={handleNext}
                  className={classes.button}
                >
                  <Typography variant='h3' color='primary'>
                    {activeStep === steps.length - 1
                      ? 'Finalizar pedido'
                      : 'Confirmar pedido'}
                  </Typography>
                </Button>
              )}
            </Grid>
          </div>
        )}
      </div>
    </div>
  );
}

function finalStep(classes, order) {
  if (order) {
    return successful(classes);
  } else if (order !== null) {
    return fail(classes);
  }
  return;
}

function fail(classes) {
  return (
    <Grid container justify='center'>
      <Typography className={classes.instructions}>
        Ocorreu um erro e seu pedido não pode ser processado, por favor tente
        novamente.
      </Typography>
    </Grid>
  );
}

function successful(classes) {
  return (
    <Grid direction='column'>
      <Grid container justify='center'>
        <Typography className={classes.instructions}>
          Seu pedido foi realizado com sucesso!
        </Typography>
      </Grid>
      <Grid container justify='center'>
        <NavLink style={{ textDecoration: 'none' }} to='/'>
          <Button variant='contained' type='submit' color='secondary'>
            <Typography variant='h3' color='primary'>
              Novo pedido
            </Typography>
          </Button>
        </NavLink>
      </Grid>
    </Grid>
  );
}
