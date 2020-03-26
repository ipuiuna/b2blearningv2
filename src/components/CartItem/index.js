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
    <Paper id='paper-cart-item' className={classes.paper}>
      <Grid className={classes.content} container direction='row'>
        <Grid item xs={3}>
          <ButtonBase id='item-img' className={classes.image}>
            <img className={classes.img} alt='complex' src={item.images} />
          </ButtonBase>
        </Grid>
        <Grid container direction='column'>
          <Grid container justify='flex-end'>
            <Typography
              xs={9}
              color='error'
              style={{ cursor: 'pointer' }}
              onClick={removeItem}
            >
              <DeleteIcon id='delete-icon' />
            </Typography>
          </Grid>

          <Typography
            id='item-title'
            className={classes.titleMargin}
            gutterBottom
            color='primary'
            variant='h3'
          >
            {item.title}
          </Typography>
        </Grid>
      </Grid>
      <Grid
        container
        direction='row'
        className={classes.price}
        justify='center'
      >
        <Typography id='item-price' variant='h3' color='primary' xs={12}>
          R$ {item.price}
        </Typography>
      </Grid>
      <Grid container direction='row' justify='center'>
        <Grid item xs={12}>
          <QuantityEditor
            id='qtdy-editor'
            incItem={incItem}
            decItem={decItem}
            quantity={item.quantity}
            min={1}
          ></QuantityEditor>
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
