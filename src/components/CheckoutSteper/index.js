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
  Box
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
    changeQuantity
  } = props;
  const classes = useStyles();
  const [showStepper, setShowStepper] = useState(true);
  const [activeStep, setActiveStep] = useState(0);
  const [rua, setRua] = useState('');
  const [numero, setNumero] = useState('');
  const [cidade, setCidade] = useState('');
  const [order, setOrder] = useState(false);
  const steps = getSteps();

  const placeOrder = () => {
    setShowStepper(false);
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
        console.log('order ok', localStorage.getItem('order'));
        localStorage.removeItem('cart', 'order');
        setOrder(true);
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
      <NavBarTop
        total={total}
        getCart={getCart}
        changeQuantity={changeQuantity}
        itIsToShowTheCart={false}
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
                    <Typography variant='h3' color='primary'>
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
              setRua={setRua}
              setNumero={setNumero}
              setCidade={setCidade}
            />

            <Grid container style={{ marginTop: 16 }} justify='space-between'>
              <Grid item xs={6}>
                {' '}
                {activeStep === 0 ? (
                  <NavLink style={{ textDecoration: 'none' }} to='/'>
                    <Button
                      className={classes.buttonBack}
                      variant='contained'
                      type='submit'
                      color='secondary'
                    >
                      <Typography variant='h3' color='primary'>
                        Voltar
                      </Typography>
                    </Button>
                  </NavLink>
                ) : (
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
                )}
              </Grid>

              <Grid item xs={6}>
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
            </Grid>
          </div>
        )}
      </div>
    </div>
  );
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
