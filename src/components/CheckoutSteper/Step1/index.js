import React, { Component } from 'react';

export class Step1 extends Component {
  continue = e => {
    e.preventDefault();
    this.props.nextStep();
  };

  back = e => {
    e.preventDefault();
    this.props.prevStep();
  };

  render() {
    return (
      <React.Fragment>
        <div>STEP 1</div>
      </React.Fragment>
    );
  }
}

export default Step1;
