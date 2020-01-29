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
    ? () => changeQuantity(item.id, item.quantity + 1)
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
      {console.log('item', item)}
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

/*

/* <button className='btn btn btn-danger' onClick={removeItem}>
                      <span className='btn-text-delete'>x</span>
                    </button> 
constructor(props) {
    super(props);
    this.state = {
      qtdy: 0,
      totals: 0
    };
  }

  static defaultProps = {
    itemId: '0',
    itemPrice: '0.00',
    itemTitle: 'none'
  };

  static propTypes = {
    itemId: PropTypes.string,
    itemPrice: PropTypes.number,
    itemTitle: PropTypes.string
  };

  componentDidMount() {
    this.props.itemsArray.forEach(item => {
      if (item.id === this.props.itemId) {
        this.setState({ qtdy: item.qtdy, totals: item.qtdy * item.price });
      }
    });
  }

  incrementQtdy = () => {
    const cart = JSON.parse(localStorage.getItem('cart'));
    cart.forEach(item => {
      if (item.id === this.props.itemId) {
        item.qtdy += 1;
        this.setState(
          {
            qtdy: this.state.qtdy + 1,
            totals: item.qtdy * item.price
          },
          () => {
            localStorage.setItem('cart', JSON.stringify(cart));
            this.props.updateTotals();
          }
        );

        return;
      }
    });
  };

  decrementQtdy = () => {
    const cart = JSON.parse(localStorage.getItem('cart'));
    if (this.state.qtdy > 1) {
      cart.forEach(item => {
        if (item.id === this.props.itemId) {
          item.qtdy -= 1;
          this.setState(
            {
              qtdy: this.state.qtdy - 1,
              totals: item.qtdy * item.price
            },
            () => {
              localStorage.setItem('cart', JSON.stringify(cart));
              this.props.updateTotals();
            }
          );
        }
      });
    }
  };

  deleteItem = () => {
    this.props.itemsArray.splice(this.props.itemKey, 1);
    this.props.itemsArray.forEach(item => {
      this.setState(
        {
          qtdy: this.props.itemQtdy
        },
        () => {
          this.props.updateTotals();
        }
      );
    });
    localStorage.setItem('cart', JSON.stringify(this.props.itemsArray));
    this.props.updateList();
  };
*/
