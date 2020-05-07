import React, { useState, useEffect } from 'react';
import { NavLink } from 'react-router-dom';
import GetStepContent from './GetStepContent';
import NavBarTop from '../NavBarTop';
import Success from '../Success';
import useStyles from './styles';
import {
  Stepper,
  Step,
  StepLabel,
  Button,
  Typography,
  Grid,
  Box,
  Tooltip,
} from '@material-ui/core';

function getSteps() {
  return ['Resumo do pedido', 'Detalhes de entrega', 'Pagamento'];
}

export default function CheckoutStepper(props) {
  useEffect(() => {
    activeStep === steps.length && placeOrder();
  });

  const {
    getCart,
    total,
    payments,
    selectPaymentMethod,
    changeQuantity,
  } = props;
  const classes = useStyles();
  const [showStepper, setShowStepper] = useState(true);
  const [activeStep, setActiveStep] = useState(0);
  const [order, setOrder] = useState(null);
  const steps = getSteps();
  const [formState, setFormState] = useState({
    nome: undefined,
    rua: undefined,
    cep: undefined,
    numero: undefined,
    estado: undefined,
    cidade: undefined,
    bairro: undefined,
  });

  useEffect(() => {
    activeStep === steps.length && placeOrder();
  });

  const placeOrder = () => {
    setShowStepper(false);
    const customer = localStorage.getItem('user');
    const order = {
      products: getCart(),
      paymentMethod: payments.find((payment) => payment.selected === true),
      customer: customer.id,
      shippingAddress: formState,
    };
    localStorage.setItem('order', JSON.stringify(order));
    fetch('https://abi-bus-api.herokuapp.com/api/orders', {
      method: 'POST',
      body: localStorage.getItem('order'),
    }).then((response) => {
      if (response.ok) {
        console.log('order ok', localStorage.getItem('order'));
        localStorage.removeItem('cart', 'order');
        setOrder(true);
      }
    });
  };

  const checkPayment = () => {
    return payments.some((payment) => payment.selected === true);
  };

  const handleNext = (step) => {
    console.log('step => ', step);
    if (validForm(activeStep, checkPayment, getCart, formState, step)) {
      setActiveStep((prevActiveStep) => prevActiveStep + 1);
    }
  };

  const handleBack = () => {
    setActiveStep((prevActiveStep) => prevActiveStep - 1);
  };

  return (
    <div className={classes.root}>
      <NavBarTop
        id='navbar-checkout'
        total={total}
        getCart={getCart}
        changeQuantity={changeQuantity}
        showCart={false}
      />
      {showStepper ? (
        <Box boxShadow={2}>
          <Stepper activeStep={activeStep}>
            {steps.map((label, index) => {
              const stepProps = {};
              const labelProps = {};
              return (
                <Step key={index} {...stepProps}>
                  <StepLabel {...labelProps}>
                    <Typography
                      id={`active-step-${index}`}
                      className={
                        activeStep === index ? null : classes.stepperTitle
                      }
                      variant='h3'
                      color='primary'
                    >
                      {label}
                    </Typography>
                  </StepLabel>
                </Step>
              );
            })}
          </Stepper>
        </Box>
      ) : null}

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
              setFormState={setFormState}
              formState={formState}
            />

            <Grid container style={{ marginTop: 16 }} justify='center' xs={12}>
              <Grid item xs={6}>
                {' '}
                {activeStep === 0 ? (
                  <NavLink style={{ textDecoration: 'none' }} to='/'>
                    <Button
                      id='button-buy'
                      className={classes.buttonBack}
                      variant='contained'
                      type='submit'
                      color='secondary'
                    >
                      <Typography
                        id='label-buy'
                        className={classes.typoButton}
                        variant='h3'
                        color='primary'
                      >
                        Continuar Comprando
                      </Typography>
                    </Button>
                  </NavLink>
                ) : (
                  <Button
                    id='button-back'
                    variant='contained'
                    disabled={activeStep === 0}
                    color='secondary'
                    onClick={handleBack}
                    className={classes.buttonBack}
                  >
                    <Typography
                      id='label-back'
                      className={classes.typoButton}
                      variant='h3'
                      color='primary'
                    >
                      Voltar
                    </Typography>
                  </Button>
                )}
              </Grid>

              <Grid container xs={6} justify='flex-end'>
                <pre>
                  Valor pre{' '}
                  {validForm(activeStep, checkPayment, getCart, formState)}
                </pre>
                <Tooltip title='Por favor, preencha todos campos'>
                  <span>
                    <Button
                      id='button-order-disabled'
                      variant='contained'
                      color='secondary'
                      onClick={handleNext(activeStep)}
                      disabled={
                        (activeStep === 0 && !getCart().length) ||
                        (activeStep === 2 && !checkPayment())
                      }
                      className={classes.button}
                    >
                      <Typography
                        id='label-order-disabled'
                        className={classes.typoButton}
                        variant='h3'
                        color='primary'
                      >
                        {activeStep === steps.length - 1
                          ? 'Finalizar pedido'
                          : 'Confirmar pedido'}
                      </Typography>
                    </Button>
                  </span>
                </Tooltip>
              </Grid>
            </Grid>
          </div>
        )}
      </div>
    </div>
  );
}

function validForm(activeStep, checkPayment, getCart, formState, step) {
  debugger;

  switch (step) {
    case 0:
      return activeStep === 0 && getCart().length > 0;
      break;
    case 1:
      return (
        (activeStep === 1 &&
          formState.nome &&
          formState.bairro &&
          formState.cep &&
          formState.estado &&
          formState.rua &&
          formState.cidade &&
          formState.numero &&
          formState.cep &&
          formState.cep.length === 9) ||
        (activeStep === 2 && checkPayment())
      );
      break;
    case 2:
      return activeStep === 2 && checkPayment();
      break;
    default:
      break;
  }
  /* return (
    (activeStep === 0 && getCart().length > 0) ||
    (activeStep === 1 &&
      formState.nome &&
      formState.bairro &&
      formState.cep &&
      formState.estado &&
      formState.rua &&
      formState.cidade &&
      formState.numero &&
      formState.cep &&
      formState.cep.length === 9) ||
    (activeStep === 2 && checkPayment())
  ); */
}

function finalStep(classes, order) {
  if (order) {
    return <Success />;
  }
  if (order !== null) {
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
