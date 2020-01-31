import React, { useState, useEffect, Component } from 'react';
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
    changeQuantity,
    payments,
    selectPaymentMethod
  } = props;
  const classes = useStyles();
  const [activeStep, setActiveStep] = useState(0);
  const [enabledButton, setenabledButton] = useState(false);
  const steps = getSteps();

  useEffect(() => {
    payments.find(item => {
      setenabledButton(item.selected);
      return item.selected;
    });
  });

  const handleNext = () => {
    setActiveStep(prevActiveStep => prevActiveStep + 1);
  };

  const handleBack = () => {
    setActiveStep(prevActiveStep => prevActiveStep - 1);
  };

  return (
    <div className={classes.root}>
      <Box boxShadow={2}>
        <Stepper activeStep={activeStep} connector={false}>
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
          <div>
            <Typography className={classes.instructions}>
              Seu pedido foi realizado com sucesso!
            </Typography>
          </div>
        ) : (
          <div>
            <Typography className={classes.instructions}>
              <GetStepContent
                activeStep={activeStep}
                total={total}
                getCart={getCart}
                changeQuantity={changeQuantity}
                payments={payments}
                selectPaymentMethod={selectPaymentMethod}
              />
            </Typography>
            <Grid container justify='space-between'>
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
              {/*renderezar dois botoes diferentes*/}

              <Button
                variant='contained'
                color='secondary'
                disabled={enabledButton}
                onClick={handleNext}
                className={classes.button}
              >
                <Typography variant='h3' color='primary'>
                  {activeStep === steps.length - 1
                    ? 'Finalizar pedido'
                    : 'Confirmar pedido'}
                </Typography>
              </Button>
            </Grid>
          </div>
        )}
      </div>
    </div>
  );
}
