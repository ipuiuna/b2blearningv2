import React from 'react';
import useStyles from './styles';
import {
  Card,
  CardContent,
  Button,
  Box,
  Grid,
  Typography,
  ButtonGroup
} from '@material-ui/core';

export default function Product({ product, changeQuantity, getCart }) {
  // Challenge: create just one method to support both actions
  const incItem = changeQuantity
    ? () => changeQuantity(product.id, product.quantity + 1)
    : null;
  const decItem = changeQuantity
    ? () => changeQuantity(product.id, product.quantity - 1)
    : null;

  const classes = useStyles();
  const { title, price, description, productKey, images } = product;

  return (
    <Card className={classes.card}>
      <Grid container justify='center'>
        <img
          style={{ width: 257.72, height: 257.72 }}
          src={images[0]}
          alt={title}
        ></img>
      </Grid>

      <CardContent className={classes.content}>
        <Typography gutterBottom variant='h3' component='h2'>
          {title}
        </Typography>
        <Typography
          variant='h3'
          color='textSecondary'
          component='p'
          style={{ marginTop: 16 }}
        >
          R$ {price}
        </Typography>
      </CardContent>
      <Grid container justify='center'>
        <ButtonGroup aria-label='primary button group'>
          <Button
            className={classes.buttonSize}
            onClick={decItem}
            disabled={product.quantity === 0}
            variant='contained'
            size='small'
          >
            <Typography variant='h2'>-</Typography>
          </Button>

          <Box className={classes.boxSize} boxShadow={2}>
            <Typography className={classes.typographyQuantityBox} variant='h2'>
              {product.quantity}
            </Typography>
          </Box>

          <Button
            className={classes.buttonSize}
            onClick={incItem}
            variant='contained'
            size='small'
            color='secondary'
          >
            <Typography variant='h2'>+</Typography>
          </Button>
        </ButtonGroup>
      </Grid>
    </Card>

    // <Col lg={3}>
    //   <div className='card h-100'>
    //     <ProductCarousel productImages={product.images} />
    //     <div className='card-body'>
    //       <h4 className='card-title'>
    //         <a href='#'>{product.title}</a>
    //       </h4>
    //       <h5>${product.price}</h5>
    //       <p className='card-text'>{`${product.description.substring(
    //         0,
    //         100
    //       )}...`}</p>
    //     </div>
    //     <div className='card-footer'>
    //       <div className='row justify-content-center'>
    //         <button
    //           className='btn btn-primary'
    //           onClick={decItem}
    //           disabled={product.quantity === 0}
    //         >
    //           <span>-</span>
    //         </button>
    //         <div className='divider'></div>
    //         <input
    //           className='qty-field'
    //           id={`qty-field-${product.id}`}
    //           type='text'
    //           placeholder='0'
    //           value={product.quantity}
    //           readOnly
    //         />
    //         <div className='divider'></div>
    //         <button className='btn btn-primary' onClick={incItem}>
    //           <span>+</span>
    //         </button>
    //       </div>
    //     </div>
    //   </div>
    // </Col>
  );
}

/*
export class Product extends Component {
  constructor(props) {
    super(props);
    this.state = {
      qtdy: 0
    };
  }

  size = obj => {
    let size = 0,
      key;
    for (key in obj) {
      if (obj.hasOwnProperty(key)) size++;
    }
    return size;
  };

  componentDidMount() {
    const cartArrayItem = this.props.cartArray.filter(
      item => item.id === this.props.productId
    );

    if (this.size(cartArrayItem) > 0) {
      this.setState({ qtdy: cartArrayItem[0].qtdy });
    }
  }

  static defaultProps = {
    productKey: '0'
  };

  static propTypes = {
    productKey: PropTypes.string
  };

  incrementQtdy = () => {
    const cart = this.props.cartArray;

    if (cart.length === 0) {
      cart.push({
        id: this.props.productId,
        title: this.props.productTitle,
        price: this.props.productPrice,
        qtdy: 1
      });
      localStorage.setItem('cart', JSON.stringify(cart));
      this.setState({ qtdy: 1 });
      this.props.updateTotals();
    } else {
      for (let i = 0; i < cart.length; i++) {
        if (cart[i].id === this.props.productId) {
          cart[i].qtdy += 1;
          localStorage.setItem('cart', JSON.stringify(cart));
          this.setState({ qtdy: cart[i].qtdy });
          this.props.updateTotals();
          return;
        }
      }
      cart.push({
        id: this.props.productId,
        title: this.props.productTitle,
        price: this.props.productPrice,
        qtdy: 1
      });
      localStorage.setItem('cart', JSON.stringify(cart));
      this.setState({ qtdy: 1 });
      this.props.updateTotals();
    }
  };

  decrementQtdy = () => {
    const cart = this.props.cartArray;
    if (this.state.qtdy === 0) {
      this.deleteItem();
    }
    if (this.state.qtdy > 0) {
      this.setState(
        {
          qtdy: this.state.qtdy - 1
        },
        () => {
          for (let i = 0; i < cart.length; i++) {
            if (cart[i].id === this.props.productId) {
              cart[i].qtdy -= 1;
              localStorage.setItem('cart', JSON.stringify(cart));
              this.setState({ qtdy: cart[i].qtdy });
              this.props.updateTotals();
              return;
            }
          }
        }
      );
    }
  };

  deleteItem = () => {
    const cart = JSON.parse(localStorage.getItem('cart'));
    const index = cart.findIndex(x => x.id === this.props.itemId);
    if (index !== undefined) cart.splice(index, 1);
    localStorage.setItem('cart', JSON.stringify(cart));
    this.setState({
      qtdy: 0,
      totals: 0
    });
    this.props.updateTotals();
  };

  render() {
    const {
      productTitle,
      productPrice,
      productDescription,
      productId
    } = this.props;

    const { qtdy } = this.state;

    return (
      <Col lg={3}>
        <div className='card h-100'>
          <ProductCarousel productImages={this.props.productImages} />
          <div className='card-body'>
            <h4 className='card-title'>
              <a href='#'>{productTitle}</a>
            </h4>
            <h5>${productPrice}</h5>
            <p className='card-text'>{productDescription}</p>
          </div>
          <div className='card-footer'>
            <div className='row justify-content-center'>
              <button className='btn btn-primary' onClick={this.decrementQtdy}>
                <span>-</span>
              </button>
              <div className='divider'></div>
              <input
                className='qty-field'
                id={`qty-field-${productId}`}
                type='text'
                placeholder='0'
                value={qtdy}
                disabled
              />
              <div className='divider'></div>
              <button className='btn btn-primary' onClick={this.incrementQtdy}>
                <span>+</span>
              </button>
            </div>
          </div>
        </div>
      </Col>
    );
  }
}

export default Product;
*/
