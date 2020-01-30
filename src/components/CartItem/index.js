import React from 'react';
import PropTypes from 'prop-types';
import { Paper, Typography, Grid, ButtonBase } from '@material-ui/core';
import QuantityEditor from '../QuantityEditor';
import DeleteIcon from '@material-ui/icons/Delete';
import useStyles from './styles';

const CartItem = props => {
  const classes = useStyles();
  const { item, changeQuantity } = props;

  const incItem = changeQuantity
    ? () => {
        console.log('clicou no dec');
        changeQuantity(item.id, item.quantity + 1);
      }
    : null;

  const decItem = changeQuantity
    ? () => {
        if (item.quantity > 1) {
          changeQuantity(item.id, item.quantity - 1);
        }
      }
    : null;

  const removeItem = changeQuantity ? () => changeQuantity(item.id, 0) : null;

  return item ? (
    <Paper className={classes.paper}>
      <Grid container spacing={2}>
        <Grid item>
          <ButtonBase className={classes.image}>
            <img className={classes.img} alt='complex' src={item.images} />
          </ButtonBase>
        </Grid>
        <Grid item xs={12} sm container>
          <Grid item xs container direction='column' spacing={2}>
            <Grid item xs>
              <Typography
                className={classes.titleMargin}
                gutterBottom
                color='primary'
                variant='h3'
              >
                {item.title}
              </Typography>
              <Typography variant='h3' color='primary'>
                R$ {item.price}
              </Typography>
            </Grid>
            <Grid container item justify='center'>
              <QuantityEditor
                incItem={incItem}
                decItem={decItem}
                quantity={item.quantity}
                min={1}
              ></QuantityEditor>
            </Grid>
          </Grid>
          <Grid item>
            <Typography
              color='error'
              style={{ cursor: 'pointer' }}
              onClick={removeItem}
            >
              <DeleteIcon />
            </Typography>
          </Grid>
        </Grid>
      </Grid>
    </Paper>
  ) : null;
};

// proptypes
CartItem.propTypes = {
  editable: PropTypes.bool
};

CartItem.defaultProps = {
  editable: true
};

export default CartItem;
