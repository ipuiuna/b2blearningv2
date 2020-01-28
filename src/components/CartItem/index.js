import React from 'react';
import PropTypes from 'prop-types';
import { Card, Typography, Grid } from '@material-ui/core';
import { makeStyles } from '@material-ui/core/styles';
import QuantityEditor from '../QuantityEditor';

const useStyles = makeStyles({
  card: {
    display: 'flex',
    width: '310px',
    height: '190px',
    margin: '12px',
    backgroundColor: '#fff',
    alignContent: 'space-around',
    flexDirection: 'column',
    justifyContent: 'space-between',
    padding: '10px 0px'
  },
  textField: {
    padding: 16,
    flex: 2,
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'space-between',
    alignItems: 'flex-start'
  },
  typographyQuantityBox: {
    textAlign: 'center'
  },
  buttonStyled: {
    width: 50,
    alignSelf: 'center',
    padding: 2
  }
});

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
    <Card className={classes.card}>
      <Grid container direction='row' justify='space-between'>
        <Grid direction='column'>
          <Grid item>
            <img
              style={{ width: 64, height: 65 }}
              src={
                'https://emporiodacerveja.vteximg.com.br/arquivos/ids/174971-500-500/Budweiser-330-6pack.png?v=637067545578500000'
              }
              alt={'img description'}
            ></img>
          </Grid>
        </Grid>
        <Grid direction='column'>
          <Grid item>
            <Typography color='primary'>{item.title}</Typography>
            <Typography color='primary'>
              {`$ ${item.price.toFixed(2)}`}
            </Typography>
            <Grid item>
              <QuantityEditor
                incItem={incItem}
                decItem={decItem}
                quantity={item.quantity}
                min={1}
              ></QuantityEditor>

              {/* <Typography color='primary'>R$ {total.toFixed(2)}</Typography> */}
            </Grid>
          </Grid>
        </Grid>
      </Grid>
    </Card>
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
