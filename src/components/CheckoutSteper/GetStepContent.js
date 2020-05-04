import React from 'react';
import Step1 from './Step1';
import Step2 from './Step2';
import Step3 from './Step3';
import PropTypes from 'prop-types';

export default function GetStepContent(props) {
  const {
    activeStep,
    total,
    getCart,
    changeQuantity,
    payments,
    selectPaymentMethod,
    setFormState,
    formState,
  } = props;
  switch (activeStep) {
    case 0:
      return (
        <div>
          <Step1
            total={total}
            getCart={getCart}
            changeQuantity={changeQuantity}
          />
        </div>
      );
    case 1:
      return (
        <div>
          <Step2 setFormState={setFormState} formState={formState} />
        </div>
      );
    case 2:
      return (
        <div>
          <Step3
            payments={payments}
            selectPaymentMethod={selectPaymentMethod}
          />
        </div>
      );
    default:
      return <div id='unknow-step'>'Passo desconhecido'</div>;
  }
}
GetStepContent.propTypes = {
  step: PropTypes.number,
};
