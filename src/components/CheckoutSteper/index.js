import React, { useState } from 'react';

export default function CheckoutSteper(props) {
 const [step, setStep] = useState(1);
    
      // Proceed to next step
      nextStep = () => {
        setStep(step + 1);
      };
    
      // Go back to prev step
      prevStep = () => {
        setStep(step - 1);
      };
    
      return(
          <div>
              {
                  switch(step) {
                    case 1:
                      return (
                        <div>Step 1</div>
                      );
                    case 2:
                      return (
                        <div>Step 2</div>
                    case 3:
                      return (
                        <div>Step 3</div>
                      );
                    case 4:
                      return <Success />;
                  }
              }
          </div>
        
      );
}
