import React from 'react';
import useStyles from './styles';
import AddIcon from '@material-ui/icons/Add';
import RemoveIcon from '@material-ui/icons/Remove';
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
        <RemoveIcon color={quantity <= min ? 'disabled' : 'primary'} />
      </Button>

      <Box
        style={{
          width: 80,
          boxShadow:
            '0px 3px 1px -2px rgba(0,0,0,0.2), 0px 2px 2px 0px rgba(0,0,0,0.14), 0px 1px 5px 0px rgba(0,0,0,0.12)'
        }}
      >
        <Typography
          color='primary'
          className={classes.typographyQuantityBox}
          variant='h2'
        >
          {quantity}
        </Typography>
      </Box>

      <Button
        className={classes.buttonStyled}
        onClick={incItem}
        variant='contained'
        color='secondary'
      >
        <AddIcon color='primary' />
      </Button>
    </ButtonGroup>
  );
}
