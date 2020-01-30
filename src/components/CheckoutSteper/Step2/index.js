import React, { Component } from 'react';
import Button from '@material-ui/core/Button';

export class Step2 extends Component {
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
        <div>STEP 2</div>
        <Button color='secondary' variant='contained' onClick={this.back}>
          Back
        </Button>

        <Button color='primary' variant='contained' onClick={this.continue}>
          Continue
        </Button>
      </React.Fragment>
    );
  }
}

export default Step2;
