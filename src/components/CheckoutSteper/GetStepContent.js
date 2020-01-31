import React from 'react';
import Step1 from './Step1';
import Step2 from './Step2';
import PropTypes from 'prop-types';

export default function GetStepContent(props) {
  const { activeStep, total, getCart, changeQuantity } = props;
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
          <Step2 />
        </div>
      );
    case 2:
      return <div>Step 3</div>;
    case 3:
      return <div>Pedido realizado com sucesso</div>;
    default:
      return 'Passo desconhecido';
  }
}
GetStepContent.propTypes = {
  step: PropTypes.number
};
