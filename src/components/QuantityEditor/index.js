import React from 'react';
import useStyles from './styles';
import { Button, Box, Typography, ButtonGroup } from '@material-ui/core';

export default function QuantityEditor(props) {
  const classes = useStyles();

  const { quantity, incItem, decItem, min } = props;
  return (
    <ButtonGroup aria-label='primary button group'>
      <Button
        className={classes.buttonStyled}
        onClick={decItem}
        disabled={quantity <= min}
        color='secondary'
        variant='contained'
      >
        <Typography variant='h2'>-</Typography>
      </Button>

      <Box className={classes.buttonStyled} boxShadow={2}>
        <Typography className={classes.typographyQuantityBox} variant='h2'>
          {quantity}
        </Typography>
      </Box>

      <Button
        className={classes.buttonStyled}
        onClick={incItem}
        variant='contained'
        color='secondary'
      >
        <Typography variant='h2'>+</Typography>
      </Button>
    </ButtonGroup>
  );
}
