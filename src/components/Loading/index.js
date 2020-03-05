import React from 'react';
import { Grid, LinearProgress } from '@material-ui/core';

export default function Loading() {
  return (
    <Grid container justify='center'>
      <LinearProgress
        id='loading-bar'
        color='secondary'
        style={{ top: '64px', position: 'fixed', width: '100%', zIndex: 1200 }}
      />
    </Grid>
  );
}
