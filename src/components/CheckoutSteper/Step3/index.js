import React, { useEffect } from 'react';
import {
  Box,
  Grid,
  FormControl,
  FormControlLabel,
  RadioGroup,
  Radio
} from '@material-ui/core';

export default function Step3(props) {
  const { payments, selectPaymentMethod } = props;
  console.log('payments Step 3 ', payments);

  return (
    <Box
      boxShadow={2}
      style={{
        padding: '5% 15% 20% 15%',
        backgroundColor: 'rgba(229, 229, 229, 0.35)'
      }}
    >
      <RadioGroup>
        <Grid
          direction='row'
          justify='space-around'
          container
          sm
          style={{
            paddingBottom: '50px'
          }}
        >
          {payments.map((item, idx) => (
            <Grid item key={idx}>
              <FormControl>
                <FormControlLabel
                  value={item.id}
                  control={
                    <Radio
                      color='primary'
                      checked={item.selected}
                      onClick={() => selectPaymentMethod(item.id)}
                    />
                  }
                  label={item.name}
                />
              </FormControl>
            </Grid>
          ))}
        </Grid>
      </RadioGroup>
    </Box>
  );
}
