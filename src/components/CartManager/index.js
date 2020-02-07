import { Component } from 'react';

const CART_NAME = 'cart';

export default class index extends Component {
  state = {
    loading: true,
    error: false,
    products: [],
    total: 0,
    payments: []
  };

  componentDidMount() {
    this.loadProducts();
    this.loadPayment();
  }

  loadPayment() {
    fetch('https://abi-bus-api.herokuapp.com/api/paymentMethods')
      .then(data =>
        data.json().then(json => {
          json.map(jsonItem => (jsonItem['selected'] = false));
          this.setState({ payments: json });
        })
      )
      .catch(error => {
        console.log(error);
      });
  }

  loadProducts() {
    // this.setState({ loading: true });
    fetch('https://abi-bus-api.herokuapp.com/api/products')
      .then(data =>
        data.json().then(json => {
          this.setState({
            loading: false,
            products: json.map(product => ({ ...product, quantity: 0 }))
          });
          this.loadCart();
        })
      )
      .catch(error => {
        console.log(error);
        this.setState({ loading: false, error: true });
      });
  }

  changeQuantity(productId, newQuantity) {
    const quantity = newQuantity < 0 ? 0 : newQuantity;
    const products = this.state.products;

    const product = products.find(product => product.id === productId);
    if (product) {
      product.quantity = quantity;
      this.setState({ products });
      this.calcTotal();
      this.saveCart();
    }
  }

  selectPaymentMethod(method) {
    const newPaymentArray = this.state.payments;
    newPaymentArray.map(item => {
      if (item.id === method) {
        item.selected = true;
      } else {
        item.selected = false;
      }
      return 0;
    });
    this.setState({ payments: newPaymentArray });
  }

  calcTotal() {
    let total = 0;
    this.getCart().forEach(item => {
      total += item.quantity * item.price;
    });

    this.setState({ total });
  }

  getCart() {
    return this.state.products
      .filter(product => product.quantity > 0)
      .map(product => {
        return {
          id: product.id,
          title: product.title,
          price: product.price,
          quantity: product.quantity,
          images: product.images[0]
        };
      });
  }

  mergeCart(cart) {
    const products = this.state.products;

    cart.forEach(item => {
      const product = products.find(product => product.id === item.id);
      if (product) {
        product.quantity = item.quantity;
      }
    });

    this.setState({ products });
    this.calcTotal();
    this.saveCart();
  }

  saveCart() {
    localStorage.setItem(CART_NAME, JSON.stringify(this.getCart()));
  }

  loadCart() {
    const cart = localStorage.getItem(CART_NAME);
    if (cart) {
      this.mergeCart(JSON.parse(cart));
    }
  }

  managerState(stateName, stateValue) {
    console.log('stateName ', stateName);
    console.log('stateValue ', stateValue);

    this.setState({ loading: true });
    // this.setState({ [stateName]: stateValue });
  }

  render() {
    const { children } = this.props;
    const { products, total, loading, payments } = this.state;
    return children(
      loading,
      products,
      total,
      this.getCart.bind(this),
      this.changeQuantity.bind(this),
      payments,
      this.selectPaymentMethod.bind(this),
      this.managerState.bind(this)
    );
  }
}
