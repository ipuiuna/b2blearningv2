import React, { Component } from 'react';
import Step1 from './Step1';
import Step2 from './Step2';
import Step3 from './Step3';

export class CheckoutSteper extends Component {
  state = {
    step: 1,
    activeStep: 0
  };

  // Proceed to next step
  nextStep = () => {
    const { step, activeStep } = this.state;
    this.setState({
      step: step + 1,
      activeStep: activeStep + 1
    });
  };

  // Go back to prev step
  prevStep = () => {
    const { step, activeStep } = this.state;
    this.setState({
      step: step - 1,
      activeStep: activeStep - 1
    });
  };

  render() {
    const { step } = this.state;
    switch (step) {
      case 1:
        return <Step1 nextStep={this.nextStep} prevStep={this.prevStep} />;
      case 2:
        return <Step2 nextStep={this.nextStep} prevStep={this.prevStep} />;
      case 3:
        return <Step3 nextStep={this.nextStep} prevStep={this.prevStep} />;
      case 4:
        return <div>Sucesso</div>;
    }
  }
}

export default CheckoutSteper;
